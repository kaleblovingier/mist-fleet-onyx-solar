import { useEffect, useRef } from "react";
import { claimStripeCheckout } from "@/lib/billing/stripe";
import { useDesk } from "@/lib/drugs/store";

/** After Stripe Checkout returns, claim the paid session and activate the signed key. */
export function StripeReturn({ ready }: { ready: boolean }) {
  const activate = useDesk((s) => s.activateLicense);
  const openCheckout = useDesk((s) => s.openCheckout);
  const ran = useRef(false);

  useEffect(() => {
    if (!ready || ran.current) return;
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const paid = params.get("fp_paid");
    const cancel = params.get("fp_cancel");
    if (!paid && !cancel) return;
    ran.current = true;
    const clean = () => {
      const url = new URL(window.location.href);
      url.searchParams.delete("fp_paid");
      url.searchParams.delete("fp_cancel");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    };
    if (cancel) {
      openCheckout(
        "lab",
        "Card checkout was cancelled — no charge. You can try again, or pay with Venmo, Cash App, or PayPal and redeem a key when it arrives.",
      );
      clean();
      return;
    }
    void (async () => {
      const res = await claimStripeCheckout({ data: { sessionId: paid ?? "" } });
      if (res.ok) {
        activate({ plan: res.plan, license: res.license, lifetime: res.lifetime });
      } else {
        openCheckout(
          "lab",
          res.reason ??
            "Payment did not clear yet. If you were charged, wait a moment or paste the key from your email under Redeem.",
        );
      }
      clean();
    })();
  }, [ready, activate, openCheckout]);

  return null;
}
