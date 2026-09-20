//#region node_modules/.nitro/vite/services/ssr/assets/pubmed.server-BuOwX0bS.js
var TOOL = "firstpass";
var EMAIL = "kaleblovingier@gmail.com";
var BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
var MAX = 8;
var cache = /* @__PURE__ */ new Map();
var TTL = 6e5;
function clean(q) {
	return q.replace(/[^\w\s+\-:"()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 240);
}
async function ncbi(path) {
	const url = `${BASE}/${path}${path.includes("?") ? "&" : "?"}tool=${TOOL}&email=${encodeURIComponent(EMAIL)}`;
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), 8e3);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: { Accept: "application/json" }
		});
		if (!res.ok) throw new Error(`NCBI ${res.status}`);
		return await res.json();
	} finally {
		clearTimeout(t);
	}
}
async function searchLive(raw) {
	const query = clean(raw);
	if (query.length < 3) return {
		ok: false,
		hits: [],
		reason: "Query too short.",
		query
	};
	const hit = cache.get(query);
	if (hit && Date.now() - hit.at < TTL) return hit.value;
	try {
		const ids = ((await ncbi(`esearch.fcgi?db=pubmed&retmode=json&retmax=${MAX}&term=${encodeURIComponent(query)}`)).esearchresult?.idlist ?? []).filter(Boolean).slice(0, MAX);
		if (!ids.length) {
			const empty = {
				ok: true,
				hits: [],
				query
			};
			cache.set(query, {
				at: Date.now(),
				value: empty
			});
			return empty;
		}
		const result = (await ncbi(`esummary.fcgi?db=pubmed&retmode=json&id=${ids.join(",")}`)).result ?? {};
		const uids = result.uids ?? ids;
		const hits = [];
		for (const id of uids) {
			const row = result[id];
			if (!row || typeof row !== "object") continue;
			const authors = (row.authors ?? []).slice(0, 3).map((a) => a.name).filter(Boolean).join(", ");
			hits.push({
				pmid: String(row.uid ?? id),
				title: (row.title || "Untitled").replace(/\s+/g, " ").trim(),
				year: String(row.pubdate ?? "").slice(0, 4),
				journal: row.source || "",
				authors
			});
		}
		const value = {
			ok: true,
			hits,
			query
		};
		cache.set(query, {
			at: Date.now(),
			value
		});
		return value;
	} catch (err) {
		return {
			ok: false,
			hits: [],
			reason: err instanceof Error ? err.name === "AbortError" ? "PubMed timed out." : err.message : "PubMed unreachable.",
			query
		};
	}
}
//#endregion
export { searchLive };
