import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { env } from "@/lib/env.server";

export type IssuedPlan = "pro" | "lab" | "life";

const DEFAULT_PEPPER = "firstpass-heme-license-v1";
const DEFAULT_PIN = "heme-450";

/** Deployed / production must set real secrets — defaults never work there. */
export function licenseSecretsRequired(): boolean {
  return process.env.NODE_ENV === "production" || Boolean(env("GROK_PROJECT_ID"));
}

function resolvePepper(): string {
  const v = env("LICENSE_PEPPER");
  if (v) return v;
  if (licenseSecretsRequired()) {
    throw new Error(
      "LICENSE_PEPPER is unset. Refusing to mint or verify keys with the default pepper in production.",
    );
  }
  return DEFAULT_PEPPER;
}

function resolvePin(): string {
  const v = env("FOUNDER_PIN");
  if (v) return v;
  if (licenseSecretsRequired()) {
    throw new Error(
      "FOUNDER_PIN is unset. Refusing to accept the default operator PIN in production.",
    );
  }
  return DEFAULT_PIN;
}

function hmac(payload: string) {
  return createHmac("sha256", resolvePepper()).update(payload).digest("hex").slice(0, 8).toUpperCase();
}

function safeEq(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return timingSafeEqual(aa, bb);
}

export function pinOk(pin: string) {
  return safeEq(pin.trim(), resolvePin());
}

export function defaultPinSet() {
  return !env("FOUNDER_PIN");
}

export function defaultPepperSet() {
  return !env("LICENSE_PEPPER");
}

export function mintKey(plan: IssuedPlan): string {
  const body = randomBytes(4).toString("hex").toUpperCase();
  const tag = plan.toUpperCase();
  const sig = hmac(`${tag}:${body}`);
  return `FP-${tag}-${body}-${sig}`;
}

/** Deterministic key for a paid Stripe session — claiming twice yields the same string. */
export function mintKeyFromPaid(plan: IssuedPlan, sessionId: string): string {
  const body = createHmac("sha256", resolvePepper())
    .update(`stripe:${sessionId.trim()}`)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
  const tag = plan.toUpperCase();
  const sig = hmac(`${tag}:${body}`);
  return `FP-${tag}-${body}-${sig}`;
}

export function verifyKey(raw: string): {
  ok: boolean;
  plan: "pro" | "lab";
  lifetime: boolean;
  license: string;
  reason?: string;
} {
  try {
    const key = raw.trim().toUpperCase().replace(/\s+/g, "");
    const m = /^FP-(PRO|LAB|LIFE)-([0-9A-F]{8})-([0-9A-F]{8})$/.exec(key);
    if (!m) {
      return { ok: false, plan: "pro", lifetime: false, license: "", reason: "Not a FirstPass key." };
    }
    const tag = m[1] as "PRO" | "LAB" | "LIFE";
    const body = m[2];
    const sig = m[3];
    const expect = hmac(`${tag}:${body}`);
    if (!safeEq(sig, expect)) {
      return { ok: false, plan: "pro", lifetime: false, license: "", reason: "Signature does not verify." };
    }
    if (tag === "LIFE") return { ok: true, plan: "lab", lifetime: true, license: key };
    if (tag === "LAB") return { ok: true, plan: "lab", lifetime: false, license: key };
    return { ok: true, plan: "pro", lifetime: false, license: key };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "License secrets are not configured.";
    return { ok: false, plan: "pro", lifetime: false, license: "", reason: msg };
  }
}
