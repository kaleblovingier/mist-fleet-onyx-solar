import { useMemo, useState, type MouseEvent } from "react";
import { Copy, Check } from "lucide-react";
import { ROUND_SETTINGS, ROUNDS, roundNeedsPro, type Round, type RoundSetting } from "@/lib/drugs/rounds";
import { SAMPLE_REGIMENS } from "@/lib/drugs/samples";
import { LANE_PLATE, plateForSample } from "@/lib/drugs/visuals";
import { useDesk, usePlan } from "@/lib/drugs/store";
import { PACKS, buildPackUrl, type PackId } from "@/lib/drugs/permalinks";
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

      <section className="rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)] sm:px-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">Shareable packs</p>
        <p className="mt-1 text-xs text-muted">
          Permalink packs load the first case on the desk and keep{" "}
          <span className="font-mono">?pack=</span> for sharing.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(PACKS) as PackId[]).map((id) => (
            <PackLink key={id} packId={id} />
          ))}
        </div>
      </section>

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

function PackLink({ packId }: { packId: PackId }) {
  const pack = PACKS[packId];
  const load = useDesk((s) => s.load);
  const setView = useDesk((s) => s.setView);
  const [copied, setCopied] = useState(false);

  function open() {
    const row = SAMPLE_REGIMENS.find((s) => s.id === pack.caseIds[0]);
    if (!row) return;
    const url = new URL(window.location.href);
    url.searchParams.set("pack", packId);
    url.searchParams.set("case", row.id);
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
    load(row.drugIds, {
      phenotypes: row.phenotypes,
      smoking: row.smoking,
      ketamineRoute: row.ketamineRoute,
      cannabisRoute: row.cannabisRoute,
      alcohol: row.alcohol,
      doses: row.doses,
    });
    setView("desk");
  }

  async function copy(e: MouseEvent) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(buildPackUrl(packId));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard may be blocked */
    }
  }

  return (
    <div className="flex items-center gap-1">
      <Button size="sm" variant="secondary" onClick={open}>
        {pack.title}
      </Button>
      <button
        type="button"
        onClick={(e) => void copy(e)}
        className="inline-flex h-8 items-center gap-1 rounded-full bg-accent-soft px-2.5 font-mono text-[10px] uppercase tracking-wide text-accent"
        title="Copy pack link"
      >
        {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
