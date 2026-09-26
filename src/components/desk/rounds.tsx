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

/** Everyday setting labels — ids/order stay in ROUND_SETTINGS. */
const SETTING_PLAIN: Record<RoundSetting | "all", string> = {
  all: "All",
  clinic: "Ketamine clinic",
  ward: "Hospital ward",
  mat: "Addiction care",
  street: "Street / overdose",
  kitchen: "Food & drink",
};

/** Suggested setting chips when a filter returns nothing (UI-only). */
const EMPTY_SETTING_HINTS: RoundSetting[] = ["clinic", "mat", "kitchen"];

const HOW_STEPS = [
  {
    n: "1",
    title: "Pick a setting",
    body: "Clinic, ward, addiction care, street, or food — or browse all cases.",
  },
  {
    n: "2",
    title: "Read the stem",
    body: "Say the enzyme or receptor story out loud before you peek at the teach.",
  },
  {
    n: "3",
    title: "Put it on the desk",
    body: "Load the case drugs, then reveal the teach and compare what the desk shows.",
  },
] as const;

export function RoundsPage() {
  const load = useDesk((s) => s.load);
  const selected = useDesk((s) => s.selected);
  const setView = useDesk((s) => s.setView);
  const plan = usePlan();
  const [setting, setSetting] = useState<RoundSetting | "all">("all");
  const [open, setOpen] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const rows = useMemo(
    () => ROUNDS.filter((r) => setting === "all" || r.setting === setting),
    [setting],
  );

  const hasFilter = setting !== "all";
  const firstRun = !started && rows.length > 0;

  function reveal(id: string) {
    setStarted(true);
    setOpen((cur) => (cur === id ? null : id));
  }

  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
          <Plate src={LANE_PLATE.clinic} alt="" className="h-36 w-full min-h-36 sm:h-full" />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Rounds coach</p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-fg">
              {ROUNDS.length} teaching cases — read the stem, then put it on the desk.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Short clinic stories for pharmacy and medical trainees: first-pass by mouth, when a gene pathway
              acts like a second drug, sedation naloxone will not reverse, food and herb traps, and addiction-care
              stacks. Up to five-drug cases and oral ketamine route stay free. Pathway speed, smoke, alcohol, and
              cannabis route stay Pro.
            </p>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-subtle">
              Educational only — not an exam key, not dosing advice, not a prescription. The Prescribing
              Information and your clinician still win.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="How this works"
        className="rounded-xl bg-surface px-5 py-4 shadow-[var(--shadow-border)] sm:px-6"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">How this works</p>
        <ol className="mt-3 grid gap-3 sm:grid-cols-3">
          {HOW_STEPS.map((step) => (
            <li key={step.n} className="flex gap-3">
              <span
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-bg-sunken font-mono text-[11px] text-muted"
                aria-hidden
              >
                {step.n}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-fg">{step.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="flex flex-wrap gap-1" role="group" aria-label="Rounds settings">
        {ROUND_SETTINGS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSetting(s.id)}
            aria-pressed={setting === s.id}
            className={cn(
              "h-10 rounded-full px-3 text-xs font-medium",
              setting === s.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {SETTING_PLAIN[s.id]}
          </button>
        ))}
      </div>

      <div className="sticky top-0 z-10 -mx-1 flex flex-wrap items-center gap-2 bg-bg/95 px-1 py-2 backdrop-blur-sm">
        <p className="text-xs text-muted">
          <span className="font-mono tabular-nums">{rows.length}</span> shown
          {hasFilter ? (
            <>
              {" "}
              of <span className="font-mono tabular-nums">{ROUNDS.length}</span>
              {` · ${SETTING_PLAIN[setting]}`}
            </>
          ) : null}
        </p>
        {selected.length > 0 ? (
          <button
            type="button"
            onClick={() => setView("desk")}
            className="ml-auto h-8 rounded-full bg-ink px-3 text-[11px] font-medium text-bg sm:ml-0"
          >
            Open desk
          </button>
        ) : null}
      </div>

      {firstRun ? (
        <div
          role="status"
          className="rounded-xl border border-accent/20 bg-accent-soft/40 px-5 py-4 shadow-[var(--shadow-border)] sm:px-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">First pass</p>
          <p className="mt-1 text-sm font-medium text-fg">Start with a stem — peek later.</p>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
            Pick a case, say the why out loud, put the drugs on the desk, then reveal the teach. You can also jump
            to the desk, library, or study anytime.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setView("desk")}
              className="h-9 rounded-full bg-ink px-3 text-xs font-medium text-bg"
            >
              Open desk
            </button>
            <button
              type="button"
              onClick={() => setView("library")}
              className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
            >
              Browse library
            </button>
            <button
              type="button"
              onClick={() => setView("study")}
              className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
            >
              Open study
            </button>
          </div>
        </div>
      ) : null}

      {rows.length === 0 ? (
        <RoundsEmptyCoach
          setting={setting}
          onClear={() => setSetting("all")}
          onSetting={setSetting}
          onView={setView}
        />
      ) : (
        <ul className="grid gap-3 lg:grid-cols-2">
          {rows.map((r) => (
            <RoundCard
              key={r.id}
              round={r}
              revealed={open === r.id}
              onReveal={() => reveal(r.id)}
              onLoad={() => {
                setStarted(true);
                load(r.drugIds, extrasOf(r));
                setView("desk");
              }}
              gated={plan === "free" && roundNeedsPro(r)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function RoundsEmptyCoach({
  setting,
  onClear,
  onSetting,
  onView,
}: {
  setting: RoundSetting | "all";
  onClear: () => void;
  onSetting: (id: RoundSetting | "all") => void;
  onView: (view: "desk" | "library" | "study") => void;
}) {
  return (
    <div role="status" className="rounded-xl bg-surface px-5 py-8 shadow-[var(--shadow-border)] sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Rounds coach</p>
      <p className="mt-2 text-sm font-medium text-fg">No cases in this setting</p>
      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
        Try another setting chip, browse all cases, or jump to the desk, library, or study. Empty here only means
        the filter is tight — the case list is unchanged.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onClear}
          className="h-9 rounded-full bg-ink px-3 text-xs font-medium text-bg"
        >
          Browse all
        </button>
        {EMPTY_SETTING_HINTS.filter((id) => id !== setting).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onSetting(id)}
            className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
          >
            Try {SETTING_PLAIN[id]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onView("desk")}
          className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
        >
          Open desk
        </button>
        <button
          type="button"
          onClick={() => onView("library")}
          className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
        >
          Browse library
        </button>
        <button
          type="button"
          onClick={() => onView("study")}
          className="h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg"
        >
          Open study
        </button>
      </div>
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
        <Plate src={plateForSample(round)} alt="" className="hidden min-h-full w-24 shrink-0 sm:block" />
        <div className="min-w-0 flex-1 px-4 py-4 sm:px-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {SETTING_PLAIN[round.setting]}
          </p>
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
              {revealed ? "Hide teach" : "Reveal teach"}
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
