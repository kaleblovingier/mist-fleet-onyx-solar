import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { env } from "@/lib/env.server";

export type IssuedPlan = "pro" | "lab" | "life";

const PEPPER = env("LICENSE_PEPPER") ?? "firstpass-heme-license-v1";
const PIN = env("FOUNDER_PIN") ?? "heme-450";
const BATCH_CAP = 40;

function hmac(payload: string) {
  return createHmac("sha256", PEPPER).update(payload).digest("hex").slice(0, 8).toUpperCase();
}

function safeEq(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return timingSafeEqual(aa, bb);
}

export function pinOk(pin: string) {
  return safeEq(pin.trim(), PIN);
}

export function defaultPinSet() {
  return !env("FOUNDER_PIN");
}

export function parseIssuedPlan(raw: string): IssuedPlan {
  if (raw === "lab" || raw === "life" || raw === "pro") return raw;
  return "life";
}

export function parseNameList(raw: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of raw.split(/[\n,;]+/)) {
    const name = part.trim().replace(/\s+/g, " ");
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(name);
    if (out.length >= BATCH_CAP) break;
  }
  return out;
}

export function mintKey(plan: IssuedPlan): string {
  const body = randomBytes(4).toString("hex").toUpperCase();
  const tag = plan.toUpperCase();
  const sig = hmac(`${tag}:${body}`);
  return `FP-${tag}-${body}-${sig}`;
}

export function mintKeys(plan: IssuedPlan, count: number): string[] {
  const n = Math.max(1, Math.min(BATCH_CAP, Math.floor(count) || 1));
  return Array.from({ length: n }, () => mintKey(plan));
}

export function mintKeyedRows(plan: IssuedPlan, names: string[]): Array<{ key: string; soldTo: string }> {
  return names.slice(0, BATCH_CAP).map((soldTo) => ({
    soldTo,
    key: soldTo.trim() ? mintKeyFromNote(plan, soldTo) : mintKey(plan),
  }));
}

/** Deterministic key for a paid Stripe session — claiming twice yields the same string. */
export function mintKeyFromPaid(plan: IssuedPlan, sessionId: string): string {
  const body = createHmac("sha256", PEPPER)
    .update(`stripe:${sessionId.trim()}`)
    .digest("hex")
    .slice(0, 8)
    .toUpperCase();
  const tag = plan.toUpperCase();
  const sig = hmac(`${tag}:${body}`);
  return `FP-${tag}-${body}-${sig}`;
}

export function mintKeyFromNote(plan: IssuedPlan, note: string): string {
  return mintKeyFromPaid(plan, `note:${note.trim().toLowerCase().replace(/\s+/g, " ")}`);
}

export function verifyKey(raw: string): {
  ok: boolean;
  plan: "pro" | "lab";
  lifetime: boolean;
  license: string;
  reason?: string;
} {
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
}
