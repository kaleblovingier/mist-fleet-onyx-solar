import { Lock } from "lucide-react";
import { FOUNDING_UNLOCKS, PAY_RAILS } from "@/lib/billing/commerce";
import { useDesk } from "@/lib/drugs/store";
import { Button } from "@/components/ui/button";

export function Paywall({
  title,
  blurb,
  children,
}: {
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  const openCheckout = useDesk((s) => s.openCheckout);
  const startPreview = useDesk((s) => s.startPreview);
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="pointer-events-none select-none blur-[3px]">{children}</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/80 px-4 text-center">
        <Lock className="size-4 text-accent" />
        <div>
          <p className="font-serif text-lg tracking-tight text-fg">{title}</p>
          <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted">{blurb}</p>
          <p className="mt-2 max-w-sm text-[11px] leading-relaxed text-muted">{FOUNDING_UNLOCKS}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            size="sm"
            onClick={() =>
              openCheckout(
                "lab",
                "Founding is $79 once: pay → get key → Redeem. Host factors, atlas, and export unlock.",
                "life",
              )
            }
          >
            Founding · $79 once
          </Button>
          <Button size="sm" variant="secondary" onClick={startPreview}>
            7-day preview
          </Button>
        </div>
        <p className="max-w-xs text-[11px] leading-relaxed text-muted">
          Pay → key → Redeem · {PAY_RAILS.map((r) => `${r.label} ${r.handle}`).join(" · ")}
          {" · "}card when Stripe is live
        </p>
      </div>
    </div>
  );
}
