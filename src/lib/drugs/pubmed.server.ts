/** NCBI E-utilities. Server-only — dynamic-import from the RPC wrapper. */

import type { LiveCite, LiveResult } from "./pubmed";

export type { LiveCite, LiveResult };

const TOOL = "firstpass";
const EMAIL = "kaleblovingier@gmail.com";
const BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
const MAX = 8;

const cache = new Map<string, { at: number; value: LiveResult }>();
const TTL = 10 * 60 * 1000;

function clean(q: string) {
  return q.replace(/[^\w\s+\-:"()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 240);
}

async function ncbi(path: string): Promise<unknown> {
  const url = `${BASE}/${path}${path.includes("?") ? "&" : "?"}tool=${TOOL}&email=${encodeURIComponent(EMAIL)}`;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`NCBI ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

export async function searchLive(raw: string): Promise<LiveResult> {
  const query = clean(raw);
  if (query.length < 3) return { ok: false, hits: [], reason: "Query too short.", query };
  const hit = cache.get(query);
  if (hit && Date.now() - hit.at < TTL) return hit.value;

  try {
    const search = (await ncbi(
      `esearch.fcgi?db=pubmed&retmode=json&retmax=${MAX}&term=${encodeURIComponent(query)}`,
    )) as {
      esearchresult?: { idlist?: string[] };
    };
    const ids = (search.esearchresult?.idlist ?? []).filter(Boolean).slice(0, MAX);
    if (!ids.length) {
      const empty: LiveResult = { ok: true, hits: [], query };
      cache.set(query, { at: Date.now(), value: empty });
      return empty;
    }
    const summary = (await ncbi(
      `esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(",")}`,
    )) as {
      result?: Record<string, {
        uid?: string;
        title?: string;
        pubdate?: string;
        source?: string;
        authors?: { name?: string }[];
      }> & { uids?: string[] };
    };
    const result = summary.result ?? {};
    const uids = result.uids ?? ids;
    const hits: LiveCite[] = [];
    for (const id of uids) {
      const row = result[id];
      if (!row || typeof row !== "object") continue;
      const authors = (row.authors ?? [])
        .slice(0, 3)
        .map((a) => a.name)
        .filter(Boolean)
        .join(", ");
      hits.push({
        pmid: String(row.uid ?? id),
        title: (row.title || "Untitled").replace(/\s+/g, " ").trim(),
        year: String(row.pubdate ?? "").slice(0, 4),
        journal: row.source || "",
        authors,
      });
    }
    const value: LiveResult = { ok: true, hits, query };
    cache.set(query, { at: Date.now(), value });
    return value;
  } catch (err) {
    const reason = err instanceof Error ? (err.name === "AbortError" ? "PubMed timed out." : err.message) : "PubMed unreachable.";
    return { ok: false, hits: [], reason, query };
  }
}
