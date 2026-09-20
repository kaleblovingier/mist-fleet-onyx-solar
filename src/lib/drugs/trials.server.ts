/** ClinicalTrials.gov API v2. Server-only. */

import type { TrialHit, TrialResult } from "./live";

const cache = new Map<string, { at: number; value: TrialResult }>();
const TTL = 20 * 60 * 1000;
const UA = "FirstPass/1.0 (educational CYP desk; kaleblovingier@gmail.com)";

function clean(q: string) {
  return q.replace(/[^\w\s+\-:"()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 160);
}

export async function searchLiveTrials(raw: string): Promise<TrialResult> {
  const query = clean(raw);
  if (query.length < 3) return { ok: false, hits: [], reason: "Query too short.", query };
  const hit = cache.get(query);
  if (hit && Date.now() - hit.at < TTL) return hit.value;

  const url = `https://clinicaltrials.gov/api/v2/studies?query.term=${encodeURIComponent(query)}&pageSize=6`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { Accept: "application/json", "User-Agent": UA },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as {
      studies?: Array<{
        protocolSection?: {
          identificationModule?: { nctId?: string; briefTitle?: string };
          statusModule?: { overallStatus?: string };
          designModule?: { phases?: string[] };
        };
      }>;
    };
    const hits: TrialHit[] = [];
    for (const s of json.studies ?? []) {
      const id = s.protocolSection?.identificationModule;
      const status = s.protocolSection?.statusModule?.overallStatus ?? "";
      const phases = s.protocolSection?.designModule?.phases ?? [];
      if (!id?.nctId) continue;
      hits.push({
        nctId: id.nctId,
        title: (id.briefTitle || "Untitled").replace(/\s+/g, " ").trim(),
        status: status.replace(/_/g, " "),
        phase: phases.filter((p) => p && p !== "NA").join(" / "),
      });
    }
    const value: TrialResult = { ok: true, query, hits };
    cache.set(query, { at: Date.now(), value });
    return value;
  } catch (err) {
    const reason = err instanceof Error ? (err.name === "AbortError" ? "Timed out." : err.message) : "Unreachable.";
    return { ok: false, query, hits: [], reason };
  } finally {
    clearTimeout(t);
  }
}
