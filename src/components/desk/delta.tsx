import { useMemo } from "react";
import { analyze } from "@/lib/drugs/engine";
import { DEFAULT_HOST, SEVERITY_LABEL, SEVERITY_RANK, type HostContext, type Report } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";

export function HostDelta({
  selected,
  host,
  report,
}: {
  selected: string[];
  host: HostContext;
  report: Report;
}) {
  const baseline = useMemo(() => analyze(selected, DEFAULT_HOST), [selected]);
  const moved = hostIsMoved(host);
  if (!moved || selected.length === 0) return null;

  const dCount = report.findings.length - baseline.findings.length;
  const dRank = SEVERITY_RANK[report.highest] - SEVERITY_RANK[baseline.highest];
  const newHits = report.findings.filter((f) => !baseline.findings.some((b) => b.id === f.id)).slice(0, 4);

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <h2 className="text-xs font-medium uppercase tracking-wide text-muted">vs normal host</h2>
      <p className="mt-1 text-xs leading-relaxed text-muted">
        Same regimen, default metabolizer / no smoke / IV ketamine / smoked THC / alcohol off.
      </p>
      <dl className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <dt className="text-[11px] text-muted">Findings</dt>
          <dd className="font-mono text-sm tabular-nums text-fg">
            {baseline.findings.length}
            <span className="text-muted"> → </span>
            {report.findings.length}
            <span className={cn("ml-1 text-xs", dCount > 0 ? "text-danger" : dCount < 0 ? "text-ok" : "text-muted")}>
              {dCount > 0 ? `+${dCount}` : dCount === 0 ? "—" : dCount}
            </span>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] text-muted">Ceiling</dt>
          <dd className="font-mono text-sm text-fg">
            {SEVERITY_LABEL[baseline.highest]}
            <span className="text-muted"> → </span>
            {SEVERITY_LABEL[report.highest]}
            <span className={cn("ml-1 text-xs", dRank > 0 ? "text-danger" : dRank < 0 ? "text-ok" : "text-muted")}>
              {dRank === 0 ? "—" : dRank > 0 ? "hotter" : "quieter"}
            </span>
          </dd>
        </div>
      </dl>
      {newHits.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {newHits.map((f) => (
            <li key={f.id} className="text-xs leading-relaxed text-muted">
              <span className="font-medium text-fg">{SEVERITY_LABEL[f.severity]}.</span> {f.headline}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-xs text-muted">Host moved the numbers, not the headline list.</p>
      )}
    </section>
  );
}

function hostIsMoved(host: HostContext) {
  if (host.smoking) return true;
  if (host.alcohol !== "off") return true;
  if (host.ketamineRoute !== "iv") return true;
  if (host.cannabisRoute !== "smoked") return true;
  return (Object.keys(DEFAULT_HOST.phenotypes) as (keyof typeof host.phenotypes)[]).some(
    (e) => host.phenotypes[e] !== DEFAULT_HOST.phenotypes[e],
  );
}
