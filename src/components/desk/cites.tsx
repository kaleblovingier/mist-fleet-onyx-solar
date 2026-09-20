import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import {
  CITE_TAGS,
  CITES,
  pubmedSearchUrl,
  pubmedUrl,
  searchCites,
  type Cite,
  type CiteTag,
} from "@/lib/drugs/pubmed";
import { useDesk } from "@/lib/drugs/store";
import { cn } from "@/lib/utils";
import { Plate } from "./plate";

export function CitesPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<CiteTag | "all">("all");
  const add = useDesk((s) => s.add);
  const selected = useDesk((s) => s.selected);
  const setView = useDesk((s) => s.setView);

  const rows = useMemo(() => {
    const found = searchCites(q);
    if (tag === "all") return found;
    return found.filter((c) => c.tags.includes(tag));
  }, [q, tag]);

  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
          <Plate src="/plates/heme.jpg" alt="" className="h-36 w-full min-h-36 sm:h-full" />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">PubMed shelf</p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-fg">
              {CITES.length} papers this desk actually cites
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Curated PMIDs for the collisions on this formulary — grapefruit, St. John's wort, CPIC tables,
              methadone QT, Hunter criteria, Beers 2023, phenoconversion, UDS false-positives, COWS, MOTHER,
              Backman rifampin–midazolam, Zhou TDI.
              Open PubMed. Live NCBI search, PubChem, DailyMed, CPIC, ClinicalTrials.gov, and NIH RxClass sit
              on the Sources card once a pair is on the desk.
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by drug, PMID, CYP, author-story…"
          className="h-12 w-full rounded-lg bg-surface-2 pl-10 pr-4 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        />
      </div>

      <div className="flex flex-wrap gap-1">
        {CITE_TAGS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTag(t.id)}
            className={cn(
              "h-10 rounded-full px-3 text-xs font-medium",
              tag === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-muted">{rows.length} shown</p>

      {rows.length === 0 ? (
        <p className="rounded-xl bg-surface px-5 py-8 text-sm text-muted shadow-[var(--shadow-border)]">
          Nothing in this drawer matches.{" "}
          <a className="text-accent underline" href={pubmedSearchUrl(q || "drug interaction CYP")} target="_blank" rel="noreferrer">
            Search PubMed
          </a>
        </p>
      ) : (
        <ul className="space-y-2">
          {rows.map((c) => (
            <CiteCard
              key={c.pmid}
              cite={c}
              selected={selected}
              onAdd={(id) => {
                const ok = add(id);
                if (ok) setView("desk");
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function CiteCard({
  cite,
  selected,
  onAdd,
}: {
  cite: Cite;
  selected: string[];
  onAdd: (id: string) => void;
}) {
  return (
    <li className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-mono text-xs text-accent">PMID {cite.pmid}</span>
        <span className="font-mono text-[11px] text-muted">
          {cite.year} · {cite.journal}
        </span>
      </div>
      <h3 className="mt-2 font-serif text-lg leading-snug tracking-tight text-fg">{cite.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{cite.why}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {cite.drugIds.map((id) => {
          const name = DRUG_BY_ID[id]?.name ?? id;
          const on = selected.includes(id);
          return (
            <button
              key={id}
              type="button"
              disabled={on || !DRUG_BY_ID[id]}
              onClick={() => onAdd(id)}
              className={cn(
                "h-9 rounded-full px-3 text-xs font-medium",
                on ? "bg-accent-soft text-accent" : "bg-bg-sunken text-muted hover:text-fg",
              )}
            >
              {name}
            </button>
          );
        })}
        {cite.tags.map((t) => (
          <span key={t} className="h-9 rounded-full bg-bg px-3 text-xs leading-9 text-subtle">
            {t}
          </span>
        ))}
      </div>
      <a
        href={pubmedUrl(cite.pmid)}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex h-10 items-center gap-1.5 text-sm text-accent underline-offset-2 hover:underline"
      >
        Open PubMed
        <ExternalLink className="size-3.5" />
      </a>
    </li>
  );
}
