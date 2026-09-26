import { useMemo, useState } from "react";
import { enzymeIndex } from "@/lib/drugs/engine";
import { DRUGS } from "@/lib/drugs/catalog";
import { isFdaIndex } from "@/lib/drugs/cyp-protocol";
import { ENZYMES, type Enzyme } from "@/lib/drugs/types";
import { useDesk } from "@/lib/drugs/store";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ENZYME_PLATE } from "@/lib/drugs/visuals";
import { Plate } from "./plate";

const BLURBS: Record<Enzyme, string> = {
  CYP1A2: "Smoking turns this pathway up. Drugs that depend on it (tizanidine, theophylline, clozapine, caffeine) can drop when someone lights up every day.",
  CYP2B6: "Home to bupropion and methadone clearance. Strong inducers like efavirenz or rifampin can steal the effect.",
  CYP2C8: "Gemfibrozil is the classic strong blocker here; repaglinide is the sensitive victim used in teaching maps.",
  CYP2C9: "Clears S-warfarin, phenytoin, and many NSAIDs or sulfonylureas. Fluconazole and amiodarone slow it. A poor metabolizer looks like a strong inhibitor already on board.",
  CYP2C19: "Activates clopidogrel and clears many PPIs and citalopram. Fluvoxamine and fluconazole are strong blockers.",
  CYP2D6: "Usually not inducible. Needed to activate codeine or tamoxifen; blocked by paroxetine, fluoxetine, or bupropion.",
  CYP2E1: "Alcohol can induce it. A minor path that turns acetaminophen into the reactive NAPQI metabolite.",
  CYP3A4: "Clears about half of medicines. Strong blockers (azoles, ritonavir, clarithromycin) and inducers (rifampin, carbamazepine) drive most collision maps.",
  "P-gp": "An efflux pump (ABCB1) that pushes drugs back out — digoxin, dabigatran, colchicine, many DOACs. Often moves with CYP3A4.",
};

export function EnzymeAtlas() {
  const add = useDesk((s) => s.add);
  const selected = useDesk((s) => s.selected);
  const atlasEnzyme = useDesk((s) => s.atlasEnzyme);
  const setAtlasEnzyme = useDesk((s) => s.setAtlasEnzyme);
  const [q, setQ] = useState("");
  const index = useMemo(() => enzymeIndex(), []);
  const enzyme: Enzyme = ENZYMES.includes(atlasEnzyme as Enzyme)
    ? (atlasEnzyme as Enzyme)
    : "CYP3A4";
  const bucket = index[enzyme];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return null;
    return DRUGS.filter(
      (d) =>
        d.name.toLowerCase().includes(needle) ||
        d.brands.some((b) => b.toLowerCase().includes(needle)) ||
        d.cls.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
          <Plate
            src={ENZYME_PLATE[enzyme]}
            alt={`${enzyme} specimen plate`}
            className="h-44 w-full lg:h-full min-h-44"
          />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Enzyme atlas</p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-fg">{enzyme}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg">{BLURBS[enzyme]}</p>
            <p className="mt-3 text-xs text-muted">
              Nine pathways, including 2C9. Pick an enzyme, then add victims, blockers, or inducers to the desk.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {ENZYMES.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setAtlasEnzyme(e)}
            className={cn(
              "h-10 rounded-full px-3.5 font-mono text-xs font-medium",
              enzyme === e ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {e}
          </button>
        ))}
      </div>
      <p className="sr-only">{BLURBS[enzyme]}</p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter the atlas by drug name…"
        className="h-11 w-full max-w-md rounded-md bg-surface-2 px-3 text-sm shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      />
      {filtered ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {filtered.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => add(d.id)}
              className="rounded-md bg-surface px-3 py-2.5 text-left shadow-[var(--shadow-border)] hover:bg-surface-2"
            >
              <div className="text-sm font-medium text-fg">{d.name}</div>
              <div className="text-xs text-muted">{d.cls}</div>
            </button>
          ))}
          {filtered.length === 0 ? (
            <p className="text-sm text-muted">No drugs match.</p>
          ) : null}
        </div>
      ) : (
        <div className="grid gap-3 lg:grid-cols-3">
          <AtlasColumn
            title="Substrates"
            hint="Victims of inhibition / induction · FDA index tagged"
            drugs={bucket.substrates}
            selected={selected}
            onAdd={add}
            kind="S"
            enzyme={enzyme}
            role="substrate"
          />
          <AtlasColumn
            title="Inhibitors"
            hint="Raise victim exposure · FDA index tagged"
            drugs={bucket.inhibitors}
            selected={selected}
            onAdd={add}
            kind="I"
            enzyme={enzyme}
            role="inhibitor"
          />
          <AtlasColumn
            title="Inducers"
            hint="Drop victim exposure · stop is rebound"
            drugs={bucket.inducers}
            selected={selected}
            onAdd={add}
            kind="D"
            enzyme={enzyme}
            role="inducer"
          />
        </div>
      )}
    </div>
  );
}

function AtlasColumn({
  title,
  hint,
  drugs,
  selected,
  onAdd,
  kind,
  enzyme,
  role,
}: {
  title: string;
  hint: string;
  drugs: { id: string; name: string; cls: string; brands: string[] }[];
  selected: string[];
  onAdd: (id: string) => void;
  kind: string;
  enzyme: Enzyme;
  role: "substrate" | "inhibitor" | "inducer";
}) {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-lg tracking-tight text-fg">{title}</h3>
        <Badge tone="default">{drugs.length}</Badge>
      </div>
      <p className="mb-3 text-xs text-muted">{hint}</p>
      <ul className="space-y-1">
        {drugs.map((d) => {
          const on = selected.includes(d.id);
          const index = isFdaIndex(d.id, enzyme, role);
          return (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => onAdd(d.id)}
                disabled={on}
                className="flex w-full items-center justify-between gap-2 rounded-sm px-2 py-2 text-left hover:bg-bg-sunken disabled:opacity-40"
              >
                <span>
                  <span className="block text-sm text-fg">{d.name}</span>
                  <span className="block text-[11px] text-muted">
                    {d.cls}
                    {index ? " · FDA index" : ""}
                  </span>
                </span>
                <span className="font-mono text-[10px] text-subtle">{index ? "IDX" : kind}</span>
              </button>
            </li>
          );
        })}
        {drugs.length === 0 ? <li className="px-2 py-3 text-sm text-muted">None mapped.</li> : null}
      </ul>
    </section>
  );
}
