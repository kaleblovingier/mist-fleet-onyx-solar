//#region node_modules/.nitro/vite/services/ssr/assets/trials.server-DrxNNRj4.js
var cache = /* @__PURE__ */ new Map();
var TTL = 12e5;
var UA = "FirstPass/1.0 (educational CYP desk; kaleblovingier@gmail.com)";
function clean(q) {
	return q.replace(/[^\w\s+\-:"()]/g, " ").replace(/\s+/g, " ").trim().slice(0, 160);
}
async function searchLiveTrials(raw) {
	const query = clean(raw);
	if (query.length < 3) return {
		ok: false,
		hits: [],
		reason: "Query too short.",
		query
	};
	const hit = cache.get(query);
	if (hit && Date.now() - hit.at < TTL) return hit.value;
	const url = `https://clinicaltrials.gov/api/v2/studies?query.term=${encodeURIComponent(query)}&pageSize=6`;
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), 8e3);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: {
				Accept: "application/json",
				"User-Agent": UA
			}
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const json = await res.json();
		const hits = [];
		for (const s of json.studies ?? []) {
			const id = s.protocolSection?.identificationModule;
			const status = s.protocolSection?.statusModule?.overallStatus ?? "";
			const phases = s.protocolSection?.designModule?.phases ?? [];
			if (!id?.nctId) continue;
			hits.push({
				nctId: id.nctId,
				title: (id.briefTitle || "Untitled").replace(/\s+/g, " ").trim(),
				status: status.replace(/_/g, " "),
				phase: phases.filter((p) => p && p !== "NA").join(" / ")
			});
		}
		const value = {
			ok: true,
			query,
			hits
		};
		cache.set(query, {
			at: Date.now(),
			value
		});
		return value;
	} catch (err) {
		return {
			ok: false,
			query,
			hits: [],
			reason: err instanceof Error ? err.name === "AbortError" ? "Timed out." : err.message : "Unreachable."
		};
	} finally {
		clearTimeout(t);
	}
}
//#endregion
export { searchLiveTrials };
