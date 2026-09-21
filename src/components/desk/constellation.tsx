import { useMemo } from "react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import { CIRCUIT_LABELS, summarizeMultiCircuitFindings } from "@/lib/drugs/multi-circuit";
import type { Finding, Severity } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";

const TONE: Record<Severity, string> = {
  contraindicated: "stroke-danger",
  major: "stroke-danger",
  moderate: "stroke-warn",
  minor: "stroke-info",
};

export function CollisionMap({
  selected,
  findings,
}: {
  selected: string[];
  findings: Finding[];
}) {
  const layout = useMemo(() => {
    const n = selected.length;
    if (n < 2) return null;
    const cx = 160;
    const cy = 96;
    const r = n === 2 ? 62 : 70;
    const nodes = selected.map((id, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return {
        id,
        name: DRUG_BY_ID[id]?.name ?? id,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    });
    const edges = findings
      .filter((f) => f.drugIds.length >= 2)
      .map((f) => {
        const a = nodes.find((n) => n.id === f.drugIds[0]);
        const b = nodes.find((n) => n.id === f.drugIds[1]);
        if (!a || !b) return null;
        return { id: f.id, a, b, severity: f.severity };
      })
      .filter(Boolean) as {
      id: string;
      a: (typeof nodes)[number];
      b: (typeof nodes)[number];
      severity: Severity;
    }[];
    return { nodes, edges };
  }, [selected, findings]);

  if (!layout) return null;

  return (
    <section className="overflow-hidden rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3">
        <h2 className="font-serif text-lg tracking-tight text-fg">Collision map</h2>
        <p className="text-xs text-muted">Edges are findings. Darker lines are higher severity.</p>
      </div>
      <svg viewBox="0 0 320 210" className="block h-auto w-full max-w-sm" role="img" aria-label="Collision constellation">
        {layout.edges.map((e) => (
          <line
            key={e.id}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            className={cn(TONE[e.severity])}
            strokeWidth={e.severity === "contraindicated" || e.severity === "major" ? 2.4 : 1.4}
            strokeLinecap="round"
            opacity={0.85}
          />
        ))}
        {layout.nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="16" className="fill-accent" />
            <circle cx={n.x} cy={n.y} r="5" className="fill-accent-fg" />
            <text
              x={n.x}
              y={n.y + 28}
              textAnchor="middle"
              className="fill-fg"
              style={{ fontSize: 9, fontFamily: "IBM Plex Sans, sans-serif" }}
            >
              {n.name.length > 16 ? `${n.name.slice(0, 15)}…` : n.name}
            </text>
          </g>
        ))}
      </svg>
    </section>
  );
}

export function MultiCircuitMap({
  selected,
  findings,
}: {
  selected: string[];
  findings: Finding[];
}) {
  const summary = useMemo(() => summarizeMultiCircuitFindings(findings), [findings]);

  const circuitOrder = ["pk", "pd", "geno", "clinic"] as const;
  const laneY = { pk: 32, pd: 78, geno: 124, clinic: 170 } as const;
  const xOf = (index: number) => 52 + index * 74;
  const pairLineData = useMemo(() => {
    const rows: Array<{ key: string; kind: (typeof circuitOrder)[number]; a: number; b: number; severity: Severity; pair: string[] }> = [];

    for (const finding of findings) {
      if (finding.drugIds.length < 2) continue;
      const pair = [...new Set(finding.drugIds)].filter((id) => selected.includes(id)).sort();
      if (pair.length < 2) continue;
      const a = selected.indexOf(pair[0]);
      const b = selected.indexOf(pair[1]);
      if (a === -1 || b === -1) continue;
      rows.push({
        key: `${finding.kind}:${pair.join("|")}`,
        kind: finding.kind,
        a: xOf(a),
        b: xOf(b),
        severity: finding.severity,
        pair,
      });
    }
    return rows;
  }, [findings, selected]);

  const bulbs = selected.map((id, index) => ({
    id,
    name: DRUG_BY_ID[id]?.name ?? id,
    x: xOf(index),
  }));

  if (selected.length < 2) return null;

  return (
    <section className="overflow-hidden rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg tracking-tight text-fg">Multi-circuit map</h2>
          <p className="text-xs text-muted">Each lane is a distinct interaction circuit: PK, PD, phenotype, or clinic.</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2 text-[10px] uppercase tracking-wide text-muted">
          {circuitOrder.map((kind) => (
            <span key={kind} className="rounded-full bg-bg-sunken px-2 py-1">
              {CIRCUIT_LABELS[kind]} {summary.byCircuit[kind].count}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 360 210" className="block h-auto w-full max-w-md" role="img" aria-label="Drug interaction circuit map">
        {circuitOrder.map((kind) => {
          const y = laneY[kind];
          return (
            <g key={kind}>
              <text x="16" y={y + 4} className="fill-fg" style={{ fontSize: 10, fontFamily: "IBM Plex Sans, sans-serif" }}>
                {CIRCUIT_LABELS[kind]}
              </text>
              <line x1="52" y1={y} x2="310" y2={y} stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.2" />
              {bulbs.map((drug) => (
                <g key={`${kind}-${drug.id}`}>
                  <circle cx={drug.x} cy={y} r="7" className="fill-accent" opacity={0.9} />
                  <circle cx={drug.x} cy={y} r="3" className="fill-accent-fg" />
                </g>
              ))}
              {pairLineData
                .filter((row) => row.kind === kind)
                .map((row) => {
                  const midX = (row.a + row.b) / 2;
                  const bend = row.kind === "pk" ? -20 : row.kind === "pd" ? -10 : row.kind === "geno" ? 10 : 18;
                  const d = `M ${row.a} ${y} C ${midX} ${y + bend}, ${midX} ${y + bend}, ${row.b} ${y}`;
                  return (
                    <path
                      key={`${row.key}-${row.pair.join("-")}`}
                      d={d}
                      className={cn(TONE[row.severity])}
                      fill="none"
                      strokeWidth={row.severity === "contraindicated" || row.severity === "major" ? 3 : 1.8}
                      strokeLinecap="round"
                      opacity={0.9}
                    />
                  );
                })}
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        {summary.topPairs.map((pair) => (
          <span
            key={pair.id}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-2 py-1 text-[10px] uppercase tracking-wide",
              pair.severity === "contraindicated" || pair.severity === "major"
                ? "border-danger/40 bg-danger-soft text-fg"
                : "border-border bg-bg-sunken text-muted",
            )}
          >
            <span className="font-mono">{pair.id}</span>
            <span>{pair.count}x</span>
          </span>
        ))}
      </div>
    </section>
  );
}
