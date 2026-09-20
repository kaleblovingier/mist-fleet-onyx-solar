//#region node_modules/.nitro/vite/services/ssr/assets/cpic.server-DH_L2Zyb.js
var cache = /* @__PURE__ */ new Map();
var TTL = 18e5;
var UA = "FirstPass/1.0 (educational CYP desk; kaleblovingier@gmail.com)";
async function getJson(url, ms = 8e3) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: {
				Accept: "application/json",
				"User-Agent": UA
			}
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return await res.json();
	} finally {
		clearTimeout(t);
	}
}
function cleanName(name) {
	return name.replace(/\(.*?\)/g, "").replace(/[^A-Za-z0-9 +\-]/g, " ").replace(/\s+/g, " ").trim();
}
async function lookupCpic(name) {
	const query = cleanName(name);
	if (query.length < 3) return {
		ok: false,
		query,
		hits: [],
		reason: "Name too short."
	};
	const hit = cache.get(query.toLowerCase());
	if (hit && Date.now() - hit.at < TTL) return hit.value;
	try {
		let rows = await getJson(`https://api.cpicpgx.org/v1/drug?name=eq.${encodeURIComponent(query.toLowerCase())}&select=drugid,name,guideline(*)`);
		if (!rows?.length) rows = await getJson(`https://api.cpicpgx.org/v1/drug?name=ilike.*${encodeURIComponent(query)}*&select=drugid,name,guideline(*)&limit=6`);
		const hits = (rows ?? []).filter((r) => r.guideline && r.guideline.name).slice(0, 5).map((r) => ({
			drug: r.name ?? query,
			drugid: r.drugid ?? "",
			guideline: r.guideline?.name ?? "",
			url: r.guideline?.url ?? "https://cpicpgx.org/guidelines/",
			pharmgkb: r.guideline?.pharmgkbid?.[0] ?? ""
		}));
		const value = {
			ok: true,
			query,
			hits,
			reason: hits.length ? void 0 : "CPIC has no guideline row for this name."
		};
		cache.set(query.toLowerCase(), {
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
	}
}
//#endregion
export { lookupCpic };
