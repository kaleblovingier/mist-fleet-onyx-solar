import { useMemo, useState, type ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import { DRUGBANK, drugbankSearchUrl, drugbankUrl } from "@/lib/drugs/drugbank";
import { pgxFor, type PgxCard } from "@/lib/drugs/pgx";
import { citesFor, pubmedSearchUrl, pubmedUrl, type Cite, type LiveCite } from "@/lib/drugs/pubmed";
import { searchPubmed } from "@/lib/drugs/pubmed-rpc";
import { stahlFor, type Occupancy, type StahlCard } from "@/lib/drugs/stahl";
import { PHENOTYPE_ENZYMES, type HostContext, type PhenotypeEnzyme } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Tab = "drugbank" | "pgx" | "stahl" | "pubmed";

export function Dossier({ ids, host }: { ids: string[]; host: HostContext }) {
  const present = ids.filter((id) => DRUG_BY_ID[id]);
  const [drugId, setDrugId] = useState(present[0] ?? "");
  const id = present.includes(drugId) ? drugId : (present[0] ?? "");
  const drug = DRUG_BY_ID[id];
  const bank = id ? DRUGBANK[id] : undefined;
  const pgx = id ? pgxFor(id) : [];
  const stahl = id ? stahlFor(id) : null;
  const curated = useMemo(() => citesFor(present), [present.join("|")]);
  const [tab, setTab] = useState<Tab>("stahl");

  const tabs = useMemo(() => {
    const t: { id: Tab; label: string; on: boolean }[] = [
      { id: "stahl", label: "Stahl", on: Boolean(stahl) },
      { id: "pgx", label: "PharmGKB", on: pgx.length > 0 },
      { id: "drugbank", label: "DrugBank", on: Boolean(bank) },
      { id: "pubmed", label: "PubMed", on: true },
    ];
    return t;
  }, [stahl, pgx.length, bank]);

  const liveTab = tabs.some((t) => t.id === tab && t.on)
    ? tab
    : (tabs.find((t) => t.on)?.id ?? "drugbank");

  if (!drug) return null;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg tracking-tight text-fg">Sources</h2>
          <p className="text-xs text-muted">
            DrugBank identity, CPIC / ClinPGx, a Stahl-method sketch, and PubMed.
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              disabled={!t.on}
              className={cn(
                "h-10 rounded-full px-3 text-xs font-medium",
                liveTab === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                !t.on && "opacity-40",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {present.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-1">
          {present.map((pid) => (
            <button
              key={pid}
              type="button"
              onClick={() => setDrugId(pid)}
              className={cn(
                "h-10 rounded-full px-3 text-xs font-medium",
                pid === id ? "bg-accent text-accent-fg" : "bg-bg-sunken text-muted hover:text-fg",
              )}
            >
              {DRUG_BY_ID[pid]?.name}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-4">
        {liveTab === "stahl" ? (
          stahl ? (
            <StahlPanel name={drug.name} card={stahl} />
          ) : (
            <EmptySource>
              No Stahl-style receptor sketch for {drug.name}. Psychotropics, MAT, and NMDA drugs get
              occupancy maps; many clinic staples are enzyme-only.
            </EmptySource>
          )
        ) : null}
        {liveTab === "pgx" ? (
          pgx.length ? (
            <PgxPanel cards={pgx} host={host} />
          ) : (
            <EmptySource>
              No CPIC-level PGx table mapped for {drug.name}. Search{" "}
              <Out href={`https://www.clinpgx.org/search?query=${encodeURIComponent(drug.name)}`}>
                ClinPGx
              </Out>{" "}
              if a gene still belongs on the chart.
            </EmptySource>
          )
        ) : null}
        {liveTab === "drugbank" ? (
          bank ? (
            <BankPanel id={id} />
          ) : (
            <EmptySource>
              No DrugBank accession on this shelf
              {drug.kind !== "drug" ? " — food, herb, or host factor." : "."}{" "}
              <Out href={drugbankSearchUrl(drug.name)}>Search DrugBank</Out>
            </EmptySource>
          )
        ) : null}
        {liveTab === "pubmed" ? <PubmedPanel ids={present} curated={curated} /> : null}
      </div>
    </section>
  );
}

function BankPanel({ id }: { id: string }) {
  const drug = DRUG_BY_ID[id];
  const bank = DRUGBANK[id];
  if (!bank || !drug) return null;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-mono text-sm text-fg">{bank.accession}</span>
        {bank.extra?.map((x) => (
          <span key={x} className="font-mono text-xs text-muted">
            {x}
          </span>
        ))}
        <Badge tone="info">{bank.group}</Badge>
      </div>
      <p className="text-sm text-muted">
        Primary targets as indexed on DrugBank. The CYP / PD score on this desk is FirstPass's own
        map, not a dump of their interaction engine.
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {bank.targets.map((t) => (
          <li key={t}>
            <Badge>{t}</Badge>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 pt-1">
        <Out href={drugbankUrl(bank.accession)}>Open {bank.accession}</Out>
        {bank.extra?.map((x) => (
          <Out key={x} href={drugbankUrl(x)}>
            Open {x}
          </Out>
        ))}
        <Out href={drugbankSearchUrl(drug.name)}>Search DrugBank</Out>
      </div>
    </div>
  );
}

function PgxPanel({ cards, host }: { cards: PgxCard[]; host: HostContext }) {
  return (
    <div className="space-y-5">
      {cards.map((card) => (
        <article key={card.gene}>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-mono text-sm text-fg">{card.gene}</h3>
            <Badge tone={card.cpic === "A" ? "accent" : card.cpic === "B" ? "warn" : "default"}>
              CPIC {card.cpic}
            </Badge>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-fg">{card.pearl}</p>
          <ul className="mt-3 divide-y divide-border rounded-md bg-bg-sunken">
            {card.rows.map((row) => {
              const on = phenoMatches(card.gene, row.pheno, host);
              return (
                <li
                  key={row.pheno}
                  className={cn("grid gap-1 px-3 py-2.5 sm:grid-cols-[140px_minmax(0,1fr)]", on && "bg-accent-soft")}
                >
                  <span className="font-mono text-xs uppercase tracking-wide text-muted">{row.pheno}</span>
                  <span className="text-sm text-fg">
                    {row.action}
                    {on ? <span className="ml-2 font-mono text-[10px] uppercase text-accent">this host</span> : null}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex flex-wrap gap-3">
            <Out href={card.guideline}>CPIC guideline</Out>
            <Out href={card.clinpgx}>ClinPGx / PharmGKB</Out>
          </div>
        </article>
      ))}
      <p className="text-[11px] leading-relaxed text-subtle">
        Paraphrase of published CPIC / DPWG tables. Open the guideline for the official phenotype
        algorithm. Not a test order and not a dose.
      </p>
    </div>
  );
}

function StahlPanel({ name, card }: { name: string; card: StahlCard }) {
  if (!card) return null;
  return (
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{name}</p>
        <p className="mt-1 font-serif text-xl tracking-tight text-fg">{card.spectrum}</p>
      </div>
      {card.occupancy.length > 0 ? (
        <ul className="space-y-2">
          {card.occupancy.map((o) => (
            <li key={o.r}>
              <ReceptorBar o={o} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">No single-receptor occupancy — the ion / enzyme is the point.</p>
      )}
      <p className="text-sm leading-relaxed text-fg">{card.pearl}</p>
      <p className="text-sm leading-relaxed text-muted">{card.sides}</p>
      <p className="text-[11px] leading-relaxed text-subtle">
        Educational receptor sketch in the Stahl method (spectrum first, occupancy, then side effects
        from those receptors). Original language — not a quotation of Stahl's Essential
        Psychopharmacology.
      </p>
    </div>
  );
}

function ReceptorBar({ o }: { o: Occupancy }) {
  const width = { 1: "w-1/4", 2: "w-1/2", 3: "w-3/4", 4: "w-full" }[o.n];
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-mono text-xs text-fg">{o.r}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide text-subtle">{tick(o.n)}</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-bg-sunken">
        <div className={cn("h-full rounded-full bg-accent", width)} />
      </div>
    </div>
  );
}

function tick(n: 1 | 2 | 3 | 4) {
  return "+".repeat(n);
}

function PubmedPanel({ ids, curated }: { ids: string[]; curated: Cite[] }) {
  const [live, setLive] = useState<LiveCite[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const names = ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean);

  async function runLive() {
    setBusy(true);
    setErr(null);
    try {
      const res = await searchPubmed({ data: { query: "", ids } });
      if (!res.ok) setErr(res.reason ?? "PubMed did not answer.");
      setLive(res.hits);
    } catch {
      setErr("PubMed did not answer.");
      setLive([]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-5">
      {curated.length ? (
        <ul className="space-y-3">
          {curated.map((c) => (
            <li key={c.pmid} className="rounded-md bg-bg-sunken px-3 py-3">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-mono text-[11px] text-accent">PMID {c.pmid}</span>
                <span className="font-mono text-[11px] text-muted">
                  {c.year} · {c.journal}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium leading-snug text-fg">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.why}</p>
              <Out href={pubmedUrl(c.pmid)}>Open {c.pmid}</Out>
            </li>
          ))}
        </ul>
      ) : (
        <EmptySource>
          No curated paper on this pair yet. Search PubMed live, or browse the Cites shelf.
        </EmptySource>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="secondary" size="sm" disabled={busy || ids.length === 0} onClick={() => void runLive()}>
          {busy ? "Searching…" : "Search PubMed for this desk"}
        </Button>
        {names.length ? (
          <Out href={pubmedSearchUrl(`${names.join(" ")} drug interaction`)}>Open NCBI</Out>
        ) : null}
      </div>
      {err ? <p className="text-sm text-danger">{err}</p> : null}
      {live && live.length === 0 && !err ? (
        <p className="text-sm text-muted">NCBI returned no hits for this query.</p>
      ) : null}
      {live && live.length > 0 ? (
        <ul className="space-y-3">
          {live.map((c) => (
            <li key={c.pmid} className="rounded-md bg-bg-sunken px-3 py-3">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-mono text-[11px] text-accent">PMID {c.pmid}</span>
                <span className="font-mono text-[11px] text-muted">
                  {c.year} · {c.journal}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium leading-snug text-fg">{c.title}</p>
              {c.authors ? <p className="mt-1 text-xs text-muted">{c.authors}</p> : null}
              <Out href={pubmedUrl(c.pmid)}>Open {c.pmid}</Out>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="text-[11px] leading-relaxed text-subtle">
        Curated titles come from NCBI esummary. Live hits are E-utilities, not a dump of MEDLINE.
        Educational — not a complete literature search.
      </p>
    </div>
  );
}

function EmptySource({ children }: { children: ReactNode }) {
  return <p className="text-sm leading-relaxed text-muted">{children}</p>;
}

function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center gap-1.5 text-sm text-accent underline-offset-2 hover:underline"
    >
      {children}
      <ExternalLink className="size-3.5" />
    </a>
  );
}

function phenoMatches(gene: string, row: string, host: HostContext): boolean {
  const key = gene.split("/")[0]?.trim() as PhenotypeEnzyme | string;
  if (!PHENOTYPE_ENZYMES.includes(key as PhenotypeEnzyme)) return false;
  const p = host.phenotypes[key as PhenotypeEnzyme];
  if (!p) return false;
  const token = row.toUpperCase();
  if (p === "PM") return token.includes("PM");
  if (p === "IM") return token.includes("IM") && !token.includes("PM");
  if (p === "UM") return token.includes("UM");
  if (p === "NM") return token.includes("NM") && !token.includes("UM");
  return false;
}
