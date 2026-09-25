import { useMemo, useState } from "react";
import { ROUND_SETTINGS, ROUNDS, roundNeedsPro, type Round, type RoundSetting } from "@/lib/drugs/rounds";
import { LANE_PLATE, plateForSample } from "@/lib/drugs/visuals";
import { useDesk, usePlan } from "@/lib/drugs/store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plate } from "./plate";

export function RoundsPage() {
  const load = useDesk((s) => s.load);
  const plan = usePlan();
  const [setting, setSetting] = useState<RoundSetting | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const rows = useMemo(
    () => ROUNDS.filter((r) => setting === "all" || r.setting === setting),
    [setting],
  );

  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
          <Plate src={LANE_PLATE.clinic} alt="" className="h-36 w-full sm:h-full min-h-36" />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Teaching rounds</p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-fg">
              {ROUNDS.length} cases. Read the stem, put it on the desk, then reveal.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Pharmacy-student and clinic maps — first-pass, phenotype-as-perpetrator, α2 vs naloxone,
              food, MAT. Up to five-drug cases and oral ketamine route stay free. Phenotype, smoke, alcohol, and cannabis route stay Pro.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-1">
        {ROUND_SETTINGS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSetting(s.id)}
            className={cn(
              "h-10 rounded-full px-3 text-xs font-medium",
              setting === s.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-3 lg:grid-cols-2">
        {rows.map((r) => (
          <RoundCard
            key={r.id}
            round={r}
            revealed={open === r.id}
            onReveal={() => setOpen((cur) => (cur === r.id ? null : r.id))}
            onLoad={() => load(r.drugIds, extrasOf(r))}
            gated={plan === "free" && roundNeedsPro(r)}
          />
        ))}
      </ul>
    </div>
  );
}

function extrasOf(r: Round) {
  return {
    phenotypes: r.phenotypes,
    smoking: r.smoking,
    ketamineRoute: r.ketamineRoute,
    cannabisRoute: r.cannabisRoute,
    alcohol: r.alcohol,
    doses: r.doses,
  };
}

function RoundCard({
  round,
  revealed,
  onReveal,
  onLoad,
  gated,
}: {
  round: Round;
  revealed: boolean;
  onReveal: () => void;
  onLoad: () => void;
  gated: boolean;
}) {
  return (
    <li className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <div className="flex gap-0">
        <Plate src={plateForSample(round)} alt="" className="hidden w-24 shrink-0 sm:block min-h-full" />
        <div className="min-w-0 flex-1 px-4 py-4 sm:px-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{round.setting}</p>
          <h3 className="mt-1 font-serif text-xl tracking-tight text-fg">{round.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{round.stem}</p>
          <p className="mt-3 text-sm font-medium text-fg">{round.ask}</p>
          {revealed ? (
            <p className="mt-3 rounded-md bg-bg-sunken px-3 py-3 text-sm leading-relaxed text-fg">{round.teach}</p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <Button size="sm" onClick={onLoad}>
              {gated ? "Put on desk · Pro" : "Put on desk"}
            </Button>
            <Button size="sm" variant="secondary" onClick={onReveal}>
              {revealed ? "Hide teach" : "Reveal"}
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}
