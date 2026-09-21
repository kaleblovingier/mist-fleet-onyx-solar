import type { Finding, Severity } from './types';

export const CIRCUIT_LABELS = {
  pk: 'PK',
  pd: 'PD',
  geno: 'Phenotype',
  clinic: 'Clinic',
} as const;

export type CircuitKind = keyof typeof CIRCUIT_LABELS;

export type CircuitSummary = {
  count: number;
  severe: number;
};

export function summarizeMultiCircuitFindings(
  findings: Array<
    Pick<Finding, 'kind' | 'severity' | 'drugIds'> &
      Partial<Pick<Finding, 'id' | 'headline' | 'enzymes' | 'effect' | 'mechanism' | 'clinical' | 'tags'>>
  >,
) {
  const byCircuit: Record<CircuitKind, CircuitSummary> = {
    pk: { count: 0, severe: 0 },
    pd: { count: 0, severe: 0 },
    geno: { count: 0, severe: 0 },
    clinic: { count: 0, severe: 0 },
  };

  const pairMap = new Map<string, { id: string; pair: string[]; severity: Severity; count: number }>();

  for (const finding of findings) {
    const kind = finding.kind;
    if (!(kind in byCircuit)) continue;

    byCircuit[kind].count += 1;
    if (finding.severity === 'contraindicated' || finding.severity === 'major') {
      byCircuit[kind].severe += 1;
    }

    if (finding.drugIds.length < 2) continue;

    const pair = [...new Set(finding.drugIds)];
    const key = `${kind}:${pair.join('|')}`;
    const id = pair.join('+');
    const current = pairMap.get(key);
    const rank: Record<Severity, number> = {
      contraindicated: 4,
      major: 3,
      moderate: 2,
      minor: 1,
    };
    const next = {
      id,
      pair,
      severity: finding.severity,
      count: (current?.count ?? 0) + 1,
    };

    if (!current || rank[finding.severity] > rank[current.severity]) {
      pairMap.set(key, next);
    } else if (rank[finding.severity] === rank[current.severity]) {
      pairMap.set(key, { ...current, count: current.count + 1 });
    }
  }

  const topPairs = [...pairMap.values()]
    .map((entry) => ({
      id: entry.id,
      pair: entry.pair,
      count: entry.count,
      severity: entry.severity,
    }))
    .sort((a, b) => {
      const severityRank = { contraindicated: 4, major: 3, moderate: 2, minor: 1 };
      return severityRank[b.severity] - severityRank[a.severity] || b.count - a.count || a.id.localeCompare(b.id);
    })
    .slice(0, 8);

  return {
    total: findings.length,
    byCircuit,
    topPairs,
  };
}
