import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import type { Finding, Severity } from "@/lib/drugs/types";
import { SEVERITY_LABEL } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { severitySurface, severityTone } from "./severity";

const SEVERITY_FILTERS: Array<Severity | "all"> = ["all", "contraindicated", "major", "moderate", "minor"];
type KindFilter = "all" | "pk" | "pd" | "geno" | "food";
const KIND_FILTERS: { id: KindFilter; label: string }[] = [
  { id: "all", label: "All kinds" },
  { id: "pk", label: "PK" },
  { id: "pd", label: "PD" },
  { id: "geno", label: "Phenotype" },
  { id: "food", label: "Food" },
];

function matchesKind(f: Finding, kind: KindFilter) {
  if (kind === "all") return true;
  if (kind === "food") return f.tags.includes("food");
  return f.kind === kind;
}

export function FindingList({ findings }: { findings: Finding[] }) {
  const [filter, setFilter] = useState<Severity | "all">("all");
  const [kind, setKind] = useState<KindFilter>("all");
  const visible = useMemo(
    () =>
      findings.filter(
        (f) => (filter === "all" || f.severity === filter) && matchesKind(f, kind),
      ),
    [findings, filter, kind],
  );

  if (findings.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-serif text-lg tracking-tight text-fg">Collisions</h2>
        <div className="flex flex-wrap gap-1">
          {SEVERITY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "h-9 rounded-full px-3 text-xs font-medium",
                filter === f ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
              )}
            >
              {f === "all" ? "All" : SEVERITY_LABEL[f]}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {KIND_FILTERS.map((k) => (
          <button
            key={k.id}
            type="button"
            onClick={() => setKind(k.id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs font-medium",
              kind === k.id ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {k.label}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="rounded-lg bg-surface px-4 py-6 text-sm text-muted shadow-[var(--shadow-border)]">
          No findings at this severity.
        </p>
      ) : (
        <ol className="space-y-2">
          {visible.map((f) => (
            <FindingCard key={f.id} finding={f} />
          ))}
        </ol>
      )}
    </section>
  );
}

function FindingCard({ finding }: { finding: Finding }) {
  const [open, setOpen] = useState(
    finding.severity === "contraindicated" || finding.severity === "major",
  );
  const drugs = finding.drugIds.map((id) => DRUG_BY_ID[id]).filter(Boolean);

  return (
    <li className="rounded-lg bg-surface shadow-[var(--shadow-border)]">
      <button
        type="button"
        className="flex w-full items-start gap-3 px-4 py-3 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className={cn(
            "mt-0.5 inline-flex min-w-24 shrink-0 items-center justify-center rounded-sm px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider",
            severitySurface(finding.severity),
          )}
        >
          {SEVERITY_LABEL[finding.severity]}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-fg">{finding.headline}</span>
          <span className="mt-0.5 block text-xs text-muted">
            {finding.mechanism}
            {finding.effect ? ` · ${finding.effect}` : ""}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "mt-1 size-4 shrink-0 text-subtle transition-transform duration-150",
            open && "rotate-180",
          )}
        />
      </button>
      {open ? (
        <div className="space-y-3 border-t border-border px-4 py-3">
          <p className="text-sm leading-relaxed text-fg">{finding.clinical}</p>
          <div className="flex flex-wrap gap-1.5">
            <Badge
              tone={
                finding.tags.includes("food")
                  ? "warn"
                  : finding.kind === "pk"
                    ? "accent"
                    : finding.kind === "geno"
                      ? "warn"
                      : "info"
              }
            >
              {finding.tags.includes("food")
                ? "Food"
                : finding.kind === "pk"
                  ? "Pharmacokinetic"
                  : finding.kind === "geno"
                    ? "Phenotype"
                    : "Pharmacodynamic"}
            </Badge>
            {finding.enzymes.map((e) => (
              <Badge key={e} tone="default">
                {e}
              </Badge>
            ))}
            {finding.tags
              .filter((t) => !finding.enzymes.includes(t as never))
              .slice(0, 4)
              .map((t) => (
                <Badge key={t} tone="default">
                  {t}
                </Badge>
              ))}
          </div>
          <ul className="space-y-1">
            {drugs.map((d) => (
              <li key={d.id} className="text-xs text-muted">
                <span className="font-medium text-fg">{d.name}</span>
                {d.brands.length ? ` (${d.brands[0]})` : ""} · {d.cls}
                {d.note ? ` — ${d.note}` : ""}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export { severityTone };
