import Stripe from "stripe";
import { getRequest } from "@tanstack/react-start/server";
import { env } from "@/lib/env.server";
import { priceFor, type Interval, type PlanId } from "@/lib/billing/plans";
import { mintKeyFromPaid, verifyKey, type IssuedPlan } from "@/lib/billing/license.server";

export type StripeMode = "off" | "test" | "live";

function secret() {
  return env("STRIPE_SECRET_KEY");
}

export function stripeMode(): StripeMode {
  const key = secret();
  if (!key) return "off";
  if (key.startsWith("sk_test_")) return "test";
  return "live";
}

function client(): Stripe | null {
  const key = secret();
  if (!key) return null;
  return new Stripe(key);
}

function publicOrigin(): string | null {
  const req = getRequest();
  if (!req) return null;
  const url = new URL(req.url);
  const proto = (req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", ""))
    .split(",")[0]
    ?.trim();
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? url.host)
    .split(",")[0]
    ?.trim();
  if (!proto || !host) return null;
  return `${proto}://${host}`;
}

export function issuedFor(plan: string, interval: string): IssuedPlan {
  if (interval === "life") return "life";
  if (plan === "lab") return "lab";
  return "pro";
}

function asPlan(plan: string): Exclude<PlanId, "free"> {
  return plan === "lab" ? "lab" : "pro";
}

function asInterval(interval: string): Interval {
  if (interval === "year" || interval === "month" || interval === "life") return interval;
  return "life";
}

function productName(issued: IssuedPlan, interval: Interval) {
  if (issued === "life") return "FirstPass founding lifetime";
  const span = interval === "year" ? "year" : "month";
  return issued === "lab" ? `FirstPass lab (${span})` : `FirstPass pro (${span})`;
}

export async function createCheckout(planRaw: string, intervalRaw: string) {
  const stripe = client();
  if (!stripe) {
    return { ok: false as const, reason: "Card checkout is not live on this desk yet." };
  }
  const plan = asPlan(planRaw);
  const interval = asInterval(intervalRaw);
  const issued = issuedFor(plan, interval);
  const dollars = priceFor(plan, interval);
  if (dollars <= 0) {
    return { ok: false as const, reason: "That license is free." };
  }
  const origin = publicOrigin();
  if (!origin) {
    return { ok: false as const, reason: "Could not resolve the return address." };
  }
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: dollars * 100,
            product_data: {
              name: productName(issued, interval),
              description: "Educational CYP450 desk license. Not medical advice. Not a charting system.",
            },
          },
        },
      ],
      success_url: `${origin}/?fp_paid={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?fp_cancel=1`,
      metadata: {
        product: "firstpass",
        plan,
        interval,
        issued,
      },
    });
    if (!session.url) {
      return { ok: false as const, reason: "Stripe did not return a checkout URL." };
    }
    return { ok: true as const, url: session.url };
  } catch {
    return { ok: false as const, reason: "Stripe could not open checkout. Try again, or pay Venmo." };
  }
}

export async function claimSession(sessionIdRaw: string) {
  const stripe = client();
  if (!stripe) {
    return { ok: false as const, reason: "Card checkout is not live on this desk yet." };
  }
  const sessionId = sessionIdRaw.trim();
  if (!sessionId.startsWith("cs_")) {
    return { ok: false as const, reason: "Not a Stripe session." };
  }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.metadata?.product !== "firstpass") {
      return { ok: false as const, reason: "That session is not a FirstPass license." };
    }
    if (session.payment_status !== "paid") {
      return {
        ok: false as const,
        reason: "Payment has not cleared yet. Refresh after the receipt, or write if it stalls.",
      };
    }
    const issued = issuedFor(session.metadata.plan ?? "pro", session.metadata.interval ?? "life");
    const tagged = (session.metadata.issued as IssuedPlan | undefined) ?? issued;
    const key = mintKeyFromPaid(tagged, session.id);
    const verified = verifyKey(key);
    if (!verified.ok) {
      return { ok: false as const, reason: "Paid, but the desk could not sign a key." };
    }
    return {
      ok: true as const,
      key,
      plan: verified.plan,
      lifetime: verified.lifetime,
      license: verified.license,
    };
  } catch {
    return { ok: false as const, reason: "Could not read that Stripe session." };
  }
}

export async function handleStripeWebhook(request: Request): Promise<Response> {
  const stripe = client();
  const hookSecret = env("STRIPE_WEBHOOK_SECRET");
  if (!stripe || !hookSecret) {
    return Response.json({ ok: false, reason: "webhook unconfigured" }, { status: 503 });
  }
  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return Response.json({ ok: false, reason: "missing signature" }, { status: 400 });
  }
  const raw = await request.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(raw, sig, hookSecret);
  } catch {
    return Response.json({ ok: false, reason: "bad signature" }, { status: 400 });
  }
  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    if (session.payment_status === "paid" && session.metadata?.product === "firstpass") {
      const issued = issuedFor(session.metadata.plan ?? "pro", session.metadata.interval ?? "life");
      mintKeyFromPaid((session.metadata.issued as IssuedPlan | undefined) ?? issued, session.id);
    }
  }
  return Response.json({ received: true });
}
