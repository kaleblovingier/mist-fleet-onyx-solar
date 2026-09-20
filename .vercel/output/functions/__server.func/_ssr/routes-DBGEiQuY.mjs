import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { r as CONNECTOR_TOKEN_READY_EVENT } from "./types-DXXiBr9d.mjs";
import { _ as priceFor, a as PLANS, b as tweetFor, c as TRY_THREE, d as fulfillKeys, f as invoiceText, g as payClose, h as maxDrugs, i as PAY_RAILS, l as buyerDm, m as launchTweet, n as COMMERCE, o as PLAN_BY_ID, p as launchPosts, r as OPERATOR, s as SITE, t as BUYERS, u as fulfillKey, v as requestLicense, y as salesDm } from "./plans-Bi1jffsv.mjs";
import { C as searchCites, D as tdmOnDesk, E as tdmHostNote, S as pubmedUrl, T as stahlFor, _ as hasStahl, a as DRUGS, b as pgxFor, c as citesFor, d as drugbankUrl, f as familyOf, g as hasPgx, h as hasClinic, i as DRUGBANK, l as clinicFor, m as hasCite, n as CITE_TAGS, o as DRUG_BY_ID, p as fentanylPatchMme, r as CLINIC, s as FAMILIES, t as CITES, u as drugbankSearchUrl, v as methadoneFactor, w as searchDrugs, x as pubmedSearchUrl, y as mmeOnDesk } from "./catalog-2vdmANSb.mjs";
import { _ as ChevronDown, a as Share2, c as Plus, d as KeyRound, f as ExternalLink, g as ClipboardCopy, h as Copy, i as SquareCheckBig, l as Lock, m as CreditCard, o as Search, p as Download, r as Square, s as RotateCcw, t as X, u as LoaderCircle, v as Check } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBGEiQuY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function isLoginRequired(result) {
	return result.ok === false && result.loginRequired === true;
}
function isFramed() {
	try {
		return window.self !== window.top;
	} catch {
		return true;
	}
}
function redirectToLoginIfRequired(result) {
	if (!isLoginRequired(result)) return false;
	const url = result.loginUrl;
	if (!url) return false;
	if (typeof window === "undefined") return false;
	if (isFramed()) {
		const opened = window.open(url, "_blank");
		if (opened) {
			opened.opener = null;
			return true;
		}
	}
	window.location.assign(url);
	return true;
}
var SMOKE = {
	id: "__smoke",
	name: "Tobacco smoke (PAH)",
	brands: [],
	cls: "Combustion CYP1A2 inducer",
	aliases: [
		"smoking",
		"cigarettes",
		"pah"
	],
	enzymes: [{
		enzyme: "CYP1A2",
		kind: "inducer",
		strength: "strong"
	}],
	pd: [],
	toxicityHint: "Loss of 1A2-victim efficacy while smoking; rebound toxicity on cessation",
	note: "Polycyclic aromatic hydrocarbons induce CYP1A2. Nicotine itself is not the inducer.",
	kind: "food"
};
var CHRONIC_ETOH = {
	id: "__etoh-chronic",
	name: "Chronic alcohol (CYP2E1)",
	brands: [],
	cls: "Lifestyle CYP2E1 inducer",
	aliases: ["chronic drinking"],
	enzymes: [{
		enzyme: "CYP2E1",
		kind: "inducer",
		strength: "strong"
	}],
	pd: [],
	toxicityHint: "Induced 2E1 — more NAPQI from acetaminophen, faster 2E1-victim clearance",
	note: "Chronic daily drinking induces CYP2E1. Acute intoxication is a different story (CNS + 2E1 occupancy).",
	kind: "food"
};
var HOST_ETOH_CNS = {
	id: "__etoh-cns",
	name: "Alcohol (host pattern)",
	brands: [],
	cls: "Host CNS depressant",
	aliases: ["drinking", "host alcohol"],
	enzymes: [],
	pd: [
		"alcohol",
		"cns-depressant",
		"seizure-lowering"
	],
	toxicityHint: "Respiratory depression with other CNS drugs, cocaethylene with cocaine",
	note: "Host-factor alcohol — the pattern on the desk, not a pour. Stacks as ethanol for PD.",
	kind: "food"
};
var FIRST_PASS_NMDA = [
	"ketamine",
	"esketamine",
	"two-fdck",
	"mxe",
	"dck",
	"three-meo-pcp"
];
function retargetKetamine(drug, route) {
	if (!FIRST_PASS_NMDA.includes(drug.id)) return drug;
	const enzymes = drug.enzymes.filter((e) => e.enzyme !== "CYP3A4" && e.enzyme !== "CYP2B6");
	if (route === "oral") enzymes.push({
		enzyme: "CYP2B6",
		kind: "substrate",
		sensitivity: "major",
		pathway: "clearance"
	}, {
		enzyme: "CYP3A4",
		kind: "substrate",
		sensitivity: "sensitive",
		pathway: "clearance"
	});
	else if (route === "in") enzymes.push({
		enzyme: "CYP2B6",
		kind: "substrate",
		sensitivity: "major",
		pathway: "clearance"
	}, {
		enzyme: "CYP3A4",
		kind: "substrate",
		sensitivity: "major",
		pathway: "clearance"
	});
	else enzymes.push({
		enzyme: "CYP2B6",
		kind: "substrate",
		sensitivity: "major",
		pathway: "clearance"
	}, {
		enzyme: "CYP3A4",
		kind: "substrate",
		sensitivity: "minor",
		pathway: "clearance"
	});
	const routeNote = route === "oral" ? "Oral dosing sees extensive 3A4/2B6 first-pass; 3A4 inhibitors raise exposure far more than IV." : route === "in" ? "Intranasal esketamine still hits hepatic 2B6/3A4, with less first-pass than oral." : "IV/IM bypasses gut 3A4 first-pass; hepatic CYP2B6 remains the main clearance step.";
	return {
		...drug,
		enzymes,
		note: routeNote
	};
}
function retargetThc(drug, route) {
	if (drug.id !== "dronabinol") return drug;
	const enzymes = route === "oral" ? [{
		enzyme: "CYP2C9",
		kind: "substrate",
		sensitivity: "sensitive",
		pathway: "clearance"
	}, {
		enzyme: "CYP3A4",
		kind: "substrate",
		sensitivity: "major",
		pathway: "clearance"
	}] : [{
		enzyme: "CYP2C9",
		kind: "substrate",
		sensitivity: "minor",
		pathway: "clearance"
	}, {
		enzyme: "CYP3A4",
		kind: "substrate",
		sensitivity: "minor",
		pathway: "clearance"
	}];
	return {
		...drug,
		enzymes,
		note: route === "oral" ? "Edible first-pass makes 11-OH-THC, which is more psychoactive than parent. CYP2C9/3A4 inhibitors stretch it." : "Smoked THC mostly skips 11-OH-THC first-pass. Hepatic 2C9/3A4 still clear parent, but the edible trap is quieter."
	};
}
function applyHost(drugs, host) {
	const mapped = drugs.map((d) => retargetThc(retargetKetamine(d, host.ketamineRoute), host.cannabisRoute));
	const extra = [];
	if (host.smoking) extra.push(SMOKE);
	if (host.alcohol === "chronic") extra.push(CHRONIC_ETOH);
	if (host.alcohol !== "off" && !drugs.some((d) => d.id === "ethanol")) extra.push(HOST_ETOH_CNS);
	return extra.length ? [...mapped, ...extra] : mapped;
}
function isVirtual(id) {
	return id.startsWith("__");
}
var WASHOUT = [
	{
		ids: ["fluoxetine"],
		days: 35,
		label: "Norfluoxetine keeps CYP2D6 blocked for ~5 weeks after the last dose. Stopping yesterday does not clear the interaction."
	},
	{
		ids: [
			"phenelzine",
			"tranylcypromine",
			"isocarboxazid"
		],
		days: 14,
		label: "Irreversible MAOIs need a 14-day washout before a serotonergic, stimulant, or entactogen. Linezolid is an MAOI too."
	},
	{
		ids: ["moclobemide", "harmaline"],
		days: 1,
		label: "Reversible MAO-A (moclobemide, harmala alkaloids) washes out faster (~24 h) but is still contraindicated with MDMA and DMT."
	},
	{
		ids: ["amiodarone"],
		days: 28,
		label: "Amiodarone inhibition (2C9, 3A4, 2D6, 1A2, P-gp) lingers for weeks after the last dose. The half-life is measured in tens of days."
	},
	{
		ids: [
			"rifampin",
			"carbamazepine",
			"phenobarbital",
			"primidone",
			"st-johns-wort"
		],
		days: 14,
		label: "Strong inducers take 1–2 weeks to wash in and about as long to wash out. Stopping yesterday does not restore oral ketamine, OCPs, or methadone."
	},
	{
		ids: ["efavirenz"],
		days: 14,
		label: "Efavirenz 3A4/2B6 induction is not gone the morning after the last dose. Methadone withdrawal can lag a week either direction."
	},
	{
		ids: ["bupropion"],
		days: 7,
		label: "Bupropion and hydroxybupropion keep CYP2D6 blocked for about a week after the last dose."
	}
];
function washoutsFor(ids) {
	const set = new Set(ids);
	return WASHOUT.filter((w) => w.ids.some((id) => set.has(id)));
}
var ENZYMES = [
	"CYP1A2",
	"CYP2B6",
	"CYP2C8",
	"CYP2C9",
	"CYP2C19",
	"CYP2D6",
	"CYP2E1",
	"CYP3A4",
	"P-gp"
];
var PHENOTYPE_ENZYMES = [
	"CYP2D6",
	"CYP2C19",
	"CYP2C9",
	"CYP2B6"
];
var DEFAULT_PHENOTYPES = {
	CYP2D6: "NM",
	CYP2C19: "NM",
	CYP2C9: "NM",
	CYP2B6: "NM"
};
var METABOLIZER_LABEL = {
	PM: "Poor",
	IM: "Intermediate",
	NM: "Normal",
	UM: "Ultrarapid"
};
var KETAMINE_ROUTE_LABEL = {
	iv: "IV / IM",
	in: "Intranasal",
	oral: "Oral"
};
var CANNABIS_ROUTE_LABEL = {
	smoked: "Smoked",
	oral: "Edible"
};
var ALCOHOL_LABEL = {
	off: "Off",
	acute: "Acute",
	chronic: "Chronic"
};
var AGE_LABEL = {
	adult: "Adult",
	geriatric: "Geriatric"
};
var KIDNEY_LABEL = {
	ok: "Usual GFR",
	ckd: "CKD"
};
var PREG_LABEL = {
	off: "Off",
	pregnant: "Pregnant",
	lactating: "Lactating"
};
var PHENO_FREQ = {
	CYP2D6: {
		PM: "~7% EUR",
		UM: "~2–3% EUR"
	},
	CYP2C19: {
		PM: "~3% EUR · ~13% E. Asian",
		UM: "~30% EUR *17"
	},
	CYP2C9: {
		PM: "~2–6% EUR *3/*3",
		IM: "~30% EUR *2/*3"
	},
	CYP2B6: { PM: "~5–10% *6/*6" }
};
var DEFAULT_HOST = {
	phenotypes: { ...DEFAULT_PHENOTYPES },
	smoking: false,
	ketamineRoute: "iv",
	cannabisRoute: "smoked",
	alcohol: "off",
	age: "adult",
	kidney: "ok",
	preg: "off"
};
var STACK_AXES = [
	"serotonin",
	"cns",
	"qt",
	"pressor",
	"nmda"
];
var STACK_LABEL = {
	serotonin: "Serotonin",
	cns: "CNS / airway",
	qt: "QT",
	pressor: "Pressor",
	nmda: "NMDA"
};
var SEVERITY_RANK = {
	contraindicated: 4,
	major: 3,
	moderate: 2,
	minor: 1,
	none: 0
};
var SEVERITY_LABEL = {
	contraindicated: "Contraindicated",
	major: "Major",
	moderate: "Moderate",
	minor: "Minor",
	none: "Clear"
};
/**
* Phenoconversion — a strong inhibitor or inducer rewriting the host genotype.
* Teaching map. Not a CPIC table and not a test order.
*/
var WATCH = [
	"CYP2D6",
	"CYP2C19",
	"CYP2C9",
	"CYP2B6",
	"CYP1A2",
	"CYP3A4"
];
function strongest(drugs, enzyme, kind) {
	const rank = {
		strong: 3,
		moderate: 2,
		weak: 1
	};
	const hits = [];
	for (const d of drugs) {
		const roles = d.enzymes.filter((e) => e.enzyme === enzyme && e.kind === kind);
		if (!roles.length) continue;
		const best = roles.reduce((m, r) => rank[r.strength] > rank[m.strength] ? r : m);
		hits.push({
			id: d.id,
			name: d.name,
			strength: best.strength,
			n: rank[best.strength]
		});
	}
	hits.sort((a, b) => b.n - a.n);
	return hits.map(({ id, name, strength }) => ({
		id,
		name,
		strength
	}));
}
function victimsOf(drugs, enzyme) {
	const out = [];
	for (const d of drugs) {
		if (isVirtual(d.id)) continue;
		const subs = d.enzymes.filter((e) => e.enzyme === enzyme && e.kind === "substrate");
		if (!subs.length) continue;
		const hot = subs.reduce((m, s) => {
			const rank = {
				sensitive: 3,
				major: 2,
				minor: 1
			};
			return rank[s.sensitivity] > rank[m.sensitivity] ? s : m;
		});
		out.push({
			id: d.id,
			name: d.name,
			pathway: hot.pathway
		});
	}
	return out;
}
function clinicalOf(genotype, inh, ind) {
	if (inh === "strong") {
		if (genotype === "PM") return {
			clinical: "PM",
			shifted: false
		};
		if (genotype === "UM") return {
			clinical: "NM-like",
			shifted: true
		};
		return {
			clinical: "PM-like",
			shifted: true
		};
	}
	if (inh === "moderate") {
		if (genotype === "PM") return {
			clinical: "PM",
			shifted: false
		};
		if (genotype === "UM") return {
			clinical: "NM-like",
			shifted: true
		};
		if (genotype === "IM") return {
			clinical: "PM-like",
			shifted: true
		};
		return {
			clinical: "IM-like",
			shifted: true
		};
	}
	if (ind === "strong" || ind === "moderate") {
		if (genotype === "PM") return {
			clinical: "PM",
			shifted: false
		};
		return {
			clinical: "induced",
			shifted: true
		};
	}
	return {
		clinical: genotype,
		shifted: false
	};
}
function pearlFor(row) {
	const inh = row.inhibitors[0];
	const ind = row.inducers[0];
	const victim = row.victims[0];
	if (inh && victim && row.shifted) {
		const verb = victim.pathway === "activation" ? "activation stalls" : "parent climbs";
		return `${inh.name} is a ${inh.strength} ${row.enzyme} inhibitor. The chart says ${METABOLIZER_LABEL[row.genotype] ?? "normal"} — the enzyme on this desk is ${row.clinical.replace("-like", "")}. ${victim.name}: ${verb}. That is phenoconversion, not a new genotype.`;
	}
	if (ind && victim && row.shifted) return `${ind.name} induces ${row.enzyme}. A ${METABOLIZER_LABEL[row.genotype] ?? "normal"} host now clears like an induced phenotype. ${victim.name} will look stolen unless you retitrate.`;
	if (inh && row.shifted) return `${inh.name} locks ${row.enzyme}. Victims added later inherit a ${row.clinical} enzyme, not the lab report.`;
	if (row.genotype !== "NM" && !row.shifted) return `Host is already a ${METABOLIZER_LABEL[row.genotype].toLowerCase()} ${row.enzyme} metabolizer. A perpetrator on this desk does not rewrite a missing enzyme.`;
	return `${row.enzyme} on this desk matches the genotype. Flip a perpetrator or a victim to see phenoconversion.`;
}
function phenoConvertFromDrugs(drugs, host) {
	const rows = [];
	for (const enzyme of WATCH) {
		const inhibitors = strongest(drugs, enzyme, "inhibitor");
		const inducers = strongest(drugs, enzyme, "inducer");
		const victims = victimsOf(drugs, enzyme);
		if (!inhibitors.length && !inducers.length && !victims.length) continue;
		const genotype = enzyme === "CYP2D6" || enzyme === "CYP2C19" || enzyme === "CYP2C9" || enzyme === "CYP2B6" ? host.phenotypes[enzyme] ?? "NM" : "NM";
		const { clinical, shifted } = clinicalOf(genotype, inhibitors[0]?.strength ?? null, inducers[0]?.strength ?? null);
		if (!shifted && !victims.length) continue;
		const row = {
			enzyme,
			genotype,
			clinical,
			shifted,
			inhibitors,
			inducers,
			victims,
			headline: shifted ? `${enzyme}: ${genotype} genotype → ${clinical} on this desk` : victims.length ? `${enzyme}: ${genotype} · ${victims.length} victim${victims.length === 1 ? "" : "s"}` : `${enzyme}: ${genotype}`,
			pearl: ""
		};
		row.pearl = pearlFor(row);
		rows.push(row);
	}
	return rows.sort((a, b) => Number(b.shifted) - Number(a.shifted) || a.enzyme.localeCompare(b.enzyme));
}
function phenoConvertOnDesk(ids, host) {
	return phenoConvertFromDrugs(ids.map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d)), host);
}
function phenoconversionFindings(drugs, host) {
	const rows = phenoConvertFromDrugs(drugs, host).filter((r) => r.shifted && r.victims.length);
	const out = [];
	for (const row of rows) {
		const perp = row.inhibitors[0] ?? row.inducers[0];
		if (!perp) continue;
		const severity = perp.strength === "strong" ? "major" : "moderate";
		const names = row.victims.map((v) => v.name).join(", ");
		out.push({
			id: `pheno-${row.enzyme}-${perp.id}`,
			severity,
			kind: "geno",
			drugIds: [perp.id, ...row.victims.map((v) => v.id)].filter((id) => !isVirtual(id)),
			headline: `${row.enzyme} phenoconversion`,
			enzymes: [row.enzyme],
			effect: row.inhibitors.length ? "genotype rewritten toward PM" : "genotype rewritten toward induced",
			mechanism: `${perp.name} · ${perp.strength} ${row.enzyme} ${row.inhibitors.length ? "inhibitor" : "inducer"}`,
			clinical: `${row.pearl} Victims on this desk: ${names}. The CPIC row still lists the lab genotype — the enzyme in the patient does not.`,
			tags: [
				row.enzyme,
				"phenoconversion",
				"phenotype"
			]
		});
	}
	return out;
}
function hasPhenoConvert(ids, host) {
	return phenoConvertOnDesk(ids, host).some((r) => r.shifted || r.inhibitors.length > 0 && r.victims.length > 0);
}
var ASSAY_BY_ID = Object.fromEntries([
	{
		id: "opiates",
		label: "Opiates",
		target: "Morphine / codeine class",
		note: "Morphine-class EIA. Heroin lights via 6-MAM only on a specific assay. Not methadone, not bup, not fentanyl, often not oxycodone."
	},
	{
		id: "oxycodone",
		label: "Oxycodone",
		target: "Oxycodone / oxymorphone",
		note: "Separate from the opiate cup. Pharmaceutical perc 30s light this; pressed 30s often do not."
	},
	{
		id: "methadone",
		label: "Methadone / EDDP",
		target: "Methadone or EDDP",
		note: "Parent assay vs metabolite (EDDP). EDDP is how an OTP proves they swallowed it, not dunked the bottle."
	},
	{
		id: "buprenorphine",
		label: "Buprenorphine",
		target: "Bup / norbuprenorphine",
		note: "Own immunoassay. A daily film that never lights norbup is a different conversation than an opiate cup."
	},
	{
		id: "fentanyl",
		label: "Fentanyl",
		target: "Fentanyl / norfentanyl",
		note: "Kit-dependent. Nitazenes and carfentanil often miss even a fentanyl strip."
	},
	{
		id: "amphetamines",
		label: "Amphetamines",
		target: "Amphetamine / methamphetamine",
		note: "Broad antibody. Wellbutrin, labetalol, and some decongestants still fool kits."
	},
	{
		id: "cocaine",
		label: "Cocaine",
		target: "Benzoylecgonine",
		note: "The specific cup. Coca-leaf tea is the rare dietary true-positive. Most other false-positives are lore."
	},
	{
		id: "thc",
		label: "THC",
		target: "THC-COOH",
		note: "Hemp / CBD with leftover THC lights it. Synthetic cannabinoids (K2) usually do not."
	},
	{
		id: "benzos",
		label: "Benzodiazepines",
		target: "Nordiazepam-like",
		note: "Diazepam family lights. Clonazepam, lorazepam, and many designer benzos often miss."
	},
	{
		id: "pcp",
		label: "PCP",
		target: "Phencyclidine",
		note: "Rare true-positive. DXM, tramadol, diphenhydramine, lamotrigine, and venlafaxine are the classic fools."
	},
	{
		id: "tca",
		label: "TCA",
		target: "Tricyclic antidepressant",
		note: "Seroquel, Flexeril, Benadryl, and carbamazepine light many TCA cups. Confirm before you accuse."
	}
].map((a) => [a.id, a]));
var KIND_RANK = {
	"false-pos": 0,
	miss: 1,
	expected: 2
};
function hit(assay, kind, note) {
	return {
		assay,
		kind,
		note
	};
}
var CARDS$1 = {
	methadone: {
		pearl: "A morphine-class opiate cup that stays negative on a methadone take-home is the assay working, not a dunked bottle. Ask for EDDP if you need to prove they swallowed it.",
		hits: [
			hit("opiates", "miss", "Methadone is not morphine. The opiate EIA should stay negative."),
			hit("methadone", "expected", "Parent or EDDP. EDDP is the metabolite — dunked bottles do not make it."),
			hit("oxycodone", "miss", "Separate cup. A pharmaceutical perc 30 is a different assay."),
			hit("fentanyl", "miss", "Illicit fentanyl needs its own strip. This is why OTP panels added it."),
			hit("buprenorphine", "miss", "Not a partial agonist. A positive bup cup on methadone is another drug.")
		]
	},
	buprenorphine: {
		pearl: "Suboxone does not light the opiate cup. If the buprenorphine assay is negative on a daily film, look at norbuprenorphine and the clock — not the morphine EIA.",
		hits: [
			hit("opiates", "miss", "Partial agonist, not morphine. Opiate EIA stays negative on a clean film."),
			hit("buprenorphine", "expected", "Bup and norbup. Norbup lasts longer — useful when they last dosed yesterday."),
			hit("methadone", "miss", "Different μ story. A methadone cup on Suboxone is another bottle."),
			hit("fentanyl", "miss", "A fold on a film is occupancy, not a fentanyl strip.")
		]
	},
	naltrexone: {
		pearl: "Vivitrol occupies μ. It does not light any agonist immunoassay. A leftover fold is precipitated withdrawal, not a cup that should have been positive.",
		hits: [
			hit("opiates", "miss", "Antagonist. No morphine epitope."),
			hit("buprenorphine", "miss", "Not a film. A positive bup cup on Vivitrol is another drug."),
			hit("fentanyl", "miss", "The shot does not make fentanyl appear or disappear on a strip.")
		]
	},
	naloxone: {
		pearl: "Naloxone is not a cup. It is the tray. IM / IN naloxone does not explain a urine immunoassay.",
		hits: [hit("opiates", "miss", "Antagonist. No agonist epitope on the strip.")]
	},
	nalmefene: {
		pearl: "Opvee occupies μ longer than naloxone. It still does not light an agonist cup. Re-narcotize vs over-reverse is clinical, not an immunoassay.",
		hits: [hit("opiates", "miss", "Antagonist. Longer occupancy is not a urine finding.")]
	},
	fentanyl: {
		pearl: "Fentanyl is not morphine. A negative opiate cup next to a fentanyl strip is expected. Nitazenes and carfentanil often miss even the fentanyl kit.",
		hits: [
			hit("opiates", "miss", "Synthetic. Morphine-class EIA does not see it."),
			hit("fentanyl", "expected", "If the panel includes a fentanyl EIA / strip. Kit-dependent."),
			hit("oxycodone", "miss", "Pressed 30s stamped oxycodone often fail the oxycodone cup and light fentanyl instead.")
		]
	},
	"dirty-30": {
		pearl: "A pressed 30 is a fentanyl (or nitazene) story. The oxycodone cup staying negative is the tell, not proof they are clean.",
		hits: [
			hit("oxycodone", "miss", "Stamped oxycodone is not pharmaceutical oxycodone."),
			hit("opiates", "miss", "Not morphine."),
			hit("fentanyl", "expected", "Often the only cup that lights — when the kit includes it.")
		]
	},
	"pressed-30": {
		pearl: "Same as a dirty 30. The stamp is marketing. The cup is chemistry.",
		hits: [hit("oxycodone", "miss", "Stamp is not an assay."), hit("fentanyl", "expected", "If the panel has a fentanyl strip.")]
	},
	heroin: {
		pearl: "Heroin is a morphine-class true-positive. 6-MAM is the short-window metabolite that proves diacetylmorphine — it is not on a cheap cup.",
		hits: [hit("opiates", "expected", "Morphine after deacetylation. Codeine may tag along from street mix."), hit("fentanyl", "miss", "Unless the bag was already fentanyl. Most 'heroin' in 2026 is.")]
	},
	morphine: {
		pearl: "The index ligand for the opiate EIA. Poppy seeds can do this too — confirm, do not prosecute a muffin.",
		hits: [hit("opiates", "expected", "The antibody is built around morphine.")]
	},
	codeine: {
		pearl: "Codeine lights the opiate cup. 2D6 to morphine is a phenotype story; the immunoassay does not care.",
		hits: [hit("opiates", "expected", "Codeine and morphine both bind the morphine-class antibody.")]
	},
	oxycodone: {
		pearl: "Pharmaceutical oxycodone often misses the morphine-class opiate EIA. That is why there is a separate oxycodone cup.",
		hits: [hit("opiates", "miss", "Many kits under-detect oxycodone. A negative opiate cup is not 'they skipped the perc.'"), hit("oxycodone", "expected", "The dedicated assay. Oxymorphone tags along.")]
	},
	hydrocodone: {
		pearl: "Hydrocodone is variable on morphine-class kits — weakly positive or a miss. Not a methadone, not a fentanyl.",
		hits: [hit("opiates", "expected", "Often weakly positive. Do not treat a faint line as a dunked bottle."), hit("oxycodone", "miss", "Different epitope. A perc cup staying negative is expected.")]
	},
	hydromorphone: {
		pearl: "Dilaudid is closer to morphine than oxycodone is. Still confirm; still not methadone.",
		hits: [hit("opiates", "expected", "Usually lights the morphine-class EIA.")]
	},
	oxymorphone: {
		pearl: "Opana lights the oxycodone family more than morphine.",
		hits: [hit("oxycodone", "expected", "Oxymorphone is on the oxycodone antibody."), hit("opiates", "miss", "Often a miss on morphine-class kits.")]
	},
	tapentadol: {
		pearl: "Nucynta is not morphine. Dedicated assays exist; the cheap cup usually misses it.",
		hits: [hit("opiates", "miss", "Not on the morphine antibody.")]
	},
	isotonitazene: {
		pearl: "Nitazenes miss morphine and often miss fentanyl strips. A negative cup is not a negative patient.",
		hits: [hit("opiates", "miss", "Benzimidazole opioid, not morphine."), hit("fentanyl", "miss", "Most fentanyl EIAs do not see isotonitazene.")]
	},
	protonitazene: {
		pearl: "Same nitazene miss. Do not treat a negative fentanyl strip as a clean bag.",
		hits: [hit("opiates", "miss", "Not morphine."), hit("fentanyl", "miss", "Fentanyl strip is not a nitazene strip.")]
	},
	metonitazene: {
		pearl: "Nitazene. Immunoassay is not the surveillance system you think it is.",
		hits: [hit("opiates", "miss", "Not morphine."), hit("fentanyl", "miss", "Often a miss on fentanyl EIA.")]
	},
	etonitazene: {
		pearl: "Nitazene. Cups were built for a different decade.",
		hits: [hit("opiates", "miss", "Not morphine."), hit("fentanyl", "miss", "Often a miss.")]
	},
	carfentanil: {
		pearl: "Carfentanil often misses even a fentanyl strip. Naloxone still belongs on the tray.",
		hits: [hit("opiates", "miss", "Not morphine."), hit("fentanyl", "miss", "Potency is not epitope.")]
	},
	"seven-oh": {
		pearl: "7-OH-mitragynine is not morphine and not buprenorphine on most cups. Kratom panels exist; the cheap board does not.",
		hits: [hit("opiates", "miss", "Atypical opioid. Morphine EIA usually stays negative."), hit("buprenorphine", "miss", "Not a film. Do not read a negative bup cup as 'they skipped kratom.'")]
	},
	kratom: {
		pearl: "Mitragynine needs its own assay. A negative opiate cup on daily kratom is expected.",
		hits: [hit("opiates", "miss", "Not morphine.")]
	},
	quetiapine: {
		pearl: "Seroquel for sleep at the window is a classic TCA-cup false-positive. Confirm before you chart an overdose or a lie.",
		hits: [hit("tca", "false-pos", "Quetiapine cross-reacts on many TCA immunoassays. LC-MS/MS is quiet.")]
	},
	cyclobenzaprine: {
		pearl: "Flexeril is a TCA-shaped molecule. The TCA cup lights; the patient is not on amitriptyline.",
		hits: [hit("tca", "false-pos", "Tricyclic-adjacent structure. Confirm.")]
	},
	diphenhydramine: {
		pearl: "Benadryl fools TCA and sometimes PCP cups. An OTP night-time antihistamine is not a TCA OD.",
		hits: [hit("tca", "false-pos", "Common OTC TCA immunoassay cross-reactant."), hit("pcp", "false-pos", "Some PCP kits. Confirm.")]
	},
	hydroxyzine: {
		pearl: "Vistaril is a window antihistamine. Some TCA kits still twitch. Confirm; do not take the film.",
		hits: [hit("tca", "false-pos", "Less famous than Seroquel, still reported.")]
	},
	carbamazepine: {
		pearl: "Tegretol can light a TCA cup and dump methadone. Two different rows — immunoassay vs 3A4/2B6.",
		hits: [hit("tca", "false-pos", "Carbamazepine is a documented TCA EIA interferent.")]
	},
	sertraline: {
		pearl: "Zoloft can light a benzodiazepine immunoassay. A benzo cup on a patient who swears they only take Zoloft may be the antibody, not a Klonopin.",
		hits: [hit("benzos", "false-pos", "Sertraline is a documented benzo EIA false-positive (Saitman).")]
	},
	clonazepam: {
		pearl: "Klonopin often misses the cheap benzo cup. A negative immunoassay is not proof they skipped the tablet.",
		hits: [hit("benzos", "miss", "Poor cross-reactivity on many nordiazepam-targeted kits. LC-MS/MS sees it.")]
	},
	lorazepam: {
		pearl: "Ativan is glucuronidated and often misses the benzo EIA. Same trap as clonazepam.",
		hits: [hit("benzos", "miss", "Many kits under-detect lorazepam.")]
	},
	alprazolam: {
		pearl: "Xanax is variable. Some kits see it; some do not. Do not treat a negative cup as adherence.",
		hits: [hit("benzos", "expected", "Often lights, not reliably. Confirm if the answer changes the window.")]
	},
	diazepam: {
		pearl: "Valium is the index ligand for most benzo EIAs. Nordiazepam is what the antibody was raised against.",
		hits: [hit("benzos", "expected", "The cup was built for this family.")]
	},
	bromazolam: {
		pearl: "Designer benzo. Immunoassay is a coin flip. A negative cup next to a seized bromazolam tablet is not a clean patient.",
		hits: [hit("benzos", "miss", "Many nordiazepam kits miss bromazolam. LC-MS/MS or a designer-benzo panel.")]
	},
	bupropion: {
		pearl: "Wellbutrin is the most famous amphetamine-cup false-positive in clinic. Confirm before you chart meth.",
		hits: [hit("amphetamines", "false-pos", "Bupropion and metabolites cross-react on amphetamine EIAs.")]
	},
	dextromethorphan: {
		pearl: "DXM is a classic PCP-cup false-positive and a 2D6 victim. Two different boards — immunoassay vs phenotype.",
		hits: [hit("pcp", "false-pos", "Dextromethorphan fools many PCP EIAs. Confirm.")]
	},
	lamotrigine: {
		pearl: "Lamictal can light a PCP cup. A mood-stabilizer start is not phencyclidine.",
		hits: [hit("pcp", "false-pos", "Documented PCP EIA interferent.")]
	},
	venlafaxine: {
		pearl: "Effexor can light PCP. Confirm.",
		hits: [hit("pcp", "false-pos", "Venlafaxine / O-desmethylvenlafaxine vs PCP antibody.")]
	},
	tramadol: {
		pearl: "Tramadol is not morphine. PCP and some buprenorphine kits still twitch. Confirm before you change the film.",
		hits: [
			hit("opiates", "miss", "Not morphine."),
			hit("pcp", "false-pos", "Classic PCP EIA fool."),
			hit("buprenorphine", "false-pos", "Some bup kits.")
		]
	},
	rifampin: {
		pearl: "Rifampin dumps methadone and can false-positive an opiate cup. Stolen-dose PK plus a dirty immunoassay — two rows.",
		hits: [hit("opiates", "false-pos", "Historical opiate EIA interferent. Confirm; still watch the 3A4/2B6 dump.")]
	},
	ciprofloxacin: {
		pearl: "Some fluoroquinolones have been reported as opiate EIA false-positives. Cipro next to methadone is still the QT / 1A2 row first.",
		hits: [hit("opiates", "false-pos", "Reported; kit-dependent. Confirm. Do not skip the QT board.")]
	},
	efavirenz: {
		pearl: "Sustiva has been reported to light THC cups and dumps methadone. Two rows: immunoassay and 3A4/2B6 induction.",
		hits: [hit("thc", "false-pos", "Efavirenz vs some cannabinoid EIAs. Confirm.")]
	},
	cocaine: {
		pearl: "Benzoylecgonine is the specific cup. A true-positive is usually cocaine. Coca tea is the dietary footnote.",
		hits: [hit("cocaine", "expected", "BZE. Rare dietary true-positive from coca leaf.")]
	},
	dronabinol: {
		pearl: "Marinol is THC. The cup should light. That is the prescription, not a slip.",
		hits: [hit("thc", "expected", "Exogenous THC-COOH. Chart the prescription so the cup is not a fight.")]
	},
	cannabidiol: {
		pearl: "Clean CBD should not light THC. Many bottles are not clean. Hemp-derived products still carry THC-COOH.",
		hits: [hit("thc", "expected", "If the product is dirty with THC. Pure CBD is a miss.")]
	},
	ethanol: {
		pearl: "EtG / EtS are not on a cheap drugs-of-abuse cup. A standard UDS does not prove they drank — or that they did not.",
		hits: []
	}
};
function udsFor(id) {
	const row = CARDS$1[id];
	if (!row) return void 0;
	return {
		id,
		...row
	};
}
function udsOnDesk(ids) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const id of ids) {
		const card = udsFor(id);
		if (!card || seen.has(id)) continue;
		seen.add(id);
		out.push(card);
	}
	return out;
}
function udsHeadline(ids) {
	if (ids.includes("methadone")) return "Opiate EIA stays negative on methadone — that is the assay.";
	if (ids.includes("buprenorphine")) return "A Suboxone film does not light the opiate cup. Ask for bup / norbup.";
	if (ids.includes("fentanyl") || ids.includes("dirty-30") || ids.includes("pressed-30")) return "Fentanyl is not morphine. Nitazenes often miss the fentanyl strip too.";
	if (udsOnDesk(ids).some((c) => c.hits.some((h) => h.kind === "false-pos"))) return "At least one immunoassay false-positive sits on this desk. Confirm before you chart it.";
	if (udsOnDesk(ids).length) return "Immunoassay is presumptive. LC-MS/MS is the tie-breaker.";
	return null;
}
function finding(id, suffix, severity, headline, effect, mechanism, clinical) {
	DRUG_BY_ID[id];
	return {
		id: `${id}__clinic-${suffix}`,
		severity,
		kind: "clinic",
		drugIds: [id],
		headline,
		enzymes: [],
		effect,
		mechanism,
		clinical,
		tags: [
			"clinic",
			"uds",
			"mat"
		]
	};
}
/** Short clinic findings that point at the UDS board. One per desk, not one per assay. */
function udsFindings(ids) {
	const out = [];
	const on = (id) => ids.includes(id);
	if (on("methadone")) out.push(finding("methadone", "uds-miss", "moderate", "Methadone vs the opiate cup", "opiate EIA stays negative", "morphine-class immunoassay does not see methadone", "A negative morphine-class cup on a methadone take-home is the assay working. EDDP proves they swallowed it. Open the UDS tab. Not LC-MS/MS and not a dunked-bottle verdict."));
	if (on("buprenorphine")) out.push(finding("buprenorphine", "uds-miss", "moderate", "Suboxone vs the opiate cup", "needs a buprenorphine assay", "partial agonist is not morphine", "Buprenorphine does not light the opiate EIA. Ask for bup / norbuprenorphine. A negative morphine cup is expected on a daily film. Open the UDS tab."));
	if (on("fentanyl") || on("dirty-30") || on("pressed-30")) {
		const id = on("fentanyl") ? "fentanyl" : on("dirty-30") ? "dirty-30" : "pressed-30";
		out.push(finding(id, "uds-miss", "moderate", "Fentanyl is not an opiate cup", "morphine EIA misses fentanyl; nitazenes miss fentanyl strips", "synthetic epitope", "Fentanyl needs its own strip. Pressed 30s often fail the oxycodone cup. Nitazenes and carfentanil often miss even the fentanyl kit. Open the UDS tab."));
	}
	if (on("quetiapine")) out.push(finding("quetiapine", "uds-tca", "moderate", "Seroquel vs the TCA cup", "false-positive TCA immunoassay", "cross-reactivity, not a TCA", "Quetiapine lights many TCA cups. Confirm with LC-MS/MS before you chart an overdose or a lie. Open the UDS tab. Saitman 2014 is on the Cites shelf."));
	if (on("sertraline")) out.push(finding("sertraline", "uds-benzo", "minor", "Zoloft vs the benzo cup", "false-positive benzodiazepine immunoassay", "sertraline cross-reactivity", "Sertraline can light a benzo EIA. A patient who swears they only take Zoloft may be telling the truth. Confirm. Open the UDS tab."));
	if (on("bupropion")) out.push(finding("bupropion", "uds-amph", "moderate", "Wellbutrin vs the amphetamine cup", "false-positive amphetamine immunoassay", "bupropion metabolite cross-reactivity", "Bupropion is the most famous amphetamine-cup fool in clinic. Confirm before you chart meth. Open the UDS tab."));
	if (on("dextromethorphan")) out.push(finding("dextromethorphan", "uds-pcp", "moderate", "DXM vs the PCP cup", "false-positive PCP immunoassay", "dextromethorphan cross-reactivity", "Dextromethorphan lights many PCP EIAs. Confirm. The 2D6 board is a different row. Open the UDS tab."));
	if (on("rifampin") && on("methadone")) out.push(finding("rifampin", "uds-opiate", "moderate", "Rifampin vs the opiate cup", "possible false-positive plus a stolen methadone dose", "immunoassay interferent + 3A4/2B6 induction", "Rifampin can false-positive an opiate EIA and still dump methadone. Two rows: the cup and the window. Confirm the immunoassay; do not skip the stolen-dose watch."));
	if (on("bromazolam") || on("clonazepam") || on("lorazepam")) {
		const id = on("bromazolam") ? "bromazolam" : on("clonazepam") ? "clonazepam" : "lorazepam";
		out.push(finding(id, "uds-benzo-miss", "minor", `${DRUG_BY_ID[id]?.name ?? id} vs the benzo cup`, "benzodiazepine EIA often misses", "poor nordiazepam cross-reactivity", "Many cheap benzo cups were raised against nordiazepam. Clonazepam, lorazepam, and designer benzos often miss. A negative cup is not a skipped tablet. Open the UDS tab."));
	}
	return out;
}
function sortHits(hits) {
	return [...hits].sort((a, b) => KIND_RANK[a.kind] - KIND_RANK[b.kind] || a.assay.localeCompare(b.assay));
}
var STRENGTH_RANK = {
	strong: 3,
	moderate: 2,
	weak: 1
};
/** Fruit juices / EGCG that cut OATP uptake. Grapefruit also knocks out gut 3A4 — that is a different row. */
var OATP_PERP = /* @__PURE__ */ new Set([
	"grapefruit",
	"pomegranate",
	"starfruit",
	"oatp-juice",
	"green-tea"
]);
var OATP_VICTIM = /* @__PURE__ */ new Set([
	"fexofenadine",
	"atenolol",
	"nadolol",
	"aliskiren"
]);
var VITK_FOOD = /* @__PURE__ */ new Set([
	"vitamin-k",
	"leafy-greens",
	"soy"
]);
var T4_POLYPHENOL = /* @__PURE__ */ new Set([
	"levothyroxine",
	"iron",
	"alendronate"
]);
var ENTERAL_VICTIM = /* @__PURE__ */ new Set([
	"phenytoin",
	"warfarin",
	"levothyroxine",
	"carbamazepine"
]);
/** Ritonavir-boosted products: 3A4 inhibit raises fentanyl; methadone often falls. */
var RITONAVIR_BOOST = /* @__PURE__ */ new Set(["ritonavir", "paxlovid"]);
/** Illicit / street full agonists that stack with a methadone take-home. */
var STREET_FULL_AGONIST = /* @__PURE__ */ new Set([
	"fentanyl",
	"dirty-30",
	"heroin",
	"carfentanil",
	"isotonitazene",
	"protonitazene",
	"metonitazene",
	"etonitazene"
]);
function pkSeverity(strength, sensitivity, nti, pathway, kind) {
	const ntiOrSensitive = nti || sensitivity === "sensitive";
	if (kind === "inhibitor") {
		if (strength === "strong" && ntiOrSensitive) return "contraindicated";
		if (strength === "strong" && sensitivity === "major") return "major";
		if (strength === "strong") return "moderate";
		if (strength === "moderate" && ntiOrSensitive) return "major";
		if (strength === "moderate" && sensitivity === "major") return "moderate";
		if (strength === "moderate") return "minor";
		if (ntiOrSensitive) return "moderate";
		return "minor";
	}
	if (pathway === "activation") {
		if (strength === "strong") return "major";
		if (strength === "moderate") return "moderate";
		return "minor";
	}
	if (strength === "strong" && ntiOrSensitive) return "contraindicated";
	if (strength === "strong") return "major";
	if (strength === "moderate" && (ntiOrSensitive || sensitivity === "major")) return "major";
	if (strength === "moderate") return "moderate";
	return "minor";
}
function substratesOf(drug, enzyme) {
	return drug.enzymes.filter((e) => e.enzyme === enzyme && e.kind === "substrate");
}
function perpetratorsOf(drug, enzyme, kind) {
	return drug.enzymes.filter((e) => e.enzyme === enzyme && e.kind === kind);
}
function pairId(a, b, suffix) {
	return [a, b].sort().join("__") + "__" + suffix;
}
function names(ids) {
	return ids.map((id) => DRUG_BY_ID[id]?.name ?? id);
}
function arrowFor(kind, pathway) {
	if (kind === "inhibitor" && pathway === "clearance") return "↑ exposure";
	if (kind === "inhibitor" && pathway === "activation") return "↓ active metabolite";
	if (kind === "inducer" && pathway === "clearance") return "↓ exposure / loss of efficacy";
	return "↑ active metabolite";
}
function pkClinical(victim, kind, pathway) {
	if (kind === "inhibitor" && pathway === "activation") return `Expect blunted conversion of ${victim.name} to its active metabolite and reduced clinical effect (${victim.toxicityHint}).`;
	if (kind === "inducer" && pathway === "clearance") return `Expect falling ${victim.name} levels and loss of efficacy. Monitor for treatment failure (${victim.toxicityHint}).`;
	if (kind === "inducer" && pathway === "activation") return `Faster activation of ${victim.name} may raise active-metabolite exposure. Watch for ${victim.toxicityHint}.`;
	return `Expect higher ${victim.name} exposure. Watch for ${victim.toxicityHint}.`;
}
function pkFindings(a, b) {
	const out = [];
	for (const enzyme of ENZYMES) {
		for (const [perp, victim] of [[a, b], [b, a]]) for (const kind of ["inhibitor", "inducer"]) {
			const perps = perpetratorsOf(perp, enzyme, kind);
			const subs = substratesOf(victim, enzyme);
			if (!perps.length || !subs.length) continue;
			if (enzyme === "P-gp" && kind === "inhibitor" && OATP_PERP.has(perp.id) && victim.id === "fexofenadine") continue;
			if (enzyme === "CYP3A4" && kind === "inhibitor" && victim.id === "methadone" && RITONAVIR_BOOST.has(perp.id)) continue;
			const strongest = perps.reduce((m, p) => STRENGTH_RANK[p.strength] > STRENGTH_RANK[m.strength] ? p : m);
			const hottest = subs.reduce((m, s) => {
				const rank = {
					sensitive: 3,
					major: 2,
					minor: 1
				};
				return rank[s.sensitivity] > rank[m.sensitivity] ? s : m;
			});
			const severity = pkSeverity(strongest.strength, hottest.sensitivity, Boolean(hottest.nti), hottest.pathway, kind);
			const verb = kind === "inhibitor" ? "inhibition" : "induction";
			const pathwayWord = hottest.pathway === "activation" ? "prodrug activation" : "clearance";
			out.push({
				id: pairId(a.id, b.id, `pk-${enzyme}-${kind}-${perp.id}`),
				severity,
				kind: "pk",
				drugIds: [perp.id, victim.id],
				headline: `${perp.name} × ${victim.name}`,
				enzymes: [enzyme],
				effect: arrowFor(kind, hottest.pathway),
				mechanism: `${strongest.strength} ${enzyme} ${verb} of ${pathwayWord}`,
				clinical: `${perp.name} is a ${strongest.strength} ${enzyme} ${kind}. ${victim.name} is a ${hottest.sensitivity} ${enzyme} substrate${hottest.nti ? " with a narrow therapeutic index" : ""}${hottest.pathway === "activation" ? " (prodrug)" : ""}. ${pkClinical(victim, kind, hottest.pathway)}`,
				tags: [
					enzyme,
					kind,
					hottest.pathway
				]
			});
		}
		const aSubs = substratesOf(a, enzyme);
		const bSubs = substratesOf(b, enzyme);
		if (!out.some((f) => f.enzymes.includes(enzyme) && (f.tags.includes("inhibitor") || f.tags.includes("inducer"))) && aSubs.length && bSubs.length) {
			const aHot = aSubs[0];
			const bHot = bSubs[0];
			const nti = Boolean(aHot.nti || bHot.nti);
			const bothHot = (aHot.sensitivity === "sensitive" || aHot.sensitivity === "major") && (bHot.sensitivity === "sensitive" || bHot.sensitivity === "major");
			if (nti || bothHot) out.push({
				id: pairId(a.id, b.id, `pk-comp-${enzyme}`),
				severity: nti ? "moderate" : "minor",
				kind: "pk",
				drugIds: [a.id, b.id],
				headline: `${a.name} × ${b.name}`,
				enzymes: [enzyme],
				effect: "competitive substrate overlap",
				mechanism: `shared ${enzyme} substrate`,
				clinical: `Both drugs are ${enzyme} substrates. Competition is usually modest unless a perpetrator is also present, but narrow-index or sensitive substrates can still shift.`,
				tags: [enzyme, "competition"]
			});
		}
	}
	return out;
}
function has(drug, flag) {
	return drug.pd.includes(flag);
}
function pdPair(a, b, opts) {
	return {
		id: pairId(a.id, b.id, opts.suffix),
		severity: opts.severity,
		kind: "pd",
		drugIds: [a.id, b.id],
		headline: opts.headline ?? `${a.name} × ${b.name}`,
		enzymes: [],
		effect: opts.effect,
		mechanism: opts.mechanism,
		clinical: opts.clinical,
		tags: opts.tags
	};
}
function pdFindings(a, b) {
	const out = [];
	const aMaoi = has(a, "maoi");
	const bMaoi = has(b, "maoi");
	const aSero = has(a, "serotonergic");
	const bSero = has(b, "serotonergic");
	if (aMaoi && bSero || bMaoi && aSero || aMaoi && bMaoi) out.push(pdPair(a, b, {
		suffix: "pd-maoi-sero",
		severity: "contraindicated",
		effect: "serotonin syndrome / hypertensive crisis",
		mechanism: "MAOI × serotonergic",
		clinical: "Combining an MAOI (including linezolid) with another serotonergic drug is contraindicated. Risk of life-threatening serotonin syndrome and, with tyramine-like effects, hypertensive crisis.",
		tags: ["serotonin", "maoi"]
	}));
	else if (aSero && bSero) {
		const strong = has(a, "ssri-snri") || has(b, "ssri-snri") || a.id === "tramadol" || b.id === "tramadol" || a.id === "dextromethorphan" || b.id === "dextromethorphan" || a.id === "mdma" || b.id === "mdma" || has(a, "serotonergic") && has(a, "stimulant") || has(b, "serotonergic") && has(b, "stimulant");
		out.push(pdPair(a, b, {
			suffix: "pd-sero",
			severity: strong ? "major" : "moderate",
			effect: "additive serotonergic tone",
			mechanism: "serotonin syndrome risk",
			clinical: `Both ${a.name} and ${b.name} raise serotonergic activity. Watch for agitation, clonus, hyperreflexia, fever, and diarrhea. Risk climbs with additional serotonergic agents.`,
			tags: ["serotonin"]
		}));
	}
	const aOp = has(a, "opioid");
	const bOp = has(b, "opioid");
	const aBz = has(a, "benzo-zdrug");
	const bBz = has(b, "benzo-zdrug");
	const aCns = has(a, "cns-depressant");
	const bCns = has(b, "cns-depressant");
	const aPartial = has(a, "partial-opioid");
	const bPartial = has(b, "partial-opioid");
	const aAnt = has(a, "opioid-antagonist");
	const bAnt = has(b, "opioid-antagonist");
	const gabaA = a.id === "gabapentin" || a.id === "pregabalin";
	const gabaB = b.id === "gabapentin" || b.id === "pregabalin";
	const gabaOp = gabaA && bOp || gabaB && aOp;
	if (aOp && bBz || bOp && aBz) out.push(pdPair(a, b, {
		suffix: "pd-opioid-benzo",
		severity: "major",
		effect: "respiratory depression",
		mechanism: "opioid × benzodiazepine / Z-drug",
		clinical: "FDA boxed warning: opioids plus benzodiazepines (or Z-drugs) cause profound sedation, respiratory depression, coma, and death. Methadone and buprenorphine desks see this as a street-benzo or a sleep prescription — same airway. Avoid unless no alternative exists; if combined, use the lowest doses and monitor.",
		tags: [
			"cns",
			"respiratory",
			"mat"
		]
	}));
	if (aPartial && bOp && !bPartial && !bAnt || bPartial && aOp && !aPartial && !aAnt) out.push(pdPair(a, b, {
		suffix: "pd-bup-precip",
		severity: "major",
		effect: "precipitated withdrawal",
		mechanism: "partial μ-agonist × full agonist",
		clinical: "Buprenorphine is a high-affinity partial μ-agonist. Combined with a full agonist (fentanyl, methadone, 7-OH) you get occupancy conflict: start bup on a full-agonist load and you precipitate withdrawal — the classic failed induction; take a full agonist on stable bup and the high is blocked. This desk is not a dosing protocol.",
		tags: ["opioid", "mat"]
	}));
	else if (aOp && bOp && !aPartial && !bPartial && !aAnt && !bAnt) {
		const takeHomeStreet = a.id === "methadone" && STREET_FULL_AGONIST.has(b.id) || b.id === "methadone" && STREET_FULL_AGONIST.has(a.id);
		out.push(pdPair(a, b, {
			suffix: "pd-opioid-stack",
			severity: "major",
			effect: takeHomeStreet ? "stacked μ load on a take-home" : "stacked μ-agonist load",
			mechanism: takeHomeStreet ? "methadone take-home × illicit full agonist" : "opioid × opioid",
			clinical: takeHomeStreet ? "A methadone take-home plus illicit fentanyl (or a nitazene / dirty 30) is one airway, not two prescriptions. Naloxone still reverses the μ-agonist; it does not reverse xylazine or medetomidine. This is not a dosing protocol." : "Two μ-agonists are one airway, not two prescriptions. A methadone take-home plus illicit fentanyl is stacked μ load. Street 'perc 30s' stamped as oxycodone are often fentanyl or a nitazene. Naloxone still reverses the opioid; it does not reverse xylazine.",
			tags: [
				"cns",
				"opioid",
				"street",
				"mat"
			]
		}));
	}
	if (gabaOp) out.push(pdPair(a, b, {
		suffix: "pd-gaba-opioid",
		severity: "major",
		effect: "respiratory depression",
		mechanism: "gabapentinoid × opioid",
		clinical: "Gabapentin and pregabalin add respiratory depression next to methadone or buprenorphine that is easy to miss — they are not 'just nerve pain.' FDA has a warning. This is PD, not CYP. Extra caution with a benzo on the same board.",
		tags: [
			"cns",
			"respiratory",
			"mat"
		]
	}));
	if (has(a, "alpha2-agonist") && bOp || has(b, "alpha2-agonist") && aOp) out.push(pdPair(a, b, {
		suffix: "pd-alpha2-opioid",
		severity: "major",
		effect: "sedation not reversed by naloxone",
		mechanism: "α2-agonist × opioid",
		clinical: "Xylazine, medetomidine, lofexidine (Lucemyra), and clonidine sedate independently of the mu receptor. Naloxone reverses the opioid but not the α2 airway loss — support ventilation, do not stack extra naloxone expecting a wake-up. On an OTP desk that is Lucemyra or clonidine next to methadone, not only street tranq.",
		tags: [
			"cns",
			"alpha2",
			"street"
		]
	}));
	if (has(a, "ghb") && (bCns || has(b, "alcohol") || bBz || bOp) || has(b, "ghb") && (aCns || has(a, "alcohol") || aBz || aOp)) out.push(pdPair(a, b, {
		suffix: "pd-ghb-cns",
		severity: "contraindicated",
		effect: "coma / apnea",
		mechanism: "GHB × CNS depressant",
		clinical: "Sodium oxybate (GHB) plus alcohol, benzodiazepines, opioids, or other CNS depressants is labeled contraindicated. The combination produces abrupt respiratory arrest.",
		tags: ["cns", "ghb"]
	}));
	else if (!(has(a, "alpha2-agonist") && bOp || has(b, "alpha2-agonist") && aOp) && !(aOp && bOp) && !gabaOp && !(aOp && bBz || bOp && aBz) && (aOp && bCns || bOp && aCns || aCns && bCns && a.id !== b.id)) {
		const gabapentinoid = a.id === "gabapentin" || b.id === "gabapentin" || a.id === "pregabalin" || b.id === "pregabalin";
		const nmda = has(a, "dissociative") || has(b, "dissociative") || has(a, "alcohol") || has(b, "alcohol");
		out.push(pdPair(a, b, {
			suffix: "pd-cns",
			severity: aOp || bOp || gabapentinoid || nmda ? "major" : "moderate",
			effect: "additive CNS depression",
			mechanism: nmda ? has(a, "dissociative") || has(b, "dissociative") ? "NMDA dissociative × CNS depressant" : "alcohol × CNS depressant" : "CNS depressant synergy",
			clinical: nmda ? `Combining ${a.name} and ${b.name} stacks airway and sedative risk. NMDA dissociatives plus benzodiazepines or alcohol also blunt ketamine/esketamine antidepressant response. This is not a recreational pairing map — it is a respiratory-depression warning.` : `Additive sedation and respiratory depression with ${a.name} and ${b.name}. Extra caution in older adults and sleep-disordered breathing.`,
			tags: ["cns"]
		}));
	}
	const qtScore = (x) => has(x, "qt-known") ? 2 : has(x, "qt-possible") ? 1 : 0;
	const qt = qtScore(a) + qtScore(b);
	if (qtScore(a) && qtScore(b)) {
		const methadoneQt = a.id === "methadone" || b.id === "methadone";
		out.push(pdPair(a, b, {
			suffix: "pd-qt",
			severity: qt >= 3 ? "major" : "moderate",
			effect: "additive QT prolongation / TdP",
			mechanism: methadoneQt ? "methadone QT stack" : "combined QT load",
			clinical: methadoneQt ? `Methadone is a known-QT opioid. ${a.id === "methadone" ? b.name : a.name} adds ventricular-repolarization load. Check K and Mg, pull an ECG if the pair cannot be separated, and do not treat Vistaril / Zofran / Celexa / Seroquel as free extras at the window.` : `Both drugs prolong ventricular repolarization. Stacking QT risk raises torsades de pointes. Check electrolytes, avoid other QT drugs, and review ECG if the pair cannot be separated.`,
			tags: methadoneQt ? ["qt", "mat"] : ["qt"]
		}));
	}
	const bleedA = has(a, "anticoagulant") || has(a, "antiplatelet") || has(a, "nsaid");
	const bleedB = has(b, "anticoagulant") || has(b, "antiplatelet") || has(b, "nsaid");
	const ssriBleed = has(a, "ssri-snri") && (has(b, "anticoagulant") || has(b, "nsaid") || has(b, "antiplatelet")) || has(b, "ssri-snri") && (has(a, "anticoagulant") || has(a, "nsaid") || has(a, "antiplatelet"));
	if (bleedA && bleedB && !(has(a, "nsaid") && has(b, "nsaid") && !has(a, "anticoagulant") && !has(b, "anticoagulant") && !has(a, "antiplatelet") && !has(b, "antiplatelet")) || ssriBleed) {
		const twoAc = has(a, "anticoagulant") && has(b, "anticoagulant");
		const acPlus = (has(a, "anticoagulant") || has(b, "anticoagulant")) && (has(a, "nsaid") || has(b, "nsaid") || has(a, "antiplatelet") || has(b, "antiplatelet"));
		out.push(pdPair(a, b, {
			suffix: "pd-bleed",
			severity: twoAc || acPlus ? "major" : "moderate",
			effect: "additive bleeding",
			mechanism: "hemostasis synergy",
			clinical: `Combined effects on coagulation, platelets, or gastric mucosa raise bleed risk (GI, intracranial). SSRIs add platelet-serotonin depletion. Reconsider gastroprotection and the need for every agent.`,
			tags: ["bleeding"]
		}));
	} else if (has(a, "nsaid") && has(b, "nsaid")) out.push(pdPair(a, b, {
		suffix: "pd-nsaid",
		severity: "moderate",
		effect: "stacked NSAID toxicity",
		mechanism: "duplicate NSAID",
		clinical: "Two NSAIDs (including aspirin at anti-inflammatory doses) raise GI bleed and renal risk without extra analgesia.",
		tags: ["bleeding", "renal"]
	}));
	if ((has(a, "anticoagulant") || has(b, "anticoagulant") || a.id === "lithium" || b.id === "lithium") && (has(a, "nsaid") || has(b, "nsaid")) && (a.id === "lithium" || b.id === "lithium")) out.push(pdPair(a, b, {
		suffix: "pd-lithium-nsaid",
		severity: "major",
		effect: "↑ lithium level",
		mechanism: "NSAID reduced lithium clearance",
		clinical: "NSAIDs reduce renal lithium clearance and can precipitate lithium toxicity. Prefer acetaminophen for pain, or monitor levels closely.",
		tags: ["lithium", "renal"]
	}));
	if ((has(a, "acei-arb") || has(b, "acei-arb")) && (has(a, "nsaid") || has(b, "nsaid")) && (a.id === "lithium" || b.id === "lithium") === false) {}
	if (has(a, "acei-arb") && has(b, "nsaid") || has(b, "acei-arb") && has(a, "nsaid")) out.push(pdPair(a, b, {
		suffix: "pd-acei-nsaid",
		severity: "moderate",
		effect: "afferent + efferent renal hit",
		mechanism: "ACEI/ARB × NSAID",
		clinical: "ACE inhibitors/ARBs dilate the efferent arteriole; NSAIDs constrict the afferent. Together they drop GFR — the start of the 'triple whammy' when a diuretic is added.",
		tags: ["renal"]
	}));
	if (has(a, "acei-arb") && has(b, "k-sparing") || has(b, "acei-arb") && has(a, "k-sparing")) out.push(pdPair(a, b, {
		suffix: "pd-hyperk",
		severity: "major",
		effect: "hyperkalemia",
		mechanism: "RAAS blockade × potassium retention",
		clinical: "ACEI/ARB plus a potassium-sparing agent (spironolactone, TMP-SMX) can produce life-threatening hyperkalemia. Check potassium and creatinine, especially in CKD.",
		tags: ["potassium"]
	}));
	if (has(a, "acei-arb") && b.id === "lithium" || has(b, "acei-arb") && a.id === "lithium" || has(a, "loop-thiazide") && b.id === "lithium" || has(b, "loop-thiazide") && a.id === "lithium") out.push(pdPair(a, b, {
		suffix: "pd-lithium-renal",
		severity: "major",
		effect: "↑ lithium level",
		mechanism: "reduced lithium clearance",
		clinical: "ACE inhibitors, ARBs, and thiazides reduce lithium clearance. This is a classic precipitant of lithium toxicity.",
		tags: ["lithium"]
	}));
	if (has(a, "hypoglycemic") && has(b, "hypoglycemic") || has(a, "insulin-secretagogue") && (b.id === "ciprofloxacin" || b.id === "levofloxacin" || b.id === "moxifloxacin") || has(b, "insulin-secretagogue") && (a.id === "ciprofloxacin" || a.id === "levofloxacin" || a.id === "moxifloxacin")) out.push(pdPair(a, b, {
		suffix: "pd-hypoglycemia",
		severity: "moderate",
		effect: "stacked hypoglycemia",
		mechanism: "glucose-lowering synergy",
		clinical: "Combined glucose-lowering (or a fluoroquinolone with a sulfonylurea) can produce severe hypoglycemia. Recheck home glucose and consider dose reduction.",
		tags: ["glucose"]
	}));
	const glp = /* @__PURE__ */ new Set(["semaglutide", "tirzepatide"]);
	if (glp.has(a.id) && (has(b, "insulin-secretagogue") || b.id === "insulin-glargine") || glp.has(b.id) && (has(a, "insulin-secretagogue") || a.id === "insulin-glargine")) out.push(pdPair(a, b, {
		suffix: "pd-glp-secretagogue",
		severity: "moderate",
		effect: "stacked hypoglycemia",
		mechanism: "GLP-1 / GIP agonist × insulin or secretagogue",
		clinical: "Semaglutide and tirzepatide rarely cause hypoglycemia alone. Next to a sulfonylurea or insulin they do. Metformin on this desk should stay quieter. Not a CYP row.",
		tags: ["glucose"]
	}));
	if (has(a, "anticholinergic") && has(b, "anticholinergic")) out.push(pdPair(a, b, {
		suffix: "pd-ach",
		severity: "moderate",
		effect: "anticholinergic burden",
		mechanism: "additive muscarinic blockade",
		clinical: "Stacked anticholinergic load: confusion, urinary retention, constipation, dry mouth, and falls — especially in older adults.",
		tags: ["anticholinergic"]
	}));
	if (has(a, "beta-blocker") && has(b, "ndhp-ccb") || has(b, "beta-blocker") && has(a, "ndhp-ccb") || has(a, "bradycardic") && has(b, "bradycardic") && (has(a, "ndhp-ccb") || has(b, "ndhp-ccb") || a.id === "amiodarone" || b.id === "amiodarone" || a.id === "donepezil" || b.id === "donepezil")) out.push(pdPair(a, b, {
		suffix: "pd-brady",
		severity: "major",
		effect: "bradycardia / AV block",
		mechanism: "additive nodal depression",
		clinical: `Both ${a.name} and ${b.name} slow sinus and AV nodal conduction. Combined use can cause symptomatic bradycardia or heart block.`,
		tags: ["bradycardia"]
	}));
	if (has(a, "nitrate") && has(b, "pde5") || has(b, "nitrate") && has(a, "pde5")) out.push(pdPair(a, b, {
		suffix: "pd-nitrate-pde5",
		severity: "contraindicated",
		effect: "catastrophic hypotension",
		mechanism: "nitrate × PDE5 inhibitor",
		clinical: "PDE5 inhibitors potentiate nitric-oxide-mediated vasodilation. Nitrates plus sildenafil/tadalafil can cause refractory hypotension and are contraindicated (wait 24 h after sildenafil, 48 h after tadalafil).",
		tags: ["hypotension"]
	}));
	if (has(a, "pde5") && has(b, "alpha-blocker") || has(b, "pde5") && has(a, "alpha-blocker")) out.push(pdPair(a, b, {
		suffix: "pd-pde5-alpha",
		severity: "moderate",
		effect: "orthostatic hypotension",
		mechanism: "PDE5 × alpha blocker",
		clinical: "Both dilate vascular smooth muscle. Separate dosing and watch for first-dose syncope.",
		tags: ["hypotension"]
	}));
	if (has(a, "alpha-blocker") && has(b, "alcohol") || has(b, "alpha-blocker") && has(a, "alcohol")) out.push(pdPair(a, b, {
		suffix: "pd-alpha-etoh",
		severity: "moderate",
		effect: "orthostatic hypotension",
		mechanism: "alpha blocker × alcohol",
		clinical: "Prazosin and other α1-blockers drop standing blood pressure. Alcohol stacks the orthostasis — first-dose syncope, not a CYP row.",
		tags: ["hypotension", "alcohol"]
	}));
	if (has(a, "statin") && has(b, "fibrate") || has(b, "statin") && has(a, "fibrate")) {
		const simLova = a.id === "simvastatin" || b.id === "simvastatin" || a.id === "lovastatin" || b.id === "lovastatin" || a.id === "red-yeast-rice" || b.id === "red-yeast-rice";
		const gem = a.id === "gemfibrozil" || b.id === "gemfibrozil";
		out.push(pdPair(a, b, {
			suffix: "pd-statin-fibrate",
			severity: simLova && gem ? "contraindicated" : "major",
			effect: "myopathy / rhabdomyolysis",
			mechanism: "statin × fibrate",
			clinical: "Gemfibrozil with simvastatin, lovastatin, or red yeast rice is contraindicated. Other statin–fibrate pairs still raise rhabdomyolysis risk; prefer fenofibrate if a fibrate is required.",
			tags: ["myopathy"]
		}));
	}
	if (has(a, "seizure-lowering") && has(b, "seizure-lowering")) out.push(pdPair(a, b, {
		suffix: "pd-seizure",
		severity: "moderate",
		effect: "lowered seizure threshold",
		mechanism: "stacked proconvulsant effect",
		clinical: `Both ${a.name} and ${b.name} can lower seizure threshold. Extra caution with tramadol, bupropion, or clozapine combinations.`,
		tags: ["seizure"]
	}));
	if (a.id === "methotrexate" && (has(b, "nsaid") || b.id === "tmp-smx") || b.id === "methotrexate" && (has(a, "nsaid") || a.id === "tmp-smx")) out.push(pdPair(a, b, {
		suffix: "pd-mtx",
		severity: "major",
		effect: "methotrexate toxicity",
		mechanism: "reduced MTX clearance",
		clinical: "NSAIDs and trimethoprim–sulfamethoxazole reduce methotrexate clearance and add marrow/mucosal toxicity. This pairing is a classic cause of MTX disaster.",
		tags: ["marrow"]
	}));
	const xoSub = /* @__PURE__ */ new Set(["azathioprine", "mercaptopurine"]);
	const xoInh = /* @__PURE__ */ new Set(["allopurinol", "febuxostat"]);
	if (xoSub.has(a.id) && xoInh.has(b.id) || xoSub.has(b.id) && xoInh.has(a.id)) out.push(pdPair(a, b, {
		suffix: "pd-xo-thiopurine",
		severity: "contraindicated",
		effect: "life-threatening myelosuppression",
		mechanism: "xanthine oxidase × thiopurine",
		clinical: "Allopurinol and febuxostat block xanthine oxidase, the clearance path for 6-mercaptopurine. Azathioprine/6-MP then behaves like a multiple of the prescribed dose — pancytopenia, not a gout footnote. Labeled contraindicated or a drastic dose-cut; this desk scores it contraindicated. Not a CYP isoform.",
		tags: ["marrow", "xo"]
	}));
	if (a.id === "warfarin" && VITK_FOOD.has(b.id) || b.id === "warfarin" && VITK_FOOD.has(a.id)) {
		const food = a.id === "warfarin" ? b : a;
		const kale = food.id === "leafy-greens";
		const soy = food.id === "soy";
		out.push(pdPair(a, b, {
			suffix: soy ? "pd-soy-warfarin" : kale ? "pd-greens-warfarin" : "pd-vitk-warfarin",
			severity: "major",
			effect: "loss of anticoagulation",
			mechanism: soy ? "soy vitamin K + T4-binder overlap" : kale ? "dietary phylloquinone" : "vitamin K bypass of VKORC1",
			clinical: soy ? "Soy protein and soy milk carry vitamin K and also bind levothyroxine. INR can fall. A splash of soy sauce is the tyramine row, not this one. Recheck INR after a soy-protein phase." : kale ? "Warfarin blocks vitamin K recycling. A kale-heavy smoothie supplies phylloquinone and INR falls. A consistent salad is easier to adjust around than a binge. The K gummy is a different row. Not 2C9." : "Warfarin blocks vitamin K recycling. A K gummy, MK-7, or a kale-heavy smoothie supplies the cofactor and INR falls — the antidote in a bottle. Not a 2C9 story. Recheck INR after diet or supplement changes.",
			tags: ["bleeding", "food"]
		}));
	}
	if (a.id === "warfarin" && (b.id === "glucosamine" || b.id === "coq10") || b.id === "warfarin" && (a.id === "glucosamine" || a.id === "coq10")) {
		const coq = a.id === "coq10" || b.id === "coq10";
		out.push(pdPair(a, b, {
			suffix: coq ? "pd-coq-warfarin" : "pd-glucosamine-warfarin",
			severity: "moderate",
			effect: coq ? "possible INR drop" : "possible INR rise",
			mechanism: coq ? "CoQ10 vitamin-K–like structure" : "glucosamine × warfarin (hemostasis)",
			clinical: coq ? "Coenzyme Q10 resembles vitamin K. INR can fall — quieter and less consistent than a K gummy, still worth mapping." : "Glucosamine (often with chondroitin) can raise INR. Formulation-dependent. Recheck after a new joint bottle.",
			tags: ["bleeding", "food"]
		}));
	}
	const cations = /* @__PURE__ */ new Set([
		"calcium",
		"iron",
		"magnesium",
		"zinc",
		"dairy"
	]);
	const chelated = /* @__PURE__ */ new Set([
		"ciprofloxacin",
		"levofloxacin",
		"moxifloxacin",
		"doxycycline",
		"tetracycline",
		"levothyroxine",
		"alendronate",
		"levodopa"
	]);
	if (cations.has(a.id) && chelated.has(b.id) || cations.has(b.id) && chelated.has(a.id)) {
		const thyroid = a.id === "levothyroxine" || b.id === "levothyroxine";
		const bone = a.id === "alendronate" || b.id === "alendronate";
		const dopa = a.id === "levodopa" || b.id === "levodopa";
		const milk = a.id === "dairy" || b.id === "dairy";
		out.push(pdPair(a, b, {
			suffix: "pd-chelation",
			severity: "major",
			effect: thyroid ? "lost levothyroxine absorption" : bone ? "lost bisphosphonate absorption" : dopa ? "lost levodopa absorption" : "lost antibiotic absorption",
			mechanism: milk ? "gut chelation by dietary calcium" : "gut chelation by divalent cations",
			clinical: thyroid ? milk ? "A glass of milk, a latte, or yogurt binds levothyroxine in the gut. Morning cereal with Synthroid is a classic empty TSH. Separate by several hours. Aged-cheese MAOI is a different row." : "Calcium, iron, magnesium, and zinc bind levothyroxine in the gut. A prenatal or a Tums with the morning dose is a classic empty TSH. Separate by several hours. Not CYP." : bone ? "Bisphosphonates already have miserable F. Dairy, calcium, and other cations empty the dose. Thirty minutes before food, full glass of water, stay upright. Not CYP." : dopa ? "Iron (and to a lesser extent calcium) chelates levodopa in the gut. A protein meal is a different, LAT1 story — this row is the mineral." : milk ? "Fluoroquinolones and tetracyclines chelate with the calcium in milk and yogurt. The course can fail. Tetracycline is worse than doxycycline. Separate by several hours. Not CYP." : "Fluoroquinolones and tetracyclines chelate with calcium, iron, magnesium, and zinc. The course can fail. Separate by several hours. Not CYP.",
			tags: ["absorption", "food"]
		}));
	}
	const charcoalVictims = /* @__PURE__ */ new Set([
		"levothyroxine",
		"warfarin",
		"digoxin",
		"carbamazepine",
		"valproate",
		"lamotrigine",
		"ethinyl-estradiol",
		"apixaban",
		"rivaroxaban"
	]);
	const gutBinders = /* @__PURE__ */ new Set(["charcoal", "psyllium"]);
	if (gutBinders.has(a.id) && charcoalVictims.has(b.id) || gutBinders.has(b.id) && charcoalVictims.has(a.id)) {
		const fiber = a.id === "psyllium" || b.id === "psyllium";
		out.push(pdPair(a, b, {
			suffix: fiber ? "pd-psyllium-bind" : "pd-charcoal-bind",
			severity: "major",
			effect: "lost oral absorption",
			mechanism: fiber ? "viscous fiber binding" : "activated charcoal adsorption",
			clinical: fiber ? "Psyllium and other viscous fibers bind levothyroxine, digoxin, and some anticonvulsants in the gut. A Metamucil with the morning Synthroid is an empty TSH. Separate by several hours. Not CYP." : "Activated charcoal binds co-administered oral drugs in the gut. Levothyroxine, warfarin, anticonvulsants, and OCPs never arrive. Separate by several hours. Not the charred-meat 1A2 row.",
			tags: ["absorption", "food"]
		}));
	}
	if (a.id === "niacin" && has(b, "statin") || b.id === "niacin" && has(a, "statin")) out.push(pdPair(a, b, {
		suffix: "pd-niacin-statin",
		severity: "major",
		effect: "myopathy / rhabdomyolysis",
		mechanism: "niacin × statin",
		clinical: "Gram-dose nicotinic acid plus a statin (including red yeast rice / monacolin K) raises muscle toxicity. Flush B3 is the row — a B-complex is not.",
		tags: ["myopathy", "food"]
	}));
	const noDonors = /* @__PURE__ */ new Set(["arginine", "citrulline"]);
	if (noDonors.has(a.id) && has(b, "pde5") || noDonors.has(b.id) && has(a, "pde5")) out.push(pdPair(a, b, {
		suffix: "pd-arginine-pde5",
		severity: "moderate",
		effect: "additive hypotension",
		mechanism: "L-arginine / citrulline NO × PDE5",
		clinical: "Arginine and citrulline feed nitric oxide. PDE5 inhibitors stack the vasodilation. Quieter than a nitrate — not labeled contraindicated — still a first-dose syncope watch, especially in a pre-workout.",
		tags: ["hypotension", "food"]
	}));
	if (a.id === "icariin" && has(b, "nitrate") || b.id === "icariin" && has(a, "nitrate")) out.push(pdPair(a, b, {
		suffix: "pd-icariin-nitrate",
		severity: "major",
		effect: "stacked hypotension",
		mechanism: "herbal PDE5-like × nitrate",
		clinical: "Icariin is a weak herbal PDE5 hit. Next to a nitrate it is stacked NO vasodilation — not labeled like Viagra, still a first-dose syncope watch. The 'natural Viagra' bottle is the row.",
		tags: ["hypotension", "food"]
	}));
	if (a.id === "icariin" && has(b, "pde5") || b.id === "icariin" && has(a, "pde5")) out.push(pdPair(a, b, {
		suffix: "pd-icariin-pde5",
		severity: "moderate",
		effect: "stacked PDE5 vasodilation",
		mechanism: "icariin × PDE5 inhibitor",
		clinical: "Horny goat weed is sold as natural Viagra. Stacked with sildenafil or tadalafil it is duplicate PDE5 tone — first-dose syncope, not a free extra.",
		tags: ["hypotension", "food"]
	}));
	if (a.id === "hawthorn" && b.id === "digoxin" || b.id === "hawthorn" && a.id === "digoxin") out.push(pdPair(a, b, {
		suffix: "pd-hawthorn-dig",
		severity: "moderate",
		effect: "additive inotrope / bradycardia",
		mechanism: "hawthorn × digoxin",
		clinical: "Hawthorn has inotrope and vasodilator effects. Next to digoxin it is stacked cardiac PD, not a 3A4 row. Watch pulse and pressure.",
		tags: ["cardiac", "food"]
	}));
	if (has(a, "nephrotoxic") && has(b, "nephrotoxic")) out.push(pdPair(a, b, {
		suffix: "pd-nephro",
		severity: "moderate",
		effect: "stacked nephrotoxicity",
		mechanism: "additive kidney injury",
		clinical: `Both ${a.name} and ${b.name} can injure the kidney. Monitor creatinine and volume status.`,
		tags: ["renal"]
	}));
	if (has(a, "maoi") && has(b, "stimulant") || has(b, "maoi") && has(a, "stimulant")) out.push(pdPair(a, b, {
		suffix: "pd-maoi-stim",
		severity: "contraindicated",
		effect: "hypertensive crisis",
		mechanism: "MAOI × stimulant",
		clinical: "MAOIs plus amphetamines, methylphenidate, cocaine, MDMA, or other stimulants can produce a paroxysmal pressor crisis. This pairing is contraindicated.",
		tags: ["pressor", "maoi"]
	}));
	if (a.id === "cocaine" && has(b, "alcohol") || b.id === "cocaine" && has(a, "alcohol")) out.push(pdPair(a, b, {
		suffix: "pd-cocaethylene",
		severity: "major",
		effect: "cocaethylene cardiotoxicity",
		mechanism: "cocaine × ethanol transesterification",
		clinical: "Ethanol plus cocaine forms cocaethylene, a longer-lived metabolite with more arrhythmia, seizure, and hepatic risk than cocaine alone. The mixer is not a come-down — it stretches the cardiotoxic species.",
		tags: [
			"cardiac",
			"alcohol",
			"street"
		]
	}));
	if (has(a, "stimulant") && bOp || has(b, "stimulant") && aOp) out.push(pdPair(a, b, {
		suffix: "pd-speedball",
		severity: "major",
		effect: "masked respiratory depression / arrhythmia",
		mechanism: "stimulant × opioid (speedball / goofball)",
		clinical: "Cocaine or methamphetamine plus an opioid is a speedball (cocaine) or goofball (meth). The stimulant keeps the person looking awake while the opioid still stops them breathing — apnea often lands when the stimulant wears off. A methadone take-home plus cocaine is the same map, with QT on top. This is not a recreational pairing map.",
		tags: [
			"cns",
			"stimulant",
			"street"
		]
	}));
	if (a.id === "methadone" && RITONAVIR_BOOST.has(b.id) || b.id === "methadone" && RITONAVIR_BOOST.has(a.id)) out.push(pdPair(a, b, {
		suffix: "pd-methadone-ritonavir",
		severity: "major",
		effect: "methadone may fall / withdrawal",
		mechanism: "ritonavir-boosted 3A4 inhibit vs 2B6/UGT dump",
		clinical: "The 3A4 arrow is the wrong one for methadone. Acute ritonavir (Paxlovid) and steady-state ritonavir still drop methadone — watch withdrawal at the window, not nod. Fentanyl on the same booster is the opposite: parent rises, airway risk climbs. This is not a dosing protocol.",
		tags: ["mat", "cyp"]
	}));
	if (a.id === "buprenorphine" && (RITONAVIR_BOOST.has(b.id) || b.id === "cobicistat") || b.id === "buprenorphine" && (RITONAVIR_BOOST.has(a.id) || a.id === "cobicistat")) out.push(pdPair(a, b, {
		suffix: "pd-bup-ritonavir",
		severity: "moderate",
		effect: "buprenorphine parent may climb",
		mechanism: "3A4 inhibit of a partial agonist — opposite of methadone",
		clinical: "Opposite of methadone. Ritonavir, Paxlovid, and cobicistat raise buprenorphine via 3A4 (McCance-Katz: ~50% with ritonavir) without the withdrawal map. Tolerant patients usually do not need a cut. Watch nod; do not treat it like a stolen methadone bottle. Fentanyl on the same booster is the airway climb. This is not a dosing protocol.",
		tags: ["mat", "cyp"]
	}));
	if (has(a, "opioid-antagonist") && has(b, "opioid") || has(b, "opioid-antagonist") && has(a, "opioid")) out.push(pdPair(a, b, {
		suffix: "pd-antag-opioid",
		severity: "major",
		effect: "precipitated withdrawal / blocked analgesia",
		mechanism: "opioid antagonist × agonist",
		clinical: "Naltrexone or naloxone will displace full and partial agonists from the mu receptor. IM naltrexone (Vivitrol) still occupies μ for weeks — leftover fentanyl or a 'just this once' agonist is precipitated withdrawal, not a slip that didn't work. In anyone it means lost opioid analgesia.",
		tags: ["opioid", "mat"]
	}));
	if (has(a, "psychedelic") && b.id === "lithium" || has(b, "psychedelic") && a.id === "lithium") out.push(pdPair(a, b, {
		suffix: "pd-lithium-psychedelic",
		severity: "major",
		effect: "seizures / severe psychotoxicity",
		mechanism: "lithium × serotonergic psychedelic",
		clinical: "Lithium combined with psilocybin or LSD has a documented signal for seizures and prolonged adverse reactions. Do not stack them.",
		tags: ["seizure", "lithium"]
	}));
	if (has(a, "stimulant") && has(b, "stimulant")) out.push(pdPair(a, b, {
		suffix: "pd-stim-stack",
		severity: "moderate",
		effect: "stacked sympathomimetic load",
		mechanism: "stimulant × stimulant",
		clinical: `Combined ${a.name} and ${b.name} raise heart rate, blood pressure, and seizure risk. Watch for hyperthermia and arrhythmia.`,
		tags: ["stimulant"]
	}));
	if (has(a, "dissociative") && has(b, "dissociative")) out.push(pdPair(a, b, {
		suffix: "pd-nmda-stack",
		severity: "major",
		effect: "stacked NMDA blockade",
		mechanism: "dissociative × dissociative",
		clinical: "Two NMDA antagonists (ketamine, analogues, DXM, PCP, ibogaine) compound dissociation, blood-pressure swings, and airway risk.",
		tags: ["nmda"]
	}));
	if (has(a, "tyramine") && has(b, "maoi") || has(b, "tyramine") && has(a, "maoi")) out.push(pdPair(a, b, {
		suffix: "pd-tyramine-maoi",
		severity: "contraindicated",
		effect: "hypertensive crisis",
		mechanism: "tyramine × MAOI",
		clinical: "MAO-A in gut and liver normally destroys dietary tyramine. An irreversible MAOI lets it into the circulation — aged cheese, cured meat, tap beer, soy. Headache, neck stiffness, and stroke-range blood pressure can follow in minutes.",
		tags: [
			"food",
			"maoi",
			"tyramine"
		]
	}));
	if (has(a, "tryptophan") && has(b, "serotonergic") && !has(b, "tryptophan") || has(b, "tryptophan") && has(a, "serotonergic") && !has(a, "tryptophan")) out.push(pdPair(a, b, {
		suffix: "pd-htp",
		severity: has(a, "maoi") || has(b, "maoi") ? "contraindicated" : "major",
		effect: "precursor plus reuptake/MAO block",
		mechanism: "5-HTP / tryptophan × serotonergic",
		clinical: "A serotonin precursor stacked on an SSRI, MAOI, MDMA, or DXM is extra 5-HT, not a gentle sleep stack.",
		tags: ["food", "serotonin"]
	}));
	if (has(a, "fat-meal") && has(b, "cannabinoid") || has(b, "fat-meal") && has(a, "cannabinoid")) out.push(pdPair(a, b, {
		suffix: "pd-fat-cannabinoid",
		severity: "moderate",
		effect: "↑ oral cannabinoid AUC",
		mechanism: "fed-state lymphatic absorption",
		clinical: "A high-fat meal can several-fold increase oral THC and CBD exposure. Same milligrams, much more parent drug in plasma.",
		tags: ["food", "absorption"]
	}));
	if (has(a, "fat-meal") && has(b, "fed-boost") || has(b, "fat-meal") && has(a, "fed-boost")) {
		const victim = has(a, "fed-boost") ? a : b;
		const posa = victim.id === "posaconazole";
		out.push(pdPair(a, b, {
			suffix: "pd-fed-boost",
			severity: "moderate",
			effect: posa ? "↑ posaconazole suspension AUC" : "↑ oral antipsychotic F",
			mechanism: posa ? "fed-state azole absorption" : "labeled caloric requirement",
			clinical: posa ? "Posaconazole oral suspension wants a meal. Fasted F collapses. Delayed-release tablets are quieter with food — still map the suspension. This is absorption, not the 3A4-inhibitor row." : victim.id === "lurasidone" ? "Lurasidone is labeled with food (~350 kcal). Fasted AUC falls by about half. Grapefruit is the 3A4 row; this is calories. Not a dose from this desk." : "Ziprasidone is labeled with a ~500 kcal meal. Fasted AUC can fall by half and QT risk is read against the fed curve. Not a CYP collision.",
			tags: ["food", "absorption"]
		}));
	}
	if (has(a, "fat-meal") && has(b, "empty-stomach") || has(b, "fat-meal") && has(a, "empty-stomach")) out.push(pdPair(a, b, {
		suffix: "pd-food-alendronate",
		severity: "major",
		effect: "lost bisphosphonate absorption",
		mechanism: "any meal collapses Fosamax F",
		clinical: "Alendronate already has miserable bioavailability. A meal, coffee, or calcium empties it. Thirty minutes before food, full glass of water, stay upright. Opposite of Latuda, which wants calories.",
		tags: ["food", "absorption"]
	}));
	if (has(a, "sodium-restriction") && b.id === "lithium" || has(b, "sodium-restriction") && a.id === "lithium") out.push(pdPair(a, b, {
		suffix: "pd-lithium-low-salt",
		severity: "major",
		effect: "↑ lithium level",
		mechanism: "sodium restriction / dehydration",
		clinical: "Lithium is handled like sodium in the proximal tubule. A low-salt stretch, fever, or heavy sweat can push a stable dose into toxicity (tremor, confusion, diarrhea).",
		tags: ["food", "lithium"]
	}));
	if (has(a, "sodium-load") && b.id === "lithium" || has(b, "sodium-load") && a.id === "lithium") out.push(pdPair(a, b, {
		suffix: "pd-lithium-high-salt",
		severity: "moderate",
		effect: "↓ lithium level",
		mechanism: "sodium load increases lithium clearance",
		clinical: "A sudden salt load can drop lithium and lose mood coverage. Opposite of restriction.",
		tags: ["food", "lithium"]
	}));
	if (has(a, "urinary-alkaline") && has(b, "stimulant") || has(b, "urinary-alkaline") && has(a, "stimulant")) out.push(pdPair(a, b, {
		suffix: "pd-alk-stim",
		severity: "major",
		effect: "↑ amphetamine exposure / duration",
		mechanism: "alkaline urine reabsorbs weak bases",
		clinical: "Bicarbonate and antacids trap amphetamine in the tubule. Duration and peak climb; MAOI or other stimulant stacks get worse.",
		tags: ["food", "stimulant"]
	}));
	if (has(a, "urinary-acid") && has(b, "stimulant") || has(b, "urinary-acid") && has(a, "stimulant")) out.push(pdPair(a, b, {
		suffix: "pd-acid-stim",
		severity: "moderate",
		effect: "↓ amphetamine duration",
		mechanism: "acid urine speeds excretion",
		clinical: "Vitamin C and acidic juices ionize amphetamine and shorten its effect. Orange juice is a pH story; grapefruit is the 3A4 furanocoumarin; apple/orange juice cutting Allegra is OATP — they are not interchangeable.",
		tags: ["food", "stimulant"]
	}));
	if (OATP_PERP.has(a.id) && OATP_VICTIM.has(b.id) || OATP_PERP.has(b.id) && OATP_VICTIM.has(a.id)) {
		const victim = OATP_VICTIM.has(a.id) ? a : b;
		const perp = OATP_PERP.has(a.id) ? a : b;
		const allegra = victim.id === "fexofenadine";
		out.push(pdPair(a, b, {
			suffix: "pd-oatp-juice",
			severity: allegra ? "major" : "moderate",
			effect: `↓ ${victim.name} absorption`,
			mechanism: "OATP2B1 / OATP1A2 inhibition",
			clinical: allegra ? `${perp.name} blocks intestinal OATP. Fexofenadine never arrives — loss of antihistamine effect, not a CYP rise. Grapefruit also knocks out gut 3A4 for other drugs; apple and orange juice do not. Separate the juice by several hours.` : `${perp.name} blocks intestinal OATP. ${victim.name} AUC falls — loss of effect, not stacked beta blockade or RAAS. Green-tea extract and apple/orange juice are the documented bullies (Misaka, Dresser). Not CYP3A4.`,
			tags: [
				"food",
				"oatp",
				"absorption"
			]
		}));
	}
	if (has(a, "protein-load") && b.id === "levodopa" || has(b, "protein-load") && a.id === "levodopa") out.push(pdPair(a, b, {
		suffix: "pd-protein-ldopa",
		severity: "major",
		effect: "lost levodopa 'on' time",
		mechanism: "LAT1 competition (large-neutral amino acids)",
		clinical: "Leucine, phenylalanine, and tyrosine compete with levodopa at LAT1 in the gut and at the blood-brain barrier. A protein breakfast next to Sinemet is a motor fluctuation. Iron chelation is a different row. Not CYP.",
		tags: ["food", "absorption"]
	}));
	if (has(a, "polyphenol-drink") && T4_POLYPHENOL.has(b.id) || has(b, "polyphenol-drink") && T4_POLYPHENOL.has(a.id)) {
		const victim = T4_POLYPHENOL.has(a.id) ? a : b;
		out.push(pdPair(a, b, {
			suffix: "pd-tannin-bind",
			severity: "major",
			effect: victim.id === "iron" ? "lost iron absorption" : victim.id === "alendronate" ? "lost bisphosphonate absorption" : "lost levothyroxine absorption",
			mechanism: "polyphenol / tannin binding",
			clinical: victim.id === "levothyroxine" ? "Coffee and black tea bind levothyroxine in the gut (Benvenga). An espresso with the morning dose is an empty TSH. Caffeine-as-1A2-substrate is a different bottle. Wait 30–60 minutes." : victim.id === "iron" ? "Tannins in coffee and tea chelate iron. A cup with the ferrous sulfate tablet empties the dose. Not the 1A2 caffeine row." : "Coffee with Fosamax is still a meal as far as the bisphosphonate is concerned. Empty stomach, water only, stay upright.",
			tags: ["food", "absorption"]
		}));
	}
	if (a.id === "soy" && b.id === "levothyroxine" || b.id === "soy" && a.id === "levothyroxine") out.push(pdPair(a, b, {
		suffix: "pd-soy-t4",
		severity: "major",
		effect: "lost levothyroxine absorption",
		mechanism: "soy protein binding in the gut",
		clinical: "Soy formula and soy-protein shakes bind levothyroxine. A splash of soy sauce is the tyramine row, not this one. Separate by several hours. Warfarin vitamin-K overlap is a separate finding if both are on the desk.",
		tags: ["food", "absorption"]
	}));
	if (has(a, "k-food") && (has(b, "acei-arb") || has(b, "k-sparing")) || has(b, "k-food") && (has(a, "acei-arb") || has(a, "k-sparing"))) out.push(pdPair(a, b, {
		suffix: "pd-k-food",
		severity: "major",
		effect: "hyperkalemia",
		mechanism: "dietary potassium × RAAS / K-sparing",
		clinical: "Bananas, potatoes, coconut water, and salt-substitute KCl next to an ACEI/ARB or spironolactone are the hyperK triad without a Slow-K bottle. Recheck potassium after a diet change. The potassium-supplement row is separate.",
		tags: ["food", "electrolyte"]
	}));
	if (has(a, "histamine") && (b.id === "isoniazid" || has(b, "maoi")) || has(b, "histamine") && (a.id === "isoniazid" || has(a, "maoi"))) {
		const inh = a.id === "isoniazid" || b.id === "isoniazid";
		out.push(pdPair(a, b, {
			suffix: "pd-histamine-fish",
			severity: inh ? "major" : "moderate",
			effect: inh ? "scombroid-like reaction" : "histamine / tyramine overlap",
			mechanism: inh ? "isoniazid × diamine oxidase" : "histamine load × MAOI",
			clinical: inh ? "Isoniazid blocks diamine oxidase. Tuna or mackerel that would be mild scombroid in anyone becomes flushing, headache, and palpitations on INH. Not the cheese-plate MAOI row — a different amine." : "Aged fish carries histamine and some tyramine. An irreversible MAOI lets both through. The cheddar plate is still the louder MAOI teaching pair.",
			tags: ["food", "histamine"]
		}));
	}
	if (has(a, "enteral") && ENTERAL_VICTIM.has(b.id) || has(b, "enteral") && ENTERAL_VICTIM.has(a.id)) {
		const victim = ENTERAL_VICTIM.has(a.id) ? a : b;
		const dilantin = victim.id === "phenytoin";
		out.push(pdPair(a, b, {
			suffix: "pd-enteral-bind",
			severity: dilantin ? "major" : "moderate",
			effect: `lost ${victim.name} absorption`,
			mechanism: "tube-feed binding",
			clinical: dilantin ? "Bauer 1982. Continuous NG feeds bind phenytoin — levels crash and seizures return. Hold the feed, flush, separate the dose. Not CYP2C9." : `Continuous enteral nutrition binds ${victim.name} in the tube and the gut. Hold the feed, flush, separate. Not a cytochrome row.`,
			tags: ["food", "absorption"]
		}));
	}
	if (a.id === "caffeine" && b.id === "lithium" || b.id === "caffeine" && a.id === "lithium") out.push(pdPair(a, b, {
		suffix: "pd-caffeine-lithium",
		severity: "moderate",
		effect: "↑ lithium clearance while using caffeine",
		mechanism: "caffeine diuresis / renal lithium handling",
		clinical: "Caffeine increases lithium clearance. A sudden stop (or a new energy-drink habit) moves the level without a dose change. Opposite direction from low-salt retention. Not 1A2.",
		tags: ["food", "lithium"]
	}));
	if (a.id === "disulfiram" && has(b, "alcohol") || b.id === "disulfiram" && has(a, "alcohol")) out.push(pdPair(a, b, {
		suffix: "pd-disulfiram",
		severity: "contraindicated",
		effect: "acetaldehyde reaction",
		mechanism: "ALDH blockade × ethanol",
		clinical: "Disulfiram blocks aldehyde dehydrogenase. Ethanol then dumps acetaldehyde — flushing, vomiting, hypotension, sometimes shock. This is the intended deterrent, and it is not a mild hangover.",
		tags: ["alcohol", "disulfiram"]
	}));
	else if (a.id === "metronidazole" && has(b, "alcohol") || b.id === "metronidazole" && has(a, "alcohol")) out.push(pdPair(a, b, {
		suffix: "pd-metro-etoh",
		severity: "moderate",
		effect: "possible disulfiram-like reaction",
		mechanism: "metronidazole × ethanol",
		clinical: "A disulfiram-like reaction with metronidazole is debated but still flagged. Flushing, nausea, and tachycardia are the watch-outs — not a green light to drink on Flagyl.",
		tags: ["alcohol"]
	}));
	if (has(a, "hypokalemic") && (has(b, "qt-known") || has(b, "qt-possible") || b.id === "digoxin") || has(b, "hypokalemic") && (has(a, "qt-known") || has(a, "qt-possible") || a.id === "digoxin")) {
		const dig = a.id === "digoxin" || b.id === "digoxin";
		out.push(pdPair(a, b, {
			suffix: "pd-hypok",
			severity: dig ? "major" : "moderate",
			effect: dig ? "digoxin toxicity via hypokalemia" : "hypokalemia plus QT load",
			mechanism: "mineralocorticoid hypokalemia",
			clinical: dig ? "Licorice-type hypokalemia plus digoxin is a classic arrhythmia trap. Potassium and digoxin level both belong on the desk." : "Glycyrrhizin drops potassium. A QT drug on a low-K background is how torsades gets invited.",
			tags: [
				"food",
				"potassium",
				"qt"
			]
		}));
	}
	return out;
}
function multiDrugFindings(drugs) {
	const out = [];
	if (drugs.length < 3) return out;
	const sero = drugs.filter((d) => has(d, "serotonergic"));
	if (sero.length >= 3) out.push({
		id: "grp-sero-" + sero.map((d) => d.id).sort().join("-"),
		severity: "major",
		kind: "pd",
		drugIds: sero.map((d) => d.id),
		headline: `${sero.length}-drug serotonergic stack`,
		enzymes: [],
		effect: "escalating serotonin syndrome risk",
		mechanism: "multi-drug serotonergic load",
		clinical: `${names(sero.map((d) => d.id)).join(", ")} all increase serotonergic tone. Risk is not strictly pairwise — a third agent often turns a theoretical interaction into a clinical event.`,
		tags: ["serotonin", "stack"]
	});
	const qt = drugs.filter((d) => has(d, "qt-known") || has(d, "qt-possible"));
	const known = qt.filter((d) => has(d, "qt-known"));
	if (qt.length >= 3 || known.length >= 2) out.push({
		id: "grp-qt-" + qt.map((d) => d.id).sort().join("-"),
		severity: known.length >= 2 || qt.length >= 3 ? "major" : "moderate",
		kind: "pd",
		drugIds: qt.map((d) => d.id),
		headline: `QT stack · ${qt.length} agents`,
		enzymes: [],
		effect: "torsades risk",
		mechanism: "cumulative QT load",
		clinical: `${names(qt.map((d) => d.id)).join(", ")} all prolong QT. Cumulative load, hypokalemia, and hypomagnesemia compound torsades risk.`,
		tags: ["qt", "stack"]
	});
	const acei = drugs.filter((d) => has(d, "acei-arb"));
	const nsaid = drugs.filter((d) => has(d, "nsaid"));
	const diu = drugs.filter((d) => has(d, "loop-thiazide"));
	if (acei.length && nsaid.length && diu.length) {
		const triple = [
			...acei,
			...nsaid,
			...diu
		];
		const uniq = [...new Map(triple.map((d) => [d.id, d])).values()];
		out.push({
			id: "grp-triple-" + uniq.map((d) => d.id).sort().join("-"),
			severity: "major",
			kind: "pd",
			drugIds: uniq.map((d) => d.id),
			headline: "Triple whammy · ACEI/ARB + diuretic + NSAID",
			enzymes: [],
			effect: "acute kidney injury",
			mechanism: "afferent constriction + efferent dilation + volume depletion",
			clinical: "The 'triple whammy' is a leading cause of community-acquired AKI. Drop the NSAID whenever possible; check creatinine after initiation.",
			tags: ["renal", "stack"]
		});
	}
	const cns = drugs.filter((d) => has(d, "cns-depressant") || has(d, "opioid"));
	if (cns.length >= 3) out.push({
		id: "grp-cns-" + cns.map((d) => d.id).sort().join("-"),
		severity: "major",
		kind: "pd",
		drugIds: cns.map((d) => d.id),
		headline: `${cns.length}-drug CNS depressant stack`,
		enzymes: [],
		effect: "sedation / respiratory depression",
		mechanism: "multi-drug CNS depression",
		clinical: `${names(cns.map((d) => d.id)).join(", ")} all depress the CNS. Three or more is a high-risk combination, especially with an opioid.`,
		tags: ["cns", "stack"]
	});
	const stim = drugs.filter((d) => has(d, "stimulant"));
	const op = drugs.filter((d) => has(d, "opioid"));
	const a2 = drugs.filter((d) => has(d, "alpha2-agonist"));
	if (stim.length && op.length && a2.length) {
		const mix = [...new Map([
			...stim,
			...op,
			...a2
		].map((d) => [d.id, d])).values()];
		out.push({
			id: "grp-speedball-tranq-" + mix.map((d) => d.id).sort().join("-"),
			severity: "major",
			kind: "pd",
			drugIds: mix.map((d) => d.id),
			headline: "Speedball on a tranq supply",
			enzymes: [],
			effect: "masked apnea plus α2 that naloxone will not reverse",
			mechanism: "stimulant × opioid × α2-agonist",
			clinical: `${names(mix.map((d) => d.id)).join(", ")} — cocaine or meth on a fentanyl/xylazine fold. The stimulant wears off first; the μ and α2 keep the airway down. Extra naloxone will not wake an α2.`,
			tags: [
				"cns",
				"stimulant",
				"alpha2",
				"street",
				"stack"
			]
		});
	}
	const bz = drugs.filter((d) => has(d, "benzo-zdrug"));
	const gabaid = drugs.filter((d) => d.id === "gabapentin" || d.id === "pregabalin");
	if (op.length && bz.length && gabaid.length) {
		const mix = [...new Map([
			...op,
			...bz,
			...gabaid
		].map((d) => [d.id, d])).values()];
		out.push({
			id: "grp-mat-airway-" + mix.map((d) => d.id).sort().join("-"),
			severity: "major",
			kind: "pd",
			drugIds: mix.map((d) => d.id),
			headline: "MAT airway triad · opioid + benzo + gabapentinoid",
			enzymes: [],
			effect: "sedation / respiratory depression",
			mechanism: "opioid × benzodiazepine × gabapentinoid",
			clinical: `${names(mix.map((d) => d.id)).join(", ")} — methadone or buprenorphine plus a benzo plus gabapentin/pregabalin is a three-drug airway. The gabapentinoid is often 'for nerves' and still counts.`,
			tags: [
				"cns",
				"mat",
				"stack"
			]
		});
	}
	return out;
}
function burdenFor(drugs) {
	return ENZYMES.map((enzyme) => {
		const substrates = [];
		const inhibitors = [];
		const inducers = [];
		for (const drug of drugs) for (const role of drug.enzymes) {
			if (role.enzyme !== enzyme) continue;
			if (role.kind === "substrate") substrates.push(drug.id);
			if (role.kind === "inhibitor") inhibitors.push(drug.id);
			if (role.kind === "inducer") inducers.push(drug.id);
		}
		return {
			enzyme,
			substrates,
			inhibitors,
			inducers,
			collisions: inhibitors.filter((id) => substrates.some((s) => s !== id)).length + inducers.filter((id) => substrates.some((s) => s !== id)).length
		};
	}).filter((b) => b.substrates.length || b.inhibitors.length || b.inducers.length);
}
function dedupe(findings) {
	const byKey = /* @__PURE__ */ new Map();
	for (const f of findings) {
		const key = f.kind === "pd" ? f.id : `${[...f.drugIds].sort().join("-")}|${f.enzymes.join(",")}|${f.tags.join(",")}`;
		const prev = byKey.get(key);
		if (!prev || SEVERITY_RANK[f.severity] > SEVERITY_RANK[prev.severity]) byKey.set(key, f);
	}
	return [...byKey.values()];
}
function phenotypeFindings(drugs, phenotypes) {
	const out = [];
	for (const enzyme of PHENOTYPE_ENZYMES) {
		const pheno = phenotypes[enzyme];
		if (!pheno || pheno === "NM") continue;
		const label = METABOLIZER_LABEL[pheno];
		for (const drug of drugs) {
			const subs = substratesOf(drug, enzyme);
			if (!subs.length) continue;
			const hottest = subs.reduce((m, s) => {
				const rank = {
					sensitive: 3,
					major: 2,
					minor: 1
				};
				return rank[s.sensitivity] > rank[m.sensitivity] ? s : m;
			});
			const ntiOrSensitive = Boolean(hottest.nti) || hottest.sensitivity === "sensitive";
			let severity = "minor";
			let effect = "";
			let mechanism = "";
			let clinical = "";
			if (pheno === "PM" || pheno === "IM") {
				const asStrength = pheno === "PM" ? "strong" : "moderate";
				severity = pkSeverity(asStrength, hottest.sensitivity, Boolean(hottest.nti), hottest.pathway, "inhibitor");
				if (hottest.pathway === "activation") {
					effect = "↓ active metabolite";
					mechanism = `${enzyme} ${label.toLowerCase()} metabolizer · blocked activation`;
					clinical = `A ${label.toLowerCase()} ${enzyme} metabolizer activates ${drug.name} poorly. Expect loss of effect (${drug.toxicityHint}). Same pattern as a ${asStrength} ${enzyme} inhibitor.`;
				} else {
					effect = "↑ exposure";
					mechanism = `${enzyme} ${label.toLowerCase()} metabolizer · reduced clearance`;
					clinical = `A ${label.toLowerCase()} ${enzyme} metabolizer clears ${drug.name} slowly${ntiOrSensitive ? " — this is a sensitive or narrow-index substrate" : ""}. Watch for ${drug.toxicityHint}.`;
				}
				if (severity === "contraindicated") severity = "major";
			} else {
				severity = pkSeverity("strong", hottest.sensitivity, Boolean(hottest.nti), hottest.pathway, "inducer");
				if (hottest.pathway === "activation") {
					effect = "↑ active metabolite";
					mechanism = `${enzyme} ultrarapid metabolizer · extra activation`;
					clinical = `An ultrarapid ${enzyme} metabolizer converts ${drug.name} to its active metabolite faster. Toxicity risk rises (${drug.toxicityHint}) — the classic example is codeine → morphine in CYP2D6 UM.`;
					if (hottest.sensitivity === "sensitive" || hottest.nti) severity = "contraindicated";
				} else {
					effect = "↓ exposure / shorter duration";
					mechanism = `${enzyme} ultrarapid metabolizer · accelerated clearance`;
					clinical = `An ultrarapid ${enzyme} metabolizer shortens ${drug.name} exposure. For MDMA that means a briefer parent-drug effect and more downstream metabolite; for ketamine it can mean a weaker NMDA response.`;
					severity = ntiOrSensitive ? "major" : hottest.sensitivity === "major" ? "moderate" : "minor";
				}
			}
			out.push({
				id: `geno-${enzyme}-${pheno}-${drug.id}`,
				severity,
				kind: "geno",
				drugIds: [drug.id],
				headline: `${enzyme} ${pheno} × ${drug.name}`,
				enzymes: [enzyme],
				effect,
				mechanism,
				clinical,
				tags: [
					enzyme,
					"phenotype",
					pheno
				]
			});
		}
	}
	return out;
}
function washoutFindings(drugs) {
	const out = [];
	const ids = new Set(drugs.map((d) => d.id));
	for (const w of WASHOUT) {
		const hit = w.ids.filter((id) => ids.has(id));
		if (!hit.length) continue;
		const others = drugs.filter((d) => !w.ids.includes(d.id) && !isVirtual(d.id));
		const sero = others.some((d) => d.pd.includes("serotonergic") || d.pd.includes("stimulant") || d.pd.includes("maoi"));
		if (!others.length) continue;
		if (others.every((d) => d.kind !== "drug")) continue;
		out.push({
			id: `washout-${hit.join("-")}`,
			severity: sero ? "major" : "moderate",
			kind: "pd",
			drugIds: [...hit, ...others.map((d) => d.id)],
			headline: `${w.days}-day washout`,
			enzymes: hit.includes("fluoxetine") ? ["CYP2D6"] : [],
			effect: "lingering perpetrator effect",
			mechanism: "washout clock",
			clinical: w.label,
			tags: ["washout"]
		});
	}
	return out;
}
function clinicHit(drug, suffix, severity, headline, mechanism, effect, clinical, tags) {
	return {
		id: `${drug.id}__clinic-${suffix}`,
		severity,
		kind: "clinic",
		drugIds: [drug.id],
		headline,
		enzymes: [],
		effect,
		mechanism,
		clinical,
		tags: ["clinic", ...tags]
	};
}
function hostClinicFindings(drugs, host) {
	const age = host.age ?? "adult";
	const kidney = host.kidney ?? "ok";
	const preg = host.preg ?? "off";
	if (age === "adult" && kidney === "ok" && preg === "off") return [];
	const out = [];
	for (const d of drugs) {
		const card = CLINIC[d.id];
		if (preg === "pregnant") {
			if (card?.pregnancy === "avoid") out.push(clinicHit(d, "preg-avoid", "contraindicated", `${d.name} in pregnancy`, "teratogen / boxed fetal risk", "avoid in pregnancy", card.pregNote ?? `${d.name} is mapped as avoid in pregnancy on this desk. Open the primary label. Not a prescribing protocol.`, ["pregnancy"]));
			else if (card?.pregnancy === "caution") out.push(clinicHit(d, "preg-caution", "major", `${d.name} in pregnancy`, "pregnancy caution", "specialist call", card.pregNote ?? `${d.name} is not a free pass in pregnancy. Weigh indication against fetal risk.`, ["pregnancy"]));
			else if (has(d, "acei-arb") && !card) out.push(clinicHit(d, "preg-acei", "contraindicated", `${d.name} in pregnancy`, "ACEI/ARB fetal toxicity", "avoid in pregnancy", "ACE inhibitors and ARBs are boxed for fetal renal dysgenesis in the second and third trimester.", ["pregnancy"]));
		}
		if (preg === "lactating" && card?.lactation === "avoid") out.push(clinicHit(d, "lact-avoid", "major", `${d.name} in lactation`, "lactation avoid", "not compatible", card.lactNote ?? `${d.name} is mapped as avoid while breastfeeding on this desk.`, ["lactation"]));
		if (kidney === "ckd") {
			if (card?.renal === "avoid") out.push(clinicHit(d, "ckd-avoid", "major", `${d.name} in CKD`, "renally cleared / toxic in low GFR", "avoid or specialist only", card.renalNote ?? `${d.name} accumulates or injures the kidney as GFR falls.`, ["renal"]));
			else if (card?.renal === "caution") out.push(clinicHit(d, "ckd-caution", "moderate", `${d.name} in CKD`, "renal dose / accumulation", "adjust or monitor", card.renalNote ?? `Dose-cut or monitor as GFR falls. Not a CYP collision.`, ["renal"]));
			else if (has(d, "nsaid")) out.push(clinicHit(d, "ckd-nsaid", "major", `${d.name} in CKD`, "hemodynamic kidney hit", "lost GFR / hyperK / volume", "NSAIDs drop afferent flow. In CKD they take the remaining GFR. The ACEI + diuretic + NSAID triple is the classic.", ["renal"]));
			else if (has(d, "nephrotoxic")) out.push(clinicHit(d, "ckd-nephro", "major", `${d.name} in CKD`, "stacked nephrotoxin", "further GFR loss", `${d.name} is already a kidney toxin. CKD is not the host for a second hit.`, ["renal"]));
		}
		if (age === "geriatric" && card?.beers) out.push(clinicHit(d, "beers", "moderate", `${d.name} · Beers`, "potentially inappropriate in older adults", "Beers 2023 teaching flag", card.beers + " Flip off geriatric to hide this row. Not a stop list.", ["beers"]));
	}
	return out;
}
function alcoholHostFindings(drugs, alcohol) {
	if (alcohol === "off") return [];
	const apap = drugs.find((d) => d.id === "acetaminophen");
	if (!apap) return [];
	if (alcohol === "chronic") return [{
		id: "host-etoh-chronic-apap",
		severity: "major",
		kind: "pk",
		drugIds: [apap.id],
		headline: "Chronic alcohol × acetaminophen",
		enzymes: ["CYP2E1"],
		effect: "↑ NAPQI",
		mechanism: "CYP2E1 induction + glutathione depletion",
		clinical: "Daily drinking induces CYP2E1, which activates acetaminophen to NAPQI, and depletes glutathione that would mop it up. Therapeutic doses can still injure. This is delayed hepatotoxicity, not drunkenness.",
		tags: [
			"alcohol",
			"2E1",
			"host"
		]
	}];
	return [{
		id: "host-etoh-acute-apap",
		severity: "moderate",
		kind: "pk",
		drugIds: [apap.id],
		headline: "Acute alcohol × acetaminophen",
		enzymes: ["CYP2E1"],
		effect: "2E1 occupancy now, rebound NAPQI later",
		mechanism: "acute 2E1 competition then induction",
		clinical: "During intoxication CYP2E1 is occupied, so NAPQI formation can fall. After the binge, induction plus empty glutathione stores raise risk. The dangerous window is the morning after, not the drink itself.",
		tags: [
			"alcohol",
			"2E1",
			"host"
		]
	}];
}
function lingerFindings(drugs) {
	const gf = drugs.find((d) => d.id === "grapefruit");
	if (!gf) return [];
	const victims = drugs.filter((d) => d.id !== "grapefruit" && !isVirtual(d.id) && substratesOf(d, "CYP3A4").length);
	if (!victims.length) return [];
	return [{
		id: "linger-grapefruit",
		severity: "moderate",
		kind: "pk",
		drugIds: [gf.id, ...victims.map((d) => d.id)],
		headline: "Grapefruit block lasts 24–72 h",
		enzymes: ["CYP3A4"],
		effect: "intestinal CYP3A4 still down",
		mechanism: "mechanism-based furanocoumarin inactivation",
		clinical: "Bergamottin destroys intestinal CYP3A4; the enzyme has to be resynthesized. Yesterday’s glass still raises oral 3A4 victims. Hepatic 3A4 (IV ketamine) is largely spared.",
		tags: [
			"food",
			"grapefruit",
			"linger"
		]
	}];
}
function stackLoad(drugs) {
	const real = drugs.filter((d) => d.id !== "__smoke" && d.id !== "__etoh-chronic");
	const add = (map, key, name, n = 1) => {
		const cur = map.get(key) ?? [];
		for (let i = 0; i < n; i++) cur.push(name);
		map.set(key, cur);
	};
	const hits = /* @__PURE__ */ new Map();
	for (const d of real) {
		if (has(d, "serotonergic")) add(hits, "serotonin", d.name);
		if (has(d, "ssri-snri") || d.id === "mdma") add(hits, "serotonin", d.name);
		if (has(d, "maoi") || has(d, "tryptophan")) add(hits, "serotonin", d.name);
		if (has(d, "cns-depressant")) add(hits, "cns", d.name);
		if (has(d, "opioid") || has(d, "benzo-zdrug") || has(d, "alcohol")) add(hits, "cns", d.name);
		if (has(d, "ghb")) add(hits, "cns", d.name);
		if (has(d, "alpha2-agonist")) add(hits, "cns", d.name, 2);
		if (has(d, "qt-known")) add(hits, "qt", d.name, 2);
		else if (has(d, "qt-possible")) add(hits, "qt", d.name);
		if (has(d, "maoi") || has(d, "tyramine")) add(hits, "pressor", d.name, 2);
		if (has(d, "stimulant")) add(hits, "pressor", d.name);
		if (has(d, "dissociative")) add(hits, "nmda", d.name, 2);
	}
	return STACK_AXES.map((axis) => {
		const items = hits.get(axis) ?? [];
		return {
			axis,
			score: Math.min(items.length, 5),
			cap: 5,
			items: [...new Set(items)]
		};
	});
}
function analyze(drugIds, host) {
	const ctx = host && "smoking" in host ? {
		...DEFAULT_HOST,
		...host,
		phenotypes: {
			...DEFAULT_PHENOTYPES,
			...host.phenotypes
		}
	} : host && "CYP2D6" in host ? {
		...DEFAULT_HOST,
		phenotypes: host
	} : void 0;
	const base = drugIds.map((id) => DRUG_BY_ID[id]).filter(Boolean);
	const drugs = ctx ? applyHost(base, ctx) : base;
	const real = drugs.filter((d) => !isVirtual(d.id));
	const findings = [];
	for (let i = 0; i < drugs.length; i++) for (let j = i + 1; j < drugs.length; j++) {
		const a = drugs[i];
		const b = drugs[j];
		if (!(a.id === "__etoh-chronic" && b.id === "acetaminophen" || b.id === "__etoh-chronic" && a.id === "acetaminophen")) findings.push(...pkFindings(a, b));
		findings.push(...pdFindings(a, b));
	}
	findings.push(...multiDrugFindings(real));
	if (ctx) findings.push(...phenotypeFindings(real, ctx.phenotypes));
	if (ctx) findings.push(...phenoconversionFindings(drugs, ctx));
	findings.push(...washoutFindings(drugs));
	findings.push(...lingerFindings(drugs));
	if (ctx) findings.push(...alcoholHostFindings(real, ctx.alcohol));
	if (ctx) findings.push(...hostClinicFindings(real, ctx));
	findings.push(...udsFindings(real.map((d) => d.id)));
	const uniq = dedupe(findings);
	uniq.sort((a, b) => {
		const d = SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
		if (d) return d;
		if (a.kind !== b.kind) return a.kind === "pk" ? -1 : 1;
		return a.headline.localeCompare(b.headline);
	});
	const counts = {
		contraindicated: 0,
		major: 0,
		moderate: 0,
		minor: 0
	};
	for (const f of uniq) counts[f.severity] += 1;
	const highest = uniq.length === 0 ? "none" : [
		"contraindicated",
		"major",
		"moderate",
		"minor"
	].find((s) => counts[s] > 0) ?? "none";
	return {
		findings: uniq,
		burden: burdenFor(drugs),
		highest,
		counts,
		stacks: stackLoad(drugs)
	};
}
function enzymeIndex() {
	const empty = () => ({
		substrates: [],
		inhibitors: [],
		inducers: []
	});
	const idx = Object.fromEntries(ENZYMES.map((e) => [e, empty()]));
	for (const drug of Object.values(DRUG_BY_ID)) {
		const seen = {
			substrate: /* @__PURE__ */ new Set(),
			inhibitor: /* @__PURE__ */ new Set(),
			inducer: /* @__PURE__ */ new Set()
		};
		for (const role of drug.enzymes) {
			if (seen[role.kind].has(role.enzyme)) continue;
			seen[role.kind].add(role.enzyme);
			if (role.kind === "substrate") idx[role.enzyme].substrates.push(drug);
			if (role.kind === "inhibitor") idx[role.enzyme].inhibitors.push(drug);
			if (role.kind === "inducer") idx[role.enzyme].inducers.push(drug);
		}
	}
	for (const e of ENZYMES) {
		idx[e].substrates.sort((a, b) => a.name.localeCompare(b.name));
		idx[e].inhibitors.sort((a, b) => a.name.localeCompare(b.name));
		idx[e].inducers.sort((a, b) => a.name.localeCompare(b.name));
	}
	return idx;
}
var METABOLITE_TREES = {
	ketamine: {
		id: "ketamine",
		blurb: "Norketamine stays NMDA-active; (2R,6R)-HNK is the AMPA metabolite tied to the antidepressant signal.",
		nodes: [{
			name: "Norketamine",
			via: "CYP2B6 · CYP3A4",
			note: "Still NMDA-active, longer t½ than parent",
			active: true
		}, {
			name: "(2R,6R)-HNK",
			via: "further oxidation",
			note: "AMPA potentiation — not an NMDA block",
			active: true
		}]
	},
	esketamine: {
		id: "esketamine",
		blurb: "S-enantiomer. Same 2B6/3A4 norketamine step; first-pass is worse orally than as Spravato.",
		nodes: [{
			name: "S-norketamine",
			via: "CYP2B6 · CYP3A4",
			note: "Active NMDA metabolite",
			active: true
		}, {
			name: "HNK",
			via: "further oxidation",
			note: "Putative AMPA antidepressant metabolite",
			active: true
		}]
	},
	mdma: {
		id: "mdma",
		blurb: "CYP2D6 demethylenation plus mechanism-based 2D6 inhibition after the first pass — the second dose is not the first.",
		nodes: [{
			name: "HHMA / MDA",
			via: "CYP2D6",
			note: "Catechol / demethylenated products",
			active: true
		}, {
			name: "HHA",
			via: "COMT",
			note: "Downstream catechol"
		}]
	},
	codeine: {
		id: "codeine",
		blurb: "Analgesia is morphine. A 2D6 UM turns a cough syrup into an opioid overdose.",
		nodes: [{
			name: "Morphine",
			via: "CYP2D6",
			note: "The μ-agonist. Blocked in PMs, toxic in UMs.",
			active: true,
			toxic: true
		}, {
			name: "Norcodeine",
			via: "CYP3A4",
			note: "Mostly inactive shunt"
		}]
	},
	tramadol: {
		id: "tramadol",
		blurb: "Parent is SNRI-like; M1 is the μ-opioid. 2D6 PM = less analgesia, more parent serotonin/seizure load.",
		nodes: [{
			name: "O-desmethyltramadol (M1)",
			via: "CYP2D6",
			note: "μ-opioid agonist",
			active: true
		}, {
			name: "N-desmethyltramadol",
			via: "CYP3A4",
			note: "Inactive shunt"
		}]
	},
	dextromethorphan: {
		id: "dextromethorphan",
		blurb: "2D6 PM or a strong 2D6 inhibitor keeps parent DXM (serotonergic). Extensive metabolizers make dextrorphan (more NMDA).",
		nodes: [{
			name: "Dextrorphan",
			via: "CYP2D6",
			note: "Stronger NMDA antagonist",
			active: true
		}, {
			name: "3-methoxymorphinan",
			via: "CYP3A4",
			note: "Minor shunt"
		}]
	},
	dronabinol: {
		id: "dronabinol",
		blurb: "Oral first-pass makes 11-OH-THC, which is more psychoactive than parent. Smoked THC largely skips that.",
		nodes: [{
			name: "11-OH-THC",
			via: "CYP2C9 · CYP3A4",
			note: "More psychoactive; edible >> smoked",
			active: true
		}, {
			name: "THC-COOH",
			via: "further oxidation",
			note: "Inactive, long detection window"
		}]
	},
	ibogaine: {
		id: "ibogaine",
		blurb: "Noribogaine is long-lived. 2D6 inhibitors and QT drugs are a documented fatality pattern.",
		nodes: [{
			name: "Noribogaine",
			via: "CYP2D6",
			note: "Long t½; still cardiotoxic",
			active: true,
			toxic: true
		}]
	},
	cocaine: {
		id: "cocaine",
		blurb: "Alcohol hijacks hydrolysis. Cocaethylene is longer-lived and more cardiotoxic than parent cocaine.",
		nodes: [
			{
				name: "Benzoylecgonine",
				via: "hCE1",
				note: "Inactive urinary metabolite"
			},
			{
				name: "Norcocaine",
				via: "CYP3A4",
				note: "Minor hepatotoxic species",
				toxic: true
			},
			{
				name: "Cocaethylene",
				via: "hCE1 + ethanol",
				note: "Longer t½, more cardiotoxic",
				active: true,
				toxic: true
			}
		]
	},
	ethanol: {
		id: "ethanol",
		blurb: "Chronic use induces CYP2E1 — the NAPQI path for acetaminophen. Acute use occupies ADH.",
		nodes: [{
			name: "Acetaldehyde",
			via: "ADH · CYP2E1",
			note: "Toxic intermediate; disulfiram blocks ALDH",
			toxic: true
		}, {
			name: "Acetate",
			via: "ALDH",
			note: "Terminal product"
		}]
	},
	methadone: {
		id: "methadone",
		blurb: "CYP2B6 and 3A4 to EDDP. Inducers drop levels (withdrawal); inhibitors raise QT risk.",
		nodes: [{
			name: "EDDP",
			via: "CYP2B6 · CYP3A4",
			note: "Inactive; used as a compliance marker"
		}]
	},
	clozapine: {
		id: "clozapine",
		blurb: "CYP1A2 does the work. Smoke induces it; quitting without a dose cut is a toxicity event.",
		nodes: [{
			name: "Norclozapine",
			via: "CYP1A2",
			note: "Active; tracks parent",
			active: true
		}]
	},
	cannabidiol: {
		id: "cannabidiol",
		blurb: "7-OH-CBD is active. Strong 2C19 inhibition (fluconazole, CBD itself at high dose) stacks parent.",
		nodes: [{
			name: "7-OH-CBD",
			via: "CYP2C19",
			note: "Active metabolite",
			active: true
		}, {
			name: "7-COOH-CBD",
			via: "further oxidation",
			note: "Inactive, abundant"
		}]
	},
	fentanyl: {
		id: "fentanyl",
		blurb: "Norfentanyl via CYP3A4. Strong 3A4 inhibitors raise parent and the airway risk.",
		nodes: [{
			name: "Norfentanyl",
			via: "CYP3A4",
			note: "Inactive shunt"
		}]
	},
	buprenorphine: {
		id: "buprenorphine",
		blurb: "Norbuprenorphine is an active μ-agonist and a P-gp substrate. 3A4 inhibitors raise both.",
		nodes: [{
			name: "Norbuprenorphine",
			via: "CYP3A4",
			note: "Active μ-agonist",
			active: true
		}]
	},
	"two-fdck": {
		id: "two-fdck",
		blurb: "Same norketamine-class step as ketamine. Oral first-pass is the 2B6/3A4 trap.",
		nodes: [{
			name: "Norketamine analogue",
			via: "CYP2B6 · CYP3A4",
			note: "Still NMDA-active",
			active: true
		}]
	},
	gbl: {
		id: "gbl",
		blurb: "Serum lactonase converts GBL to GHB within minutes. Alcohol delays a 1,4-BD conversion, not this one.",
		nodes: [{
			name: "GHB",
			via: "lactonase",
			note: "The active CNS depressant",
			active: true,
			toxic: true
		}]
	},
	"bd-14": {
		id: "bd-14",
		blurb: "ADH and CYP2E1 turn 1,4-BD into GHB. Ethanol occupies ADH and dumps GHB later.",
		nodes: [{
			name: "GHB",
			via: "ADH · CYP2E1",
			note: "Delayed if alcohol is on board",
			active: true,
			toxic: true
		}]
	},
	mephedrone: {
		id: "mephedrone",
		blurb: "CYP2D6 demethylation. A 2D6 PM or a strong 2D6 inhibitor stacks parent cathinone.",
		nodes: [{
			name: "Nor-mephedrone",
			via: "CYP2D6",
			note: "Still stimulant/entactogen",
			active: true
		}]
	},
	loperamide: {
		id: "loperamide",
		blurb: "P-gp and CYP3A4 keep it out of the brain. Block either and it becomes a central opioid with QT.",
		nodes: [{
			name: "N-desmethyl-loperamide",
			via: "CYP3A4",
			note: "Less active"
		}]
	},
	meperidine: {
		id: "meperidine",
		blurb: "Normeperidine is the seizure metabolite. 3A4 blockade and renal failure both stack it.",
		nodes: [{
			name: "Normeperidine",
			via: "CYP3A4 · CYP2B6",
			note: "Neurotoxic; seizures",
			toxic: true
		}]
	},
	carisoprodol: {
		id: "carisoprodol",
		blurb: "CYP2C19 to meprobamate. A 2C19 PM or CBD/fluconazole leaves more parent and still makes the barbiturate-like metabolite.",
		nodes: [{
			name: "Meprobamate",
			via: "CYP2C19",
			note: "Barbiturate-like sedative",
			active: true,
			toxic: true
		}]
	},
	dck: {
		id: "dck",
		blurb: "Same norketamine-class step as ketamine. Oral first-pass is the 2B6/3A4 trap.",
		nodes: [{
			name: "Nor-DCK",
			via: "CYP2B6 · CYP3A4",
			note: "Still NMDA-active",
			active: true
		}]
	},
	mda: {
		id: "mda",
		blurb: "CYP2D6 demethylenation, like MDMA. A 2D6 PM or paroxetine stacks parent entactogen.",
		nodes: [{
			name: "HHA / catechol",
			via: "CYP2D6",
			note: "Demethylenated product",
			active: true
		}]
	},
	"four-aco-dmt": {
		id: "four-aco-dmt",
		blurb: "Deacetylation is not CYP. The active drug is psilocin — same MAO-A map as mushrooms.",
		nodes: [{
			name: "Psilocin",
			via: "esterases",
			note: "The 5-HT2A agonist",
			active: true
		}]
	},
	desipramine: {
		id: "desipramine",
		blurb: "Sensitive CYP2D6 substrate. 2-hydroxy-desipramine tracks parent; PMs and strong 2D6 inhibitors spike both.",
		nodes: [{
			name: "2-hydroxy-desipramine",
			via: "CYP2D6",
			note: "Active; cardiotoxic in excess",
			active: true,
			toxic: true
		}]
	},
	imipramine: {
		id: "imipramine",
		blurb: "CYP2C19 demethylates to desipramine; CYP2D6 hydroxylates both. Two isoform traps.",
		nodes: [{
			name: "Desipramine",
			via: "CYP2C19",
			note: "Active TCA",
			active: true
		}, {
			name: "2-hydroxy-imipramine",
			via: "CYP2D6",
			note: "Cardiotoxic in excess",
			toxic: true
		}]
	},
	warfarin: {
		id: "warfarin",
		blurb: "S-warfarin (the potent enantiomer) is sensitive CYP2C9. Fluconazole, amiodarone, and 2C9 PMs raise INR.",
		nodes: [{
			name: "7-hydroxy-S-warfarin",
			via: "CYP2C9",
			note: "Inactive shunt of the potent enantiomer"
		}, {
			name: "R-warfarin oxidation",
			via: "CYP1A2 · CYP3A4",
			note: "Less potent enantiomer"
		}]
	},
	phenobarbital: {
		id: "phenobarbital",
		blurb: "Autoinducer. After 1–2 weeks it turns on 3A4/2C9/2C19 — OCPs, DOACs, and oral ketamine all fall.",
		nodes: [{
			name: "p-hydroxyphenobarbital",
			via: "CYP2C19",
			note: "Then glucuronidated"
		}]
	},
	efavirenz: {
		id: "efavirenz",
		blurb: "Sensitive CYP2B6 substrate that also induces 2B6 and 3A4. 2B6 PMs get more CNS toxicity; methadone gets withdrawal.",
		nodes: [{
			name: "8-hydroxy-efavirenz",
			via: "CYP2B6",
			note: "Neurotoxic metabolite",
			toxic: true
		}]
	},
	tapentadol: {
		id: "tapentadol",
		blurb: "UGT2B7, not CYP. Parent is the μ-agonist and the NRI — MAOIs and SSRIs still stack.",
		nodes: [{
			name: "Tapentadol-O-glucuronide",
			via: "UGT2B7",
			note: "Inactive"
		}]
	},
	hydromorphone: {
		id: "hydromorphone",
		blurb: "UGT2B7 to hydromorphone-3-glucuronide. Not a CYP victim; still an opioid for PD.",
		nodes: [{
			name: "H3G",
			via: "UGT2B7",
			note: "Neuroexcitatory in renal failure",
			toxic: true
		}]
	},
	oxycodone: {
		id: "oxycodone",
		blurb: "3A4 is the main shunt. 2D6 makes oxymorphone — the hotter μ-agonist. Percocet adds APAP on a separate 2E1 map.",
		nodes: [{
			name: "Noroxycodone",
			via: "CYP3A4",
			note: "Weakly active shunt"
		}, {
			name: "Oxymorphone",
			via: "CYP2D6",
			note: "Hotter μ-agonist",
			active: true
		}]
	},
	heroin: {
		id: "heroin",
		blurb: "Minutes to 6-MAM, then morphine. The CYP map is morphine's, not diacetylmorphine's.",
		nodes: [{
			name: "6-Monoacetylmorphine",
			via: "plasma esterases",
			note: "Diagnostic of heroin; still a μ-agonist",
			active: true
		}, {
			name: "Morphine",
			via: "esterases",
			note: "The durable opioid",
			active: true,
			toxic: true
		}]
	},
	"dirty-30": {
		id: "dirty-30",
		blurb: "Modeled as illicit fentanyl, not oxycodone. Norfentanyl is the inactive marker; the μ-agonist is parent.",
		nodes: [{
			name: "Norfentanyl",
			via: "CYP3A4",
			note: "Inactive; the parent is the opioid"
		}]
	},
	kratom: {
		id: "kratom",
		blurb: "CYP3A4 turns mitragynine into 7-hydroxymitragynine — the hotter μ-agonist. Street 7-OH skips that step.",
		nodes: [{
			name: "7-Hydroxymitragynine",
			via: "CYP3A4",
			note: "Much hotter μ-agonist than parent",
			active: true,
			toxic: true
		}]
	},
	"seven-oh": {
		id: "seven-oh",
		blurb: "The μ-agonist itself. 3A4 still clears it; inhibitors raise the opioid load.",
		nodes: [{
			name: "Further oxidation / conjugation",
			via: "CYP3A4",
			note: "Parent is already the hot species",
			active: true
		}]
	},
	primidone: {
		id: "primidone",
		blurb: "Activated to phenobarbital. After 1–2 weeks you have a pan-CYP inducer on board.",
		nodes: [{
			name: "Phenobarbital",
			via: "CYP2C19 · oxidation",
			note: "The inducing barbiturate",
			active: true
		}, {
			name: "PEMA",
			via: "oxidation",
			note: "Active anticonvulsant metabolite",
			active: true
		}]
	},
	clopidogrel: {
		id: "clopidogrel",
		blurb: "Prodrug. CYP2C19 (with 3A4/2B6/1A2) to the thiol. 2C19 PMs and omeprazole blunt antiplatelet effect.",
		nodes: [{
			name: "Thiol active metabolite",
			via: "CYP2C19",
			note: "Irreversible P2Y12 block",
			active: true
		}]
	},
	tamoxifen: {
		id: "tamoxifen",
		blurb: "Endoxifen is the workhorse. CYP2D6 PMs and strong 2D6 inhibitors lose activation.",
		nodes: [{
			name: "Endoxifen",
			via: "CYP2D6",
			note: "Potent anti-estrogen",
			active: true
		}, {
			name: "N-desmethyl-tamoxifen",
			via: "CYP3A4",
			note: "Then 2D6 to endoxifen"
		}]
	},
	diclazepam: {
		id: "diclazepam",
		blurb: "Long RC benzo. Sequential dealkylation toward delorazepam, lorazepam, and lormetazepam.",
		nodes: [{
			name: "Delorazepam",
			via: "CYP3A4",
			note: "Long-acting active benzo",
			active: true
		}, {
			name: "Lorazepam",
			via: "further metabolism",
			note: "Then UGT",
			active: true
		}]
	}
};
function treesFor(ids) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const id of ids) {
		const t = METABOLITE_TREES[id];
		if (t && !seen.has(t.id)) {
			seen.add(t.id);
			out.push(t);
		}
	}
	return out;
}
function sampleNeedsPro(s) {
	return Boolean(s.phenotypes || s.smoking || s.alcohol || s.cannabisRoute || s.ketamineRoute && s.ketamineRoute !== "iv");
}
var SAMPLE_LANES = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "nmda",
		label: "NMDA"
	},
	{
		id: "entactogen",
		label: "Entactogen"
	},
	{
		id: "gaba",
		label: "GABA"
	},
	{
		id: "phenotype",
		label: "Phenotype"
	},
	{
		id: "smoke",
		label: "Smoke"
	},
	{
		id: "mat",
		label: "MAT"
	},
	{
		id: "food",
		label: "Food"
	},
	{
		id: "street",
		label: "Street"
	},
	{
		id: "clinic",
		label: "Clinic"
	}
];
/** Window-first order when the MAT / OTP board is open. */
var WINDOW_PIN = [
	"methadone-fentanyl",
	"uds-methadone",
	"methadone-paxlovid",
	"bup-paxlovid",
	"fentanyl-paxlovid",
	"methadone-fluvoxamine",
	"methadone-phenytoin",
	"methadone-carbamazepine",
	"methadone-rifampin",
	"methadone-azithromycin",
	"methadone-phenergan",
	"methadone-hydroxyzine",
	"methadone-clonazepam",
	"bup-fentanyl",
	"nalmefene-fent",
	"methadone-fent-xylazine",
	"methadone-epclusa",
	"methadone-cobicistat",
	"naltrexone-fentanyl",
	"methadone-ciprofloxacin",
	"uds-seroquel",
	"cows-lofexidine",
	"otp-induction",
	"vivitrol-methadone"
];
function samplesInLane(lane) {
	const rows = SAMPLE_REGIMENS.filter((s) => lane === "all" || s.lane === lane);
	if (lane !== "mat") return rows;
	const rank = new Map(WINDOW_PIN.map((id, i) => [id, i]));
	return [...rows].sort((a, b) => (rank.get(a.id) ?? 500) - (rank.get(b.id) ?? 500));
}
var SAMPLE_REGIMENS = [
	{
		id: "ketamine-3a4",
		title: "Oral ketamine + clarithromycin",
		blurb: "First-pass 3A4 trap — much hotter than IV",
		drugIds: ["ketamine", "clarithromycin"],
		lane: "nmda",
		ketamineRoute: "oral"
	},
	{
		id: "ketamine-benzo",
		title: "Ketamine + alprazolam",
		blurb: "NMDA + GABA — airway risk, blunted antidepressant effect",
		drugIds: ["ketamine", "alprazolam"],
		lane: "nmda"
	},
	{
		id: "esketamine-rifampin",
		title: "Esketamine + rifampin",
		blurb: "Strong 2B6/3A4 induction, loss of esketamine exposure",
		drugIds: ["esketamine", "rifampin"],
		lane: "nmda",
		ketamineRoute: "in"
	},
	{
		id: "mdma-maoi",
		title: "MDMA + phenelzine",
		blurb: "Entactogen × irreversible MAOI — contraindicated",
		drugIds: ["mdma", "phenelzine"],
		lane: "entactogen"
	},
	{
		id: "mdma-2d6",
		title: "MDMA + paroxetine",
		blurb: "2D6 blockade plus stacked serotonin",
		drugIds: ["mdma", "paroxetine"],
		lane: "entactogen"
	},
	{
		id: "dxm-ssri",
		title: "DXM + sertraline",
		blurb: "Sensitive 2D6 substrate meets an SSRI",
		drugIds: ["dextromethorphan", "sertraline"],
		lane: "nmda"
	},
	{
		id: "dxm-quinidine",
		title: "DXM + quinidine",
		blurb: "Nuedexta pair — strong 2D6 inhibition of DXM",
		drugIds: ["dextromethorphan", "quinidine"],
		lane: "nmda"
	},
	{
		id: "alcohol-opioid-benzo",
		title: "Alcohol + opioid + benzo",
		blurb: "Three-drug CNS stack — respiratory depression",
		drugIds: [
			"ethanol",
			"oxycodone",
			"alprazolam"
		],
		lane: "gaba"
	},
	{
		id: "cbd-clobazam",
		title: "CBD + clobazam",
		blurb: "Strong CYP2C19 inhibition of a sensitive benzo",
		drugIds: ["cannabidiol", "clobazam"],
		lane: "gaba"
	},
	{
		id: "cocaine-alcohol",
		title: "Cocaine + ethanol",
		blurb: "Cocaethylene — longer-lived cardiotoxin",
		drugIds: ["cocaine", "ethanol"],
		lane: "street"
	},
	{
		id: "lithium-psilocybin",
		title: "Lithium + psilocybin",
		blurb: "Classic psychedelic × lithium seizure signal",
		drugIds: ["lithium", "psilocybin"],
		lane: "entactogen"
	},
	{
		id: "naltrexone-opioid",
		title: "Naltrexone + oxycodone",
		blurb: "Antagonist precipitates withdrawal, blocks analgesia",
		drugIds: ["naltrexone", "oxycodone"],
		lane: "mat"
	},
	{
		id: "ghb-alcohol",
		title: "Sodium oxybate + alcohol",
		blurb: "Labeled contraindication — coma / apnea",
		drugIds: ["sodium-oxybate", "ethanol"],
		lane: "gaba"
	},
	{
		id: "dxm-2d6pm",
		title: "DXM in a 2D6 PM",
		blurb: "Poor metabolizer = stacked parent without a perpetrator drug",
		drugIds: ["dextromethorphan"],
		lane: "phenotype",
		phenotypes: { CYP2D6: "PM" }
	},
	{
		id: "ketamine-2b6pm",
		title: "Ketamine in a 2B6 PM",
		blurb: "Slow norketamine formation, higher parent NMDA load",
		drugIds: ["ketamine"],
		lane: "phenotype",
		phenotypes: { CYP2B6: "PM" }
	},
	{
		id: "codeine-2d6um",
		title: "Codeine in a 2D6 UM",
		blurb: "Ultrarapid activation to morphine — labeled risk",
		drugIds: ["codeine"],
		lane: "phenotype",
		phenotypes: { CYP2D6: "UM" }
	},
	{
		id: "smoke-clozapine",
		title: "Clozapine + daily smoke",
		blurb: "PAHs induce 1A2 — clozapine levels fall, rebound on quit",
		drugIds: ["clozapine"],
		lane: "smoke",
		smoking: true
	},
	{
		id: "ibogaine-methadone",
		title: "Ibogaine + methadone",
		blurb: "2D6 victim plus stacked QT — a documented fatality pattern",
		drugIds: ["ibogaine", "methadone"],
		lane: "nmda"
	},
	{
		id: "gf-oral-ketamine",
		title: "Grapefruit + oral ketamine",
		blurb: "Intestinal 3A4 knockout — IV barely moves, oral does",
		drugIds: ["grapefruit", "ketamine"],
		lane: "food",
		ketamineRoute: "oral"
	},
	{
		id: "gf-buspirone",
		title: "Grapefruit + buspirone",
		blurb: "Classic furanocoumarin × sensitive 3A4 anxiolytic",
		drugIds: ["grapefruit", "buspirone"],
		lane: "food"
	},
	{
		id: "tacrolimus-gf",
		title: "Tacrolimus + grapefruit",
		blurb: "NTI 3A4 victim × intestinal knockout — F rises, t½ does not",
		drugIds: ["tacrolimus", "grapefruit"],
		lane: "food"
	},
	{
		id: "tyramine-maoi",
		title: "Tyramine foods + phenelzine",
		blurb: "Aged cheese / tap beer × irreversible MAOI",
		drugIds: ["tyramine-foods", "phenelzine"],
		lane: "food"
	},
	{
		id: "dairy-cipro",
		title: "Milk + ciprofloxacin",
		blurb: "Dietary calcium — the course never arrives",
		drugIds: ["dairy", "ciprofloxacin"],
		lane: "food"
	},
	{
		id: "kale-warfarin",
		title: "Kale + warfarin",
		blurb: "Phylloquinone smoothie — INR falls, not 2C9",
		drugIds: ["leafy-greens", "warfarin"],
		lane: "food"
	},
	{
		id: "oj-allegra",
		title: "Apple juice + fexofenadine",
		blurb: "OATP, not CYP — Allegra never arrives",
		drugIds: ["oatp-juice", "fexofenadine"],
		lane: "food"
	},
	{
		id: "coffee-synthroid",
		title: "Coffee + levothyroxine",
		blurb: "Benvenga — espresso with the morning dose empties TSH",
		drugIds: ["coffee", "levothyroxine"],
		lane: "food"
	},
	{
		id: "protein-sinemet",
		title: "Protein meal + levodopa",
		blurb: "LAT1 competition — lost 'on' time, not CYP",
		drugIds: ["protein-meal", "levodopa"],
		lane: "food"
	},
	{
		id: "gf-felodipine",
		title: "Grapefruit + felodipine",
		blurb: "Bailey 1991 — the paper that put juice on the CYP map",
		drugIds: ["grapefruit", "felodipine"],
		lane: "food"
	},
	{
		id: "sjw-sertraline",
		title: "St. John's wort + sertraline",
		blurb: "3A4 induction plus stacked serotonin",
		drugIds: ["st-johns-wort", "sertraline"],
		lane: "food"
	},
	{
		id: "fat-dronabinol",
		title: "High-fat meal + THC",
		blurb: "Fed-state jump in oral cannabinoid AUC",
		drugIds: ["high-fat-meal", "dronabinol"],
		lane: "food"
	},
	{
		id: "lithium-low-salt",
		title: "Lithium + low salt",
		blurb: "Sodium restriction retains lithium",
		drugIds: ["lithium", "low-salt"],
		lane: "food"
	},
	{
		id: "lithium-ibuprofen",
		title: "Lithium + ibuprofen",
		blurb: "NSAID retains lithium — TDM, not CYP",
		drugIds: ["lithium", "ibuprofen"],
		lane: "clinic"
	},
	{
		id: "kratom-benzo",
		title: "Kratom + alprazolam",
		blurb: "Atypical opioid × benzo — airway stack",
		drugIds: ["kratom", "alprazolam"],
		lane: "mat"
	},
	{
		id: "phenibut-alcohol",
		title: "Phenibut + alcohol",
		blurb: "GABA-B analogue plus ethanol — stacked sedation",
		drugIds: ["phenibut", "ethanol"],
		lane: "gaba"
	},
	{
		id: "chronic-apap",
		title: "Acetaminophen + chronic alcohol",
		blurb: "Induced 2E1 → NAPQI; glutathione already low",
		drugIds: ["acetaminophen"],
		lane: "smoke",
		alcohol: "chronic"
	},
	{
		id: "edible-thc-2c9",
		title: "Edible THC + fluconazole",
		blurb: "11-OH-THC first-pass meets strong CYP2C9 inhibition",
		drugIds: ["dronabinol", "fluconazole"],
		lane: "food",
		cannabisRoute: "oral"
	},
	{
		id: "xylazine-fentanyl",
		title: "Xylazine + fentanyl",
		blurb: "α2 sedation naloxone will not reverse",
		drugIds: ["xylazine", "fentanyl"],
		lane: "street"
	},
	{
		id: "gbl-alcohol",
		title: "GBL + alcohol",
		blurb: "GHB prodrug × ethanol — labeled apnea",
		drugIds: ["gbl", "ethanol"],
		lane: "street"
	},
	{
		id: "mephedrone-maoi",
		title: "Mephedrone + phenelzine",
		blurb: "Cathinone × irreversible MAOI",
		drugIds: ["mephedrone", "phenelzine"],
		lane: "street"
	},
	{
		id: "bromazolam-oxy",
		title: "Bromazolam + oxycodone",
		blurb: "Designer benzo × opioid — boxed airway warning",
		drugIds: ["bromazolam", "oxycodone"],
		lane: "street"
	},
	{
		id: "loperamide-quinidine",
		title: "Loperamide + quinidine",
		blurb: "P-gp knockout turns Imodium into a central opioid",
		drugIds: ["loperamide", "quinidine"],
		lane: "street"
	},
	{
		id: "twofdck-gf",
		title: "2-FDCK + grapefruit",
		blurb: "Oral arylcyclohexylamine meets intestinal 3A4 knockout",
		drugIds: ["two-fdck", "grapefruit"],
		lane: "street",
		ketamineRoute: "oral"
	},
	{
		id: "poppers-sildenafil",
		title: "Poppers + sildenafil",
		blurb: "Nitrate × PDE5 — labeled collapse",
		drugIds: ["poppers", "sildenafil"],
		lane: "street"
	},
	{
		id: "mxe-alprazolam",
		title: "MXE + alprazolam",
		blurb: "Long NMDA dissociative × benzo airway stack",
		drugIds: ["mxe", "alprazolam"],
		lane: "nmda"
	},
	{
		id: "dck-gf",
		title: "DCK + grapefruit",
		blurb: "Oral deschloroketamine meets intestinal 3A4 knockout",
		drugIds: ["dck", "grapefruit"],
		lane: "nmda",
		ketamineRoute: "oral"
	},
	{
		id: "three-meo-benzo",
		title: "3-MeO-PCP + alprazolam",
		blurb: "Long arylcyclohexylamine × benzo airway stack",
		drugIds: ["three-meo-pcp", "alprazolam"],
		lane: "nmda"
	},
	{
		id: "mda-maoi",
		title: "MDA + phenelzine",
		blurb: "MDMA cousin × irreversible MAOI",
		drugIds: ["mda", "phenelzine"],
		lane: "entactogen"
	},
	{
		id: "methylone-2d6",
		title: "Methylone + paroxetine",
		blurb: "Cathinone 2D6 victim plus stacked serotonin",
		drugIds: ["methylone", "paroxetine"],
		lane: "entactogen"
	},
	{
		id: "nbome-lithium",
		title: "25I-NBOMe + lithium",
		blurb: "Street blotter × lithium seizure signal",
		drugIds: ["twentyfive-i", "lithium"],
		lane: "street"
	},
	{
		id: "clonazolam-fent",
		title: "Clonazolam + fentanyl",
		blurb: "High-potency RC benzo × opioid — boxed airway",
		drugIds: ["clonazolam", "fentanyl"],
		lane: "street"
	},
	{
		id: "apvp-maoi",
		title: "α-PVP + phenelzine",
		blurb: "Pyrovalerone stimulant × irreversible MAOI",
		drugIds: ["a-pvp", "phenelzine"],
		lane: "street"
	},
	{
		id: "scopolamine-dph",
		title: "Scopolamine + diphenhydramine",
		blurb: "Tropane × antihistamine — stacked delirium",
		drugIds: ["scopolamine", "diphenhydramine"],
		lane: "street"
	},
	{
		id: "meperidine-maoi",
		title: "Meperidine + phenelzine",
		blurb: "Labeled MAOI contraindication — serotonin + seizures",
		drugIds: ["meperidine", "phenelzine"],
		lane: "clinic"
	},
	{
		id: "cimetidine-tizanidine",
		title: "Cimetidine + tizanidine",
		blurb: "OTC 1A2 bully × sensitive 1A2 muscle relaxant",
		drugIds: ["cimetidine", "tizanidine"],
		lane: "clinic"
	},
	{
		id: "pheno-ocp",
		title: "Phenobarbital + OCP",
		blurb: "Pan-CYP induction — contraceptive failure",
		drugIds: ["phenobarbital", "ethinyl-estradiol"],
		lane: "clinic"
	},
	{
		id: "efavirenz-methadone",
		title: "Efavirenz + methadone",
		blurb: "2B6/3A4 induction precipitates opioid withdrawal",
		drugIds: ["efavirenz", "methadone"],
		lane: "clinic"
	},
	{
		id: "pimozide-clarith",
		title: "Pimozide + clarithromycin",
		blurb: "Sensitive 3A4 QT drug × strong 3A4 inhibitor",
		drugIds: ["pimozide", "clarithromycin"],
		lane: "clinic"
	},
	{
		id: "thioridazine-fluox",
		title: "Thioridazine + fluoxetine",
		blurb: "2D6 PM-like blockade of a boxed QT drug",
		drugIds: ["thioridazine", "fluoxetine"],
		lane: "clinic"
	},
	{
		id: "tapentadol-ssri",
		title: "Tapentadol + sertraline",
		blurb: "μ-agonist plus NRI meets an SSRI",
		drugIds: ["tapentadol", "sertraline"],
		lane: "clinic"
	},
	{
		id: "disulfiram-etoh",
		title: "Disulfiram + alcohol",
		blurb: "ALDH block — the acetaldehyde reaction",
		drugIds: ["disulfiram", "ethanol"],
		lane: "clinic"
	},
	{
		id: "warfarin-2c9pm",
		title: "Warfarin in a 2C9 PM",
		blurb: "Sensitive 2C9 substrate without a perpetrator drug",
		drugIds: ["warfarin"],
		lane: "phenotype",
		phenotypes: { CYP2C9: "PM" }
	},
	{
		id: "carisoprodol-2c19pm",
		title: "Carisoprodol in a 2C19 PM",
		blurb: "Meprobamate activation plus stacked parent",
		drugIds: ["carisoprodol"],
		lane: "phenotype",
		phenotypes: { CYP2C19: "PM" }
	},
	{
		id: "piperine-ketamine",
		title: "Piperine + oral ketamine",
		blurb: "Black-pepper 3A4/P-gp block on a first-pass victim",
		drugIds: ["piperine", "ketamine"],
		lane: "food",
		ketamineRoute: "oral"
	},
	{
		id: "licorice-sotalol",
		title: "Licorice + sotalol",
		blurb: "Glycyrrhizin hypokalemia plus a known QT drug",
		drugIds: ["licorice", "sotalol"],
		lane: "food"
	},
	{
		id: "starfruit-simva",
		title: "Star fruit + simvastatin",
		blurb: "Furanocoumarin-adjacent 3A4 hit on a sensitive statin",
		drugIds: ["starfruit", "simvastatin"],
		lane: "food"
	},
	{
		id: "ginkgo-warfarin",
		title: "Ginkgo + warfarin",
		blurb: "Herbal antiplatelet on a narrow-index anticoagulant",
		drugIds: ["ginkgo", "warfarin"],
		lane: "food"
	},
	{
		id: "clonidine-oxy",
		title: "Clonidine + oxycodone",
		blurb: "Clinical α2 agonist — naloxone will not fully reverse",
		drugIds: ["clonidine", "oxycodone"],
		lane: "mat"
	},
	{
		id: "dexmed-fent",
		title: "Dexmedetomidine + fentanyl",
		blurb: "Precedex α2 × opioid — naloxone will not reverse the α2",
		drugIds: ["dexmedetomidine", "fentanyl"],
		lane: "clinic"
	},
	{
		id: "propofol-midaz",
		title: "Propofol + midazolam",
		blurb: "IV anesthetic plus 3A4 benzo — stacked apnea",
		drugIds: ["propofol", "midazolam"],
		lane: "clinic"
	},
	{
		id: "prazosin-etoh",
		title: "Prazosin + alcohol",
		blurb: "α1 blockade plus ethanol — orthostatic syncope",
		drugIds: ["prazosin", "ethanol"],
		lane: "clinic"
	},
	{
		id: "sevenoh-benzo",
		title: "7-OH + alprazolam",
		blurb: "Hot kratom μ-agonist × benzo airway stack",
		drugIds: ["seven-oh", "alprazolam"],
		lane: "street"
	},
	{
		id: "primidone-ocp",
		title: "Primidone + OCP",
		blurb: "Barbiturate prodrug — contraceptive failure",
		drugIds: ["primidone", "ethinyl-estradiol"],
		lane: "clinic"
	},
	{
		id: "famotidine-tizanidine",
		title: "Famotidine + tizanidine",
		blurb: "The H2 that is not cimetidine — CYP row should stay quiet",
		drugIds: ["famotidine", "tizanidine"],
		lane: "clinic"
	},
	{
		id: "etonitazene-xylazine",
		title: "Etonitazene + xylazine",
		blurb: "Nitazene plus α2 — naloxone will not finish the job",
		drugIds: ["etonitazene", "xylazine"],
		lane: "street"
	},
	{
		id: "guanfacine-ritonavir",
		title: "Guanfacine + ritonavir",
		blurb: "ADHD α2 meets a strong 3A4 inhibitor",
		drugIds: ["guanfacine", "ritonavir"],
		lane: "clinic"
	},
	{
		id: "aprepitant-ketamine",
		title: "Aprepitant + oral ketamine",
		blurb: "NK1 antiemetic as a 3A4 perpetrator on a first-pass victim",
		drugIds: ["aprepitant", "ketamine"],
		lane: "clinic",
		ketamineRoute: "oral"
	},
	{
		id: "speedball-fent",
		title: "Speedball — cocaine + fentanyl",
		blurb: "Stimulant masks apnea; the opioid still stops the breathing",
		drugIds: ["cocaine", "fentanyl"],
		lane: "street"
	},
	{
		id: "percocet-alcohol",
		title: "Percocet + chronic alcohol",
		blurb: "Oxycodone + APAP on induced 2E1 — airway plus NAPQI",
		drugIds: ["oxycodone", "acetaminophen"],
		lane: "street",
		alcohol: "chronic"
	},
	{
		id: "dirty-30",
		title: "Dirty 30s (pressed M30 + xylazine)",
		blurb: "The stamp is oxycodone. The contents are not.",
		drugIds: ["dirty-30", "xylazine"],
		lane: "street"
	},
	{
		id: "perc-vs-pressed",
		title: "Perc 30 vs pressed 30",
		blurb: "Pharmaceutical oxycodone next to illicit fentanyl + tranq",
		drugIds: [
			"oxycodone",
			"fentanyl",
			"xylazine"
		],
		lane: "street"
	},
	{
		id: "speedball-heroin",
		title: "Classic speedball — cocaine + heroin",
		blurb: "The original mixer. Stimulant wears off first.",
		drugIds: ["cocaine", "heroin"],
		lane: "street"
	},
	{
		id: "bup-fentanyl",
		title: "Buprenorphine + fentanyl",
		blurb: "Partial agonist on a fentanyl load — precipitated withdrawal, not stacked mg",
		drugIds: ["buprenorphine", "fentanyl"],
		lane: "mat"
	},
	{
		id: "methadone-benzo",
		title: "Methadone + alprazolam",
		blurb: "OTP boxed warning — street benzo on a long μ agonist",
		drugIds: ["methadone", "alprazolam"],
		lane: "mat"
	},
	{
		id: "methadone-quetiapine",
		title: "Methadone + quetiapine",
		blurb: "Seroquel-for-sleep on a known-QT opioid",
		drugIds: ["methadone", "quetiapine"],
		lane: "mat"
	},
	{
		id: "methadone-rifampin",
		title: "Methadone + rifampin",
		blurb: "3A4/2B6 induction looks like a stolen dose",
		drugIds: ["methadone", "rifampin"],
		lane: "mat"
	},
	{
		id: "bup-ritonavir",
		title: "Buprenorphine + ritonavir",
		blurb: "HIV booster raises a 3A4 partial agonist",
		drugIds: ["buprenorphine", "ritonavir"],
		lane: "mat"
	},
	{
		id: "methadone-gabapentin",
		title: "Methadone + gabapentin",
		blurb: "The 'nerve pain' that still hits the airway",
		drugIds: ["methadone", "gabapentin"],
		lane: "mat"
	},
	{
		id: "methadone-cocaine",
		title: "Methadone + cocaine",
		blurb: "OTP speedball — QT plus masked apnea",
		drugIds: ["methadone", "cocaine"],
		lane: "mat"
	},
	{
		id: "bup-bromazolam",
		title: "Buprenorphine + bromazolam",
		blurb: "Street benzo on a Suboxone desk — boxed airway",
		drugIds: ["buprenorphine", "bromazolam"],
		lane: "mat"
	},
	{
		id: "lofexidine-fent",
		title: "Lofexidine + fentanyl",
		blurb: "Lucemyra is α2 — naloxone will not finish withdrawal sedation",
		drugIds: ["lofexidine", "fentanyl"],
		lane: "mat"
	},
	{
		id: "acamprosate-naltrexone",
		title: "Acamprosate + naltrexone",
		blurb: "Alcohol MAT pair — the CYP/PD rows should stay quiet",
		drugIds: ["acamprosate", "naltrexone"],
		lane: "mat"
	},
	{
		id: "methadone-citalopram",
		title: "Methadone + citalopram",
		blurb: "Two known-QT drugs on an OTP board",
		drugIds: ["methadone", "citalopram"],
		lane: "mat"
	},
	{
		id: "methadone-fluconazole",
		title: "Methadone + fluconazole",
		blurb: "Azole 3A4 block — they nod, and the QT climbs",
		drugIds: ["methadone", "fluconazole"],
		lane: "mat"
	},
	{
		id: "methadone-hydroxyzine",
		title: "Methadone + hydroxyzine",
		blurb: "Vistaril is not a free benzo-alternative on a known-QT opioid",
		drugIds: ["methadone", "hydroxyzine"],
		lane: "mat"
	},
	{
		id: "methadone-ondansetron",
		title: "Methadone + ondansetron",
		blurb: "Zofran at the window — two known-QT drugs",
		drugIds: ["methadone", "ondansetron"],
		lane: "mat"
	},
	{
		id: "methadone-xylazine",
		title: "Methadone + xylazine",
		blurb: "Today's supply on a take-home — α2 naloxone will not reverse",
		drugIds: ["methadone", "xylazine"],
		lane: "mat"
	},
	{
		id: "naltrexone-fentanyl",
		title: "Naltrexone + fentanyl",
		blurb: "Leftover agonist after the Vivitrol shot",
		drugIds: ["naltrexone", "fentanyl"],
		lane: "mat"
	},
	{
		id: "bup-methadone",
		title: "Buprenorphine + methadone",
		blurb: "Transfer day — partial on a full agonist is precipitated withdrawal",
		drugIds: ["buprenorphine", "methadone"],
		lane: "mat"
	},
	{
		id: "bup-sevenoh",
		title: "Buprenorphine + 7-OH",
		blurb: "Smoke-shop μ-agonist on a Suboxone film — occupancy conflict",
		drugIds: ["buprenorphine", "seven-oh"],
		lane: "mat"
	},
	{
		id: "lofexidine-paroxetine",
		title: "Lofexidine + paroxetine",
		blurb: "Lucemyra is a 2D6 victim — the SSRI raises bradycardia",
		drugIds: ["lofexidine", "paroxetine"],
		lane: "mat"
	},
	{
		id: "methadone-epclusa",
		title: "Methadone + Epclusa",
		blurb: "HCV on the OTP — this pair should stay quiet; rifampin should not",
		drugIds: ["methadone", "epclusa"],
		lane: "mat"
	},
	{
		id: "naltrexone-loperamide",
		title: "Naltrexone + loperamide",
		blurb: "Imodium while waiting for Vivitrol — the μ is blocked, the QT is not",
		drugIds: ["naltrexone", "loperamide"],
		lane: "mat"
	},
	{
		id: "methadone-fentanyl",
		title: "Methadone + fentanyl",
		blurb: "Take-home plus today's supply — stacked μ, one airway",
		drugIds: ["methadone", "fentanyl"],
		lane: "mat"
	},
	{
		id: "methadone-fent-xylazine",
		title: "Methadone + fentanyl + xylazine",
		blurb: "The 2026 take-home triad — naloxone will not finish the α2",
		drugIds: [
			"methadone",
			"fentanyl",
			"xylazine"
		],
		lane: "mat"
	},
	{
		id: "methadone-paxlovid",
		title: "Methadone + Paxlovid",
		blurb: "Five-day ritonavir — methadone falls, watch withdrawal not nod",
		drugIds: ["methadone", "paxlovid"],
		lane: "mat"
	},
	{
		id: "fentanyl-paxlovid",
		title: "Fentanyl + Paxlovid",
		blurb: "Opposite arrow — 3A4 boost raises parent, airway risk climbs",
		drugIds: ["fentanyl", "paxlovid"],
		lane: "mat"
	},
	{
		id: "methadone-fluvoxamine",
		title: "Methadone + fluvoxamine",
		blurb: "The OTP Luvox bump — parent and QT climb; stopping looks stolen",
		drugIds: ["methadone", "fluvoxamine"],
		lane: "mat"
	},
	{
		id: "methadone-phenytoin",
		title: "Methadone + phenytoin",
		blurb: "Tong 1981 — Dilantin looks like a stolen take-home in days",
		drugIds: ["methadone", "phenytoin"],
		lane: "mat"
	},
	{
		id: "methadone-clonazepam",
		title: "Methadone + clonazepam",
		blurb: "The prescribed Klonopin — boxed airway, not a street benzo",
		drugIds: ["methadone", "clonazepam"],
		lane: "mat"
	},
	{
		id: "methadone-flexeril",
		title: "Methadone + cyclobenzaprine",
		blurb: "The 'back spasm' that still hits the airway",
		drugIds: ["methadone", "cyclobenzaprine"],
		lane: "mat"
	},
	{
		id: "methadone-phenergan",
		title: "Methadone + promethazine",
		blurb: "Window antiemetic — sedation plus a possible QT drug",
		drugIds: ["methadone", "promethazine"],
		lane: "mat"
	},
	{
		id: "methadone-trazodone",
		title: "Methadone + trazodone",
		blurb: "Sleep at the OTP — 3A4 victim plus a possible QT stack",
		drugIds: ["methadone", "trazodone"],
		lane: "mat"
	},
	{
		id: "methadone-cbd",
		title: "Methadone + CBD",
		blurb: "Epidiolex-dose 3A4/2C19 block on a known-QT opioid",
		drugIds: ["methadone", "cannabidiol"],
		lane: "mat"
	},
	{
		id: "fentanyl-medetomidine",
		title: "Fentanyl + medetomidine",
		blurb: "The newer α2 in the supply — naloxone will not reverse it",
		drugIds: ["fentanyl", "medetomidine"],
		lane: "mat"
	},
	{
		id: "methadone-meth",
		title: "Methadone + methamphetamine",
		blurb: "OTP goofball — stimulant masks apnea; QT is still there",
		drugIds: ["methadone", "methamphetamine"],
		lane: "mat"
	},
	{
		id: "fentanyl-fluconazole",
		title: "Fentanyl + fluconazole",
		blurb: "Azole 3A4 block on a sensitive μ-agonist — parent and airway",
		drugIds: ["fentanyl", "fluconazole"],
		lane: "mat"
	},
	{
		id: "methadone-nevirapine",
		title: "Methadone + nevirapine",
		blurb: "NNRTI stolen dose — same map as efavirenz, different rash",
		drugIds: ["methadone", "nevirapine"],
		lane: "mat"
	},
	{
		id: "methadone-naltrexone",
		title: "Methadone + naltrexone",
		blurb: "Vivitrol on a full agonist — precipitated withdrawal",
		drugIds: ["methadone", "naltrexone"],
		lane: "mat"
	},
	{
		id: "methadone-pregabalin",
		title: "Methadone + pregabalin",
		blurb: "Lyrica is the other gabapentinoid — still an airway warning",
		drugIds: ["methadone", "pregabalin"],
		lane: "mat"
	},
	{
		id: "methadone-ethanol",
		title: "Methadone + ethanol",
		blurb: "A drink on a take-home — boxed airway, not a CYP row",
		drugIds: ["methadone", "ethanol"],
		lane: "mat"
	},
	{
		id: "methadone-clarithromycin",
		title: "Methadone + clarithromycin",
		blurb: "Biaxin raises parent via 3A4 and stacks QT — not a Z-Pak",
		drugIds: ["methadone", "clarithromycin"],
		lane: "mat"
	},
	{
		id: "methadone-azithromycin",
		title: "Methadone + azithromycin",
		blurb: "Z-Pak is the quieter macrolide on CYP — it still stacks QT",
		drugIds: ["methadone", "azithromycin"],
		lane: "mat"
	},
	{
		id: "methadone-grapefruit",
		title: "Methadone + grapefruit",
		blurb: "Gut 3A4 knockout on a known-QT opioid — nod, not stolen",
		drugIds: ["methadone", "grapefruit"],
		lane: "mat"
	},
	{
		id: "bup-gabapentin",
		title: "Buprenorphine + gabapentin",
		blurb: "Office-based MAT — the nerve-pain extra still hits the airway",
		drugIds: ["buprenorphine", "gabapentin"],
		lane: "mat"
	},
	{
		id: "methadone-fluoxetine",
		title: "Methadone + fluoxetine",
		blurb: "Not the Luvox map — 2D6, not the OTP bump",
		drugIds: ["methadone", "fluoxetine"],
		lane: "mat"
	},
	{
		id: "methadone-carbamazepine",
		title: "Methadone + carbamazepine",
		blurb: "Tegretol stolen dose — 3A4/2B6 induction in 7–10 days",
		drugIds: ["methadone", "carbamazepine"],
		lane: "mat"
	},
	{
		id: "methadone-st-johns-wort",
		title: "Methadone + St. John's wort",
		blurb: "The tea that looks like rifampin-lite on a take-home",
		drugIds: ["methadone", "st-johns-wort"],
		lane: "mat"
	},
	{
		id: "methadone-ciprofloxacin",
		title: "Methadone + ciprofloxacin",
		blurb: "Herrlin 2000 — Cipro is not a free UTI pill on a known-QT opioid",
		drugIds: ["methadone", "ciprofloxacin"],
		lane: "mat"
	},
	{
		id: "bup-paxlovid",
		title: "Buprenorphine + Paxlovid",
		blurb: "Opposite of methadone — 3A4 raise, usually no cut in the tolerant",
		drugIds: ["buprenorphine", "paxlovid"],
		lane: "mat"
	},
	{
		id: "methadone-cimetidine",
		title: "Methadone + cimetidine",
		blurb: "Tagamet is the H2 that still bullies 3A4 — famotidine is the switch",
		drugIds: ["methadone", "cimetidine"],
		lane: "mat"
	},
	{
		id: "methadone-amiodarone",
		title: "Methadone + amiodarone",
		blurb: "Weeks of 3A4 block plus two known-QT drugs",
		drugIds: ["methadone", "amiodarone"],
		lane: "mat"
	},
	{
		id: "methadone-sertraline",
		title: "Methadone + sertraline",
		blurb: "Zoloft is not Luvox — 2D6, still serotonin",
		drugIds: ["methadone", "sertraline"],
		lane: "mat"
	},
	{
		id: "methadone-cobicistat",
		title: "Methadone + cobicistat",
		blurb: "Tybost is not Norvir — 3A4 raise, no 2B6 dump",
		drugIds: ["methadone", "cobicistat"],
		lane: "mat"
	},
	{
		id: "bup-naltrexone",
		title: "Buprenorphine + naltrexone",
		blurb: "Vivitrol on a film — occupancy conflict, not a failed shot",
		drugIds: ["buprenorphine", "naltrexone"],
		lane: "mat"
	},
	{
		id: "methadone-phenobarbital",
		title: "Methadone + phenobarbital",
		blurb: "Barbiturate stolen dose plus stacked apnea",
		drugIds: ["methadone", "phenobarbital"],
		lane: "mat"
	},
	{
		id: "aza-allopurinol",
		title: "Azathioprine + allopurinol",
		blurb: "XO block of 6-MP — pancytopenia, not a gout footnote",
		drugIds: ["azathioprine", "allopurinol"],
		lane: "clinic"
	},
	{
		id: "imdur-viagra",
		title: "Isosorbide + sildenafil",
		blurb: "Daily nitrate × PDE5 — the labeled hypotension",
		drugIds: ["isosorbide-mononitrate", "sildenafil"],
		lane: "clinic"
	},
	{
		id: "plavix-prilosec",
		title: "Clopidogrel + omeprazole",
		blurb: "2C19 activation of a prodrug — the PPI that blunts Plavix",
		drugIds: ["clopidogrel", "omeprazole"],
		lane: "clinic"
	},
	{
		id: "relpax-clarith",
		title: "Eletriptan + clarithromycin",
		blurb: "The CYP triptan × strong 3A4 — labeled 72-hour hold",
		drugIds: ["eletriptan", "clarithromycin"],
		lane: "clinic"
	},
	{
		id: "entocort-keto",
		title: "Oral budesonide + ketoconazole",
		blurb: "Gut 3A4 first-pass — a 'local' steroid goes systemic",
		drugIds: ["budesonide", "ketoconazole"],
		lane: "clinic"
	},
	{
		id: "eplerenone-clarith",
		title: "Eplerenone + clarithromycin",
		blurb: "Sensitive 3A4 K-sparing — labeled with strong inhibitors",
		drugIds: ["eplerenone", "clarithromycin"],
		lane: "clinic"
	},
	{
		id: "lamisil-metoprolol",
		title: "Terbinafine + metoprolol",
		blurb: "Nail-fungus 2D6 block on a beta blocker",
		drugIds: ["terbinafine", "metoprolol"],
		lane: "clinic"
	},
	{
		id: "actos-lopid",
		title: "Pioglitazone + gemfibrozil",
		blurb: "Sensitive 2C8 × the strong 2C8 fibrate",
		drugIds: ["pioglitazone", "gemfibrozil"],
		lane: "clinic"
	},
	{
		id: "flonase-ritonavir",
		title: "Fluticasone + ritonavir",
		blurb: "The spray that becomes Cushing next to a booster",
		drugIds: ["fluticasone", "ritonavir"],
		lane: "clinic"
	},
	{
		id: "ozempic-amaryl",
		title: "Semaglutide + glimepiride",
		blurb: "GLP-1 plus a sulfonylurea — stacked hypoglycemia",
		drugIds: ["semaglutide", "glimepiride"],
		lane: "clinic"
	},
	{
		id: "fenofibrate-simva",
		title: "Fenofibrate + simvastatin",
		blurb: "Statin × fibrate — major, not the gemfibrozil contraindication",
		drugIds: ["fenofibrate", "simvastatin"],
		lane: "clinic"
	},
	{
		id: "6mp-febuxostat",
		title: "6-MP + febuxostat",
		blurb: "Same XO enzyme as allopurinol — still marrow",
		drugIds: ["mercaptopurine", "febuxostat"],
		lane: "clinic"
	},
	{
		id: "ryr-gemfibrozil",
		title: "Red yeast rice + gemfibrozil",
		blurb: "Monacolin K is lovastatin — this is the labeled statin–fibrate hold",
		drugIds: ["red-yeast-rice", "gemfibrozil"],
		lane: "food"
	},
	{
		id: "vitk-warfarin",
		title: "Vitamin K + warfarin",
		blurb: "The antidote in a gummy — INR falls, not a 2C9 story",
		drugIds: ["vitamin-k", "warfarin"],
		lane: "food"
	},
	{
		id: "fishoil-warfarin",
		title: "Fish oil + warfarin",
		blurb: "High-dose EPA/DHA on a VKA — bleed, not CYP",
		drugIds: ["fish-oil", "warfarin"],
		lane: "food"
	},
	{
		id: "same-sertraline",
		title: "SAM-e + sertraline",
		blurb: "Methyl donor meets an SSRI — stacked serotonin",
		drugIds: ["sam-e", "sertraline"],
		lane: "food"
	},
	{
		id: "calcium-synthroid",
		title: "Calcium + levothyroxine",
		blurb: "Gut chelation — the morning Tums empties the TSH",
		drugIds: ["calcium", "levothyroxine"],
		lane: "food"
	},
	{
		id: "iron-cipro",
		title: "Iron + ciprofloxacin",
		blurb: "Divalent cation — the course can fail",
		drugIds: ["iron", "ciprofloxacin"],
		lane: "food"
	},
	{
		id: "yohimbine-maoi",
		title: "Yohimbine + phenelzine",
		blurb: "α2 block plus irreversible MAOI — pressor crisis",
		drugIds: ["yohimbine", "phenelzine"],
		lane: "food"
	},
	{
		id: "niacin-simva",
		title: "Niacin + simvastatin",
		blurb: "Gram-dose B3 on a 3A4 statin — muscle",
		drugIds: ["niacin", "simvastatin"],
		lane: "food"
	},
	{
		id: "arginine-viagra",
		title: "L-arginine + sildenafil",
		blurb: "Pre-workout NO plus PDE5 — stacked hypotension",
		drugIds: ["arginine", "sildenafil"],
		lane: "food"
	},
	{
		id: "quercetin-simva",
		title: "Quercetin + simvastatin",
		blurb: "Flavonol 3A4/P-gp block on a sensitive statin",
		drugIds: ["quercetin", "simvastatin"],
		lane: "food"
	},
	{
		id: "potassium-lisinopril",
		title: "Potassium + lisinopril",
		blurb: "Salt-substitute K plus an ACEI — hyperkalemia",
		drugIds: ["potassium", "lisinopril"],
		lane: "food"
	},
	{
		id: "senna-sotalol",
		title: "Senna + sotalol",
		blurb: "Stimulant laxative hypokalemia plus a known QT drug",
		drugIds: ["senna", "sotalol"],
		lane: "food"
	},
	{
		id: "berberine-simva",
		title: "Berberine + simvastatin",
		blurb: "The glucose capsule is a 3A4/P-gp bully — not goldenseal tea",
		drugIds: ["berberine", "simvastatin"],
		lane: "food"
	},
	{
		id: "berberine-glipizide",
		title: "Berberine + glipizide",
		blurb: "Metformin-like herb plus a sulfonylurea — stacked hypoglycemia",
		drugIds: ["berberine", "glipizide"],
		lane: "food"
	},
	{
		id: "echinacea-tizanidine",
		title: "Echinacea + tizanidine",
		blurb: "Cold-and-flu 1A2 block on a sensitive muscle relaxant",
		drugIds: ["echinacea", "tizanidine"],
		lane: "food"
	},
	{
		id: "bitter-orange-maoi",
		title: "Bitter orange + phenelzine",
		blurb: "Synephrine fat-burner plus irreversible MAOI — pressor",
		drugIds: ["bitter-orange", "phenelzine"],
		lane: "food"
	},
	{
		id: "charcoal-synthroid",
		title: "Activated charcoal + levothyroxine",
		blurb: "The binder — the dose never arrives",
		drugIds: ["charcoal", "levothyroxine"],
		lane: "food"
	},
	{
		id: "ala-glipizide",
		title: "Alpha-lipoic acid + glipizide",
		blurb: "Neuropathy bottle plus a sulfonylurea — hypoglycemia",
		drugIds: ["ala", "glipizide"],
		lane: "food"
	},
	{
		id: "resveratrol-simva",
		title: "Resveratrol + simvastatin",
		blurb: "Gram stilbene 3A4 block on a sensitive statin",
		drugIds: ["resveratrol", "simvastatin"],
		lane: "food"
	},
	{
		id: "nattokinase-warfarin",
		title: "Nattokinase + warfarin",
		blurb: "The 'clot buster' bottle next to a vitamin-K antagonist",
		drugIds: ["nattokinase", "warfarin"],
		lane: "food"
	},
	{
		id: "psyllium-synthroid",
		title: "Psyllium + levothyroxine",
		blurb: "Metamucil with the morning dose — empty TSH",
		drugIds: ["psyllium", "levothyroxine"],
		lane: "food"
	},
	{
		id: "citrulline-viagra",
		title: "L-citrulline + sildenafil",
		blurb: "Pre-workout NO plus PDE5 — stacked hypotension",
		drugIds: ["citrulline", "sildenafil"],
		lane: "food"
	},
	{
		id: "chromium-glipizide",
		title: "Chromium + glipizide",
		blurb: "Blood-sugar bottle plus a sulfonylurea — hypoglycemia",
		drugIds: ["chromium", "glipizide"],
		lane: "food"
	},
	{
		id: "icariin-nitro",
		title: "Horny goat weed + nitroglycerin",
		blurb: "Herbal PDE5 next to a nitrate — not labeled like Viagra",
		drugIds: ["icariin", "nitroglycerin"],
		lane: "food"
	},
	{
		id: "dairy-tetracycline",
		title: "Milk + tetracycline",
		blurb: "The original dairy trap — worse than doxycycline",
		drugIds: ["dairy", "tetracycline"],
		lane: "food"
	},
	{
		id: "oj-atenolol",
		title: "Orange juice + atenolol",
		blurb: "OATP2B1 — Tenormin AUC falls",
		drugIds: ["oatp-juice", "atenolol"],
		lane: "food"
	},
	{
		id: "egcg-nadolol",
		title: "Green tea + nadolol",
		blurb: "Misaka — catechins dump Corgard via OATP",
		drugIds: ["green-tea", "nadolol"],
		lane: "food"
	},
	{
		id: "soy-synthroid",
		title: "Soy milk + levothyroxine",
		blurb: "Formula and protein shakes bind T4",
		drugIds: ["soy", "levothyroxine"],
		lane: "food"
	},
	{
		id: "banana-lisinopril",
		title: "Salt substitute + lisinopril",
		blurb: "Dietary potassium plus an ACEI — hyperK without Slow-K",
		drugIds: ["high-k-foods", "lisinopril"],
		lane: "food"
	},
	{
		id: "tuna-inh",
		title: "Tuna + isoniazid",
		blurb: "Diamine oxidase — scombroid on a TB pill",
		drugIds: ["histamine-fish", "isoniazid"],
		lane: "food"
	},
	{
		id: "ng-dilantin",
		title: "Tube feed + phenytoin",
		blurb: "Bauer 1982 — continuous feeds bind Dilantin",
		drugIds: ["enteral-feed", "phenytoin"],
		lane: "food"
	},
	{
		id: "fat-lurasidone",
		title: "High-fat meal + lurasidone",
		blurb: "Latuda is labeled with ~350 kcal — F collapses fasted",
		drugIds: ["high-fat-meal", "lurasidone"],
		lane: "food"
	},
	{
		id: "fat-geodon",
		title: "High-fat meal + ziprasidone",
		blurb: "Geodon wants ~500 kcal or AUC falls by half",
		drugIds: ["high-fat-meal", "ziprasidone"],
		lane: "food"
	},
	{
		id: "meal-fosamax",
		title: "A meal + alendronate",
		blurb: "Anything in the stomach kills Fosamax F",
		drugIds: ["high-fat-meal", "alendronate"],
		lane: "food"
	},
	{
		id: "oj-aliskiren",
		title: "Apple juice + aliskiren",
		blurb: "OATP2B1 — Tekturna never arrives",
		drugIds: ["oatp-juice", "aliskiren"],
		lane: "food"
	},
	{
		id: "caffeine-lithium",
		title: "Caffeine + lithium",
		blurb: "Caffeine dumps lithium; stopping it retains it",
		drugIds: ["caffeine", "lithium"],
		lane: "food"
	},
	{
		id: "pheno-codeine",
		title: "Paroxetine + codeine",
		blurb: "2D6 phenoconversion — NM on paper, PM on the enzyme",
		drugIds: ["paroxetine", "codeine"],
		lane: "phenotype"
	},
	{
		id: "pheno-dxm",
		title: "Bupropion + DXM",
		blurb: "Wellbutrin locks 2D6; dextromethorphan accumulates",
		drugIds: ["bupropion", "dextromethorphan"],
		lane: "phenotype"
	},
	{
		id: "mme-stack",
		title: "Methadone + oxycodone",
		blurb: "MME is not two prescriptions. One airway, banded methadone factor",
		drugIds: ["methadone", "oxycodone"],
		lane: "mat"
	},
	{
		id: "hunter-mdma",
		title: "MDMA + sertraline",
		blurb: "Hunter screen — clonus, not a Sternbach plus-table",
		drugIds: ["mdma", "sertraline"],
		lane: "entactogen"
	},
	{
		id: "reversal-apap",
		title: "Acetaminophen + NAC",
		blurb: "The antidote on the desk. Rumack is the nomogram",
		drugIds: ["acetaminophen", "nac"],
		lane: "clinic"
	},
	{
		id: "uds-methadone",
		title: "Methadone cup",
		blurb: "Opiate EIA stays negative on a take-home. That's the assay. Ask EDDP.",
		drugIds: ["methadone"],
		lane: "mat"
	},
	{
		id: "uds-seroquel",
		title: "Seroquel vs the TCA cup",
		blurb: "Window sleep med lights TCA. Methadone does not light opiates.",
		drugIds: ["methadone", "quetiapine"],
		lane: "mat"
	},
	{
		id: "uds-wellbutrin",
		title: "Wellbutrin vs the amphetamine cup",
		blurb: "Bupropion is the classic amphetamine EIA false-positive",
		drugIds: ["bupropion"],
		lane: "clinic"
	},
	{
		id: "uds-zoloft",
		title: "Zoloft vs the benzo cup",
		blurb: "Sertraline can light a benzodiazepine immunoassay",
		drugIds: ["sertraline"],
		lane: "clinic"
	},
	{
		id: "uds-dxm",
		title: "DXM vs the PCP cup",
		blurb: "Dextromethorphan fools many PCP EIAs. 2D6 is the other board.",
		drugIds: ["dextromethorphan"],
		lane: "clinic"
	},
	{
		id: "cows-lofexidine",
		title: "Lofexidine on the COWS",
		blurb: "α2 for withdrawal. Naloxone will not reverse it.",
		drugIds: ["lofexidine", "buprenorphine"],
		lane: "mat"
	},
	{
		id: "nalmefene-fent",
		title: "Opvee after a fold",
		blurb: "Nalmefene occupies μ longer than naloxone — re-narcotize vs over-reverse",
		drugIds: ["nalmefene", "fentanyl"],
		lane: "mat"
	},
	{
		id: "lact-methadone",
		title: "Methadone + breastfeeding",
		blurb: "LactMed compatible. RID ~1–3%. Do not stop OTP to feed.",
		drugIds: ["methadone"],
		lane: "mat"
	},
	{
		id: "otp-induction",
		title: "Buprenorphine after fentanyl",
		blurb: "OTP tab — occupancy vs COWS. The integer is not the receptor.",
		drugIds: ["buprenorphine", "fentanyl"],
		lane: "mat"
	},
	{
		id: "vivitrol-methadone",
		title: "Vivitrol after methadone",
		blurb: "Washout clock. Labels discuss ~10–14 days after a long agonist.",
		drugIds: ["naltrexone", "methadone"],
		lane: "mat"
	},
	{
		id: "clozapine-anc",
		title: "Clozapine ANC",
		blurb: "REMS green / yellow / interrupt. Smoke is the other board.",
		drugIds: ["clozapine"],
		lane: "clinic"
	},
	{
		id: "warfarin-amio",
		title: "Warfarin + amiodarone",
		blurb: "INR tab — 2C9 block over weeks, not overnight.",
		drugIds: ["warfarin", "amiodarone"],
		lane: "clinic"
	}
];
var PLATES = {
	hero: "/plates/hero.jpg",
	heme: "/plates/heme.jpg",
	cyp2d6: "/plates/cyp2d6.jpg",
	cyp3a4: "/plates/cyp3a4.jpg",
	cyp2b6: "/plates/cyp2b6.jpg",
	ketamine: "/plates/ketamine.jpg",
	grapefruit: "/plates/grapefruit.jpg",
	wort: "/plates/wort.jpg",
	mdma: "/plates/mdma.jpg",
	liver: "/plates/liver.jpg",
	tobacco: "/plates/tobacco.jpg",
	cheese: "/plates/cheese.jpg",
	poppy: "/plates/poppy.jpg",
	mushroom: "/plates/mushroom.jpg",
	alcohol: "/plates/alcohol.jpg"
};
var ENZYME_PLATE = {
	CYP1A2: PLATES.tobacco,
	CYP2B6: PLATES.cyp2b6,
	CYP2C8: PLATES.heme,
	CYP2C9: PLATES.heme,
	CYP2C19: PLATES.cyp2d6,
	CYP2D6: PLATES.cyp2d6,
	CYP2E1: PLATES.liver,
	CYP3A4: PLATES.cyp3a4,
	"P-gp": PLATES.heme
};
var LANE_PLATE = {
	all: PLATES.hero,
	nmda: PLATES.ketamine,
	entactogen: PLATES.mdma,
	gaba: PLATES.alcohol,
	phenotype: PLATES.heme,
	smoke: PLATES.tobacco,
	mat: PLATES.poppy,
	food: PLATES.grapefruit,
	street: PLATES.poppy,
	clinic: PLATES.heme
};
var DRUG_PLATE = {
	ketamine: PLATES.ketamine,
	esketamine: PLATES.ketamine,
	"two-fdck": PLATES.ketamine,
	dck: PLATES.ketamine,
	"three-meo-pcp": PLATES.ketamine,
	mxe: PLATES.ketamine,
	dextromethorphan: PLATES.ketamine,
	pcp: PLATES.ketamine,
	grapefruit: PLATES.grapefruit,
	"st-johns-wort": PLATES.wort,
	goldenseal: PLATES.wort,
	valerian: PLATES.wort,
	kava: PLATES.wort,
	piperine: PLATES.wort,
	licorice: PLATES.wort,
	ginkgo: PLATES.wort,
	ginseng: PLATES.wort,
	"milk-thistle": PLATES.wort,
	pomegranate: PLATES.grapefruit,
	starfruit: PLATES.grapefruit,
	"oatp-juice": PLATES.grapefruit,
	dairy: PLATES.cheese,
	"leafy-greens": PLATES.grapefruit,
	"tyramine-foods": PLATES.cheese,
	"histamine-fish": PLATES.cheese,
	"protein-meal": PLATES.cheese,
	"high-k-foods": PLATES.grapefruit,
	soy: PLATES.wort,
	coffee: PLATES.tobacco,
	"enteral-feed": PLATES.liver,
	felodipine: PLATES.cyp3a4,
	nadolol: PLATES.grapefruit,
	aliskiren: PLATES.grapefruit,
	levodopa: PLATES.wort,
	alendronate: PLATES.cheese,
	tetracycline: PLATES.cheese,
	cruciferous: PLATES.tobacco,
	mdma: PLATES.mdma,
	mda: PLATES.mdma,
	methylone: PLATES.mdma,
	mephedrone: PLATES.mdma,
	"three-mmc": PLATES.mdma,
	"a-pvp": PLATES.mdma,
	ethanol: PLATES.alcohol,
	gbl: PLATES.alcohol,
	"bd-14": PLATES.alcohol,
	bromazolam: PLATES.alcohol,
	etizolam: PLATES.alcohol,
	flualprazolam: PLATES.alcohol,
	clonazolam: PLATES.alcohol,
	flubromazolam: PLATES.alcohol,
	phenobarbital: PLATES.alcohol,
	carisoprodol: PLATES.alcohol,
	nicotine: PLATES.tobacco,
	clozapine: PLATES.tobacco,
	"charred-meat": PLATES.tobacco,
	caffeine: PLATES.tobacco,
	acetaminophen: PLATES.liver,
	psilocybin: PLATES.mushroom,
	lsd: PLATES.mushroom,
	dmt: PLATES.mushroom,
	mescaline: PLATES.mushroom,
	"five-meo-dmt": PLATES.mushroom,
	"four-aco-dmt": PLATES.mushroom,
	twocb: PLATES.mushroom,
	"twentyfive-i": PLATES.mushroom,
	salvinorin: PLATES.mushroom,
	codeine: PLATES.poppy,
	morphine: PLATES.poppy,
	oxycodone: PLATES.poppy,
	hydrocodone: PLATES.poppy,
	fentanyl: PLATES.poppy,
	carfentanil: PLATES.poppy,
	methadone: PLATES.poppy,
	buprenorphine: PLATES.poppy,
	naltrexone: PLATES.poppy,
	naloxone: PLATES.poppy,
	kratom: PLATES.poppy,
	tianeptine: PLATES.poppy,
	loperamide: PLATES.poppy,
	xylazine: PLATES.poppy,
	medetomidine: PLATES.poppy,
	isotonitazene: PLATES.poppy,
	protonitazene: PLATES.poppy,
	metonitazene: PLATES.poppy,
	meperidine: PLATES.poppy,
	tapentadol: PLATES.poppy,
	hydromorphone: PLATES.poppy,
	clonidine: PLATES.poppy,
	lofexidine: PLATES.poppy,
	dexmedetomidine: PLATES.poppy,
	guanfacine: PLATES.poppy,
	nalbuphine: PLATES.poppy,
	oxymorphone: PLATES.poppy,
	"seven-oh": PLATES.poppy,
	etonitazene: PLATES.poppy,
	heroin: PLATES.poppy,
	"dirty-30": PLATES.poppy,
	cocaine: PLATES.mdma,
	methamphetamine: PLATES.mdma,
	ritonavir: PLATES.liver,
	paxlovid: PLATES.liver,
	nevirapine: PLATES.liver,
	cobicistat: PLATES.liver,
	epclusa: PLATES.liver,
	propofol: PLATES.alcohol,
	diclazepam: PLATES.alcohol,
	primidone: PLATES.alcohol,
	dronabinol: PLATES.wort,
	cannabidiol: PLATES.wort,
	ibogaine: PLATES.mushroom,
	azathioprine: PLATES.liver,
	mercaptopurine: PLATES.liver,
	febuxostat: PLATES.liver,
	terbinafine: PLATES.liver,
	sirolimus: PLATES.liver,
	mycophenolate: PLATES.liver,
	budesonide: PLATES.liver,
	fluticasone: PLATES.liver,
	allopurinol: PLATES.liver
};
function plateForDrug(drug) {
	if (DRUG_PLATE[drug.id]) return DRUG_PLATE[drug.id];
	if (drug.kind === "food") return PLATES.grapefruit;
	if (drug.kind === "herb") return PLATES.wort;
	if (drug.pd.includes("dissociative")) return PLATES.ketamine;
	if (drug.pd.includes("psychedelic")) return PLATES.mushroom;
	if (drug.pd.includes("opioid") || drug.pd.includes("opioid-antagonist")) return PLATES.poppy;
	if (drug.pd.includes("alcohol") || drug.pd.includes("ghb") || drug.pd.includes("benzo-zdrug")) return PLATES.alcohol;
	if (drug.pd.includes("cannabinoid")) return PLATES.wort;
	if (drug.pd.includes("stimulant") || drug.pd.includes("serotonergic")) return PLATES.mdma;
	return PLATES.heme;
}
function plateForSample(s) {
	if (s.drugIds.includes("grapefruit") || s.drugIds.includes("oatp-juice")) return PLATES.grapefruit;
	if (s.drugIds.includes("tyramine-foods") || s.drugIds.includes("dairy") || s.drugIds.includes("histamine-fish")) return PLATES.cheese;
	if (s.drugIds.includes("leafy-greens") || s.drugIds.includes("high-k-foods")) return PLATES.grapefruit;
	if (s.drugIds.includes("coffee") || s.drugIds.includes("charred-meat")) return PLATES.tobacco;
	if (s.drugIds.includes("enteral-feed")) return PLATES.liver;
	if (s.drugIds.includes("st-johns-wort")) return PLATES.wort;
	if (s.drugIds.includes("psilocybin") || s.drugIds.includes("lsd") || s.drugIds.includes("twentyfive-i") || s.drugIds.includes("four-aco-dmt")) return PLATES.mushroom;
	if (s.drugIds.includes("poppers")) return PLATES.heme;
	if (s.smoking) return PLATES.tobacco;
	if (s.alcohol === "chronic" || s.drugIds.includes("ethanol") || s.drugIds.includes("gbl")) return PLATES.alcohol;
	return LANE_PLATE[s.lane];
}
var CLASS_TILES = [
	{
		id: "nmda",
		label: "NMDA",
		hint: "Ketamine, DXM, DCK",
		plate: PLATES.ketamine
	},
	{
		id: "entactogen",
		label: "Entactogen",
		hint: "MDMA, cathinones",
		plate: PLATES.mdma
	},
	{
		id: "gaba",
		label: "GABA",
		hint: "Alcohol, GHB, benzos",
		plate: PLATES.alcohol
	},
	{
		id: "mat",
		label: "Opioid / MAT",
		hint: "Suboxone, methadone, Vivitrol",
		plate: PLATES.poppy
	},
	{
		id: "clinic",
		label: "Clinic",
		hint: "Imuran, Imdur, Ozempic",
		plate: PLATES.heme
	},
	{
		id: "food",
		label: "Food / herb",
		hint: "Grapefruit, dairy, kale, juice",
		plate: PLATES.grapefruit
	},
	{
		id: "smoke",
		label: "Smoke / 1A2",
		hint: "Clozapine, PAHs",
		plate: PLATES.tobacco
	},
	{
		id: "street",
		label: "Street",
		hint: "Cocaine, dirty 30s, xylazine",
		plate: PLATES.poppy
	}
];
function activePlan(s) {
	if (s.plan === "pro" || s.plan === "lab") return s.plan;
	if (s.previewUntil && Date.now() < s.previewUntil) return "pro";
	return "free";
}
var useDesk = create()(persist((set, get) => ({
	selected: [],
	view: "desk",
	atlasEnzyme: null,
	phenotypes: { ...DEFAULT_PHENOTYPES },
	smoking: false,
	ketamineRoute: "iv",
	cannabisRoute: "smoked",
	alcohol: "off",
	age: "adult",
	kidney: "ok",
	preg: "off",
	plan: "free",
	license: null,
	lifetime: false,
	previewUntil: null,
	justActivated: false,
	hcpAck: false,
	checkout: {
		open: false,
		plan: "pro",
		interval: "life",
		reason: ""
	},
	add: (id) => {
		if (!DRUG_BY_ID[id] || id.startsWith("__")) return false;
		const cur = get().selected;
		if (cur.includes(id)) return true;
		const cap = maxDrugs(activePlan(get()));
		if (cur.length >= cap) {
			set({ checkout: {
				open: true,
				plan: "pro",
				interval: get().checkout.interval,
				reason: `Free desks hold ${cap} drugs. Pro opens eight.`
			} });
			return false;
		}
		set({
			selected: [...cur, id],
			view: "desk"
		});
		return true;
	},
	remove: (id) => set({ selected: get().selected.filter((x) => x !== id) }),
	clear: () => set({
		selected: [],
		phenotypes: { ...DEFAULT_PHENOTYPES },
		smoking: false,
		ketamineRoute: "iv",
		cannabisRoute: "smoked",
		alcohol: "off",
		age: "adult",
		kidney: "ok",
		preg: "off"
	}),
	load: (ids, extras) => {
		const cap = maxDrugs(activePlan(get()));
		const next = ids.filter((id) => DRUG_BY_ID[id] && !id.startsWith("__")).slice(0, cap);
		if (Boolean(extras?.phenotypes || extras?.smoking || extras?.alcohol || extras?.cannabisRoute || extras?.ketamineRoute && extras.ketamineRoute !== "iv") && activePlan(get()) === "free") {
			set({
				checkout: {
					open: true,
					plan: "pro",
					interval: get().checkout.interval,
					reason: "That sample uses host factors — phenotype, route, smoke, or alcohol pattern."
				},
				selected: next,
				view: "desk",
				phenotypes: { ...DEFAULT_PHENOTYPES },
				smoking: false,
				ketamineRoute: "iv",
				cannabisRoute: "smoked",
				alcohol: "off",
				age: "adult",
				kidney: "ok",
				preg: "off"
			});
			return false;
		}
		set({
			selected: next,
			view: "desk",
			phenotypes: {
				...DEFAULT_PHENOTYPES,
				...extras?.phenotypes
			},
			smoking: extras?.smoking ?? false,
			ketamineRoute: extras?.ketamineRoute ?? "iv",
			cannabisRoute: extras?.cannabisRoute ?? "smoked",
			alcohol: extras?.alcohol ?? "off",
			age: "adult",
			kidney: "ok",
			preg: "off"
		});
		return true;
	},
	setView: (view) => {
		if (view === "atlas" && activePlan(get()) === "free") {
			set({
				view: "plans",
				checkout: {
					open: true,
					plan: "pro",
					interval: get().checkout.interval,
					reason: "The enzyme atlas is a Pro surface."
				}
			});
			return;
		}
		set({ view });
	},
	setAtlasEnzyme: (atlasEnzyme) => {
		if (activePlan(get()) === "free") {
			get().setView("atlas");
			return;
		}
		set({
			atlasEnzyme,
			view: "atlas"
		});
	},
	setPhenotype: (enzyme, value) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Metabolizer status is a Pro host factor.");
			return;
		}
		set({ phenotypes: {
			...get().phenotypes,
			[enzyme]: value
		} });
	},
	setSmoking: (smoking) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Smoke induction is a Pro host factor.");
			return;
		}
		set({ smoking });
	},
	setKetamineRoute: (ketamineRoute) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Ketamine route (IV vs oral first-pass) is Pro.");
			return;
		}
		set({ ketamineRoute });
	},
	setCannabisRoute: (cannabisRoute) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Edible vs smoked THC is Pro.");
			return;
		}
		set({ cannabisRoute });
	},
	setAlcohol: (alcohol) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Alcohol pattern (acute vs chronic 2E1) is Pro.");
			return;
		}
		set({ alcohol });
	},
	setAge: (age) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Geriatric / Beers host flag is Pro.");
			return;
		}
		set({ age });
	},
	setKidney: (kidney) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "CKD host flag is Pro.");
			return;
		}
		set({ kidney });
	},
	setPreg: (preg) => {
		if (activePlan(get()) === "free") {
			get().openCheckout("pro", "Pregnancy / lactation host flag is Pro.");
			return;
		}
		set({ preg });
	},
	resetPhenotypes: () => set({
		phenotypes: { ...DEFAULT_PHENOTYPES },
		smoking: false,
		ketamineRoute: "iv",
		cannabisRoute: "smoked",
		alcohol: "off",
		age: "adult",
		kidney: "ok",
		preg: "off"
	}),
	openCheckout: (plan, reason = "") => set({
		view: "plans",
		checkout: {
			open: true,
			plan: plan === "free" ? "pro" : plan,
			interval: get().checkout.interval,
			reason
		}
	}),
	closeCheckout: () => set({ checkout: {
		...get().checkout,
		open: false
	} }),
	setCheckoutInterval: (interval) => set({ checkout: {
		...get().checkout,
		interval
	} }),
	startPreview: () => set({
		previewUntil: Date.now() + 6048e5,
		checkout: {
			...get().checkout,
			open: false
		},
		view: "desk",
		justActivated: false
	}),
	activateLicense: ({ plan, license, lifetime }) => set({
		plan: plan === "lab" ? "lab" : "pro",
		license,
		lifetime,
		previewUntil: null,
		justActivated: true,
		checkout: {
			...get().checkout,
			open: false
		},
		view: "desk"
	}),
	dismissActivated: () => set({ justActivated: false }),
	ackHcp: () => set({ hcpAck: true }),
	downgrade: () => set({
		plan: "free",
		license: null,
		lifetime: false,
		previewUntil: null,
		justActivated: false,
		selected: get().selected.slice(0, 2)
	})
}), {
	name: "firstpass.desk.v7",
	skipHydration: true,
	merge: (persisted, current) => {
		const p = persisted ?? {};
		return {
			...current,
			...p,
			phenotypes: {
				...DEFAULT_PHENOTYPES,
				...p.phenotypes
			},
			age: p.age === "geriatric" ? "geriatric" : "adult",
			kidney: p.kidney === "ckd" ? "ckd" : "ok",
			preg: p.preg === "pregnant" || p.preg === "lactating" ? p.preg : "off",
			justActivated: false,
			hcpAck: Boolean(p.hcpAck)
		};
	},
	partialize: (s) => ({
		selected: s.selected,
		phenotypes: s.phenotypes,
		smoking: s.smoking,
		ketamineRoute: s.ketamineRoute,
		cannabisRoute: s.cannabisRoute,
		alcohol: s.alcohol,
		age: s.age,
		kidney: s.kidney,
		preg: s.preg,
		plan: s.plan,
		license: s.license,
		lifetime: s.lifetime,
		previewUntil: s.previewUntil,
		hcpAck: s.hcpAck
	})
}));
function usePlan() {
	const plan = useDesk((s) => s.plan);
	const previewUntil = useDesk((s) => s.previewUntil);
	if (plan === "pro" || plan === "lab") return plan;
	if (previewUntil && Date.now() < previewUntil) return "pro";
	return "free";
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:bg-surface-2",
			ghost: "bg-transparent text-fg hover:bg-bg-sunken",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			danger: "bg-danger text-accent-fg hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-sm",
			icon: "size-11 rounded-md",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { tone: {
		default: "bg-bg-sunken text-muted",
		accent: "bg-accent-soft text-accent",
		danger: "bg-danger-soft text-danger",
		warn: "bg-warn-soft text-warn",
		ok: "bg-ok-soft text-ok",
		info: "bg-info-soft text-info"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
/** Labeling for FirstPass as non-device clinical decision support.
*  Not FDA-cleared. Not FDA-approved. The Prescribing Information governs. */
var SOFTWARE = {
	name: "FirstPass",
	version: "1.1.0",
	released: "2026-09-19",
	manufacturer: "Kaleb Lovingier",
	email: "kaleblovingier@gmail.com",
	phone: "360-707-8923",
	udi: "FP-SW-1.1.0"
};
/** 21 CFR / FDA CDS Guidance (Sept 28, 2022) posture — not a clearance. */
var INTENDED_USE = "FirstPass is clinical decision support software intended for use by licensed healthcare professionals to display mapped cytochrome P450 and pharmacodynamic interaction information, FDA-label excerpts (OpenFDA / DailyMed), published scale scores, and cited literature so the healthcare professional can independently review the basis of any recommendation before acting. It is not intended to diagnose, treat, mitigate, or prevent disease, to calculate or recommend a dose, or to replace the FDA-approved Prescribing Information.";
var INDICATIONS = [
	"Displaying CYP450 substrate / inhibitor / inducer maps and pharmacodynamic collision scores for drugs and foods on a user-selected regimen.",
	"Surfacing excerpts of FDA-approved labeling (boxed warnings, contraindications, drug interactions, pregnancy) retrieved from OpenFDA and DailyMed.",
	"Displaying published clinical scales (COWS, CIWA-Ar, Hunter criteria, CDC 2022 oral MME factors, Bazett / Fridericia, Cockcroft–Gault) with the published source named.",
	"Linking CPIC / ClinPGx tables, PubMed PMIDs, DrugBank accessions, NIH RxClass, LactMed paraphrases, and ClinicalTrials.gov records for independent review."
];
var NOT_FOR = [
	"Patients acting without a licensed healthcare professional.",
	"Generating a prescription, a milligram, a take-home, or an induction protocol.",
	"Charting, billing, PDMP query, or storing protected health information.",
	"Processing medical images, waveforms, or device signals.",
	"Replacing the FDA-approved Prescribing Information, a poison-control consult, or bedside assessment."
];
var WARNINGS = [
	"FirstPass is not FDA-cleared and not FDA-approved. Do not describe it as either.",
	"The FDA-approved Prescribing Information is the authority. If this desk and the label disagree, the label wins.",
	"Absence of a mapped collision is not proof of safety. Transporters, UGT, plasma protein, unlisted metabolites, and unpublished interactions still apply.",
	"Live OpenFDA / DailyMed excerpts are truncated. Open the full SPL before acting.",
	"Street-supply rows (xylazine, nitazenes, designer benzos) are teaching maps, not labeled products.",
	"COWS, CIWA-Ar, Hunter, MME, and QTc are published formulas displayed for independent scoring — not a diagnosis and not a documented vital."
];
/** FDA CDS Guidance 2022 — four criteria for non-device CDS. */
var CDS_CRITERIA = [
	{
		id: "1",
		title: "Not an image or signal device",
		how: "FirstPass does not acquire, process, or analyze medical images, IVD data, or physiologic signals. Inputs are user-selected drug names and optional host flags."
	},
	{
		id: "2",
		title: "Displays medical information",
		how: "The desk displays FDA-label excerpts, published enzyme maps, and cited literature about the selected regimen."
	},
	{
		id: "3",
		title: "Recommendations to a healthcare professional",
		how: "Watch / counsel / consider language is directed at licensed HCPs. It is not a patient-facing treatment app."
	},
	{
		id: "4",
		title: "Independent review of the basis",
		how: "Every collision names its mechanism, the drugs, the source class (FDA boxed, PI, CPIC, PMID, published scale, or desk map), and a link to DailyMed or PubMed. The HCP can reject the recommendation."
	}
];
var HAZARDS = [
	{
		id: "H1",
		hazard: "User treats a collision as a dose or a hold order.",
		control: "No milligrams. Window language is 'consider / independently review.' IFU and huddle footer repeat that the PI governs."
	},
	{
		id: "H2",
		hazard: "Desk map disagrees with the current label.",
		control: "Live OpenFDA / DailyMed excerpts sit on the desk. Label wins. Sources page is one tap."
	},
	{
		id: "H3",
		hazard: "Missing interaction is read as 'safe.'",
		control: "Empty-collision copy states absence is not proof of safety. Live label-pair scan is offered."
	},
	{
		id: "H4",
		hazard: "Patient uses the desk without an HCP.",
		control: "Intended-use statement, persistent HCP banner, and no patient-dosing UI."
	},
	{
		id: "H5",
		hazard: "Stale software after a label change.",
		control: "Software version is printed on the IFU, export, and huddle. Live label fetch is not a cache of last year."
	}
];
var PRIMARY_SOURCES = [
	{
		name: "OpenFDA drug labels",
		href: "https://open.fda.gov/apis/drug/label/"
	},
	{
		name: "DailyMed SPL",
		href: "https://dailymed.nlm.nih.gov/"
	},
	{
		name: "FDA drug shortages",
		href: "https://www.fda.gov/drugs/drug-safety-and-availability/drug-shortages"
	},
	{
		name: "FDA enforcement reports",
		href: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts"
	},
	{
		name: "NIH RxNorm / RxClass",
		href: "https://www.nlm.nih.gov/research/umls/rxnorm/"
	},
	{
		name: "CPIC",
		href: "https://cpicpgx.org/"
	},
	{
		name: "NCBI PubMed",
		href: "https://pubmed.ncbi.nlm.nih.gov/"
	},
	{
		name: "NIDDK LiverTox",
		href: "https://www.ncbi.nlm.nih.gov/books/NBK547852/"
	},
	{
		name: "NIH LactMed",
		href: "https://www.ncbi.nlm.nih.gov/books/NBK501922/"
	}
];
var NOT_CLEARED = "This software has not been cleared or approved by the U.S. Food and Drug Administration. Display of FDA-label text does not make FirstPass an FDA-cleared device.";
var PI_FOOTER = `${SOFTWARE.name} ${SOFTWARE.version} · Not FDA-cleared · Confirm against the FDA-approved Prescribing Information · Not a dose, not a treatment order, not a chart. Independent review required.`;
function dailymedSearchUrl(name) {
	return `https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=${encodeURIComponent(name)}`;
}
function dailymedSetUrl(setId) {
	return `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${encodeURIComponent(setId)}`;
}
/** OTP / street-agonist / antagonist IDs that put the desk in window mode. */
var MAT_IDS = /* @__PURE__ */ new Set([
	"methadone",
	"buprenorphine",
	"naltrexone",
	"naloxone",
	"nalmefene",
	"lofexidine",
	"acamprosate",
	"fentanyl",
	"dirty-30",
	"heroin",
	"xylazine",
	"medetomidine",
	"seven-oh",
	"carfentanil",
	"isotonitazene",
	"protonitazene",
	"metonitazene",
	"etonitazene",
	"clonidine",
	"loperamide"
]);
var STREET_FOLD = /* @__PURE__ */ new Set([
	"fentanyl",
	"dirty-30",
	"heroin",
	"carfentanil",
	"isotonitazene",
	"protonitazene",
	"metonitazene",
	"etonitazene"
]);
var BOOSTER = /* @__PURE__ */ new Set([
	"paxlovid",
	"ritonavir",
	"cobicistat"
]);
/** One-tap extras a dosing window actually hands over the glass. */
var WINDOW_EXTRAS = [
	{
		group: "Window",
		hint: "What they handed over the glass",
		items: [
			{
				id: "promethazine",
				label: "Phenergan"
			},
			{
				id: "hydroxyzine",
				label: "Vistaril"
			},
			{
				id: "ondansetron",
				label: "Zofran"
			},
			{
				id: "loperamide",
				label: "Imodium"
			}
		]
	},
	{
		group: "New start",
		hint: "The covering prescription",
		items: [
			{
				id: "paxlovid",
				label: "Paxlovid"
			},
			{
				id: "azithromycin",
				label: "Z-Pak"
			},
			{
				id: "clarithromycin",
				label: "Biaxin"
			},
			{
				id: "fluvoxamine",
				label: "Luvox"
			},
			{
				id: "phenytoin",
				label: "Dilantin"
			},
			{
				id: "carbamazepine",
				label: "Tegretol"
			},
			{
				id: "rifampin",
				label: "Rifampin"
			},
			{
				id: "ciprofloxacin",
				label: "Cipro"
			},
			{
				id: "fluconazole",
				label: "Diflucan"
			},
			{
				id: "cimetidine",
				label: "Tagamet"
			}
		]
	},
	{
		group: "Airway",
		hint: "The extras that still count",
		items: [
			{
				id: "naloxone",
				label: "Narcan"
			},
			{
				id: "clonazepam",
				label: "Klonopin"
			},
			{
				id: "gabapentin",
				label: "Neurontin"
			},
			{
				id: "pregabalin",
				label: "Lyrica"
			},
			{
				id: "cyclobenzaprine",
				label: "Flexeril"
			},
			{
				id: "quetiapine",
				label: "Seroquel"
			},
			{
				id: "ethanol",
				label: "Alcohol"
			}
		]
	},
	{
		group: "Street",
		hint: "Today's supply",
		items: [
			{
				id: "fentanyl",
				label: "Fentanyl"
			},
			{
				id: "xylazine",
				label: "Xylazine"
			},
			{
				id: "medetomidine",
				label: "Medetomidine"
			},
			{
				id: "dirty-30",
				label: "Dirty 30"
			}
		]
	},
	{
		group: "HIV / HCV",
		hint: "The infectious-disease row",
		items: [
			{
				id: "epclusa",
				label: "Epclusa"
			},
			{
				id: "efavirenz",
				label: "Sustiva"
			},
			{
				id: "nevirapine",
				label: "Viramune"
			},
			{
				id: "cobicistat",
				label: "Tybost"
			},
			{
				id: "ritonavir",
				label: "Norvir"
			}
		]
	},
	{
		group: "Cup",
		hint: "What the immunoassay actually sees",
		items: [
			{
				id: "bupropion",
				label: "Wellbutrin"
			},
			{
				id: "sertraline",
				label: "Zoloft"
			},
			{
				id: "dextromethorphan",
				label: "DXM"
			},
			{
				id: "rifampin",
				label: "Rifampin"
			}
		]
	}
];
function isMatDesk(ids, findings = []) {
	return ids.some((id) => MAT_IDS.has(id)) || findings.some((f) => f.tags.includes("mat"));
}
function named(ids) {
	return ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean).join(" + ");
}
function hasSuffix(findings, suffix) {
	return findings.some((f) => f.id.includes(suffix));
}
function victimPk(findings, victim, arrow) {
	const needle = arrow === "up" ? "↑ exposure" : "↓ exposure";
	return findings.filter((f) => f.kind === "pk" && f.drugIds[1] === victim && f.effect.includes(needle));
}
function perpNames(findings, victim, arrow) {
	const names = victimPk(findings, victim, arrow).map((f) => DRUG_BY_ID[f.drugIds[0]]?.name).filter((n) => Boolean(n));
	return [...new Set(names)];
}
function pushUnique(list, item) {
	if (item && !list.includes(item)) list.push(item);
}
function briefWindow(ids, report, host) {
	if (ids.length === 0) return null;
	const mat = isMatDesk(ids, report.findings);
	const hot = report.highest === "contraindicated" || report.highest === "major" || report.findings.some((f) => f.kind === "clinic");
	if (!mat && report.findings.length === 0) return null;
	if (!mat && !hot && report.highest === "minor") return null;
	const findings = report.findings;
	const on = (id) => ids.includes(id);
	const methadone = on("methadone");
	const bup = on("buprenorphine");
	const naltrexone = on("naltrexone");
	const street = ids.some((id) => STREET_FOLD.has(id));
	const alpha2 = ids.some((id) => {
		const d = DRUG_BY_ID[id];
		return Boolean(d?.pd.includes("alpha2-agonist"));
	});
	const precip = hasSuffix(findings, "pd-bup-precip") || hasSuffix(findings, "pd-antag-opioid");
	const mixedArrow = hasSuffix(findings, "pd-methadone-ritonavir");
	const takeHome = hasSuffix(findings, "pd-opioid-stack") && methadone && street;
	const dump = perpNames(findings, "methadone", "down");
	const bump = perpNames(findings, "methadone", "up");
	const luvox = on("fluvoxamine") && methadone;
	const prozacMap = (on("fluoxetine") || on("paroxetine") || on("sertraline")) && methadone && !luvox;
	const zpak = on("azithromycin") && methadone;
	const clarith = (on("clarithromycin") || on("erythromycin")) && methadone;
	const tybost = on("cobicistat") && methadone;
	const bupBoost = bup && [...BOOSTER].some((id) => on(id));
	const cipro = on("ciprofloxacin") && methadone;
	const quiet = findings.length === 0 || mat && report.highest === "none";
	const watch = [];
	let tell = "";
	const callBits = [];
	const tray = [];
	if (precip) {
		pushUnique(watch, "Precipitated withdrawal — yawning, gooseflesh, puking, restlessness within minutes of the film or the shot. Occupancy, not milligrams.");
		tell = "This is receptor occupancy, not a missed milligram. Do not chase precipitated withdrawal by stacking more buprenorphine or agonist in the first stretch without a protocol.";
		pushUnique(callBits, "Get medical. Score COWS. This desk is not an induction protocol.");
		pushUnique(tray, "COWS");
		pushUnique(tray, "medical");
	}
	if (mixedArrow) {
		pushUnique(watch, "Withdrawal at the window, not nod — Paxlovid / ritonavir often drops methadone (2B6/UGT) even while it raises fentanyl.");
		if (!tell) tell = "The COVID pills can steal a methadone dose for a few days. Fentanyl on the same booster is the opposite arrow — parent and airway climb.";
		pushUnique(callBits, "Call medical before a take-home bump. Withdrawal here is PK, not a missed bottle.");
		pushUnique(tray, "withdrawal watch");
	} else if ((on("paxlovid") || on("ritonavir")) && street && !methadone) {
		pushUnique(watch, "Fentanyl parent climbs — Paxlovid is a five-day ritonavir boost. Nod, pinpoint, hard to arouse. Opposite arrow from methadone.");
		if (!tell) tell = "The COVID pills can make today's fentanyl much stronger. Methadone on the same booster often falls — this is not that map.";
		pushUnique(callBits, "If they cannot stay awake, hold and get medical. Support ventilation.");
		pushUnique(tray, "naloxone");
		pushUnique(tray, "airway");
	}
	if (tybost) {
		pushUnique(watch, "Tybost is not Norvir. Cobicistat raises methadone via 3A4 and does not induce 2B6. Nod at the window, not withdrawal.");
		if (!tell) tell = "The booster in Genvoya and Prezcobix is not Paxlovid's mixed arrow. Cobicistat has no 2B6 dump — parent climbs.";
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
		pushUnique(tray, "airway");
	}
	if (bupBoost) {
		pushUnique(watch, "Opposite of methadone. Paxlovid / ritonavir / cobicistat can raise buprenorphine via 3A4. Watch nod, not a stolen film.");
		if (!tell) tell = "Tolerant patients usually do not need a cut. Do not treat this like methadone withdrawal on the same booster. Fentanyl on that booster is the airway climb.";
		pushUnique(tray, "airway");
	}
	if (dump.length && !mixedArrow) {
		pushUnique(watch, `Stolen-dose picture — ${dump.join(", ")} can dump methadone within days. Yawning and begging for an increase with an unchanged milligram.`);
		if (!tell) tell = `The new ${dump.join(" / ")} can make a stable methadone look stolen. Withdrawal is induction, not a missed bottle.`;
		pushUnique(callBits, "Medical before changing take-homes. Confirm the inducer is still on board.");
		pushUnique(tray, "withdrawal watch");
	}
	if (luvox) {
		pushUnique(watch, "Luvox bump — nod and a longer QTc while fluvoxamine is on; withdrawal when it stops, same milligram.");
		if (!tell) tell = "Luvox is not Prozac. Fluvoxamine raises methadone; stopping it later can feel like a stolen bottle.";
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
	} else if (clarith) {
		pushUnique(watch, "Biaxin / erythromycin — 3A4 raise of methadone plus QT. Nod at the window and a longer QTc.");
		if (!tell) tell = "Biaxin is not a Z-Pak. Clarithromycin and erythromycin raise methadone via 3A4 and stack QT.";
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
		pushUnique(tray, "airway");
	} else if (zpak) {
		pushUnique(watch, "Z-Pak QT stack — azithromycin barely touches CYP3A4, unlike Biaxin. It still prolongs repolarization next to methadone.");
		if (!tell) tell = "A Z-Pak does not dump or raise methadone via 3A4. It still stacks QT. Do not treat it as a free macrolide on a known-QT opioid.";
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
	} else if (cipro) {
		pushUnique(watch, "Cipro on a known-QT opioid — 1A2/weak 3A4 can nudge parent, and the fluoroquinolone still prolongs QT. Nod plus palpitations.");
		if (!tell) tell = "Cipro is not a free UTI pill on methadone. Herrlin 2000 is the sedation-and-TdP case. Separate cations from the tablet; the CYP row is a different problem.";
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
		pushUnique(tray, "airway");
	} else if (on("grapefruit") && methadone) {
		pushUnique(watch, "Gut 3A4 knockout — grapefruit raises methadone parent. Nod at the window, not a stolen bottle.");
		if (!tell) tell = "Breakfast juice is not a free extra on a known-QT opioid. This is intestinal CYP3A4, not a new milligram.";
		pushUnique(tray, "airway");
	} else if (bump.length && !prozacMap && !tybost) {
		pushUnique(watch, `Methadone parent climbs with ${bump.join(", ")} — nod at the window, and QT if other extras are on the tray.`);
		if (!tell) tell = `${bump.join(" / ")} can make the same methadone milligram hit harder. This is not a free extra.`;
		pushUnique(tray, "airway");
	}
	if (prozacMap) {
		pushUnique(watch, "Not the Luvox map — fluoxetine / paroxetine / sertraline are 2D6, not the OTP methadone bump. Still serotonin, and fluoxetine lingers weeks after it stops.");
		if (!tell) tell = "Prozac, Paxil, and Zoloft are not Luvox on this desk. Do not treat every SSRI as a methadone raise.";
	}
	if (takeHome) {
		pushUnique(watch, "Stacked μ on a take-home — nod, pinpoint, hard to arouse. One airway, not two prescriptions.");
		if (!tell) tell = "The bottle plus today's fold is one opioid load. Naloxone reverses the μ-agonist; it does not reverse xylazine or medetomidine.";
		pushUnique(callBits, "If they cannot stay awake through dosing, hold and get medical. Support ventilation.");
		pushUnique(tray, "naloxone");
		pushUnique(tray, "airway");
	} else if (hasSuffix(findings, "pd-opioid-stack")) {
		pushUnique(watch, "Two μ-agonists, one airway. Naloxone still reverses the opioid.");
		if (!tell) tell = "Stacked agonists are one respiratory load, not two prescriptions.";
		pushUnique(tray, "naloxone");
		pushUnique(tray, "airway");
	}
	if (hasSuffix(findings, "pd-alpha2-opioid") || alpha2 && (methadone || street || bup)) {
		pushUnique(watch, "α2 sedation that naloxone will not finish — xylazine, medetomidine, Lucemyra, clonidine. They stay down after the opioid reverses.");
		if (!tell) tell = "Naloxone reverses the opioid, not the α2. Do not stack extra naloxone expecting a wake-up. Support ventilation.";
		pushUnique(callBits, "Support ventilation. Extra naloxone will not reverse tranq.");
		pushUnique(tray, "ventilation");
		pushUnique(tray, "naloxone (μ only)");
	}
	if (hasSuffix(findings, "pd-speedball")) {
		pushUnique(watch, "Looking awake is not breathing — the stimulant masks apnea until it wears off.");
		if (!tell) tell = "A methadone take-home plus cocaine or meth is a speedball / goofball. QT can sit on top of the masked airway.";
		pushUnique(tray, "airway");
		pushUnique(tray, "naloxone");
	}
	if (hasSuffix(findings, "pd-qt") && methadone && !zpak && !clarith && !luvox && !cipro) {
		pushUnique(watch, "Methadone QT stack — palpitations, syncope, a longer QTc. Vistaril, Zofran, Celexa, Seroquel, and macrolides are not free extras.");
		pushUnique(callBits, "Pull an ECG if the pair cannot be separated. Check K and Mg.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
	} else if (hasSuffix(findings, "pd-qt") && !methadone) {
		pushUnique(watch, "Stacked QT — palpitations, syncope, torsades risk. Check electrolytes.");
		pushUnique(tray, "ECG");
		pushUnique(tray, "K");
		pushUnique(tray, "Mg");
	}
	if (hasSuffix(findings, "pd-opioid-benzo") || hasSuffix(findings, "pd-gaba-opioid")) {
		pushUnique(watch, "Boxed airway — opioid plus a benzo, Z-drug, or gabapentinoid. Pinpoint, hard to arouse, slow to blow off CO₂.");
		if (!tell) tell = "Klonopin, Xanax, gabapentin, and Lyrica are not free extras on methadone or Suboxone. Same boxed warning at any age.";
		pushUnique(callBits, "If they cannot stay awake through dosing, hold and get medical.");
		pushUnique(tray, "airway");
		pushUnique(tray, "naloxone");
	} else if (hasSuffix(findings, "pd-cns") && (methadone || bup || street)) {
		pushUnique(watch, "Additive sedation next to the opioid — window antiemetics, Flexeril, trazodone, alcohol.");
		if (!tell) tell = on("ethanol") ? "A drink on a take-home is boxed airway, not a CYP row." : "Phenergan, Flexeril, and a drink are not free next to a long μ-agonist.";
		pushUnique(tray, "airway");
	}
	if (hasSuffix(findings, "pd-nitrate-pde5")) {
		pushUnique(watch, "Refractory hypotension — nitrates plus a PDE5 inhibitor. Nitro in the field makes it worse.");
		if (!tell) tell = "Do not give nitroglycerin. Wait about 24 h after sildenafil, 48 h after tadalafil. This is labeled, not CYP.";
		pushUnique(callBits, "Hold nitrates. Get medical. This desk is not a dose.");
		pushUnique(tray, "BP");
	}
	if (hasSuffix(findings, "pd-lithium")) {
		pushUnique(watch, "Lithium toxicity — tremor, confusion, GI, ataxia. NSAIDs, ACEI/ARB, and thiazides raise the level.");
		if (!tell) tell = "Prefer acetaminophen for pain on lithium. Recheck the level if an NSAID already landed.";
		pushUnique(tray, "Li");
		pushUnique(tray, "Cr");
	}
	if (hasSuffix(findings, "pd-bleed") || hasSuffix(findings, "pd-nsaid")) {
		pushUnique(watch, "Bleed — GI, bruise, black stool. SSRIs add platelet-serotonin depletion.");
		pushUnique(tray, "CBC");
		pushUnique(tray, "INR if warfarin");
	}
	if (hasSuffix(findings, "clinic-preg") || host.preg === "pregnant") {
		const avoid = findings.filter((f) => f.id.includes("preg-avoid"));
		if (avoid.length) {
			pushUnique(watch, `Pregnancy avoid — ${avoid.map((f) => DRUG_BY_ID[f.drugIds[0]]?.name ?? f.drugIds[0]).join(", ")}. Open the label.`);
			if (methadone && !tell) tell = "OTP continues methadone in pregnancy. Neonatal opioid withdrawal is expected, not a reason to stop. Other avoid drugs on this desk are a different row.";
		} else if (methadone) pushUnique(watch, "OTP pregnancy — continue methadone; clearance often rises in the third trimester so the same milligram can look stolen. Neonatal withdrawal is expected, not a reason to stop.");
		else if (bup) pushUnique(watch, "Office-based and OTP both use buprenorphine in pregnancy. Precipitated withdrawal is occupancy, not a failed film.");
	}
	if (hasSuffix(findings, "pd-sero") || hasSuffix(findings, "pd-maoi-sero")) pushUnique(watch, "Serotonin — agitation, clonus, hyperreflexia, fever, diarrhea. Methadone and fentanyl are serotonergic too.");
	if (quiet && mat) {
		pushUnique(watch, ids.length === 1 ? "Monograph on the desk. Tap today's extra on the window tray — a fold, Phenergan, a Z-Pak, Paxlovid, Luvox, or a benzo — to score the window." : "No mapped CYP collision, phenotype hit, or PD synergy on this pair. Absence is not proof of safety.");
		if (!tell) tell = on("epclusa") && methadone ? "Epclusa next to methadone should stay quiet on this desk. Rifampin should not. Do not cut the methadone 'because of the new liver drug' without a map." : ids.length === 1 && methadone ? "Stable milligram is not a free tray. Window antiemetics, macrolides, and today's supply still collide." : ids.length === 1 && bup ? "A Suboxone film is occupancy. A full agonist on top is precipitated withdrawal or a blocked high — add the second drug." : ids.length === 1 && naltrexone ? "Vivitrol occupies μ for weeks. A leftover fold is precipitated withdrawal, not a failed shot." : "Quiet on this map is not a free pass. Transporters, UGT, and unlisted pathways still apply.";
	}
	if (!watch.length) {
		const top = findings[0];
		if (top) pushUnique(watch, `${top.headline} — ${top.effect}.`);
		else pushUnique(watch, "No mapped collision on this pair.");
	}
	if (!tell) {
		const top = findings[0];
		tell = top ? top.clinical.split(/(?<=\.)\s/)[0] ?? top.clinical : "Put the pair on the desk, then read the collisions. This is teaching, not a dose.";
	}
	if (!callBits.length) {
		if (mat) callBits.push("If they cannot stay awake through dosing, or they look newly sick on a stable milligram, hold and get medical. This desk is not a protocol.");
		else callBits.push("If the pair cannot be separated, open the label and get medical. This desk is not a dose.");
	}
	if (methadone || bup || street) {
		pushUnique(tray, "naloxone");
		pushUnique(tray, "airway");
		pushUnique(tray, "UDS");
		pushUnique(tray, "ID screen");
	}
	if (methadone) pushUnique(tray, "EDDP");
	if (bup || precip) pushUnique(tray, "COWS");
	if (on("ethanol") || host.alcohol === "acute" || host.alcohol === "chronic") pushUnique(tray, "CIWA-Ar");
	for (const id of ids) for (const m of clinicFor(id)?.monitor ?? []) {
		if (m === "withdrawal" && tray.some((t) => t.includes("withdrawal"))) continue;
		pushUnique(tray, m);
	}
	const names = named(ids);
	const mode = mat ? "mat" : "clinic";
	return {
		mode,
		kicker: mode === "mat" ? "OTP window" : "Clinic huddle",
		title: mode === "mat" ? "Window briefing" : "Clinic briefing",
		highest: report.highest,
		names,
		watch,
		tell,
		call: callBits.join(" "),
		tray,
		quiet: Boolean(quiet)
	};
}
function huddleText(brief) {
	const day = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
	const lines = [
		`FirstPass ${brief.kicker.toLowerCase()} huddle`,
		`${day} · ${brief.names}`,
		`Highest: ${SEVERITY_LABEL[brief.highest]}`,
		"",
		"WATCH",
		...brief.watch.map((w) => `• ${w}`),
		"",
		`COUNSEL`,
		brief.tell,
		"",
		`CONSIDER / CALL`,
		brief.call
	];
	if (brief.tray.length) lines.push("", "TRAY", brief.tray.join(" · "));
	lines.push("", PI_FOOTER);
	return lines.join("\n");
}
function DrugSearch() {
	const selected = useDesk((s) => s.selected);
	const add = useDesk((s) => s.add);
	const plan = usePlan();
	const cap = maxDrugs(plan);
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(0);
	const rootRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const results = (0, import_react.useMemo)(() => searchDrugs(q, selected), [q, selected]);
	(0, import_react.useEffect)(() => {
		setActive(0);
	}, [q, results.length]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
				e.preventDefault();
				inputRef.current?.focus();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		function onDoc(e) {
			if (!rootRef.current?.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	const full = selected.length >= cap;
	const mat = isMatDesk(selected);
	function pick(id) {
		add(id);
		setQ("");
		setOpen(false);
		inputRef.current?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "drug-search",
				children: "Search drugs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "drug-search",
				ref: inputRef,
				value: q,
				disabled: full,
				onChange: (e) => {
					setQ(e.target.value);
					setOpen(true);
				},
				onFocus: () => setOpen(true),
				onKeyDown: (e) => {
					if (e.key === "ArrowDown") {
						e.preventDefault();
						setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
					} else if (e.key === "ArrowUp") {
						e.preventDefault();
						setActive((i) => Math.max(i - 1, 0));
					} else if (e.key === "Enter") {
						e.preventDefault();
						const hit = results[active];
						if (hit) pick(hit.id);
					} else if (e.key === "Escape") {
						setOpen(false);
						e.target.blur();
					}
				},
				placeholder: full ? "Regimen full · remove a drug to add another" : mat ? "Paxlovid, Phenergan, UDS, COWS…" : "Berberine, pubmed, beers…",
				className: "h-12 w-full rounded-lg bg-surface-2 pl-10 pr-10 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60",
				autoComplete: "off",
				spellCheck: false
			}),
			q ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Clear search",
				className: "absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm text-subtle hover:bg-bg-sunken hover:text-fg",
				onClick: () => {
					setQ("");
					inputRef.current?.focus();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-xs bg-bg-sunken px-1.5 py-0.5 font-mono text-[10px] text-subtle sm:inline",
				children: "/"
			}),
			open && results.length > 0 && !full ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "listbox",
				className: "absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-lg bg-surface-2 py-1 shadow-[var(--shadow-border)]",
				children: results.map((drug, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "option",
					"aria-selected": i === active,
					className: cn("flex w-full items-start gap-3 px-3 py-2.5 text-left", i === active ? "bg-accent-soft" : "hover:bg-bg-sunken"),
					onMouseEnter: () => setActive(i),
					onClick: () => pick(drug.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: plateForDrug(drug),
							alt: "",
							className: "mt-0.5 size-10 shrink-0 rounded-sm object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-fg",
								children: drug.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-xs text-muted",
								children: [
									drug.kind !== "drug" ? `${drug.kind} · ` : "",
									drug.cls,
									drug.brands.length ? ` · ${drug.brands.slice(0, 2).join(", ")}` : ""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 font-mono text-[10px] uppercase tracking-wide text-subtle",
							children: drug.enzymes.filter((e) => e.kind !== "substrate").slice(0, 2).map((e) => e.enzyme.replace("CYP", "")).join(" ") || drug.enzymes[0]?.enzyme.replace("CYP", "") || "PD"
						})
					]
				}) }, drug.id))
			}) : null
		]
	});
}
/** Independent-review basis for a collision — CDS criterion 4. */
var BOXED = {
	"pd-opioid-benzo": {
		detail: "FDA boxed warning (2016): opioids plus benzodiazepines or other CNS depressants — profound sedation, respiratory depression, coma, and death.",
		href: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-warns-about-serious-risks-and-death-when-combining-opioid-pain-or"
	},
	"pd-gaba-opioid": {
		detail: "FDA 2019 warning: gabapentinoids plus opioids or other CNS depressants — serious breathing difficulties.",
		href: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-about-serious-breathing-problems-seizure-and-nerve-pain-medicines-gabapentin-neurontin"
	},
	"pd-nitrate-pde5": { detail: "Sildenafil / tadalafil / vardenafil labels contraindicate organic nitrates. Refractory hypotension." },
	"pd-maoi-sero": { detail: "MAOI labels contraindicate serotonergic agents. Serotonin toxicity, hypertensive crisis." },
	"pd-antag-opioid": { detail: "Naltrexone / naloxone labels: precipitated withdrawal in opioid-dependent patients; blockade of agonists." }
};
var PI = {
	"pd-methadone-ritonavir": "Methadone and ritonavir / Paxlovid labels: mixed PK — methadone may fall (withdrawal); fentanyl and other 3A4 opioids may rise.",
	"pd-bup-ritonavir": "Buprenorphine labels: 3A4 inhibitors can raise exposure. Opposite arrow from methadone on the same booster.",
	"pd-bup-precip": "Buprenorphine labels: precipitated withdrawal if a full agonist is still occupying μ receptors.",
	"pd-opioid-stack": "Opioid labels: additive respiratory depression with another full agonist.",
	"pd-qt": "CredibleMeds-class QT plus methadone / citalopram / ondansetron labels. Not a QTc.",
	"pd-sero": "SSRI / SNRI / MAOI / opioid labels flag serotonergic combinations. Hunter is the published screen.",
	"clinic-preg-avoid": "Label: boxed or contraindicated in pregnancy. Open the PI. This desk is not obstetric advice.",
	"clinic-preg-caution": "Label: use in pregnancy is a specialist call. Open the PI.",
	"clinic-beers": "AGS Beers 2023. Not an FDA box. Confirm against the PI and the geriatric indication.",
	"clinic-renal": "Many labels dose-adjust on Cockcroft–Gault or eGFR. This desk flags CKD; it does not pick a dose."
};
function suffixOf(id) {
	const parts = id.split("__");
	return parts[parts.length - 1] ?? id;
}
function basisFor(finding) {
	const suffix = suffixOf(finding.id);
	const out = [];
	const boxed = BOXED[suffix];
	if (boxed) out.push({
		kind: "fda-boxed",
		label: "FDA boxed / safety communication",
		detail: boxed.detail,
		href: boxed.href ?? dailymedSearchUrl(DRUG_BY_ID[finding.drugIds[0]]?.name ?? "")
	});
	const pi = PI[suffix];
	if (pi) {
		const name = DRUG_BY_ID[finding.drugIds[0]]?.name;
		out.push({
			kind: suffix.startsWith("clinic-") ? "fda-warning" : "fda-pi",
			label: "Prescribing Information",
			detail: pi,
			href: name ? dailymedSearchUrl(name) : void 0
		});
	}
	const cites = citesFor(finding.drugIds).slice(0, 1);
	if (cites[0]) out.push({
		kind: "pubmed",
		label: `PMID ${cites[0].pmid}`,
		detail: `${cites[0].year} ${cites[0].journal}. ${cites[0].why}`,
		href: pubmedUrl(cites[0].pmid)
	});
	if (finding.kind === "geno" || suffix.includes("pheno")) out.push({
		kind: "cpic",
		label: "CPIC / ClinPGx",
		detail: "Phenotype rows paraphrase published CPIC tables. Open the guideline. This desk is not a PGx report.",
		href: "https://cpicpgx.org/guidelines/"
	});
	if (out.length === 0) out.push({
		kind: "desk",
		label: "FirstPass map",
		detail: "Curated CYP / PD map. Independently review the Prescribing Information and primary literature before acting. Absence of an FDA box here is not absence of risk.",
		href: finding.drugIds[0] ? dailymedSearchUrl(DRUG_BY_ID[finding.drugIds[0]]?.name ?? "") : void 0
	});
	return out;
}
function severityTone(s) {
	switch (s) {
		case "contraindicated": return "danger";
		case "major": return "danger";
		case "moderate": return "warn";
		case "minor": return "info";
		default: return "ok";
	}
}
function severitySurface(s) {
	switch (s) {
		case "contraindicated": return "bg-danger text-accent-fg";
		case "major": return "bg-danger-soft text-danger";
		case "moderate": return "bg-warn-soft text-warn";
		case "minor": return "bg-info-soft text-info";
		default: return "bg-ok-soft text-ok";
	}
}
var SEVERITY_FILTERS = [
	"all",
	"contraindicated",
	"major",
	"moderate",
	"minor"
];
var KIND_FILTERS = [
	{
		id: "all",
		label: "All kinds"
	},
	{
		id: "pk",
		label: "PK"
	},
	{
		id: "pd",
		label: "PD"
	},
	{
		id: "geno",
		label: "Phenotype"
	},
	{
		id: "clinic",
		label: "Clinic"
	},
	{
		id: "food",
		label: "Food"
	}
];
function matchesKind(f, kind) {
	if (kind === "all") return true;
	if (kind === "food") return f.tags.includes("food");
	return f.kind === kind;
}
function FindingList({ findings }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [kind, setKind] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => findings.filter((f) => (filter === "all" || f.severity === filter) && matchesKind(f, kind)), [
		findings,
		filter,
		kind
	]);
	if (findings.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Collisions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: SEVERITY_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: cn("h-9 rounded-full px-3 text-xs font-medium", filter === f ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: f === "all" ? "All" : SEVERITY_LABEL[f]
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: KIND_FILTERS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(k.id),
					className: cn("h-9 rounded-full px-3 text-xs font-medium", kind === k.id ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "bg-bg-sunken text-muted hover:text-fg"),
					children: k.label
				}, k.id))
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-surface px-4 py-6 text-sm text-muted shadow-[var(--shadow-border)]",
				children: "No findings at this severity."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: visible.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingCard, { finding: f }, f.id))
			})
		]
	});
}
function FindingCard({ finding }) {
	const [open, setOpen] = (0, import_react.useState)(finding.severity === "contraindicated" || finding.severity === "major");
	const drugs = finding.drugIds.map((id) => DRUG_BY_ID[id]).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-lg bg-surface shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex w-full items-start gap-3 px-4 py-3 text-left",
			onClick: () => setOpen((v) => !v),
			"aria-expanded": open,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mt-0.5 inline-flex min-w-24 shrink-0 items-center justify-center rounded-sm px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider", severitySurface(finding.severity)),
					children: SEVERITY_LABEL[finding.severity]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium text-fg",
						children: finding.headline
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-xs text-muted",
						children: [finding.mechanism, finding.effect ? ` · ${finding.effect}` : ""]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-1 size-4 shrink-0 text-subtle transition-transform duration-150", open && "rotate-180") })
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 border-t border-border px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: finding.clinical
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-md bg-bg-sunken px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-wide text-muted",
						children: "Independent review"
					}), basisFor(finding).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-fg",
							children: b.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm leading-relaxed text-muted",
							children: b.detail
						}),
						b.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: b.href,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-1 inline-flex h-10 items-center gap-1 font-mono text-[11px] text-accent hover:underline",
							children: ["Open source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
						}) : null
					] }, `${b.kind}-${b.label}`))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: finding.tags.includes("food") ? "warn" : finding.kind === "pk" ? "accent" : finding.kind === "geno" ? "warn" : finding.kind === "clinic" ? "danger" : "info",
							children: finding.tags.includes("food") ? "Food" : finding.kind === "pk" ? "Pharmacokinetic" : finding.kind === "geno" ? "Phenotype" : finding.kind === "clinic" ? "Clinic" : "Pharmacodynamic"
						}),
						finding.enzymes.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "default",
							children: e
						}, e)),
						finding.tags.filter((t) => !finding.enzymes.includes(t)).slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "default",
							children: t
						}, t))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: drugs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-fg",
								children: d.name
							}),
							d.brands.length ? ` (${d.brands[0]})` : "",
							" · ",
							d.cls,
							d.note ? ` — ${d.note}` : ""
						]
					}, d.id))
				})
			]
		}) : null]
	});
}
function cellRoles(drug, enzyme) {
	const roles = drug.enzymes.filter((e) => e.enzyme === enzyme);
	return {
		sub: roles.find((r) => r.kind === "substrate"),
		inh: roles.find((r) => r.kind === "inhibitor"),
		ind: roles.find((r) => r.kind === "inducer")
	};
}
function Occupancy({ sub, inh, ind, hit }) {
	const occupied = sub || inh || ind;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "mx-auto size-8",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "30",
				height: "30",
				rx: "7",
				className: hit ? "fill-danger-soft" : occupied ? "fill-bg-sunken" : "fill-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "9",
				fill: "none",
				className: hit ? "stroke-danger" : occupied ? "stroke-fg" : "stroke-border",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "3.2",
				className: inh ? "fill-danger" : ind ? "fill-warn" : sub ? "fill-accent" : "fill-border"
			}),
			ind ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 4v4",
					className: "stroke-warn",
					strokeWidth: "1.4",
					strokeLinecap: "square"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 24v4",
					className: "stroke-warn",
					strokeWidth: "1.4",
					strokeLinecap: "square"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M4 16h4",
					className: "stroke-warn",
					strokeWidth: "1.4",
					strokeLinecap: "square"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 16h4",
					className: "stroke-warn",
					strokeWidth: "1.4",
					strokeLinecap: "square"
				})
			] }) : null,
			inh ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 16h16",
				className: "stroke-danger",
				strokeWidth: "1.6",
				strokeLinecap: "square"
			}) : null
		]
	});
}
function CypHeatmap({ drugs, colliding }) {
	const mapped = drugs.filter((d) => d.enzymes.length > 0);
	if (mapped.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "CYP occupancy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Filled iron is a substrate. A bar is inhibition. Rays are induction. Ringed columns collide."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-wide text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" }), " Substrate"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-danger" }), " Inhibitor"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-warn" }), " Inducer"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mx-1 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "min-w-full border-separate border-spacing-0 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "sticky left-0 z-10 bg-surface px-2 py-2 text-xs font-medium text-muted",
					children: "Drug"
				}), ENZYMES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: cn("px-1 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-wide", colliding.has(e) ? "text-danger" : "text-muted"),
					children: e.replace("CYP", "")
				}, e))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: mapped.map((drug) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "sticky left-0 z-10 bg-surface px-2 py-1.5 text-left text-xs font-medium text-fg",
					children: drug.name
				}), ENZYMES.map((enzyme) => {
					const { sub, inh, ind } = cellRoles(drug, enzyme);
					const hit = colliding.has(enzyme) && (Boolean(sub) || Boolean(inh) || Boolean(ind));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-1 py-1.5 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Occupancy, {
							sub: Boolean(sub),
							inh: Boolean(inh),
							ind: Boolean(ind),
							hit
						})
					}, enzyme);
				})] }, drug.id)) })]
			})
		})]
	});
}
function Plate({ src, alt, className, overlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative block overflow-hidden bg-bg-sunken", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "absolute inset-0 size-full object-cover",
			draggable: false
		}), overlay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-ink/20" }) : null]
	});
}
var BLURBS = {
	CYP1A2: "Induced by smoking. Classic victims: tizanidine, theophylline, clozapine, caffeine.",
	CYP2B6: "Bupropion and methadone live here. Efavirenz and rifampin induce it.",
	CYP2C8: "Gemfibrozil is the signature strong inhibitor; repaglinide is the sensitive substrate.",
	CYP2C9: "S-warfarin, phenytoin, and many NSAIDs/sulfonylureas. Fluconazole and amiodarone inhibit. 2C9 PMs look like a strong inhibitor.",
	CYP2C19: "Clopidogrel activation, PPIs, citalopram. Fluvoxamine and fluconazole inhibit strongly.",
	CYP2D6: "Not meaningfully inducible. Codeine/tamoxifen activation; paroxetine, fluoxetine, bupropion inhibit.",
	CYP2E1: "Ethanol-inducible; minor acetaminophen bioactivation to NAPQI.",
	CYP3A4: "The workhorse — ~50% of drugs. Strong inhibitors (azoles, ritonavir, clarithromycin) and inducers (rifampin, carbamazepine) dominate collision maps.",
	"P-gp": "Efflux transporter (ABCB1). Digoxin, dabigatran, colchicine, many DOACs. Often travels with CYP3A4."
};
function EnzymeAtlas() {
	const add = useDesk((s) => s.add);
	const selected = useDesk((s) => s.selected);
	const atlasEnzyme = useDesk((s) => s.atlasEnzyme);
	const setAtlasEnzyme = useDesk((s) => s.setAtlasEnzyme);
	const [q, setQ] = (0, import_react.useState)("");
	const index = (0, import_react.useMemo)(() => enzymeIndex(), []);
	const enzyme = ENZYMES.includes(atlasEnzyme) ? atlasEnzyme : "CYP3A4";
	const bucket = index[enzyme];
	const filtered = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		if (!needle) return null;
		return DRUGS.filter((d) => d.name.toLowerCase().includes(needle) || d.brands.some((b) => b.toLowerCase().includes(needle)) || d.cls.toLowerCase().includes(needle));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[280px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: ENZYME_PLATE[enzyme],
						alt: `${enzyme} specimen plate`,
						className: "h-44 w-full lg:h-full min-h-44"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
								children: "Enzyme atlas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-serif text-2xl tracking-tight text-fg",
								children: enzyme
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-sm leading-relaxed text-fg",
								children: BLURBS[enzyme]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted",
								children: "Nine pathways, including 2C9. Pick an isoform, then add substrates, inhibitors, or inducers to the desk."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: ENZYMES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setAtlasEnzyme(e),
					className: cn("h-10 rounded-full px-3.5 font-mono text-xs font-medium", enzyme === e ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: e
				}, e))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: BLURBS[enzyme]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Filter the atlas by drug name…",
				className: "h-11 w-full max-w-md rounded-md bg-surface-2 px-3 text-sm shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
			}),
			filtered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [filtered.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => add(d.id),
					className: "rounded-md bg-surface px-3 py-2.5 text-left shadow-[var(--shadow-border)] hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-fg",
						children: d.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: d.cls
					})]
				}, d.id)), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No drugs match."
				}) : null]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlasColumn, {
						title: "Substrates",
						hint: "Victims of inhibition / induction",
						drugs: bucket.substrates,
						selected,
						onAdd: add,
						kind: "S"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlasColumn, {
						title: "Inhibitors",
						hint: "Raise victim exposure",
						drugs: bucket.inhibitors,
						selected,
						onAdd: add,
						kind: "I"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtlasColumn, {
						title: "Inducers",
						hint: "Drop victim exposure",
						drugs: bucket.inducers,
						selected,
						onAdd: add,
						kind: "D"
					})
				]
			})
		]
	});
}
function AtlasColumn({ title, hint, drugs, selected, onAdd, kind }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "default",
					children: drugs.length
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs text-muted",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-1",
				children: [drugs.map((d) => {
					const on = selected.includes(d.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onAdd(d.id),
						disabled: on,
						className: "flex w-full items-center justify-between gap-2 rounded-sm px-2 py-2 text-left hover:bg-bg-sunken disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-fg",
							children: d.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-muted",
							children: d.cls
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-subtle",
							children: kind
						})]
					}) }, d.id);
				}), drugs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-2 py-3 text-sm text-muted",
					children: "None mapped."
				}) : null]
			})
		]
	});
}
function HemeMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "30",
				height: "30",
				rx: "8",
				className: "fill-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7",
				y: "7",
				width: "18",
				height: "18",
				rx: "4",
				className: "stroke-accent-fg",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "3.2",
				className: "fill-accent-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 4.5v4.2M16 23.3v4.2M4.5 16h4.2M23.3 16h4.2",
				className: "stroke-accent-fg",
				strokeWidth: "1.4",
				strokeLinecap: "square"
			})
		]
	});
}
var ORDER = [
	"PM",
	"IM",
	"NM",
	"UM"
];
var ROUTES = [
	"iv",
	"in",
	"oral"
];
var CANNABIS = ["smoked", "oral"];
var ALCOHOL = [
	"off",
	"acute",
	"chronic"
];
var AGES = ["adult", "geriatric"];
var KIDNEYS = ["ok", "ckd"];
var PREGS = [
	"off",
	"pregnant",
	"lactating"
];
var HINT = {
	CYP2D6: "DXM, MDMA, codeine, atomoxetine",
	CYP2C19: "Clobazam, diazepam, citalopram",
	CYP2C9: "Warfarin, phenytoin, edible THC",
	CYP2B6: "Ketamine, bupropion, methadone"
};
function PhenotypeCard() {
	const phenotypes = useDesk((s) => s.phenotypes);
	const setPhenotype = useDesk((s) => s.setPhenotype);
	const resetPhenotypes = useDesk((s) => s.resetPhenotypes);
	const smoking = useDesk((s) => s.smoking);
	const setSmoking = useDesk((s) => s.setSmoking);
	const ketamineRoute = useDesk((s) => s.ketamineRoute);
	const setKetamineRoute = useDesk((s) => s.setKetamineRoute);
	const cannabisRoute = useDesk((s) => s.cannabisRoute);
	const setCannabisRoute = useDesk((s) => s.setCannabisRoute);
	const alcohol = useDesk((s) => s.alcohol);
	const setAlcohol = useDesk((s) => s.setAlcohol);
	const age = useDesk((s) => s.age);
	const setAge = useDesk((s) => s.setAge);
	const kidney = useDesk((s) => s.kidney);
	const setKidney = useDesk((s) => s.setKidney);
	const preg = useDesk((s) => s.preg);
	const setPreg = useDesk((s) => s.setPreg);
	const dirty = PHENOTYPE_ENZYMES.some((e) => phenotypes[e] !== "NM") || smoking || ketamineRoute !== "iv" || cannabisRoute !== "smoked" || alcohol !== "off" || age !== "adult" || kidney !== "ok" || preg !== "off";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-wide text-muted",
					children: "Host factors"
				}), dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: resetPhenotypes,
					className: "text-[11px] font-medium text-accent hover:underline",
					children: "Reset"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] leading-relaxed text-muted",
				children: "Poor ≈ a strong inhibitor. Smoke induces 1A2. Chronic alcohol induces 2E1. Geriatric, CKD, and pregnancy score Beers / renal / teratogen cards."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: PHENOTYPE_ENZYMES.map((enzyme) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-fg",
							children: enzyme
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-[10px] text-subtle",
							children: HINT[enzyme]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 grid grid-cols-4 gap-1",
						children: ORDER.map((m) => {
							const on = phenotypes[enzyme] === m;
							const freq = PHENO_FREQ[enzyme][m];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": on,
								title: freq ? `${METABOLIZER_LABEL[m]} · ${freq}` : METABOLIZER_LABEL[m],
								onClick: () => setPhenotype(enzyme, m),
								className: cn("h-10 rounded-sm font-mono text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
								children: m
							}, m);
						})
					}),
					phenotypes[enzyme] !== "NM" && PHENO_FREQ[enzyme][phenotypes[enzyme]] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] text-subtle",
						children: PHENO_FREQ[enzyme][phenotypes[enzyme]]
					}) : null
				] }, enzyme))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border-t border-border pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Tobacco smoke"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1.5 grid grid-cols-2 gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": !smoking,
						onClick: () => setSmoking(false),
						className: cn("h-10 rounded-sm text-[11px] font-medium", !smoking ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: "Off"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": smoking,
						onClick: () => setSmoking(true),
						className: cn("h-10 rounded-sm text-[11px] font-medium", smoking ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: "Daily · 1A2"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Alcohol pattern"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-3 gap-1",
					children: ALCOHOL.map((a) => {
						const on = alcohol === a;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setAlcohol(a),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: ALCOHOL_LABEL[a]
						}, a);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Ketamine route"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-3 gap-1",
					children: ROUTES.map((r) => {
						const on = ketamineRoute === r;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setKetamineRoute(r),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: KETAMINE_ROUTE_LABEL[r]
						}, r);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Cannabis route"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-2 gap-1",
					children: CANNABIS.map((r) => {
						const on = cannabisRoute === r;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setCannabisRoute(r),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: CANNABIS_ROUTE_LABEL[r]
						}, r);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Age"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-2 gap-1",
					children: AGES.map((a) => {
						const on = age === a;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setAge(a),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: AGE_LABEL[a]
						}, a);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Kidney"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-2 gap-1",
					children: KIDNEYS.map((k) => {
						const on = kidney === k;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setKidney(k),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: KIDNEY_LABEL[k]
						}, k);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-fg",
					children: "Pregnancy / lactation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 grid grid-cols-3 gap-1",
					children: PREGS.map((p) => {
						const on = preg === p;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setPreg(p),
							className: cn("h-10 rounded-sm text-[11px] font-medium", on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
							children: PREG_LABEL[p]
						}, p);
					})
				})]
			})
		]
	});
}
function tone(score) {
	if (score >= 4) return "bg-danger";
	if (score >= 3) return "bg-warn";
	if (score >= 2) return "bg-accent";
	if (score >= 1) return "bg-ink/40";
	return "bg-border";
}
function StackMeters({ stacks }) {
	if (stacks.every((s) => s.score === 0)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Stack load"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Pharmacodynamic burden on this desk — not a dose calculator."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: stacks.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-28 shrink-0 font-mono text-[11px] uppercase tracking-wide text-muted",
						children: STACK_LABEL[s.axis]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid min-w-0 flex-1 grid-cols-5 gap-1",
						"aria-hidden": true,
						children: Array.from({ length: s.cap }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-3 rounded-xs", i < s.score ? tone(s.score) : "bg-bg-sunken") }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "w-8 shrink-0 text-right font-mono text-xs tabular-nums text-fg",
						children: [
							s.score,
							"/",
							s.cap
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 truncate pl-0 text-[11px] text-subtle sm:pl-28",
				children: s.items.length ? s.items.join(" · ") : "—"
			})] }, s.axis))
		})]
	});
}
function MetaboliteCard({ ids }) {
	const trees = treesFor(ids);
	if (!trees.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Metabolite map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "What the parent becomes — and which isoform does the work."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-5",
			children: trees.map((t) => {
				const drug = DRUG_BY_ID[t.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid gap-3 sm:grid-cols-[112px_minmax(0,1fr)]",
					children: [drug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: plateForDrug(drug),
						alt: "",
						className: "h-28 w-full rounded-md sm:h-full min-h-28"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium capitalize text-fg",
							children: t.id.replace(/-/g, " ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: t.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-3 space-y-2",
							children: t.nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex w-4 shrink-0 flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-2 rounded-full bg-accent" }), i < t.nodes.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 w-px flex-1 bg-border" }) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 rounded-sm bg-bg-sunken px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline gap-x-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-fg",
												children: n.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-wide text-accent",
												children: n.via
											}),
											n.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase text-ok",
												children: "active"
											}) : null,
											n.toxic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase text-danger",
												children: "toxic"
											}) : null
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block text-xs text-muted"),
										children: n.note
									})]
								})]
							}, n.name))
						})
					] })]
				}, t.id);
			})
		})]
	});
}
function Paywall({ title, blurb, children }) {
	const openCheckout = useDesk((s) => s.openCheckout);
	const startPreview = useDesk((s) => s.startPreview);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none select-none blur-[3px]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/80 px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-xs text-xs leading-relaxed text-muted",
					children: blurb
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => openCheckout("lab", title),
						children: "Founding · $79"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: startPreview,
						children: "7-day preview"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted",
					children: ["Card on Stripe · ", PAY_RAILS.map((r) => `${r.label} ${r.handle}`).join(" · ")]
				})
			]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function readString$4(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
var redeemLicense = createServerFn({ method: "POST" }).validator((input) => ({ key: readString$4(input, "key") })).handler(createSsrRpc("44d8bbe640632087e1ae0c85eee1989e89f5aea9b69ea3fe55986c2c45da9af4"));
var mintLicenseKey = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString$4(input, "pin"),
	plan: readString$4(input, "plan"),
	soldTo: readString$4(input, "soldTo")
})).handler(createSsrRpc("c4b9a08d61fce0057ad5128b30c506678321938dc4e4e2a201694c6b9199409c"));
createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString$4(input, "pin"),
	plan: readString$4(input, "plan"),
	names: readString$4(input, "names")
})).handler(createSsrRpc("69022fa5ec834cb344b7d8a1942c20f8240bdf6dc54600b17fb18bb31ada37e1"));
function readString$3(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
var stripeStatus = createServerFn({ method: "POST" }).handler(createSsrRpc("c69551bf536aa5bf57002955495abde08bd40ca864317987f6edb29bb93a15f0"));
var startStripeCheckout = createServerFn({ method: "POST" }).validator((input) => ({
	plan: readString$3(input, "plan"),
	interval: readString$3(input, "interval")
})).handler(createSsrRpc("e4e9c09259e5d2421625eea94a6c09d36185c63ef8ee9a12708b7dcf7c670a0f"));
var claimStripeCheckout = createServerFn({ method: "POST" }).validator((input) => ({ sessionId: readString$3(input, "sessionId") })).handler(createSsrRpc("c80fe63ac6022aed39946a4ec1310dbb12788f7679579baebe8d36ddfd07c509"));
createServerFn({ method: "POST" }).validator((input) => ({ pin: readString$3(input, "pin") })).handler(createSsrRpc("1bff1f57d5534978f8ba9956f7d553bb0e80b27eca17219153b9da88ade84f36"));
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40", "disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function OperatorCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)] sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
				children: "Pay & write"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-serif text-xl tracking-tight text-fg",
				children: OPERATOR.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorLines, { className: "mt-3 space-y-2 text-sm" })
		]
	});
}
function DeskFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
					children: "Pay & write"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-serif text-lg tracking-tight text-fg",
					children: OPERATOR.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorLines, { className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-sm text-[11px] leading-relaxed text-subtle",
				children: [
					SOFTWARE.name,
					" ",
					SOFTWARE.version,
					". ",
					PI_FOOTER
				]
			})]
		})
	});
}
function OperatorLines({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className,
		children: [
			PAY_RAILS.map((rail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: rail.href,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex min-h-10 items-center font-medium text-accent hover:underline",
				children: [
					rail.label,
					" ",
					rail.handle
				]
			}), rail.id === "venmo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: " · $79"
			}) : null] }, rail.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${OPERATOR.email}`,
				className: "inline-flex min-h-10 items-center text-fg hover:underline",
				children: OPERATOR.email
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: OPERATOR.phoneHref,
				className: "inline-flex min-h-10 items-center text-fg hover:underline",
				children: OPERATOR.phone
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "inline-flex min-h-10 items-center text-muted",
				children: OPERATOR.social.join(" · ")
			})
		]
	});
}
function PlansPage() {
	const current = usePlan();
	const license = useDesk((s) => s.license);
	const lifetime = useDesk((s) => s.lifetime);
	const previewUntil = useDesk((s) => s.previewUntil);
	const interval = useDesk((s) => s.checkout.interval);
	const setInterval = useDesk((s) => s.setCheckoutInterval);
	const openCheckout = useDesk((s) => s.openCheckout);
	const startPreview = useDesk((s) => s.startPreview);
	const downgrade = useDesk((s) => s.downgrade);
	const previewing = Boolean(previewUntil && Date.now() < previewUntil && current === "pro");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-[240px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: "/plates/heme.jpg",
						alt: "",
						className: "h-40 w-full lg:h-full min-h-40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
								children: "Licenses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-serif text-3xl tracking-tight text-fg sm:text-4xl",
								children: [
									"$",
									COMMERCE.founding,
									" once. The desk is yours."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
								children: COMMERCE.pitch
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => openCheckout("lab", "Founding lifetime — Pro plus export."),
									children: ["Buy founding · $", COMMERCE.founding]
								}), current === "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									onClick: startPreview,
									children: "7-day preview"
								}) : null]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					"life",
					"year",
					"month"
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setInterval(i),
					className: cn("h-10 rounded-full px-4 text-sm font-medium", interval === i ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: i === "life" ? "Lifetime" : i === "year" ? "Yearly" : "Monthly"
				}, i))
			}),
			current !== "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-lg bg-ok-soft px-4 py-3 text-sm text-ok",
				children: [
					previewing ? "Pro preview is active on this desk." : lifetime ? "Founding lifetime is live." : `${current === "lab" ? "Lab" : "Pro"} is live.`,
					license ? ` ${license}.` : "",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline",
						onClick: downgrade,
						children: "Return to free"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 lg:grid-cols-3",
				children: PLANS.map((p) => {
					const price = priceFor(p.id, p.id === "free" ? "month" : interval);
					const on = current === p.id || p.id === "pro" && previewing;
					const cta = p.id === "free" ? current === "free" ? "Current desk" : "Use free desk" : interval === "life" ? `Founding · $${priceFor(p.id === "pro" ? "pro" : "lab", "life")}` : `Unlock ${p.name}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex flex-col rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]", p.highlighted && "ring-1 ring-accent"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-2xl tracking-tight text-fg",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-mono text-3xl tabular-nums text-fg",
								children: [p.id === "free" ? "—" : `$${price}`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 text-sm text-muted",
									children: p.id === "free" ? "free" : interval === "life" ? " once" : interval === "year" ? "/yr" : "/mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 flex-1 space-y-2",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: p.id === "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "w-full",
									disabled: current === "free",
									onClick: downgrade,
									children: cta
								}) : on && !previewing && !(interval === "life" && !lifetime) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "secondary",
									className: "w-full",
									disabled: true,
									children: "Current license"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "w-full",
									onClick: () => openCheckout(interval === "life" ? "lab" : p.id, interval === "life" ? "Founding lifetime." : p.name),
									children: cta
								})
							})
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-xl tracking-tight text-fg",
				children: "Who this is for"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: BUYERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: b.who
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-muted",
						children: b.why
					})]
				}, b.who))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorCard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-sm text-muted",
				children: [
					"Already have a key?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-accent hover:underline",
						onClick: () => openCheckout("lab", "Paste the key you were sent."),
						children: "Redeem it here"
					}),
					"."
				]
			})
		]
	});
}
function CheckoutDrawer() {
	const checkout = useDesk((s) => s.checkout);
	const close = useDesk((s) => s.closeCheckout);
	const activate = useDesk((s) => s.activateLicense);
	const startPreview = useDesk((s) => s.startPreview);
	const setInterval = useDesk((s) => s.setCheckoutInterval);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [cardBusy, setCardBusy] = (0, import_react.useState)(false);
	const [key, setKey] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [stripeMode, setStripeMode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!checkout.open) return;
		let live = true;
		stripeStatus().then((s) => {
			if (live) setStripeMode(s.mode);
		}).catch(() => {
			if (live) setStripeMode("off");
		});
		return () => {
			live = false;
		};
	}, [checkout.open]);
	if (!checkout.open) return null;
	const life = checkout.interval === "life" || checkout.plan === "lab";
	const amount = priceFor(checkout.plan === "free" ? "pro" : checkout.plan, checkout.interval);
	const name = checkout.interval === "life" ? "Founding" : checkout.plan === "lab" ? "Lab" : "Pro";
	const cardLive = stripeMode === "live" || stripeMode === "test";
	async function redeem() {
		setBusy(true);
		setErr("");
		try {
			const res = await redeemLicense({ data: { key } });
			if (!res.ok) {
				setErr(res.reason ?? "Key did not verify.");
				return;
			}
			activate({
				plan: res.plan,
				license: res.license,
				lifetime: res.lifetime
			});
		} catch {
			setErr("Could not reach the license desk.");
		} finally {
			setBusy(false);
		}
	}
	async function payCard() {
		setCardBusy(true);
		setErr("");
		try {
			const res = await startStripeCheckout({ data: {
				plan: checkout.plan === "lab" ? "lab" : "pro",
				interval: checkout.interval
			} });
			if (!res.ok) {
				setErr(res.reason);
				return;
			}
			window.location.assign(res.url);
		} catch {
			setErr("Could not open Stripe.");
		} finally {
			setCardBusy(false);
		}
	}
	async function copyRequest() {
		try {
			await navigator.clipboard.writeText(requestLicense());
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-labelledby": "checkout-title",
			className: "max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-t-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
						children: "Checkout"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "checkout-title",
						className: "mt-1 font-serif text-2xl tracking-tight text-fg",
						children: ["FirstPass ", name]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-10 items-center justify-center rounded-sm text-muted hover:bg-bg-sunken hover:text-fg",
						onClick: close,
						"aria-label": "Close checkout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				checkout.reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: checkout.reason
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: "Pay with card on Stripe. A signed key is minted automatically after Stripe says paid — this browser is licensed on return. Venmo, Cash App, and PayPal still work if you would rather write."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-1",
					children: [
						"life",
						"year",
						"month"
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setInterval(i),
						className: cn("h-11 rounded-sm text-xs font-medium sm:text-sm", checkout.interval === i ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: i === "life" ? `$${priceFor("lab", "life")} once` : i === "year" ? `$${priceFor(checkout.plan === "lab" ? "lab" : "pro", "year")}/yr` : `$${priceFor(checkout.plan === "lab" ? "lab" : "pro", "month")}/mo`
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-5 w-full",
					onClick: () => void payCard(),
					disabled: cardBusy,
					children: [
						cardBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4" }),
						"Pay $",
						amount,
						" with card"
					]
				}),
				stripeMode === "test" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-warn",
					children: "Stripe is in test mode. No live charge."
				}) : null,
				stripeMode === "off" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "Card is not live on this desk yet. Venmo, Cash App, or PayPal still close a sale — then redeem the key below."
				}) : cardLive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-ok",
					children: "Stripe mints the key, stamps the receipt, and licenses this browser when you land back."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-3 gap-2",
					children: PAY_RAILS.map((rail) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						className: "w-full",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: rail.href,
							target: "_blank",
							rel: "noreferrer",
							children: rail.label
						})
					}, rail.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 rounded-md bg-bg-sunken px-3 py-3 text-sm leading-relaxed text-muted",
					children: [
						life ? `Founding is $${COMMERCE.founding} once. Card is the default. ${OPERATOR.payLine} if you would rather write.` : `Pay $${amount} with card, or ${OPERATOR.payLine}.`,
						" ",
						OPERATOR.email,
						" · ",
						OPERATOR.phone,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs",
							children: OPERATOR.social.join(" · ")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "mt-3 w-full",
					onClick: () => void copyRequest(),
					children: copied ? "Request copied" : "Copy a license request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-xs font-medium text-muted",
					htmlFor: "license-key",
					children: "License key"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1.5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "license-key",
						value: key,
						autoCapitalize: "characters",
						autoCorrect: "off",
						spellCheck: false,
						placeholder: "FP-LIFE-…",
						onChange: (e) => setKey(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") redeem();
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => void redeem(),
						disabled: busy || !key.trim(),
						className: "shrink-0",
						children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, "Redeem"]
					})]
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-danger",
					children: err
				}) : null,
				checkout.plan !== "lab" || checkout.interval === "life" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-3 h-10 w-full text-sm text-muted hover:text-fg",
					onClick: startPreview,
					children: "Start 7-day Pro preview instead"
				}) : null
			]
		})
	});
}
var getConnectorReadiness = createServerFn({ method: "POST" }).handler(createSsrRpc("ac303419f3bd6f94ee837f95e91005a600278deed4876cb96a25aa0d69185951"));
var READINESS_PROBE_DELAYS_MS = [
	1e3,
	2e3,
	3e3,
	5e3
];
var READINESS_PROBE_MAX_TOTAL_MS = 18e4;
function readinessProbeDelayMs(attempt) {
	return READINESS_PROBE_DELAYS_MS[Math.min(Math.max(attempt, 0), READINESS_PROBE_DELAYS_MS.length - 1)];
}
function readinessProbeExhausted(startedAtMs, nowMs) {
	return nowMs - startedAtMs >= READINESS_PROBE_MAX_TOTAL_MS;
}
var READINESS_PROBE_TIMEOUT_MS = 1e4;
function withTimeout(promise, ms) {
	return new Promise((resolve) => {
		const timer = setTimeout(() => resolve(null), ms);
		const settle = (value) => {
			clearTimeout(timer);
			resolve(value);
		};
		promise.then(settle, () => settle(null));
	});
}
async function isConnectorReady() {
	return (await withTimeout(getConnectorReadiness(), READINESS_PROBE_TIMEOUT_MS))?.ready === true;
}
/**
* While `waiting` is true (a connector call returned `pending`), probes the
* server for the connector token and calls `refetch` once it is present. The
* probe is a header check on the app's own server — it never reaches the gate.
* A `connector-token-ready` bridge event from the Grok preview chrome triggers
* `refetch` immediately. A top-level page (download/export, local dev, the
* sandbox's own `npm run preview`) is not framed by any preview, so no token
* can ever arrive: the hook reports `not_embedded` without probing. Any framed
* page probes, even when the parent origin cannot be resolved (empty referrer,
* no `ancestorOrigins`): the token comes through the preview proxy, and the
* bridge event is only the faster signal.
*/
function useRefetchWhenConnectorReady(waiting, refetch) {
	const refetchRef = (0, import_react.useRef)(refetch);
	const [timedOut, setTimedOut] = (0, import_react.useState)(false);
	const [notEmbedded, setNotEmbedded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		refetchRef.current = refetch;
	}, [refetch]);
	(0, import_react.useEffect)(() => {
		if (!waiting) return;
		if (!isFramed()) {
			setNotEmbedded(true);
			return () => setNotEmbedded(false);
		}
		let cancelled = false;
		let refetching = false;
		let attempt = 0;
		let timer;
		const startedAt = Date.now();
		const runRefetch = async () => {
			if (refetching) return;
			refetching = true;
			try {
				await refetchRef.current();
			} catch {} finally {
				refetching = false;
			}
		};
		const schedule = () => {
			timer = setTimeout(probe, readinessProbeDelayMs(attempt));
			attempt += 1;
		};
		const probe = async () => {
			if (cancelled || readinessProbeExhausted(startedAt, Date.now())) return;
			const ready = await isConnectorReady();
			if (cancelled) return;
			if (ready) await runRefetch();
			if (!cancelled) schedule();
		};
		const onTokenReady = () => {
			runRefetch();
		};
		const deadline = setTimeout(() => {
			if (!cancelled) setTimedOut(true);
		}, READINESS_PROBE_MAX_TOTAL_MS);
		window.addEventListener(CONNECTOR_TOKEN_READY_EVENT, onTokenReady);
		schedule();
		return () => {
			cancelled = true;
			clearTimeout(deadline);
			if (timer !== void 0) clearTimeout(timer);
			window.removeEventListener(CONNECTOR_TOKEN_READY_EVENT, onTokenReady);
			setTimedOut(false);
		};
	}, [waiting]);
	if (!waiting) return "idle";
	if (notEmbedded) return "not_embedded";
	return timedOut ? "timed_out" : "waiting";
}
function readString$2(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
function readRows(input) {
	if (!input || typeof input !== "object") return [];
	const raw = input.rows;
	if (!Array.isArray(raw)) return [];
	return raw.filter((row) => {
		if (!row || typeof row !== "object") return false;
		const r = row;
		return typeof r.key === "string" && typeof r.soldTo === "string";
	});
}
var collectLicenses = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString$2(input, "pin"),
	plan: readString$2(input, "plan"),
	names: readString$2(input, "names"),
	hunt: readString$2(input, "hunt")
})).handler(createSsrRpc("c4c1c686268d315fefc8fab7300663dc1b46f1dfa709dd0bb5dee178f845e24e"));
var draftCollected = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString$2(input, "pin"),
	rows: readRows(input)
})).handler(createSsrRpc("81831aa2d98bcaec1ff38c1a504d63093d8f0f5535a3090a7610523dd640ff4e"));
var PREY_LABEL = {
	clinic: "Ketamine clinic",
	mat: "MAT / OTP",
	school: "Pharmacy school",
	harm: "Harm reduction",
	assoc: "Association"
};
var RANGE_LABEL = {
	whatcom: "Whatcom / Skagit",
	puget: "Puget Sound",
	eastwa: "Eastern WA",
	pnw: "PNW",
	us: "National"
};
var STATUS_LABEL = {
	queued: "Queued",
	sent: "DM sent",
	waiting: "Waiting on pay",
	keyed: "Keyed",
	skip: "Skip"
};
/** Public orgs only — websites, not personal inboxes. Bundle is public. */
var DIRECTORY = [
	{
		id: "salish-ketamine",
		name: "Salish Ketamine",
		prey: "clinic",
		range: "whatcom",
		city: "Bellingham",
		who: "Nate Stephens, DO",
		site: "https://www.salishketamine.com/",
		hook: "Your IV ketamine panel in Fairhaven — oral vs IV first-pass and benzo airway stacks are the map the infusion nurse already wants."
	},
	{
		id: "cascade-medical-advantage",
		name: "Cascade Medical Advantage",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "Office-based MAT, Dr. Adam Kartman",
		site: "https://cascademedicaladvantage.org/",
		hook: "Long-running buprenorphine desk. Xylazine, nitazenes, and naltrexone traps show up in the same patients."
	},
	{
		id: "sea-mar-mat-bellingham",
		name: "Sea Mar MAT — Bellingham",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "MAT program (Suboxone, Vivitrol)",
		site: "https://www.seamar.org/whatcom-bh-mat-bellingham.html",
		hook: "Naltrexone × leftover opioid, loperamide, and street-benzo stacks — the collisions MAT staff get asked about after hours."
	},
	{
		id: "ideal-option-bellingham",
		name: "Ideal Option — Bellingham",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "Medication-assisted treatment clinic",
		site: "https://www.idealoption.com/clinics/bellingham",
		hook: "High-throughput MAT. A two-drug free desk is how staff try it; founding is the formulary they keep."
	},
	{
		id: "ccs-recovery",
		name: "CCS Recovery Center",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "Catholic Community Services — MAT / outpatient",
		site: "https://ccsww.org/",
		hook: "Outpatient + MAT. Street adulterants and psych meds on the same board."
	},
	{
		id: "ctc-bellingham",
		name: "Bellingham Comprehensive Treatment Center",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "OTP / methadone + MAT",
		site: "https://www.ctcprograms.com/location/bellingham-comprehensive-treatment-center/",
		hook: "Methadone × 3A4 inducers, QT stacks, and naltrexone timing — OTP pharmacy already lives this."
	},
	{
		id: "lifeline-bellingham",
		name: "Lifeline Connections — Bellingham",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "IOP / MAT",
		site: "https://www.lifelineconnections.org/",
		hook: "MAT plus psych meds. Designer benzos and xylazine are already in the county supply."
	},
	{
		id: "lummi-care",
		name: "Lummi Care",
		prey: "mat",
		range: "whatcom",
		city: "Lummi Nation",
		who: "Tribal SUD / MAT",
		site: "https://www.lummi-nsn.gov/",
		hook: "Tribal MAT desk. Same CYP maps, plus alcohol pattern and first-pass oral meds."
	},
	{
		id: "didgwalic",
		name: "didgʷálič Wellness Center",
		prey: "mat",
		range: "whatcom",
		city: "Anacortes / Bellingham MMU",
		who: "Swinomish Tribe OTP + mobile unit",
		site: "https://www.didgwalic.com/",
		hook: "OTP plus a downtown Bellingham mobile unit. Street supply and methadone CYP maps in one desk."
	},
	{
		id: "lwrtc",
		name: "Lake Whatcom Treatment Center",
		prey: "mat",
		range: "whatcom",
		city: "Bellingham",
		who: "Inpatient co-occurring",
		site: "https://lwrtc.org/",
		hook: "Co-occurring inpatient. Psych + SUD stacks are the whole census."
	},
	{
		id: "nw-ketamine",
		name: "Northwest Ketamine Clinics",
		prey: "clinic",
		range: "puget",
		city: "Seattle / Bellevue / Tacoma",
		who: "Allyn Wilcock, CRNA — 50k+ infusions",
		site: "https://nwketamineclinics.com/",
		hook: "Highest-volume IV ketamine shop in the PNW. First-pass vs IV and 2B6 phenotype are the questions their referring pharmacies already ask."
	},
	{
		id: "ketamine-seattle",
		name: "The Ketamine Clinic of Seattle",
		prey: "clinic",
		range: "puget",
		city: "Seattle",
		who: "Julie Chinnock, CRNA",
		site: "https://ketamineclinicofseattle.com/",
		hook: "Fremont IV desk. Benzo premed + ketamine airway stack is the teaching case."
	},
	{
		id: "quest-ketamine",
		name: "Quest Ketamine Therapies",
		prey: "clinic",
		range: "puget",
		city: "Issaquah",
		who: "Mitchell Keszler, CRNA",
		site: "https://questketamineclinics.com/",
		hook: "Eastside infusion clinic. Oral boosters vs IV are a first-pass story."
	},
	{
		id: "lighthouse-infusions",
		name: "Lighthouse Infusions",
		prey: "clinic",
		range: "puget",
		city: "Kenmore",
		who: "Liana Ren, CRNA ARNP",
		site: "https://lhinfusions.com/",
		hook: "North-end infusion. Same oral vs IV map, smaller shop — $79 is an easy yes."
	},
	{
		id: "seattle-ntc",
		name: "Seattle Neuropsychiatric Treatment Center",
		prey: "clinic",
		range: "puget",
		city: "Seattle / Poulsbo",
		who: "Joshua Bess, MD",
		site: "https://seattlentc.com/",
		hook: "Spravato + interventional psych. Esketamine × 2B6/3A4 inducers is the collision."
	},
	{
		id: "aims-institute",
		name: "AIMS Institute",
		prey: "clinic",
		range: "puget",
		city: "Seattle",
		who: "Integrative oncology + KAP",
		site: "https://www.aimsinstitute.net/",
		hook: "Ketamine lozenges — those are first-pass victims. Grapefruit and 3A4 inhibitors change the dose."
	},
	{
		id: "acute-pain-bellevue",
		name: "Acute Pain Therapies",
		prey: "clinic",
		range: "puget",
		city: "Bellevue",
		who: "Zachary Fisk, MD",
		site: "https://acutepaintherapies.com/",
		hook: "Pain + ketamine. Opioid + benzo + NMDA is the airway stack they already respect."
	},
	{
		id: "nomad-therapeutics",
		name: "Nomad Therapeutics",
		prey: "clinic",
		range: "puget",
		city: "Seattle",
		who: "In-home nurse KAP",
		site: "https://nomadtherapeutics.org/",
		hook: "Home ketamine. Route and host factors are the whole safety case."
	},
	{
		id: "looking-glass-tacoma",
		name: "Looking Glass Ketamine",
		prey: "clinic",
		range: "puget",
		city: "Tacoma",
		who: "Melissa Louthain, NP",
		site: "https://lookingglassketamine.com/",
		hook: "South Sound KAP. Teaching desk for the NP-run clinic."
	},
	{
		id: "vancouver-ketamine",
		name: "Vancouver Ketamine Infusions",
		prey: "clinic",
		range: "puget",
		city: "Vancouver, WA",
		who: "Infusion clinic",
		site: "https://vancouverketamineinfusions.com/",
		hook: "Portland-adjacent infusion. Same IV vs oral map, less Seattle noise."
	},
	{
		id: "lakeview-everett",
		name: "Lakeview Mental Health",
		prey: "clinic",
		range: "puget",
		city: "Everett",
		who: "Alexandra Pales",
		site: "https://lakeviewmentalhealth.com/",
		hook: "Snohomish psych + ketamine. Phenotype and benzo stack for the mid-size shop."
	},
	{
		id: "sky-valley",
		name: "Sky Valley Psychedelic Medical",
		prey: "clinic",
		range: "puget",
		city: "Lynnwood / Monroe",
		who: "Dr. John Lovejoy",
		site: "https://ketamineskyvalley.com/",
		hook: "North-end psychedelic medical. Street + clinic maps in one desk."
	},
	{
		id: "mountain-psychiatry",
		name: "Mountain Psychiatry",
		prey: "clinic",
		range: "eastwa",
		city: "Spokane",
		who: "Kelsey Martell, DO",
		site: "https://mountainpsych.com/",
		hook: "East-side psych + ketamine. Fewer tools out there — a $79 desk is the whole pharmacy consult."
	},
	{
		id: "illume-wellbeing",
		name: "Illume Wellbeing",
		prey: "clinic",
		range: "eastwa",
		city: "Spokane Valley",
		who: "Danielle Wolff, MD",
		site: "https://illume-wellbeing.com/",
		hook: "Spokane Valley ketamine. Host factors and first-pass oral boosters."
	},
	{
		id: "tricities-infusion",
		name: "Tri-Cities Infusion and Wellness",
		prey: "clinic",
		range: "eastwa",
		city: "Kennewick",
		who: "Tyler Thornock, CRNA",
		site: "https://tricitieswellness.com/",
		hook: "Highest-reviewed infusion shop in WA. Volume clinic that still asks pharmacy the CYP question."
	},
	{
		id: "uw-sop",
		name: "UW School of Pharmacy",
		prey: "school",
		range: "puget",
		city: "Seattle",
		who: "PharmD program / Student & Academic Services",
		site: "https://sop.washington.edu/",
		hook: "Teaching desk they will actually open. Lab export goes in the notebook. Two-drug maps stay free for the class."
	},
	{
		id: "wsu-pharmacy",
		name: "WSU College of Pharmacy",
		prey: "school",
		range: "eastwa",
		city: "Spokane",
		who: "PharmD admissions / faculty",
		site: "https://pharmacy.wsu.edu/",
		hook: "Spokane PharmD. Psych + MAT cases are the rotation they already run."
	},
	{
		id: "pacific-pharmacy",
		name: "Pacific University School of Pharmacy",
		prey: "school",
		range: "pnw",
		city: "Hillsboro, OR",
		who: "PharmD faculty",
		site: "https://www.pacificu.edu/pharmacy-pharmd",
		hook: "Oregon PharmD. A CYP teaching desk with street + clinic maps, not another Lexicomp screenshot."
	},
	{
		id: "osu-pharmacy",
		name: "Oregon State College of Pharmacy",
		prey: "school",
		range: "pnw",
		city: "Corvallis / Portland",
		who: "PharmD program",
		site: "https://pharmacy.oregonstate.edu/",
		hook: "OSU PharmD. Same pitch: a desk students open during psych and pain modules."
	},
	{
		id: "phra",
		name: "People's Harm Reduction Alliance",
		prey: "harm",
		range: "puget",
		city: "Seattle",
		who: "Peer-run SSP + naloxone mail",
		site: "https://phra.org/",
		hook: "Xylazine, nitazenes, designer benzos. Naloxone will not reverse an α2. That sentence is the sale."
	},
	{
		id: "kc-needle-exchange",
		name: "King County Needle Exchange",
		prey: "harm",
		range: "puget",
		city: "Seattle",
		who: "Public Health — Seattle & King County",
		site: "https://doh.wa.gov/you-and-your-family/drug-user-health/syringe-service-programs/syringe-service-program-directory",
		hook: "County SSP. Street-supply collisions are the daily board. Educational desk, not a charting system."
	},
	{
		id: "askp3",
		name: "ASKP3",
		prey: "assoc",
		range: "us",
		city: "National",
		who: "American Society of Ketamine Physicians, Psychotherapists & Practitioners",
		site: "https://askp.org/",
		hook: "The ketamine-clinic membership. One post in their channels is worth twenty cold DMs."
	},
	{
		id: "aapp",
		name: "AAPP (psychiatric pharmacists)",
		prey: "assoc",
		range: "us",
		city: "National",
		who: "American Association of Psychiatric Pharmacists",
		site: "https://aapp.org/",
		hook: "Psych pharmacists already live CYP + PD. A teaching desk with street maps is the thing they email residents."
	},
	{
		id: "wspa",
		name: "Washington State Pharmacy Association",
		prey: "assoc",
		range: "pnw",
		city: "Washington",
		who: "WSPA members / CE",
		site: "https://www.wsparx.org/",
		hook: "State association. CE angle: ketamine, MAT, and street adulterants on one CYP map."
	}
];
var RECIPES = [
	{
		id: "clinic-whatcom",
		prey: "clinic",
		range: "whatcom",
		label: "Ketamine clinics — Whatcom",
		google: "ketamine clinic OR esketamine OR Spravato Bellingham OR Whatcom OR Mount Vernon",
		maps: "ketamine clinic Bellingham WA",
		x: "ketamine clinic (Bellingham OR Whatcom) (infusion OR Spravato)",
		linkedin: "medical director ketamine Bellingham"
	},
	{
		id: "clinic-puget",
		prey: "clinic",
		range: "puget",
		label: "Ketamine clinics — Puget Sound",
		google: "ketamine infusion clinic (Seattle OR Bellevue OR Tacoma OR Everett) Spravato",
		maps: "ketamine clinic Seattle WA",
		x: "ketamine (clinic OR infusion) (Seattle OR Bellevue OR Tacoma)",
		linkedin: "CRNA OR PMHNP ketamine clinic Seattle"
	},
	{
		id: "clinic-east",
		prey: "clinic",
		range: "eastwa",
		label: "Ketamine clinics — East of the mountains",
		google: "ketamine clinic (Spokane OR Kennewick OR Yakima OR Wenatchee)",
		maps: "ketamine clinic Spokane WA",
		x: "ketamine clinic (Spokane OR Tri-Cities OR Yakima)",
		linkedin: "ketamine clinic Spokane medical director"
	},
	{
		id: "mat-whatcom",
		prey: "mat",
		range: "whatcom",
		label: "MAT / OTP — Whatcom & Skagit",
		google: "MAT OR \"medication assisted\" OR methadone OR buprenorphine clinic Bellingham OR Whatcom",
		maps: "medication assisted treatment Bellingham WA",
		x: "MAT OR buprenorphine OR OTP (Bellingham OR Whatcom)",
		linkedin: "MAT medical director Bellingham"
	},
	{
		id: "mat-puget",
		prey: "mat",
		range: "puget",
		label: "MAT / OTP — Puget Sound",
		google: "opioid treatment program OR Ideal Option OR Evergreen Treatment Seattle",
		maps: "opioid treatment program Seattle WA",
		x: "(MAT OR methadone clinic) (Seattle OR Tacoma) xylazine",
		linkedin: "opioid treatment program medical director Seattle"
	},
	{
		id: "school-pnw",
		prey: "school",
		range: "pnw",
		label: "Pharmacy schools — PNW",
		google: "\"school of pharmacy\" (Washington OR Oregon) psychopharmacology faculty",
		maps: "school of pharmacy Seattle",
		x: "PharmD (UW OR WSU OR \"Pacific University\" OR OSU) (CYP OR psychopharm)",
		linkedin: "professor pharmacy psychopharmacology Washington OR Oregon"
	},
	{
		id: "harm-puget",
		prey: "harm",
		range: "puget",
		label: "Harm reduction — Puget Sound",
		google: "syringe service OR \"harm reduction\" (Seattle OR Whatcom OR Tacoma) xylazine",
		maps: "needle exchange Seattle WA",
		x: "(xylazine OR nitazene OR \"harm reduction\") (Seattle OR Bellingham)",
		linkedin: "harm reduction program manager Seattle"
	},
	{
		id: "assoc-us",
		prey: "assoc",
		range: "us",
		label: "Associations that amplify",
		google: "ASKP3 OR \"psychiatric pharmacists\" OR WSPA ketamine education",
		maps: "pharmacy association Olympia WA",
		x: "ASKP OR \"psychiatric pharmacist\" ketamine CYP",
		linkedin: "ASKP ketamine physician OR psychiatric pharmacist faculty"
	}
];
function googleUrl(q) {
	return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}
function mapsUrl(q) {
	return `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
}
function xUrl(q) {
	return `https://x.com/search?q=${encodeURIComponent(q)}&src=typed_query&f=live`;
}
function linkedinUrl(q) {
	return `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(q)}`;
}
function isoWeek(d = /* @__PURE__ */ new Date()) {
	const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	const day = t.getUTCDay() || 7;
	t.setUTCDate(t.getUTCDate() + 4 - day);
	const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
	return Math.ceil(((t.getTime() - yearStart.getTime()) / 864e5 + 1) / 7);
}
var RANGE_RANK = {
	whatcom: 0,
	puget: 1,
	eastwa: 2,
	pnw: 3,
	us: 4
};
function pickRotate(arr, seed, n) {
	if (arr.length === 0 || n <= 0) return [];
	const start = seed * 3 % arr.length;
	const out = [];
	for (let i = 0; i < arr.length && out.length < n; i++) out.push(arr[(start + i) % arr.length]);
	return out;
}
function weekTargets(count = 5) {
	const week = isoWeek();
	const local = DIRECTORY.filter((t) => t.range === "whatcom").sort((a, b) => a.name.localeCompare(b.name));
	const rest = DIRECTORY.filter((t) => t.range !== "whatcom").sort((a, b) => RANGE_RANK[a.range] - RANGE_RANK[b.range] || a.name.localeCompare(b.name));
	const here = pickRotate(local, week, Math.min(2, count));
	const have = new Set(here.map((t) => t.id));
	const more = pickRotate(rest, week, count - here.length).filter((t) => !have.has(t.id));
	return [...here, ...more].slice(0, count);
}
function filterDirectory(prey, range) {
	return DIRECTORY.filter((t) => (prey === "all" || t.prey === prey) && (range === "all" || t.range === range));
}
function targetDm(t, price = COMMERCE.founding) {
	return [
		`I built FirstPass — a CYP450 desk. ${t.hook}`,
		"",
		`Looked you up because of ${t.name} in ${t.city}.`,
		"",
		"Two-drug collisions stay free so you can kick the tires.",
		`Founding license is $${price} once: host factors, metabolites, enzyme atlas, JSON/CSV export.`,
		payClose(price),
		`${OPERATOR.email} · ${OPERATOR.phone}`,
		"",
		"Educational model — not a clinical system of record."
	].join("\n");
}
function mailSubject(t) {
	return `FirstPass CYP450 desk — for ${t.name}`;
}
function mailDraft(t) {
	return `mailto:?subject=${encodeURIComponent(mailSubject(t))}&body=${encodeURIComponent(targetDm(t))}`;
}
var PIPE_KEY = "firstpass.pipeline.v1";
function loadPipe() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(PIPE_KEY);
		return (raw ? JSON.parse(raw) : []).filter((r) => typeof r.id === "string" && typeof r.name === "string").map((r) => ({
			id: r.id,
			name: r.name,
			prey: r.prey ?? "clinic",
			range: r.range ?? "puget",
			city: typeof r.city === "string" ? r.city : "",
			who: typeof r.who === "string" ? r.who : "",
			site: typeof r.site === "string" ? r.site : "",
			hook: typeof r.hook === "string" ? r.hook : "",
			status: r.status ?? "queued",
			note: typeof r.note === "string" ? r.note : "",
			added: typeof r.added === "string" ? r.added : (/* @__PURE__ */ new Date()).toISOString()
		}));
	} catch {
		return [];
	}
}
function savePipe(rows) {
	if (typeof window === "undefined") return;
	localStorage.setItem(PIPE_KEY, JSON.stringify(rows.slice(0, 80)));
}
function toPipe(t, status = "queued") {
	return {
		...t,
		status,
		note: "",
		added: (/* @__PURE__ */ new Date()).toISOString()
	};
}
var STATUSES = [
	"queued",
	"sent",
	"waiting",
	"keyed",
	"skip"
];
function HuntDesk() {
	const [copied, setCopied] = (0, import_react.useState)("");
	const [pipe, setPipe] = (0, import_react.useState)([]);
	const [prey, setPrey] = (0, import_react.useState)("all");
	const [range, setRange] = (0, import_react.useState)("whatcom");
	const [custom, setCustom] = (0, import_react.useState)("");
	const week = (0, import_react.useMemo)(() => weekTargets(5), []);
	const listed = (0, import_react.useMemo)(() => filterDirectory(prey, range), [prey, range]);
	(0, import_react.useEffect)(() => {
		setPipe(loadPipe());
	}, []);
	function write(next) {
		setPipe(next);
		savePipe(next);
	}
	async function copy(label, text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			window.setTimeout(() => setCopied(""), 1600);
		} catch {}
	}
	function addTargets(rows) {
		const have = new Set(pipe.map((p) => p.id));
		const extra = rows.filter((t) => !have.has(t.id)).map((t) => toPipe(t));
		if (extra.length === 0) return;
		write([...extra, ...pipe]);
	}
	function setStatus(id, status) {
		write(pipe.map((p) => p.id === id ? {
			...p,
			status
		} : p));
	}
	function setNote(id, note) {
		write(pipe.map((p) => p.id === id ? {
			...p,
			note
		} : p));
	}
	function remove(id) {
		write(pipe.filter((p) => p.id !== id));
	}
	function addCustom() {
		const name = custom.trim();
		if (!name) return;
		write([toPipe({
			id: `custom-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40)}-${Date.now().toString(36)}`,
			name,
			prey: "clinic",
			range: "whatcom",
			city: "",
			who: "",
			site: "",
			hook: "The CYP maps you keep asking pharmacy for — ketamine, MAT, street adulterants."
		}), ...pipe]);
		setCustom("");
	}
	const sentThisWeek = pipe.filter((p) => p.status === "sent" || p.status === "waiting" || p.status === "keyed").length;
	const live = pipe.filter((p) => p.status !== "skip" && p.status !== "keyed");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
						children: ["Week ", isoWeek()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl tracking-tight text-fg",
						children: "This week’s hunt is five names."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
						children: [
							"Directory is real WA / PNW shops, weighted to Whatcom. Copy the DM, open the site, mark sent. Do not add more until these five are sent or skipped. ",
							sentThisWeek,
							" already moving in your book."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => addTargets(week),
							children: "Load the five into the book"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: week.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetRow, {
							t,
							copied,
							onCopy: copy,
							onAdd: () => addTargets([t])
						}, t.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl tracking-tight text-fg",
						children: "Open a hunt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "These launch Google, Maps, X, and LinkedIn on the live query. Skim the first page, add names below."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: RECIPES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md bg-bg-sunken px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wide text-accent",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
										href: googleUrl(r.google),
										children: "Google"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
										href: mapsUrl(r.maps),
										children: "Maps"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
										href: xUrl(r.x),
										children: "X"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
										href: linkedinUrl(r.linkedin),
										children: "LinkedIn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "h-9 rounded-sm px-2 text-xs font-medium text-muted hover:text-fg",
										onClick: () => void copy(r.id, r.google),
										children: copied === r.id ? "Copied" : "Copy query"
									})
								]
							})]
						}, r.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-xl tracking-tight text-fg",
							children: ["Directory · ", DIRECTORY.length]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Researched public shops. Add the ones you will actually DM."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: [
								"all",
								"clinic",
								"mat",
								"school",
								"harm",
								"assoc"
							].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPrey(id),
								className: prey === id ? "h-9 rounded-full bg-ink px-3 text-xs font-medium text-bg" : "h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg",
								children: id === "all" ? "All" : PREY_LABEL[id]
							}, id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1",
						children: [
							"all",
							"whatcom",
							"puget",
							"eastwa",
							"pnw",
							"us"
						].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRange(id),
							className: range === id ? "h-9 rounded-full bg-ink px-3 text-xs font-medium text-bg" : "h-9 rounded-full bg-bg-sunken px-3 text-xs font-medium text-muted hover:text-fg",
							children: id === "all" ? "Any range" : RANGE_LABEL[id]
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: listed.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetRow, {
							t,
							copied,
							onCopy: copy,
							onAdd: () => addTargets([t]),
							compact: true
						}, t.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl tracking-tight text-fg",
						children: "The book"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							live.length,
							" live · ",
							pipe.filter((p) => p.status === "keyed").length,
							" keyed. Status lives on this browser."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							addCustom();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: custom,
							placeholder: "Name you found — clinic, NP, faculty",
							onChange: (e) => setCustom(e.target.value),
							"aria-label": "Add a name to the book"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							variant: "secondary",
							disabled: !custom.trim(),
							className: "shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), "Add"]
						})]
					}),
					pipe.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Empty. Load the week, or add a name you just found."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: pipe.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md bg-bg-sunken px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-fg",
										children: row.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-0.5 text-xs text-muted",
										children: [
											PREY_LABEL[row.prey],
											" · ",
											row.city || RANGE_LABEL[row.range],
											row.who ? ` · ${row.who}` : ""
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => void copy(`p-${row.id}`, targetDm(row)),
												children: copied === `p-${row.id}` ? "Copied" : "DM"
											}),
											row.site ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
												href: row.site,
												children: "Site"
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: mailDraft(row),
												className: "inline-flex h-9 items-center rounded-sm px-2 text-xs font-medium text-muted hover:text-fg",
												children: "Mail"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "h-9 px-2 text-xs text-muted hover:text-danger",
												onClick: () => remove(row.id),
												children: "Drop"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-1",
									children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStatus(row.id, s),
										className: row.status === s ? "h-8 rounded-full bg-ink px-2.5 text-[11px] font-medium text-bg" : "h-8 rounded-full bg-surface px-2.5 text-[11px] font-medium text-muted hover:text-fg",
										children: STATUS_LABEL[s]
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "mt-2 h-9",
									value: row.note,
									placeholder: "Note — who you wrote, when they replied",
									onChange: (e) => setNote(row.id, e.target.value),
									"aria-label": `Note for ${row.name}`
								})
							]
						}, row.id))
					})
				]
			})
		]
	});
}
function HuntLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex h-9 items-center gap-1 rounded-sm bg-surface px-2 text-xs font-medium text-fg hover:bg-surface-2",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
	});
}
function TargetRow({ t, copied, onCopy, onAdd, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: compact ? "border-t border-border pt-3 first:border-0 first:pt-0" : "rounded-md bg-bg-sunken px-3 py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted",
						children: [
							PREY_LABEL[t.prey],
							" · ",
							t.city,
							" · ",
							t.who
						]
					}),
					compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: t.hook
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => void onCopy(t.id, targetDm(t)),
						children: [copied === t.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied === t.id ? "Copied" : "DM"]
					}),
					t.site ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntLink, {
						href: t.site,
						children: "Site"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: onAdd,
						children: "Book"
					})
				]
			})]
		})
	});
}
function LaunchDesk() {
	const posts = (0, import_react.useMemo)(() => launchPosts(), []);
	const [copied, setCopied] = (0, import_react.useState)("");
	async function copy(label, text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			window.setTimeout(() => setCopied(""), 1600);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "Public rails"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-xl tracking-tight text-fg",
						children: "Pitch page, source, pay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Post these yourself. Do not cold-email the Hunt directory. Two-drug collisions stay free; founding is $79 once. Educational — not a charting system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-medium text-accent hover:underline",
								href: SITE.url,
								target: "_blank",
								rel: "noreferrer",
								children: "Pitch page"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" — ", SITE.url]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-medium text-accent hover:underline",
								href: SITE.gamma,
								target: "_blank",
								rel: "noreferrer",
								children: "Pitch deck"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: " — Gamma webpage"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-medium text-accent hover:underline",
								href: SITE.gammaCard,
								target: "_blank",
								rel: "noreferrer",
								children: "Social card"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: " — square, for X / LinkedIn"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: OPERATOR.payLine
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy("url", SITE.url),
							children: [copied === "url" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied === "url" ? "Copied" : "Copy URL"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy("repo", SITE.repo),
							children: copied === "repo" ? "Copied" : "Copy repo"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl tracking-tight text-fg",
					children: "Try these three"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 grid gap-3 sm:grid-cols-3",
					children: TRY_THREE.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg-sunken px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-wide text-accent",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-fg",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: t.punch
							})
						]
					}, t.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
								children: p.channel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-lg tracking-tight text-fg",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: p.where
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: () => void copy(p.id, p.text),
								children: [copied === p.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied === p.id ? "Copied" : "Copy"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.compose,
									target: "_blank",
									rel: "noreferrer",
									children: ["Open", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 max-h-64 overflow-auto whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-sans text-sm leading-relaxed text-fg",
						children: p.text
					})]
				}, p.id))
			})
		]
	});
}
var ISSUED_KEY = "firstpass.issued.v1";
var PAY_NOTE_KEY = "firstpass.payNote";
var PIN_KEY = "firstpass.foundry.pin";
function loadIssued() {
	try {
		const raw = localStorage.getItem(ISSUED_KEY);
		return (raw ? JSON.parse(raw) : []).filter((r) => typeof r.key === "string").map((r) => ({
			key: r.key,
			plan: typeof r.plan === "string" ? r.plan : "life",
			at: typeof r.at === "string" ? r.at : (/* @__PURE__ */ new Date()).toISOString(),
			soldTo: typeof r.soldTo === "string" ? r.soldTo : ""
		}));
	} catch {
		return [];
	}
}
function persistIssued(rows) {
	localStorage.setItem(ISSUED_KEY, JSON.stringify(rows.slice(0, 80)));
}
function Foundry() {
	const setView = useDesk((s) => s.setView);
	const [pin, setPinState] = (0, import_react.useState)("");
	const [plan, setPlan] = (0, import_react.useState)("life");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [last, setLast] = (0, import_react.useState)(null);
	const [packet, setPacket] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)("");
	const [issued, setIssued] = (0, import_react.useState)([]);
	const [payNote, setPayNote] = (0, import_react.useState)("");
	const [soldTo, setSoldTo] = (0, import_react.useState)("");
	const [names, setNames] = (0, import_react.useState)("");
	const [waiting, setWaiting] = (0, import_react.useState)(0);
	const [collected, setCollected] = (0, import_react.useState)([]);
	const [pendingMail, setPendingMail] = (0, import_react.useState)(false);
	const [mailNote, setMailNote] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("close");
	(0, import_react.useEffect)(() => {
		setIssued(loadIssued());
		setPayNote(localStorage.getItem(PAY_NOTE_KEY) || OPERATOR.payLine);
		setWaiting(loadPipe().filter((p) => p.status === "waiting").length);
		try {
			setPinState(sessionStorage.getItem(PIN_KEY) || "");
		} catch {}
	}, []);
	const dm = (0, import_react.useMemo)(() => salesDm(), []);
	const tweet = (0, import_react.useMemo)(() => launchTweet(), []);
	const invoice = (0, import_react.useMemo)(() => invoiceText({
		plan: plan === "life" ? "Founding lifetime desk" : plan === "lab" ? "Lab seat (year)" : "Pro (year)",
		price: plan === "life" ? COMMERCE.founding : plan === "lab" ? priceFor("lab", "year") : priceFor("pro", "year"),
		pay: payNote || OPERATOR.payLine,
		keyHint: last ?? void 0
	}), [
		plan,
		payNote,
		last
	]);
	const nameList = names.split(/[\n,;]+/).map((n) => n.trim()).filter(Boolean);
	function setPin(value) {
		setPinState(value);
		try {
			sessionStorage.setItem(PIN_KEY, value);
		} catch {}
	}
	function remember(rows) {
		setIssued((current) => {
			const next = [...rows, ...current].filter((row, i, all) => all.findIndex((r) => r.key === row.key) === i).slice(0, 80);
			persistIssued(next);
			return next;
		});
	}
	async function copy(label, text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			window.setTimeout(() => setCopied(""), 1600);
		} catch {}
	}
	async function collect() {
		setBusy(true);
		setErr("");
		try {
			const huntNames = loadPipe().filter((p) => p.status === "waiting").map((p) => p.name);
			const res = await collectLicenses({ data: {
				pin,
				plan,
				names,
				hunt: huntNames.join("\n")
			} });
			if (!res.ok) {
				setErr(res.reason);
				setPendingMail(false);
				return;
			}
			if (res.mail === "pending" && isFramed()) {
				setPendingMail(true);
				setMailNote("Connecting to mail…");
			} else if (res.mail === "pending" || res.mail === "off") {
				setPendingMail(false);
				setMailNote(res.stripeLive ? "Mail scan needs this desk opened from Grok. Card sales still collected." : "Mail scan needs this desk opened from Grok. Stripe is not live here — hunt waiting and pasted names still key.");
			} else if (res.mail === "login") {
				setPendingMail(false);
				setMailNote("Continue with Grok to scan Venmo / Cash App / PayPal.");
				redirectToLoginIfRequired({
					ok: false,
					data: null,
					loginRequired: true,
					loginUrl: res.loginUrl
				});
			} else if (res.mail === "ok") {
				setPendingMail(false);
				const n = res.rows.filter((r) => r.source === "venmo" || r.source === "cashapp" || r.source === "paypal").length;
				setMailNote(n ? `${n} written payment${n === 1 ? "" : "s"} in mail matched a license price.` : "No $79 / plan-price receipts in mail.");
			}
			setCollected(res.rows);
			if (res.rows.length) {
				remember(res.rows.map((row) => ({
					key: row.key,
					plan: row.plan,
					at: row.at || (/* @__PURE__ */ new Date()).toISOString(),
					soldTo: row.soldTo
				})));
				setLast(res.rows[0]?.key ?? null);
				const text = fulfillKeys(res.rows.map((row) => ({
					key: row.key,
					soldTo: row.soldTo
				})));
				setPacket(text);
				const byName = new Map(res.rows.map((row) => [row.soldTo.toLowerCase(), row.key]));
				const pipe = loadPipe().map((p) => {
					if (p.status !== "waiting") return p;
					const key = byName.get(p.name.toLowerCase());
					if (!key) return p;
					return {
						...p,
						status: "keyed",
						note: key
					};
				});
				savePipe(pipe);
				setWaiting(pipe.filter((p) => p.status === "waiting").length);
				await copy("fulfill", text);
			}
		} catch {
			setErr("Could not collect licenses. Try again.");
			setPendingMail(false);
		} finally {
			setBusy(false);
		}
	}
	useRefetchWhenConnectorReady(pendingMail, () => void collect());
	async function mint() {
		setBusy(true);
		setErr("");
		try {
			const res = await mintLicenseKey({ data: {
				pin,
				plan,
				soldTo
			} });
			if (!res.ok) {
				setErr(res.reason);
				return;
			}
			remember([{
				key: res.key,
				plan: res.plan,
				at: (/* @__PURE__ */ new Date()).toISOString(),
				soldTo: soldTo.trim()
			}]);
			setLast(res.key);
			const text = fulfillKey({
				key: res.key,
				soldTo
			});
			setPacket(text);
			await copy("fulfill", text);
		} catch {
			setErr("Could not mint. Try again.");
		} finally {
			setBusy(false);
		}
	}
	async function draftMail() {
		setBusy(true);
		setErr("");
		try {
			const res = await draftCollected({ data: {
				pin,
				rows: collected
			} });
			if (!res.ok) {
				setErr(res.reason);
				if ("loginUrl" in res && res.loginUrl) redirectToLoginIfRequired({
					ok: false,
					data: null,
					loginRequired: true,
					loginUrl: res.loginUrl
				});
				return;
			}
			setMailNote(`${res.drafted} Gmail draft${res.drafted === 1 ? "" : "s"} ready to send.`);
		} catch {
			setErr("Could not draft in Gmail.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-[200px_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
					src: "/plates/hero.jpg",
					alt: "",
					className: "h-36 w-full sm:h-full min-h-36"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-5 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
							children: "Operator desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-serif text-3xl tracking-tight text-fg",
							children: "Find buyers. Post. Licenses mint themselves."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: "One PIN, one collect. Card sales are already signed. Venmo, Cash App, and PayPal receipts in mail mint the same key twice — no per-sale click."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1",
							children: [
								["hunt", "Hunt"],
								["launch", "Launch"],
								["close", "Close"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTab(id),
								className: tab === id ? "h-10 rounded-full bg-ink px-4 text-sm font-medium text-bg" : "h-10 rounded-full bg-bg-sunken px-4 text-sm font-medium text-muted hover:text-fg",
								children: label
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 block text-sm text-accent hover:underline",
							onClick: () => setView("plans"),
							children: "Back to licenses"
						})
					]
				})]
			})
		}), tab === "hunt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntDesk, {}) : tab === "launch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaunchDesk, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseDesk, {
			pin,
			setPin,
			plan,
			setPlan,
			busy,
			err,
			last,
			copied,
			issued,
			payNote,
			setPayNote,
			soldTo,
			setSoldTo,
			names,
			setNames,
			nameCount: nameList.length,
			waiting,
			collected,
			mailNote,
			pendingMail,
			dm,
			tweet,
			invoice,
			fulfillment: packet,
			copy,
			mint,
			collect: () => void collect(),
			draftMail: () => void draftMail()
		})]
	});
}
function CloseDesk({ pin, setPin, plan, setPlan, busy, err, last, copied, issued, payNote, setPayNote, soldTo, setSoldTo, names, setNames, nameCount, waiting, collected, mailNote, pendingMail, dm, tweet, invoice, fulfillment, copy, mint, collect, draftMail }) {
	const extra = [waiting ? `${waiting} waiting in the hunt` : "", nameCount ? `${nameCount} pasted` : ""].filter(Boolean).join(" · ");
	const canDraft = collected.some((r) => r.email && !r.mailed && r.source !== "stripe");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl tracking-tight text-fg",
					children: "Who pays — copy their DM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: BUYERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: b.who
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: b.why
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy(b.who, buyerDm(b.who)),
							children: [copied === b.who ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied === b.who ? "Copied" : "DM"]
						})]
					}, b.who))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-xl tracking-tight text-fg",
							children: "Cold DM / email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy("dm", dm),
							children: copied === "dm" ? "Copied" : "Copy"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted",
						children: dm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-medium uppercase tracking-wide text-muted",
							children: "Launch post"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy("tweet", tweet),
							children: copied === "tweet" ? "Copied" : "Copy post"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted",
						children: tweet
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-xl tracking-tight text-fg",
					children: "How a sale closes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeLiveCard, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						["1. Pitch", "Send the buyer DM. Founding is $79 once — cheaper to say yes than $12/mo."],
						["2. Collect", `Card on the desk, or ${OPERATOR.payLine}.`],
						["3. Fulfill", "PIN, then Collect. Stripe, mail receipts at a license price, and hunt waiting all key in one pass."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg-sunken px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-wide text-accent",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: d
						})]
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-xs font-medium text-muted",
					htmlFor: "pay-note",
					children: "How you get paid (goes on the invoice you copy — not shown to strangers unless you send it)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "pay-note",
					className: "mt-1.5",
					value: payNote,
					placeholder: OPERATOR.payLine,
					onChange: (e) => {
						setPayNote(e.target.value);
						localStorage.setItem(PAY_NOTE_KEY, e.target.value);
					}
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-xl tracking-tight text-fg",
						children: "Automatic licenses"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "One PIN. Collect pulls paid cards, scans Venmo / Cash App / PayPal for $79 and the other plan prices, and keys everyone waiting in the hunt. Collecting twice returns the same keys."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2 sm:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "operator-pin",
						type: "password",
						autoComplete: "off",
						placeholder: "Operator PIN",
						value: pin,
						onChange: (e) => setPin(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter" && pin && !busy) collect();
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-1",
						children: [
							["life", "Life"],
							["pro", "Pro"],
							["lab", "Lab"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPlan(id),
							className: plan === id ? "h-11 rounded-sm bg-ink text-bg text-sm font-medium" : "h-11 rounded-sm bg-bg-sunken text-muted text-sm font-medium hover:text-fg",
							children: label
						}, id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4 w-full sm:w-auto",
					onClick: collect,
					disabled: busy || !pin,
					children: busy || pendingMail ? "Collecting…" : extra ? `Collect licenses · ${extra}` : "Collect licenses"
				}),
				mailNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: mailNote
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-5 block text-xs font-medium text-muted",
					htmlFor: "batch-names",
					children: "Extra names — only if they paid and there is no receipt in mail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "batch-names",
					value: names,
					rows: 4,
					placeholder: "Salish Ketamine\nNate at Fairhaven\nUW SoP resident",
					onChange: (e) => setNames(e.target.value),
					className: cn("mt-1.5 flex w-full rounded-md bg-surface-2 px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)]", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40")
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: err
				}) : null,
				last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 rounded-md bg-ok-soft px-3 py-2 font-mono text-sm text-ok",
					children: [last, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-sans text-xs",
						children: "fulfillment copied"
					})]
				}) : null,
				collected.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: collected.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-fg",
								children: row.soldTo || "License"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted",
								children: row.key
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-wide text-muted",
							children: row.source
						})]
					}, row.key))
				}) : null,
				fulfillment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium uppercase tracking-wide text-muted",
						children: "Fulfillment to paste back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [canDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: draftMail,
							disabled: busy || !pin,
							children: "Draft in Gmail"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => void copy("fulfill", fulfillment),
							children: copied === "fulfill" ? "Copied" : "Copy fulfillment"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-2 max-h-56 overflow-auto whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-sans text-sm leading-relaxed text-fg",
					children: fulfillment
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "cursor-pointer text-sm font-medium text-muted hover:text-fg",
						children: "One-off mint"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2 sm:grid-cols-[1fr_auto]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "sold-to",
							value: soldTo,
							placeholder: "Clinic name, NP, student — whoever just paid",
							onChange: (e) => setSoldTo(e.target.value)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => void mint(),
							disabled: busy || !pin,
							children: busy ? "Minting…" : "Mint one"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium uppercase tracking-wide text-muted",
						children: "Invoice to send"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => void copy("inv", invoice),
						children: copied === "inv" ? "Copied" : "Copy invoice"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-2 whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-mono text-xs leading-relaxed text-fg",
					children: invoice
				})
			]
		}),
		issued.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-wide text-muted",
					children: "Issued on this browser"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => void copy("all", fulfillKeys(issued.map((row) => ({
						key: row.key,
						soldTo: row.soldTo
					})))),
					children: "Copy all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: issued.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center justify-between gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-fg",
							children: row.key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								row.soldTo ? `${row.soldTo} · ` : "",
								row.plan,
								" · ",
								row.at.slice(0, 10)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => void copy("fulfill", fulfillKey({
								key: row.key,
								soldTo: row.soldTo
							})),
							children: "Copy"
						})
					]
				}, row.key))
			})]
		}) : null
	] });
}
function StripeLiveCard() {
	const [mode, setMode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		stripeStatus().then((s) => {
			if (live) setMode(s.mode);
		}).catch(() => {
			if (live) setMode("off");
		});
		return () => {
			live = false;
		};
	}, []);
	const origin = typeof window !== "undefined" ? window.location.origin : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 text-sm leading-relaxed text-muted",
		children: [mode === "live" ? "Stripe card checkout is live. Paid sessions mint a signed key, stamp the receipt, and license the returning browser. No mint click." : mode === "test" ? "Stripe is in test mode. Use a test card — no live charge. Fulfillment still auto-mints." : mode === "off" ? "Stripe is not live. Set STRIPE_SECRET_KEY on the deploy (and STRIPE_WEBHOOK_SECRET for the webhook). Venmo still closes a sale — Collect scans mail and keys the hunt." : "Checking Stripe…", origin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			" ",
			"Webhook: ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs text-fg",
				children: [origin, "/api/stripe/webhook"]
			})
		] }) : null]
	});
}
var ROUND_SETTINGS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "clinic",
		label: "Clinic"
	},
	{
		id: "ward",
		label: "Ward"
	},
	{
		id: "mat",
		label: "MAT"
	},
	{
		id: "street",
		label: "Street"
	},
	{
		id: "kitchen",
		label: "Kitchen"
	}
];
function roundNeedsPro(r) {
	return sampleNeedsPro(r);
}
var ROUNDS = [
	{
		id: "r-oral-ketamine",
		title: "The oral ketamine trap",
		setting: "clinic",
		stem: "A ketamine clinic switches a patient from IM to a compounded oral lozenge. The patient also takes clarithromycin for a lingering cough. Two hours later they are far more dissociated than any IM session.",
		ask: "Why did the same milligram look so different by mouth?",
		teach: "Oral ketamine is a sensitive CYP3A4 first-pass victim. Clarithromycin is a strong 3A4 inhibitor. IV/IM mostly skip gut 3A4; the lozenge does not. Put the pair on the desk, flip to oral, and read the concentration sketch — overlay IV. Teal should climb toward the ghost IV line.",
		drugIds: ["ketamine", "clarithromycin"],
		lane: "nmda",
		ketamineRoute: "oral",
		blurb: "First-pass 3A4"
	},
	{
		id: "r-grapefruit",
		title: "Breakfast and a lozenge",
		setting: "kitchen",
		stem: "Same oral ketamine, no macrolide. The patient had a tall grapefruit juice with breakfast. The session runs long and hot.",
		ask: "Is grapefruit a 3A4 story in the liver, or in the gut?",
		teach: "Furanocoumarins knock out intestinal CYP3A4. IV ketamine barely moves. Oral ketamine, buspirone, and simvastatin do. The desk should treat grapefruit as a perpetrator, not a food footnote.",
		drugIds: ["grapefruit", "ketamine"],
		lane: "food",
		ketamineRoute: "oral",
		blurb: "Intestinal 3A4 knockout"
	},
	{
		id: "r-dxm-pm",
		title: "The cough syrup that lingered",
		setting: "ward",
		stem: "A 2D6 poor metabolizer takes extra-strength dextromethorphan. No SSRI on the list. They are still dissociated at hour six, with clonus.",
		ask: "Where is the perpetrator if there is no second drug?",
		teach: "A 2D6 PM is the perpetrator. Parent DXM (serotonergic) is not converted to dextrorphan (more NMDA). Flip CYP2D6 to poor — the finding should appear without adding a second molecule. Then tap q8h on the curve: t½ stretches to ~12 h and Rac climbs.",
		drugIds: ["dextromethorphan"],
		lane: "phenotype",
		phenotypes: { CYP2D6: "PM" },
		blurb: "Phenotype as perpetrator"
	},
	{
		id: "r-xylazine",
		title: "Naloxone did not wake them",
		setting: "street",
		stem: "Overdose on a fentanyl fold. Two naloxone doses restore some respiratory effort. The person stays sedated, bradycardic, and will not sit up. The fold later tests xylazine-positive.",
		ask: "What did naloxone reverse, and what did it not?",
		teach: "Naloxone displaces the μ-agonist. Xylazine is an α2-agonist — sedation and airway loss are independent of the opioid receptor. Extra naloxone will not reverse an α2. Support ventilation.",
		drugIds: ["xylazine", "fentanyl"],
		lane: "street",
		blurb: "α2 sedation naloxone will not reverse"
	},
	{
		id: "r-mdma-ssri",
		title: "The SSRI that stole the roll",
		setting: "clinic",
		stem: "A patient on paroxetine takes MDMA. The entactogen is muted. Later they are agitated, sweaty, and hyperreflexic.",
		ask: "Is this a 2D6 story, a serotonin story, or both?",
		teach: "Both. Paroxetine is a strong 2D6 inhibitor (MDMA is a 2D6 victim) and an SSRI. You get stacked parent MDMA plus serotonergic PD. The desk should fire PK and PD on the same pair.",
		drugIds: ["mdma", "paroxetine"],
		lane: "entactogen",
		blurb: "2D6 blockade plus serotonin"
	},
	{
		id: "r-codeine-um",
		title: "The cough syrup that became morphine",
		setting: "ward",
		stem: "A CYP2D6 ultrarapid metabolizer is given codeine after a dental extraction. Respiratory depression follows a labeled dose.",
		ask: "What has to be true of a prodrug for a UM to be the danger, not the PM?",
		teach: "Codeine analgesia is morphine. 2D6 activation — a UM makes too much, a PM makes almost none. Contrast DXM, where the PM stacks parent. Flip 2D6 to UM on codeine and read the finding.",
		drugIds: ["codeine"],
		lane: "phenotype",
		phenotypes: { CYP2D6: "UM" },
		blurb: "Ultrarapid prodrug activation"
	},
	{
		id: "r-clozapine-smoke",
		title: "The quit that poisoned them",
		setting: "ward",
		stem: "A patient on a stable clozapine dose stops smoking in hospital. Four days later they are drooling, tachycardic, and the level has doubled.",
		ask: "What was inducing 1A2, and what happens when it leaves?",
		teach: "Tobacco PAHs induce CYP1A2. Nicotine patches do not. Stopping smoke removes the inducer — clozapine (and olanzapine, theophylline) rebound. The host smoke toggle is the perpetrator.",
		drugIds: ["clozapine"],
		lane: "smoke",
		smoking: true,
		blurb: "1A2 induction, then rebound"
	},
	{
		id: "r-naltrexone",
		title: "The Vivitrol surprise",
		setting: "mat",
		stem: "A patient gets IM naltrexone, then takes oxycodone for a sprain three days later. No analgesia. They feel sick.",
		ask: "What does an antagonist do to a full agonist already on the receptor — and to one that arrives later?",
		teach: "Naltrexone occupies μ. Late agonist is blocked (no analgesia). If the patient was dependent, displacement is precipitated withdrawal. This is PD, not CYP.",
		drugIds: ["naltrexone", "oxycodone"],
		lane: "mat",
		blurb: "Antagonist × agonist"
	},
	{
		id: "r-tyramine",
		title: "The cheese plate",
		setting: "kitchen",
		stem: "A patient on phenelzine eats aged cheddar and tap beer at a wedding. Twenty minutes later: pounding headache, stiff neck, blood pressure in the stroke range.",
		ask: "Which enzyme in the gut was supposed to destroy the tyramine?",
		teach: "MAO-A in gut and liver. An irreversible MAOI lets dietary tyramine into the circulation. The desk maps tyramine foods as a perpetrator, not a recipe.",
		drugIds: ["tyramine-foods", "phenelzine"],
		lane: "food",
		blurb: "MAO-A and the cheese effect"
	},
	{
		id: "r-loperamide",
		title: "The Imodium that reached the brain",
		setting: "street",
		stem: "Someone chasing opioid effects takes high-dose loperamide with quinidine. They get a high — and a long QT.",
		ask: "What two gates keep loperamide peripheral at labeled doses?",
		teach: "P-gp efflux and CYP3A4. Knock either (quinidine, ritonavir, grapefruit at extremes) and Imodium becomes a central μ-agonist with QT. The map is transporter plus CYP, not 'just an antidiarrheal.'",
		drugIds: ["loperamide", "quinidine"],
		lane: "street",
		blurb: "P-gp knockout"
	},
	{
		id: "r-cimetidine",
		title: "The wrong H2 blocker",
		setting: "ward",
		stem: "Tizanidine is added for spasm. The patient has been taking OTC cimetidine for heartburn. They get hypotensive and somnolent. Famotidine would not have done this.",
		ask: "Which H2 blocker is a cytochrome bully, and which is not?",
		teach: "Cimetidine inhibits 1A2, 2D6, 3A4, P-gp. Tizanidine is a sensitive 1A2 substrate. Famotidine is the switch — put both H2 blockers on the materia and compare the enzyme rows.",
		drugIds: ["cimetidine", "tizanidine"],
		lane: "clinic",
		blurb: "OTC 1A2 bully"
	},
	{
		id: "r-warfarin-2c9",
		title: "The INR with no new drug",
		setting: "ward",
		stem: "A new warfarin start in a CYP2C9 poor metabolizer. No fluconazole, no amiodarone. The INR overshoots on a textbook dose.",
		ask: "When is the host the perpetrator?",
		teach: "S-warfarin is a sensitive 2C9 substrate. A 2C9 PM looks like a strong inhibitor of that isoform. Flip 2C9 to poor with warfarin alone.",
		drugIds: ["warfarin"],
		lane: "phenotype",
		phenotypes: { CYP2C9: "PM" },
		blurb: "2C9 PM as inhibitor"
	},
	{
		id: "r-cbd-clobazam",
		title: "Epidiolex and the sleepy benzo",
		setting: "clinic",
		stem: "A child on clobazam starts pharmaceutical CBD. Somnolence climbs. N-desmethylclobazam has stacked.",
		ask: "Which isoform is CBD bullying, and is clobazam the parent or the metabolite problem?",
		teach: "CBD is a strong CYP2C19 inhibitor. Clobazam's active metabolite is a 2C19 victim. This is a labeled pair — the desk should show 2C19 inhibition of a sensitive benzo.",
		drugIds: ["cannabidiol", "clobazam"],
		lane: "gaba",
		blurb: "2C19 metabolite stack"
	},
	{
		id: "r-poppers",
		title: "The labeled collapse",
		setting: "street",
		stem: "Sildenafil, then alkyl nitrites. Blood pressure vanishes. This is the same map as nitroglycerin.",
		ask: "Why does a 'recreational' nitrite share a contraindication with a chest-pain spray?",
		teach: "Both are nitrates. PDE5 inhibitors potentiate NO-cGMP vasodilation. Poppers are not a CYP story. The PD flag is nitrate × PDE5 — contraindicated, wait 24–48 h.",
		drugIds: ["poppers", "sildenafil"],
		lane: "street",
		blurb: "Nitrate × PDE5"
	},
	{
		id: "r-lithium-mushroom",
		title: "Lithium and the mushrooms",
		setting: "clinic",
		stem: "A stable lithium patient takes psilocybin. Seizures. Not a CYP collision.",
		ask: "If there is no shared enzyme, what is the desk scoring?",
		teach: "Pharmacodynamics. Lithium plus a serotonergic psychedelic has a documented seizure/psychotoxicity signal. The desk is allowed to fire PD with empty enzyme rows.",
		drugIds: ["lithium", "psilocybin"],
		lane: "entactogen",
		blurb: "PD without a CYP"
	},
	{
		id: "r-efavirenz",
		title: "The methadone that vanished",
		setting: "mat",
		stem: "A patient on stable methadone starts efavirenz. A week later they are in opioid withdrawal with a 'therapeutic' methadone dose.",
		ask: "Induction or inhibition — and which isoforms?",
		teach: "Efavirenz induces CYP3A4 and CYP2B6. Methadone lives on both. Inducers drop exposure; the clinical picture is withdrawal, not sedation. Contrast a 3A4 inhibitor, which raises QT risk.",
		drugIds: ["efavirenz", "methadone"],
		lane: "mat",
		blurb: "2B6/3A4 induction"
	},
	{
		id: "r-meperidine",
		title: "The labeled MAOI pair",
		setting: "ward",
		stem: "Post-op meperidine is given to a patient still within two weeks of stopping phenelzine. Agitation, fever, seizures.",
		ask: "Why is this pair on every exam, and what metabolite seizes?",
		teach: "Meperidine is serotonergic and labeled contraindicated with MAOIs. Normeperidine (3A4/2B6) is the seizure metabolite. Open the washout clock — irreversible MAOIs need 14 days.",
		drugIds: ["meperidine", "phenelzine"],
		lane: "clinic",
		blurb: "MAOI contraindication"
	},
	{
		id: "r-dexmed",
		title: "Precedex next to fentanyl",
		setting: "clinic",
		stem: "A ketamine clinic uses dexmedetomidine for recovery, with a residual fentanyl. The patient is more sedated than the opioid dose predicts. Naloxone barely changes it.",
		ask: "Which family is dexmedetomidine in, and what does that share with xylazine?",
		teach: "Clinical α2-agonist — same family as xylazine and clonidine. Naloxone reverses the opioid, not the α2. The desk should fire the α2 × opioid finding.",
		drugIds: ["dexmedetomidine", "fentanyl"],
		lane: "clinic",
		blurb: "Clinical α2 × opioid"
	},
	{
		id: "r-seven-oh",
		title: "The kratom that was not kratom",
		setting: "street",
		stem: "A '7-OH' tablet sold next to kratom. Respiratory depression with a benzo. Mitragynine at tea doses does not look like this.",
		ask: "What is 7-hydroxymitragynine doing at the μ receptor that parent mitragynine mostly is not?",
		teach: "7-OH is a much hotter μ-agonist than mitragynine. Treat it as an opioid next to benzos, alcohol, and xylazine — not as a leaf.",
		drugIds: ["seven-oh", "alprazolam"],
		lane: "street",
		blurb: "7-OH is the μ-agonist"
	},
	{
		id: "r-primidone",
		title: "The OCP that failed",
		setting: "ward",
		stem: "A patient on primidone for tremor becomes pregnant on a combined oral contraceptive that had been reliable for years.",
		ask: "What does primidone become, and what do barbiturates do to 3A4?",
		teach: "Primidone is activated to phenobarbital, a pan-CYP inducer. Ethinyl estradiol is a 3A4 victim. Induction is loss of contraceptive efficacy — same map as carbamazepine and rifampin.",
		drugIds: ["primidone", "ethinyl-estradiol"],
		lane: "clinic",
		blurb: "Barbiturate induction"
	},
	{
		id: "r-tacrolimus-gf",
		title: "The transplant and the grapefruit",
		setting: "kitchen",
		stem: "A stable tacrolimus patient drinks grapefruit juice for a week. Troughs jump. No new prescription.",
		ask: "Is this hepatic 3A4, or the gut?",
		teach: "Grapefruit knocks out intestinal CYP3A4 and mostly spares the liver. Tacrolimus is a narrow-index oral 3A4 victim. Put the pair on the desk — AUCR should rise from F, not from a longer t½. Overlay is quiet because this is not a ketamine route story; the curve itself is the lesson.",
		drugIds: ["tacrolimus", "grapefruit"],
		lane: "food",
		blurb: "NTI gut 3A4"
	},
	{
		id: "r-dairy-cipro",
		title: "The yogurt and the course",
		setting: "kitchen",
		stem: "A UTI on ciprofloxacin. The patient takes every dose with breakfast yogurt. Day three, still dysuric. Cultures persist.",
		ask: "Is this CYP1A2, or did the dose never arrive?",
		teach: "Cipro is a 1A2 inhibitor — that row is for tizanidine and clozapine. Dairy is gut chelation. Calcium in milk and yogurt binds the fluoroquinolone. Put milk + Cipro on the desk. Tetracycline is the older, worse version of the same trap.",
		drugIds: ["dairy", "ciprofloxacin"],
		lane: "food",
		blurb: "Dietary calcium chelation"
	},
	{
		id: "r-kale-inr",
		title: "The smoothie that dumped INR",
		setting: "kitchen",
		stem: "Stable warfarin. A New Year kale-smoothie phase. INR falls from 2.4 to 1.3. No new prescription, no St. John's wort.",
		ask: "Is this 2C9, or the cofactor?",
		teach: "Warfarin blocks vitamin K recycling. Leafy greens supply phylloquinone and INR falls — the antidote in a blender. Put leafy greens + warfarin on the desk. The K gummy is a different row. Not CYP2C9.",
		drugIds: ["leafy-greens", "warfarin"],
		lane: "food",
		blurb: "Dietary vitamin K"
	},
	{
		id: "r-allegra-juice",
		title: "The juice that stole Allegra",
		setting: "kitchen",
		stem: "Fexofenadine every morning with a tall apple juice. Allergies are worse, not better. No 3A4 inhibitor on the list.",
		ask: "If it is not CYP, which transporter is the perpetrator?",
		teach: "OATP2B1/1A2. Fruit juice cuts fexofenadine absorption — loss of effect, not a CYP rise. Grapefruit also knocks out gut 3A4 for other drugs; apple and orange juice do not. Put apple juice + Allegra on the desk. The P-gp arrow would have been the wrong direction.",
		drugIds: ["oatp-juice", "fexofenadine"],
		lane: "food",
		blurb: "OATP, not CYP"
	},
	{
		id: "r-coffee-t4",
		title: "Espresso with Synthroid",
		setting: "kitchen",
		stem: "Levothyroxine at 0600 with a double espresso. TSH climbs. The patient swears they never miss a dose.",
		ask: "Is this 3A4, or did the tablet never dissolve into plasma?",
		teach: "Polyphenols bind T4 in the gut (Benvenga). Caffeine-as-1A2-substrate is a different bottle on this shelf. Put coffee + levothyroxine on the desk. Wait 30–60 minutes. Soy formula is the cousin row.",
		drugIds: ["coffee", "levothyroxine"],
		lane: "food",
		blurb: "Tannin binding"
	},
	{
		id: "r-protein-ldopa",
		title: "The steak that stole 'on' time",
		setting: "kitchen",
		stem: "Parkinson's on Sinemet. Motor fluctuations cluster after protein-heavy lunches. No new inhibitor.",
		ask: "Which transporter is competing, and where?",
		teach: "LAT1. Large-neutral amino acids compete with levodopa in the gut and at the blood-brain barrier. Put a protein meal + levodopa on the desk. Iron chelation is a different mineral row. Not CYP.",
		drugIds: ["protein-meal", "levodopa"],
		lane: "food",
		blurb: "LAT1 competition"
	},
	{
		id: "r-felodipine",
		title: "The Lancet juice",
		setting: "kitchen",
		stem: "Felodipine for hypertension. A week of breakfast grapefruit. Ankles swell, pressure runs low. No new prescription.",
		ask: "Why is felodipine the teaching CCB, and would IV felodipine have moved?",
		teach: "Bailey 1991 — the paper that put grapefruit on the map. Felodipine is a sensitive intestinal 3A4 first-pass victim. F rises; t½ barely does. Overlay the idea of IV: hepatic 3A4 is largely spared. Put grapefruit + felodipine on the desk.",
		drugIds: ["grapefruit", "felodipine"],
		lane: "food",
		blurb: "The original juice victim"
	},
	{
		id: "r-ng-dilantin",
		title: "The feed that unbound Dilantin",
		setting: "ward",
		stem: "Intubated, phenytoin by NG, continuous Jevity. Levels crash. Seizures return. 2C9 looks untouched.",
		ask: "Where did the dose go if the enzyme did not change?",
		teach: "Bauer 1982. Continuous tube feeds bind phenytoin in the lumen. Hold the feed, flush, separate. Put enteral feed + phenytoin on the desk. Not CYP2C9. Warfarin and Synthroid lose the dose the same way.",
		drugIds: ["enteral-feed", "phenytoin"],
		lane: "food",
		blurb: "Tube-feed binding"
	},
	{
		id: "r-ibogaine-methadone",
		title: "The flood and the QT",
		setting: "street",
		stem: "Unsupervised ibogaine next to methadone. Prolonged QTc, then arrest. Both are 2D6/3A4 stories with a QT flag.",
		ask: "What does the concentration sketch add that the collision card does not?",
		teach: "Ibogaine is a 2D6 victim to noribogaine. Methadone is 2B6/3A4 with a long t½. Stacked QT plus stacked parent. Put them on the desk, then tap q24h — methadone Rac is ~2× even without a perpetrator.",
		drugIds: ["ibogaine", "methadone"],
		lane: "nmda",
		blurb: "2D6 + QT stack"
	},
	{
		id: "r-dirty-30",
		title: "The pill that was not oxycodone",
		setting: "street",
		stem: "Someone takes a blue M30 they bought as a perc 30. Two naloxone doses bring some breaths back. They stay down, bradycardic, and will not sit up. The fold later tests fentanyl and xylazine — not oxycodone.",
		ask: "What is a dirty 30, and why did naloxone only do half the job?",
		teach: "Street tablets stamped M30 are typically illicit fentanyl ± xylazine, not pharmaceutical oxycodone. Search dirty 30 — the row is the tablet as sold. Put xylazine next to it. Naloxone reverses the μ-agonist; the α2 airway loss stays. Percocet on the desk is the real oxycodone + APAP combo — a different collision (2E1 / alcohol), not this one.",
		drugIds: ["dirty-30", "xylazine"],
		lane: "street",
		blurb: "Pressed M30 ≠ perc 30"
	},
	{
		id: "r-cocaethylene",
		title: "The mixer that lasts longer",
		setting: "street",
		stem: "Cocaine, then drinks. Hours later they seize with a wide-complex rhythm. Parent cocaine should have been gone.",
		ask: "What did ethanol do to cocaine that a concentration sketch of parent drug will not show?",
		teach: "Alcohol hijacks CES1 hydrolysis and transesterifies cocaine to cocaethylene — longer t½, more arrhythmia and seizure than parent. Put cocaine + ethanol on the desk. The finding is PD, not a 3A4 row. Open the metabolite tree: benzoylecgonine is the inactive urine marker; cocaethylene is the toxic species.",
		drugIds: ["cocaine", "ethanol"],
		lane: "street",
		blurb: "Cocaethylene"
	},
	{
		id: "r-speedball",
		title: "Awake, then not",
		setting: "street",
		stem: "Cocaine and a fentanyl fold. They are talking, hypertensive, pupils a mix. Twenty minutes later they are apneic. Bystanders say they 'looked fine.'",
		ask: "Why did the stimulant not protect the airway?",
		teach: "Speedball: the stimulant masks sedation while the opioid still depresses respiration. Apnea lands when cocaine wears off. Put cocaine + fentanyl on the desk — that pair used to fire nothing; it should now fire the speedball finding. Methamphetamine plus an opioid is the goofball cousin.",
		drugIds: ["cocaine", "fentanyl"],
		lane: "street",
		blurb: "Speedball masking"
	},
	{
		id: "r-bup-precip",
		title: "The Suboxone that made them sicker",
		setting: "mat",
		stem: "Office-based start. Last use was a fentanyl fold that morning. Two milligrams of buprenorphine and they are yawning, puking, and begging to leave. Staff says the dose was too low.",
		ask: "Is this too little buprenorphine — or the wrong occupancy?",
		teach: "Buprenorphine is a high-affinity partial agonist. On a fentanyl load it displaces the full agonist and precipitates withdrawal. The desk should fire precipitated withdrawal, not stacked μ milligrams. Search suboxone — that row is the partial agonist. This is not a dosing protocol.",
		drugIds: ["buprenorphine", "fentanyl"],
		lane: "mat",
		blurb: "Failed induction"
	},
	{
		id: "r-methadone-seroquel",
		title: "Seroquel for sleep on the OTP",
		setting: "mat",
		stem: "Stable methadone. A covering prescriber adds quetiapine 100 mg at night for insomnia. Two weeks later: palpitations, a long QTc, no new illicit use.",
		ask: "If the methadone dose did not change, what stacked?",
		teach: "Methadone is a known-QT opioid. Quetiapine is a 3A4-sensitive QT drug often used off-label for sleep in MAT. Put them on the desk — you want the QT finding, and the 3A4 competitive/perpetrator row if the covering drug is a 3A4 victim. Hydroxyzine and citalopram are the same trap.",
		drugIds: ["methadone", "quetiapine"],
		lane: "mat",
		blurb: "OTP QT stack"
	},
	{
		id: "r-methadone-cbz",
		title: "The mood stabilizer that stole the dose",
		setting: "mat",
		stem: "A methadone patient starts carbamazepine for mood. Ten days later they are in withdrawal with an unchanged methadone milligram.",
		ask: "Inhibition or induction — and which isoforms does methadone live on?",
		teach: "Carbamazepine is a strong 3A4 inducer (and more). Methadone is 3A4 plus 2B6. Inducers look like a stolen take-home, not like sedation. Same map as rifampin and efavirenz. Contrast fluconazole, which raises parent and QT risk.",
		drugIds: ["methadone", "carbamazepine"],
		lane: "mat",
		blurb: "3A4 induction withdrawal"
	},
	{
		id: "r-gaba-otp",
		title: "Neurontin is not a free extra",
		setting: "mat",
		stem: "Methadone 80 mg. Gabapentin 600 mg three times a day 'for nerves,' plus a leftover alprazolam. The patient is hard to arouse at dosing. Urine is negative for fentanyl.",
		ask: "Which of those three is the opioid, and which two still count on the airway?",
		teach: "Gabapentinoids add respiratory depression next to methadone. They are not a CYP story and they are not harmless because they were written for neuropathy. Put methadone + gabapentin on the desk — the gabapentinoid × opioid finding should fire. Then add alprazolam: the MAT airway triad is the three-drug stack. FDA has a warning; the desk should too.",
		drugIds: ["methadone", "gabapentin"],
		lane: "mat",
		blurb: "Gabapentinoid on OTP"
	},
	{
		id: "r-vivitrol-fent",
		title: "The shot and the leftover fold",
		setting: "mat",
		stem: "IM naltrexone on Friday. Saturday they use a fentanyl fold 'just once.' No high. Then they are sick — yawning, puking, goosebumps — and staff says the shot failed.",
		ask: "Did Vivitrol fail, or did it do exactly what occupancy does?",
		teach: "Naltrexone occupies μ for weeks. Leftover fentanyl is precipitated withdrawal and blocked analgesia, not a slip that didn't work. Put naltrexone + fentanyl on the desk. The finding is PD, not CYP. Same map as a 'just this once' oxycodone after the shot.",
		drugIds: ["naltrexone", "fentanyl"],
		lane: "mat",
		blurb: "Vivitrol leftover"
	},
	{
		id: "r-methadone-fluconazole",
		title: "The yeast cream that was a pill",
		setting: "mat",
		stem: "Stable methadone 80 mg. A dentist writes fluconazole for thrush. Two days later they nod at the window and the ECG is longer. No new illicit use.",
		ask: "Inhibition or induction — and why is the QT in the story?",
		teach: "Fluconazole is a moderate 3A4 inhibitor (and a QT drug). Methadone lives on 3A4/2B6 and is a known-QT opioid. Inhibitors raise parent and TdP risk — the opposite of rifampin, which looks like a stolen dose. Put the pair on the desk; you want PK plus QT.",
		drugIds: ["methadone", "fluconazole"],
		lane: "mat",
		blurb: "Azole on OTP"
	},
	{
		id: "r-bup-sevenoh",
		title: "The smoke-shop Suboxone",
		setting: "mat",
		stem: "Stable on a Suboxone film. They buy 7-OH tablets at the smoke shop 'because it's kratom.' Either they feel nothing, or they get sick. Urine is negative for fentanyl.",
		ask: "Is 7-OH a tea, or a μ-agonist next to a partial?",
		teach: "7-Hydroxymitragynine is a hot μ-agonist, not a leaf. Next to buprenorphine the desk should fire occupancy conflict (precipitated withdrawal / blocked high), not stacked milligrams of two prescriptions. Search 7-oh. This is not a dosing protocol.",
		drugIds: ["buprenorphine", "seven-oh"],
		lane: "mat",
		blurb: "7-OH on a film"
	},
	{
		id: "r-hcv-otp",
		title: "The hep C that did not steal the dose",
		setting: "mat",
		stem: "Methadone 90 mg. They start Epclusa for HCV. A covering clinician cuts the methadone 'because of the new liver drug.' A week later they are in withdrawal. Later the same year they start rifampin for latent TB and the dose really does fail.",
		ask: "Which ID drug dumps methadone, and which one dumps the DAA?",
		teach: "Epclusa (sofosbuvir/velpatasvir) is a P-gp story. Methadone usually does not need a cut — put methadone + Epclusa on the desk and the CYP/PD rows should stay quiet. Rifampin induces 3A4/2B6 and will dump methadone; it is also labeled contraindicated with the DAA. Swap Epclusa for rifampin to see the stolen-dose map.",
		drugIds: ["methadone", "epclusa"],
		lane: "mat",
		blurb: "HCV vs TB on OTP"
	},
	{
		id: "r-methadone-fentanyl",
		title: "The take-home and the fold",
		setting: "mat",
		stem: "Stable methadone 90 mg, take-homes for the weekend. Sunday they use a fentanyl fold 'because the dose was not holding.' Monday they are hard to arouse at dosing. Urine is fentanyl-positive. Staff says they doubled their methadone.",
		ask: "Is this a stolen extra bottle, or two full agonists on one airway?",
		teach: "A methadone take-home plus illicit fentanyl is stacked μ load — one airway, not two prescriptions. Put methadone + fentanyl on the desk. Then add xylazine: naloxone reverses the opioid, not the α2. This is not a dosing protocol.",
		drugIds: ["methadone", "fentanyl"],
		lane: "mat",
		blurb: "Take-home × supply"
	},
	{
		id: "r-paxlovid-otp",
		title: "The five-day COVID course",
		setting: "mat",
		stem: "A covering clinician starts Paxlovid for COVID. The methadone patient is in withdrawal by day three. A second patient on illicit fentanyl nods harder and is hard to arouse. Same prescription.",
		ask: "Why did one fall and the other rise?",
		teach: "Paxlovid is a five-day ritonavir boost. Fentanyl is a sensitive 3A4 substrate — parent and airway climb (Olkkola: clearance −67%). Methadone often falls anyway (2B6/UGT) — watch withdrawal, not nod. Put methadone + Paxlovid, then swap methadone for fentanyl. Opposite arrows. Not a dosing protocol.",
		drugIds: ["methadone", "paxlovid"],
		lane: "mat",
		blurb: "Paxlovid mixed arrow"
	},
	{
		id: "r-luvox-otp",
		title: "The OCD pill that made them nod",
		setting: "mat",
		stem: "Stable methadone 80 mg. Psychiatry starts fluvoxamine for OCD. Two weeks later they nod at the window and the QTc is longer. No new illicit use. A month after Luvox is stopped they are in withdrawal on the same milligram.",
		ask: "Starting and stopping — which way does the parent move?",
		teach: "Fluvoxamine is a 1A2/2C19/3A4/2B6 inhibitor. Methadone parent climbs (Bertschy 1994); stopping it looks like a stolen dose. Put methadone + fluvoxamine on the desk — you want PK plus QT plus serotonin. Fluoxetine is not the same map.",
		drugIds: ["methadone", "fluvoxamine"],
		lane: "mat",
		blurb: "Luvox bump"
	},
	{
		id: "r-phenytoin-otp",
		title: "The seizure pill that stole the dose",
		setting: "mat",
		stem: "A methadone patient seizes in the lobby. The ED starts phenytoin. Four days later they are yawning, puking, and begging for a dose increase. The methadone milligram did not change.",
		ask: "Inhibition or induction — and how fast?",
		teach: "Tong 1981: phenytoin in therapeutic doses dumps methadone within days. 3A4 plus 2B6 induction looks like a stolen take-home. Same family as carbamazepine, rifampin, and efavirenz. Put methadone + phenytoin on the desk.",
		drugIds: ["methadone", "phenytoin"],
		lane: "mat",
		blurb: "Dilantin stolen dose"
	},
	{
		id: "r-medetomidine-supply",
		title: "The tranq that is not xylazine",
		setting: "mat",
		stem: "Overdose on a fentanyl fold. Two naloxone doses restore some respiratory effort. They stay down, bradycardic, pinpoint. The fold later tests medetomidine — not xylazine.",
		ask: "Does a third naloxone finish this, or is the receptor wrong?",
		teach: "Medetomidine is the newer veterinary α2 in the supply. Same map as xylazine: naloxone reverses the μ-agonist, not the α2 airway loss. Put fentanyl + medetomidine on the desk. Support ventilation. This is not a dosing protocol.",
		drugIds: ["fentanyl", "medetomidine"],
		lane: "mat",
		blurb: "α2 in the fold"
	},
	{
		id: "r-phenergan-window",
		title: "Phenergan at the window",
		setting: "mat",
		stem: "Nausea after dosing. The nurse gives promethazine. An hour later they are harder to arouse than the methadone dose predicts. The covering clinician says it is just an antiemetic.",
		ask: "Is Phenergan free next to a known-QT opioid?",
		teach: "Promethazine is a sedating antihistamine and a possible QT drug. Next to methadone it is airway plus repolarization load — not a free nausea drop. Put methadone + promethazine on the desk. Hydroxyzine is the same trap with a louder QT flag.",
		drugIds: ["methadone", "promethazine"],
		lane: "mat",
		blurb: "Window antiemetic"
	},
	{
		id: "r-luvox-not-prozac",
		title: "Not every SSRI is Luvox",
		setting: "mat",
		stem: "Psychiatry starts fluoxetine for depression on stable methadone 80 mg. A covering clinician cuts the methadone 'because SSRIs raise it, like Luvox.' Two weeks later they are in withdrawal. A different patient on fluvoxamine really did nod.",
		ask: "Which SSRI is the OTP bump, and which one is a 2D6 story?",
		teach: "Fluvoxamine (Luvox) inhibits 1A2/2C19/3A4/2B6 and raises methadone (Bertschy 1994). Fluoxetine and paroxetine are strong 2D6 inhibitors — not the same map. Put methadone + fluvoxamine, then swap for fluoxetine. The window briefing should say Prozac is not Luvox. Not a dosing protocol.",
		drugIds: ["methadone", "fluoxetine"],
		lane: "mat",
		blurb: "SSRI ≠ Luvox"
	},
	{
		id: "r-zpak-otp",
		title: "Biaxin is not a Z-Pak",
		setting: "mat",
		stem: "Walking pneumonia on methadone 90 mg. Pharmacy substitutes clarithromycin when azithromycin is short. Three days later they nod at the window and the QTc is longer.",
		ask: "Which macrolide raises parent, and which one is mostly QT?",
		teach: "Clarithromycin is a strong 3A4 inhibitor plus a QT drug — methadone parent and repolarization both climb. Azithromycin barely touches CYP3A4; it still stacks QT. Put methadone + clarithromycin, then swap for azithromycin. The window briefing should name the difference. Not a dose.",
		drugIds: ["methadone", "clarithromycin"],
		lane: "mat",
		blurb: "Macrolide at the window"
	},
	{
		id: "r-bup-paxlovid",
		title: "The film and the COVID pills",
		setting: "mat",
		stem: "Stable Suboxone. A covering clinician starts Paxlovid. Staff cuts the film 'because ritonavir dumps methadone.' Two days later they are in withdrawal. A methadone patient on the same prescription really did get sick.",
		ask: "Same booster — why did one fall and the other should not have been cut?",
		teach: "Paxlovid is a five-day ritonavir boost. Methadone often falls (2B6/UGT) — watch withdrawal. Buprenorphine is a 3A4 substrate: parent can climb ~50% (McCance-Katz) without a withdrawal map, and tolerant patients usually need no cut. Put buprenorphine + Paxlovid on the desk, then swap for methadone. Opposite arrows. Not a dosing protocol.",
		drugIds: ["buprenorphine", "paxlovid"],
		lane: "mat",
		blurb: "Bup vs methadone on Paxlovid"
	},
	{
		id: "r-tybost-otp",
		title: "Tybost is not Norvir",
		setting: "mat",
		stem: "New Genvoya. The OTP cuts methadone 'because boosters dump it, like ritonavir.' A week later they nod at the window and the QTc is longer.",
		ask: "Which booster induces 2B6, and which one only blocks 3A4?",
		teach: "Ritonavir and Paxlovid dump methadone despite 3A4 inhibition (Kharasch). Cobicistat (Tybost) is 3A4 inhibit without 2B6 induction — parent climbs. Put methadone + cobicistat on the desk, then swap for ritonavir. The window briefing should name the difference. Not a dose.",
		drugIds: ["methadone", "cobicistat"],
		lane: "mat",
		blurb: "Cobicistat vs ritonavir"
	},
	{
		id: "r-cipro-otp",
		title: "The UTI pill that made them nod",
		setting: "mat",
		stem: "Stable methadone 90 mg. Cipro for a UTI. Two days later they nod at the window, the QTc is longer, and nobody added a street fold.",
		ask: "Is Cipro a 3A4 story, a QT story, or both?",
		teach: "Both. Ciprofloxacin is a strong 1A2 inhibitor and a weak 3A4 inhibitor plus a QT drug. Herrlin 2000 is the methadone case. Put methadone + ciprofloxacin on the desk — you want PK plus QT. Separate cations from the tablet; that is a different row. Not a free UTI pill on a known-QT opioid.",
		drugIds: ["methadone", "ciprofloxacin"],
		lane: "mat",
		blurb: "Cipro on the OTP"
	},
	{
		id: "r-aza-allo",
		title: "The gout pill on a transplant thiopurine",
		setting: "clinic",
		stem: "Stable ulcerative colitis on azathioprine. A covering clinician starts allopurinol for gout. Two weeks later the WBC is 1.1 and they are febrile.",
		ask: "Is this a CYP story, or a different enzyme entirely?",
		teach: "Xanthine oxidase clears 6-mercaptopurine. Allopurinol (and febuxostat) block it. The thiopurine then behaves like a multiple of the prescribed dose — pancytopenia, not a gout footnote. Put azathioprine + allopurinol on the desk. You want a contraindicated PD finding, not a 3A4 row. Swap allopurinol for febuxostat — same enzyme. Not a dosing protocol.",
		drugIds: ["azathioprine", "allopurinol"],
		lane: "clinic",
		blurb: "XO × thiopurine"
	},
	{
		id: "r-imdur-viagra",
		title: "The daily nitrate and the weekend pill",
		setting: "clinic",
		stem: "Imdur every morning for angina. He takes sildenafil on a Saturday. EMS finds him hypotensive and pale. Nitroglycerin in the field makes it worse.",
		ask: "Which pair is the labeled contraindication — and how long is the wait?",
		teach: "Nitrates plus PDE5 inhibitors are contraindicated — refractory hypotension, not a CYP row. Put isosorbide mononitrate + sildenafil on the desk. The wait is about 24 h after sildenafil, 48 h after tadalafil. Search Imdur or Viagra. Poppers are the same nitrate flag.",
		drugIds: ["isosorbide-mononitrate", "sildenafil"],
		lane: "clinic",
		blurb: "Nitrate × PDE5"
	},
	{
		id: "r-flonase-norvir",
		title: "The spray that became Cushing",
		setting: "clinic",
		stem: "HIV, stable on ritonavir-boosted ART. Allergies, so Flonase all winter. Moon face, high sugars, a suppressed morning cortisol. Nobody changed the HIV meds.",
		ask: "How does a nasal steroid become systemic next to a booster?",
		teach: "Swallowed fluticasone is a sensitive gut CYP3A4 first-pass victim. Ritonavir knocks that gate out; bioavailability jumps and the 'spray' is now a systemic steroid. Put fluticasone + ritonavir on the desk and read the concentration sketch. Beclomethasone is the usual switch. Not a dose.",
		drugIds: ["fluticasone", "ritonavir"],
		lane: "clinic",
		blurb: "ICS × booster"
	},
	{
		id: "r-plavix-prilosec",
		title: "The PPI that blunted the stent",
		setting: "clinic",
		stem: "Clopidogrel after a stent. Omeprazole for reflux. Platelet testing looks like a 2C19 poor metabolizer. Nobody is a PM.",
		ask: "Activation or clearance — and which PPI is the quieter switch?",
		teach: "Clopidogrel is a 2C19 prodrug. Omeprazole and esomeprazole inhibit 2C19 and blunt activation — loss of antiplatelet effect, not bleeding. Put clopidogrel + omeprazole on the desk; you want lost activation, not a 3A4 row. Pantoprazole is the usual switch. Ticagrelor is not a prodrug.",
		drugIds: ["clopidogrel", "omeprazole"],
		lane: "clinic",
		blurb: "2C19 prodrug"
	},
	{
		id: "r-lithium-nsaid",
		title: "The ibuprofen that raised the lithium",
		setting: "clinic",
		stem: "Stable lithium 0.7 for years. A week of OTC ibuprofen for a sprain. Tremor, nausea, a trough of 1.6. Creatinine ticked up. Nobody added a cytochrome inhibitor.",
		ask: "Where is the perpetrator if there is no CYP row?",
		teach: "Lithium is renally cleared. NSAIDs drop GFR and raise the trough. ACEI and thiazides do the same. Put lithium + ibuprofen on the desk, flip CKD if you want the host to light up, and read the Levels tab — 0.6–1.2, toxic >1.5. Not a 2C9 story.",
		drugIds: ["lithium", "ibuprofen"],
		lane: "clinic",
		blurb: "TDM · NSAID retains lithium"
	},
	{
		id: "r-methadone-qt",
		title: "Seroquel for sleep on the window",
		setting: "mat",
		stem: "Methadone 110 mg. Quetiapine 200 at night for 'sleep'. Ondansetron for the nausea. A loop diuretic. The ECG is 510 ms. Potassium is 3.1.",
		ask: "Which of these is the known-risk QT drug — and what did the potassium do?",
		teach: "Methadone is known-risk and dose-related. Quetiapine and ondansetron are possible-risk. The loop diuretic is the amplifier. Put methadone + quetiapine on the desk and open the QT board. This is not Bazett — it is a stack map. Drop the antiemetic, replete K/Mg, ECG.",
		drugIds: ["methadone", "quetiapine"],
		lane: "mat",
		blurb: "QT stack on the OTP"
	},
	{
		id: "r-valproate-liver",
		title: "The mood stabilizer that failed the liver",
		setting: "ward",
		stem: "Young woman, new valproate for mania. Week three: nausea, a rising ALT, ammonia up with a near-normal bilirubin. Nobody checked a LiverTox category.",
		ask: "Is this a UGT story with lamotrigine, or a hepatotoxin?",
		teach: "Both can be true, but this stem is the hepatotoxin. Valproate is LiverTox category A — boxed, worse under 2 years and in mitochondrial disease. Put valproate on the desk, open LiverTox and Levels (50–100 µg/mL). Hyperammonemia can sit inside the range. Not first-line if she can become pregnant.",
		drugIds: ["valproate"],
		lane: "clinic",
		blurb: "LiverTox A"
	},
	{
		id: "r-clozapine-tdm",
		title: "He quit smoking and seized",
		setting: "ward",
		stem: "Clozapine 400 mg, trough 380, no seizures for a year. Admitted, no cigarettes for five days. He seizes. The trough is 980. Nobody changed the milligrams.",
		ask: "Which enzyme moved — and which way?",
		teach: "CYP1A2. Daily smoke induces it; quitting removes the induction and parent climbs. Put clozapine on the desk, flip smoke off, and read Levels (350–600, toxic >1000) plus the 1A2 row. Fluvoxamine is the drug version of the same trap. Not a dose protocol — a TDM story.",
		drugIds: ["clozapine"],
		lane: "smoke",
		smoking: true,
		blurb: "1A2 quit rebound"
	},
	{
		id: "r-pheno-codeine",
		title: "The genotype that lied",
		setting: "clinic",
		stem: "CYP2D6 *1/*1, reported NM. Codeine for a dental extraction. She also takes paroxetine. No analgesia, then a day of jitter and a high parent codeine. Someone says 'the PGx test failed.'",
		ask: "Did the genotype change?",
		teach: "No. Paroxetine is a strong 2D6 inhibitor. A normal metabolizer on paroxetine is a phenotypic PM — phenoconversion. Codeine needs 2D6 to become morphine, so analgesia fails and parent stacks. Put paroxetine + codeine on the desk. The Pheno tab should read NM genotype → PM-like. CPIC still lists the lab.",
		drugIds: ["paroxetine", "codeine"],
		lane: "phenotype",
		blurb: "2D6 phenoconversion"
	},
	{
		id: "r-hunter",
		title: "Clonus, not a plus-table",
		setting: "ward",
		stem: "SSRI for years. Recreational MDMA. ED: inducible clonus, diaphoresis, tremor, reflexes that scare the intern. No lead-pipe rigidity. Someone wants dantrolene for NMS.",
		ask: "Hunter or NMS?",
		teach: "Hunter. Serotonergic agent + inducible clonus + diaphoresis is enough. Hyperreflexia and clonus are serotonin; NMS is bradyreflexia and lead-pipe rigidity on a dopamine blocker, slower onset. Put MDMA + sertraline on the desk and open Hunter. Cyproheptadine is adjunct. This is not Sternbach.",
		drugIds: ["mdma", "sertraline"],
		lane: "entactogen",
		blurb: "Hunter criteria"
	},
	{
		id: "r-uds-methadone",
		title: "The cup that stayed negative",
		setting: "mat",
		stem: "Methadone 110 mg, supervised. The opiate immunoassay is negative. A counselor says they dunked the bottle. EDDP was never ordered. The fentanyl strip is also negative.",
		ask: "Is a negative morphine-class cup proof they skipped the dose?",
		teach: "Methadone is not morphine. The opiate EIA should stay negative on a take-home. EDDP is the metabolite that proves they swallowed it. Fentanyl is a different strip; nitazenes often miss that too. Put methadone on the desk and open UDS. Saitman 2014 is the false-positive review — this stem is a miss, not a false-positive.",
		drugIds: ["methadone"],
		lane: "mat",
		blurb: "UDS · opiate EIA miss"
	},
	{
		id: "r-uds-seroquel",
		title: "The TCA that was not a TCA",
		setting: "mat",
		stem: "Methadone window. Seroquel 50 at night for sleep. A TCA immunoassay lights. Someone charts a TCA overdose and holds the bottle.",
		ask: "Is this a tricyclic, or the antibody?",
		teach: "Quetiapine cross-reacts on many TCA cups. Confirm with LC-MS/MS. The methadone opiate cup should still be negative — two immunoassay rows, neither of which is a dunked bottle. Put methadone + quetiapine on the desk and open UDS.",
		drugIds: ["methadone", "quetiapine"],
		lane: "mat",
		blurb: "UDS · TCA false-positive"
	},
	{
		id: "r-cows-fent",
		title: "COWS 14 and they still precipitated",
		setting: "mat",
		stem: "Office-based start. Last fentanyl fold was yesterday afternoon. COWS is 14. Two milligrams of buprenorphine and they are yawning, puking, and begging to leave. Staff says the COWS was high enough.",
		ask: "Did the integer fail, or did occupancy?",
		teach: "COWS is a score, not a receptor. Fentanyl in adipose can still occupy μ when the patient looks sick enough to start. Put buprenorphine + fentanyl on the desk. The finding is precipitated withdrawal. Open Bedside for the Wesson & Ling items. This desk is not an induction protocol.",
		drugIds: ["buprenorphine", "fentanyl"],
		lane: "mat",
		blurb: "COWS · occupancy"
	},
	{
		id: "r-lact-methadone",
		title: "They told her to stop the bottle to breastfeed",
		setting: "mat",
		stem: "Stable methadone 80 mg. Newborn in NAS protocol. A night nurse tells her to pump-and-dump and come off methadone so she can feed. She is in tears at the window.",
		ask: "Is methadone in milk a reason to stop OTP?",
		teach: "LactMed lists methadone as usually compatible. Relative infant dose is about 1–3% on a stable bottle. Neonatal opioid withdrawal is from in-utero exposure, not from usual milk doses. Put methadone on the desk, flip Lactating, open LactMed. Jones MOTHER is NAS after pregnancy, not a pump-and-dump card. Do not stop OTP to breastfeed.",
		drugIds: ["methadone"],
		lane: "mat",
		blurb: "LactMed · OTP"
	},
	{
		id: "r-nalmefene",
		title: "The antagonist that lasted too long",
		setting: "mat",
		stem: "Overdose in the lot. Staff used Opvee because Narcan was on the other cart. Two hours later they look over-reversed and still sick. Someone wants a methadone rescue dose.",
		ask: "Is this a stolen bottle, or the occupancy of nalmefene?",
		teach: "Nalmefene occupies μ longer than naloxone. After a fentanyl fold they can re-narcotize as it wears — or look over-reversed for hours. Put nalmefene + fentanyl on the desk. Reversal tab: Opvee is not Narcan. This desk is not a field protocol and not a rescue-dose card.",
		drugIds: ["nalmefene", "fentanyl"],
		lane: "mat",
		blurb: "Opvee occupancy"
	},
	{
		id: "r-otp-precip",
		title: "The COWS that lied",
		setting: "mat",
		stem: "Office start. Last pressed 30 yesterday. COWS 13. First film, then yawning and puke. Staff says the score was high enough.",
		ask: "Did the scale fail, or did occupancy?",
		teach: "Open the OTP tab. Set last agonist to fentanyl, hours to 24, COWS to 13. Occupancy can outlast a moderate score. ASAM 2020 / TIP 63 discuss timing; this desk does not time a film. Put buprenorphine + fentanyl on the desk.",
		drugIds: ["buprenorphine", "fentanyl"],
		lane: "mat",
		blurb: "OTP · occupancy"
	},
	{
		id: "r-vivitrol-early",
		title: "The shot that was not a rescue",
		setting: "mat",
		stem: "Missed methadone Friday. Monday someone wants Vivitrol so he does not leave in withdrawal. Last bottle was 72 hours ago.",
		ask: "Is three days enough after methadone?",
		teach: "Open OTP → naltrexone washout. Methadone occupancy is days. Labels discuss ~10–14 days after long-acting agonists. A shot is not a missed-bottle rescue. Put naltrexone + methadone on the desk.",
		drugIds: ["naltrexone", "methadone"],
		lane: "mat",
		blurb: "Vivitrol washout"
	},
	{
		id: "r-anc-clozapine",
		title: "The ANC that was not a WBC",
		setting: "ward",
		stem: "Clozapine 400. The lab prints WBC 3.2. Pharmacy holds the fill. ANC is 1600. He has not missed a tablet.",
		ask: "Is this a REMS interrupt?",
		teach: "Open ANC. 1600 general population is green (≥1500). WBC is not ANC. Smoke and fluvoxamine still move the level on TDM. Alvir 1993 is agranulocytosis. This desk is not the REMS portal.",
		drugIds: ["clozapine"],
		lane: "clinic",
		blurb: "Clozapine REMS"
	},
	{
		id: "r-inr-amio",
		title: "The INR that climbed in week three",
		setting: "clinic",
		stem: "Warfarin 5 mg, INR 2.3 for a year. Amiodarone started for AF. Week one INR 2.4. Week three 4.8. Nobody changed the milligrams.",
		ask: "Why the delay?",
		teach: "Amiodarone inhibits 2C9 over weeks, not overnight. Put warfarin + amiodarone on the desk and open INR. This desk does not pick a warfarin milligram.",
		drugIds: ["warfarin", "amiodarone"],
		lane: "clinic",
		blurb: "INR · amiodarone"
	}
];
function RoundsPage() {
	const load = useDesk((s) => s.load);
	const plan = usePlan();
	const [setting, setSetting] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => ROUNDS.filter((r) => setting === "all" || r.setting === setting), [setting]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[220px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: LANE_PLATE.clinic,
						alt: "",
						className: "h-36 w-full sm:h-full min-h-36"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
								children: "Teaching rounds"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-2 font-serif text-2xl tracking-tight text-fg",
								children: [ROUNDS.length, " cases. Read the stem, put it on the desk, then reveal."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
								children: "Pharmacy-student and clinic maps — first-pass, phenotype-as-perpetrator, α2 vs naloxone, food, MAT. Two-drug cases stay free. Host-factor cases are Pro."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: ROUND_SETTINGS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSetting(s.id),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", setting === s.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: s.label
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 lg:grid-cols-2",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundCard, {
					round: r,
					revealed: open === r.id,
					onReveal: () => setOpen((cur) => cur === r.id ? null : r.id),
					onLoad: () => load(r.drugIds, extrasOf(r)),
					gated: plan === "free" && roundNeedsPro(r)
				}, r.id))
			})
		]
	});
}
function extrasOf(r) {
	return {
		phenotypes: r.phenotypes,
		smoking: r.smoking,
		ketamineRoute: r.ketamineRoute,
		cannabisRoute: r.cannabisRoute,
		alcohol: r.alcohol
	};
}
function RoundCard({ round, revealed, onReveal, onLoad, gated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: plateForSample(round),
				alt: "",
				className: "hidden w-24 shrink-0 sm:block min-h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 px-4 py-4 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent",
						children: round.setting
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-serif text-xl tracking-tight text-fg",
						children: round.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: round.stem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-medium text-fg",
						children: round.ask
					}),
					revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 rounded-md bg-bg-sunken px-3 py-3 text-sm leading-relaxed text-fg",
						children: round.teach
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: onLoad,
							children: gated ? "Put on desk · Pro" : "Put on desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: onReveal,
							children: revealed ? "Hide teach" : "Reveal"
						})]
					})
				]
			})]
		})
	});
}
function HostDelta({ selected, host, report }) {
	const baseline = (0, import_react.useMemo)(() => analyze(selected, DEFAULT_HOST), [selected]);
	if (!hostIsMoved(host) || selected.length === 0) return null;
	const dCount = report.findings.length - baseline.findings.length;
	const dRank = SEVERITY_RANK[report.highest] - SEVERITY_RANK[baseline.highest];
	const newHits = report.findings.filter((f) => !baseline.findings.some((b) => b.id === f.id)).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-muted",
				children: "vs normal host"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-relaxed text-muted",
				children: "Same regimen, default metabolizer / no smoke / IV ketamine / smoked THC / alcohol off."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-muted",
					children: "Findings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "font-mono text-sm tabular-nums text-fg",
					children: [
						baseline.findings.length,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " → "
						}),
						report.findings.length,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("ml-1 text-xs", dCount > 0 ? "text-danger" : dCount < 0 ? "text-ok" : "text-muted"),
							children: dCount > 0 ? `+${dCount}` : dCount === 0 ? "—" : dCount
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[11px] text-muted",
					children: "Ceiling"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "font-mono text-sm text-fg",
					children: [
						SEVERITY_LABEL[baseline.highest],
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: " → "
						}),
						SEVERITY_LABEL[report.highest],
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("ml-1 text-xs", dRank > 0 ? "text-danger" : dRank < 0 ? "text-ok" : "text-muted"),
							children: dRank === 0 ? "—" : dRank > 0 ? "hotter" : "quieter"
						})
					]
				})] })]
			}),
			newHits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1.5",
				children: newHits.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-xs leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-fg",
							children: [SEVERITY_LABEL[f.severity], "."]
						}),
						" ",
						f.headline
					]
				}, f.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "Host moved the numbers, not the headline list."
			})
		]
	});
}
function hostIsMoved(host) {
	if (host.smoking) return true;
	if (host.alcohol !== "off") return true;
	if (host.ketamineRoute !== "iv") return true;
	if (host.cannabisRoute !== "smoked") return true;
	return Object.keys(DEFAULT_HOST.phenotypes).some((e) => host.phenotypes[e] !== DEFAULT_HOST.phenotypes[e]);
}
function FirstPassMap({ ketamineRoute, cannabisRoute, showKetamine, showCannabis }) {
	if (!showKetamine && !showCannabis) return null;
	const oral = showKetamine && ketamineRoute === "oral" || showCannabis && cannabisRoute === "oral";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex items-end justify-between gap-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "First-pass river"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Gut CYP3A4 and hepatic 2B6/3A4 only see what you swallow. IV and smoked skip the trap."
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
				title: "Oral / edible",
				hot: oral,
				steps: [
					"Mouth",
					"Gut 3A4",
					"Portal",
					"Liver 2B6/3A4",
					"Systemic"
				],
				note: showKetamine && ketamineRoute === "oral" ? "Oral ketamine is a 3A4 victim. Clarithromycin and grapefruit light this path up." : showCannabis && cannabisRoute === "oral" ? "Edible THC becomes 11-OH-THC here. Smoked THC barely does." : "Swallowing puts the whole cytochrome gauntlet between dose and brain."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathCard, {
				title: "IV / smoked / IN",
				hot: (showKetamine && ketamineRoute === "iv" || showCannabis && cannabisRoute === "smoked") && !oral,
				steps: ["Vein / lung / nose", "Systemic"],
				note: "Hepatic 3A4 still clears on the way out, but intestinal first-pass is gone."
			})]
		})]
	});
}
function PathCard({ title, hot, steps, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg px-4 py-3", hot ? "bg-danger-soft text-danger" : "bg-bg-sunken text-fg"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-3 flex flex-wrap items-center gap-1.5",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("inline-flex h-8 items-center rounded-sm px-2 font-mono text-[11px]", hot ? "bg-surface text-danger" : "bg-surface text-fg"),
						children: s
					}), i < steps.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-subtle",
						children: "→"
					}) : null]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-xs leading-relaxed", hot ? "text-danger" : "text-muted"),
				children: note
			})
		]
	});
}
var TONE = {
	contraindicated: "stroke-danger",
	major: "stroke-danger",
	moderate: "stroke-warn",
	minor: "stroke-info"
};
function CollisionMap({ selected, findings }) {
	const layout = (0, import_react.useMemo)(() => {
		const n = selected.length;
		if (n < 2) return null;
		const cx = 160;
		const cy = 96;
		const r = n === 2 ? 62 : 70;
		const nodes = selected.map((id, i) => {
			const angle = -Math.PI / 2 + i * 2 * Math.PI / n;
			return {
				id,
				name: DRUG_BY_ID[id]?.name ?? id,
				x: cx + r * Math.cos(angle),
				y: cy + r * Math.sin(angle)
			};
		});
		return {
			nodes,
			edges: findings.filter((f) => f.drugIds.length >= 2).map((f) => {
				const a = nodes.find((n) => n.id === f.drugIds[0]);
				const b = nodes.find((n) => n.id === f.drugIds[1]);
				if (!a || !b) return null;
				return {
					id: f.id,
					a,
					b,
					severity: f.severity
				};
			}).filter(Boolean)
		};
	}, [selected, findings]);
	if (!layout) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Collision map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Edges are findings. Darker lines are higher severity."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 210",
			className: "block h-auto w-full max-w-sm",
			role: "img",
			"aria-label": "Collision constellation",
			children: [layout.edges.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: e.a.x,
				y1: e.a.y,
				x2: e.b.x,
				y2: e.b.y,
				className: cn(TONE[e.severity]),
				strokeWidth: e.severity === "contraindicated" || e.severity === "major" ? 2.4 : 1.4,
				strokeLinecap: "round",
				opacity: .85
			}, e.id)), layout.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: "16",
					className: "fill-accent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: n.x,
					cy: n.y,
					r: "5",
					className: "fill-accent-fg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: n.x,
					y: n.y + 28,
					textAnchor: "middle",
					className: "fill-fg",
					style: {
						fontSize: 9,
						fontFamily: "IBM Plex Sans, sans-serif"
					},
					children: n.name.length > 16 ? `${n.name.slice(0, 15)}…` : n.name
				})
			] }, n.id))]
		})]
	});
}
function Formulary() {
	const add = useDesk((s) => s.add);
	const selected = useDesk((s) => s.selected);
	const setView = useDesk((s) => s.setView);
	const plan = usePlan();
	const cap = maxDrugs(plan);
	const [family, setFamily] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return DRUGS.filter((d) => {
			if (family !== "all" && familyOf(d) !== family) return false;
			if (!needle) return true;
			return d.name.toLowerCase().includes(needle) || d.cls.toLowerCase().includes(needle) || d.brands.some((b) => b.toLowerCase().includes(needle)) || d.aliases.some((a) => a.toLowerCase().includes(needle)) || d.enzymes.some((e) => e.enzyme.toLowerCase().includes(needle.replace(/\s+/g, "")));
		}).sort((a, b) => a.name.localeCompare(b.name));
	}, [family, q]);
	const counts = (0, import_react.useMemo)(() => {
		const map = { all: DRUGS.length };
		for (const d of DRUGS) {
			const f = familyOf(d);
			map[f] = (map[f] ?? 0) + 1;
		}
		return map;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[220px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: "/plates/heme.jpg",
						alt: "",
						className: "h-36 w-full sm:h-full min-h-36"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
								children: "Materia medica"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-2 font-serif text-2xl tracking-tight text-fg",
								children: [DRUGS.length, " compounds on the shelf"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
								children: "Browse the formulary by family, then put anything on the desk. Two-drug collisions stay free. Host factors and the atlas are Pro."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Filter by name, brand, alias, CYP…",
					className: "h-12 w-full rounded-lg bg-surface-2 pl-10 pr-4 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: FAMILIES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFamily(f.id),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", family === f.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: [f.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 font-mono tabular-nums opacity-70",
						children: counts[f.id] ?? 0
					})]
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					rows.length,
					" shown",
					selected.length ? ` · ${selected.length}/${cap} on the desk` : ""
				]
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-surface px-5 py-8 text-sm text-muted shadow-[var(--shadow-border)]",
				children: "Nothing in this drawer matches."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: rows.map((d) => {
					const on = selected.includes(d.id);
					const enzymes = d.enzymes.filter((e) => e.kind !== "substrate").slice(0, 2).map((e) => `${e.enzyme.replace("CYP", "")} ${e.kind === "inhibitor" ? "inh" : "ind"}`);
					const sub = d.enzymes.find((e) => e.kind === "substrate");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (on) return;
							if (add(d.id)) setView("desk");
						},
						disabled: on,
						className: cn("flex h-full min-h-20 w-full overflow-hidden rounded-lg bg-surface text-left shadow-[var(--shadow-border)] transition-transform duration-150", on ? "opacity-50" : "hover:-translate-y-px hover:bg-surface-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: plateForDrug(d),
							alt: "",
							className: "h-full w-16 shrink-0 object-cover sm:w-20"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 flex-1 flex-col justify-center px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-sm font-medium text-fg",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-0.5 truncate text-[11px] text-muted",
									children: [d.kind !== "drug" ? `${d.kind} · ` : "", d.cls]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 font-mono text-[10px] uppercase tracking-wide text-subtle",
									children: [
										enzymes.length ? enzymes.join(" · ") : sub ? `${sub.enzyme.replace("CYP", "")} sub` : "PD only",
										hasStahl(d.id) ? " · Stahl" : "",
										hasPgx(d.id) ? " · PGx" : "",
										hasCite(d.id) ? " · PMID" : "",
										hasClinic(d.id) ? " · Clinic" : ""
									]
								})
							]
						})]
					}) }, d.id);
				})
			})
		]
	});
}
function WashoutCard({ selected }) {
	const hits = washoutsFor(selected);
	if (!hits.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Washout clock"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Stopping yesterday does not clear a lingering perpetrator."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: hits.map((w) => {
					const names = w.ids.filter((id) => selected.includes(id)).map((id) => DRUG_BY_ID[id]?.name ?? id);
					const pct = Math.min(100, Math.round(w.days / 42 * 100));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg-sunken px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-fg",
									children: names.join(", ")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] tabular-nums text-accent",
									children: [w.days, "d"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-1.5 overflow-hidden rounded-full bg-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-accent",
									style: { width: `${pct}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: w.label
							})
						]
					}, w.ids.join("-"));
				})
			})
		]
	});
}
var I_INH = {
	strong: 5,
	moderate: 2,
	weak: .5
};
var E_IND = {
	strong: 4,
	moderate: 2,
	weak: .5
};
var PHENO_CL = {
	PM: .12,
	IM: .5,
	NM: 1,
	UM: 2.2
};
/** Furanocoumarins / juices that knock out intestinal CYP3A4 and spare the liver. */
var GUT_ONLY = /* @__PURE__ */ new Set([
	"grapefruit",
	"pomegranate",
	"starfruit"
]);
var ROWS = {
	ketamine: {
		tHalfH: 2.5,
		kaH: 1.4,
		F: .17,
		fm: {
			CYP2B6: .35,
			CYP3A4: .45
		},
		gut3A4: .65,
		activation: {
			enzyme: "CYP2B6",
			name: "Norketamine"
		},
		note: "Oral first-pass is the 3A4 trap. IV skips the gut; hepatic 2B6 still clears."
	},
	esketamine: {
		tHalfH: 2.6,
		kaH: 1.6,
		F: .48,
		fm: {
			CYP2B6: .4,
			CYP3A4: .35
		},
		gut3A4: .25,
		activation: {
			enzyme: "CYP2B6",
			name: "S-norketamine"
		},
		note: "Intranasal Spravato still sees hepatic 2B6/3A4; less gut first-pass than a lozenge."
	},
	"two-fdck": {
		tHalfH: 3.2,
		kaH: 1.2,
		F: .2,
		fm: {
			CYP2B6: .35,
			CYP3A4: .45
		},
		gut3A4: .6,
		note: "Same oral 2B6/3A4 gauntlet as ketamine."
	},
	dck: {
		tHalfH: 4,
		kaH: 1.1,
		F: .22,
		fm: {
			CYP2B6: .3,
			CYP3A4: .45
		},
		gut3A4: .55,
		note: "Deschloroketamine — oral first-pass still 3A4/2B6."
	},
	dextromethorphan: {
		tHalfH: 3,
		kaH: 1.8,
		F: .5,
		fm: {
			CYP2D6: .85,
			CYP3A4: .1
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Dextrorphan"
		},
		note: "2D6 PM or a strong 2D6 inhibitor stacks parent DXM (serotonergic) and cuts dextrorphan."
	},
	mdma: {
		tHalfH: 8,
		kaH: 1.3,
		F: .6,
		fm: {
			CYP2D6: .55,
			CYP3A4: .15
		},
		note: "Mechanism-based 2D6 inhibition after the first pass — the second dose is not the first."
	},
	mda: {
		tHalfH: 10,
		kaH: 1.2,
		F: .55,
		fm: {
			CYP2D6: .5,
			CYP3A4: .15
		},
		note: "MDMA cousin. Same 2D6 victim map."
	},
	codeine: {
		tHalfH: 3,
		kaH: 2,
		F: .5,
		fm: {
			CYP2D6: .1,
			CYP3A4: .7
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Morphine"
		},
		note: "Parent clearance is mostly 3A4. Analgesia is the 2D6 morphine step — UM is the danger."
	},
	tramadol: {
		tHalfH: 6,
		kaH: 1.5,
		F: .75,
		fm: {
			CYP2D6: .25,
			CYP3A4: .45
		},
		activation: {
			enzyme: "CYP2D6",
			name: "O-desmethyltramadol"
		},
		note: "Parent is SNRI-like; M1 is the μ-agonist. 2D6 PM = less analgesia, more parent serotonin."
	},
	warfarin: {
		tHalfH: 40,
		kaH: 1.2,
		F: .95,
		fm: {
			CYP2C9: .8,
			CYP3A4: .1
		},
		note: "S-warfarin is a sensitive 2C9 substrate. Fluconazole, amiodarone, and 2C9 PMs raise INR."
	},
	clozapine: {
		tHalfH: 12,
		kaH: .9,
		F: .55,
		fm: {
			CYP1A2: .7,
			CYP3A4: .15
		},
		note: "Smoke induces 1A2 — levels fall, then rebound on quit."
	},
	olanzapine: {
		tHalfH: 30,
		kaH: .8,
		F: .6,
		fm: {
			CYP1A2: .55,
			CYP2D6: .15
		},
		note: "Same 1A2 smoke story as clozapine, quieter."
	},
	tizanidine: {
		tHalfH: 2.5,
		kaH: 1.6,
		F: .2,
		fm: { CYP1A2: .95 },
		gut3A4: 0,
		note: "Sensitive 1A2 substrate. Cimetidine and ciprofloxacin are the classic bullies."
	},
	midazolam: {
		tHalfH: 3,
		kaH: 2.2,
		F: .4,
		fm: { CYP3A4: .9 },
		gut3A4: .55,
		note: "Probe 3A4 substrate. Oral midazolam is how we measure the isoform."
	},
	triazolam: {
		tHalfH: 2.5,
		kaH: 2.4,
		F: .44,
		fm: { CYP3A4: .9 },
		gut3A4: .6,
		note: "Sensitive 3A4 benzo. Ritonavir, azoles, grapefruit."
	},
	buspirone: {
		tHalfH: 2.5,
		kaH: 1.8,
		F: .04,
		fm: { CYP3A4: .95 },
		gut3A4: .8,
		note: "Tiny F. Grapefruit and azoles turn a 5 mg anxiolytic into a much larger exposure."
	},
	alprazolam: {
		tHalfH: 12,
		kaH: 1.4,
		F: .9,
		fm: { CYP3A4: .7 },
		note: "Hepatic 3A4 more than gut. Inhibitors stretch duration."
	},
	clobazam: {
		tHalfH: 18,
		kaH: 1.1,
		F: .9,
		fm: {
			CYP3A4: .4,
			CYP2C19: .45
		},
		activation: {
			enzyme: "CYP2C19",
			name: "N-desmethylclobazam"
		},
		note: "CBD and fluconazole stack the long active metabolite via 2C19."
	},
	dronabinol: {
		tHalfH: 4,
		kaH: .7,
		F: .1,
		fm: {
			CYP2C9: .55,
			CYP3A4: .3
		},
		gut3A4: .35,
		activation: {
			enzyme: "CYP2C9",
			name: "11-OH-THC"
		},
		note: "Edible first-pass makes 11-OH-THC. Smoked THC mostly skips that metabolite spike."
	},
	cannabidiol: {
		tHalfH: 24,
		kaH: .6,
		F: .06,
		fm: {
			CYP2C19: .4,
			CYP3A4: .35
		},
		gut3A4: .3,
		note: "High-dose CBD is a 2C19 perpetrator as well as a victim."
	},
	methadone: {
		tHalfH: 24,
		kaH: .8,
		F: .8,
		fm: {
			CYP2B6: .45,
			CYP3A4: .35
		},
		note: "Inducers (efavirenz, rifampin, carbamazepine, phenytoin, nevirapine) look like a stolen take-home. Fluvoxamine and fluconazole raise parent and QT. Paxlovid/ritonavir is the mixed arrow — methadone often falls. q24h Rac is large even without a perpetrator."
	},
	fentanyl: {
		tHalfH: 4,
		kaH: 2.5,
		F: .5,
		fm: { CYP3A4: .7 },
		gut3A4: .35,
		note: "Norfentanyl via 3A4. Paxlovid, ritonavir, and azoles raise parent (Olkkola: ritonavir cuts clearance 67%). Street fentanyl is the usual contents of a dirty 30. Overlay a methadone take-home — that is stacked μ, not this curve."
	},
	oxycodone: {
		tHalfH: 4,
		kaH: 1.6,
		F: .6,
		fm: {
			CYP3A4: .55,
			CYP2D6: .2
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Oxymorphone"
		},
		note: "3A4 is the main clearance. 2D6 makes oxymorphone. Percocet adds APAP — that is the 2E1/alcohol row, not this curve."
	},
	loperamide: {
		tHalfH: 11,
		kaH: 1,
		F: .1,
		fm: {
			CYP3A4: .4,
			"P-gp": .45
		},
		gut3A4: .3,
		note: "P-gp and 3A4 keep it peripheral. Quinidine or ritonavir opens the gate."
	},
	simvastatin: {
		tHalfH: 3,
		kaH: 1.5,
		F: .05,
		fm: { CYP3A4: .9 },
		gut3A4: .7,
		note: "Sensitive oral 3A4 victim. Strong inhibitors are a labeled myopathy trap."
	},
	quetiapine: {
		tHalfH: 6,
		kaH: 1.3,
		F: .09,
		fm: { CYP3A4: .8 },
		gut3A4: .45,
		note: "Low F, 3A4 victim. Azoles and grapefruit raise parent."
	},
	theophylline: {
		tHalfH: 8,
		kaH: 1.2,
		F: .9,
		fm: { CYP1A2: .9 },
		note: "Classic 1A2 victim. Cipro, fluvoxamine, cimetidine, and smoke all move it."
	},
	caffeine: {
		tHalfH: 5,
		kaH: 2.5,
		F: 1,
		fm: { CYP1A2: .95 },
		note: "1A2 probe. Smoke shortens it; fluvoxamine stretches it."
	},
	atomoxetine: {
		tHalfH: 5,
		kaH: 1.4,
		F: .63,
		fm: { CYP2D6: .9 },
		note: "Sensitive 2D6 substrate. PMs and paroxetine/fluoxetine spike exposure."
	},
	citalopram: {
		tHalfH: 35,
		kaH: .9,
		F: .8,
		fm: {
			CYP2C19: .45,
			CYP3A4: .3,
			CYP2D6: .15
		},
		note: "2C19 PM and strong 2C19 inhibitors raise QT-relevant exposure."
	},
	risperidone: {
		tHalfH: 3,
		kaH: 1.5,
		F: .7,
		fm: {
			CYP2D6: .7,
			CYP3A4: .2
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Paliperidone"
		},
		note: "2D6 to 9-OH-risperidone (paliperidone). PMs stack parent."
	},
	bupropion: {
		tHalfH: 21,
		kaH: .7,
		F: .05,
		fm: { CYP2B6: .7 },
		note: "2B6 victim and a strong 2D6 inhibitor of other drugs."
	},
	guanfacine: {
		tHalfH: 17,
		kaH: .8,
		F: .8,
		fm: { CYP3A4: .8 },
		note: "ADHD α2 agonist. Strong 3A4 inhibitors raise sedation and bradycardia."
	},
	lofexidine: {
		tHalfH: 11,
		kaH: 1.2,
		F: .7,
		fm: { CYP2D6: .55 },
		note: "Lucemyra. 2D6 victim — paroxetine/fluoxetine raise bradycardia. α2 × opioid is PD, not this curve."
	},
	"seven-oh": {
		tHalfH: 3.5,
		kaH: 1.4,
		F: .4,
		fm: { CYP3A4: .7 },
		note: "The hot μ-agonist. 3A4 inhibitors raise the opioid load."
	},
	meperidine: {
		tHalfH: 4,
		kaH: 1.3,
		F: .5,
		fm: {
			CYP3A4: .4,
			CYP2B6: .35
		},
		activation: {
			enzyme: "CYP3A4",
			name: "Normeperidine"
		},
		note: "Normeperidine is the seizure metabolite. 3A4 blockade and renal failure stack it."
	},
	tamoxifen: {
		tHalfH: 170,
		kaH: .4,
		F: 1,
		fm: {
			CYP3A4: .5,
			CYP2D6: .3
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Endoxifen"
		},
		note: "Endoxifen is the workhorse. 2D6 PMs and strong 2D6 inhibitors lose activation."
	},
	clopidogrel: {
		tHalfH: 6,
		kaH: 1.6,
		F: .5,
		fm: {
			CYP2C19: .45,
			CYP3A4: .25
		},
		activation: {
			enzyme: "CYP2C19",
			name: "Thiol metabolite"
		},
		note: "Prodrug. 2C19 PMs and omeprazole blunt the antiplatelet effect."
	},
	carisoprodol: {
		tHalfH: 2,
		kaH: 1.8,
		F: .8,
		fm: { CYP2C19: .8 },
		activation: {
			enzyme: "CYP2C19",
			name: "Meprobamate"
		},
		note: "2C19 to meprobamate. PMs and CBD/fluconazole stack parent plus metabolite."
	},
	mxe: {
		tHalfH: 6,
		kaH: 1.1,
		F: .2,
		fm: {
			CYP2B6: .3,
			CYP3A4: .4
		},
		gut3A4: .5,
		note: "Longer NMDA cousin. Oral 3A4/2B6 still applies."
	},
	"three-meo-pcp": {
		tHalfH: 8,
		kaH: 1,
		F: .25,
		fm: {
			CYP2B6: .25,
			CYP3A4: .4
		},
		gut3A4: .45,
		note: "Long arylcyclohexylamine. Oral first-pass is still 3A4."
	},
	ibogaine: {
		tHalfH: 7,
		kaH: .9,
		F: .7,
		fm: {
			CYP2D6: .7,
			CYP3A4: .15
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Noribogaine"
		},
		note: "2D6 to noribogaine (long QT). PMs and strong 2D6 inhibitors stack parent. Not a treatment map."
	},
	diazepam: {
		tHalfH: 44,
		kaH: 1.1,
		F: 1,
		fm: {
			CYP3A4: .4,
			CYP2C19: .4
		},
		activation: {
			enzyme: "CYP2C19",
			name: "Nordiazepam"
		},
		note: "Long parent, longer nordiazepam. 2C19 PMs and inhibitors stretch both."
	},
	fluoxetine: {
		tHalfH: 96,
		kaH: .5,
		F: .7,
		fm: {
			CYP2D6: .55,
			CYP2C9: .2
		},
		note: "Parent plus norfluoxetine. t½ is days — q24h accumulates, and 2D6 stays blocked for weeks."
	},
	venlafaxine: {
		tHalfH: 5,
		kaH: 1.4,
		F: .45,
		fm: { CYP2D6: .8 },
		activation: {
			enzyme: "CYP2D6",
			name: "O-desmethylvenlafaxine"
		},
		note: "2D6 to ODV (desvenlafaxine). PMs stack parent; the active metabolite falls."
	},
	aripiprazole: {
		tHalfH: 75,
		kaH: .6,
		F: .87,
		fm: {
			CYP2D6: .4,
			CYP3A4: .4
		},
		note: "Very long t½. q24h Rac is large. 2D6 PMs and 3A4 inhibitors both move it."
	},
	amitriptyline: {
		tHalfH: 18,
		kaH: 1,
		F: .5,
		fm: {
			CYP2D6: .4,
			CYP2C19: .3
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Nortriptyline"
		},
		note: "2C19/2D6 to nortriptyline. PMs stack parent anticholinergic and QT load."
	},
	nortriptyline: {
		tHalfH: 30,
		kaH: .9,
		F: .6,
		fm: { CYP2D6: .8 },
		note: "Sensitive 2D6 substrate. PMs and paroxetine/fluoxetine raise parent."
	},
	hydrocodone: {
		tHalfH: 4,
		kaH: 1.6,
		F: .7,
		fm: {
			CYP3A4: .5,
			CYP2D6: .2
		},
		activation: {
			enzyme: "CYP2D6",
			name: "Hydromorphone"
		},
		note: "3A4 is the main clearance. 2D6 makes hydromorphone — UM is the louder opioid."
	},
	buprenorphine: {
		tHalfH: 32,
		kaH: .8,
		F: .3,
		fm: { CYP3A4: .7 },
		gut3A4: .25,
		note: "3A4 victim. Strong inhibitors raise parent; inducers (efavirenz, rifampin) drop it and can look like withdrawal. Precipitated withdrawal with fentanyl is PD, not this curve."
	},
	tacrolimus: {
		tHalfH: 12,
		kaH: 1.2,
		F: .2,
		fm: { CYP3A4: .9 },
		gut3A4: .55,
		note: "NTI. Grapefruit and azoles open gut 3A4; IV would barely move. Not a dose."
	},
	cyclosporine: {
		tHalfH: 8,
		kaH: 1.1,
		F: .3,
		fm: {
			CYP3A4: .8,
			"P-gp": .15
		},
		gut3A4: .4,
		note: "NTI 3A4/P-gp victim. Same first-pass neighborhood as tacrolimus."
	},
	colchicine: {
		tHalfH: 30,
		kaH: .9,
		F: .45,
		fm: {
			CYP3A4: .5,
			"P-gp": .35
		},
		gut3A4: .3,
		note: "NTI. Strong 3A4/P-gp inhibitors are labeled — myopathy, marrow, death in impairment."
	},
	sildenafil: {
		tHalfH: 4,
		kaH: 1.8,
		F: .4,
		fm: { CYP3A4: .8 },
		gut3A4: .3,
		note: "3A4 victim. Azoles and protease inhibitors raise parent. The nitrate pair is PD, not this curve."
	},
	tadalafil: {
		tHalfH: 17.5,
		kaH: 1.2,
		F: .8,
		fm: { CYP3A4: .8 },
		note: "Longer PDE5. 3A4 inhibitors stretch it; nitrates remain a PD contraindication."
	},
	atorvastatin: {
		tHalfH: 14,
		kaH: 1.3,
		F: .14,
		fm: { CYP3A4: .7 },
		gut3A4: .4,
		note: "3A4 victim, less sensitive than simvastatin. Strong inhibitors still raise myopathy risk."
	},
	amlodipine: {
		tHalfH: 40,
		kaH: .7,
		F: .64,
		fm: { CYP3A4: .7 },
		note: "Long t½, q24h accumulates. 3A4 inhibitors raise edema and hypotension."
	},
	zolpidem: {
		tHalfH: 2.5,
		kaH: 2.2,
		F: .7,
		fm: {
			CYP3A4: .6,
			CYP2C9: .15
		},
		gut3A4: .2,
		note: "Short 3A4 Z-hypnotic. Strong inhibitors stretch next-day impairment. q8h is not a regimen."
	},
	haloperidol: {
		tHalfH: 24,
		kaH: .9,
		F: .6,
		fm: {
			CYP2D6: .4,
			CYP3A4: .3
		},
		note: "2D6/3A4. PMs and strong inhibitors raise QT-relevant exposure."
	},
	cocaine: {
		tHalfH: .8,
		kaH: 2.2,
		F: .3,
		fm: { CYP3A4: .15 },
		gut3A4: .1,
		note: "Mostly CES1. 3A4 makes norcocaine. Cocaethylene with ethanol is PD, not this curve. Smoked crack is closer to IV."
	},
	epclusa: {
		tHalfH: 15,
		kaH: 1,
		F: .3,
		fm: {
			CYP3A4: .2,
			"P-gp": .5
		},
		note: "Velpatasvir is the P-gp piece. Rifampin dumps the DAA. Methadone usually does not move."
	},
	"dirty-30": {
		tHalfH: 3.5,
		kaH: 1.4,
		F: .3,
		fm: { CYP3A4: .9 },
		gut3A4: .35,
		note: "Modeled as illicit fentanyl, not oxycodone. 3A4 inhibitors raise the μ load. Xylazine is PD, not this curve."
	},
	nifedipine: {
		tHalfH: 3.5,
		kaH: 1.6,
		F: .45,
		fm: { CYP3A4: .8 },
		gut3A4: .5,
		note: "Sensitive 3A4. Grapefruit and azoles open first-pass; amlodipine is the longer, less first-pass cousin. Not a dose."
	},
	felodipine: {
		tHalfH: 11,
		kaH: 1.3,
		F: .15,
		fm: { CYP3A4: .9 },
		gut3A4: .8,
		note: "Bailey 1991. The original juice victim. Tiny F, mostly intestinal 3A4. Grapefruit raises F; t½ barely moves."
	},
	budesonide: {
		tHalfH: 2.8,
		kaH: 1.4,
		F: .1,
		fm: { CYP3A4: .9 },
		gut3A4: .7,
		note: "Oral Entocort is a gut 3A4 first-pass victim. Ketoconazole/grapefruit make a 'local' steroid systemic. Not an IV map."
	},
	eplerenone: {
		tHalfH: 5,
		kaH: 1.3,
		F: .69,
		fm: { CYP3A4: .9 },
		gut3A4: .25,
		note: "Sensitive 3A4. Strong inhibitors are labeled contraindicated. Hyperkalemia with an ACEI is PD, not this curve."
	},
	ranolazine: {
		tHalfH: 7,
		kaH: 1.1,
		F: .55,
		fm: {
			CYP3A4: .7,
			"P-gp": .15
		},
		gut3A4: .25,
		note: "Sensitive 3A4 antianginal. Strong inhibitors are labeled. QT is PD on top of the exposure."
	},
	eletriptan: {
		tHalfH: 4,
		kaH: 1.8,
		F: .5,
		fm: { CYP3A4: .8 },
		gut3A4: .3,
		note: "The CYP triptan. Strong 3A4 inhibitors are a 72-hour hold. Sumatriptan is MAO-A, not this curve."
	},
	sirolimus: {
		tHalfH: 62,
		kaH: .8,
		F: .14,
		fm: {
			CYP3A4: .85,
			"P-gp": .15
		},
		gut3A4: .5,
		note: "NTI mTOR. Azoles and grapefruit open gut 3A4. q24h Rac is large. Not a dose."
	},
	fluticasone: {
		tHalfH: 8,
		kaH: 1.2,
		F: .01,
		fm: { CYP3A4: .95 },
		gut3A4: .85,
		note: "Swallowed Flonase fraction is almost entirely gut 3A4. Ritonavir opens that gate — iatrogenic Cushing, not a spray footnote."
	}
};
function specFor(id, host) {
	const row = ROWS[id];
	if (!row) return null;
	const spec = {
		tHalfH: row.tHalfH,
		kaH: row.kaH,
		F: row.F,
		fm: { ...row.fm },
		gut3A4: row.gut3A4,
		activation: row.activation,
		note: row.note,
		iv: false
	};
	if (FIRST_PASS_NMDA.includes(id)) {
		if (host.ketamineRoute === "iv") {
			spec.F = 1;
			spec.kaH = 8;
			spec.gut3A4 = 0;
			spec.iv = true;
			spec.fm = {
				CYP2B6: .55,
				CYP3A4: .2
			};
			spec.note = "IV/IM skips gut 3A4. Hepatic CYP2B6 is the main clearance — inhibitors still move it, quietly.";
		} else if (host.ketamineRoute === "in") {
			spec.F = .5;
			spec.kaH = 2.2;
			spec.gut3A4 = .2;
			spec.fm = {
				CYP2B6: .4,
				CYP3A4: .35
			};
		}
	}
	if (id === "dronabinol") {
		if (host.cannabisRoute === "smoked") {
			spec.F = .25;
			spec.kaH = 4;
			spec.gut3A4 = 0;
			spec.iv = true;
			spec.fm = {
				CYP2C9: .35,
				CYP3A4: .2
			};
			spec.note = "Smoked THC mostly skips 11-OH-THC first-pass. Hepatic 2C9/3A4 still clear parent.";
		}
	}
	return spec;
}
function enzymeCl(enzyme, others, host, site = "hep") {
	let inh = 0;
	let ind = 0;
	const drivers = [];
	for (const d of others) {
		if (isVirtual(d.id)) continue;
		if (site === "hep" && GUT_ONLY.has(d.id)) continue;
		for (const role of d.enzymes) {
			if (role.enzyme !== enzyme) continue;
			if (role.kind === "inhibitor") {
				const I = I_INH[role.strength];
				if (I > inh) {
					inh = I;
					drivers.push(GUT_ONLY.has(d.id) ? `${d.name} intestinal ${enzyme} knockout` : `${d.name} ${role.strength} ${enzyme} inhibition`);
				}
			}
			if (role.kind === "inducer") {
				const E = E_IND[role.strength];
				if (E > ind) {
					ind = E;
					drivers.push(`${d.name} ${role.strength} ${enzyme} induction`);
				}
			}
		}
	}
	let cl = 1 / (1 + inh);
	if (ind) cl *= 1 + ind;
	if (site === "hep") {
		if (PHENOTYPE_ENZYMES.includes(enzyme)) {
			const p = host.phenotypes[enzyme];
			if (p && p !== "NM") {
				cl *= PHENO_CL[p];
				drivers.push(`${enzyme} ${p} (${p === "UM" ? "faster" : "slower"} clearance)`);
			}
		}
		if (enzyme === "CYP1A2" && host.smoking) {
			cl *= 2.4;
			drivers.push("tobacco smoke CYP1A2 induction");
		}
		if (enzyme === "CYP2E1" && host.alcohol === "chronic") {
			cl *= 2.2;
			drivers.push("chronic alcohol CYP2E1 induction");
		}
	}
	return {
		cl: Math.max(.05, cl),
		drivers
	};
}
function oralF(F, gut3A4, clGut) {
	if (gut3A4 <= 0) return F;
	const lift = (1 - F) * gut3A4 * (1 - clGut);
	return Math.min(1, F + lift);
}
var DOSE_INTERVALS = [
	{
		id: 0,
		label: "Once"
	},
	{
		id: 8,
		label: "q8h"
	},
	{
		id: 12,
		label: "q12h"
	},
	{
		id: 24,
		label: "q24h"
	}
];
function ke(tHalf) {
	return Math.LN2 / Math.max(.2, tHalf);
}
function conc(t, F, ka, kElim, iv) {
	if (t < 0) return 0;
	if (iv) return F * Math.exp(-kElim * t);
	if (Math.abs(ka - kElim) < .02) ka = kElim + .05;
	return F * ka / (ka - kElim) * (Math.exp(-kElim * t) - Math.exp(-ka * t));
}
function summed(t, F, ka, kElim, iv, tau) {
	if (tau <= 0) return conc(t, F, ka, kElim, iv);
	let s = 0;
	const nMax = Math.floor(t / tau + 1e-9);
	for (let n = 0; n <= nMax; n++) s += conc(t - n * tau, F, ka, kElim, iv);
	return s;
}
function racOf(kElim, tau) {
	if (tau <= 0) return 1;
	const x = Math.exp(-kElim * tau);
	return 1 / Math.max(1e-6, 1 - x);
}
function tmaxOf(F, ka, kElim, iv, horizon) {
	if (iv) return 0;
	const t = Math.log(ka / kElim) / (ka - kElim);
	return Math.min(horizon, Math.max(0, t));
}
/** Other first-pass route for the ghost overlay — same milligram, different input. */
function otherRoute(id, host) {
	if (FIRST_PASS_NMDA.includes(id) && ROWS[id]) {
		if (host.ketamineRoute === "oral") return {
			host: {
				...host,
				ketamineRoute: "iv"
			},
			label: "If IV"
		};
		return {
			host: {
				...host,
				ketamineRoute: "oral"
			},
			label: "If oral"
		};
	}
	if (id === "dronabinol") {
		if (host.cannabisRoute === "oral") return {
			host: {
				...host,
				cannabisRoute: "smoked"
			},
			label: "If smoked"
		};
		return {
			host: {
				...host,
				cannabisRoute: "oral"
			},
			label: "If edible"
		};
	}
	return null;
}
function modelPk(victim, others, host, opts = {}) {
	const spec = specFor(victim.id, host);
	if (!spec) return null;
	const tau = Math.max(0, opts.tauH ?? 0);
	const mono = {
		...DEFAULT_HOST,
		ketamineRoute: host.ketamineRoute,
		cannabisRoute: host.cannabisRoute
	};
	const fmEntries = Object.entries(spec.fm);
	const fmSum = fmEntries.reduce((s, [, v]) => s + v, 0);
	const other = Math.max(0, 1 - fmSum);
	const drivers = [];
	let clHep0 = other;
	let clHep1 = other;
	let clGut0 = 1;
	let clGut1 = 1;
	const perps = others.filter((d) => !isVirtual(d.id));
	for (const [enz, fm] of fmEntries) {
		const a = enzymeCl(enz, [], mono, "hep");
		const b = enzymeCl(enz, perps, host, "hep");
		clHep0 += fm * a.cl;
		clHep1 += fm * b.cl;
		if (enz === "CYP3A4") {
			const gutA = enzymeCl(enz, [], mono, "gut");
			const gutB = enzymeCl(enz, perps, host, "gut");
			clGut0 = gutA.cl;
			clGut1 = gutB.cl;
			if ((spec.gut3A4 ?? 0) > 0) drivers.push(...gutB.drivers);
		}
		drivers.push(...b.drivers);
	}
	clHep0 = Math.max(.08, clHep0);
	clHep1 = Math.max(.08, clHep1);
	const ke0 = ke(spec.tHalfH);
	const ke1 = ke0 * (clHep1 / clHep0);
	const F0 = oralF(spec.F, spec.gut3A4 ?? 0, clGut0);
	const F1 = oralF(spec.F, spec.gut3A4 ?? 0, clGut1);
	if (F1 / Math.max(F0, .01) > 1.15 && (spec.gut3A4 ?? 0) > 0) drivers.push("intestinal CYP3A4 first-pass opening");
	const uniqueDrivers = [...new Set(drivers)];
	const tHalfDesk = Math.LN2 / ke1;
	const horizon = opts.horizonH ?? Math.min(168, Math.max(tau > 0 ? tau * 5 : 12, 5 * Math.max(spec.tHalfH, tHalfDesk), tau > 0 ? tau * 4 : 0));
	const n = opts.n ?? (tau > 0 ? 140 : 80);
	const act = spec.activation;
	const act0 = act ? enzymeCl(act.enzyme, [], mono, "hep").cl : 1;
	const act1 = act ? enzymeCl(act.enzyme, perps, host, "hep").cl : 1;
	const iv = Boolean(spec.iv);
	let maxBaseSingle = 0;
	const probeH = Math.max(8, 5 * spec.tHalfH);
	const probeN = 50;
	for (let i = 0; i <= probeN; i++) {
		const t = probeH * i / probeN;
		maxBaseSingle = Math.max(maxBaseSingle, conc(t, F0, spec.kaH, ke0, iv));
	}
	const scale = opts.scale ?? (maxBaseSingle > 0 ? 1 / maxBaseSingle : 1);
	const raw = [];
	let aucBase = 0;
	let aucDesk = 0;
	const aucH = Math.min(horizon, Math.max(12, 5 * Math.max(spec.tHalfH, tHalfDesk)));
	for (let i = 0; i <= n; i++) {
		const t = horizon * i / n;
		const base1 = Math.max(0, conc(t, F0, spec.kaH, ke0, iv));
		const desk1 = Math.max(0, conc(t, F1, spec.kaH, ke1, iv));
		const base = Math.max(0, summed(t, F0, spec.kaH, ke0, iv, tau));
		const desk = Math.max(0, summed(t, F1, spec.kaH, ke1, iv, tau));
		raw.push({
			t,
			base,
			desk,
			met0: base * act0,
			met1: desk * act1
		});
		if (i > 0 && t <= aucH + horizon / n) {
			const dt = horizon / n;
			aucBase += (conc(raw[i - 1].t, F0, spec.kaH, ke0, iv) + base1) / 2 * dt;
			aucDesk += (conc(raw[i - 1].t, F1, spec.kaH, ke1, iv) + desk1) / 2 * dt;
		}
	}
	const maxMet0 = Math.max(...raw.map((p) => p.met0), 1e-9);
	const points = raw.map((p) => ({
		t: p.t,
		base: p.base * scale,
		desk: p.desk * scale,
		metab: act ? p.met1 / maxMet0 : void 0
	}));
	const aucr = aucBase > 0 ? aucDesk / aucBase : 1;
	const metabFold = act ? act1 / Math.max(act0, .05) * aucr : void 0;
	const maxDesk = Math.max(...raw.map((p) => p.desk));
	const maxBase = Math.max(...raw.map((p) => p.base), 1e-9);
	return {
		id: victim.id,
		name: victim.name,
		note: spec.note,
		drivers: uniqueDrivers,
		aucr,
		cmaxFold: maxDesk / maxBase,
		tHalfBase: spec.tHalfH,
		tHalfDesk,
		tmaxBase: tmaxOf(F0, spec.kaH, ke0, iv, horizon),
		tmaxDesk: tmaxOf(F1, spec.kaH, ke1, iv, horizon),
		horizonH: horizon,
		activationName: act?.name,
		metabFold,
		iv,
		scale,
		tauH: tau,
		rac: racOf(ke1, tau),
		racBase: racOf(ke0, tau),
		points
	};
}
function modelsFor(drugs, host, opts = {}) {
	const real = drugs.filter((d) => !isVirtual(d.id) && ROWS[d.id] && DRUG_BY_ID[d.id]);
	const out = [];
	for (const v of real) {
		const m = modelPk(v, drugs.filter((d) => d.id !== v.id && !isVirtual(d.id)), host, opts);
		if (m) out.push(m);
	}
	out.sort((a, b) => Math.abs(Math.log(b.aucr)) - Math.abs(Math.log(a.aucr)));
	return out;
}
function PkExplorer({ drugs, host }) {
	const [tau, setTau] = (0, import_react.useState)(0);
	const [showAlt, setShowAlt] = (0, import_react.useState)(true);
	const models = (0, import_react.useMemo)(() => modelsFor(drugs, host, { tauH: tau }), [
		drugs,
		host,
		tau
	]);
	const [id, setId] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!models.length) {
			setId(null);
			return;
		}
		if (!id || !models.some((m) => m.id === id)) setId(models[0].id);
	}, [models, id]);
	const model = models.find((m) => m.id === id) ?? models[0];
	const altSpec = (0, import_react.useMemo)(() => model ? otherRoute(model.id, host) : null, [model, host]);
	const alt = (0, import_react.useMemo)(() => {
		if (!showAlt || !model || !altSpec) return null;
		const victim = drugs.find((d) => d.id === model.id);
		if (!victim) return null;
		return modelPk(victim, drugs.filter((d) => d.id !== model.id && !d.id.startsWith("__")), altSpec.host, {
			tauH: tau,
			horizonH: model.horizonH,
			n: model.points.length - 1,
			scale: model.scale
		});
	}, [
		showAlt,
		model,
		altSpec,
		drugs,
		tau
	]);
	const data = (0, import_react.useMemo)(() => {
		if (!model) return [];
		if (!alt) return model.points;
		return model.points.map((p, i) => ({
			...p,
			alt: alt.points[i]?.desk
		}));
	}, [model, alt]);
	if (!models.length || !model) return null;
	const moved = Math.abs(Math.log(model.aucr)) > .08 || Math.abs((model.metabFold ?? 1) - 1) > .15 || tau > 0 && model.rac >= 1.5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap items-end justify-between gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Concentration model"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: ["One-compartment sketch — relative exposure, not a plasma level and not a dose.", tau > 0 ? " Doses superimpose so you can see accumulation." : " Grey is this route, normal metabolizer, no perpetrators. Teal is this desk."]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: DOSE_INTERVALS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": tau === row.id,
						onClick: () => setTau(row.id),
						className: cn("h-10 rounded-full px-3 text-xs font-medium", tau === row.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: row.label
					}, row.id))
				}), altSpec ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": showAlt,
					onClick: () => setShowAlt((v) => !v),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", showAlt ? "bg-info-soft text-info" : "bg-bg-sunken text-muted hover:text-fg"),
					children: ["Overlay ", altSpec.label.replace(/^If /, "")]
				}) : null]
			}),
			models.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap gap-1",
				children: models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": m.id === model.id,
					onClick: () => setId(m.id),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", m.id === model.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: [m.name, Math.abs(Math.log(m.aucr)) > .08 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("ml-1.5 font-mono tabular-nums", m.id === model.id ? "text-accent-fg/80" : "text-accent"),
						children: fold(m.aucr)
					}) : null]
				}, m.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: "AUCR",
						v: fold(model.aucr),
						hot: model.aucr >= 2 || model.aucr <= .5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: "Cmax",
						v: fold(model.cmaxFold),
						hot: model.cmaxFold >= 2
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: "t½",
						v: `${fmtH(model.tHalfBase)} → ${fmtH(model.tHalfDesk)}`,
						hot: model.tHalfDesk / model.tHalfBase >= 1.6
					}),
					tau > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: "Rac",
						v: fold(model.rac),
						hot: model.rac >= 1.6
					}) : model.activationName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: model.activationName,
						v: fold(model.metabFold ?? 1),
						hot: (model.metabFold ?? 1) <= .5 || (model.metabFold ?? 1) >= 1.8
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: model.iv ? "Input" : "Tmax",
						v: model.iv ? "IV / skip gut" : fmtH(model.tmaxDesk)
					}),
					tau > 0 && model.activationName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
						k: model.activationName,
						v: fold(model.metabFold ?? 1),
						hot: (model.metabFold ?? 1) <= .5 || (model.metabFold ?? 1) >= 1.8
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("w-full", tau > 0 ? "h-56 sm:h-64" : "h-52 sm:h-56"),
				children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data,
						margin: {
							top: 8,
							right: 12,
							left: 8,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "t",
								type: "number",
								domain: [0, model.horizonH],
								ticks: axisTicks(model.horizonH),
								tickFormatter: (t) => axisT(Number(t), model.horizonH),
								tick: {
									fill: "var(--color-muted)",
									fontSize: 11,
									fontFamily: "var(--font-mono)"
								},
								axisLine: { stroke: "var(--color-border)" },
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: false,
								axisLine: false,
								tickLine: false,
								domain: [0, "auto"],
								width: 12
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PkTip, {
								horizon: model.horizonH,
								metabolite: model.activationName,
								altLabel: altSpec && showAlt ? altSpec.label : void 0
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "base",
								name: "Unperturbed",
								stroke: "var(--color-subtle)",
								strokeWidth: 1.6,
								dot: false,
								isAnimationActive: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "desk",
								name: "This desk",
								stroke: "var(--color-accent)",
								strokeWidth: 2.2,
								dot: false,
								isAnimationActive: false
							}),
							alt && showAlt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "alt",
								name: altSpec?.label ?? "Other route",
								stroke: "var(--color-info)",
								strokeWidth: 1.6,
								strokeDasharray: "3 3",
								dot: false,
								isAnimationActive: false
							}) : null,
							model.activationName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "metab",
								name: model.activationName,
								stroke: "var(--color-danger)",
								strokeWidth: 1.6,
								strokeDasharray: "5 4",
								dot: false,
								isAnimationActive: false
							}) : null
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-md bg-bg-sunken" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-wide text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-5 bg-subtle" }), " Unperturbed"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-5 bg-accent" }), " This desk"]
					}),
					alt && showAlt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-5 bg-info" }),
							" ",
							altSpec?.label
						]
					}) : null,
					model.activationName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-px w-5 bg-danger" }),
							" ",
							model.activationName
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto normal-case tracking-normal text-subtle",
						children: model.horizonH >= 48 ? "hours → days" : "hours"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-fg",
				children: model.note
			}),
			tau > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs leading-relaxed text-muted",
				children: [
					"Rac ",
					fold(model.racBase),
					" → ",
					fold(model.rac),
					" at ",
					tau,
					"h. Linear superposition — not a trough and not TDM."
				]
			}) : null,
			moved && model.drivers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-1",
				children: model.drivers.slice(0, 4).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-xs leading-relaxed text-muted",
					children: d
				}, d))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: "Add an inhibitor, flip a metabolizer, tap q8h, or overlay the other route to move the curve."
			})
		]
	});
}
function Stat$1({ k, v, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-bg-sunken px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[10px] uppercase tracking-wide text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("mt-0.5 font-mono text-sm tabular-nums", hot ? "text-danger" : "text-fg"),
			children: v
		})]
	});
}
function fold(n) {
	if (!Number.isFinite(n)) return "—";
	if (n >= 10) return `${n.toFixed(0)}×`;
	if (n >= 2 || n <= .5) return `${n.toFixed(1)}×`;
	return `${n.toFixed(2)}×`;
}
function fmtH(h) {
	if (h >= 48) return `${(h / 24).toFixed(h >= 96 ? 0 : 1)}d`;
	if (h >= 10) return `${h.toFixed(0)}h`;
	return `${h.toFixed(1)}h`;
}
function axisT(t, horizon) {
	if (horizon >= 48) return `${(t / 24).toFixed(t % 24 < .2 || t % 24 > 23.8 ? 0 : 1)}d`;
	return `${Math.round(t)}`;
}
function axisTicks(horizon) {
	const n = horizon >= 96 ? 4 : 5;
	return Array.from({ length: n + 1 }, (_, i) => horizon * i / n);
}
function PkTip({ active, payload, label, horizon, metabolite, altLabel }) {
	if (!active || !payload?.length) return null;
	const names = {
		base: "Unperturbed",
		desk: "This desk",
		metab: metabolite ?? "Metabolite",
		alt: altLabel ?? "Other route"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-surface-2 px-3 py-2 text-xs shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-[10px] uppercase tracking-wide text-muted",
			children: [fmtH(Number(label)), horizon >= 48 ? "" : " · h"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1 space-y-0.5",
			children: payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex justify-between gap-4 font-mono tabular-nums",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: names[String(p.dataKey)] ?? p.dataKey
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: Number(p.value ?? 0).toFixed(2)
				})]
			}, String(p.dataKey)))
		})]
	});
}
/** After Stripe Checkout returns, claim the paid session and activate the signed key. */
function StripeReturn({ ready }) {
	const activate = useDesk((s) => s.activateLicense);
	const openCheckout = useDesk((s) => s.openCheckout);
	const ran = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!ready || ran.current) return;
		if (typeof window === "undefined") return;
		const params = new URLSearchParams(window.location.search);
		const paid = params.get("fp_paid");
		const cancel = params.get("fp_cancel");
		if (!paid && !cancel) return;
		ran.current = true;
		const clean = () => {
			const url = new URL(window.location.href);
			url.searchParams.delete("fp_paid");
			url.searchParams.delete("fp_cancel");
			window.history.replaceState({}, "", url.pathname + url.search + url.hash);
		};
		if (cancel) {
			openCheckout("lab", "Card checkout was cancelled. Venmo, Cash App, and PayPal still close a sale.");
			clean();
			return;
		}
		(async () => {
			const res = await claimStripeCheckout({ data: { sessionId: paid ?? "" } });
			if (res.ok) activate({
				plan: res.plan,
				license: res.license,
				lifetime: res.lifetime
			});
			else openCheckout("lab", res.reason ?? "Payment did not clear.");
			clean();
		})();
	}, [
		ready,
		activate,
		openCheckout
	]);
	return null;
}
function readString$1(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
function readIds$1(input) {
	if (!input || typeof input !== "object") return [];
	const v = input.ids;
	if (!Array.isArray(v)) return [];
	return v.filter((x) => typeof x === "string").slice(0, 8);
}
var lookupLiveSources = createServerFn({ method: "POST" }).validator((input) => ({ id: readString$1(input, "id") })).handler(createSsrRpc("7b28598e8eb2bad644d0c312587b5f09ac1584adb3f466a08be60a89009342b3"));
var lookupRxnavInteractions = createServerFn({ method: "POST" }).validator((input) => ({ ids: readIds$1(input) })).handler(createSsrRpc("59d4cf41bb5f887a079781ba2a8bb5e7d49fa10d68af065cdce9e19c33bd837a"));
var searchTrials = createServerFn({ method: "POST" }).validator((input) => ({
	query: readString$1(input, "query"),
	ids: readIds$1(input)
})).handler(createSsrRpc("136f69ff59e46a1efad3665eb04abb5f1b33d58dd597235d8186a63332ae8472"));
var lookupCpicGuideline = createServerFn({ method: "POST" }).validator((input) => ({ name: readString$1(input, "name") })).handler(createSsrRpc("12c28728ffb922f158c1731585a27e29a86abec7b7afc80c10a97471cd162237"));
var CAT = {
	A: "Well-known cause",
	B: "Likely cause",
	C: "Probable cause",
	D: "Possible cause",
	E: "Unlikely / unproven"
};
function L(cat, pearl, nbk) {
	return nbk ? {
		cat,
		label: CAT[cat],
		pearl,
		nbk
	} : {
		cat,
		label: CAT[cat],
		pearl
	};
}
/** NCBI Bookshelf LiverTox chapter IDs (NBK…). */
var LIVERTOX = {
	acetaminophen: L("A", "Dose-dependent NAPQI. Chronic alcohol induces 2E1 and empties glutathione — the teaching hepatotoxin.", "NBK548162"),
	isoniazid: L("A", "The classic INH hepatitis. NAT2 slow acetylators stack parent. Stop the drug; it is not a taper.", "NBK548735"),
	valproate: L("A", "Boxed hepatotoxicity, especially under 2 years and in mitochondrial disease. Hyperammonemia can sit with normal LFTs.", "NBK548284"),
	amiodarone: L("A", "Phospholipidosis and steatohepatitis — months in, months out. The t½ is weeks; stopping is not a next-day fix.", "NBK548184"),
	methotrexate: L("A", "Chronic fibrotic injury on weekly rheumatology doses; acute on high-dose. NSAID and alcohol stack the risk.", "NBK548438"),
	ketoconazole: L("A", "The oral azole that earned a boxed hepatic warning. The CYP3A4 perpetrator is a different row.", "NBK548152"),
	nevirapine: L("A", "Idiosyncratic hepatitis and SJS, worst in the first weeks, worse at higher CD4 in some maps.", "NBK548584"),
	carbamazepine: L("A", "DRESS / vanishing bile duct more than a transaminase bump. HLA-B*15:02 is the rash gene, not this enzyme.", "NBK548027"),
	phenytoin: L("A", "DRESS and chronic injury. 2C9 PMs stack parent — a separate PK row.", "NBK548890"),
	diclofenac: L("A", "The NSAID with the loudest LiverTox file. Not interchangeable with naproxen on this axis.", "NBK548772"),
	fluconazole: L("B", "Quieter than ketoconazole, still a real hepatitis file — and a strong 2C9/2C19 perpetrator.", "NBK548238"),
	itraconazole: L("B", "Cholestatic and mixed injury. Heart-failure label is the other stop.", "NBK548073"),
	voriconazole: L("B", "Transaminitis is common; 2C19 PMs stack parent. Visual and periostitis are the other rows.", "NBK548206"),
	rifampin: L("A", "Cholestatic and mixed. The 3A4/2B6 induction that steals methadone is a different finding.", "NBK548151"),
	amoxicillin: L("B", "Usually the clavulanate combo (Augmentin) is the LiverTox villain — cholestatic, often delayed.", "NBK547854"),
	azithromycin: L("B", "Rare but real hepatocellular injury. QT is the louder row on this desk.", "NBK548434"),
	erythromycin: L("A", "Estolate especially — cholestatic. 3A4 inhibition and QT sit beside it.", "NBK547923"),
	terbinafine: L("A", "Cholestatic and mixed; can be delayed. 2D6 inhibition of metoprolol is the other row.", "NBK548169"),
	allopurinol: L("A", "DRESS / SCAR with HLA-B*58:01. The azathioprine marrow pair is xanthine oxidase, not this.", "NBK548108"),
	kava: L("A", "The herbal that earned a hepatotoxicity banner. Not a CYP perpetrator — a liver one.", "NBK548272"),
	"green-tea": L("B", "Concentrated EGCG extracts, not a cup of tea. Idiosyncratic hepatitis is documented.", "NBK547925"),
	"st-johns-wort": L("E", "Not a LiverTox villain. The damage is PXR / 3A4 and P-gp induction — stolen cyclosporine and indinavir.", "NBK548257"),
	disulfiram: L("A", "Hepatocellular injury independent of the acetaldehyde reaction. LFTs belong on the card.", "NBK547851"),
	tizanidine: L("C", "Transaminitis and rare injury. The loud desk story is 1A2 (cipro, fluvoxamine) hypotension.", "NBK548233"),
	atorvastatin: L("A", "Statins as a class are Category A; severe injury is still rare. Gemfibrozil is the muscle pair.", "NBK548232"),
	simvastatin: L("A", "Same class file. 3A4 inhibitors and grapefruit are the exposure story, not the idiosyncratic one.", "NBK548232"),
	lovastatin: L("A", "Monacolin K in red yeast rice is this molecule. Treat the bottle as a 3A4-sensitive statin.", "NBK548232"),
	"red-yeast-rice": L("C", "Monacolin K is lovastatin. Liver watch plus the 3A4/grapefruit map."),
	duloxetine: L("B", "Labeled hepatic warning — avoid in pre-existing liver disease. 2D6/1A2 substrate.", "NBK548243"),
	bupropion: L("C", "Rare hepatocellular reports. The desk story is 2D6 inhibition and seizure threshold.", "NBK548166"),
	chlorpromazine: L("A", "The phenothiazine that taught cholestatic jaundice.", "NBK548098"),
	haloperidol: L("C", "Rare cholestatic injury. QT and EPS are the daily rows.", "NBK548390"),
	lamotrigine: L("C", "DRESS more than isolated hepatitis. The boxed warning is SJS from titration.", "NBK548366"),
	olanzapine: L("C", "Metabolic and rare hepatocellular. Clozapine is the 1A2 cousin.", "NBK548234"),
	clozapine: L("C", "Rare injury; agranulocytosis and 1A2/smoke are the daily card.", "NBK548306"),
	risperidone: L("D", "Uncommon. 2D6 to paliperidone is the PK row.", "NBK548307"),
	sertraline: L("C", "Rare but documented. Hyponatremia is the louder SSRI clinic flag.", "NBK548182"),
	fluoxetine: L("D", "Uncommon. Strong 2D6 inhibition is the desk story.", "NBK548241"),
	paroxetine: L("D", "Uncommon. Strong 2D6 inhibitor and anticholinergic SSRI.", "NBK548215"),
	citalopram: L("D", "Uncommon. QT is the labeled row, not the liver.", "NBK548335"),
	lisinopril: L("C", "Rare. The boxed warning is fetal toxicity, not hepatitis.", "NBK548050"),
	metformin: L("E", "Not a hepatotoxin. Lactic acidosis in CKD is the stop.", "NBK548344"),
	infliximab: L("A", "Autoimmune-like hepatitis from TNF blockade.")
};
function livertoxFor(id) {
	return LIVERTOX[id];
}
function livertoxOnDesk(ids) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const id of ids) {
		if (seen.has(id)) continue;
		const card = LIVERTOX[id];
		if (!card) continue;
		seen.add(id);
		out.push({
			id,
			card
		});
	}
	return out;
}
function livertoxUrl(id, name) {
	const card = LIVERTOX[id];
	if (card?.nbk) return `https://www.ncbi.nlm.nih.gov/books/${card.nbk}/`;
	return `https://www.ncbi.nlm.nih.gov/books/NBK547852/?term=${encodeURIComponent(name)}`;
}
var LIVERTOX_CAT_TONE = {
	A: "danger",
	B: "warn",
	C: "info",
	D: "default",
	E: "default"
};
function c(id, rid, level, milk, infant, pearl) {
	return {
		id,
		rid,
		level,
		milk,
		infant,
		pearl
	};
}
var CARDS = {
	methadone: c("methadone", "~1–3%", "compatible", "Low RID on a stable OTP dose. Peak milk ~2–4 h after the bottle — not a reason to pump-and-dump.", "Watch the infant for sedation and poor weight gain. Neonatal opioid withdrawal is expected from in-utero exposure, not from usual milk doses.", "LactMed lists methadone as usually compatible. Do not stop OTP to breastfeed. Jones MOTHER is NAS after pregnancy, not a milk protocol."),
	buprenorphine: c("buprenorphine", "~<1%", "compatible", "Low RID. Sublingual film still yields little in milk. Naloxone in Suboxone is poorly bioavailable to the infant via milk.", "Watch sedation. NAS is the pregnancy row, not this one.", "Office-based and OTP both keep buprenorphine through lactation in most maps. Occupancy, not milligrams."),
	naltrexone: c("naltrexone", "low / limited", "caution", "Limited human milk data. Oral naltrexone appears in milk at low levels; IM Vivitrol is even thinner data.", "Theoretical μ blockade if the infant needed opioid analgesia.", "Alcohol-use-disorder naltrexone is not the same conversation as a Vivitrol shot in someone still using. Open LactMed."),
	naloxone: c("naloxone", "negligible", "compatible", "Poor oral bioavailability. Milk is not a naloxone delivery system.", "No meaningful infant opioid blockade from usual maternal IN / IM doses.", "The tray, not the milk. Give Narcan if the adult needs it."),
	nalmefene: c("nalmefene", "unknown", "caution", "No useful human milk data. Longer μ occupancy than naloxone is the adult row.", "Theoretical prolonged blockade.", "Opvee is a field antagonist, not a lactation drug. Open the label."),
	lofexidine: c("lofexidine", "unknown", "caution", "No useful milk data. α2 agonists can sedate.", "Watch infant sedation and tone if used short-term for withdrawal.", "Clonidine has more milk ink than Lucemyra. This is not a reason to skip withdrawal care."),
	clonidine: c("clonidine", "~1–2%", "caution", "Appears in milk. Used in pediatrics, so the RID is not exotic — still sedating.", "Hypotension, sedation, hypotonia reported at higher maternal doses.", "Short-term OTP adjunct is a different exposure than chronic HTN doses. Watch the infant."),
	sertraline: c("sertraline", "~0.5–1%", "compatible", "Often the SSRI picked in lactation. Low RID. Nor-sertraline is the metabolite.", "Occasional infant restlessness or sleep change. Most stay quiet.", "The benzo-cup false-positive is a different row from this milk card."),
	fluoxetine: c("fluoxetine", "~2–5%", "caution", "Long half-life. Norfluoxetine hangs in milk. Higher RID than sertraline.", "Colic, sleep, and rare hypotonia reports. Prefer sertraline or escitalopram if starting now.", "Do not stop a working Prozac solely to breastfeed without a plan. 2D6 phenoconversion is the other card."),
	paroxetine: c("paroxetine", "~1%", "compatible", "Low RID. Short half-life relative to fluoxetine.", "Usually quiet. Neonatal adaptation is the pregnancy row if they were on it at delivery.", "Strong 2D6 inhibitor — phenoconversion of codeine in milk is the nightmare row. Avoid codeine while paroxetine is on."),
	lithium: c("lithium", "~10–50%", "caution", "RID is not small. Infant serum can approach a third of maternal. Hydration and GFR swing the number.", "Monitor infant TSH, Cr, tone, and a level if the infant is unwell. Fever and dehydration raise infant levels.", "Not a free pass. Some maps still feed with TDM of the infant. Open LactMed and the Levels tab."),
	lamotrigine: c("lamotrigine", "~10%", "caution", "RID is real. Infant serum can be measurable. Clearance rises in pregnancy then crashes postpartum — that is the maternal row.", "Watch rash and sedation. Rare withdrawal if milk stops abruptly.", "Valproate is the UGT trap on the desk; this card is milk, not SJS."),
	valproate: c("valproate", "~1–6%", "caution", "Low-ish RID but a hepatotoxin and a teratogen. Milk is not the reason to pick it.", "Theoretical infant hepatotoxicity. Pregnancy avoid is louder than lactation caution.", "Do not start valproate to 'cover' bipolar in someone who can get pregnant. Lactation is the smaller card."),
	codeine: c("codeine", "variable", "avoid", "2D6 UM mothers convert to morphine in milk. The infant is the poor metabolizer of that morphine.", "Documented infant sedation and death in UM mothers. FDA warns against codeine in lactation.", "This is the PGx milk disaster. Tramadol is the same family. Morphine with a known dose is still not casual."),
	tramadol: c("tramadol", "variable", "avoid", "2D6 to the μ-active metabolite. Same UM-mother trap as codeine.", "Sedation, respiratory depression. FDA warns against tramadol in lactation.", "The PCP-cup false-positive is a different row. Do not send tramadol home with a nursing parent."),
	oxycodone: c("oxycodone", "~1–3%", "caution", "Short courses at low dose appear in some maps. RID climbs with dose.", "Watch infant sedation. Not a chronic milk opioid.", "Pressed 30s are fentanyl. That is not this card."),
	morphine: c("morphine", "~2–10%", "caution", "Immediate-release, low-dose, short course is the usual milk map. Avoid sustained-release.", "Sedation, poor feeding. The 2D6 story is codeine, not morphine itself.", "Post-op doses are not OTP. Do not confuse the two."),
	lorazepam: c("lorazepam", "~3%", "caution", "Glucuronidated. Short courses used. Chronic high dose is a different exposure.", "Sedation, poor feeding. Floppy infant if stacked at delivery.", "Often the benzo that misses the immunoassay — that is the UDS tab, not milk."),
	diazepam: c("diazepam", "~3–7%", "caution", "Long-acting. Nordiazepam hangs in milk. Not the first benzo in lactation.", "Sedation, poor weight gain with chronic maternal use.", "The cup was built for this family. Milk is still caution."),
	warfarin: c("warfarin", "negligible", "compatible", "Highly protein-bound. Milk transfer is tiny. INR the infant only if bleeding.", "Usually none. The pregnancy teratogen row is not this card.", "LMWH and warfarin are both used postpartum. DOACs have less milk data.")
};
function lactFor(id) {
	return CARDS[id];
}
function lactOnDesk(ids) {
	return ids.map((id) => CARDS[id]).filter((c) => Boolean(c));
}
function lactmedSearchUrl(name) {
	return `https://www.ncbi.nlm.nih.gov/books/?term=${encodeURIComponent(`${name} AND lactmed[book]`)}`;
}
function lactmedHomeUrl() {
	return "https://www.ncbi.nlm.nih.gov/books/NBK501922/";
}
function readString(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
function readIds(input) {
	if (!input || typeof input !== "object") return [];
	const v = input.ids;
	if (!Array.isArray(v)) return [];
	return v.filter((x) => typeof x === "string").slice(0, 8);
}
var searchPubmed = createServerFn({ method: "POST" }).validator((input) => ({
	query: readString(input, "query"),
	ids: readIds(input)
})).handler(createSsrRpc("9a94130689cbcdd872bc21b75ad6a07faed8f6939232c21d280adadc08ffd235"));
function Dossier({ ids, host }) {
	const present = ids.filter((id) => DRUG_BY_ID[id]);
	const [drugId, setDrugId] = (0, import_react.useState)(present[0] ?? "");
	const id = present.includes(drugId) ? drugId : present[0] ?? "";
	const drug = DRUG_BY_ID[id];
	const bank = id ? DRUGBANK[id] : void 0;
	const pgx = id ? pgxFor(id) : [];
	const stahl = id ? stahlFor(id) : null;
	const liver = id ? livertoxFor(id) : void 0;
	const lact = id ? lactFor(id) : void 0;
	const curated = (0, import_react.useMemo)(() => citesFor(present), [present.join("|")]);
	const [tab, setTab] = (0, import_react.useState)("stahl");
	const tabs = (0, import_react.useMemo)(() => {
		return [
			{
				id: "stahl",
				label: "Stahl",
				on: Boolean(stahl)
			},
			{
				id: "pgx",
				label: "PharmGKB",
				on: pgx.length > 0
			},
			{
				id: "drugbank",
				label: "DrugBank",
				on: Boolean(bank)
			},
			{
				id: "fda",
				label: "FDA",
				on: Boolean(drug && drug.kind === "drug")
			},
			{
				id: "rxnorm",
				label: "RxNorm",
				on: Boolean(drug && drug.kind === "drug")
			},
			{
				id: "pubchem",
				label: "PubChem",
				on: Boolean(drug)
			},
			{
				id: "liver",
				label: "LiverTox",
				on: Boolean(liver)
			},
			{
				id: "lactmed",
				label: "LactMed",
				on: Boolean(lact) || Boolean(drug)
			},
			{
				id: "pubmed",
				label: "PubMed",
				on: true
			},
			{
				id: "trials",
				label: "Trials",
				on: Boolean(drug && drug.kind === "drug")
			}
		];
	}, [
		stahl,
		pgx.length,
		bank,
		drug,
		liver,
		lact
	]);
	const liveTab = tabs.some((t) => t.id === tab && t.on) ? tab : tabs.find((t) => t.on)?.id ?? "drugbank";
	if (!drug) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Sources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "DrugBank, CPIC / ClinPGx, Stahl, OpenFDA, DailyMed, NDC, recalls, RxNorm, PubChem, LiverTox, LactMed, PubMed, ClinicalTrials.gov."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(t.id),
						disabled: !t.on,
						className: cn("h-10 rounded-full px-3 text-xs font-medium", liveTab === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg", !t.on && "opacity-40"),
						children: t.label
					}, t.id))
				})]
			}),
			present.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1",
				children: present.map((pid) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDrugId(pid),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", pid === id ? "bg-accent text-accent-fg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: DRUG_BY_ID[pid]?.name
				}, pid))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					liveTab === "stahl" ? stahl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StahlPanel, {
						name: drug.name,
						card: stahl
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
						"No Stahl-style receptor sketch for ",
						drug.name,
						". Psychotropics, MAT, and NMDA drugs get occupancy maps; many clinic staples are enzyme-only."
					] }) : null,
					liveTab === "pgx" ? pgx.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PgxPanel, {
						cards: pgx,
						host,
						name: drug.name
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
							"No CPIC-level PGx table mapped for ",
							drug.name,
							". Search",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
								href: `https://www.clinpgx.org/search?query=${encodeURIComponent(drug.name)}`,
								children: "ClinPGx"
							}),
							" ",
							"if a gene still belongs on the chart."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveCpic, { name: drug.name })]
					}) : null,
					liveTab === "drugbank" ? bank ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankPanel, { id }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
						"No DrugBank accession on this shelf",
						drug.kind !== "drug" ? " — food, herb, or host factor." : ".",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							href: drugbankSearchUrl(drug.name),
							children: "Search DrugBank"
						})
					] }) : null,
					liveTab === "fda" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FdaPanel, { id }) : null,
					liveTab === "rxnorm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RxnormPanel, { id }) : null,
					liveTab === "pubchem" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PubchemPanel, { id }) : null,
					liveTab === "liver" ? liver ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiverSource, { id }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
						"No LiverTox chapter mapped for ",
						drug.name,
						". Search",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							href: livertoxUrl(id, drug.name),
							children: "NIDDK LiverTox"
						}),
						"."
					] }) : null,
					liveTab === "lactmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LactPanel, {
						id,
						ids: present
					}) : null,
					liveTab === "pubmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PubmedPanel, {
						ids: present,
						curated
					}) : null,
					liveTab === "trials" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrialsPanel, { ids: present }) : null
				]
			})
		]
	});
}
function useLive(id, want) {
	const [pack, setPack] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!want || !id) return;
		let live = true;
		setBusy(true);
		setErr(null);
		lookupLiveSources({ data: { id } }).then((res) => {
			if (!live) return;
			setPack(res);
			if (!res.ok) setErr(res.reason ?? "Did not answer.");
		}).catch(() => {
			if (!live) return;
			setErr("Did not answer.");
			setPack(null);
		}).finally(() => {
			if (live) setBusy(false);
		});
		return () => {
			live = false;
		};
	}, [id, want]);
	return {
		pack,
		busy,
		err
	};
}
function FdaPanel({ id }) {
	const drug = DRUG_BY_ID[id];
	const { pack, busy, err } = useLive(id, true);
	if (!drug) return null;
	const label = pack?.label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			busy && !pack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Asking OpenFDA…"
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			pack?.reason && !label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: pack.reason
			}) : null,
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						label.brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: b
						}, b)),
						label.classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: c }, c)),
						label.unii[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] text-muted",
							children: ["UNII ", label.unii[0]]
						}) : null
					]
				}),
				label.boxed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-danger-soft px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-wide text-danger",
						children: "Boxed warning"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: label.boxed
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No boxed warning on the OpenFDA SPL we pulled."
				}),
				label.indications ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Indications. "
					}), label.indications]
				}) : null,
				label.contraindications ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Contraindications. "
					}), label.contraindications]
				}) : null,
				label.warnings ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg",
						children: "Warnings. "
					}), label.warnings]
				}) : null,
				label.interactions ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Label interactions. "
					}), label.interactions]
				}) : null,
				label.pregnancy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg",
						children: "Pregnancy excerpt. "
					}), label.pregnancy]
				}) : null,
				label.setId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${encodeURIComponent(label.setId)}`,
					children: "Open DailyMed"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: `https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=${encodeURIComponent(drug.name)}`,
					children: "Search DailyMed"
				})
			] }) : null,
			pack?.dailymed?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "DailyMed SPL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: pack.dailymed.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg",
							children: d.title
						}),
						d.published ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-muted",
							children: d.published
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							href: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${encodeURIComponent(d.setId)}`,
							children: "Open SPL"
						})
					]
				}, d.setId))
			})] }) : null,
			pack?.shortage?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "FDA shortage"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: pack.shortage.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-baseline justify-between gap-2 rounded-md bg-warn-soft px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-fg",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[11px] uppercase text-warn",
						children: [s.status, s.updated ? ` · ${s.updated}` : ""]
					})]
				}, `${s.name}-${i}`))
			})] }) : null,
			pack?.ndc?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "OpenFDA NDC"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: pack.ndc.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: n.brand || n.generic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-muted",
						children: [n.ndc, n.form ? ` · ${n.form}` : ""]
					})]
				}, n.ndc || n.brand))
			})] }) : null,
			pack?.recalls?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "FDA enforcement"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: pack.recalls.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-warn-soft px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-2",
						children: [
							r.classification ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "warn",
								children: r.classification
							}) : null,
							r.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted",
								children: r.status
							}) : null,
							r.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted",
								children: r.date
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: r.reason
					})]
				}, `${r.date}-${i}`))
			})] }) : null,
			pack?.faers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "FAERS reactions (counts, not rates)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 divide-y divide-border rounded-md bg-bg-sunken",
				children: pack.faers.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-fg",
						children: titleCase(f.term)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs tabular-nums text-muted",
						children: f.count.toLocaleString()
					})]
				}, f.term))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "OpenFDA SPL + FAERS + DailyMed + shortage + NDC + enforcement. Boxed language is the label’s, truncated. FAERS is raw reports — not incidence, not causation. Educational, not a complete label."
			})
		]
	});
}
function RxnormPanel({ id }) {
	const drug = DRUG_BY_ID[id];
	const { pack, busy, err } = useLive(id, true);
	if (!drug) return null;
	const rx = pack?.rxnorm;
	const rxcui = rx?.rxcui || pack?.label?.rxcui[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			busy && !pack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Asking RxNorm…"
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			rxcui ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm text-fg",
					children: ["RxCUI ", rxcui]
				}),
				rx?.brands.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-1.5",
					children: rx.brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "info",
						children: b
					}) }, b))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No brand names returned for this ingredient."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: `https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=${encodeURIComponent(rxcui)}`,
						children: "Open RxNav"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: `https://rxnav.nlm.nih.gov/REST/rxcui/${encodeURIComponent(rxcui)}/allrelated.json`,
						children: "Related JSON"
					})]
				})
			] }) : !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
				"RxNorm did not return an RxCUI for ",
				drug.name,
				".",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: `https://mor.nlm.nih.gov/RxNav/search?searchBy=String&searchTerm=${encodeURIComponent(drug.name)}`,
					children: "Search RxNav"
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "NLM RxNorm ingredient identifier and brand names (TTY=BN). Identity only — CYP scoring stays on this desk."
			})
		]
	});
}
function PubchemPanel({ id }) {
	const drug = DRUG_BY_ID[id];
	const { pack, busy, err } = useLive(id, true);
	if (!drug) return null;
	const chem = pack?.pubchem;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			busy && !pack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Asking PubChem…"
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			chem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-2 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-wide text-muted",
							children: "CID"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono text-sm text-fg",
							children: chem.cid
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-wide text-muted",
							children: "Formula"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono text-sm text-fg",
							children: chem.formula || "—"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-wide text-muted",
							children: "MW"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-mono text-sm text-fg",
							children: chem.mw || "—"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-wide text-muted",
							children: "InChIKey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "break-all font-mono text-xs text-fg",
							children: chem.inchikey || "—"
						})] })
					]
				}),
				chem.iupac ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: chem.iupac
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
						href: `https://pubchem.ncbi.nlm.nih.gov/compound/${encodeURIComponent(chem.cid)}`,
						children: ["Open CID ", chem.cid]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: `https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(drug.name)}`,
						children: "Search PubChem"
					})]
				})
			] }) : !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
				"PubChem did not return a CID for ",
				drug.name,
				".",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: `https://pubchem.ncbi.nlm.nih.gov/#query=${encodeURIComponent(drug.name)}`,
					children: "Search PubChem"
				})
			] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "NCBI PubChem PUG REST. Identity only — formula and InChIKey, not a docking score. Street items often still resolve here when OpenFDA does not."
			})
		]
	});
}
function TrialsPanel({ ids }) {
	const [hits, setHits] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const names = ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean);
	async function run() {
		setBusy(true);
		setErr(null);
		try {
			const res = await searchTrials({ data: {
				query: "",
				ids
			} });
			if (!res.ok) setErr(res.reason ?? "ClinicalTrials.gov did not answer.");
			setHits(res.hits);
		} catch {
			setErr("ClinicalTrials.gov did not answer.");
			setHits([]);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: [
					"Live NLM ClinicalTrials.gov v2 for ",
					names.join(" + ") || "this desk",
					". Status and phase only — not eligibility and not a protocol."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					disabled: busy || ids.length === 0,
					onClick: () => void run(),
					children: busy ? "Searching…" : "Search ClinicalTrials.gov"
				}), names.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: `https://clinicaltrials.gov/search?term=${encodeURIComponent(names.join(" "))}`,
					children: "Open CT.gov"
				}) : null]
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			hits && hits.length === 0 && !err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No studies returned for this query."
			}) : null,
			hits && hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-accent",
									children: h.nctId
								}),
								h.status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "info",
									children: h.status
								}) : null,
								h.phase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-muted",
									children: h.phase
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium leading-snug text-fg",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
							href: `https://clinicaltrials.gov/study/${encodeURIComponent(h.nctId)}`,
							children: ["Open ", h.nctId]
						})
					]
				}, h.nctId))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "ClinicalTrials.gov API v2. A hit is not an indication. Educational."
			})
		]
	});
}
function LiverSource({ id }) {
	const drug = DRUG_BY_ID[id];
	const card = livertoxFor(id);
	if (!drug || !card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl tracking-tight text-fg",
					children: drug.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: LIVERTOX_CAT_TONE[card.cat],
					children: [
						card.cat,
						" · ",
						card.label
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: card.pearl
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				href: livertoxUrl(id, drug.name),
				children: "Open LiverTox chapter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Likelihood paraphrases NIDDK LiverTox. Open the chapter for the official category, latency, and cases."
			})
		]
	});
}
function LactPanel({ id, ids }) {
	const drug = DRUG_BY_ID[id];
	const card = lactFor(id);
	const others = lactOnDesk(ids).filter((c) => c.id !== id);
	const tone = (level) => level === "compatible" ? "ok" : level === "caution" ? "warn" : "danger";
	if (!drug) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl tracking-tight text-fg",
							children: drug.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: tone(card.level),
							children: card.level
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[11px] text-muted",
							children: ["RID ", card.rid]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: card.pearl
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg",
						children: "Milk. "
					}), card.milk]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-fg",
						children: "Infant. "
					}), card.infant]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EmptySource, { children: [
				"No LactMed-style card mapped for ",
				drug.name,
				". Search",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: lactmedSearchUrl(drug.name),
					children: "NCBI LactMed"
				}),
				"."
			] }),
			others.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: others.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-fg",
								children: DRUG_BY_ID[c.id]?.name ?? c.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: tone(c.level),
								children: c.level
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-muted",
								children: ["RID ", c.rid]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: c.pearl
					})]
				}, c.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
					href: lactmedSearchUrl(drug.name),
					children: ["Search LactMed for ", drug.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: lactmedHomeUrl(),
					children: "LactMed home"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Relative infant dose is a teaching range, paraphrasing NIH LactMed. Not a measurement, not a pump-and-dump protocol, not a reason to stop OTP."
			})
		]
	});
}
function BankPanel({ id }) {
	const drug = DRUG_BY_ID[id];
	const bank = DRUGBANK[id];
	if (!bank || !drug) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm text-fg",
						children: bank.accession
					}),
					bank.extra?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted",
						children: x
					}, x)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "info",
						children: bank.group
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Primary targets as indexed on DrugBank. The CYP / PD score on this desk is FirstPass's own map, not a dump of their interaction engine."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-1.5",
				children: bank.targets.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t }) }, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3 pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
						href: drugbankUrl(bank.accession),
						children: ["Open ", bank.accession]
					}),
					bank.extra?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
						href: drugbankUrl(x),
						children: ["Open ", x]
					}, x)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: drugbankSearchUrl(drug.name),
						children: "Search DrugBank"
					})
				]
			})
		]
	});
}
function PgxPanel({ cards, host, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-sm text-fg",
						children: card.gene
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: card.cpic === "A" ? "accent" : card.cpic === "B" ? "warn" : "default",
						children: ["CPIC ", card.cpic]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: card.pearl
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-border rounded-md bg-bg-sunken",
					children: card.rows.map((row) => {
						const on = phenoMatches(card.gene, row.pheno, host);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: cn("grid gap-1 px-3 py-2.5 sm:grid-cols-[140px_minmax(0,1fr)]", on && "bg-accent-soft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-wide text-muted",
								children: row.pheno
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-fg",
								children: [row.action, on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 font-mono text-[10px] uppercase text-accent",
									children: "this host"
								}) : null]
							})]
						}, row.pheno);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: card.guideline,
						children: "CPIC guideline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: card.clinpgx,
						children: "ClinPGx / PharmGKB"
					})]
				})
			] }, card.gene)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveCpic, { name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Paraphrase of published CPIC / DPWG tables. Open the guideline for the official phenotype algorithm. Not a test order and not a dose."
			})
		]
	});
}
function LiveCpic({ name }) {
	const [hits, setHits] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	async function run() {
		setBusy(true);
		setErr(null);
		try {
			const res = await lookupCpicGuideline({ data: { name } });
			if (!res.ok) setErr(res.reason ?? "CPIC did not answer.");
			setHits(res.hits);
			if (res.ok && res.hits.length === 0) setErr(res.reason ?? "No guideline row.");
		} catch {
			setErr("CPIC did not answer.");
			setHits([]);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-bg-sunken px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-wide text-muted",
				children: "Live CPIC API"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"api.cpicpgx.org for ",
					name,
					". A hit is a published guideline, not a dose."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					disabled: busy || !name,
					onClick: () => void run(),
					children: busy ? "Asking CPIC…" : "Ask CPIC"
				})
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-danger",
				children: err
			}) : null,
			hits && hits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: h.guideline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-muted",
						children: h.drug
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
						href: h.url,
						children: "Open guideline"
					})
				] }, `${h.drugid}-${h.guideline}`))
			}) : null
		]
	});
}
function StahlPanel({ name, card }) {
	if (!card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-serif text-xl tracking-tight text-fg",
				children: card.spectrum
			})] }),
			card.occupancy.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: card.occupancy.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceptorBar, { o }) }, o.r))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No single-receptor occupancy — the ion / enzyme is the point."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: card.pearl
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: card.sides
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Educational receptor sketch in the Stahl method (spectrum first, occupancy, then side effects from those receptors). Original language — not a quotation of Stahl's Essential Psychopharmacology."
			})
		]
	});
}
function ReceptorBar({ o }) {
	const width = {
		1: "w-1/4",
		2: "w-1/2",
		3: "w-3/4",
		4: "w-full"
	}[o.n];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs text-fg",
			children: o.r
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-wide text-subtle",
			children: tick(o.n)
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-2 overflow-hidden rounded-full bg-bg-sunken",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-full rounded-full bg-accent", width) })
	})] });
}
function tick(n) {
	return "+".repeat(n);
}
function PubmedPanel({ ids, curated }) {
	const [live, setLive] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const names = ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean);
	async function runLive() {
		setBusy(true);
		setErr(null);
		try {
			const res = await searchPubmed({ data: {
				query: "",
				ids
			} });
			if (!res.ok) setErr(res.reason ?? "PubMed did not answer.");
			setLive(res.hits);
		} catch {
			setErr("PubMed did not answer.");
			setLive([]);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			curated.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: curated.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-accent",
								children: ["PMID ", c.pmid]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-muted",
								children: [
									c.year,
									" · ",
									c.journal
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium leading-snug text-fg",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: c.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
							href: pubmedUrl(c.pmid),
							children: ["Open ", c.pmid]
						})
					]
				}, c.pmid))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptySource, { children: "No curated paper on this pair yet. Search PubMed live, or browse the Cites shelf." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					disabled: busy || ids.length === 0,
					onClick: () => void runLive(),
					children: busy ? "Searching…" : "Search PubMed for this desk"
				}), names.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
					href: pubmedSearchUrl(`${names.join(" ")} drug interaction`),
					children: "Open NCBI"
				}) : null]
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			live && live.length === 0 && !err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "NCBI returned no hits for this query."
			}) : null,
			live && live.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: live.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline gap-x-2 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-accent",
								children: ["PMID ", c.pmid]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] text-muted",
								children: [
									c.year,
									" · ",
									c.journal
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium leading-snug text-fg",
							children: c.title
						}),
						c.authors ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: c.authors
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Out, {
							href: pubmedUrl(c.pmid),
							children: ["Open ", c.pmid]
						})
					]
				}, c.pmid))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Curated titles come from NCBI esummary. Live hits are E-utilities, not a dump of MEDLINE. Educational — not a complete literature search."
			})
		]
	});
}
function EmptySource({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm leading-relaxed text-muted",
		children
	});
}
function Out({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "inline-flex h-10 items-center gap-1.5 text-sm text-accent underline-offset-2 hover:underline",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
	});
}
function titleCase(s) {
	return s.toLowerCase().split(" ").map((w) => w ? w[0].toUpperCase() + w.slice(1) : w).join(" ");
}
function phenoMatches(gene, row, host) {
	const key = gene.split("/")[0]?.trim();
	if (!PHENOTYPE_ENZYMES.includes(key)) return false;
	const p = host.phenotypes[key];
	if (!p) return false;
	const token = row.toUpperCase();
	if (p === "PM") return token.includes("PM");
	if (p === "IM") return token.includes("IM") && !token.includes("PM");
	if (p === "UM") return token.includes("UM");
	if (p === "NM") return token.includes("NM") && !token.includes("UM");
	return false;
}
var ISMP = /* @__PURE__ */ new Set([
	"methadone",
	"fentanyl",
	"morphine",
	"hydromorphone",
	"oxycodone",
	"oxymorphone",
	"hydrocodone",
	"buprenorphine",
	"insulin-glargine",
	"warfarin",
	"apixaban",
	"rivaroxaban",
	"dabigatran",
	"enoxaparin",
	"methotrexate",
	"digoxin",
	"lithium",
	"clozapine",
	"propofol",
	"midazolam",
	"ketamine",
	"esketamine",
	"amiodarone",
	"sotalol",
	"naloxone"
]);
var NIOSH = /* @__PURE__ */ new Set([
	"methotrexate",
	"valproate",
	"carbamazepine",
	"phenytoin",
	"spironolactone",
	"fluconazole",
	"risperidone",
	"paroxetine",
	"fluoxetine",
	"colchicine",
	"azathioprine",
	"mercaptopurine",
	"sirolimus",
	"tacrolimus",
	"cyclosporine",
	"mycophenolate"
]);
var REMS = {
	clozapine: "Clozapine REMS — ANC before dispense. The agranulocytosis boxed row.",
	esketamine: "Spravato REMS — healthcare setting, 2-hour watch, no driving.",
	buprenorphine: "MOUD buprenorphine is no longer X-waiver; some film / implant products still carry REMS paperwork."
};
function alertsFor(id) {
	const out = [];
	if (ISMP.has(id)) out.push({
		kind: "ismp",
		label: "ISMP high-alert",
		note: "Heightened risk of significant harm when used in error. Independent double-check culture, not a CYP finding."
	});
	if (NIOSH.has(id)) out.push({
		kind: "niosh",
		label: "NIOSH hazardous",
		note: "Occupational handling — crush, split, and compounding PPE. Not a patient counseling point by itself."
	});
	if (REMS[id]) out.push({
		kind: "rems",
		label: "REMS",
		note: REMS[id]
	});
	return out;
}
function alertsOnDesk(ids) {
	return ids.map((id) => ({
		id,
		flags: alertsFor(id)
	})).filter((row) => row.flags.length > 0);
}
var FLAG_TONE = {
	avoid: "danger",
	caution: "warn",
	ok: "ok"
};
function Flag({ label, flag, note, hot }) {
	if (!flag) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("rounded-md px-3 py-2.5", hot ? "bg-accent-soft" : "bg-bg-sunken"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium uppercase tracking-wide text-muted",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: FLAG_TONE[flag],
					children: flag
				}),
				hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-wide text-accent",
					children: "this host"
				}) : null
			]
		}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 text-sm leading-relaxed text-fg",
			children: note
		}) : null]
	});
}
function DrugClinic({ id, host }) {
	const drug = DRUG_BY_ID[id];
	const card = clinicFor(id);
	if (!drug || !card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-serif text-lg tracking-tight text-fg",
			children: drug.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-2 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
					label: "Pregnancy",
					flag: card.pregnancy,
					note: card.pregNote,
					hot: host.preg === "pregnant" && (card.pregnancy === "avoid" || card.pregnancy === "caution")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
					label: "Lactation",
					flag: card.lactation,
					note: card.lactNote,
					hot: host.preg === "lactating" && card.lactation === "avoid"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
					label: "Kidney",
					flag: card.renal,
					note: card.renalNote,
					hot: host.kidney === "ckd" && Boolean(card.renal && card.renal !== "ok")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
					label: "Liver",
					flag: card.hepatic,
					note: card.hepNote
				})
			]
		}),
		card.boxed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-relaxed text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: "Boxed / label. "
			}), card.boxed]
		}) : null,
		card.beers ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: cn("mt-2 text-sm leading-relaxed", host.age === "geriatric" ? "text-fg" : "text-muted"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: "Beers. "
				}),
				card.beers,
				host.age === "geriatric" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 font-mono text-[10px] uppercase text-accent",
					children: "this host"
				}) : null
			]
		}) : null,
		card.monitor?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-1.5",
			children: card.monitor.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "info",
				children: m
			}) }, m))
		}) : null,
		alertsFor(id).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-wrap gap-1.5",
			children: alertsFor(id).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: a.kind === "rems" ? "danger" : a.kind === "niosh" ? "warn" : "info",
				children: a.label
			}) }, a.kind))
		}) : null
	] });
}
function ClinicPanel({ ids, host }) {
	const present = ids.filter((id) => clinicFor(id));
	if (!present.length) return null;
	const labs = /* @__PURE__ */ new Set();
	for (const id of present) for (const m of clinicFor(id)?.monitor ?? []) labs.add(m);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Clinic card"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Pregnancy, kidney, liver, Beers, boxed language, and labs. Teaching notes — not a label and not a dose. Flip geriatric / CKD / pregnant on the host to score them."
			}),
			labs.size ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "self-center text-[11px] uppercase tracking-wide text-muted",
					children: "Monitor"
				}), [...labs].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "info",
					children: m
				}, m))]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-6",
				children: present.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugClinic, {
					id,
					host
				}, id))
			})
		]
	});
}
function CitesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [tag, setTag] = (0, import_react.useState)("all");
	const add = useDesk((s) => s.add);
	const selected = useDesk((s) => s.selected);
	const setView = useDesk((s) => s.setView);
	const rows = (0, import_react.useMemo)(() => {
		const found = searchCites(q);
		if (tag === "all") return found;
		return found.filter((c) => c.tags.includes(tag));
	}, [q, tag]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[220px_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
						src: "/plates/heme.jpg",
						alt: "",
						className: "h-36 w-full min-h-36 sm:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-5 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
								children: "PubMed shelf"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-2 font-serif text-2xl tracking-tight text-fg",
								children: [CITES.length, " papers this desk actually cites"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
								children: "Curated PMIDs for the collisions on this formulary — grapefruit, St. John's wort, CPIC tables, methadone QT, Hunter criteria, Beers 2023, phenoconversion, UDS false-positives, COWS, MOTHER. Open PubMed. Live NCBI search, PubChem, DailyMed, CPIC, ClinicalTrials.gov, and NIH RxClass sit on the Sources card once a pair is on the desk."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Filter by drug, PMID, CYP, author-story…",
					className: "h-12 w-full rounded-lg bg-surface-2 pl-10 pr-4 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: CITE_TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTag(t.id),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", tag === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: t.label
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [rows.length, " shown"]
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-xl bg-surface px-5 py-8 text-sm text-muted shadow-[var(--shadow-border)]",
				children: [
					"Nothing in this drawer matches.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-accent underline",
						href: pubmedSearchUrl(q || "drug interaction CYP"),
						target: "_blank",
						rel: "noreferrer",
						children: "Search PubMed"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: rows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CiteCard, {
					cite: c,
					selected,
					onAdd: (id) => {
						if (add(id)) setView("desk");
					}
				}, c.pmid))
			})
		]
	});
}
function CiteCard({ cite, selected, onAdd }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-accent",
					children: ["PMID ", cite.pmid]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[11px] text-muted",
					children: [
						cite.year,
						" · ",
						cite.journal
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-serif text-lg leading-snug tracking-tight text-fg",
				children: cite.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: cite.why
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: [cite.drugIds.map((id) => {
					const name = DRUG_BY_ID[id]?.name ?? id;
					const on = selected.includes(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: on || !DRUG_BY_ID[id],
						onClick: () => onAdd(id),
						className: cn("h-9 rounded-full px-3 text-xs font-medium", on ? "bg-accent-soft text-accent" : "bg-bg-sunken text-muted hover:text-fg"),
						children: name
					}, id);
				}), cite.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-9 rounded-full bg-bg px-3 text-xs leading-9 text-subtle",
					children: t
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: pubmedUrl(cite.pmid),
				target: "_blank",
				rel: "noreferrer",
				className: "mt-3 inline-flex h-10 items-center gap-1.5 text-sm text-accent underline-offset-2 hover:underline",
				children: ["Open PubMed", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
			})
		]
	});
}
function WindowBriefing({ ids, host, report }) {
	const brief = briefWindow(ids, report, host);
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!brief) return null;
	async function copy() {
		try {
			await navigator.clipboard.writeText(huddleText(brief));
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
							children: brief.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-serif text-lg tracking-tight text-fg",
							children: brief.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Considerations for independent review — not a treatment order. Confirm against the Prescribing Information. The label wins."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("inline-flex min-w-24 items-center justify-center rounded-sm px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider", severitySurface(brief.highest)),
						children: SEVERITY_LABEL[brief.highest]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						className: "h-10 min-w-24",
						onClick: () => void copy(),
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCopy, { className: "size-3.5" }), copied ? "Copied" : "Copy huddle"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuddleCol, {
						kicker: "Watch for",
						tone: brief.quiet ? "ok" : "danger",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: brief.watch.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-fg",
								children: w
							}, w))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuddleCol, {
						kicker: "Counsel",
						tone: "info",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-fg",
							children: brief.tell
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuddleCol, {
						kicker: "Consider / call",
						tone: "warn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-fg",
							children: brief.call
						})
					})
				]
			}),
			brief.tray.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "self-center text-[11px] uppercase tracking-wide text-muted",
					children: "On the tray"
				}), brief.tray.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: severityTone(brief.highest) === "danger" && t.includes("airway") ? "danger" : "info",
					children: t
				}, t))]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[11px] leading-relaxed text-subtle",
				children: PI_FOOTER
			})
		]
	});
}
function HuddleCol({ kicker, tone, children }) {
	const wash = tone === "danger" ? "bg-danger-soft" : tone === "warn" ? "bg-warn-soft" : tone === "ok" ? "bg-ok-soft" : "bg-info-soft";
	const ink = tone === "danger" ? "text-danger" : tone === "warn" ? "text-warn" : tone === "ok" ? "text-ok" : "text-info";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-lg px-3 py-3", wash),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("font-mono text-[10px] uppercase tracking-wide", ink),
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		})]
	});
}
function WindowExtras() {
	const selected = useDesk((s) => s.selected);
	const add = useDesk((s) => s.add);
	const remove = useDesk((s) => s.remove);
	const plan = usePlan();
	const cap = maxDrugs(plan);
	if (!isMatDesk(selected) || selected.length === 0) return null;
	const on = new Set(selected);
	const full = selected.length >= cap;
	function tap(id) {
		if (on.has(id)) {
			remove(id);
			return;
		}
		if (full) return;
		add(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
					children: "Today's extra"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-serif text-lg tracking-tight text-fg",
					children: "Window tray"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: ["Tap what they handed over the glass. Two-drug collisions stay free.", full ? " Remove one to add another." : ""]
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children: WINDOW_EXTRAS.map((row) => {
				const items = row.items.filter((item) => DRUG_BY_ID[item.id]);
				if (!items.length) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-wide text-muted",
						children: row.group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-subtle",
						children: row.hint
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: items.map((item) => {
						const live = on.has(item.id);
						const locked = full && !live;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: locked,
							onClick: () => tap(item.id),
							"aria-pressed": live,
							className: cn("h-10 rounded-full px-3 text-xs font-medium", live ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg", locked && "cursor-not-allowed opacity-40"),
							children: item.label
						}, item.id);
					})
				})] }, row.group);
			})
		})]
	});
}
function qtcOf({ qtMs, hr }) {
	if (!Number.isFinite(qtMs) || !Number.isFinite(hr) || qtMs < 200 || qtMs > 800 || hr < 30 || hr > 220) return null;
	const rr = 60 / hr;
	const bazett = qtMs / Math.sqrt(rr);
	const fridericia = qtMs / rr ** (1 / 3);
	let note = "Fridericia is quieter at high heart rates. Bazett over-corrects tachycardia.";
	if (bazett >= 500 || fridericia >= 500) note = "≥500 ms on either formula is the classic high-risk teaching cut — electrolytes, stop a possible-risk agent if you can. Not a diagnosis of TdP.";
	else if (bazett >= 470) note = "Prolonged on many maps (often ~450 men / ~470 women). This desk is not sex-adjusted and not an ECG.";
	return {
		rr: Math.round(rr * 1e3) / 1e3,
		bazett: Math.round(bazett),
		fridericia: Math.round(fridericia),
		note
	};
}
function crclOf({ age, weightKg, scr, sex }) {
	if (!Number.isFinite(age) || !Number.isFinite(weightKg) || !Number.isFinite(scr) || age < 18 || age > 110 || weightKg < 30 || weightKg > 250 || scr <= 0 || scr > 20) return null;
	const crcl = (140 - age) * weightKg * (sex === "female" ? .85 : 1) / (72 * scr);
	const rounded = Math.round(crcl);
	let band = "usual";
	let note = "Cockcroft–Gault, not CKD-EPI. Many labels still dose on this number. IBW vs total weight is a separate argument for obesity.";
	if (rounded < 30) {
		band = "severe";
		note = "CrCl <30 — several NTI and DOAC rows on this desk become avoid or specialist-only. Flip CKD on the host to score them.";
	} else if (rounded < 60) {
		band = "caution";
		note = "CrCl 30–59. Dose-cuts live here for dabigatran, gabapentin, lithium, enoxaparin. Flip CKD on the host.";
	}
	return {
		crcl: rounded,
		band,
		note
	};
}
function phenytoinCorrected({ total, albumin, crclLow }) {
	if (!Number.isFinite(total) || !Number.isFinite(albumin) || total <= 0 || total > 80 || albumin < .8 || albumin > 6) return null;
	const corrected = total / ((crclLow ? .1 : .2) * albumin + .1);
	const rounded = Math.round(corrected * 10) / 10;
	let note = "Sheiner–Tozer. Corrected ≈ total / ((0.2 × albumin) + 0.1). CrCl <10 uses 0.1 × albumin. A free level is better when you can get one.";
	if (rounded >= 20) note = `Corrected ~${rounded} µg/mL — nystagmus teaching starts around 20 total. This is not a free phenytoin and not a dose cut.`;
	return {
		corrected: rounded,
		note
	};
}
/** QT stack map. Teaching — not Bazett, not a QTc, not CredibleMeds. */
var NOTE = {
	methadone: "Dose-related; citalopram / erythromycin / hypokalemia stack it.",
	citalopram: "Labeled 40 mg cap (20 mg older / 2C19 PM). Escitalopram is quieter, not silent.",
	escitalopram: "Quieter than racemic citalopram. Still a known-risk SSRI.",
	sotalol: "The indication is the QT. Bradycardia plus low K is torsades weather.",
	amiodarone: "Prolongs QT, relatively low TdP for the milliseconds — still not a free stack.",
	ziprasidone: "Known-risk antipsychotic. Feed it (~500 kcal) or F falls — QT does not vanish.",
	haloperidol: "IV is the loud labeled row. Oral still counts on a methadone desk.",
	ondansetron: "IV more than oral. Next to methadone it is not a free antiemetic.",
	moxifloxacin: "The FQ with the loudest QT file.",
	levofloxacin: "Possible. Stack, do not shrug.",
	azithromycin: "Possible / conditional — the Z-pak is not a free macrolide on a QT desk.",
	clarithromycin: "3A4 perpetrator plus QT. The victim (methadone, quetiapine) is how TdP arrives.",
	erythromycin: "3A4 plus QT. IV erythromycin is the classic teaching case.",
	quetiapine: "Possible as monotherapy; known-risk partners (methadone, citalopram) make it count.",
	hydroxychloroquine: "Known-risk at higher/chronic doses. Retinopathy is the other monitor.",
	ranolazine: "Labeled QT. Strong 3A4 inhibitors are contraindicated.",
	loperamide: "P-gp knockout turns Imodium into a central opioid with QT.",
	"dirty-30": "Pressed 30s — fentanyl + who-knows. Treat as a full agonist with unknown QT load."
};
function riskOf(d) {
	if (d.pd.includes("qt-known")) return "known";
	if (d.pd.includes("qt-possible")) return "possible";
	return null;
}
function qtReport(ids, host) {
	const rows = [];
	for (const id of ids) {
		const d = DRUG_BY_ID[id];
		if (!d) continue;
		const risk = riskOf(d);
		if (!risk) continue;
		rows.push({
			id,
			name: d.name,
			risk,
			note: NOTE[id] ?? d.toxicityHint
		});
	}
	if (!rows.length) return null;
	const known = rows.filter((r) => r.risk === "known").length;
	const possible = rows.filter((r) => r.risk === "possible").length;
	const score = known * 2 + possible;
	const amplifiers = [];
	const drugs = ids.map((id) => DRUG_BY_ID[id]).filter(Boolean);
	if (drugs.some((d) => d.pd.includes("hypokalemic") || d.pd.includes("loop-thiazide"))) amplifiers.push("Hypokalemia on this desk (loop/thiazide or glycyrrhizin). Low K is how milliseconds become torsades.");
	if (host.kidney === "ckd") amplifiers.push("CKD — several QT drugs and their electrolytes accumulate.");
	if (host.age === "geriatric") amplifiers.push("Geriatric host — bradycardia, polypharmacy, and lower reserve.");
	if (drugs.some((d) => d.id === "ondansetron" || d.id === "promethazine") && drugs.some((d) => d.id === "methadone")) amplifiers.push("OTP antiemetic on methadone — pick the quieter nausea plan.");
	return {
		rows,
		score,
		known,
		possible,
		amplifiers,
		headline: known >= 2 || score >= 4 ? `${known} known-risk + ${possible} possible — this is a QT stack, not a footnote.` : known === 1 && possible >= 1 ? `${rows[0]?.name} is known-risk; ${possible} more possible agents sit beside it.` : known === 1 ? `${rows.find((r) => r.risk === "known")?.name} is a known-risk QT drug. One agent can still be enough with low K.` : `${possible} possible-risk agents. Conditional until you stack, starve potassium, or add a 3A4 inhibitor.`,
		tell: score >= 4 ? "ECG, potassium, magnesium. Drop a possible-risk agent if you can. This is not a QTc calculator." : "Watch the milliseconds and the potassium. CredibleMeds is the public list; this desk is a stack map."
	};
}
/** Teaching reversal / antidote map. Not a tox protocol and not a dose. */
var RULES = [
	{
		ids: [
			"fentanyl",
			"dirty-30",
			"heroin",
			"oxycodone",
			"hydrocodone",
			"morphine",
			"hydromorphone",
			"oxymorphone",
			"methadone",
			"codeine",
			"tramadol",
			"tapentadol",
			"meperidine",
			"loperamide",
			"carfentanil",
			"isotonitazene",
			"protonitazene",
			"metonitazene",
			"etonitazene",
			"seven-oh",
			"pressed-30"
		],
		card: {
			agent: "Naloxone",
			for: "μ-agonist apnea",
			kind: "antidote",
			pearl: "Reverses the opioid. Does not reverse xylazine, medetomidine, or a benzo. Pressed 30s still get naloxone first — then the α2 residual."
		}
	},
	{
		ids: ["nalmefene"],
		card: {
			agent: "Nalmefene (Opvee)",
			for: "μ-agonist apnea, longer occupancy",
			kind: "antidote",
			pearl: "Longer μ occupancy than naloxone. After a fentanyl or nitazene fold they can re-narcotize — or look over-reversed for hours. Not a CYP substrate. Not a field protocol.",
			caution: "Do not stack with naloxone as two protocols. Pick one antagonist and support the airway."
		}
	},
	{
		ids: [
			"xylazine",
			"medetomidine",
			"clonidine",
			"lofexidine",
			"dexmedetomidine",
			"guanfacine"
		],
		card: {
			agent: "Naloxone will not reverse this",
			for: "α2 agonist",
			kind: "will-not",
			pearl: "Airway, fluids, and time. Naloxone still belongs on the tray for the opioid it is usually cut with."
		}
	},
	{
		pd: ["benzo-zdrug"],
		card: {
			agent: "Flumazenil (rarely)",
			for: "iatrogenic benzo",
			kind: "support",
			pearl: "Not a street-benzo antidote. Seizures in dependent patients. Support the airway first.",
			caution: "Contraindicated after a mixed TCA / unknown overdose."
		}
	},
	{
		ids: ["acetaminophen", "nac"],
		card: {
			agent: "N-acetylcysteine",
			for: "APAP / NAPQI",
			kind: "antidote",
			pearl: "Rumack-Matthew is the nomogram, not a vibe. Chronic alcohol empties glutathione — NAC is still the antidote, not a CYP play."
		}
	},
	{
		ids: ["warfarin", "vitamin-k"],
		card: {
			agent: "Vitamin K / PCC",
			for: "warfarin INR",
			kind: "antidote",
			pearl: "Phytonadione is the antidote. A kale smoothie is the same cofactor in a blender. DOACs do not reverse with K."
		}
	},
	{
		ids: ["dabigatran"],
		card: {
			agent: "Idarucizumab",
			for: "dabigatran",
			kind: "antidote",
			pearl: "Praxbind. Not vitamin K, not andexanet. Severe CKD is why this drug was already a no."
		}
	},
	{
		ids: ["apixaban", "rivaroxaban"],
		card: {
			agent: "Andexanet alfa / PCC",
			for: "oral Xa inhibitor",
			kind: "antidote",
			pearl: "Andexxa is labeled; 4-factor PCC is what most desks actually have. Stopping the DOAC is not vitamin K."
		}
	},
	{
		ids: ["enoxaparin"],
		card: {
			agent: "Protamine (partial)",
			for: "LMWH",
			kind: "support",
			pearl: "Protamine fully reverses unfractionated heparin; LMWH is only partial. Time and pressure still matter."
		}
	},
	{
		ids: ["digoxin"],
		card: {
			agent: "Digoxin immune Fab",
			for: "digoxin",
			kind: "antidote",
			pearl: "DigiFab when K is high, heart is slow, or the milligrams were a bottle. Hypokalemia makes a ‘normal’ level toxic — replace K, do not just order the Fab."
		}
	},
	{
		pd: [
			"serotonergic",
			"ssri-snri",
			"maoi"
		],
		card: {
			agent: "Cyproheptadine (adjunct)",
			for: "serotonin toxicity",
			kind: "support",
			pearl: "Stop the serotonergic, benzodiazepines, cooling. Cyproheptadine is an antihistamine with 5-HT2A block — adjunct, not a protocol. Hunter criteria sit on the next tab."
		}
	},
	{
		ids: [
			"haloperidol",
			"chlorpromazine",
			"metoclopramide",
			"risperidone",
			"paliperidone"
		],
		card: {
			agent: "Dantrolene / bromocriptine (NMS)",
			for: "neuroleptic malignant syndrome",
			kind: "support",
			pearl: "Lead-pipe rigidity, bradyreflexia, slower onset. Not Hunter. Stop the dopamine blocker. Dantrolene and bromocriptine are specialist calls."
		}
	},
	{
		ids: [
			"diphenhydramine",
			"hydroxyzine",
			"oxybutynin",
			"benztropine",
			"scopolamine",
			"amitriptyline"
		],
		card: {
			agent: "Physostigmine (selected)",
			for: "anticholinergic delirium",
			kind: "support",
			pearl: "Hot, dry, mad, blind. Physostigmine is not automatic — TCA / wide-QRS is a no. Benzos for agitation first.",
			caution: "Avoid when the QRS is wide or a TCA is on the desk."
		}
	},
	{
		ids: [
			"metoprolol",
			"propranolol",
			"carvedilol",
			"sotalol"
		],
		card: {
			agent: "Glucagon / high-insulin euglycemia",
			for: "beta-blocker",
			kind: "support",
			pearl: "Glucagon bypasses the blocked receptor. Propranolol is the lipid-soluble CNS one. Not a CYP story."
		}
	},
	{
		ids: [
			"verapamil",
			"diltiazem",
			"amlodipine",
			"nifedipine",
			"felodipine"
		],
		card: {
			agent: "Calcium / high-insulin euglycemia",
			for: "calcium-channel blocker",
			kind: "support",
			pearl: "Amlodipine is the long one. Insulin-euglycemia is the modern pressor-adjacent move. Not naloxone."
		}
	},
	{
		ids: ["methotrexate"],
		card: {
			agent: "Leucovorin / glucarpidase",
			for: "methotrexate",
			kind: "antidote",
			pearl: "High-dose rescue is a nomogram. Weekly RA doses are not this row. NSAID and TMP-SMX delay clearance."
		}
	},
	{
		ids: ["isoniazid"],
		card: {
			agent: "Pyridoxine",
			for: "INH seizures",
			kind: "antidote",
			pearl: "Gram-for-gram B6 for a known INH ingestion. The hepatitis is a different stop."
		}
	},
	{
		ids: [
			"glimepiride",
			"glipizide",
			"glyburide"
		],
		card: {
			agent: "Octreotide + glucose",
			for: "sulfonylurea",
			kind: "antidote",
			pearl: "Glucose alone retriggers insulin. Octreotide shuts the release. GLP-1s are not this row."
		}
	},
	{
		ids: ["methadone"],
		card: {
			agent: "Naloxone (long watch)",
			for: "methadone apnea / QT",
			kind: "antidote",
			pearl: "t½ is long — naloxone infusions and a long observation. TdP is electrolytes and an ECG, not more Narcan."
		}
	},
	{
		ids: ["buprenorphine"],
		card: {
			agent: "Naloxone (high dose, maybe)",
			for: "buprenorphine",
			kind: "support",
			pearl: "High-affinity partial agonist. Standard naloxone may look weak. Precipitated withdrawal is the induction problem, not this row."
		}
	},
	{
		ids: ["naltrexone"],
		card: {
			agent: "Not an acute reversal",
			for: "precipitated withdrawal / Vivitrol",
			kind: "will-not",
			pearl: "Naltrexone is the antagonist already on board. Overdose after a missed Vivitrol week is lost tolerance — naloxone still, then a long watch."
		}
	}
];
function reversalOnDesk(ids) {
	const present = new Set(ids);
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const id of ids) {
		const drug = DRUG_BY_ID[id];
		if (!drug) continue;
		for (const rule of RULES) {
			const hitId = rule.ids?.includes(id);
			const hitPd = rule.pd?.some((p) => drug.pd.includes(p));
			if (!hitId && !hitPd) continue;
			const key = `${id}|${rule.card.agent}`;
			if (seen.has(key)) continue;
			seen.add(key);
			out.push({
				id,
				name: drug.name,
				card: rule.card
			});
		}
	}
	if (present.has("naloxone") && out.some((r) => r.card.agent.startsWith("Naloxone") && r.id !== "naloxone")) {}
	return out;
}
/** General population vs benign ethnic neutropenia, paraphrasing Clozapine REMS ANC tables. */
function ancBand(anc, ben) {
	if (!Number.isFinite(anc) || anc <= 0 || anc > 3e4) return {
		id: "invalid",
		label: "Need an ANC",
		tone: "warn",
		note: "Enter ANC as cells/µL (e.g. 1800). This is not a WBC and not the REMS website."
	};
	if (ben) {
		if (anc >= 1e3) return {
			id: "green",
			label: "BEN green",
			tone: "ok",
			note: "ANC ≥1000 in documented BEN is the usual continue band. Confirm the BEN designation in the REMS, not here."
		};
		if (anc >= 500) return {
			id: "yellow",
			label: "BEN yellow",
			tone: "warn",
			note: "ANC 500–999 in BEN is increased monitoring on the REMS table. This desk does not interrupt or continue clozapine."
		};
		return {
			id: "red",
			label: "BEN interrupt band",
			tone: "danger",
			note: "ANC <500 in BEN is the interrupt / hematology teaching cut. Open Clozapine REMS. Not a charted hold from FirstPass."
		};
	}
	if (anc >= 1500) return {
		id: "green",
		label: "Green",
		tone: "ok",
		note: "ANC ≥1500 is the usual continue band for general population. Smoke induction and fluvoxamine still move the level — that is the TDM tab."
	};
	if (anc >= 1e3) return {
		id: "yellow",
		label: "Yellow",
		tone: "warn",
		note: "ANC 1000–1499 is increased monitoring on the REMS table. Independently review. This desk does not schedule the next draw."
	};
	return {
		id: "red",
		label: "Interrupt band",
		tone: "danger",
		note: "ANC <1000 general population is the interrupt / hematology teaching cut. Open clozapine REMS and the PI. Not a dispense from this desk."
	};
}
function ancWanted(ids) {
	return ids.includes("clozapine");
}
/** Warfarin INR movers on this desk. Teaching — not a warfarin clinic protocol. */
var RAISE = /* @__PURE__ */ new Set([
	"amiodarone",
	"fluconazole",
	"miconazole",
	"metronidazole",
	"tmp-smx",
	"ciprofloxacin",
	"clarithromycin",
	"erythromycin",
	"sertraline",
	"fluoxetine",
	"paroxetine",
	"fish-oil",
	"nattokinase",
	"ginkgo",
	"garlic",
	"ibuprofen",
	"naproxen",
	"celecoxib",
	"ketorolac",
	"aspirin",
	"apixaban",
	"rivaroxaban",
	"dabigatran"
]);
var LOWER = /* @__PURE__ */ new Set([
	"rifampin",
	"carbamazepine",
	"phenytoin",
	"phenobarbital",
	"primidone",
	"st-johns-wort",
	"vitamin-k",
	"kale",
	"spinach",
	"broccoli"
]);
var HOW_RAISE = {
	amiodarone: "2C9 / 3A4 block — INR climbs over weeks, not overnight.",
	fluconazole: "2C9 inhibition. The azole that actually moves warfarin.",
	"tmp-smx": "2C9 plus displacement. A UTI pill is a classic INR spike.",
	ciprofloxacin: "Quieter than TMP-SMX, still a bump. QT is the other methadone row.",
	sertraline: "Bleed is PD (platelet serotonin) more than 2C9.",
	"fish-oil": "High-dose EPA/DHA — bleed, not CYP.",
	nattokinase: "The 'clot buster' bottle next to a VKA.",
	ibuprofen: "NSAID plus warfarin — GI bleed even if INR looks polite."
};
var HOW_LOWER = {
	rifampin: "Pan-induction. INR falls hard. Stolen warfarin, stolen methadone.",
	carbamazepine: "3A4/2C9 induction. Autoinduction over weeks.",
	phenytoin: "Mixed — can raise then lower. TDM both drugs.",
	"st-johns-wort": "3A4/2C9 induction in a tea.",
	"vitamin-k": "The antidote in a gummy. Same cofactor as kale.",
	kale: "Phylloquinone smoothie — INR falls, not 2C9."
};
function inrOnDesk(ids) {
	if (!ids.includes("warfarin")) return null;
	const raisers = ids.filter((id) => id !== "warfarin" && RAISE.has(id)).map((id) => ({
		id,
		name: DRUG_BY_ID[id]?.name ?? id,
		how: HOW_RAISE[id] ?? "Labeled or mapped INR / bleed bump. Open the PI."
	}));
	const lowers = ids.filter((id) => LOWER.has(id)).map((id) => ({
		id,
		name: DRUG_BY_ID[id]?.name ?? id,
		how: HOW_LOWER[id] ?? "Induction or vitamin K. INR falls."
	}));
	let pearl = "Warfarin is 2C9 (S) and 3A4 (R). A new perpetrator deserves an INR plan you own — this desk does not pick a milligram or a hold.";
	if (raisers.length && lowers.length) pearl = "Raisers and lowerers on the same board. Do not average them. Independently review.";
	else if (raisers.length) pearl = "Something on this desk can raise INR or bleed risk. Recheck is a clinician call, not a FirstPass order.";
	else if (lowers.length) pearl = "Something on this desk can dump INR. Leafy greens and inducers look the same on the strip.";
	return {
		raisers,
		lowers,
		pearl
	};
}
/** OTP / office-based MAT teaching tools. Not a protocol, not a milligram, not 42 CFR compliance software. */
var LAST_AGONISTS = [
	{
		id: "fentanyl",
		label: "Fentanyl / nitazene / pressed 30",
		hint: "Lipophilic depot. Occupancy can outlast the COWS."
	},
	{
		id: "short",
		label: "Heroin / oxycodone / hydro",
		hint: "Shorter μ occupancy than fentanyl or methadone."
	},
	{
		id: "methadone",
		label: "Methadone",
		hint: "Days of occupancy. A first film is not a methadone taper."
	},
	{
		id: "bup",
		label: "Already on buprenorphine",
		hint: "A film on a film is not precipitated withdrawal."
	},
	{
		id: "unknown",
		label: "Unknown supply",
		hint: "Treat as fentanyl until the cup or the story is better."
	}
];
function guessLastAgonist(ids) {
	if (ids.includes("methadone") && !ids.includes("buprenorphine")) return "methadone";
	if (ids.some((id) => [
		"fentanyl",
		"dirty-30",
		"pressed-30",
		"carfentanil",
		"isotonitazene",
		"protonitazene",
		"metonitazene",
		"etonitazene"
	].includes(id))) return "fentanyl";
	if (ids.some((id) => [
		"heroin",
		"oxycodone",
		"hydrocodone",
		"morphine",
		"hydromorphone"
	].includes(id))) return "short";
	if (ids.includes("buprenorphine") && !ids.includes("naltrexone")) return "bup";
	return "unknown";
}
/** Occupancy vs COWS. ASAM 2020 / SAMHSA TIP 63 teaching — not an induction order. */
function precipRisk(last, hours, cows) {
	const h = Number.isFinite(hours) ? hours : 0;
	const c = Number.isFinite(cows) ? cows : 0;
	if (last === "bup") return {
		tone: "ok",
		title: "Already on a partial agonist",
		body: "A film on a working film is occupancy continuity, not precipitated withdrawal. New full agonist on the desk is the other row.",
		consider: "If they missed doses and used a full agonist, this is a restart question — not a first-film protocol on this desk."
	};
	if (last === "methadone") return {
		tone: "danger",
		title: "Methadone occupancy lasts days",
		body: `Last methadone ~${Math.round(h)} h ago, COWS ${c}. A standard first film on recent methadone is a classic precip map. Micro-induction / Bernese maps exist in the literature; they are specialist, not this integer.`,
		consider: "Do not treat a high COWS as permission to start a film over methadone. Open the ASAM guideline. This desk does not pick milligrams."
	};
	if (last === "fentanyl" || last === "unknown") {
		if (h < 24) return {
			tone: "danger",
			title: "Fentanyl depot is still likely",
			body: `~${Math.round(h)} h since last use, COWS ${c}. Tissue fentanyl can still occupy μ when they look sick enough to start. A high COWS does not clear the receptor.`,
			consider: "Wait, or use a published low-dose / micro-induction map under a protocol you own. This desk is not that protocol."
		};
		if (h < 48 || c < 8) return {
			tone: "warn",
			title: "Occupancy may still be present",
			body: `~${Math.round(h)} h, COWS ${c}. Many office maps still wait past a day of fentanyl and for moderate COWS. Depot remains possible at 14.`,
			consider: "ASAM 2020 and TIP 63 discuss timing. Independently review. Do not chase precip by stacking film in the first stretch."
		};
		return {
			tone: "warn",
			title: "Standard maps often proceed — depot still possible",
			body: `~${Math.round(h)} h, COWS ${c}. Some published starts proceed here. Fentanyl in adipose can still precipitate. The integer is not the receptor.`,
			consider: "Name the risk. Have a rescue plan. This is not a go-ahead from FirstPass."
		};
	}
	if (h < 12 || c < 8) return {
		tone: "warn",
		title: "Short-acting — still early or still mild",
		body: `~${Math.round(h)} h, COWS ${c}. Short-acting maps often wait for moderate withdrawal. A COWS under ~8 is a common reason to wait.`,
		consider: "Re-score. Do not start a film to 'prevent' withdrawal that has not started. Occupancy first."
	};
	return {
		tone: "ok",
		title: "Short-acting, moderate COWS — many maps start here",
		body: `~${Math.round(h)} h, COWS ${c}. Heroin / oxycodone occupancy is usually gone in this window. Still not a milligram from this desk.`,
		consider: "Confirm the last agonist is actually short-acting. Pressed 30s are fentanyl until proven otherwise."
	};
}
function naltrexoneWashout(last, days, product) {
	const d = Number.isFinite(days) ? days : 0;
	const shot = product === "xr";
	const name = shot ? "XR-naltrexone (Vivitrol)" : "Oral naltrexone";
	if (last === "bup") return {
		tone: "warn",
		title: `${name} after buprenorphine`,
		body: `~${Math.round(d)} days off a partial agonist. Buprenorphine occupancy is long. A naloxone challenge is labeled teaching, not a dare.`,
		consider: "Open the Vivitrol / naltrexone PI. This desk does not time a shot."
	};
	if (last === "methadone") {
		if (d < 10) return {
			tone: "danger",
			title: "Too soon after methadone",
			body: `~${Math.round(d)} days. Methadone occupancy plus a μ-antagonist is precipitated withdrawal that lasts. Labels discuss ~10–14 days after long-acting agonists.`,
			consider: "Do not give XR-naltrexone to 'save a window.' Open the PI. Independent review."
		};
		return {
			tone: "warn",
			title: "Methadone washout in the labeled neighborhood",
			body: `~${Math.round(d)} days off methadone. Still confirm with a challenge if the story is soft. ${name} is not a rescue for a missed bottle.`,
			consider: "PI plus a documented challenge. Not a dose and not a standing order from this desk."
		};
	}
	if (d < (shot ? 7 : 7)) return {
		tone: "danger",
		title: `Too soon for ${name}`,
		body: `~${Math.round(d)} days after ${last === "fentanyl" || last === "unknown" ? "fentanyl-class" : "short-acting"} agonist. Labels typically discuss ~7–10 days after short-acting opioids. Fentanyl depot can run longer.`,
		consider: "Wait, or document a naloxone challenge you own. This desk does not clear a shot."
	};
	return {
		tone: "ok",
		title: "Washout in the usual labeled window",
		body: `~${Math.round(d)} days. ${name} maps often proceed after short-acting opioids here — still confirm occupancy. Unknown supply is fentanyl until it is not.`,
		consider: "Open DailyMed. A challenge is still reasonable if the history is thin."
	};
}
var TAKEHOME_DOMAINS = [
	{
		id: "uds",
		label: "Toxicology is explained",
		hint: "Unexpected cups have a story, not a surprise."
	},
	{
		id: "safe",
		label: "Safe storage",
		hint: "Lockbox, no kids, no shared bottle."
	},
	{
		id: "stable",
		label: "Clinically stable",
		hint: "No recent overdose, diversion, or chaotic window."
	},
	{
		id: "cns",
		label: "Airway extras named",
		hint: "Benzos, alcohol, gabapentinoids are on the desk, not hidden."
	},
	{
		id: "housing",
		label: "A place to keep it",
		hint: "Unstable housing is a clinical factor, not a moral one."
	},
	{
		id: "time",
		label: "Time in treatment considered",
		hint: "2024 rule: time is a factor, not a lock."
	}
];
var TAKEHOME_RULE = "42 CFR Part 8 (2024). SAMHSA replaced the old rigid take-home schedule with clinical judgment. This checklist is not an approval, not a SAMHSA form, and not a reason to dump a bottle. Independently review 89 FR 7528 and your state OTP rules.";
var ID_SCREENS = [
	{
		id: "hiv",
		label: "HIV",
		hint: "Offer test. ART boosters are a methadone / bup row."
	},
	{
		id: "hcv",
		label: "HCV Ab ± RNA",
		hint: "Epclusa on this desk dumps or nudges some OTP bottles."
	},
	{
		id: "hbv",
		label: "HBV",
		hint: "Vaccinate if non-immune. DAA can reactivate HBV."
	},
	{
		id: "syphilis",
		label: "Syphilis",
		hint: "ASAM / CDC STI screen on entry and when risk changes."
	},
	{
		id: "tb",
		label: "TB",
		hint: "Symptom screen ± IGRA. Rifampin is a stolen-dose card."
	},
	{
		id: "preg",
		label: "Pregnancy",
		hint: "Continue OTP. Do not detox to 'protect' the fetus."
	},
	{
		id: "hav",
		label: "HAV vaccine",
		hint: "Offer if not immune. Not a CYP row."
	}
];
function naloxoneCounsel(ids) {
	if (!ids.some((id) => {
		const d = DRUG_BY_ID[id];
		return d?.pd.includes("opioid") || d?.pd.includes("partial-opioid") || [
			"fentanyl",
			"dirty-30",
			"heroin",
			"pressed-30",
			"seven-oh"
		].includes(id);
	}) && !ids.includes("methadone") && !ids.includes("buprenorphine")) return null;
	const xyl = ids.some((id) => ["xylazine", "medetomidine"].includes(id));
	const lines = ["Coprescribe naloxone. Show them the device they will actually leave with.", "Second dose if they are not breathing. Stay. Do not use alone."];
	if (xyl) lines.push("Naloxone will not reverse xylazine or medetomidine. Airway still first; the opioid still gets naloxone.");
	lines.push("This is counseling, not a kit protocol and not a milligram.");
	return lines;
}
function methadoneMonitor(ids, qtPartner) {
	if (!ids.includes("methadone")) return null;
	if (qtPartner) return {
		tone: "danger",
		title: "Methadone plus another QT drug",
		body: "Label: QTc, electrolytes, stacked QT. A new Seroquel, citalopram, Z-Pak, or Cipro is a reason to look at the last ECG — not a milligram from this desk.",
		consider: "Baseline ECG teaching, K/Mg, and the partner on this board. Independently review the methadone PI."
	};
	return {
		tone: "warn",
		title: "Methadone QT watch",
		body: "Methadone label: QT prolongation, arrhythmia. Teaching cadence is baseline, after large dose changes, and when a QT partner lands. Not a standing ECG order from FirstPass.",
		consider: "Open the PI. Bedside tab has Bazett / Fridericia if you already have a strip."
	};
}
function otpWanted(ids) {
	return ids.some((id) => [
		"methadone",
		"buprenorphine",
		"naltrexone",
		"naloxone",
		"nalmefene",
		"lofexidine",
		"fentanyl",
		"dirty-30",
		"heroin",
		"xylazine",
		"pressed-30"
	].includes(id));
}
/**
* Hunter serotonin toxicity vs NMS teaching screen.
* Dunkley 2003 decision rules — not a diagnosis and not a score you chart.
*/
var HUNTER_FLAGS = [
	{
		key: "serotonergic",
		label: "Serotonergic agent",
		hint: "On this desk, or taken in the last 5 weeks (fluoxetine lingers)."
	},
	{
		key: "spontaneous",
		label: "Spontaneous clonus",
		hint: "Enough by itself."
	},
	{
		key: "inducible",
		label: "Inducible clonus",
		hint: "Needs agitation or diaphoresis."
	},
	{
		key: "ocular",
		label: "Ocular clonus",
		hint: "Needs agitation or diaphoresis — or fever + hypertonia."
	},
	{
		key: "agitation",
		label: "Agitation",
		hint: "Pairs with clonus."
	},
	{
		key: "diaphoresis",
		label: "Diaphoresis",
		hint: "Pairs with clonus."
	},
	{
		key: "tremor",
		label: "Tremor",
		hint: "Needs hyperreflexia."
	},
	{
		key: "hyperreflexia",
		label: "Hyperreflexia",
		hint: "Pairs with tremor. NMS is the opposite (bradyreflexia)."
	},
	{
		key: "hypertonia",
		label: "Hypertonia",
		hint: "Needs temperature >38 °C and ocular or inducible clonus."
	},
	{
		key: "fever",
		label: "Temperature >38 °C",
		hint: "Hunter uses 38, not 41."
	}
];
function hunterPositive(on) {
	if (!on.serotonergic) return false;
	if (on.spontaneous) return true;
	if (on.inducible && (on.agitation || on.diaphoresis)) return true;
	if (on.ocular && (on.agitation || on.diaphoresis)) return true;
	if (on.tremor && on.hyperreflexia) return true;
	if (on.hypertonia && on.fever && (on.ocular || on.inducible)) return true;
	return false;
}
function hunterWhy(on) {
	if (!on.serotonergic) return "Hunter requires a serotonergic agent in the history. Put one on the desk, or tick the first box if it is already in the patient.";
	if (on.spontaneous) return "Spontaneous clonus with a serotonergic agent — Hunter positive.";
	if (on.inducible && (on.agitation || on.diaphoresis)) return "Inducible clonus plus agitation or sweating — Hunter positive.";
	if (on.ocular && (on.agitation || on.diaphoresis)) return "Ocular clonus plus agitation or sweating — Hunter positive.";
	if (on.tremor && on.hyperreflexia) return "Tremor plus hyperreflexia — Hunter positive.";
	if (on.hypertonia && on.fever && (on.ocular || on.inducible)) return "Hypertonia, fever, and clonus — Hunter positive.";
	return "Not Hunter-positive on the boxes ticked. Absence is not proof — this is a teaching screen, not a rule-out.";
}
var SERO_PD = /* @__PURE__ */ new Set([
	"serotonergic",
	"ssri-snri",
	"maoi",
	"tryptophan"
]);
function serotonergicOnDesk(ids) {
	const out = [];
	for (const id of ids) {
		const d = DRUG_BY_ID[id];
		if (!d) continue;
		if (d.pd.some((p) => SERO_PD.has(p))) {
			const why = d.pd.includes("maoi") ? "MAOI — the loudest serotonin row" : d.pd.includes("ssri-snri") ? "SSRI / SNRI" : d.id === "tramadol" || d.id === "meperidine" ? "Weak μ plus serotonin" : d.id === "dextromethorphan" ? "DXM is serotonergic, not just a cough syrup" : d.id === "mdma" ? "Entactogen" : "Serotonergic";
			out.push({
				id,
				name: d.name,
				why
			});
		}
	}
	return out;
}
function nmsRiskOnDesk(ids) {
	const out = [];
	for (const id of ids) {
		const d = DRUG_BY_ID[id];
		if (!d) continue;
		if (/antipsychotic|phenothiazine/i.test(d.cls) || d.id === "haloperidol" || d.id === "metoclopramide" || d.id === "chlorpromazine" || d.id === "risperidone" || d.id === "paliperidone" || d.id === "quetiapine" || d.id === "olanzapine" || d.id === "aripiprazole" || d.id === "ziprasidone" || d.id === "lurasidone" || d.id === "clozapine") out.push({
			id,
			name: d.name
		});
	}
	return out;
}
function hunterPreset(ids) {
	return { serotonergic: serotonergicOnDesk(ids).length > 0 };
}
/** Wesson & Ling 2003. Eleven items, max 48. */
var COWS_ITEMS = [
	{
		id: "pulse",
		label: "Resting pulse",
		hint: "After sitting. Rate the rate, not anxiety.",
		options: [
			{
				score: 0,
				label: "≤80"
			},
			{
				score: 1,
				label: "81–100"
			},
			{
				score: 2,
				label: "101–120"
			},
			{
				score: 4,
				label: ">120"
			}
		]
	},
	{
		id: "sweat",
		label: "Sweating",
		hint: "Over the past 30 minutes, not the room.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Subjective chills"
			},
			{
				score: 2,
				label: "Flushed / moist face"
			},
			{
				score: 3,
				label: "Beads on the face"
			},
			{
				score: 4,
				label: "Streaming"
			}
		]
	},
	{
		id: "restless",
		label: "Restlessness",
		hint: "Observation. Difficulty sitting still.",
		options: [
			{
				score: 0,
				label: "Still"
			},
			{
				score: 1,
				label: "Subjective"
			},
			{
				score: 3,
				label: "Frequent shifting"
			},
			{
				score: 5,
				label: "Cannot sit"
			}
		]
	},
	{
		id: "pupil",
		label: "Pupil size",
		hint: "In ambient light.",
		options: [
			{
				score: 0,
				label: "Pinned / normal"
			},
			{
				score: 1,
				label: "Maybe large"
			},
			{
				score: 2,
				label: "Moderately dilated"
			},
			{
				score: 5,
				label: "Only iris rim"
			}
		]
	},
	{
		id: "aches",
		label: "Bone / joint aches",
		hint: "Not the chronic pain they walked in with.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Mild"
			},
			{
				score: 2,
				label: "Severe, shifting"
			},
			{
				score: 4,
				label: "Rubbing joints"
			}
		]
	},
	{
		id: "nose",
		label: "Runny nose / tearing",
		hint: "Not a cold. Not allergies they named on intake.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Subjective"
			},
			{
				score: 2,
				label: "Nose or eyes running"
			},
			{
				score: 4,
				label: "Constant"
			}
		]
	},
	{
		id: "gi",
		label: "GI upset",
		hint: "Last 30 minutes.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Cramps"
			},
			{
				score: 2,
				label: "Nausea"
			},
			{
				score: 3,
				label: "Vomiting or loose"
			},
			{
				score: 5,
				label: "Multiple vomits / diarrhea"
			}
		]
	},
	{
		id: "tremor",
		label: "Tremor",
		hint: "Outstretched hands.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Felt, not seen"
			},
			{
				score: 2,
				label: "Slight"
			},
			{
				score: 4,
				label: "Gross"
			}
		]
	},
	{
		id: "yawn",
		label: "Yawning",
		hint: "Observation during the interview.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Subjective"
			},
			{
				score: 2,
				label: "Two or three"
			},
			{
				score: 4,
				label: "Several / unstoppable"
			}
		]
	},
	{
		id: "anxiety",
		label: "Anxiety / irritability",
		hint: "Observation plus report.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Subjective"
			},
			{
				score: 2,
				label: "Obviously irritable"
			},
			{
				score: 4,
				label: "Severe, so that it is hard to interview"
			}
		]
	},
	{
		id: "goose",
		label: "Gooseflesh",
		hint: "Arm. The most specific sign on this scale.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 3,
				label: "Palpable"
			},
			{
				score: 5,
				label: "Visible piloerection"
			}
		]
	}
];
var COWS_BANDS = [
	{
		id: "none",
		label: "None / minimal",
		min: 0,
		max: 4,
		note: "Not enough withdrawal to hang an induction on. Wait, or this is not opioid withdrawal."
	},
	{
		id: "mild",
		label: "Mild",
		min: 5,
		max: 12,
		note: "Many office protocols wait for ≥8–12 before a first film. Fentanyl in tissue can still precipitate at this number."
	},
	{
		id: "moderate",
		label: "Moderate",
		min: 13,
		max: 24,
		note: "Classic 'enough COWS' band. Recent fentanyl is still occupancy, not this integer."
	},
	{
		id: "mod-severe",
		label: "Moderately severe",
		min: 25,
		max: 36,
		note: "Uncomfortable. Supportive α2 (lofexidine / clonidine) is a different row from a film."
	},
	{
		id: "severe",
		label: "Severe",
		min: 37,
		max: 48,
		note: "Rare on a sitting interview. Recheck the pulse item. This desk is not an induction protocol."
	}
];
/** Sullivan 1989. Ten items, max 67. */
var CIWA_ITEMS = [
	{
		id: "nausea",
		label: "Nausea / vomiting",
		hint: "Ask, then observe.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Mild nausea"
			},
			{
				score: 4,
				label: "Intermittent dry heaves"
			},
			{
				score: 7,
				label: "Constant / vomiting"
			}
		]
	},
	{
		id: "tremor",
		label: "Tremor",
		hint: "Arms extended, fingers spread.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Not visible, can be felt"
			},
			{
				score: 4,
				label: "Moderate, arms extended"
			},
			{
				score: 7,
				label: "Severe, even at rest"
			}
		]
	},
	{
		id: "sweat",
		label: "Paroxysmal sweats",
		hint: "Observation.",
		options: [
			{
				score: 0,
				label: "No sweat"
			},
			{
				score: 1,
				label: "Barely moist"
			},
			{
				score: 4,
				label: "Beads of sweat"
			},
			{
				score: 7,
				label: "Drenching"
			}
		]
	},
	{
		id: "anxiety",
		label: "Anxiety",
		hint: "Ask 'do you feel nervous?'",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Mildly anxious"
			},
			{
				score: 4,
				label: "Moderately anxious / guarded"
			},
			{
				score: 7,
				label: "Acute panic"
			}
		]
	},
	{
		id: "agitation",
		label: "Agitation",
		hint: "Observation.",
		options: [
			{
				score: 0,
				label: "Normal activity"
			},
			{
				score: 1,
				label: "Somewhat more than normal"
			},
			{
				score: 4,
				label: "Moderately fidgety"
			},
			{
				score: 7,
				label: "Paces or thrashes"
			}
		]
	},
	{
		id: "tactile",
		label: "Tactile disturbances",
		hint: "Itching, pins and needles, burning, bugs.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Very mild itching"
			},
			{
				score: 3,
				label: "Moderate"
			},
			{
				score: 4,
				label: "Moderately severe hallucinations"
			},
			{
				score: 7,
				label: "Continuous tactile hallucinations"
			}
		]
	},
	{
		id: "auditory",
		label: "Auditory disturbances",
		hint: "Harshness, then voices.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Very mild harshness"
			},
			{
				score: 4,
				label: "Moderately severe hallucinations"
			},
			{
				score: 7,
				label: "Continuous auditory hallucinations"
			}
		]
	},
	{
		id: "visual",
		label: "Visual disturbances",
		hint: "Light sensitivity, then seeing things.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Very mild sensitivity"
			},
			{
				score: 4,
				label: "Moderately severe hallucinations"
			},
			{
				score: 7,
				label: "Continuous visual hallucinations"
			}
		]
	},
	{
		id: "headache",
		label: "Headache / fullness",
		hint: "Not for dizziness. Rate fullness in the head.",
		options: [
			{
				score: 0,
				label: "None"
			},
			{
				score: 1,
				label: "Very mild"
			},
			{
				score: 4,
				label: "Moderate"
			},
			{
				score: 7,
				label: "Extremely severe"
			}
		]
	},
	{
		id: "orient",
		label: "Orientation",
		hint: "Person, place, time, current events. Max 4.",
		options: [
			{
				score: 0,
				label: "Oriented"
			},
			{
				score: 1,
				label: "Unsure of date"
			},
			{
				score: 2,
				label: "Disoriented date by ≤2 days"
			},
			{
				score: 3,
				label: "Disoriented date by >2 days"
			},
			{
				score: 4,
				label: "Disoriented to place / person"
			}
		]
	}
];
var CIWA_BANDS = [
	{
		id: "mild",
		label: "Mild",
		min: 0,
		max: 9,
		note: "Often supportive care. This desk is not a benzo protocol."
	},
	{
		id: "moderate",
		label: "Moderate",
		min: 10,
		max: 15,
		note: "Many CIWA-driven pathways start symptom-triggered benzos around 8–10. Open the label."
	},
	{
		id: "severe",
		label: "Severe",
		min: 16,
		max: 67,
		note: "DT risk climbs. Seizure history is a different card. Get medical. Not a dose."
	}
];
function scoreOf(items, picked) {
	let n = 0;
	for (const item of items) {
		const v = picked[item.id];
		if (Number.isFinite(v)) n += v;
	}
	return n;
}
function bandOf(bands, total) {
	return bands.find((b) => total >= b.min && total <= b.max) ?? bands[bands.length - 1];
}
function cowsMax() {
	return COWS_ITEMS.reduce((n, i) => n + Math.max(...i.options.map((o) => o.score)), 0);
}
function ciwaMax() {
	return CIWA_ITEMS.reduce((n, i) => n + Math.max(...i.options.map((o) => o.score)), 0);
}
function cowsWanted(ids) {
	return ids.some((id) => [
		"methadone",
		"buprenorphine",
		"naltrexone",
		"naloxone",
		"nalmefene",
		"fentanyl",
		"dirty-30",
		"heroin",
		"lofexidine",
		"clonidine",
		"seven-oh"
	].includes(id));
}
function ciwaWanted(ids, alcohol) {
	return ids.includes("ethanol") || alcohol === "acute" || alcohol === "chronic" || ids.includes("disulfiram") || ids.includes("acamprosate");
}
function ClinicalBoard({ ids, host }) {
	const qt = (0, import_react.useMemo)(() => qtReport(ids, host), [
		ids.join("|"),
		host.age,
		host.kidney
	]);
	const levels = (0, import_react.useMemo)(() => tdmOnDesk(ids), [ids.join("|")]);
	const liver = (0, import_react.useMemo)(() => livertoxOnDesk(ids), [ids.join("|")]);
	const pheno = (0, import_react.useMemo)(() => phenoConvertOnDesk(ids, host), [ids.join("|"), host]);
	const reversal = (0, import_react.useMemo)(() => reversalOnDesk(ids), [ids.join("|")]);
	const mme = (0, import_react.useMemo)(() => mmeOnDesk(ids), [ids.join("|")]);
	const hunterOn = (0, import_react.useMemo)(() => serotonergicOnDesk(ids).length + nmsRiskOnDesk(ids).length > 0, [ids.join("|")]);
	const uds = (0, import_react.useMemo)(() => udsOnDesk(ids), [ids.join("|")]);
	const alerts = (0, import_react.useMemo)(() => alertsOnDesk(ids), [ids.join("|")]);
	const otp = otpWanted(ids);
	const ancOn = ancWanted(ids);
	const inr = (0, import_react.useMemo)(() => inrOnDesk(ids), [ids.join("|")]);
	const tabs = (0, import_react.useMemo)(() => {
		return [
			{
				id: "otp",
				label: "OTP",
				on: otp
			},
			{
				id: "qt",
				label: "QT",
				on: Boolean(qt)
			},
			{
				id: "levels",
				label: "Levels",
				on: levels.length > 0
			},
			{
				id: "liver",
				label: "LiverTox",
				on: liver.length > 0
			},
			{
				id: "pheno",
				label: "Pheno",
				on: hasPhenoConvert(ids, host) || pheno.some((r) => r.shifted)
			},
			{
				id: "reversal",
				label: "Reversal",
				on: reversal.length > 0
			},
			{
				id: "mme",
				label: "MME",
				on: mme.length > 0
			},
			{
				id: "hunter",
				label: "Hunter",
				on: hunterOn
			},
			{
				id: "uds",
				label: "UDS",
				on: uds.length > 0
			},
			{
				id: "anc",
				label: "ANC",
				on: ancOn
			},
			{
				id: "inr",
				label: "INR",
				on: Boolean(inr)
			},
			{
				id: "bedside",
				label: "Bedside",
				on: true
			},
			{
				id: "alerts",
				label: "Alerts",
				on: alerts.length > 0
			}
		];
	}, [
		qt,
		levels.length,
		liver.length,
		pheno,
		reversal.length,
		mme.length,
		hunterOn,
		uds.length,
		alerts.length,
		ids,
		host,
		otp,
		ancOn,
		inr
	]);
	const [tab, setTab] = (0, import_react.useState)("otp");
	const live = tabs.some((t) => t.id === tab && t.on) ? tab : tabs.find((t) => t.on)?.id ?? "bedside";
	if (!tabs.some((t) => t.on && t.id !== "bedside") && ids.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Clinical board"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "QT, TDM, LiverTox, phenoconversion, reversal, MME, Hunter, UDS, OTP tools, ANC, INR, COWS / CIWA, bedside math. Teaching — not a protocol, not a QTc, not a dose."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !t.on,
					onClick: () => setTab(t.id),
					className: cn("h-10 rounded-full px-3 text-xs font-medium", live === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg", !t.on && "opacity-40"),
					children: t.label
				}, t.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [
				live === "otp" && otp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtpPanel, {
					ids,
					qtPartner: Boolean(qt?.rows.some((r) => r.id !== "methadone"))
				}) : null,
				live === "qt" && qt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtPanel, { report: qt }) : null,
				live === "levels" && levels.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelsPanel, {
					rows: levels,
					host
				}) : null,
				live === "liver" && liver.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiverPanel, { rows: liver }) : null,
				live === "pheno" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhenoPanel, { rows: pheno }) : null,
				live === "reversal" && reversal.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReversalPanel, { rows: reversal }) : null,
				live === "mme" && mme.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MmePanel, { rows: mme }) : null,
				live === "hunter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HunterPanel, { ids }) : null,
				live === "uds" && uds.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UdsPanel, { ids }) : null,
				live === "anc" && ancOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AncPanel, {}) : null,
				live === "inr" && inr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InrPanel, { report: inr }) : null,
				live === "bedside" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedsidePanel, {
					ids,
					host
				}) : null,
				live === "alerts" && alerts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsPanel, { rows: alerts }) : null
			]
		})]
	});
}
function QtPanel({ report }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: report.headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: report.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-fg",
							children: row.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: row.risk === "known" ? "danger" : "warn",
							children: row.risk === "known" ? "known risk" : "possible"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: row.note
					})]
				}, row.id))
			}),
			report.amplifiers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1.5",
				children: report.amplifiers.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm leading-relaxed text-fg",
					children: a
				}, a))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: report.tell
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Known / possible is this desk’s PD map, paraphrasing public QT lists (CredibleMeds). Not a QTc and not a substitute for an ECG. Bedside tab has Bazett / Fridericia."
			})
		]
	});
}
function LevelsPanel({ rows, host }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [rows.map(({ id, card }) => {
			const drug = DRUG_BY_ID[id];
			const hostNote = tdmHostNote(id, host);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg tracking-tight text-fg",
							children: drug?.name ?? id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] uppercase tracking-wide text-muted",
							children: card.analyte
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-2 grid gap-2 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[10px] uppercase tracking-wide text-muted",
								children: "Window"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "text-sm text-fg",
								children: [card.trough, card.unit ? ` ${card.unit}` : ""]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[10px] uppercase tracking-wide text-muted",
								children: "Toxic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-fg",
								children: card.toxic
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-[10px] uppercase tracking-wide text-muted",
									children: "Draw"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-sm text-fg",
									children: card.draw
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: card.pearl
					}),
					hostNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-wide",
							children: "this host · "
						}), hostNote]
					}) : null
				]
			}, id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] leading-relaxed text-subtle",
			children: "Windows are teaching ranges from labeled / consensus TDM. Lab methods differ. Not a draw-time order and not a dose."
		})]
	});
}
function LiverPanel({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [rows.map(({ id, card }) => {
			const name = DRUG_BY_ID[id]?.name ?? id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-fg",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: LIVERTOX_CAT_TONE[card.cat],
							children: [
								card.cat,
								" · ",
								card.label
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-sm leading-relaxed text-fg",
						children: card.pearl
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: livertoxUrl(id, name),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-2 inline-flex h-10 items-center text-sm text-accent hover:underline",
						children: "Open LiverTox"
					})
				]
			}, id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] leading-relaxed text-subtle",
			children: "Categories paraphrase NIDDK LiverTox (A = well-known cause). Open the chapter for the case series. Not a fibrosis score."
		})]
	});
}
function PhenoPanel({ rows }) {
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm leading-relaxed text-muted",
		children: [
			"Add a 2D6 / 2C19 perpetrator next to a victim — paroxetine × codeine is the teaching pair. A strong inhibitor rewrites the genotype on this desk. Search ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono",
				children: "phenoconversion"
			}),
			"."
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: cn("rounded-md px-3 py-3", row.shifted ? "bg-accent-soft" : "bg-bg-sunken"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-sm text-fg",
						children: row.enzyme
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: row.shifted ? "warn" : "info",
						children: [
							row.genotype,
							" → ",
							row.clinical
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: row.pearl
				}),
				row.inhibitors.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: ["Inhibitors: ", row.inhibitors.map((p) => `${p.name} (${p.strength})`).join(", ")]
				}) : null,
				row.inducers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: ["Inducers: ", row.inducers.map((p) => `${p.name} (${p.strength})`).join(", ")]
				}) : null,
				row.victims.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: ["Victims: ", row.victims.map((v) => `${v.name}${v.pathway === "activation" ? " (prodrug)" : ""}`).join(", ")]
				}) : null
			]
		}, row.enzyme)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] leading-relaxed text-subtle",
			children: "Shah & Smith: phenoconversion is the Achilles heel of a genotype report. CPIC still lists the lab. This desk scores the enzyme the patient actually has."
		})]
	});
}
function ReversalPanel({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-md bg-bg-sunken px-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium text-fg",
						children: row.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: row.card.kind === "will-not" ? "danger" : row.card.kind === "antidote" ? "ok" : "warn",
						children: row.card.kind === "will-not" ? "will not reverse" : row.card.kind
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-[11px] uppercase tracking-wide text-muted",
					children: row.card.for
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-medium",
						children: [row.card.agent, ". "]
					}), row.card.pearl]
				}),
				row.card.caution ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-danger",
					children: row.card.caution
				}) : null
			]
		}, `${row.id}-${row.card.agent}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] leading-relaxed text-subtle",
			children: "Teaching reversal map. Not a tox protocol, not a dose, and not permission to skip airway."
		})]
	});
}
function MmePanel({ rows }) {
	const [doses, setDoses] = (0, import_react.useState)({});
	let total = 0;
	let countable = 0;
	const parts = [];
	for (const row of rows) {
		const raw = Number(doses[row.id]);
		if (!Number.isFinite(raw) || raw <= 0) continue;
		let factor = row.factor;
		if (row.id === "methadone") factor = methadoneFactor(raw);
		if (row.id === "fentanyl") {
			const mme = fentanylPatchMme(raw);
			if (mme == null) continue;
			total += mme;
			countable += 1;
			parts.push(`${raw} mcg/hr patch ≈ ${Math.round(mme)} MME`);
			continue;
		}
		if (factor == null) continue;
		const mme = raw * factor;
		total += mme;
		countable += 1;
		parts.push(`${raw} × ${factor} = ${Math.round(mme * 10) / 10}`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: rows.map((row) => {
					const name = DRUG_BY_ID[row.id]?.name ?? row.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg-sunken px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium text-fg",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] text-muted",
									children: [
										row.factor == null ? "not converted" : `× ${row.factor}`,
										" · ",
										row.unit
									]
								})] }), row.factor != null || row.id === "methadone" || row.id === "fentanyl" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										children: ["Daily amount for ", name]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										inputMode: "decimal",
										className: "h-10 w-24",
										placeholder: row.id === "fentanyl" ? "mcg/hr" : "mg/d",
										value: doses[row.id] ?? "",
										onChange: (e) => setDoses((d) => ({
											...d,
											[row.id]: e.target.value
										}))
									})]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm leading-relaxed text-fg",
								children: row.hint
							}),
							row.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: row.note
							}) : null
						]
					}, row.id);
				})
			}),
			countable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg",
				children: [
					"Teaching sum ≈ ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: Math.round(total)
					}),
					" oral morphine milligram-equivalents",
					parts.length ? ` (${parts.join("; ")})` : "",
					". CDC 2022 factors. Not a conversion order."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Enter a daily oral milligram (patch mcg/hr for fentanyl) to sketch MME. Street mass stays blank on purpose."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Incomplete for methadone OTP, buprenorphine MOUD, and anything stamped. 50 / 90 MME cuts are policy history — this desk does not apply them as a dose."
			})
		]
	});
}
function HunterPanel({ ids }) {
	const sero = serotonergicOnDesk(ids);
	const nms = nmsRiskOnDesk(ids);
	const [on, setOn] = (0, import_react.useState)(() => {
		const preset = hunterPreset(ids);
		return {
			...Object.fromEntries(HUNTER_FLAGS.map((f) => [f.key, false])),
			...preset
		};
	});
	(0, import_react.useEffect)(() => {
		const sero = serotonergicOnDesk(ids).length > 0;
		setOn((prev) => prev.serotonergic === sero ? prev : {
			...prev,
			serotonergic: sero
		});
	}, [ids.join("|")]);
	const positive = hunterPositive(on);
	function toggle(key) {
		setOn((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			sero.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: [
					"Serotonergic on this desk: ",
					sero.map((s) => `${s.name} (${s.why})`).join("; "),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "No serotonergic mapped. Tick the first box if one is in the history (fluoxetine lingers weeks)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-1 sm:grid-cols-2",
				children: HUNTER_FLAGS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(f.key),
					className: cn("flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left", on[f.key] ? "bg-accent-soft text-fg" : "bg-bg-sunken text-muted hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-fg",
						children: on[f.key] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-medium text-fg",
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted",
						children: f.hint
					})] })]
				}) }, f.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-sm leading-relaxed", positive ? "text-danger" : "text-fg"),
				children: hunterWhy(on)
			}),
			nms.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-warn-soft px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-wide text-warn",
					children: "NMS contrast"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm leading-relaxed text-fg",
					children: [
						"Dopamine blocker on this desk (",
						nms.map((n) => n.name).join(", "),
						"). NMS is lead-pipe rigidity, bradyreflexia, slower onset. Hunter is clonus and hyperreflexia. Do not give dantrolene for serotonin toxicity because the intern said ‘fever.’"
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Dunkley 2003 Hunter criteria. Cyproheptadine is adjunct on the Reversal tab. Not a charted diagnosis."
			})
		]
	});
}
function UdsPanel({ ids }) {
	const cards = udsOnDesk(ids);
	const headline = udsHeadline(ids);
	const toneFor = (kind) => kind === "expected" ? "ok" : kind === "miss" ? "warn" : "danger";
	const labelFor = (kind) => kind === "expected" ? "lights" : kind === "miss" ? "misses" : "false +";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			headline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: headline
			}) : null,
			cards.map((card) => {
				const drug = DRUG_BY_ID[card.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md bg-bg-sunken px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg tracking-tight text-fg",
							children: drug?.name ?? card.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-fg",
							children: card.pearl
						}),
						card.hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: sortHits(card.hits).map((h) => {
								const assay = ASSAY_BY_ID[h.assay];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md bg-surface px-3 py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-fg",
												children: assay.label
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: toneFor(h.kind),
												children: labelFor(h.kind)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-wide text-muted",
												children: assay.target
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-muted",
										children: h.note
									})]
								}, `${card.id}-${h.assay}-${h.kind}`);
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "No cheap drugs-of-abuse cup is built for this one."
						})
					]
				}, card.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Presumptive immunoassay, not LC-MS/MS. Kit antibodies differ. Saitman 2014 is on the Cites shelf. A cup is not a diagnosis and not a take-home decision."
			})
		]
	});
}
function BedsidePanel({ ids, host }) {
	const [qt, setQt] = (0, import_react.useState)("400");
	const [hr, setHr] = (0, import_react.useState)("60");
	const [age, setAge] = (0, import_react.useState)(host.age === "geriatric" ? "78" : "42");
	const [wt, setWt] = (0, import_react.useState)("70");
	const [scr, setScr] = (0, import_react.useState)("1.0");
	const [sex, setSex] = (0, import_react.useState)("male");
	const qtc = qtcOf({
		qtMs: Number(qt),
		hr: Number(hr)
	});
	const crcl = crclOf({
		age: Number(age),
		weightKg: Number(wt),
		scr: Number(scr),
		sex
	});
	const showCows = cowsWanted(ids) || ids.length === 0;
	const showCiwa = ciwaWanted(ids, host.alcohol) || ids.includes("ethanol");
	const precip = ids.includes("buprenorphine") && ids.some((id) => [
		"fentanyl",
		"dirty-30",
		"heroin",
		"methadone",
		"oxycodone",
		"hydrocodone"
	].includes(id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "QTc"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "QT ms and heart rate. Bazett and Fridericia both print."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: ["QT (ms)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								inputMode: "decimal",
								value: qt,
								onChange: (e) => setQt(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: ["HR", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								inputMode: "decimal",
								value: hr,
								onChange: (e) => setHr(e.target.value)
							})]
						})]
					}),
					qtc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 space-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Bazett"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-fg",
									children: [qtc.bazett, " ms"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Fridericia"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-fg",
									children: [qtc.fridericia, " ms"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "RR"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-mono text-fg",
									children: [qtc.rr, " s"]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Need QT 200–800 ms and HR 30–220."
					}),
					qtc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: qtc.note
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "CrCl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Cockcroft–Gault. Flip CKD on the host to score the clinic cards."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs text-muted",
								children: ["Age", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "mt-1",
									inputMode: "decimal",
									value: age,
									onChange: (e) => setAge(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs text-muted",
								children: ["Weight (kg)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "mt-1",
									inputMode: "decimal",
									value: wt,
									onChange: (e) => setWt(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs text-muted",
								children: ["SCr (mg/dL)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "mt-1",
									inputMode: "decimal",
									value: scr,
									onChange: (e) => setScr(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted",
								children: ["Sex", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 flex gap-1",
									children: ["male", "female"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSex(s),
										className: cn("h-10 flex-1 rounded-full text-xs font-medium", sex === s ? "bg-ink text-bg" : "bg-bg-sunken text-muted"),
										children: s
									}, s))
								})]
							})
						]
					}),
					crcl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-fg",
						children: [
							"CrCl ≈ ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: crcl.crcl
							}),
							" mL/min",
							crcl.band !== "usual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "ml-2",
								tone: crcl.band === "severe" ? "danger" : "warn",
								children: crcl.band
							}) : null
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Age 18–110, weight 30–250 kg, SCr ",
							">",
							" 0."
						]
					}),
					crcl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg",
						children: crcl.note
					}) : null,
					host.kidney === "ckd" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-[10px] uppercase tracking-wide text-accent",
						children: "CKD is already on this host"
					}) : null
				] })]
			}),
			ids.includes("phenytoin") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhenytoinBlock, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleBlock, {
				title: "COWS",
				blurb: `Wesson & Ling 2003. Eleven items, max ${cowsMax()}. Teaching — not an induction protocol.`,
				items: COWS_ITEMS,
				bands: COWS_BANDS,
				hot: showCows,
				extra: precip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-md bg-danger-soft px-3 py-2 text-sm leading-relaxed text-fg",
					children: "Fentanyl in tissue can still precipitate at a 'high enough' COWS. Occupancy, not this integer. Do not chase precipitated withdrawal by stacking more film in the first stretch without a protocol."
				}) : showCows ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Many office maps wait for ≥8–12 before a first film. Recent fentanyl is still occupancy. Lofexidine / clonidine are α2 — naloxone will not reverse them."
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleBlock, {
				title: "CIWA-Ar",
				blurb: `Sullivan 1989. Ten items, max ${ciwaMax()}. Symptom-triggered maps often move at 8–10.`,
				items: CIWA_ITEMS,
				bands: CIWA_BANDS,
				hot: showCiwa
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Formulas and scales only. Not an ECG machine, not CKD-EPI, not IBW, not a dose, not a COWS induction, not a CIWA benzo protocol."
			})
		]
	});
}
function ScaleBlock({ title, blurb, items, bands, hot, extra }) {
	const [picked, setPicked] = (0, import_react.useState)({});
	const total = scoreOf(items, picked);
	const band = bandOf(bands, total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-md px-3 py-3", hot ? "bg-accent-soft" : "bg-bg-sunken"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: blurb
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-lg text-fg",
						children: total
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-wide text-muted",
						children: band.label
					})]
				})]
			}),
			extra ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: extra
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-3",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: item.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted",
						children: item.hint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 flex flex-wrap gap-1",
						children: item.options.map((opt) => {
							const on = picked[item.id] === opt.score;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPicked((prev) => ({
									...prev,
									[item.id]: opt.score
								})),
								className: cn("h-10 min-w-10 rounded-full px-3 text-xs font-medium", on ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: opt.score
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1",
									children: opt.label
								})]
							}, `${item.id}-${opt.score}-${opt.label}`);
						})
					})
				] }, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-fg",
				children: band.note
			})
		]
	});
}
function AlertsPanel({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [rows.map((row) => {
			const name = DRUG_BY_ID[row.id]?.name ?? row.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium text-fg",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: row.flags.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: f.kind === "rems" ? "danger" : f.kind === "niosh" ? "warn" : "info",
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: f.note
					})] }, f.kind))
				})]
			}, row.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] leading-relaxed text-subtle",
			children: "ISMP high-alert, NIOSH hazardous-drug, and REMS paraphrases of public lists. Incomplete on purpose. Open the source before you handle a crush."
		})]
	});
}
function toneClass(tone) {
	return tone === "danger" ? "bg-danger-soft" : tone === "warn" ? "bg-warn-soft" : "bg-ok-soft";
}
function OtpPanel({ ids, qtPartner }) {
	const guessed = guessLastAgonist(ids);
	const [last, setLast] = (0, import_react.useState)(guessed);
	const [hours, setHours] = (0, import_react.useState)("24");
	const [cows, setCows] = (0, import_react.useState)("12");
	const [days, setDays] = (0, import_react.useState)("7");
	const [product, setProduct] = (0, import_react.useState)("xr");
	const [domains, setDomains] = (0, import_react.useState)({});
	const [screens, setScreens] = (0, import_react.useState)({});
	const precip = precipRisk(last, Number(hours), Number(cows));
	const wash = naltrexoneWashout(last, Number(days), product);
	const naloxone = naloxoneCounsel(ids);
	const ecg = methadoneMonitor(ids, qtPartner);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Occupancy, washout, take-homes, naloxone, ECG, and ID screens. ASAM 2020 / TIP 63 / 42 CFR 8 2024 teaching — not a protocol and not a milligram."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Precipitated withdrawal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Last agonist, hours since, COWS. Occupancy is not the integer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1",
						children: LAST_AGONISTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLast(a.id),
							className: cn("h-10 rounded-full px-3 text-xs font-medium", last === a.id ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg"),
							children: a.label
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: ["Hours since last use", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								inputMode: "decimal",
								value: hours,
								onChange: (e) => setHours(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-xs text-muted",
							children: ["COWS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								inputMode: "decimal",
								value: cows,
								onChange: (e) => setCows(e.target.value)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mt-3 rounded-md px-3 py-2.5", toneClass(precip.tone)),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: precip.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fg",
								children: precip.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: precip.consider
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Naltrexone washout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "Days off agonist vs oral vs Vivitrol. The PI times the shot, not this card."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1",
						children: ["oral", "xr"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setProduct(p),
							className: cn("h-10 rounded-full px-3 text-xs font-medium", product === p ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg"),
							children: p === "xr" ? "XR / Vivitrol" : "Oral naltrexone"
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block text-xs text-muted",
						children: ["Days since last full agonist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1 max-w-40",
							inputMode: "decimal",
							value: days,
							onChange: (e) => setDays(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mt-3 rounded-md px-3 py-2.5", toneClass(wash.tone)),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-fg",
								children: wash.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fg",
								children: wash.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: wash.consider
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Take-homes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: TAKEHOME_RULE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 sm:grid-cols-2",
						children: TAKEHOME_DOMAINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setDomains((prev) => ({
								...prev,
								[d.id]: !prev[d.id]
							})),
							className: cn("flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left", domains[d.id] ? "bg-accent-soft text-fg" : "bg-surface text-muted hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5",
								children: domains[d.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-fg",
								children: d.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: d.hint
							})] })]
						}) }, d.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							"Ticked ",
							Object.values(domains).filter(Boolean).length,
							" of ",
							TAKEHOME_DOMAINS.length,
							". A full row is still not an approval."
						]
					})
				]
			}),
			naloxone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Naloxone coprescribe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: naloxone.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-fg",
						children: line
					}, line))
				})]
			}) : null,
			ecg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("rounded-md px-3 py-3", toneClass(ecg.tone)),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: ecg.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-fg",
						children: ecg.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: ecg.consider
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-md bg-bg-sunken px-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "ID / vaccine screens"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "ASAM / CDC entry screens. Offers, not orders. Nothing here is stored."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-1 sm:grid-cols-2",
						children: ID_SCREENS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setScreens((prev) => ({
								...prev,
								[s.id]: !prev[s.id]
							})),
							className: cn("flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left", screens[s.id] ? "bg-accent-soft text-fg" : "bg-surface text-muted hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5",
								children: screens[s.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCheckBig, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-fg",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: s.hint
							})] })]
						}) }, s.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "Not FDA-cleared. Independently review ASAM 2020, SAMHSA TIP 63, 42 CFR 8, and the Prescribing Information. FirstPass does not time a film, a shot, or a take-home."
			})
		]
	});
}
function AncPanel() {
	const [anc, setAnc] = (0, import_react.useState)("1800");
	const [ben, setBen] = (0, import_react.useState)(false);
	const band = ancBand(Number(anc), ben);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Clozapine REMS ANC table, paraphrased. Not the REMS portal, not a WBC, not a dispense."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-xs text-muted",
					children: ["ANC (cells/µL)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						inputMode: "decimal",
						value: anc,
						onChange: (e) => setAnc(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted",
					children: ["BEN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setBen((v) => !v),
						className: cn("mt-1 flex h-10 w-full items-center justify-center rounded-full text-xs font-medium", ben ? "bg-ink text-bg" : "bg-bg-sunken text-muted"),
						children: ben ? "BEN documented" : "General population"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-md px-3 py-3", toneClass(band.tone)),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-wide text-muted",
					children: band.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-fg",
					children: band.note
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: [
					"Alvir 1993 agranulocytosis. Smoke and fluvoxamine move the level on the TDM tab. Open",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-accent underline",
						href: "https://www.clozapinerems.com/",
						target: "_blank",
						rel: "noreferrer",
						children: "clozapinerems.com"
					}),
					"."
				]
			})
		]
	});
}
function InrPanel({ report }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-fg",
				children: report.pearl
			}),
			report.raisers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-danger",
				children: "May raise INR / bleed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: report.raisers.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-danger-soft px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm leading-relaxed text-muted",
						children: r.how
					})]
				}, r.id))
			})] }) : null,
			report.lowers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-[11px] uppercase tracking-wide text-warn",
				children: "May lower INR"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-2",
				children: report.lowers.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-warn-soft px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm leading-relaxed text-muted",
						children: r.how
					})]
				}, r.id))
			})] }) : null,
			!report.raisers.length && !report.lowers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No mapped INR mover on this desk besides warfarin. Absence is not a stable INR."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] leading-relaxed text-subtle",
				children: "S-warfarin is 2C9. Kale is vitamin K. This is not a warfarin clinic and not a milligram."
			})
		]
	});
}
function PhenytoinBlock() {
	const [total, setTotal] = (0, import_react.useState)("12");
	const [albumin, setAlbumin] = (0, import_react.useState)("2.4");
	const [crclLow, setCrclLow] = (0, import_react.useState)(false);
	const result = phenytoinCorrected({
		total: Number(total),
		albumin: Number(albumin),
		crclLow
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-md bg-bg-sunken px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-lg tracking-tight text-fg",
				children: "Corrected phenytoin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Sheiner–Tozer. A free level is better. Tube feeds bind Dilantin on the food board."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Total (µg/mL)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							inputMode: "decimal",
							value: total,
							onChange: (e) => setTotal(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Albumin (g/dL)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-1",
							inputMode: "decimal",
							value: albumin,
							onChange: (e) => setAlbumin(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted",
						children: ["CrCl", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCrclLow((v) => !v),
							className: cn("mt-1 flex h-10 w-full items-center justify-center rounded-full text-xs font-medium", crclLow ? "bg-ink text-bg" : "bg-surface text-muted"),
							children: crclLow ? "<10" : "≥10"
						})]
					})
				]
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-fg",
				children: [
					"Corrected ≈ ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: result.corrected
					}),
					" µg/mL"
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Need total 0–80 and albumin 0.8–6."
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: result.note
			}) : null
		]
	});
}
function RxnavBoard({ ids }) {
	const [pairs, setPairs] = (0, import_react.useState)(null);
	const [classes, setClasses] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [reason, setReason] = (0, import_react.useState)(null);
	async function run() {
		setBusy(true);
		setErr(null);
		setReason(null);
		try {
			const res = await lookupRxnavInteractions({ data: { ids } });
			if (!res.ok) setErr(res.reason ?? "Did not answer.");
			else if (res.reason) setReason(res.reason);
			setPairs(res.pairs);
			setClasses(res.classes ?? []);
		} catch {
			setErr("Did not answer.");
			setPairs([]);
			setClasses([]);
		} finally {
			setBusy(false);
		}
	}
	if (ids.length < 2) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Live labels / RxClass"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "OpenFDA interaction excerpts scanned for the partner. NIH RxClass (ATC / FDA SPL) is still live — NLM retired the Interaction API in 2024."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					size: "sm",
					disabled: busy,
					onClick: () => void run(),
					children: busy ? "Asking NLM / FDA…" : pairs ? "Refresh" : "Ask live sources"
				})]
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-danger",
				children: err
			}) : null,
			reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: reason
			}) : null,
			pairs && pairs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2",
				children: pairs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium text-fg",
							children: [
								p.a,
								" × ",
								p.b
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: p.source
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: p.description
					})]
				}, `${p.source}-${p.a}-${p.b}-${i}`))
			}) : null,
			classes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-mono text-[11px] uppercase tracking-wide text-muted",
					children: "RxClass"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: classes.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "info",
						children: [
							c.drug,
							": ",
							c.className
						]
					}) }, `${c.rxcui}-${c.className}-${i}`))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-subtle",
				children: [
					"Label text is truncated SPL, not a complete DDI engine. CYP / PD scoring stays on this desk.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "text-accent underline",
						href: "https://lhncbc.nlm.nih.gov/RxNav/APIs/RxClassAPIs.html",
						target: "_blank",
						rel: "noreferrer",
						children: ["RxClass docs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1 inline size-3" })]
					})
				]
			})
		]
	});
}
function LabelPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "Instructions for use"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-3xl tracking-tight text-fg",
								children: SOFTWARE.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "warn",
								children: "Not FDA-cleared"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted",
								children: [
									SOFTWARE.udi,
									" · v",
									SOFTWARE.version,
									" · ",
									SOFTWARE.released
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-3xl text-sm leading-relaxed text-fg",
						children: INTENDED_USE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-sm leading-relaxed text-danger",
						children: NOT_CLEARED
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Indications for use"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-fg",
						children: INDICATIONS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: row }, row))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Not for"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm leading-relaxed text-fg",
						children: NOT_FOR.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm leading-relaxed text-fg",
							children: row
						}, row))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Warnings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: WARNINGS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-md bg-warn-soft px-3 py-2.5 text-sm leading-relaxed text-fg",
						children: w
					}, w))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Non-device CDS criteria"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "FDA Clinical Decision Support Software guidance, September 28, 2022. Meeting these criteria is a posture, not a clearance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: CDS_CRITERIA.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md bg-bg-sunken px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-wide text-accent",
								children: [
									c.id,
									" · ",
									c.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fg",
								children: c.how
							})]
						}, c.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Residual risk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "ISO 14971-style hazards this desk actually has. Not a full file."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-border rounded-md bg-bg-sunken",
						children: HAZARDS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-1 px-3 py-3 sm:grid-cols-[88px_minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-accent",
									children: h.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-fg",
									children: h.hazard
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: h.control
								})
							]
						}, h.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-lg tracking-tight text-fg",
						children: "Primary sources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "The label is the authority. These are the public endpoints this desk actually calls."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: PRIMARY_SOURCES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex h-10 items-center rounded-full bg-bg-sunken px-3 text-xs font-medium text-fg hover:text-accent",
							children: s.name
						}) }, s.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Manufacturer / complaints"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: [
						SOFTWARE.manufacturer,
						". Software version ",
						SOFTWARE.version,
						" (",
						SOFTWARE.udi,
						"). Report a labeling disagreement, a missed collision, or an adverse event associated with use of this desk to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-accent underline",
							href: `mailto:${OPERATOR.email}`,
							children: OPERATOR.email
						}),
						" ",
						"or ",
						OPERATOR.phone,
						". That is a complaint path, not an FDA MedWatch filing — MedWatch is still",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-accent underline",
							href: "https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program",
							target: "_blank",
							rel: "noreferrer",
							children: "fda.gov/medwatch"
						}),
						"."
					]
				})]
			})
		]
	});
}
function PrescribingStrip({ ids }) {
	const key = ids.join("|");
	const drugs = (0, import_react.useMemo)(() => ids.map((id) => DRUG_BY_ID[id]).filter((d) => d && d.kind === "drug").slice(0, 3), [key]);
	const [rows, setRows] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (drugs.length === 0) {
			setRows([]);
			return;
		}
		let live = true;
		setBusy(true);
		Promise.all(drugs.map(async (d) => {
			try {
				const pack = await lookupLiveSources({ data: { id: d.id } });
				return {
					id: d.id,
					name: d.name,
					label: pack.label,
					reason: pack.reason
				};
			} catch {
				return {
					id: d.id,
					name: d.name,
					label: null,
					reason: "OpenFDA did not answer."
				};
			}
		})).then((next) => {
			if (live) setRows(next);
		}).finally(() => {
			if (live) setBusy(false);
		});
		return () => {
			live = false;
		};
	}, [key]);
	if (drugs.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg tracking-tight text-fg",
					children: "Prescribing Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "Live OpenFDA / DailyMed excerpts. Truncated. The full SPL governs — not this card, not the collision score."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "warn",
					children: "Label wins"
				})]
			}),
			busy && rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Pulling current labels…"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-bg-sunken px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-base tracking-tight text-fg",
								children: row.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex h-10 items-center font-mono text-[11px] text-accent hover:underline",
								href: row.label?.setId ? dailymedSetUrl(row.label.setId) : dailymedSearchUrl(row.name),
								target: "_blank",
								rel: "noreferrer",
								children: "Open DailyMed PI"
							})]
						}),
						row.label?.boxed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 rounded-md bg-danger-soft px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wide text-danger",
								children: "Boxed warning"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-fg",
								children: row.label.boxed
							})]
						}) : null,
						row.label?.contraindications ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "Contraindications. "
							}), row.label.contraindications]
						}) : null,
						row.label?.interactions ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-fg",
								children: "Drug interactions. "
							}), row.label.interactions]
						}) : null,
						!row.label && row.reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: row.reason
						}) : null
					]
				}, row.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[11px] leading-relaxed text-subtle",
				children: [NOT_CLEARED, " Dosing lives on the PI, not here."]
			})
		]
	});
}
function DeskApp() {
	const view = useDesk((s) => s.view);
	const setView = useDesk((s) => s.setView);
	const selectedRaw = useDesk((s) => s.selected);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let live = true;
		const done = () => {
			if (live) setHydrated(true);
		};
		Promise.resolve(useDesk.persist.rehydrate()).then(done, done);
		const t = window.setTimeout(done, 300);
		return () => {
			live = false;
			window.clearTimeout(t);
		};
	}, []);
	const selected = hydrated ? selectedRaw : [];
	const remove = useDesk((s) => s.remove);
	const clear = useDesk((s) => s.clear);
	const load = useDesk((s) => s.load);
	const phenotypes = useDesk((s) => s.phenotypes);
	const smoking = useDesk((s) => s.smoking);
	const ketamineRoute = useDesk((s) => s.ketamineRoute);
	const cannabisRoute = useDesk((s) => s.cannabisRoute);
	const alcohol = useDesk((s) => s.alcohol);
	const age = useDesk((s) => s.age);
	const kidney = useDesk((s) => s.kidney);
	const preg = useDesk((s) => s.preg);
	const host = (0, import_react.useMemo)(() => ({
		phenotypes,
		smoking,
		ketamineRoute,
		cannabisRoute,
		alcohol,
		age,
		kidney,
		preg
	}), [
		phenotypes,
		smoking,
		ketamineRoute,
		cannabisRoute,
		alcohol,
		age,
		kidney,
		preg
	]);
	const report = (0, import_react.useMemo)(() => analyze(selected, host), [selected, host]);
	const hostDrugs = (0, import_react.useMemo)(() => applyHost(selected.map((id) => DRUG_BY_ID[id]).filter(Boolean), host), [selected, host]);
	const colliding = (0, import_react.useMemo)(() => new Set(report.burden.filter((b) => b.collisions > 0).map((b) => b.enzyme)), [report]);
	const plan = usePlan();
	const pro = plan !== "free";
	const license = useDesk((s) => s.license);
	const lifetime = useDesk((s) => s.lifetime);
	const previewUntil = useDesk((s) => s.previewUntil);
	const justActivated = useDesk((s) => s.justActivated);
	const dismissActivated = useDesk((s) => s.dismissActivated);
	const hcpAck = useDesk((s) => s.hcpAck);
	const ackHcp = useDesk((s) => s.ackHcp);
	const openCheckout = useDesk((s) => s.openCheckout);
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [view, justActivated]);
	const secretTaps = (0, import_react.useRef)(0);
	const secretTimer = (0, import_react.useRef)(0);
	function openFoundry() {
		secretTaps.current += 1;
		window.clearTimeout(secretTimer.current);
		secretTimer.current = window.setTimeout(() => {
			secretTaps.current = 0;
		}, 4e3);
		if (secretTaps.current >= 7) {
			secretTaps.current = 0;
			setView("foundry");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeReturn, { ready: hydrated }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "shrink-0",
								onClick: openFoundry,
								"aria-label": "FirstPass",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HemeMark, { className: "size-8" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-lg leading-none tracking-tight",
									children: "FirstPass"
								}), hydrated && plan !== "free" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-accent-fg",
									children: lifetime ? "founding" : plan
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted",
								children: "CYP450 desk · not FDA-cleared"
							})] })]
						}), hydrated && !pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "sm:hidden",
							onClick: () => openCheckout("lab", "Founding lifetime."),
							children: "Unlock"
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto rounded-full bg-bg-sunken p-1 sm:flex-none",
							children: [
								["desk", "Desk"],
								["library", "Materia"],
								["cites", "Cites"],
								["atlas", "Atlas"],
								["rounds", "Rounds"],
								["label", "IFU"],
								["plans", "Pro"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setView(id),
								className: cn("h-9 shrink-0 rounded-full px-2.5 text-xs font-medium sm:px-4 sm:text-sm", view === id ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg"),
								children: label
							}, id))
						}), hydrated && !pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "hidden sm:inline-flex",
							onClick: () => openCheckout("lab", "Founding lifetime."),
							children: "Unlock"
						}) : null]
					})]
				})
			}),
			hydrated && !hcpAck ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-warn-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-fg",
						children: [
							"For licensed healthcare professionals. ",
							SOFTWARE.name,
							" is not FDA-cleared. The Prescribing Information is the authority — independently review the basis of every recommendation before acting."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setView("label"),
							children: "Open IFU"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: ackHcp,
							children: "I understand"
						})]
					})]
				})
			}) : null,
			justActivated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-ok-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-start justify-between gap-3 px-4 py-3 sm:items-center sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-ok",
						children: ["License is live on this desk. Host factors, atlas, and export are open.", license ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							" ",
							"Key ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: license
							})
						] }) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "shrink-0 text-sm text-ok underline",
						onClick: dismissActivated,
						children: "Dismiss"
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6",
				children: view === "plans" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlansPage, {}) : view === "foundry" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foundry, {}) : view === "rounds" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundsPage, {}) : view === "cites" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CitesPage, {}) : view === "label" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelPage, {}) : view === "atlas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnzymeAtlas, {}) : view === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formulary, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrugSearch, {}),
							selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [selected.map((id) => {
									const drug = DRUG_BY_ID[id];
									if (!drug) return null;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => remove(id),
										className: "group flex h-10 items-center gap-2 rounded-full bg-surface pl-3 pr-2 text-sm shadow-[var(--shadow-border)] hover:bg-danger-soft",
										title: "Remove from regimen",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: drug.name
											}),
											drug.kind !== "drug" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-wide text-muted",
												children: drug.kind
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex size-6 items-center justify-center rounded-full text-subtle group-hover:text-danger",
												children: "×"
											})
										]
									}, id);
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: clear,
									className: "text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Clear"]
								})]
							}) : null,
							selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowExtras, {}) : null,
							selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								onLoad: load,
								ready: hydrated
							}) : selected.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleDrug, { id: selected[0] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowBriefing, {
									ids: selected,
									host,
									report
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescribingStrip, { ids: selected }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicPanel, {
									ids: selected,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalBoard, {
									ids: selected,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dossier, {
									ids: selected,
									host
								}),
								report.findings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBanner, {
										report,
										selected,
										host,
										plan
									}),
									pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackMeters, { stacks: report.stacks }) : report.stacks.some((s) => s.score > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paywall, {
										title: "Stack load is Pro",
										blurb: "Serotonin, CNS, QT, pressor, and NMDA meters come with the host license.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackMeters, { stacks: report.stacks })
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingList, { findings: report.findings })
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "Add a second drug, flip smoke, alcohol, or a non-normal metabolizer to run the map."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PkExplorer, {
									drugs: hostDrugs,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirstPassMap, {
									ketamineRoute,
									cannabisRoute,
									showKetamine: selected.some((id) => FIRST_PASS_NMDA.includes(id)),
									showCannabis: selected.some((id) => ["dronabinol", "cannabidiol"].includes(id))
								}),
								pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaboliteCard, { ids: selected }) : treesFor(selected).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paywall, {
									title: "Metabolite maps are Pro",
									blurb: "Norketamine, 11-OH-THC, morphine, dextrorphan — the parent is only half the story.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaboliteCard, { ids: selected })
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CypHeatmap, {
									drugs: hostDrugs,
									colliding
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBanner, {
									report,
									selected,
									host,
									plan
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowBriefing, {
									ids: selected,
									host,
									report
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrescribingStrip, { ids: selected }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicPanel, {
									ids: selected,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalBoard, {
									ids: selected,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RxnavBoard, { ids: selected }),
								pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackMeters, { stacks: report.stacks }) : report.stacks.some((s) => s.score > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paywall, {
									title: "Stack load is Pro",
									blurb: "Serotonin, CNS, QT, pressor, and NMDA meters come with the host license.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackMeters, { stacks: report.stacks })
								}) : null,
								report.findings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl bg-ok-soft px-5 py-6 text-sm text-ok shadow-[var(--shadow-border)]",
									children: "No mapped CYP collision, phenotype hit, or pharmacodynamic synergy. Absence is not proof of safety — transporters, UGT, plasma protein, and unlisted pathways still apply."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollisionMap, {
									selected,
									findings: report.findings
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingList, { findings: report.findings })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dossier, {
									ids: selected,
									host
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PkExplorer, {
									drugs: hostDrugs,
									host
								}),
								pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaboliteCard, { ids: selected }) : treesFor(selected).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paywall, {
									title: "Metabolite maps are Pro",
									blurb: "Norketamine, 11-OH-THC, morphine, dextrorphan — the parent is only half the story.",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaboliteCard, { ids: selected })
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirstPassMap, {
									ketamineRoute,
									cannabisRoute,
									showKetamine: selected.some((id) => FIRST_PASS_NMDA.includes(id)),
									showCannabis: selected.some((id) => ["dronabinol", "cannabidiol"].includes(id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CypHeatmap, {
									drugs: hostDrugs,
									colliding
								})
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-4 lg:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
								drugs: DRUGS.length,
								selected: selected.length,
								findings: report.findings.length,
								highest: report.highest,
								plan,
								license,
								lifetime,
								previewUntil,
								cap: pro ? 8 : 2
							}),
							pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhenotypeCard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paywall, {
								title: "Host factors are Pro",
								blurb: "Phenotype, smoke, alcohol pattern, route, age, kidney, and pregnancy change the score. Two-drug PK stays free.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhenotypeCard, {})
							}),
							pro && selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostDelta, {
								selected,
								host,
								report
							}) : null,
							selected.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WashoutCard, { selected }) : null,
							selected.length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BurdenCard, { burden: report.burden }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowCard, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutDrawer, {})
		]
	});
}
function EmptyState({ onLoad, ready }) {
	const [lane, setLane] = (0, import_react.useState)("all");
	const plan = usePlan();
	const setView = useDesk((s) => s.setView);
	const shown = samplesInLane(lane);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: PLATES.hero,
				alt: "",
				className: "h-48 w-full sm:h-64"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 bg-ink px-5 py-4 sm:px-8 sm:py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.2em] text-accent-fg/70",
					children: "Psychoactive interaction desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-xl font-serif text-3xl leading-tight tracking-tight text-accent-fg sm:text-4xl",
					children: "Map ketamine, entactogens, and the rest of the stack."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-6 sm:px-8 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm leading-relaxed text-muted",
					children: lane === "mat" ? "Built for the dosing window. Put methadone, a film, or Vivitrol on the desk, then tap today's extra. OTP tab: occupancy vs COWS, Vivitrol washout, 2024 take-homes, naloxone, ECG, ID screens. The briefing writes watch / counsel / consider. Live PI sits under it. Not a treatment order — the label wins." : "FirstPass is clinical decision support for licensed healthcare professionals — CYP450 maps, FDA-label excerpts, published scales — so you can independently review the basis of a collision. It is not FDA-cleared. The Prescribing Information is the authority. Two-drug collisions stay free. Open IFU for intended use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						lane === "mat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								disabled: !ready,
								onClick: () => onLoad(["methadone"]),
								children: "Methadone window"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								disabled: !ready,
								onClick: () => onLoad(["buprenorphine"]),
								children: "Suboxone film"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								disabled: !ready,
								onClick: () => onLoad(["naltrexone"]),
								children: "Vivitrol"
							})
						] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setView("library"),
							children: "Browse the materia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setLane("mat"),
							children: "MAT / OTP board"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setLane("clinic"),
							children: "Clinic staples"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setLane("food"),
							children: "Kitchen & herbs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setView("cites"),
							children: "PubMed shelf"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => setView("rounds"),
							children: "Teaching rounds"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4",
					children: CLASS_TILES.map((tile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setLane(tile.id),
						className: cn("overflow-hidden rounded-lg text-left shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-px", lane === tile.id ? "ring-2 ring-accent" : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
							src: tile.plate,
							alt: "",
							className: "h-20 w-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block bg-bg px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-fg",
								children: tile.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] text-muted",
								children: tile.hint
							})]
						})]
					}, tile.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-1",
					children: SAMPLE_LANES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLane(l.id),
						className: cn("h-10 rounded-full px-3 text-xs font-medium", lane === l.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg"),
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 sm:grid-cols-2",
					children: shown.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: !ready,
						onClick: () => onLoad(s.drugIds, {
							phenotypes: s.phenotypes,
							smoking: s.smoking,
							ketamineRoute: s.ketamineRoute,
							cannabisRoute: s.cannabisRoute,
							alcohol: s.alcohol
						}),
						className: "flex h-full w-full overflow-hidden rounded-lg bg-bg text-left shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-px disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
							src: plateForSample(s),
							alt: "",
							className: "h-full w-20 shrink-0 min-h-24"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex min-w-0 flex-1 flex-col justify-center px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-sm font-medium text-fg",
								children: [s.title, plan === "free" && sampleNeedsPro(s) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-wide text-accent",
									children: "Pro"
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-xs text-muted",
								children: s.blurb
							})]
						})]
					}) }, s.id))
				})
			]
		})]
	});
}
function SingleDrug({ id }) {
	const drug = DRUG_BY_ID[id];
	const route = useDesk((s) => s.ketamineRoute);
	const cannabisRoute = useDesk((s) => s.cannabisRoute);
	if (!drug) return null;
	const subs = drug.enzymes.filter((e) => e.kind === "substrate");
	const inhs = drug.enzymes.filter((e) => e.kind === "inhibitor");
	const inds = drug.enzymes.filter((e) => e.kind === "inducer");
	const nmda = FIRST_PASS_NMDA.includes(id);
	const thc = id === "dronabinol";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid sm:grid-cols-[220px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {
				src: plateForDrug(drug),
				alt: "",
				className: "h-40 w-full sm:h-full min-h-40"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "Monograph"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-serif text-2xl tracking-tight text-fg",
						children: drug.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							drug.cls,
							drug.brands.length ? ` · ${drug.brands.join(", ")}` : "",
							nmda ? ` · ${KETAMINE_ROUTE_LABEL[route]}` : "",
							thc ? ` · ${CANNABIS_ROUTE_LABEL[cannabisRoute]}` : ""
						]
					}),
					drug.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-fg",
						children: drug.note
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleList, {
								title: "Substrate of",
								rows: subs,
								empty: "No mapped CYP substrate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleList, {
								title: "Inhibits",
								rows: inhs,
								empty: "Not a mapped inhibitor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleList, {
								title: "Induces",
								rows: inds,
								empty: "Not a mapped inducer"
							})
						]
					}),
					drug.pd.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: drug.pd.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: p.replace(/-/g, " ")
						}, p))
					}) : null
				]
			})]
		})
	});
}
function RoleList({ title, rows, empty }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-xs font-medium uppercase tracking-wide text-muted",
		children: title
	}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-sm text-subtle",
		children: empty
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 space-y-1",
		children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "font-mono text-sm text-fg",
			children: [r.enzyme, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-2 font-sans text-xs text-muted",
				children: [
					"strength" in r && r.strength ? r.strength : null,
					"sensitivity" in r && r.sensitivity ? r.sensitivity : null,
					r.pathway === "activation" ? " · prodrug" : "",
					r.nti ? " · NTI" : ""
				]
			})]
		}, r.enzyme + r.kind))
	})] });
}
function RiskBanner({ report, selected, host, plan }) {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const openCheckout = useDesk((s) => s.openCheckout);
	const license = useDesk((s) => s.license);
	const highest = report.highest;
	const phenoLine = PHENOTYPE_ENZYMES.map((e) => `${e} ${host.phenotypes[e]} (${METABOLIZER_LABEL[host.phenotypes[e]]})`).join(", ");
	const names = selected.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean).join(" + ");
	async function write(kind, text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(kind);
			window.setTimeout(() => setCopied(null), 1600);
		} catch {}
	}
	async function copySummary() {
		if (plan === "free") {
			openCheckout("lab", "The full collision report is a licensed surface. Founding is $79 once.");
			return;
		}
		await write("full", [
			`FirstPass regimen: ${names}`,
			`Metabolizer status: ${phenoLine}`,
			`Tobacco smoke: ${host.smoking ? "daily (CYP1A2 induction)" : "off"}`,
			`Alcohol pattern: ${ALCOHOL_LABEL[host.alcohol]}`,
			`Ketamine route: ${KETAMINE_ROUTE_LABEL[host.ketamineRoute]}`,
			`Cannabis route: ${CANNABIS_ROUTE_LABEL[host.cannabisRoute]}`,
			`Highest severity: ${SEVERITY_LABEL[highest]}`,
			"",
			...report.findings.map((f) => `• ${SEVERITY_LABEL[f.severity]} — ${f.headline}: ${f.mechanism}. ${f.clinical}`),
			"",
			"Educational model. Not a substitute for clinical decision support."
		].join("\n"));
	}
	async function shareLine() {
		const top = report.findings[0];
		await write("share", tweetFor(names, SEVERITY_LABEL[highest], top ? `${top.headline}: ${top.mechanism}` : ""));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("inline-flex min-w-28 items-center justify-center rounded-md px-2.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider", severitySurface(highest)),
				children: SEVERITY_LABEL[highest]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm font-medium text-fg",
				children: [
					report.findings.length,
					" collision",
					report.findings.length === 1 ? "" : "s",
					" across",
					" ",
					selected.length,
					" drug",
					selected.length === 1 ? "" : "s"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs text-muted",
				children: [
					report.counts.contraindicated,
					" contra · ",
					report.counts.major,
					" major ·",
					" ",
					report.counts.moderate,
					" moderate · ",
					report.counts.minor,
					" minor"
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => void shareLine(),
					className: "h-10 min-w-24 shrink-0",
					children: [copied === "share" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3.5" }), copied === "share" ? "Copied" : "Share"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "sm",
					onClick: () => void copySummary(),
					className: "h-10 min-w-24 shrink-0",
					children: [copied === "full" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied === "full" ? "Copied" : plan === "free" ? "Report · Pro" : "Report"]
				}),
				plan === "lab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "sm",
					className: "h-10 shrink-0",
					onClick: () => exportDesk(report, selected, host, license),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "JSON"]
				}) : null,
				plan === "lab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					size: "sm",
					className: "h-10 shrink-0",
					onClick: () => exportCsv(report, selected),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "CSV"]
				}) : null
			]
		})]
	});
}
function StatsCard({ drugs, selected, findings, highest, plan, license, lifetime, previewUntil, cap }) {
	const previewing = Boolean(previewUntil && Date.now() < previewUntil && plan === "pro" && !license);
	const previewDays = previewUntil ? Math.max(0, Math.ceil((previewUntil - Date.now()) / 864e5)) : 0;
	const licenseLabel = lifetime ? "Founding" : previewing ? `Preview · ${previewDays}d` : PLAN_BY_ID[plan].name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-muted",
				children: "Desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Formulary",
						v: String(drugs)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "On desk",
						v: `${selected}/${cap}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Findings",
						v: String(findings)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "License",
						v: licenseLabel
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-[11px] text-muted",
				children: [
					"Ceiling ",
					highest === "none" ? "—" : SEVERITY_LABEL[highest] ?? highest,
					license ? ` · ${license}` : plan === "free" ? ` · founding $79 · ${OPERATOR.payLine}` : previewing ? " · buy before it lapses" : ""
				]
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] text-muted",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "font-mono text-sm tabular-nums text-fg",
		children: v
	})] });
}
function BurdenCard({ burden }) {
	const hot = [...burden].sort((a, b) => b.collisions - a.collisions);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-medium uppercase tracking-wide text-muted",
			children: "Pathway load"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2",
			children: hot.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-fg",
					children: b.enzyme
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("text-xs", b.collisions > 0 ? "text-danger" : "text-muted"),
					children: [
						b.substrates.length,
						"S ",
						b.inhibitors.length,
						"I ",
						b.inducers.length,
						"D",
						b.collisions > 0 ? ` · ${b.collisions} hit` : ""
					]
				})]
			}, b.enzyme))
		})]
	});
}
function HowCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-medium uppercase tracking-wide text-muted",
			children: "How it scores"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 space-y-2 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "PK."
				}), " Strong inhibitors of sensitive or narrow-index substrates grade contraindicated; induction of clearance is loss of efficacy."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Curve."
				}), " Grey is this route, normal metabolizer, no perpetrators. Teal is this desk. q8h / q12h / q24h superimpose doses (Rac). Overlay IV vs oral on first-pass victims. Not a plasma level. Two-drug AUCR stays free."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "2D6."
				}), " Blockade of codeine or tamoxifen is lost activation; of DXM or MDMA it is stacked parent plus serotonin."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Phenotype."
				}), " Flip CYP2D6 / 2C19 / 2C9 / 2B6 to poor or ultrarapid — a PM scores like a strong inhibitor of that isoform. 2C9 PMs make warfarin and edible THC hotter."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Host."
				}), " Daily smoke induces CYP1A2. Chronic alcohol induces CYP2E1 (NAPQI from acetaminophen). Oral ketamine and edible THC are first-pass victims; IV and smoked mostly skip it."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Food."
				}), " Grapefruit knocks out intestinal 3A4. Tyramine plus an MAOI is a pressor crisis. Piperine and pomegranate are quieter 3A4 hits. Licorice drops potassium. Fat meals raise oral THC/CBD. Salt and urine pH move lithium and amphetamine."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Supplement."
				}), " Red yeast rice is lovastatin. Berberine is a 3A4/P-gp bully plus a glucose drop. SAM-e and 5-HTP are serotonergic. Vitamin K dumps INR; nattokinase and fish oil bleed. Calcium/iron chelate Cipro and Synthroid. Charcoal and psyllium bind the morning dose. Niacin plus a statin is muscle. Search supplement / vitamin / otc."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Street."
				}), " Cocaine plus ethanol is cocaethylene. Stimulant plus opioid is a speedball — the stimulant masks apnea. Dirty 30s are pressed fentanyl ± xylazine, not oxycodone; naloxone will not reverse the α2. Percocet is oxy + APAP."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "MAT."
				}), " Put methadone or a film on the desk, then tap today's extra on the window tray. Buprenorphine on a fentanyl load is precipitated withdrawal, not stacked milligrams. Methadone lives on 3A4/2B6 — inducers look like a stolen dose; azoles, Vistaril, and Zofran are the QT traps. Paxlovid dumps methadone and raises fentanyl; cobicistat (Tybost) is the opposite arrow on methadone. Gabapentinoids are not free extras on an opioid airway. Lofexidine is α2 — naloxone will not reverse it. Epclusa next to methadone should stay quiet; rifampin should not. The window briefing is watch / counsel / hold — copy the huddle onto a note. Not a protocol."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Clinic."
				}), " Allopurinol × azathioprine is xanthine oxidase, not CYP — pancytopenia. Nitrates × PDE5 are labeled hypotension. Omeprazole blunts clopidogrel activation (2C19 prodrug); pantoprazole is the quieter switch. Oral budesonide and swallowed fluticasone are gut 3A4 first-pass victims — azoles and ritonavir make a 'local' steroid systemic. Terbinafine is a strong 2D6 inhibitor, not an azole. Ozempic next to a sulfonylurea is hypoglycemia; next to metformin it should stay quieter. Search clinic / primary / ozempic / imuran."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Host clinic."
				}), " Flip geriatric for Beers 2023. CKD scores renally cleared NTI drugs and NSAIDs. Pregnant flags ACEI/ARB, warfarin, valproate, MTX, mycophenolate. Teaching notes, not a label. Search beers / pregnant."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: "Sources."
				}), " DrugBank is identity and targets — open the accession. PharmGKB / CPIC is the gene table; flip a metabolizer on this desk and the matching row highlights. Stahl is a receptor sketch (spectrum, occupancy, side effects from those receptors) in original language, not a quotation of the book. PubMed is a curated PMID shelf plus a live NCBI search for the pair on the desk. Search pgx / stahl / drugbank / pubmed."] })
			]
		})]
	});
}
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "px-1 text-[11px] leading-relaxed text-subtle",
		children: [
			SOFTWARE.name,
			" ",
			SOFTWARE.version,
			" is clinical decision support for licensed healthcare professionals. ",
			NOT_CLEARED,
			" The FDA-approved Prescribing Information is the authority. Every collision names its basis (FDA boxed warning, PI excerpt, CPIC, PMID, or desk map) so you can independently review it. Not a dose, not a chart, not TDM, not a complete database. Street-supply rows are teaching maps. Always open DailyMed before acting."
		]
	});
}
function exportDesk(report, selected, host, license) {
	const body = {
		software: {
			name: SOFTWARE.name,
			version: SOFTWARE.version,
			udi: SOFTWARE.udi,
			notFdaCleared: true
		},
		intendedUse: "See IFU. Not a dose. Independent review of the Prescribing Information required.",
		license,
		generated: (/* @__PURE__ */ new Date()).toISOString(),
		regimen: selected.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean),
		host,
		highest: report.highest,
		findings: report.findings,
		footer: PI_FOOTER
	};
	const blob = new Blob([JSON.stringify(body, null, 2)], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "firstpass-desk.json";
	a.click();
	URL.revokeObjectURL(url);
}
function exportCsv(report, selected) {
	const rows = [[
		"severity",
		"kind",
		"headline",
		"mechanism",
		"effect",
		"clinical",
		"enzymes",
		"drugs"
	].join(","), ...report.findings.map((f) => [
		f.severity,
		f.kind,
		csv(f.headline),
		csv(f.mechanism),
		csv(f.effect),
		csv(f.clinical),
		csv(f.enzymes.join("|")),
		csv(f.drugIds.map((id) => DRUG_BY_ID[id]?.name ?? id).join("|"))
	].join(","))];
	const blob = new Blob([`# FirstPass ${SOFTWARE.version} ${selected.map((id) => DRUG_BY_ID[id]?.name ?? id).join(" + ")}\n# ${PI_FOOTER}\n${rows.join("\n")}`], { type: "text/csv" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "firstpass-desk.csv";
	a.click();
	URL.revokeObjectURL(url);
}
function csv(s) {
	return `"${s.replace(/"/g, "\"\"")}"`;
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskApp, {});
}
//#endregion
export { Home as component, redirectToLoginIfRequired as n, isLoginRequired as t };
