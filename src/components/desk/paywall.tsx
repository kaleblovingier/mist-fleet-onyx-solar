import { Lock } from "lucide-react";
import { PAY_RAILS } from "@/lib/billing/commerce";
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
          <p className="mt-2 max-w-xs text-[11px] leading-relaxed text-muted">
            Free desk keeps five-drug checks. Founding ($79 once) unlocks host factors, atlas, and
            export for life.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            size="sm"
            onClick={() =>
              openCheckout(
                "lab",
                "Founding lifetime ($79 once) unlocks host factors, the enzyme atlas, and export.",
                "life",
              )
            }
          >
            Founding · $79 lifetime
          </Button>
          <Button size="sm" variant="secondary" onClick={startPreview}>
            Try 7 days free
          </Button>
        </div>
        <p className="text-[11px] text-muted">
          Pay by card when live · or {PAY_RAILS.map((r) => r.label).join(" / ")}
        </p>
      </div>
    </div>
  );
}
