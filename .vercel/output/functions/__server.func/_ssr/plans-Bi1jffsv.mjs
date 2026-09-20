//#region node_modules/.nitro/vite/services/ssr/assets/plans-Bi1jffsv.js
/** Public pay / write lines — the operator asked these onto the desk. */
var OPERATOR = {
	name: "Kaleb Lovingier",
	venmo: "kaleblovingier",
	email: "kaleblovingier@gmail.com",
	phone: "360-707-8923",
	phoneHref: "tel:+13607078923",
	social: ["@badbird", "@kaleblovingier"],
	venmoUrl: "https://venmo.com/u/kaleblovingier",
	cashApp: "kaleblovingier7",
	cashAppUrl: "https://cash.app/$kaleblovingier7",
	paypal: "kaleblovingier@gmail.com",
	paypalUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=kaleblovingier%40gmail.com&item_name=FirstPass%20founding&amount=79&currency_code=USD",
	payLine: "Venmo @kaleblovingier · Cash App $kaleblovingier7 · PayPal kaleblovingier@gmail.com"
};
var PAY_RAILS = [
	{
		id: "venmo",
		label: "Venmo",
		handle: `@${OPERATOR.venmo}`,
		href: OPERATOR.venmoUrl
	},
	{
		id: "cashapp",
		label: "Cash App",
		handle: `$${OPERATOR.cashApp}`,
		href: OPERATOR.cashAppUrl
	},
	{
		id: "paypal",
		label: "PayPal",
		handle: OPERATOR.paypal,
		href: OPERATOR.paypalUrl
	}
];
/** Public URLs. Override the live desk with VITE_PUBLIC_URL when Vercel is linked. */
var SITE = {
	repo: "https://github.com/kaleblovingier/mist-fleet-onyx-solar",
	pages: "https://kaleblovingier.github.io/mist-fleet-onyx-solar/",
	gamma: "https://gamma.app/docs/c1sxd9i8iyv80eq",
	gammaCard: "https://gamma.app/docs/h9grlpif6t8ogmt",
	url: "https://github.com/kaleblovingier/mist-fleet-onyx-solar"
};
var TRY_THREE = [
	{
		id: "oral-k-gf",
		title: "Oral ketamine × grapefruit",
		punch: "F rises. Half-life does not. Overlay IV — the ghost is untouched."
	},
	{
		id: "dxm-pm",
		title: "DXM in a 2D6 poor metabolizer, q8h",
		punch: "Accumulation Rac ~2.7×. Dextrorphan falls. Once vs q8h is the lesson."
	},
	{
		id: "tac-gf",
		title: "Tacrolimus × grapefruit",
		punch: "Kitchen collision. Bioavailability up, t½ still 12 h. Gut 3A4, not hepatic."
	}
];
var COMMERCE = {
	founding: 79,
	payUrl: OPERATOR.venmoUrl,
	operatorContact: OPERATOR.email,
	pitch: "A CYP450 desk for ketamine clinics, MAT, harm-reduction staff, and pharmacy students. Two-drug collisions stay free. Host factors, the atlas, and export are licensed."
};
var BUYERS = [
	{
		who: "Ketamine / esketamine clinics",
		why: "Oral vs IV first-pass, benzo airway stack, 2B6 phenotype — the map they keep asking pharmacy for.",
		hook: "oral vs IV ketamine, benzo airway stacks, and 2B6 phenotype"
	},
	{
		who: "MAT and street-supply desks",
		why: "Xylazine, nitazenes, designer benzos, loperamide, naltrexone. Naloxone will not reverse an α2.",
		hook: "xylazine, nitazenes, designer benzos, and the naltrexone / loperamide traps"
	},
	{
		who: "Pharmacy students and residents",
		why: "A teaching desk they will actually open. Lab export goes in the notebook.",
		hook: "a teaching desk they will actually open, with JSON/CSV for the lab book"
	},
	{
		who: "Harm-reduction and psych NPs",
		why: "MDMA × SSRI, DXM × 2D6 PM, grapefruit × oral ketamine, lithium × mushrooms.",
		hook: "MDMA × SSRI, DXM in 2D6 PMs, grapefruit × oral ketamine"
	}
];
function payClose(price = COMMERCE.founding) {
	return `Pay $${price} with card on the desk, or Venmo @${OPERATOR.venmo}, Cash App $${OPERATOR.cashApp}, or PayPal ${OPERATOR.email}. Stripe mints a signed key when the charge clears.`;
}
function salesDm(price = COMMERCE.founding) {
	return [
		"I built FirstPass — a CYP450 desk that maps ketamine, MAT, street adulterants (xylazine, nitazenes), and the usual psych stack, including grapefruit, smoke, and metabolizer status.",
		"",
		"Free: two-drug collisions.",
		`Founding license: $${price} once. Host factors, metabolites, enzyme atlas, export. Yours on this desk.`,
		"",
		SITE.url,
		"",
		payClose(price),
		`${OPERATOR.email} · ${OPERATOR.phone}`,
		"",
		"Educational model — not a clinical system of record."
	].join("\n");
}
function buyerDm(who, price = COMMERCE.founding) {
	return [
		`I built FirstPass — a CYP450 desk for ${BUYERS.find((b) => b.who === who)?.hook ?? "the maps you keep asking pharmacy for"}.`,
		"",
		"Two-drug collisions stay free so you can kick the tires.",
		`Founding license is $${price} once: host factors, metabolites, enzyme atlas, JSON/CSV export.`,
		"",
		SITE.url,
		"",
		payClose(price),
		`${OPERATOR.email} · ${OPERATOR.phone}`,
		"",
		"Educational model — not a clinical system of record."
	].join("\n");
}
function launchTweet(price = COMMERCE.founding) {
	return [
		"FirstPass is a CYP450 desk for ketamine clinics, MAT, and pharmacy students.",
		"",
		"Two-drug collisions stay free.",
		`Founding license $${price} once — host factors, enzyme atlas, export.`,
		SITE.url,
		"Pay with card on the desk, or Venmo / Cash App / PayPal.",
		"",
		"Educational model. Not a charting system."
	].join("\n");
}
function launchPosts(price = COMMERCE.founding, url = SITE.url) {
	const tryLines = TRY_THREE.map((t) => `• ${t.title} — ${t.punch}`).join("\n");
	return [
		{
			id: "x",
			channel: "X",
			title: "Launch thread",
			where: "Post from @badbird or @kaleblovingier",
			compose: "https://x.com/compose/post",
			text: [
				"1/",
				"FirstPass is a CYP450 desk for ketamine clinics, MAT, and pharmacy students.",
				"",
				"Two-drug collisions stay free. Founding license $" + price + " once.",
				"",
				"2/",
				"Three cases the desk actually draws:",
				tryLines,
				"",
				"3/",
				url,
				`Venmo @${OPERATOR.venmo} · Cash App $${OPERATOR.cashApp} · PayPal ${OPERATOR.email}`,
				"",
				"Educational model. Not a charting system."
			].join("\n")
		},
		{
			id: "reddit-pharmacy",
			channel: "Reddit",
			title: "r/pharmacy",
			where: "Teaching post, not a cold pitch",
			compose: "https://www.reddit.com/r/pharmacy/submit",
			text: [
				"Title: FirstPass — a CYP450 teaching desk (oral vs IV ketamine, 2D6 PM accumulation, grapefruit first-pass)",
				"",
				"I built an educational CYP450 / PD collision desk for the stacks I kept looking up by hand: ketamine (oral vs IV), MAT / street adulterants, psych, and kitchen inhibitors.",
				"",
				"Free: two drugs on the desk, collision cards, a one-compartment concentration sketch (AUCR, q8h accumulation, oral vs IV overlay).",
				"",
				"Three cases worth opening:",
				tryLines,
				"",
				"Not a clinical system of record. Not medical advice. Founding license is $" + price + " once if you want host phenotype, the enzyme atlas, and export.",
				"",
				url,
				SITE.repo
			].join("\n")
		},
		{
			id: "reddit-ketamine",
			channel: "Reddit",
			title: "r/ketamine",
			where: "Oral vs IV first-pass, not dosing advice",
			compose: "https://www.reddit.com/r/ketamine/submit",
			text: [
				"Title: Oral vs IV ketamine first-pass — a CYP3A4 / 2B6 map (educational)",
				"",
				"Oral ketamine is a first-pass problem. IV is not. Grapefruit knocks out gut 3A4 so oral F rises while t½ stays put; an IV overlay on the same milligram scale stays flat. Strong hepatic 3A4 inhibitors are a different shape.",
				"",
				"I put that on a desk with 2B6 phenotype, benzo airway stacks, and the usual psych list. Two-drug collisions are free.",
				"",
				"Educational model — not medical advice, not a clinic chart.",
				"",
				url
			].join("\n")
		},
		{
			id: "hn",
			channel: "Hacker News",
			title: "Show HN",
			where: "news.ycombinator.com/submit",
			compose: "https://news.ycombinator.com/submit",
			text: [
				"Title: Show HN: FirstPass – educational CYP450 collision desk",
				"URL: " + url,
				"",
				"FirstPass maps CYP450 / PD collisions for ketamine (oral vs IV), MAT and street adulterants, and the usual psych stack. Two-drug collisions are free. A one-compartment sketch shows AUCR, q8h accumulation, and an oral/IV overlay. Host phenotype, the enzyme atlas, and export are a $" + price + " founding license.",
				"",
				"Educational model, not clinical decision support. Source: " + SITE.repo
			].join("\n")
		},
		{
			id: "linkedin",
			channel: "LinkedIn",
			title: "Pharmacy / clinic note",
			where: "Your LinkedIn composer",
			compose: "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url),
			text: [
				"I built FirstPass, an educational CYP450 desk for ketamine clinics, MAT programs, and pharmacy students.",
				"",
				"Two-drug collisions stay free so a preceptor can open it in rounds. Founding license is $" + price + " once: host metabolizer status, smoke and alcohol, metabolites, enzyme atlas, JSON/CSV export.",
				"",
				"Three teaching cases:",
				tryLines,
				"",
				url,
				"",
				payClose(price),
				"",
				"Educational CYP map — not a charting system."
			].join("\n")
		}
	];
}
function requestLicense(price = COMMERCE.founding) {
	return `I'd like a FirstPass founding license ($${price} once). I'll pay Venmo @${OPERATOR.venmo}, Cash App $${OPERATOR.cashApp}, or PayPal ${OPERATOR.email}. Send the key when it clears.`;
}
function fulfillKey(opts) {
	const to = opts.soldTo?.trim();
	return [
		to ? `${to} —` : "",
		"Your FirstPass founding license is ready.",
		"",
		opts.key,
		"",
		"Open the desk. If you paid by card you are already licensed on the browser that returned from Stripe — keep this key for another machine. Otherwise: Pro → paste the key → Redeem.",
		"",
		SITE.url,
		"",
		"Educational CYP map — not a clinical system of record."
	].filter((l) => l !== "").join("\n");
}
function fulfillKeys(rows) {
	return rows.map((row) => fulfillKey(row)).join("\n\n———\n\n");
}
function invoiceText(opts) {
	return [
		"FIRSTPASS DESK LICENSE",
		"Educational CYP450 / PD map. Not clinical decision support.",
		"",
		`From: ${OPERATOR.name}`,
		`Item: ${opts.plan}`,
		`Amount: $${opts.price}`,
		`Pay: ${opts.pay || OPERATOR.payLine}`,
		`Write: ${OPERATOR.email} · ${OPERATOR.phone}`,
		"",
		"After payment you receive a key like FP-LIFE-A1B2C3D4-9F3C2A1B.",
		"Paste it under Pro → Redeem on the desk.",
		opts.keyHint ? `Key: ${opts.keyHint}` : ""
	].filter((l) => l !== "").join("\n");
}
function tweetFor(regimen, highest, headline) {
	return `${`${regimen} — ${highest}`}${headline && headline !== regimen ? `\n${headline}` : ""}\nMapped on FirstPass. Educational CYP desk.\n${SITE.url}`.trim();
}
var PLANS = [
	{
		id: "free",
		name: "Desk",
		tagline: "Two-drug CYP and PD collisions.",
		monthly: 0,
		yearly: 0,
		features: [
			"Search the 350+ compound formulary (including vitamin-shop bottles)",
			"Two drugs on the desk",
			"PK / PD collision cards",
			"DrugBank, CPIC / PharmGKB, Stahl receptor cards",
			"PubMed citation shelf (curated PMIDs + live NCBI)",
			"Concentration-time sketch (two-drug AUCR, q8h accumulation)",
			"CYP occupancy heatmap",
			"Share a one-line map"
		]
	},
	{
		id: "pro",
		name: "Pro",
		tagline: "Host factors, metabolites, the atlas.",
		monthly: 12,
		yearly: 99,
		lifetime: 79,
		highlighted: true,
		features: [
			"Eight-drug regimens",
			"CYP2D6 / 2C19 / 2C9 / 2B6 phenotype",
			"Smoke, alcohol pattern, ketamine & cannabis route",
			"Age (Beers), kidney, pregnancy / lactation",
			"Metabolite maps",
			"Stack load meters",
			"Enzyme atlas",
			"Full copyable collision report"
		]
	},
	{
		id: "lab",
		name: "Founding / Lab",
		tagline: "Lifetime desk, or a teaching seat.",
		monthly: 29,
		yearly: 249,
		lifetime: 79,
		features: [
			"Everything in Pro",
			"JSON + CSV export",
			"Founding lifetime at $79 once",
			"License receipt for the lab book",
			"Priority formulary additions"
		]
	}
];
var PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p]));
function priceFor(plan, interval) {
	const p = PLAN_BY_ID[plan];
	if (!p || plan === "free") return 0;
	if (interval === "life") return p.lifetime ?? 79;
	return interval === "year" ? p.yearly : p.monthly;
}
function maxDrugs(plan) {
	return plan === "free" ? 2 : 8;
}
//#endregion
export { priceFor as _, PLANS as a, tweetFor as b, TRY_THREE as c, fulfillKeys as d, invoiceText as f, payClose as g, maxDrugs as h, PAY_RAILS as i, buyerDm as l, launchTweet as m, COMMERCE as n, PLAN_BY_ID as o, launchPosts as p, OPERATOR as r, SITE as s, BUYERS as t, fulfillKey as u, requestLicense as v, salesDm as y };
