//#region node_modules/.nitro/vite/services/ssr/assets/catalog-2vdmANSb.js
function card(partial) {
	return partial;
}
var CLINIC = {
	warfarin: card({
		pregnancy: "avoid",
		pregNote: "Teratogen (nasal hypoplasia, stippled epiphyses). LMWH is the usual bridge. Former category X.",
		lactation: "ok",
		lactNote: "Warfarin is compatible with breastfeeding in most maps. INR the infant only if bleeding.",
		renal: "caution",
		hepatic: "caution",
		hepNote: "Synthesized clotting factors fall in liver failure — INR is the patient, not just the dose.",
		boxed: "Major or fatal bleed. INR is the monitor, vitamin K is the antidote.",
		monitor: [
			"INR",
			"CBC",
			"bleed"
		]
	}),
	apixaban: card({
		pregnancy: "caution",
		pregNote: "Limited human data. LMWH is still the default in pregnancy.",
		renal: "caution",
		renalNote: "Dose cut or avoid as GFR falls. Not dialysis-cleared like dabigatran.",
		boxed: "Premature discontinuation raises thrombotic risk. No vitamin-K reversal.",
		monitor: ["Cr", "bleed"]
	}),
	rivaroxaban: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Avoid in severe CKD. Take with food at the 15–20 mg doses.",
		boxed: "Premature discontinuation raises thrombotic risk.",
		monitor: ["Cr", "bleed"]
	}),
	dabigatran: card({
		pregnancy: "caution",
		renal: "avoid",
		renalNote: "Renally cleared. Severe CKD is a no. Idarucizumab is the reversal, not vitamin K.",
		boxed: "Premature discontinuation raises thrombotic risk.",
		monitor: ["Cr", "bleed"]
	}),
	enoxaparin: card({
		pregnancy: "ok",
		pregNote: "The usual antenatal anticoagulant. Does not cross like warfarin.",
		renal: "caution",
		renalNote: "Dose-adjust below CrCl 30. Anti-Xa if extremes of weight.",
		monitor: [
			"Cr",
			"platelets",
			"anti-Xa"
		]
	}),
	methotrexate: card({
		pregnancy: "avoid",
		pregNote: "Abortifacient and teratogen. Folate antagonism. Hold and wait out a cycle.",
		lactation: "avoid",
		renal: "caution",
		hepatic: "caution",
		boxed: "Marrow, liver, lung, pregnancy. NSAIDs and TMP-SMX raise toxicity.",
		monitor: [
			"CBC",
			"LFTs",
			"Cr"
		]
	}),
	azathioprine: card({
		pregnancy: "caution",
		pregNote: "Used in transplant/IBD pregnancy more often than MTX. Still a specialist call.",
		renal: "caution",
		hepatic: "caution",
		boxed: "Malignancy and myelosuppression. Allopurinol / febuxostat is xanthine oxidase — pancytopenia.",
		monitor: ["CBC", "LFTs"]
	}),
	mercaptopurine: card({
		pregnancy: "caution",
		boxed: "Myelosuppression. TPMT/NUDT15 and xanthine-oxidase blockers.",
		monitor: ["CBC"]
	}),
	mycophenolate: card({
		pregnancy: "avoid",
		pregNote: "REMS teratogen. Two forms of contraception. Switch before conception.",
		lactation: "avoid",
		boxed: "Embryofetal toxicity, malignancy, infection.",
		monitor: ["CBC", "preg test"]
	}),
	valproate: card({
		pregnancy: "avoid",
		pregNote: "Neural-tube defects, cognitive impairment. Not a first-line in people who can become pregnant.",
		lactation: "caution",
		hepatic: "avoid",
		hepNote: "Boxed hepatotoxicity, especially under 2 years and in mitochondrial disease.",
		boxed: "Hepatotoxicity, pancreatitis, fetal risk.",
		beers: "Avoid for most older adults unless bipolar/seizure with no alternative.",
		monitor: [
			"LFTs",
			"CBC",
			"level",
			"preg test"
		]
	}),
	carbamazepine: card({
		pregnancy: "caution",
		pregNote: "Neural-tube risk; folate. HLA-B*1502 SJS in ancestry from East/South Asia.",
		hepatic: "caution",
		boxed: "SJS/TEN, aplastic anemia, HLA-B*1502. Strong 3A4/2B6 induction — stolen methadone take-home in days.",
		beers: "SIADH / hyponatremia watch in older adults.",
		monitor: [
			"CBC",
			"Na",
			"LFTs",
			"level",
			"withdrawal"
		]
	}),
	lamotrigine: card({
		pregnancy: "caution",
		pregNote: "Clearance rises in pregnancy — levels fall. Valproate is the UGT trap.",
		lactation: "caution",
		boxed: "SJS/TEN. Slow titration. Valproate doubles parent.",
		monitor: ["rash", "level"]
	}),
	lithium: card({
		pregnancy: "caution",
		pregNote: "Ebstein anomaly signal, still used when the alternative is worse. Levels drift with GFR.",
		lactation: "caution",
		renal: "caution",
		renalNote: "Renally cleared. NSAID / ACEI / thiazide raise the level. CKD is a TDM problem.",
		beers: "Watch interactions that raise the level.",
		boxed: "Toxicity closely related to serum level.",
		monitor: [
			"Li",
			"Cr",
			"TSH",
			"Na"
		]
	}),
	phenytoin: card({
		pregnancy: "caution",
		pregNote: "Fetal hydantoin syndrome. 2C9 PMs stack parent.",
		hepatic: "caution",
		beers: "Falls, sedation, bone loss with chronic use.",
		monitor: [
			"level",
			"albumin",
			"CBC"
		]
	}),
	lisinopril: card({
		pregnancy: "avoid",
		pregNote: "Boxed fetal toxicity (renal dysgenesis, oligohydramnios) in 2nd/3rd trimester.",
		renal: "caution",
		renalNote: "Cr bump after start. HyperK with K-sparing or a salt substitute.",
		boxed: "Fetal toxicity.",
		monitor: ["Cr", "K"]
	}),
	losartan: card({
		pregnancy: "avoid",
		pregNote: "Same fetal toxicity boxed warning as ACE inhibitors.",
		renal: "caution",
		boxed: "Fetal toxicity.",
		monitor: ["Cr", "K"]
	}),
	valsartan: card({
		pregnancy: "avoid",
		renal: "caution",
		boxed: "Fetal toxicity.",
		monitor: ["Cr", "K"]
	}),
	spironolactone: card({
		pregnancy: "caution",
		pregNote: "Anti-androgen. Avoid when the fetus could be male.",
		renal: "caution",
		renalNote: "HyperK climbs as GFR falls. ACEI plus K plus this is the triad.",
		beers: "Avoid >25 mg/d if CrCl <30 — hyperK.",
		monitor: ["K", "Cr"]
	}),
	eplerenone: card({
		pregnancy: "caution",
		renal: "caution",
		monitor: ["K", "Cr"]
	}),
	metformin: card({
		pregnancy: "caution",
		pregNote: "Often continued in GDM / PCOS pathways. Not a teratogen like valproate.",
		renal: "avoid",
		renalNote: "Lactic acidosis risk as eGFR falls. Hold for contrast. Not a CYP story.",
		hepatic: "caution",
		beers: "Hold in significant CKD.",
		boxed: "Lactic acidosis — rare, renal/hepatic/hypoxia.",
		monitor: ["Cr", "B12"]
	}),
	glipizide: card({
		pregnancy: "caution",
		renal: "caution",
		beers: "Sulfonylureas — prolonged hypoglycemia in older adults. Glipizide is the quieter SU.",
		monitor: ["glucose"]
	}),
	glyburide: card({
		pregnancy: "caution",
		beers: "Avoid. Prolonged hypoglycemia in older adults — worse than glipizide.",
		monitor: ["glucose"]
	}),
	glimepiride: card({
		beers: "Sulfonylurea hypoglycemia in older adults.",
		monitor: ["glucose"]
	}),
	"insulin-glargine": card({
		pregnancy: "ok",
		beers: "Avoid sliding-scale-only insulin. Basal itself is not the Beers row.",
		monitor: ["glucose"]
	}),
	semaglutide: card({
		pregnancy: "caution",
		pregNote: "Weight-loss / GLP-1: stop well before planned pregnancy. Fetal growth signal in animals.",
		boxed: "Thyroid C-cell tumor boxed warning (rodent). Personal/family MTC / MEN2 is a no.",
		monitor: ["GI", "glucose"]
	}),
	tirzepatide: card({
		pregnancy: "caution",
		boxed: "Thyroid C-cell tumor boxed warning (rodent).",
		monitor: ["GI", "glucose"]
	}),
	ibuprofen: card({
		pregnancy: "avoid",
		pregNote: "Avoid in third trimester (ductus). Earlier pregnancy is a specialist call.",
		renal: "caution",
		renalNote: "Hemodynamic kidney hit. ACEI + diuretic + NSAID is the triple whammy.",
		beers: "Avoid chronic NSAIDs in older adults — GI bleed, CKD, HF.",
		boxed: "CV thrombotic events and GI bleed (NSAID class).",
		monitor: [
			"Cr",
			"CBC",
			"BP"
		]
	}),
	naproxen: card({
		pregnancy: "avoid",
		renal: "caution",
		beers: "Chronic NSAID — GI, CKD, HF.",
		boxed: "CV thrombotic events and GI bleed.",
		monitor: ["Cr", "CBC"]
	}),
	ketorolac: card({
		pregnancy: "avoid",
		renal: "avoid",
		beers: "Avoid. Highest GI/renal NSAID hit. Short course only even in adults.",
		boxed: "GI, renal, bleed, labor. 5-day ceiling.",
		monitor: ["Cr", "CBC"]
	}),
	diclofenac: card({
		pregnancy: "avoid",
		renal: "caution",
		hepatic: "caution",
		beers: "Chronic NSAID.",
		boxed: "CV and GI.",
		monitor: ["Cr", "LFTs"]
	}),
	meloxicam: card({
		pregnancy: "avoid",
		renal: "caution",
		beers: "Chronic NSAID.",
		boxed: "CV and GI.",
		monitor: ["Cr"]
	}),
	celecoxib: card({
		pregnancy: "avoid",
		renal: "caution",
		beers: "COX-2 still has CV/renal cost.",
		boxed: "CV thrombotic events.",
		monitor: ["Cr", "BP"]
	}),
	acetaminophen: card({
		pregnancy: "ok",
		pregNote: "Still the usual analgesic in pregnancy. Chronic alcohol plus APAP is the 2E1/NAPQI story.",
		hepatic: "caution",
		hepNote: "Ceiling dose. Chronic alcohol induces 2E1 — more NAPQI.",
		beers: "Prefer over NSAIDs in older adults if an analgesic is needed.",
		boxed: "Hepatotoxicity with doses above the labeled ceiling.",
		monitor: ["LFTs"]
	}),
	methadone: card({
		pregnancy: "caution",
		pregNote: "OTP continues methadone in pregnancy. Neonatal opioid withdrawal is expected, not a reason to stop. Jones MOTHER (2010) and Suarez 2022: buprenorphine had milder NAS in those maps — still not a switch protocol.",
		lactation: "ok",
		lactNote: "LactMed: usually compatible. Relative infant dose ~1–3% on a stable bottle. Watch infant sedation. Do not stop OTP to breastfeed.",
		hepatic: "caution",
		boxed: "QTc prolongation, respiratory depression, addiction. Opioid + benzo / gabapentinoid is boxed at any age.",
		beers: "Opioid + benzo is the airway boxed warning at any age. QT drugs at the window are not free extras.",
		monitor: [
			"ECG",
			"K",
			"Mg",
			"airway",
			"UDS",
			"EDDP"
		]
	}),
	buprenorphine: card({
		pregnancy: "caution",
		pregNote: "Office-based and OTP both use buprenorphine in pregnancy. Precipitated withdrawal is occupancy. MOTHER / Suarez: milder NAS vs methadone in those cohorts — not a reason to destabilize a working methadone.",
		lactation: "ok",
		lactNote: "LactMed: low RID. Naloxone in Suboxone is poorly bioavailable via milk. Watch infant sedation.",
		boxed: "Respiratory depression with benzos / alcohol. Precipitated withdrawal with full agonists.",
		monitor: [
			"airway",
			"COWS",
			"UDS"
		]
	}),
	naltrexone: card({
		pregnancy: "caution",
		lactation: "caution",
		lactNote: "Limited milk data. Theoretical μ blockade if the infant needed opioid analgesia.",
		boxed: "Precipitated opioid withdrawal. Need a washout. Hepatotoxicity at high oral doses.",
		hepatic: "caution",
		monitor: ["LFTs"]
	}),
	nalmefene: card({
		pregnancy: "caution",
		lactation: "caution",
		lactNote: "No useful milk data. Longer μ occupancy than naloxone is the adult row.",
		boxed: "Precipitated opioid withdrawal. Longer occupancy than naloxone — re-narcotize vs over-reverse.",
		monitor: ["airway"]
	}),
	paxlovid: card({
		pregnancy: "caution",
		boxed: "Ritonavir-boosted. Fentanyl / oxycodone airway; methadone often falls — watch withdrawal. Buprenorphine parent may climb; tolerant patients usually need no cut.",
		hepatic: "caution",
		renal: "caution",
		renalNote: "Nirmatrelvir is renally adjusted. The DDI is the ritonavir, not the GFR cut.",
		monitor: ["airway", "withdrawal"]
	}),
	nevirapine: card({
		pregnancy: "caution",
		hepatic: "avoid",
		hepNote: "Hepatotoxicity, including in pregnancy. OTP stolen-dose NNRTI on top of that.",
		boxed: "Hepatotoxicity, SJS/TEN. Dumps methadone.",
		monitor: ["LFTs", "withdrawal"]
	}),
	cobicistat: card({
		boxed: "Tybost is not Norvir. 3A4 inhibit without 2B6 induction — methadone parent climbs, it does not fall. Buprenorphine rises too.",
		monitor: ["airway", "ECG"]
	}),
	fluvoxamine: card({
		pregnancy: "caution",
		boxed: "Serotonin syndrome with other serotonergics including methadone and fentanyl.",
		beers: "The OTP Luvox bump is PK plus serotonin, not a free OCD pill.",
		monitor: ["airway", "ECG"]
	}),
	promethazine: card({
		pregnancy: "caution",
		beers: "Anticholinergic, sedation. Next to methadone it is not a free antiemetic.",
		boxed: "Respiratory depression with opioids. IV has a boxed gangrene warning.",
		monitor: ["airway"]
	}),
	cyclobenzaprine: card({
		beers: "Anticholinergic muscle relaxant. Avoid in older adults. Next to methadone / fentanyl it is still an airway drug.",
		monitor: ["airway"]
	}),
	ethanol: card({
		pregnancy: "avoid",
		pregNote: "No safe dose in pregnancy. OTP still treats the alcohol, not with a free drink on methadone.",
		hepatic: "caution",
		beers: "Falls, delirium. Next to methadone or buprenorphine it is boxed airway, not a CYP row.",
		boxed: "Respiratory depression with opioids, benzos, GHB.",
		monitor: ["airway", "LFTs"]
	}),
	clarithromycin: card({
		pregnancy: "caution",
		hepatic: "caution",
		beers: "QT. Strong 3A4 inhibitor — Biaxin is not a Z-Pak next to methadone.",
		boxed: "QT. Strong 3A4 perpetrator of fentanyl, methadone, midazolam.",
		monitor: ["ECG", "airway"]
	}),
	azithromycin: card({
		pregnancy: "caution",
		beers: "QT without much CYP3A4. Next to methadone it is still a repolarization extra.",
		monitor: ["ECG"]
	}),
	morphine: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Morphine-6-glucuronide accumulates in CKD — longer apnea.",
		beers: "Opioids: falls, constipation, airway with gabapentinoids / benzos.",
		boxed: "Addiction, respiratory depression, neonatal withdrawal, benzo combo.",
		monitor: ["airway"]
	}),
	oxycodone: card({
		pregnancy: "caution",
		beers: "Opioid harms in older adults.",
		boxed: "Addiction, respiratory depression, benzo combo.",
		monitor: ["airway"]
	}),
	hydrocodone: card({
		pregnancy: "caution",
		beers: "Opioid harms in older adults.",
		boxed: "Addiction, respiratory depression, benzo combo."
	}),
	fentanyl: card({
		pregnancy: "caution",
		boxed: "Addiction, respiratory depression, benzo combo. 3A4 inhibitors (Paxlovid, ritonavir, azoles) raise parent.",
		beers: "Opioid harms. Street fentanyl ± xylazine / medetomidine is a different row — naloxone will not finish the α2.",
		monitor: ["airway"]
	}),
	tramadol: card({
		pregnancy: "caution",
		renal: "caution",
		beers: "SIADH, seizures, serotonin. 2D6 UM stacks the opioid metabolite.",
		boxed: "Seizure, serotonin, addiction, respiratory depression.",
		monitor: ["Na"]
	}),
	codeine: card({
		pregnancy: "caution",
		lactation: "avoid",
		lactNote: "2D6 UM nursing parent can deliver morphine to the infant. Boxed.",
		beers: "Avoid. Unpredictable 2D6 activation.",
		boxed: "Respiratory depression in 2D6 UMs, including breastfed infants."
	}),
	gabapentin: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Renally cleared. Dose-cut as GFR falls. Myoclonus in CKD.",
		beers: "With opioids — airway. Falls. Dose-cut in CKD.",
		boxed: "Respiratory depression with opioids and in respiratory disease."
	}),
	pregabalin: card({
		pregnancy: "caution",
		renal: "caution",
		beers: "With opioids — airway. Dose-cut in CKD.",
		boxed: "Respiratory depression with opioids."
	}),
	alprazolam: card({
		pregnancy: "caution",
		beers: "Avoid short-acting benzos in older adults — falls, delirium, crash.",
		boxed: "Concomitant opioid use. Dependence and withdrawal."
	}),
	diazepam: card({
		pregnancy: "caution",
		beers: "Long-acting benzo. Avoid in older adults.",
		boxed: "Opioid combo, dependence."
	}),
	clonazepam: card({
		pregnancy: "caution",
		beers: "Avoid benzos in older adults.",
		boxed: "Opioid combo, dependence."
	}),
	lorazepam: card({
		pregnancy: "caution",
		beers: "Preferable to long-acting agents if a benzo is unavoidable — still Beers.",
		boxed: "Opioid combo, dependence."
	}),
	midazolam: card({
		pregnancy: "caution",
		boxed: "Respiratory depression. 3A4 victims go deeper."
	}),
	zolpidem: card({
		pregnancy: "caution",
		beers: "Avoid Z-drugs in older adults — falls, complex sleep behavior, crash.",
		boxed: "Complex sleep behaviors. Opioid combo."
	}),
	amitriptyline: card({
		pregnancy: "caution",
		beers: "Highly anticholinergic, sedating. Avoid in older adults.",
		monitor: ["ECG"]
	}),
	nortriptyline: card({
		beers: "Anticholinergic / fall risk — quieter than amitriptyline, still Beers.",
		monitor: ["ECG"]
	}),
	diphenhydramine: card({
		pregnancy: "ok",
		beers: "Highly anticholinergic. Avoid as a sleep aid in older adults."
	}),
	hydroxyzine: card({
		beers: "Anticholinergic. QT possible next to methadone.",
		monitor: ["ECG"]
	}),
	doxylamine: card({
		pregnancy: "ok",
		pregNote: "Used with B6 for nausea. Still anticholinergic in a geriatric host.",
		beers: "Anticholinergic sleep aid — avoid in older adults."
	}),
	oxybutynin: card({ beers: "Anticholinergic for bladder. Avoid if possible in older adults." }),
	clozapine: card({
		pregnancy: "caution",
		boxed: "Agranulocytosis, myocarditis, seizures, orthostasis, constipation/ileus.",
		beers: "Anticholinergic / fall / constipation. ANC is the monitor at any age.",
		monitor: [
			"ANC",
			"ECG",
			"glucose",
			"lipids"
		]
	}),
	olanzapine: card({
		pregnancy: "caution",
		beers: "Antipsychotics in dementia — stroke and death boxed warning.",
		boxed: "Increased mortality in dementia-related psychosis.",
		monitor: [
			"glucose",
			"lipids",
			"weight"
		]
	}),
	quetiapine: card({
		pregnancy: "caution",
		beers: "Avoid for insomnia/behavior in dementia. QT possible.",
		boxed: "Increased mortality in dementia-related psychosis.",
		monitor: ["glucose", "ECG"]
	}),
	risperidone: card({
		beers: "Dementia mortality boxed. EPS / prolactin.",
		boxed: "Increased mortality in dementia-related psychosis."
	}),
	haloperidol: card({
		beers: "Typical antipsychotic. Dementia mortality. QT.",
		boxed: "Increased mortality in dementia-related psychosis.",
		monitor: ["ECG"]
	}),
	citalopram: card({
		pregnancy: "caution",
		beers: "QTc — max dose lower in older adults.",
		monitor: ["ECG", "Na"]
	}),
	escitalopram: card({
		pregnancy: "caution",
		beers: "SIADH / fall risk. Quieter QT than citalopram.",
		monitor: ["Na"]
	}),
	sertraline: card({
		pregnancy: "caution",
		pregNote: "Often the preferred SSRI when one is needed in pregnancy.",
		beers: "SIADH / fall risk.",
		monitor: ["Na"]
	}),
	fluoxetine: card({
		pregnancy: "caution",
		beers: "Long washout. SIADH. On an OTP board this is not the Luvox methadone bump — 2D6, not 1A2/2B6.",
		monitor: ["Na"]
	}),
	paroxetine: card({
		pregnancy: "caution",
		pregNote: "Cardiac malformation signal historically — usually not first-line in pregnancy.",
		beers: "Anticholinergic among SSRIs.",
		monitor: ["Na"]
	}),
	ketamine: card({
		pregnancy: "caution",
		boxed: "Sedation, dissociation, abuse. Blood pressure rise.",
		monitor: ["BP", "airway"]
	}),
	esketamine: card({
		pregnancy: "caution",
		boxed: "REMS: sedation, dissociation, abuse. Not a take-home bottle.",
		monitor: ["BP"]
	}),
	digoxin: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Renally cleared NTI. Levels lie if you draw too early.",
		beers: "Avoid as first-line in AF or HF. Toxicity as GFR falls.",
		monitor: [
			"level",
			"Cr",
			"K"
		]
	}),
	amiodarone: card({
		pregnancy: "avoid",
		pregNote: "Fetal thyroid. Long half-life — a washout of months.",
		hepatic: "caution",
		boxed: "Pulmonary, hepatic, and proarrhythmic toxicity. For life-threatening arrhythmia.",
		beers: "Avoid as first-line AF agent.",
		monitor: [
			"TSH",
			"LFTs",
			"CXR",
			"ECG",
			"eye"
		]
	}),
	sotalol: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Renally cleared. QT explodes as GFR falls.",
		boxed: "Proarrhythmia. In-hospital start historically.",
		beers: "QT / bradycardia.",
		monitor: [
			"ECG",
			"Cr",
			"K",
			"Mg"
		]
	}),
	colchicine: card({
		pregnancy: "caution",
		renal: "avoid",
		renalNote: "Fatal with clarithromycin or a strong 3A4/P-gp inhibitor in CKD.",
		hepatic: "caution",
		beers: "Reduce dose or avoid as GFR falls.",
		monitor: ["CBC", "Cr"]
	}),
	allopurinol: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Dose-cut in CKD. HLA-B*5801 SJS in high-risk ancestry.",
		boxed: "Severe cutaneous reaction.",
		monitor: [
			"rash",
			"Cr",
			"uric acid"
		]
	}),
	febuxostat: card({
		renal: "caution",
		boxed: "CV death vs allopurinol in CARES. Thiopurine interaction is xanthine oxidase.",
		monitor: ["LFTs", "uric acid"]
	}),
	tacrolimus: card({
		pregnancy: "caution",
		renal: "caution",
		hepatic: "caution",
		boxed: "Malignancy, infection. NTI. Grapefruit and azoles raise parent.",
		monitor: [
			"level",
			"Cr",
			"K",
			"glucose"
		]
	}),
	cyclosporine: card({
		pregnancy: "caution",
		renal: "caution",
		boxed: "Nephrotoxicity, malignancy, infection. Grapefruit / 3A4/P-gp.",
		monitor: [
			"level",
			"Cr",
			"BP",
			"K"
		]
	}),
	sirolimus: card({
		pregnancy: "caution",
		boxed: "Infection, malignancy. 3A4/P-gp victim.",
		monitor: [
			"level",
			"lipids",
			"CBC"
		]
	}),
	"ethinyl-estradiol": card({
		pregnancy: "avoid",
		pregNote: "Stop. Rifampin and St John's wort dump efficacy — that is the desk collision.",
		boxed: "Smoking + age >35: CV events. Thromboembolism."
	}),
	rifampin: card({
		pregnancy: "caution",
		hepatic: "caution",
		boxed: "Hepatotoxicity. Induces everything that matters on this desk.",
		monitor: ["LFTs"]
	}),
	fluconazole: card({
		pregnancy: "avoid",
		pregNote: "High-dose / chronic: malformation signal. A one-dose yeast pill is a different row.",
		hepatic: "caution",
		monitor: ["LFTs", "ECG"]
	}),
	ketoconazole: card({
		pregnancy: "avoid",
		hepatic: "avoid",
		boxed: "Hepatotoxicity. QT. Strong 3A4 inhibitor — the probe perpetrator.",
		monitor: ["LFTs", "ECG"]
	}),
	itraconazole: card({
		hepatic: "caution",
		boxed: "CHF, QT, strong 3A4 inhibition.",
		monitor: ["LFTs"]
	}),
	voriconazole: card({
		pregnancy: "avoid",
		hepatic: "caution",
		monitor: [
			"LFTs",
			"level",
			"vision"
		]
	}),
	ciprofloxacin: card({
		pregnancy: "caution",
		renal: "caution",
		beers: "CNS, tendon, hypoglycemia, QT. Cations bind it in the gut.",
		boxed: "Tendon, peripheral neuropathy, CNS, myasthenia. Next to methadone: QT plus a 1A2/weak-3A4 nudge (Herrlin 2000).",
		monitor: ["glucose", "ECG"]
	}),
	levofloxacin: card({
		pregnancy: "caution",
		renal: "caution",
		beers: "Same FQ boxed harms. QT more than cipro.",
		boxed: "Tendon, neuropathy, CNS, myasthenia.",
		monitor: ["ECG", "glucose"]
	}),
	moxifloxacin: card({
		beers: "FQ harms plus QT.",
		boxed: "Tendon, neuropathy, CNS. QT.",
		monitor: ["ECG"]
	}),
	doxycycline: card({
		pregnancy: "avoid",
		pregNote: "Tooth and bone in the second half of pregnancy. Cations bind it.",
		lactation: "caution"
	}),
	nitroglycerin: card({
		pregnancy: "caution",
		boxed: "PDE5 inhibitors are contraindicated — refractory hypotension.",
		monitor: ["BP"]
	}),
	"isosorbide-mononitrate": card({
		boxed: "PDE5 inhibitors are contraindicated.",
		monitor: ["BP"]
	}),
	sildenafil: card({
		pregnancy: "caution",
		boxed: "Nitrates contraindicated. 3A4 victims go hypotensive.",
		monitor: ["BP"]
	}),
	tadalafil: card({
		boxed: "Nitrates contraindicated (longer wait than sildenafil).",
		monitor: ["BP"]
	}),
	simvastatin: card({
		pregnancy: "avoid",
		pregNote: "Statins are generally stopped in pregnancy.",
		hepatic: "caution",
		boxed: "Myopathy / rhabdomyolysis. Strong 3A4 inhibitors contraindicated. Gemfibrozil too.",
		monitor: ["CK", "LFTs"]
	}),
	atorvastatin: card({
		pregnancy: "avoid",
		hepatic: "caution",
		boxed: "Myopathy. 3A4 victim — quieter than simva/lova.",
		monitor: ["CK", "LFTs"]
	}),
	lovastatin: card({
		pregnancy: "avoid",
		boxed: "Myopathy. Same 3A4/gemfibrozil map as simvastatin and red yeast rice.",
		monitor: ["CK"]
	}),
	"red-yeast-rice": card({
		pregnancy: "avoid",
		boxed: "This is lovastatin. Same myopathy map.",
		monitor: ["CK"]
	}),
	clopidogrel: card({
		pregnancy: "caution",
		boxed: "Diminished antiplatelet effect in 2C19 PMs. Omeprazole phenocopies that.",
		monitor: ["bleed"]
	}),
	levothyroxine: card({
		pregnancy: "ok",
		pregNote: "Dose usually goes up in pregnancy. Do not take with calcium, iron, or fiber.",
		monitor: ["TSH"]
	}),
	"st-johns-wort": card({
		pregnancy: "caution",
		boxed: "Induces 3A4/P-gp. Transplant, OCP, DOAC, tacrolimus all dump."
	}),
	berberine: card({
		pregnancy: "avoid",
		pregNote: "Uterine stimulant folklore plus almost no pregnancy data. Skip.",
		monitor: ["glucose"]
	}),
	kava: card({
		hepatic: "avoid",
		hepNote: "Herb-induced liver injury. Not a free anxiolytic next to alcohol.",
		beers: "Sedating herb. Falls."
	}),
	"green-tea": card({
		hepatic: "caution",
		hepNote: "Concentrated EGCG extract — USP liver signal. Tea is not this row."
	}),
	"black-cohosh": card({
		hepatic: "caution",
		hepNote: "Herb-induced liver injury. Menopause shelf, not estrogen occupancy."
	}),
	disulfiram: card({
		pregnancy: "caution",
		hepatic: "caution",
		boxed: "Never give if alcohol is on board. Hepatotoxicity.",
		monitor: ["LFTs"]
	}),
	linezolid: card({
		pregnancy: "caution",
		boxed: "MAO inhibition — serotonin syndrome and tyramine. Myelosuppression with duration.",
		monitor: ["CBC", "BP"]
	}),
	"tmp-smx": card({
		pregnancy: "caution",
		pregNote: "Folate in the first trimester; kernicterus signal near term.",
		renal: "caution",
		boxed: "Severe cutaneous reaction. Raises MTX and warfarin effect.",
		monitor: [
			"Cr",
			"K",
			"CBC"
		]
	}),
	ondansetron: card({
		pregnancy: "caution",
		beers: "QT. Next to methadone it is not a free antiemetic.",
		monitor: ["ECG"]
	}),
	cimetidine: card({
		beers: "CNS in older adults. The CYP perpetrator among H2 blockers.",
		boxed: "Raises 1A2/3A4/2D6 victims. On an OTP board it can nudge methadone — famotidine is the switch.",
		monitor: ["airway"]
	}),
	baclofen: card({
		renal: "caution",
		renalNote: "Encephalopathy in CKD. Dose-cut or avoid.",
		beers: "Sedation, falls."
	}),
	tizanidine: card({
		hepatic: "caution",
		beers: "Hypotension, sedation. 1A2 victims go deeper (cipro, fluvoxamine).",
		monitor: ["BP", "LFTs"]
	}),
	meperidine: card({
		renal: "avoid",
		beers: "Avoid. Normeperidine seizures as GFR falls. Serotonin with MAOIs.",
		boxed: "MAOIs. Seizures. Not for chronic pain."
	}),
	pioglitazone: card({
		pregnancy: "caution",
		hepatic: "caution",
		beers: "Heart failure. Fluid.",
		boxed: "CHF. Bladder cancer signal.",
		monitor: ["weight"]
	}),
	ranolazine: card({
		boxed: "QT. Strong 3A4 inhibitors contraindicated.",
		monitor: ["ECG"]
	}),
	hydroxychloroquine: card({
		pregnancy: "ok",
		pregNote: "Continued in lupus pregnancy.",
		beers: "Retinopathy with duration/dose. QT.",
		monitor: ["eye", "ECG"]
	}),
	fluticasone: card({ boxed: "Ritonavir / cobicistat / strong 3A4 inhibitors — iatrogenic Cushing from 'local' steroid." }),
	budesonide: card({ boxed: "Gut 3A4 first-pass. Azoles and boosters make it systemic." }),
	theophylline: card({
		pregnancy: "caution",
		hepatic: "caution",
		boxed: "Narrow index. Seizures and arrhythmias when the level runs hot.",
		beers: "Not a first-line bronchodilator in older adults.",
		monitor: ["level", "HR"]
	}),
	phenobarbital: card({
		pregnancy: "caution",
		pregNote: "Inducer — OCP failure. Sedation and withdrawal in the neonate.",
		hepatic: "caution",
		beers: "Avoid. Dependence, falls, cognitive load.",
		monitor: ["level", "LFTs"]
	}),
	primidone: card({
		pregnancy: "caution",
		beers: "Barbiturate prodrug to phenobarbital. Same falls / inducer map.",
		monitor: ["level"]
	}),
	ziprasidone: card({
		pregnancy: "caution",
		boxed: "QT. Contraindicated with known-risk QT drugs and in uncompensated HF.",
		beers: "QT. Feed ~500 kcal or F collapses.",
		monitor: ["ECG"]
	}),
	lurasidone: card({
		pregnancy: "caution",
		beers: "Must take with ~350 kcal. F collapses fasted — not a CYP row.",
		monitor: ["weight", "A1c"]
	}),
	oxcarbazepine: card({
		pregnancy: "caution",
		beers: "SIADH / hyponatremia. HLA-B*15:02 rash caution like carbamazepine.",
		monitor: ["Na"]
	}),
	paliperidone: card({
		pregnancy: "caution",
		renal: "caution",
		renalNote: "Renally cleared 9-hydroxy-risperidone. CKD is a dose cut, not 2D6.",
		beers: "QT possible. Prolactin.",
		monitor: ["Cr", "prolactin"]
	}),
	chlorpromazine: card({
		pregnancy: "caution",
		hepatic: "caution",
		hepNote: "The phenothiazine that taught cholestatic jaundice.",
		beers: "Anticholinergic, falls, QT.",
		monitor: ["ECG", "LFTs"]
	}),
	metoclopramide: card({
		pregnancy: "caution",
		boxed: "Tardive dyskinesia. Duration cap. Not a free nausea drug on a psych desk.",
		beers: "Avoid. EPS, tardive."
	}),
	isoniazid: card({
		pregnancy: "caution",
		hepatic: "avoid",
		hepNote: "Classic INH hepatitis. Slow NAT2 acetylators. Pyridoxine does not prevent this.",
		boxed: "Hepatitis. Peripheral neuropathy — give B6.",
		monitor: ["LFTs"]
	}),
	duloxetine: card({
		pregnancy: "caution",
		hepatic: "avoid",
		hepNote: "Labeled — avoid in chronic liver disease.",
		beers: "Falls, hyponatremia, SIADH among SNRIs.",
		monitor: [
			"LFTs",
			"BP",
			"Na"
		]
	})
};
function clinicFor(id) {
	return CLINIC[id];
}
function hasClinic(id) {
	return Boolean(CLINIC[id]);
}
var CLINIC_PREG_AVOID = Object.entries(CLINIC).filter(([, v]) => v.pregnancy === "avoid").map(([id]) => id);
var CLINIC_BEERS = Object.entries(CLINIC).filter(([, v]) => Boolean(v.beers)).map(([id]) => id);
Object.entries(CLINIC).filter(([, v]) => v.renal === "avoid" || v.renal === "caution").map(([id]) => id);
function b(accession, targets, group = "Approved", extra) {
	return extra ? {
		accession,
		extra,
		targets,
		group
	} : {
		accession,
		targets,
		group
	};
}
var DRUGBANK = {
	clarithromycin: b("DB01211", ["50S ribosome"]),
	erythromycin: b("DB00199", ["50S ribosome"]),
	azithromycin: b("DB00207", ["50S ribosome"]),
	ciprofloxacin: b("DB00537", ["DNA gyrase", "topo IV"]),
	levofloxacin: b("DB01137", ["DNA gyrase"]),
	moxifloxacin: b("DB00218", ["DNA gyrase"]),
	metronidazole: b("DB00916", ["anaerobic DNA"]),
	fluconazole: b("DB00196", ["lanosterol 14α-demethylase"]),
	ketoconazole: b("DB01026", ["lanosterol 14α-demethylase"]),
	itraconazole: b("DB01167", ["lanosterol 14α-demethylase"]),
	voriconazole: b("DB00582", ["lanosterol 14α-demethylase"]),
	rifampin: b("DB01045", ["RNA polymerase β"]),
	linezolid: b("DB00601", ["23S rRNA", "MAO-A/B"]),
	"tmp-smx": b("DB00440", ["DHFR", "dihydropteroate synthase"], "Approved", ["DB01015"]),
	isoniazid: b("DB00951", ["InhA", "NAT2"]),
	ritonavir: b("DB00503", ["HIV protease", "CYP3A4"]),
	paxlovid: b("DB16691", ["SARS-CoV-2 Mpro", "CYP3A4"], "Approved", ["DB00503"]),
	nevirapine: b("DB00238", ["HIV-1 RT"]),
	cobicistat: b("DB09065", ["CYP3A4 (booster)"]),
	warfarin: b("DB00682", ["VKORC1"]),
	apixaban: b("DB06605", ["factor Xa"]),
	rivaroxaban: b("DB06228", ["factor Xa"]),
	dabigatran: b("DB06695", ["thrombin"]),
	clopidogrel: b("DB00758", ["P2Y12 (prodrug)"]),
	aspirin: b("DB00945", ["COX-1"]),
	atorvastatin: b("DB01076", ["HMG-CoA reductase"]),
	simvastatin: b("DB00641", ["HMG-CoA reductase"]),
	lovastatin: b("DB00227", ["HMG-CoA reductase"]),
	rosuvastatin: b("DB01098", ["HMG-CoA reductase"]),
	pravastatin: b("DB00175", ["HMG-CoA reductase"]),
	gemfibrozil: b("DB01241", ["PPAR-α"]),
	amlodipine: b("DB00381", ["L-type Ca channel"]),
	diltiazem: b("DB00343", ["L-type Ca channel"]),
	verapamil: b("DB00661", ["L-type Ca channel"]),
	metoprolol: b("DB00264", ["β1-adrenergic"]),
	carvedilol: b("DB01136", ["β / α1-adrenergic"]),
	propranolol: b("DB00571", ["β-adrenergic"]),
	amiodarone: b("DB01118", ["K / Na / Ca channels"]),
	sotalol: b("DB00489", ["β / IKr"]),
	digoxin: b("DB00390", ["Na/K-ATPase"]),
	lisinopril: b("DB00722", ["ACE"]),
	losartan: b("DB00678", ["AT1 receptor"]),
	spironolactone: b("DB00421", ["mineralocorticoid receptor"]),
	furosemide: b("DB00695", ["NKCC2"]),
	hctz: b("DB00999", ["NCC"]),
	tamsulosin: b("DB00706", ["α1A-adrenergic"]),
	sertraline: b("DB01104", ["SERT"]),
	fluoxetine: b("DB00472", ["SERT"]),
	paroxetine: b("DB00715", ["SERT"]),
	fluvoxamine: b("DB00176", ["SERT"]),
	citalopram: b("DB00215", ["SERT"]),
	escitalopram: b("DB01175", ["SERT"]),
	venlafaxine: b("DB00285", ["SERT", "NET"]),
	duloxetine: b("DB00476", ["SERT", "NET"]),
	bupropion: b("DB01156", ["DAT", "NET"]),
	mirtazapine: b("DB00370", [
		"α2",
		"5-HT2",
		"H1"
	]),
	trazodone: b("DB00656", [
		"5-HT2A",
		"SERT",
		"H1"
	]),
	amitriptyline: b("DB00321", [
		"SERT",
		"NET",
		"H1",
		"M1",
		"α1"
	]),
	nortriptyline: b("DB00540", ["NET", "SERT"]),
	lithium: b("DB01356", ["GSK-3", "inositol cycle"]),
	quetiapine: b("DB01224", [
		"H1",
		"5-HT2A",
		"α1",
		"D2"
	]),
	olanzapine: b("DB00334", [
		"5-HT2A",
		"D2",
		"H1",
		"M1"
	]),
	risperidone: b("DB00734", [
		"D2",
		"5-HT2A",
		"α1"
	]),
	aripiprazole: b("DB01238", [
		"D2 partial",
		"5-HT1A partial",
		"5-HT2A"
	]),
	clozapine: b("DB00363", [
		"D4",
		"5-HT2A",
		"H1",
		"M1",
		"α1"
	]),
	haloperidol: b("DB00502", ["D2"]),
	ziprasidone: b("DB00246", [
		"D2",
		"5-HT2A",
		"5-HT1A"
	]),
	alprazolam: b("DB00404", ["GABA-A BZ site"]),
	diazepam: b("DB00829", ["GABA-A BZ site"]),
	clonazepam: b("DB01068", ["GABA-A BZ site"]),
	lorazepam: b("DB00186", ["GABA-A BZ site"]),
	midazolam: b("DB00683", ["GABA-A BZ site"]),
	zolpidem: b("DB00425", ["GABA-A α1"]),
	buspirone: b("DB00490", ["5-HT1A partial"]),
	phenelzine: b("DB00780", ["MAO-A", "MAO-B"]),
	selegiline: b("DB01037", ["MAO-B"]),
	codeine: b("DB00318", ["μ (via morphine)"]),
	tramadol: b("DB00193", [
		"μ",
		"SERT",
		"NET"
	]),
	oxycodone: b("DB00497", ["μ-opioid"]),
	hydrocodone: b("DB00956", ["μ-opioid"]),
	morphine: b("DB00295", ["μ-opioid"]),
	fentanyl: b("DB00813", ["μ-opioid"]),
	methadone: b("DB00333", ["μ-opioid", "NMDA"]),
	gabapentin: b("DB00996", ["α2δ Ca channel"]),
	pregabalin: b("DB00230", ["α2δ Ca channel"]),
	carbamazepine: b("DB00564", ["Nav"]),
	phenytoin: b("DB00252", ["Nav"]),
	valproate: b("DB00313", [
		"GABA transaminase",
		"Nav",
		"HDAC"
	]),
	lamotrigine: b("DB00555", ["Nav", "N-type Ca"]),
	levetiracetam: b("DB01202", ["SV2A"]),
	tizanidine: b("DB00697", ["α2-adrenergic"]),
	cyclobenzaprine: b("DB00924", ["5-HT2", "H1"]),
	donepezil: b("DB00843", ["AChE"]),
	omeprazole: b("DB00338", ["H+/K+-ATPase"]),
	esomeprazole: b("DB00736", ["H+/K+-ATPase"]),
	pantoprazole: b("DB00213", ["H+/K+-ATPase"]),
	metformin: b("DB00331", ["AMPK / mitochondrial complex I"]),
	glipizide: b("DB01067", ["SUR1 / K-ATP"]),
	glyburide: b("DB01016", ["SUR1 / K-ATP"]),
	repaglinide: b("DB00912", ["SUR1 / K-ATP"]),
	"insulin-glargine": b("DB00047", ["insulin receptor"]),
	levothyroxine: b("DB00451", ["thyroid hormone receptor"]),
	prednisone: b("DB00635", ["glucocorticoid receptor"]),
	tacrolimus: b("DB00864", ["FKBP12 / calcineurin"]),
	cyclosporine: b("DB00091", ["cyclophilin / calcineurin"]),
	methotrexate: b("DB00563", ["DHFR"]),
	colchicine: b("DB01394", ["tubulin"]),
	allopurinol: b("DB00437", ["xanthine oxidase"]),
	sildenafil: b("DB00203", ["PDE5"]),
	tadalafil: b("DB00820", ["PDE5"]),
	nitroglycerin: b("DB00727", ["NO / guanylate cyclase"]),
	ondansetron: b("DB00904", ["5-HT3"]),
	diphenhydramine: b("DB01075", ["H1", "M"]),
	acetaminophen: b("DB00316", ["COX / TRPV1 (central)"]),
	ibuprofen: b("DB01050", ["COX-1/2"]),
	naproxen: b("DB00788", ["COX-1/2"]),
	celecoxib: b("DB00482", ["COX-2"]),
	theophylline: b("DB00277", ["PDE", "adenosine A1/A2"]),
	tamoxifen: b("DB00675", ["estrogen receptor (SERM)"]),
	"ethinyl-estradiol": b("DB00977", ["estrogen receptor"]),
	caffeine: b("DB00201", ["adenosine A1/A2A"], "Nutraceutical"),
	lurasidone: b("DB08815", [
		"D2",
		"5-HT2A",
		"5-HT7"
	]),
	ketamine: b("DB01221", ["NMDA", "nAChR α7"]),
	esketamine: b("DB11823", ["NMDA"]),
	dextromethorphan: b("DB00514", [
		"NMDA",
		"SERT",
		"σ1"
	]),
	memantine: b("DB01043", ["NMDA"]),
	mdma: b("DB01454", [
		"SERT",
		"NET",
		"DAT",
		"VMAT2"
	], "Illicit"),
	amphetamine: b("DB00182", [
		"DAT",
		"NET",
		"VMAT2"
	]),
	lisdexamfetamine: b("DB01255", ["DAT", "NET (via dextroamphetamine)"]),
	methylphenidate: b("DB00422", ["DAT", "NET"]),
	methamphetamine: b("DB01577", [
		"DAT",
		"NET",
		"VMAT2"
	], "Illicit"),
	cocaine: b("DB00907", [
		"DAT",
		"NET",
		"SERT",
		"Nav"
	], "Illicit"),
	heroin: b("DB01452", ["μ-opioid (via 6-MAM / morphine)"], "Illicit"),
	modafinil: b("DB00745", ["DAT (weak)"]),
	armodafinil: b("DB06413", ["DAT (weak)"]),
	atomoxetine: b("DB00289", ["NET"]),
	nicotine: b("DB00184", ["nAChR"]),
	psilocybin: b("DB11664", ["5-HT2A"], "Investigational"),
	lsd: b("DB04829", ["5-HT2A"], "Illicit"),
	dmt: b("DB01487", ["5-HT2A"], "Illicit"),
	dronabinol: b("DB00470", ["CB1", "CB2"]),
	cannabidiol: b("DB09061", [
		"CB1 (low)",
		"5-HT1A",
		"TRPV1"
	]),
	ethanol: b("DB00898", ["GABA-A", "NMDA (inhibit)"]),
	"sodium-oxybate": b("DB09072", ["GABA-B"]),
	baclofen: b("DB00181", ["GABA-B"]),
	eszopiclone: b("DB00402", ["GABA-A"]),
	ramelteon: b("DB00980", ["MT1", "MT2"]),
	suvorexant: b("DB09034", ["OX1", "OX2"]),
	melatonin: b("DB01065", ["MT1", "MT2"], "Nutraceutical"),
	buprenorphine: b("DB00921", ["μ partial", "κ antagonist"]),
	naltrexone: b("DB00704", ["μ / κ / δ antagonist"]),
	naloxone: b("DB01183", ["μ antagonist"]),
	kratom: b("DB14018", ["μ (mitragynine / 7-OH)"], "Investigational"),
	disulfiram: b("DB00822", ["ALDH"]),
	acamprosate: b("DB00659", ["NMDA / GABA modulator"]),
	varenicline: b("DB01273", ["α4β2 nAChR partial"]),
	clomipramine: b("DB01242", ["SERT", "NET"]),
	vortioxetine: b("DB09068", [
		"SERT",
		"5-HT1A",
		"5-HT3",
		"5-HT7"
	]),
	tranylcypromine: b("DB00752", ["MAO-A", "MAO-B"]),
	topiramate: b("DB00273", [
		"Nav",
		"AMPA",
		"CA"
	]),
	moclobemide: b("DB01171", ["MAO-A (reversible)"]),
	clobazam: b("DB00349", ["GABA-A BZ site"]),
	pcp: b("DB03575", ["NMDA"], "Illicit"),
	quinidine: b("DB00908", [
		"Nav",
		"IKr",
		"CYP2D6"
	]),
	ibogaine: b("DB05026", [
		"NMDA",
		"κ",
		"SERT"
	], "Investigational"),
	loperamide: b("DB00836", ["peripheral μ"]),
	hydroxyzine: b("DB00557", ["H1"]),
	carfentanil: b("DB01535", ["μ-opioid"], "Vet"),
	cimetidine: b("DB00501", ["H2", "CYP"]),
	meperidine: b("DB00454", ["μ", "SERT"]),
	phenobarbital: b("DB01174", ["GABA-A"]),
	efavirenz: b("DB00625", ["HIV RT"]),
	triazolam: b("DB00897", ["GABA-A BZ site"]),
	pimozide: b("DB01100", ["D2"]),
	thioridazine: b("DB00679", [
		"D2",
		"H1",
		"M"
	], "Withdrawn"),
	tapentadol: b("DB06204", ["μ", "NET"]),
	hydromorphone: b("DB00327", ["μ-opioid"]),
	carisoprodol: b("DB00395", ["GABA-A (via meprobamate)"]),
	clonidine: b("DB00575", ["α2-adrenergic"]),
	lofexidine: b("DB09204", ["α2-adrenergic"]),
	flecainide: b("DB01195", ["Nav"]),
	oxazepam: b("DB01558", ["GABA-A BZ site"]),
	temazepam: b("DB00231", ["GABA-A BZ site"]),
	posaconazole: b("DB01263", ["lanosterol 14α-demethylase"]),
	isocarboxazid: b("DB01247", ["MAO-A", "MAO-B"]),
	oxcarbazepine: b("DB00776", ["Nav"]),
	paliperidone: b("DB01267", ["D2", "5-HT2A"]),
	desipramine: b("DB01151", ["NET"]),
	imipramine: b("DB00458", ["SERT", "NET"]),
	promethazine: b("DB01069", [
		"H1",
		"M",
		"D2"
	]),
	doxylamine: b("DB00366", ["H1"]),
	chlorpromazine: b("DB00477", [
		"D2",
		"H1",
		"M",
		"α1"
	]),
	rasagiline: b("DB01367", ["MAO-B"]),
	lemborexant: b("DB11901", ["OX1", "OX2"]),
	dexmedetomidine: b("DB00633", ["α2-adrenergic"]),
	propofol: b("DB00818", ["GABA-A"]),
	prazosin: b("DB00457", ["α1-adrenergic"]),
	nalbuphine: b("DB00844", ["κ agonist / μ antagonist"]),
	guanfacine: b("DB01018", ["α2A-adrenergic"]),
	primidone: b("DB00794", ["Nav (via phenobarbital)"]),
	vilazodone: b("DB06684", ["SERT", "5-HT1A partial"]),
	aprepitant: b("DB00673", ["NK1"]),
	famotidine: b("DB00927", ["H2"]),
	oxymorphone: b("DB01192", ["μ-opioid"]),
	epclusa: b("DB08934", ["NS5B", "NS5A"], "Approved", ["DB11613"]),
	azathioprine: b("DB00993", ["purine synthesis (via 6-MP)"]),
	mercaptopurine: b("DB01033", ["purine synthesis"]),
	febuxostat: b("DB04854", ["xanthine oxidase"]),
	terbinafine: b("DB00857", ["squalene epoxidase"]),
	mirabegron: b("DB08893", ["β3-adrenergic"]),
	fenofibrate: b("DB01039", ["PPAR-α"]),
	"isosorbide-mononitrate": b("DB01020", ["NO / guanylate cyclase"]),
	ranolazine: b("DB00243", ["late INa"]),
	ticagrelor: b("DB08816", ["P2Y12"]),
	hydroxychloroquine: b("DB01611", ["lysosome / TLR"]),
	sumatriptan: b("DB00669", ["5-HT1B/1D"]),
	eletriptan: b("DB00216", ["5-HT1B/1D"]),
	budesonide: b("DB01222", ["glucocorticoid receptor"]),
	dexamethasone: b("DB01234", ["glucocorticoid receptor"]),
	eplerenone: b("DB00700", ["mineralocorticoid receptor"]),
	nifedipine: b("DB01115", ["L-type Ca channel"]),
	felodipine: b("DB01023", ["L-type Ca channel"]),
	glimepiride: b("DB00222", ["SUR1 / K-ATP"]),
	pioglitazone: b("DB01132", ["PPAR-γ"]),
	empagliflozin: b("DB09038", ["SGLT2"]),
	dapagliflozin: b("DB06292", ["SGLT2"]),
	semaglutide: b("DB13928", ["GLP-1 receptor"]),
	tirzepatide: b("DB15171", ["GIP receptor", "GLP-1 receptor"]),
	sirolimus: b("DB00877", ["mTOR / FKBP12"]),
	mycophenolate: b("DB01024", ["IMPDH"]),
	metoclopramide: b("DB01233", ["D2", "5-HT4"]),
	diclofenac: b("DB00586", ["COX-1/2"]),
	meloxicam: b("DB00814", ["COX-2 > COX-1"]),
	ketorolac: b("DB00465", ["COX-1/2"]),
	fluticasone: b("DB13867", ["glucocorticoid receptor"]),
	fexofenadine: b("DB00950", ["H1"]),
	oxybutynin: b("DB01062", ["M3"]),
	enoxaparin: b("DB01225", ["antithrombin / Xa"]),
	atenolol: b("DB00335", ["β1-adrenergic"]),
	nadolol: b("DB01203", ["β1/β2-adrenergic"]),
	valsartan: b("DB00177", ["AT1 receptor"]),
	aliskiren: b("DB01258", ["renin"]),
	chlorthalidone: b("DB00310", ["NCC"]),
	amoxicillin: b("DB01060", ["PBP"]),
	cephalexin: b("DB00567", ["PBP"]),
	doxycycline: b("DB00254", ["30S ribosome"]),
	tetracycline: b("DB00759", ["30S ribosome"]),
	alendronate: b("DB00630", ["farnesyl diphosphate synthase"]),
	levodopa: b("DB01235", ["dopamine precursor / DDC"]),
	albuterol: b("DB01001", ["β2-adrenergic"]),
	cetirizine: b("DB00341", ["H1"]),
	sitagliptin: b("DB01261", ["DPP-4"]),
	benztropine: b("DB00245", ["M", "DAT"]),
	vardenafil: b("DB00862", ["PDE5"]),
	doxazosin: b("DB00590", ["α1-adrenergic"]),
	lansoprazole: b("DB00448", ["H+/K+-ATPase"]),
	xylazine: b("DB11477", ["α2-adrenergic"], "Vet"),
	scopolamine: b("DB00747", ["M1–M5"]),
	"sam-e": b("DB00118", ["methyl donor"], "Nutraceutical"),
	"vitamin-k": b("DB01022", ["VKORC1 cofactor"], "Nutraceutical"),
	yohimbine: b("DB01392", ["α2-adrenergic"], "Nutraceutical"),
	quercetin: b("DB04216", ["flavonol"], "Nutraceutical"),
	niacin: b("DB00627", ["HM74A / GPR109A"]),
	arginine: b("DB00125", ["NOS substrate"], "Nutraceutical"),
	glucosamine: b("DB01296", ["cartilage GAG"], "Nutraceutical"),
	berberine: b("DB04115", ["AMPK"], "Nutraceutical"),
	ala: b("DB00166", ["PDH / α-KGDH"], "Nutraceutical"),
	resveratrol: b("DB02709", ["SIRT1"], "Nutraceutical"),
	dhea: b("DB01708", ["androgen precursor"], "Nutraceutical"),
	nac: b("DB06151", ["glutathione precursor"]),
	creatine: b("DB00148", ["phosphocreatine"], "Nutraceutical"),
	calcium: b("DB01373", ["Ca²⁺"], "Nutraceutical"),
	magnesium: b("DB01378", ["Mg²⁺"], "Nutraceutical"),
	zinc: b("DB01593", ["Zn²⁺"], "Nutraceutical"),
	biotin: b("DB00121", ["carboxylase cofactor"], "Nutraceutical"),
	folate: b("DB00158", ["one-carbon / DHFR"], "Nutraceutical"),
	"vitamin-d": b("DB00169", ["VDR (via calcitriol)"], "Nutraceutical"),
	"vitamin-e": b("DB00162", ["lipid antioxidant"], "Nutraceutical"),
	turmeric: b("DB11672", ["NF-κB"], "Nutraceutical"),
	charcoal: b("DB09278", ["adsorbent"]),
	"milk-thistle": b("DB09087", ["silibinin"], "Nutraceutical"),
	coq10: b("DB09270", ["complex I–III shuttle"], "Nutraceutical"),
	"five-htp": b("DB02959", ["AADC → 5-HT"], "Nutraceutical"),
	citrulline: b("DB00155", ["NOS via arginine"], "Nutraceutical"),
	potassium: b("DB00761", ["K⁺"]),
	"fish-oil": b("DB00159", ["PPARα / platelet COX"]),
	"green-tea": b("DB12116", ["EGCG / COMT"], "Nutraceutical"),
	iron: b("DB01592", ["Fe²⁺/Fe³⁺"], "Nutraceutical")
};
function drugbankUrl(accession) {
	return `https://go.drugbank.com/drugs/${accession}`;
}
function drugbankSearchUrl(name) {
	return `https://go.drugbank.com/unearth/q?searcher=drugs&query=${encodeURIComponent(name)}`;
}
function hasDrugbank(id) {
	return Boolean(DRUGBANK[id]);
}
function g(path) {
	return `https://cpicpgx.org/guidelines/${path}`;
}
function c$1(q) {
	return `https://www.clinpgx.org/search?query=${encodeURIComponent(q)}`;
}
var SSRI = g("cpic-guideline-for-ssri-and-snri-antidepressants/");
var TCA = g("guideline-for-tricyclic-antidepressants-and-cyp2d6-and-cyp2c19/");
var CODEINE = g("guideline-for-codeine-and-cyp2d6/");
var PPI = g("cpic-guideline-for-proton-pump-inhibitors-and-cyp2c19/");
var STATIN = g("cpic-guideline-for-statins/");
var NSAID = g("cpic-guideline-for-nsaids-and-cyp2c9/");
var THIO = g("guideline-for-thiopurines-and-tpmt-nudt15/");
function ssri2c19(drug) {
	return {
		gene: "CYP2C19",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1(drug),
		rows: [
			{
				pheno: "UM / RM",
				action: "Consider a drug not primarily cleared by 2C19."
			},
			{
				pheno: "NM / IM",
				action: "Start the usual labeled dose."
			},
			{
				pheno: "PM",
				action: "Start at 50% of the usual dose, or pick another SSRI."
			}
		],
		pearl: "Citalopram and escitalopram are 2C19 victims. Ultrarapid clearance can look like a failed trial; poor metabolizers stack parent and QT-relevant exposure. Flip 2C19 on this desk to see the PK sketch move."
	};
}
function tca2d6(drug) {
	return {
		gene: "CYP2D6",
		cpic: "A",
		guideline: TCA,
		clinpgx: c$1(drug),
		rows: [
			{
				pheno: "UM",
				action: "Avoid tertiary TCAs; pick a 2D6-independent agent."
			},
			{
				pheno: "NM",
				action: "Usual dosing; titrate to level and side effects."
			},
			{
				pheno: "IM",
				action: "Consider 25% reduction; watch anticholinergic / QT load."
			},
			{
				pheno: "PM",
				action: "Avoid, or start at 50% with TDM if you must use a TCA."
			}
		],
		pearl: "Tertiary TCAs (amitriptyline, imipramine, clomipramine) are 2D6 and 2C19 stories. Poor metabolizers stack parent; ultrarapid metabolizers may never see a level. This is not a dosing protocol."
	};
}
var PGX = {
	citalopram: [ssri2c19("citalopram")],
	escitalopram: [ssri2c19("escitalopram")],
	sertraline: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1("sertraline"),
		rows: [
			{
				pheno: "UM / RM",
				action: "Usual start; optional switch if no response."
			},
			{
				pheno: "NM / IM",
				action: "Usual labeled dose."
			},
			{
				pheno: "PM",
				action: "Start at 50%; slower titration."
			}
		],
		pearl: "Sertraline is a 2C19 (and 2B6) substrate. CPIC is quieter than for citalopram. Poor metabolizers still deserve a slower start."
	}],
	paroxetine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1("paroxetine"),
		rows: [
			{
				pheno: "UM",
				action: "Pick an SSRI not primarily 2D6-cleared."
			},
			{
				pheno: "NM / IM",
				action: "Usual dose; watch withdrawal on stop."
			},
			{
				pheno: "PM",
				action: "50% reduction or an alternative."
			}
		],
		pearl: "Paroxetine is a 2D6 substrate and a strong 2D6 inhibitor. A PM is both a victim and a perpetrator. Tamoxifen activation and codeine both go quiet next to it."
	}],
	fluvoxamine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1("fluvoxamine"),
		rows: [{
			pheno: "NM / IM / UM",
			action: "Usual labeled dose."
		}, {
			pheno: "PM",
			action: "25–50% reduction; it is also a strong 1A2/2C19 inhibitor."
		}],
		pearl: "The louder fluvoxamine story on this desk is 1A2 (clozapine, theophylline, tizanidine), not 2D6. CPIC still trims the PM dose."
	}],
	venlafaxine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1("venlafaxine"),
		rows: [
			{
				pheno: "UM",
				action: "Consider an alternative; parent may be low."
			},
			{
				pheno: "NM",
				action: "Usual dose."
			},
			{
				pheno: "PM / IM",
				action: "Consider an alternative not 2D6-activated to ODV."
			}
		],
		pearl: "2D6 makes O-desmethylvenlafaxine (desvenlafaxine). Poor metabolizers stack parent; the active metabolite falls. Flip 2D6 PM on the curve."
	}],
	vortioxetine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: SSRI,
		clinpgx: c$1("vortioxetine"),
		rows: [{
			pheno: "NM / IM / UM",
			action: "Usual labeled dose (max 20 mg)."
		}, {
			pheno: "PM",
			action: "Maximum 10 mg/day."
		}],
		pearl: "A clean 2D6 ceiling. Poor metabolizers do not get the 20 mg step."
	}],
	fluoxetine: [{
		gene: "CYP2D6",
		cpic: "C",
		guideline: SSRI,
		clinpgx: c$1("fluoxetine"),
		rows: [{
			pheno: "any",
			action: "No gene-based dose. Parent + norfluoxetine still occupy SERT."
		}],
		pearl: "CPIC looked and did not recommend a 2D6 dose cut — the parent and S-norfluoxetine both block SERT, so the sum may not move enough. It remains a strong 2D6 inhibitor of everything else on the desk."
	}],
	amitriptyline: [tca2d6("amitriptyline")],
	nortriptyline: [tca2d6("nortriptyline")],
	imipramine: [tca2d6("imipramine")],
	desipramine: [tca2d6("desipramine")],
	clomipramine: [tca2d6("clomipramine")],
	codeine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: CODEINE,
		clinpgx: c$1("codeine"),
		rows: [
			{
				pheno: "UM",
				action: "Avoid — excess morphine, respiratory depression."
			},
			{
				pheno: "NM",
				action: "Usual labeled dose if an opioid is indicated."
			},
			{
				pheno: "IM",
				action: "Watch response; consider a non-tramadol opioid."
			},
			{
				pheno: "PM",
				action: "Avoid — little morphine, little analgesia."
			}
		],
		pearl: "Codeine is a 2D6 prodrug to morphine. Ultrarapid is toxicity; poor is a sugar pill. Tramadol is the same family — do not swap one for the other."
	}],
	tramadol: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: CODEINE,
		clinpgx: c$1("tramadol"),
		rows: [
			{
				pheno: "UM",
				action: "Avoid — excess O-desmethyltramadol."
			},
			{
				pheno: "NM",
				action: "Usual labeled dose if indicated."
			},
			{
				pheno: "PM",
				action: "Avoid — lost opioid effect; SNRI parent remains."
			}
		],
		pearl: "Same 2D6 activation map as codeine. Poor metabolizers keep the SNRI parent (seizure / serotonin) and lose the μ metabolite. Not a free swap."
	}],
	hydrocodone: [{
		gene: "CYP2D6",
		cpic: "B",
		guideline: CODEINE,
		clinpgx: c$1("hydrocodone"),
		rows: [{
			pheno: "UM",
			action: "Monitor; hydromorphone formation may rise."
		}, {
			pheno: "PM",
			action: "Analgesia may be weaker; 3A4 is still the main clearance."
		}],
		pearl: "3A4 clears parent; 2D6 makes hydromorphone. Louder than a footnote, quieter than codeine. Strong 3A4 inhibitors are the PK trap on this desk."
	}],
	tamoxifen: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: g("cpic-guideline-for-tamoxifen-based-on-cyp2d6-genotype/"),
		clinpgx: c$1("tamoxifen"),
		rows: [{
			pheno: "UM / NM",
			action: "Standard adjuvant dosing."
		}, {
			pheno: "IM / PM",
			action: "Consider an aromatase inhibitor (with ovarian suppression if premenopausal)."
		}],
		pearl: "Endoxifen needs 2D6. Paroxetine, fluoxetine, and bupropion are the classic blockers — a phenocopy of a poor metabolizer. This is oncology PGx, not a mood footnote."
	}],
	atomoxetine: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: g("cpic-guideline-for-atomoxetine-based-on-cyp2d6-genotype/"),
		clinpgx: c$1("atomoxetine"),
		rows: [
			{
				pheno: "UM",
				action: "May need the upper labeled range; check plasma if no response."
			},
			{
				pheno: "NM",
				action: "Usual titration."
			},
			{
				pheno: "PM",
				action: "Lower start, slower titration; peak exposure is higher and later."
			}
		],
		pearl: "A 2D6-sensitive NRI. Poor metabolizers get more parent, more noradrenergic side effects, and a slower peak."
	}],
	ondansetron: [{
		gene: "CYP2D6",
		cpic: "A",
		guideline: g("guideline-for-ondansetron-and-tropisetron-and-cyp2d6-genotype/"),
		clinpgx: c$1("ondansetron"),
		rows: [{
			pheno: "UM",
			action: "Increased metabolism — consider a non-5-HT3 alternative for CINV."
		}, {
			pheno: "NM / IM / PM",
			action: "Usual labeled dose."
		}],
		pearl: "Ultrarapid 2D6 can fail Zofran. On an OTP board it is still a known-QT drug next to methadone — PGx does not retire the ECG."
	}],
	aripiprazole: [{
		gene: "CYP2D6",
		cpic: "B",
		guideline: SSRI,
		clinpgx: c$1("aripiprazole"),
		rows: [{
			pheno: "PM",
			action: "Label: half the usual dose. DPWG agrees. 3A4 inhibitors stack on top."
		}, {
			pheno: "NM / IM / UM",
			action: "Usual titration; long t½ still accumulates."
		}],
		pearl: "2D6 PM is on the Abilify label. The curve on this desk is days, not hours."
	}],
	risperidone: [{
		gene: "CYP2D6",
		cpic: "C",
		guideline: SSRI,
		clinpgx: c$1("risperidone"),
		rows: [{
			pheno: "PM",
			action: "DPWG: extra-pyramidal risk. Paliperidone (9-OH) is mostly renal."
		}, {
			pheno: "NM",
			action: "Usual dose."
		}],
		pearl: "CPIC is quieter than DPWG here. 2D6 makes paliperidone. The QT and prolactin PD still apply regardless of genotype."
	}],
	clopidogrel: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: g("guideline-for-clopidogrel-and-cyp2c19/"),
		clinpgx: c$1("clopidogrel"),
		rows: [{
			pheno: "UM / RM / NM",
			action: "Standard 75 mg if indicated."
		}, {
			pheno: "IM / PM",
			action: "ACS/PCI: prasugrel or ticagrelor. Omeprazole is a phenocopy of IM."
		}],
		pearl: "Clopidogrel is a 2C19 prodrug. Poor activation is a stent thrombosis story. Omeprazole/esomeprazole inhibit 2C19 — pantoprazole is the quieter PPI on this desk."
	}],
	omeprazole: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: PPI,
		clinpgx: c$1("omeprazole"),
		rows: [
			{
				pheno: "UM",
				action: "Increase dose ~100% for H. pylori / erosive disease."
			},
			{
				pheno: "NM / IM",
				action: "Usual dose."
			},
			{
				pheno: "PM",
				action: "Usual dose; exposure is already higher (better acid control)."
			}
		],
		pearl: "Ultrarapid 2C19 can fail a PPI. The clopidogrel collision is the other 2C19 story — not this dose table."
	}],
	esomeprazole: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: PPI,
		clinpgx: c$1("esomeprazole"),
		rows: [{
			pheno: "UM",
			action: "Increase dose for H. pylori / erosive disease."
		}, {
			pheno: "PM",
			action: "Usual dose; still a 2C19 inhibitor of clopidogrel."
		}],
		pearl: "Same PPI family as omeprazole. Pantoprazole is the weaker 2C19 inhibitor if a P2Y12 prodrug is on the desk."
	}],
	lansoprazole: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: PPI,
		clinpgx: c$1("lansoprazole"),
		rows: [{
			pheno: "UM",
			action: "Increase dose for H. pylori / erosive disease."
		}, {
			pheno: "PM",
			action: "Usual dose."
		}],
		pearl: "CPIC PPI table includes lansoprazole. Same 2C19 family as omeprazole."
	}],
	voriconazole: [{
		gene: "CYP2C19",
		cpic: "A",
		guideline: g("guideline-for-voriconazole-and-cyp2c19/"),
		clinpgx: c$1("voriconazole"),
		rows: [
			{
				pheno: "UM / RM",
				action: "Choose another antifungal if possible — subtherapeutic risk."
			},
			{
				pheno: "NM",
				action: "Usual labeled dose with TDM."
			},
			{
				pheno: "PM",
				action: "Lower dose / TDM; visual and hepatic toxicity stack."
			}
		],
		pearl: "A 2C19-sensitive azole and a strong 3A4 inhibitor. PGx and the perpetrator map both belong on the desk."
	}],
	diazepam: [{
		gene: "CYP2C19",
		cpic: "C",
		guideline: TCA,
		clinpgx: c$1("diazepam"),
		rows: [{
			pheno: "PM",
			action: "Longer parent and nordiazepam. Lorazepam / oxazepam skip this CYP."
		}],
		pearl: "2C19 and 3A4 stretch diazepam. The LOT benzos (lorazepam, oxazepam, temazepam) are UGT, not this gene."
	}],
	clobazam: [{
		gene: "CYP2C19",
		cpic: "C",
		guideline: TCA,
		clinpgx: c$1("clobazam"),
		rows: [{
			pheno: "PM",
			action: "Label: start lower. N-desmethylclobazam stacks."
		}],
		pearl: "Onfi is a 2C19 victim. Poor metabolizers accumulate the metabolite. Still a benzo on an opioid airway."
	}],
	warfarin: [{
		gene: "CYP2C9 / VKORC1",
		cpic: "A",
		guideline: g("guideline-for-warfarin-and-cyp2c9-and-vkorc1/"),
		clinpgx: c$1("warfarin"),
		rows: [{
			pheno: "2C9 NM",
			action: "Algorithm or usual 5 mg-ish start, INR-guided."
		}, {
			pheno: "2C9 IM / PM",
			action: "Lower start; *3/*3 is a fraction of the usual milligrams."
		}],
		pearl: "S-warfarin is a sensitive 2C9 substrate. A PM on this desk looks like fluconazole already on board. VKORC1 −1639G>A is the other half of the algorithm — not modeled here."
	}],
	phenytoin: [{
		gene: "CYP2C9",
		cpic: "A",
		guideline: g("guideline-for-phenytoin-and-cyp2c9-and-hla-b/"),
		clinpgx: c$1("phenytoin"),
		rows: [
			{
				pheno: "NM",
				action: "Usual labeled dosing with levels."
			},
			{
				pheno: "IM",
				action: "25% reduction."
			},
			{
				pheno: "PM",
				action: "50% reduction; nonlinear kinetics still apply."
			}
		],
		pearl: "HLA-B*15:02 is a separate SJS story in ancestry with that allele — avoid like carbamazepine."
	}],
	celecoxib: [{
		gene: "CYP2C9",
		cpic: "A",
		guideline: NSAID,
		clinpgx: c$1("celecoxib"),
		rows: [{
			pheno: "NM / IM",
			action: "Lowest effective dose."
		}, {
			pheno: "PM",
			action: "Start at 25–50%; watch GI, CV, renal."
		}],
		pearl: "CPIC NSAID table. 2C9 PMs stack parent. The NSAID × ACEI × diuretic triple-whammy is still PD."
	}],
	ibuprofen: [{
		gene: "CYP2C9",
		cpic: "A",
		guideline: NSAID,
		clinpgx: c$1("ibuprofen"),
		rows: [{
			pheno: "PM",
			action: "Lowest dose, shortest course."
		}, {
			pheno: "NM",
			action: "Usual OTC / labeled use."
		}],
		pearl: "Quieter than celecoxib on the CPIC table, same gene. Not a free pass on CKD or lithium."
	}],
	meloxicam: [{
		gene: "CYP2C9",
		cpic: "A",
		guideline: NSAID,
		clinpgx: c$1("meloxicam"),
		rows: [{
			pheno: "PM",
			action: "25–50% of the usual dose or pick another NSAID."
		}, {
			pheno: "NM",
			action: "Usual labeled dose."
		}],
		pearl: "Longer 2C9 NSAID. Poor metabolizers stretch exposure."
	}],
	simvastatin: [{
		gene: "SLCO1B1",
		cpic: "A",
		guideline: STATIN,
		clinpgx: c$1("simvastatin"),
		rows: [{
			pheno: "normal function",
			action: "Usual dose; 80 mg is already a relic."
		}, {
			pheno: "decreased / poor",
			action: "Avoid simvastatin 40–80 mg; pick another statin or a lower dose."
		}],
		pearl: "OATP1B1 (SLCO1B1) is the myopathy gene. 3A4 inhibitors are a separate, stacked trap on this desk. We do not phenotype SLCO1B1 here — open CPIC for the *5 table."
	}],
	atorvastatin: [{
		gene: "SLCO1B1",
		cpic: "A",
		guideline: STATIN,
		clinpgx: c$1("atorvastatin"),
		rows: [{
			pheno: "decreased / poor",
			action: "Dose-cap or switch; 3A4 inhibitors still raise parent."
		}],
		pearl: "Same transporter family as simvastatin, less dramatic. CYP3A4 is still the perpetrator map on this desk."
	}],
	rosuvastatin: [{
		gene: "SLCO1B1 / ABCG2",
		cpic: "A",
		guideline: STATIN,
		clinpgx: c$1("rosuvastatin"),
		rows: [{
			pheno: "decreased OATP / BCRP",
			action: "Consider a lower start, especially in East Asian ancestry."
		}],
		pearl: "Not a 3A4 statin. Transporters and 2C9 are the quieter genes. Gemfibrozil is still a fibrate PD."
	}],
	azathioprine: [{
		gene: "TPMT / NUDT15",
		cpic: "A",
		guideline: THIO,
		clinpgx: c$1("azathioprine"),
		rows: [
			{
				pheno: "NM / NM",
				action: "Usual start; still watch WBC."
			},
			{
				pheno: "IM (either gene)",
				action: "Reduce start 30–80%; slower titration."
			},
			{
				pheno: "PM (either gene)",
				action: "Avoid, or a tiny non-malignant dose with weekly counts."
			}
		],
		pearl: "TPMT and NUDT15 are the marrow genes. Allopurinol is a phenocopy — xanthine oxidase blockade of 6-MP, scored as PD on this desk. Genotype does not retire the XO pair."
	}],
	mercaptopurine: [{
		gene: "TPMT / NUDT15",
		cpic: "A",
		guideline: THIO,
		clinpgx: c$1("mercaptopurine"),
		rows: [{
			pheno: "IM",
			action: "Reduce start."
		}, {
			pheno: "PM",
			action: "Avoid or drastic reduction with counts."
		}],
		pearl: "Same thiopurine map as azathioprine. Febuxostat is the other XO blocker."
	}],
	allopurinol: [{
		gene: "HLA-B*58:01",
		cpic: "A",
		guideline: g("guideline-for-allopurinol-and-hla-b/"),
		clinpgx: c$1("allopurinol"),
		rows: [{
			pheno: "negative",
			action: "Usual gout / urate dosing."
		}, {
			pheno: "positive",
			action: "Avoid — SJS/TEN. Pick febuxostat only after HLA thinking, or another class."
		}],
		pearl: "Ancestry with higher *58:01 frequency (Han Chinese, Korean, Thai) is why this gene is on the label. The azathioprine marrow pair is a different enzyme (XO), not HLA."
	}],
	carbamazepine: [{
		gene: "HLA-B*15:02 / HLA-A*31:01",
		cpic: "A",
		guideline: g("guideline-for-carbamazepine-and-hla-b/"),
		clinpgx: c$1("carbamazepine"),
		rows: [
			{
				pheno: "*15:02 positive",
				action: "Avoid unless already tolerant >3 months. SJS/TEN."
			},
			{
				pheno: "*31:01 positive",
				action: "Avoid if other options; HSS / SJS risk."
			},
			{
				pheno: "both negative",
				action: "Usual titration; still a pan-CYP inducer."
			}
		],
		pearl: "The gene is a rash gene. The desk still scores carbamazepine as a strong 3A4/2C9/2C19 inducer — OCP failure, stolen methadone, lost ketamine."
	}],
	oxcarbazepine: [{
		gene: "HLA-B*15:02",
		cpic: "A",
		guideline: g("guideline-for-carbamazepine-and-hla-b/"),
		clinpgx: c$1("oxcarbazepine"),
		rows: [{
			pheno: "positive",
			action: "Avoid in a carbamazepine-naive patient."
		}, {
			pheno: "negative",
			action: "Usual dose; hyponatremia and 3A4 induction still apply."
		}],
		pearl: "Weaker inducer than carbamazepine, same HLA-B*15:02 caution."
	}],
	tacrolimus: [{
		gene: "CYP3A5",
		cpic: "A",
		guideline: g("guideline-for-tacrolimus-and-cyp3a5/"),
		clinpgx: c$1("tacrolimus"),
		rows: [{
			pheno: "non-expresser (*3/*3)",
			action: "Usual labeled start (most European ancestry)."
		}, {
			pheno: "expresser (*1 carrier)",
			action: "Increase start ~1.5–2× with TDM — they clear it."
		}],
		pearl: "Most European patients are 3A5 non-expressers. Expressers (more common in African ancestry) look like they were underdosed. Grapefruit and azoles are a separate gut-3A4 trap on the curve."
	}],
	efavirenz: [{
		gene: "CYP2B6",
		cpic: "A",
		guideline: g("cpic-guideline-for-efavirenz-based-on-cyp2b6-genotype/"),
		clinpgx: c$1("efavirenz"),
		rows: [{
			pheno: "NM / UM",
			action: "Usual 600 mg if still used."
		}, {
			pheno: "PM",
			action: "Consider 400 mg; CNS toxicity and QT stack."
		}],
		pearl: "2B6 PM plus efavirenz is a neurotoxicity row. The methadone story on this desk is induction — stolen dose, not sedation."
	}],
	methadone: [{
		gene: "CYP2B6",
		cpic: "B",
		guideline: g("cpic-guideline-for-efavirenz-based-on-cyp2b6-genotype/"),
		clinpgx: c$1("methadone"),
		rows: [{
			pheno: "PM",
			action: "Higher exposure, longer QTc watch. Not a CPIC A table."
		}, {
			pheno: "NM",
			action: "Usual OTP titration."
		}],
		pearl: "2B6 and 3A4 share methadone. Phenotype is quieter than a rifampin / fluconazole pair. QT is PD. This is not a dose."
	}],
	metoprolol: [{
		gene: "CYP2D6",
		cpic: "C",
		guideline: c$1("metoprolol"),
		clinpgx: c$1("metoprolol"),
		rows: [{
			pheno: "PM",
			action: "DPWG: start lower, watch bradycardia. Atenolol skips 2D6."
		}, {
			pheno: "UM",
			action: "May need a higher dose or a different beta blocker."
		}],
		pearl: "CPIC has not issued an A table. DPWG has. Paroxetine next to metoprolol is a phenocopy of PM — atenolol is the quiet contrast on this shelf."
	}]
};
function pgxFor(id) {
	return PGX[id] ?? [];
}
function hasPgx(id) {
	return (PGX[id]?.length ?? 0) > 0;
}
Object.keys(PGX);
function c(pmid, year, journal, title, why, tags, drugIds, pair) {
	return pair ? {
		pmid,
		year,
		journal,
		title,
		why,
		tags,
		drugIds,
		pair
	} : {
		pmid,
		year,
		journal,
		title,
		why,
		tags,
		drugIds
	};
}
var CITES = [
	c("1671113", 1991, "Lancet", "Interaction of citrus juices with felodipine and nifedipine.", "The paper that put grapefruit on the CYP map. Intestinal 3A4, not hepatic.", ["cyp", "food"], [
		"grapefruit",
		"nifedipine",
		"felodipine"
	], ["grapefruit", "felodipine"]),
	c("9834039", 1998, "Clin Pharmacol Ther", "Grapefruit juice-simvastatin interaction: effect on serum concentrations of simvastatin, simvastatin acid, and β-hydroxyacid simvastatin.", "Oral simvastatin exposure jumps. The 3A4-sensitive statin story in one curve.", ["cyp", "food"], ["grapefruit", "simvastatin"], ["grapefruit", "simvastatin"]),
	c("9585793", 1998, "Clin Pharmacol Ther", "Grapefruit juice greatly increases serum concentrations of lovastatin and lovastatin acid.", "Same map as simvastatin — and as red yeast rice / monacolin K.", [
		"cyp",
		"food",
		"herb"
	], [
		"grapefruit",
		"lovastatin",
		"red-yeast-rice"
	], ["grapefruit", "lovastatin"]),
	c("9871430", 1998, "Clin Pharmacol Ther", "Grapefruit juice substantially increases plasma concentrations of buspirone.", "A gut-3A4 first-pass victim. Overlay IV on this desk: the ghost does not move.", ["cyp", "food"], ["grapefruit", "buspirone"], ["grapefruit", "buspirone"]),
	c("7628179", 1995, "Clin Pharmacol Ther", "Interaction between grapefruit juice and midazolam in humans.", "Oral midazolam is the classic probe for intestinal CYP3A4 knockout.", ["cyp", "food"], ["grapefruit", "midazolam"], ["grapefruit", "midazolam"]),
	c("11476118", 2001, "J Clin Psychopharmacol", "Drug interactions with grapefruit juice: an update.", "Greenblatt / von Moltke review of which psychotropics actually move.", [
		"cyp",
		"food",
		"review"
	], ["grapefruit"]),
	c("10683007", 2e3, "Lancet", "Indinavir concentrations and St John's wort.", "Piscitelli. The herbal that dumps a protease inhibitor via PXR / 3A4 induction.", ["cyp", "herb"], ["st-johns-wort", "ritonavir"]),
	c("10546917", 1999, "Clin Pharmacol Ther", "Pharmacokinetic interaction of digoxin with an herbal extract from St John's wort (Hypericum perforatum).", "P-gp induction. Digoxin falls. Not a CYP story.", [
		"cyp",
		"herb",
		"clinic"
	], ["st-johns-wort", "digoxin"], ["st-johns-wort", "digoxin"]),
	c("11673747", 2001, "Clin Pharmacol Ther", "The effects of St John's wort (Hypericum perforatum) on human cytochrome P450 activity.", "Wang. Phenotyping cocktail: 3A4 is the isoform that moves.", ["cyp", "herb"], ["st-johns-wort"]),
	c("13129991", 2003, "JAMA", "Effect of St John's wort on drug metabolism by induction of cytochrome P450 3A4 enzyme.", "Markowitz. Midazolam probe. The JAMA paper clinics still cite.", ["cyp", "herb"], ["st-johns-wort", "midazolam"]),
	c("15917386", 2005, "N Engl J Med", "Drug metabolism and variability among patients in drug response.", "Wilkinson. The CYP review to hand a student before this desk.", ["cyp", "review"], []),
	c("19106084", 2009, "N Engl J Med", "Cytochrome p-450 polymorphisms and response to clopidogrel.", "Mega TRITON. 2C19 loss-of-function, lost activation, stent thrombosis.", ["pgx", "clinic"], ["clopidogrel"]),
	c("18206732", 2008, "J Am Coll Cardiol", "Influence of omeprazole on the antiplatelet action of clopidogrel associated with aspirin: the randomized, double-blind OCLA study.", "Gilard. Omeprazole phenocopies a 2C19 PM. Pantoprazole is the quieter switch on this desk.", ["cyp", "clinic"], ["clopidogrel", "omeprazole"], ["clopidogrel", "omeprazole"]),
	c("23698643", 2013, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium guidelines for CYP2C19 genotype and clopidogrel therapy: 2013 update.", "CPIC clopidogrel. Open the guideline; this desk only paraphrases.", ["pgx", "clinic"], ["clopidogrel"]),
	c("35034351", 2022, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium Guideline for CYP2C19 Genotype and Clopidogrel Therapy: 2022 update.", "Current CPIC table for clopidogrel / 2C19.", ["pgx", "clinic"], ["clopidogrel"]),
	c("15930419", 2005, "N Engl J Med", "Effect of VKORC1 haplotypes on transcriptional regulation and warfarin dose.", "Rieder. VKORC1 plus 2C9 is why warfarin lives on the PGx tab.", ["pgx", "clinic"], ["warfarin"]),
	c("28198005", 2017, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for Pharmacogenetics-Guided Warfarin Dosing: 2017 update.", "CPIC warfarin. Not a dose from this desk.", ["pgx", "clinic"], ["warfarin"]),
	c("24458010", 2014, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium guidelines for cytochrome P450 2D6 genotype and codeine therapy: 2014 update.", "Codeine UM → morphine toxicity. PM → no analgesia. The teaching pair.", ["pgx"], ["codeine"]),
	c("33387367", 2021, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium Guideline for CYP2D6, OPRM1, and COMT Genotypes and Select Opioid Therapy.", "CPIC opioids after codeine: tramadol, hydrocodone, oxycodone caveats.", ["pgx", "mat"], [
		"codeine",
		"tramadol",
		"hydrocodone",
		"oxycodone"
	]),
	c("16819548", 2007, "Pharmacogenomics J", "Pharmacokinetics of codeine and its metabolite morphine in ultra-rapid metabolizers due to CYP2D6 duplication.", "Kirchheiner. Morphine AUC in UMs — why a 'usual' codeine dose is not usual.", ["pgx", "cyp"], ["codeine"]),
	c("16361630", 2005, "J Clin Oncol", "Pharmacogenetics of tamoxifen biotransformation is associated with clinical outcomes of efficacy and hot flashes.", "Goetz. 2D6 blockade (or PM) is lost activation, not stacked parent.", ["pgx", "clinic"], ["tamoxifen"]),
	c("25974703", 2015, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2D6 and CYP2C19 Genotypes and Dosing of Selective Serotonin Reuptake Inhibitors.", "CPIC SSRIs. Flip 2C19 on this desk for citalopram / escitalopram.", ["pgx"], [
		"citalopram",
		"escitalopram",
		"sertraline",
		"fluoxetine",
		"paroxetine",
		"fluvoxamine"
	]),
	c("27997040", 2017, "Clin Pharmacol Ther", "Clinical pharmacogenetics implementation consortium guideline (CPIC) for CYP2D6 and CYP2C19 genotypes and dosing of tricyclic antidepressants: 2016 update.", "CPIC TCAs. Amitriptyline is 2D6 and 2C19.", ["pgx"], [
		"amitriptyline",
		"nortriptyline",
		"imipramine",
		"clomipramine",
		"desipramine"
	]),
	c("21270794", 2011, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium guidelines for thiopurine methyltransferase genotype and thiopurine dosing.", "TPMT. Azathioprine / 6-MP. Allopurinol is a phenocopy via xanthine oxidase, not TPMT.", ["pgx", "clinic"], ["azathioprine", "mercaptopurine"]),
	c("23422873", 2013, "Clin Pharmacol Ther", "Clinical pharmacogenetics implementation consortium guidelines for thiopurine methyltransferase genotype and thiopurine dosing: 2013 update.", "TPMT update. NUDT15 later joined the table.", ["pgx", "clinic"], ["azathioprine", "mercaptopurine"]),
	c("26094938", 2016, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium (CPIC) guidelines for human leukocyte antigen B (HLA-B) genotype and allopurinol dosing: 2015 update.", "HLA-B*5801. Severe cutaneous reaction — not a CYP collision.", ["pgx", "clinic"], ["allopurinol"]),
	c("24918167", 2014, "Clin Pharmacol Ther", "The clinical pharmacogenetics implementation consortium guideline for SLCO1B1 and simvastatin-induced myopathy: 2014 update.", "OATP1B1. Gemfibrozil is the phenocopy on this desk.", ["pgx", "clinic"], ["simvastatin"]),
	c("32189324", 2020, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium Guideline (CPIC) for CYP2C9 and Nonsteroidal Anti-Inflammatory Drug Therapies.", "2C9 PMs stack NSAID parent. Celecoxib, ibuprofen, flurbiprofen.", ["pgx", "clinic"], [
		"ibuprofen",
		"celecoxib",
		"meloxicam",
		"diclofenac"
	]),
	c("32770672", 2021, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2C19 and Proton Pump Inhibitor Dosing.", "2C19 UM may fail a PPI; PM stacks parent. Pantoprazole is still the clopidogrel switch.", ["pgx", "clinic"], [
		"omeprazole",
		"esomeprazole",
		"lansoprazole",
		"pantoprazole"
	]),
	c("31006110", 2019, "Clin Pharmacol Ther", "Clinical Pharmacogenetics Implementation Consortium (CPIC) Guideline for CYP2B6 and Efavirenz-Containing Antiretroviral Therapy.", "2B6 PM stacks efavirenz. Same isoform as ketamine and methadone.", ["pgx"], [
		"efavirenz",
		"ketamine",
		"methadone"
	]),
	c("12230351", 2002, "Ann Intern Med", "Torsade de pointes associated with very-high-dose methadone.", "Krantz. Methadone QT is dose and potassium. Azoles and Vistaril are the traps on this desk.", ["qt", "mat"], ["methadone"]),
	c("18292673", 2008, "Anesthesiology", "Role of CYP2B6 in stereoselective human methadone metabolism.", "Kharasch. 2B6, not just 3A4. Inducers look like a stolen dose.", ["cyp", "mat"], ["methadone"]),
	c("9663180", 1998, "Clin Pharmacol Ther", "The effect of fluconazole on the clinical pharmacokinetics of methadone.", "Azole raises methadone. QT stack, not a 'stable OTP' footnote.", [
		"cyp",
		"mat",
		"qt"
	], ["fluconazole", "methadone"], ["fluconazole", "methadone"]),
	c("17517480", 2007, "Drug Alcohol Depend", "Sublingual buprenorphine/naloxone precipitated withdrawal in subjects maintained on 100mg of daily methadone.", "Occupancy, not milligrams. The failed induction on this desk.", ["mat"], ["buprenorphine", "methadone"], ["buprenorphine", "methadone"]),
	c("8160253", 1994, "Ther Drug Monit", "Probable metabolic interaction between methadone and fluvoxamine in addict patients.", "Bertschy. Luvox raises the methadone level/dose ratio. Stopping it looks like a stolen take-home.", ["cyp", "mat"], ["fluvoxamine", "methadone"], ["fluvoxamine", "methadone"]),
	c("7224382", 1981, "Ann Intern Med", "Phenytoin-induced methadone withdrawal.", "Tong / Kreek. Therapeutic phenytoin dumps methadone within days. Induction, not a missed bottle.", ["cyp", "mat"], ["phenytoin", "methadone"], ["phenytoin", "methadone"]),
	c("10485779", 1999, "Anesthesiology", "Ritonavir's role in reducing fentanyl clearance and prolonging its half-life.", "Olkkola. Ritonavir cuts fentanyl clearance 67%. Paxlovid is the five-day version of this booster.", ["cyp", "mat"], [
		"ritonavir",
		"fentanyl",
		"paxlovid"
	], ["ritonavir", "fentanyl"]),
	c("19238656", 2008, "Clin Pharmacol Ther", "Mechanism of ritonavir changes in methadone pharmacokinetics and pharmacodynamics: II. Ritonavir effects on CYP3A and P-glycoprotein activities.", "Kharasch. Ritonavir still drops methadone even while inhibiting 3A4. The OTP mixed arrow.", ["cyp", "mat"], [
		"ritonavir",
		"methadone",
		"paxlovid"
	], ["ritonavir", "methadone"]),
	c("20132117", 2010, "Am J Addict", "Drug interactions of clinical importance among the opioids, methadone and buprenorphine, and other frequently prescribed medications: a review.", "McCance-Katz. The OTP DDI review still handed to the window.", ["mat", "review"], [
		"methadone",
		"buprenorphine",
		"fentanyl"
	]),
	c("17109310", 2006, "Clin Infect Dis", "Interactions between buprenorphine and antiretrovirals. II. The protease inhibitors nelfinavir, lopinavir/ritonavir, and ritonavir.", "McCance-Katz. Ritonavir raises buprenorphine ~50% without a withdrawal map. Opposite of methadone.", ["cyp", "mat"], [
		"buprenorphine",
		"ritonavir",
		"paxlovid",
		"cobicistat"
	], ["buprenorphine", "ritonavir"]),
	c("11145498", 2e3, "Lancet", "Methadone, ciprofloxacin, and adverse drug reactions.", "Herrlin. Cipro next to methadone — sedation and a long QTc. Not a free UTI pill on the OTP.", [
		"cyp",
		"mat",
		"qt"
	], ["ciprofloxacin", "methadone"], ["ciprofloxacin", "methadone"]),
	c("15329598", 2004, "Anesthesiology", "Influence of hepatic and intestinal cytochrome P4503A activity on the acute disposition and effects of oral transmucosal fentanyl citrate.", "Kharasch. 3A4 changes duration more than peak after Actiq. Rifampin dumps; inhibitors stretch.", ["cyp", "mat"], [
		"fentanyl",
		"grapefruit",
		"rifampin"
	]),
	c("11014404", 2e3, "Clin Pharmacol Ther", "Increased drug delivery to the brain by P-glycoprotein inhibition.", "Sadeque. Loperamide plus quinidine is a CNS opioid. P-gp, not a GI footnote.", ["cyp", "mat"], ["loperamide", "quinidine"], ["loperamide", "quinidine"]),
	c("12925718", 2003, "QJM", "The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity.", "Dunkley. Clonus, hyperreflexia, hyperthermia. The teaching screen.", ["serotonin"], [
		"mdma",
		"tramadol",
		"sertraline",
		"phenelzine"
	]),
	c("2035713", 1991, "Am J Psychiatry", "The serotonin syndrome.", "Sternbach. The original diagnostic frame.", ["serotonin", "review"], ["phenelzine"]),
	c("15784664", 2005, "N Engl J Med", "The serotonin syndrome.", "Boyer and Shannon. The NEJM review still handed to residents.", ["serotonin", "review"], [
		"mdma",
		"tramadol",
		"linezolid"
	]),
	c("17874986", 2007, "Med J Aust", "Serotonin toxicity: a practical approach to diagnosis and treatment.", "Isbister. Practical, not a plus-table.", ["serotonin"], ["tramadol", "dextromethorphan"]),
	c("10078539", 1999, "Am J Cardiol", "Sildenafil citrate and blood-pressure-lowering drugs: results of drug interaction studies with an organic nitrate and a calcium antagonist.", "Webb. Nitrate × PDE5 is labeled catastrophic hypotension.", ["clinic"], ["sildenafil", "nitroglycerin"], ["sildenafil", "nitroglycerin"]),
	c("15592331", 2004, "Clin Pharmacol Ther", "Ciprofloxacin greatly increases concentrations and hypotensive effect of tizanidine by inhibiting its cytochrome P450 1A2–mediated metabolism.", "Granfors. Tizanidine is a sensitive 1A2 victim. Echinacea is the vitamin-shop echo.", ["cyp", "clinic"], ["ciprofloxacin", "tizanidine"], ["ciprofloxacin", "tizanidine"]),
	c("16007523", 2005, "Clin Infect Dis", "Fatal interaction between clarithromycin and colchicine in patients with renal insufficiency: a retrospective study.", "Hung. 3A4/P-gp plus CKD. Colchicine is NTI.", ["cyp", "clinic"], ["clarithromycin", "colchicine"], ["clarithromycin", "colchicine"]),
	c("12065445", 2002, "Drug Metab Dispos", "Contribution of CYP3A4, CYP2B6, and CYP2C9 isoforms to N-demethylation of ketamine in human liver microsomes.", "Hijazi. Oral ketamine is a first-pass 3A4/2B6 victim. IV mostly skips gut 3A4.", ["cyp"], ["ketamine"]),
	c("15319342", 2004, "Drug Metab Dispos", "Stereochemical analysis of 3,4-methylenedioxymethamphetamine and its main metabolites in human samples including the catechol-O-methyltransferase-inhibited MDMA metabolite HMMA.", "MDMA clearance is 2D6 then COMT. Blockade stacks parent and serotonin.", ["cyp"], ["mdma"]),
	c("10976543", 2e3, "Clin Pharmacol Ther", "Plasma concentrations of active simvastatin acid are increased by gemfibrozil.", "Backman. Gemfibrozil × simvastatin is contraindicated. Fenofibrate is quieter — not free.", ["cyp", "clinic"], ["gemfibrozil", "simvastatin"], ["gemfibrozil", "simvastatin"]),
	c("12496749", 2002, "Clin Pharmacol Ther", "Gemfibrozil greatly increases plasma concentrations of cerivastatin.", "OATP/2C8. The withdrawn-statin lesson that still maps to 2C8 victims (repaglinide, pioglitazone).", ["cyp", "clinic"], ["gemfibrozil", "pioglitazone"]),
	c("7870932", 1993, "Psychopharmacology", "Concurrent cocaine-ethanol ingestion in humans: pharmacology, physiology, behavior, and the role of cocaethylene.", "McCance-Katz. Cocaine plus ethanol is a third drug.", ["mat"], ["cocaine", "ethanol"], ["cocaine", "ethanol"]),
	c("10393149", 1999, "Am J Clin Nutr", "Dietary supplement or drug? The case for cholestin.", "Heber. Red yeast rice is lovastatin. Grapefruit and gemfibrozil still apply.", ["herb", "clinic"], ["red-yeast-rice", "lovastatin"]),
	c("9989685", 1999, "Am J Clin Nutr", "Cholesterol-lowering effects of a proprietary Chinese red-yeast-rice dietary supplement.", "The lipid drop is the statin. Not a free 'natural' row.", ["herb"], ["red-yeast-rice"]),
	c("21870106", 2012, "Eur J Clin Pharmacol", "Repeated administration of berberine inhibits cytochromes P450 in humans.", "Human cocktail: berberine is a real 2D6/3A4 perpetrator, not goldenseal tea.", ["cyp", "herb"], ["berberine"]),
	c("15900287", 2005, "Clin Pharmacol Ther", "In vivo effects of goldenseal, kava kava, black cohosh, and valerian on human cytochrome P450 1A2, 2D6, 2E1, and 3A4/5 phenotyping.", "Gurley. Goldenseal is the herb that actually moves 2D6/3A4. Kava/valerian are quieter on CYP.", ["cyp", "herb"], [
		"goldenseal",
		"kava",
		"black-cohosh",
		"valerian"
	]),
	c("18484782", 2008, "Drug Saf", "Safety of green tea extracts: a systematic review by the US Pharmacopeia.", "Concentrated EGCG has a liver signal. A cup of tea is not this row.", ["herb", "clinic"], ["green-tea"]),
	c("9737361", 1998, "Thyroid", "Effects of pharmacological fiber supplements on levothyroxine absorption.", "Psyllium / viscous fiber. Metamucil with the morning dose is an empty TSH.", ["food", "clinic"], ["psyllium", "levothyroxine"], ["psyllium", "levothyroxine"]),
	c("12882588", 2003, "Clin Pharmacokinet", "Pharmacokinetic interactions with rifampicin: clinical relevance.", "Niemi. The induction review. Methadone, apixaban, tacrolimus, OCPs all dump.", [
		"cyp",
		"clinic",
		"review"
	], ["rifampin"]),
	c("2813665", 1989, "Psychopharmacology", "Dose-related plasma levels of clozapine: influence of smoking behaviour, sex and age.", "Haring. Smoke induces 1A2. Cessation is rebound toxicity.", ["cyp"], ["clozapine"]),
	c("12618594", 2003, "Pharmacogenetics", "The effect of smoking and cytochrome P450 CYP1A2 genetic polymorphism on clozapine clearance and dose requirement.", "van der Weide. Smoke plus 1A2 genotype.", ["cyp", "pgx"], ["clozapine"]),
	c("8521679", 1995, "Clin Pharmacokinet", "Clinical relevance of drug interactions with lithium.", "Finley. ACEI, ARB, thiazide, NSAID — reduced lithium clearance.", ["clinic"], ["lithium", "lisinopril"]),
	c("1524964", 1992, "Br J Clin Pharmacol", "Sodium valproate acutely inhibits lamotrigine metabolism.", "UGT, not CYP. Rash and SJS risk when the pair is started wrong.", ["clinic"], ["valproate", "lamotrigine"], ["valproate", "lamotrigine"]),
	c("31885095", 2020, "Pharmacotherapy", "Drug Interaction Between Febuxostat and Thiopurine Antimetabolites: A Review of the FDA Adverse Event Reporting System and Meta-Analysis.", "Xanthine oxidase. Febuxostat is the same trap as allopurinol next to Imuran.", ["clinic"], ["febuxostat", "azathioprine"], ["febuxostat", "azathioprine"]),
	c("15355126", 2004, "Clin Pharmacokinet", "Pharmacokinetics of budesonide (Entocort EC) capsules for Crohn's disease.", "Gut 3A4 first-pass. Azoles and ritonavir make a 'local' steroid systemic.", ["cyp", "clinic"], ["budesonide"]),
	c("8889906", 1996, "J Clin Psychopharmacol", "Cytochrome P450 enzymes: interpretation of their interactions with selective serotonin reuptake inhibitors. Part II.", "Preskorn. Fluoxetine/paroxetine lock 2D6. Fluvoxamine locks 1A2/2C19.", ["cyp", "review"], [
		"fluoxetine",
		"paroxetine",
		"fluvoxamine"
	]),
	c("17259955", 2007, "Clin Pharmacol Ther", "Drug interaction studies: study design, data analysis, and implications for dosing and labeling.", "Huang / FDA. How a 'strong inhibitor' is defined — the grading this desk uses.", ["cyp", "review"], []),
	c("22992668", 2012, "Clin Pharmacol Ther", "Pharmacogenomics knowledge for personalized medicine.", "PharmGKB overview. ClinPGx is the current home.", ["pgx", "review"], []),
	c("37139824", 2023, "J Am Geriatr Soc", "American Geriatrics Society 2023 updated AGS Beers Criteria® for potentially inappropriate medication use in older adults.", "Beers 2023. Flip geriatric on this desk. Not a stop list — a teaching highlight.", ["clinic", "review"], []),
	c("15781124", 2005, "Pharmacol Ther", "UDP-glucuronosyltransferases and clinical drug-drug interactions.", "UGT. Valproate–lamotrigine lives here, not on CYP.", ["clinic", "review"], ["valproate", "lamotrigine"]),
	c("12496741", 2002, "Clin Pharmacol Ther", "Fruit juices inhibit organic anion transporting polypeptide-mediated drug uptake to decrease the oral availability of fexofenadine.", "Dresser. Apple/orange/grapefruit juice cut Allegra. OATP, not CYP — the arrow is loss of effect.", ["food", "clinic"], [
		"oatp-juice",
		"fexofenadine",
		"grapefruit"
	], ["oatp-juice", "fexofenadine"]),
	c("16044105", 2005, "Br J Clin Pharmacol", "Effects of orange juice on the pharmacokinetics of atenolol.", "Lilja. Orange juice dumps atenolol AUC. Same OATP neighborhood as Allegra, not 2D6.", ["food", "clinic"], ["oatp-juice", "atenolol"], ["oatp-juice", "atenolol"]),
	c("24193112", 2014, "Clin Pharmacol Ther", "Green tea ingestion greatly reduces plasma concentrations of nadolol in humans.", "Misaka. Catechins vs OATP1A2. Corgard falls. A cup of tea is not the EGCG liver capsule — both still map.", ["food", "herb"], ["green-tea", "nadolol"], ["green-tea", "nadolol"]),
	c("1934862", 1991, "Clin Pharmacol Ther", "Interference of dairy products with the absorption of ciprofloxacin.", "Neuvonen. Yogurt and milk empty Cipro. Calcium chelation, not 1A2.", ["food", "clinic"], ["dairy", "ciprofloxacin"], ["dairy", "ciprofloxacin"]),
	c("18578612", 2008, "Thyroid", "Altered intestinal absorption of L-thyroxine caused by coffee.", "Benvenga. Espresso with Synthroid is an empty TSH. Tannins, not 1A2 caffeine.", ["food", "clinic"], ["coffee", "levothyroxine"], ["coffee", "levothyroxine"]),
	c("6808025", 1982, "Neurology", "Interference of oral phenytoin absorption by continuous nasogastric feedings.", "Bauer. The tube-feed Dilantin paper. Hold, flush, separate. Not 2C9.", ["food", "clinic"], ["enteral-feed", "phenytoin"], ["enteral-feed", "phenytoin"]),
	c("3498445", 1987, "Arch Neurol", "Dietary influences on the antiparkinsonian response to levodopa.", "Juncos. Protein meals compete at LAT1. A steak next to Sinemet is lost 'on' time, not a cytochrome.", ["food", "clinic"], ["protein-meal", "levodopa"], ["protein-meal", "levodopa"]),
	c("14999113", 2004, "N Engl J Med", "Drug-induced prolongation of the QT interval.", "Roden. Milliseconds, potassium, and stacked IKr blockers — the review that still teaches torsades.", [
		"qt",
		"review",
		"clinic"
	], [
		"methadone",
		"sotalol",
		"citalopram"
	]),
	c("12230351", 2002, "Ann Intern Med", "Torsade de pointes associated with very-high-dose methadone.", "Krantz. The OTP QT paper. Dose-related methadone and milliseconds.", [
		"qt",
		"mat",
		"clinic"
	], ["methadone"]),
	c("22265699", 2012, "Lancet", "Lithium toxicity profile: a systematic review and meta-analysis.", "McKnight. Levels, thyroid, kidney — TDM is the point of lithium, not a CYP row.", ["clinic", "review"], ["lithium"]),
	c("29390205", 2018, "Pharmacopsychiatry", "Consensus Guidelines for Therapeutic Drug Monitoring in Neuropsychopharmacology: Update 2017.", "AGNP / Hiemke. Clozapine 350 ng/mL, TCA windows, the teaching TDM table.", [
		"clinic",
		"review",
		"pgx"
	], [
		"clozapine",
		"nortriptyline",
		"valproate"
	]),
	c("8305063", 1993, "N Engl J Med", "Acute liver failure.", "Lee. Why acetaminophen, INH, and valproate sit on the LiverTox A list.", ["clinic", "review"], [
		"acetaminophen",
		"isoniazid",
		"valproate"
	]),
	c("16338275", 2005, "Clin Pharmacol Ther", "Methadone enantiomer plasma levels, CYP2B6, CYP2C19, and CYP2C9 genotypes, and response to treatment.", "2B6 is why some methadone levels never settle. QT is the other card.", [
		"cyp",
		"mat",
		"pgx"
	], ["methadone"]),
	c("22797808", 2012, "Br J Clin Pharmacol", "Addressing phenoconversion: the Achilles' heel of personalized medicine.", "Shah and Smith. A strong 2D6 inhibitor makes a normal metabolizer look poor. The genotype did not change.", [
		"cyp",
		"pgx",
		"clinic"
	], [
		"paroxetine",
		"codeine",
		"fluoxetine"
	]),
	c("32721035", 2020, "Clin Pharmacol Ther", "Impact of CYP2D6 pharmacogenetic testing on the management of patients with mental health disorders.", "Cicali. Phenoconversion is why a 2D6 NM on bupropion is not a 2D6 NM.", ["cyp", "pgx"], ["bupropion", "dextromethorphan"]),
	c("36067166", 2022, "MMWR Recomm Rep", "CDC clinical practice guideline for prescribing opioids for pain — United States, 2022.", "The MME factors this desk teaches. Methadone is banded. Street fentanyl is not a factor.", [
		"mat",
		"clinic",
		"review"
	], [
		"morphine",
		"oxycodone",
		"methadone",
		"fentanyl"
	]),
	c("21926492", 2011, "Clin Pharmacol Ther", "PharmGKB summary: very important pharmacogene information for CYP2D6.", "Owen. The 2D6 chapter this desk phenoconverts against.", [
		"cyp",
		"pgx",
		"review"
	], ["codeine", "paroxetine"]),
	c("24986836", 2014, "J Anal Toxicol", "False-positive interferences of common urine drug screen immunoassays: a review.", "Saitman. Wellbutrin vs the amphetamine cup, Zoloft vs the benzo cup, Seroquel vs the TCA cup. Presumptive, not LC-MS/MS.", [
		"mat",
		"clinic",
		"review"
	], [
		"bupropion",
		"sertraline",
		"quetiapine",
		"dextromethorphan",
		"methadone"
	]),
	c("12924748", 2003, "J Psychoactive Drugs", "The Clinical Opiate Withdrawal Scale (COWS).", "Wesson and Ling. Eleven items. A score is not occupancy — fentanyl in tissue can still precipitate at 14.", ["mat", "clinic"], [
		"buprenorphine",
		"methadone",
		"fentanyl"
	]),
	c("2597811", 1989, "Br J Addict", "Assessment of alcohol withdrawal: the revised clinical institute withdrawal assessment for alcohol scale (CIWA-Ar).", "Sullivan. Ten items, max 67. Symptom-triggered maps often move at 8–10. Not a benzo protocol on this desk.", ["clinic", "review"], ["ethanol"]),
	c("21142534", 2010, "N Engl J Med", "Neonatal abstinence syndrome after methadone or buprenorphine exposure.", "Jones MOTHER. Buprenorphine had milder NAS in that map. Not a reason to destabilize a working methadone, and not a milk card.", ["mat", "clinic"], ["methadone", "buprenorphine"]),
	c("36449473", 2022, "N Engl J Med", "Buprenorphine versus methadone for opioid use disorder in pregnancy.", "Suarez. Cohort echo of MOTHER: milder NAS on buprenorphine, similar maternal outcomes. Still not a switch protocol.", ["mat", "clinic"], ["methadone", "buprenorphine"]),
	c("32511106", 2020, "J Addict Med", "The ASAM National Practice Guideline for the Treatment of Opioid Use Disorder: 2020 Focused Update.", "Induction timing, COWS, XR-naltrexone washout. Occupancy is not the integer. This desk does not pick a film.", [
		"mat",
		"clinic",
		"review"
	], [
		"buprenorphine",
		"methadone",
		"naltrexone",
		"fentanyl"
	]),
	c("8093639", 1993, "N Engl J Med", "Clozapine-induced agranulocytosis. Incidence and risk factors in the United States.", "Alvir. Why ANC, not WBC, sits on the REMS table this desk paraphrases.", ["clinic"], ["clozapine"])
];
function pubmedUrl(pmid) {
	return `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
}
function pubmedSearchUrl(q) {
	return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(q)}`;
}
function citesFor(ids) {
	if (!ids.length) return CITES.filter((c) => c.tags.includes("review")).slice(0, 8);
	const set = new Set(ids);
	const pairHits = CITES.filter((c) => c.pair && set.has(c.pair[0]) && set.has(c.pair[1]));
	const drugHits = CITES.filter((c) => c.drugIds.some((id) => set.has(id)));
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const row of [...pairHits, ...drugHits]) {
		if (seen.has(row.pmid)) continue;
		seen.add(row.pmid);
		out.push(row);
	}
	return out;
}
function searchCites(query) {
	const q = query.trim().toLowerCase();
	if (!q) return CITES;
	if (q === "pubmed" || q === "pmid" || q === "cites" || q === "refs" || q === "papers") return CITES;
	return CITES.filter((c) => {
		if (c.tags.some((t) => t === q)) return true;
		if (c.pmid === q) return true;
		if (String(c.year) === q) return true;
		return `${c.title} ${c.journal} ${c.why} ${c.drugIds.join(" ")}`.toLowerCase().includes(q);
	});
}
function hasCite(id) {
	return CITES.some((c) => c.drugIds.includes(id));
}
var CITE_TAGS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "cyp",
		label: "CYP"
	},
	{
		id: "pgx",
		label: "PGx"
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
		id: "herb",
		label: "Herb"
	},
	{
		id: "clinic",
		label: "Clinic"
	},
	{
		id: "serotonin",
		label: "Serotonin"
	},
	{
		id: "qt",
		label: "QT"
	},
	{
		id: "review",
		label: "Reviews"
	}
];
function st(spectrum, occupancy, pearl, sides) {
	return {
		spectrum,
		occupancy,
		pearl,
		sides
	};
}
var STAHL = {
	fluoxetine: st("SSRI — SERT occupancy that outlives the visit", [{
		r: "SERT",
		n: 4
	}, {
		r: "5-HT2C",
		n: 2
	}], "SERT is the job. Parent plus norfluoxetine occupy the transporter for weeks — washout is a calendar, not a weekend. Strong CYP2D6 inhibitor: tamoxifen activation and codeine both go quiet. More activating than sedating.", "Early agitation, sexual side effects, 5-week MAOI washout. Not an H1 story."),
	sertraline: st("SSRI — SERT, a little DAT, sigma", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "DAT",
			n: 1
		},
		{
			r: "σ1",
			n: 2
		}
	], "SERT first. Weak DAT at high exposure is why some people call it 'activating.' 2C19 and 2B6 clear it. GI start-up is classic; not a strong 2D6 bully like paroxetine.", "Nausea, diarrhea, sexual side effects. GI is the first two weeks, not a reason to abandon SERT."),
	paroxetine: st("SSRI — SERT plus M1, NET, and a 2D6 lock", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "NET",
			n: 2
		},
		{
			r: "M1",
			n: 2
		}
	], "The least 'selective' SSRI on the occupancy map. Anticholinergic at clinical doses, short half-life, nasty discontinuation. Strong 2D6 inhibitor — a phenocopy of a poor metabolizer for everything else on the desk.", "Dry mouth, constipation, withdrawal zaps, sexual side effects, weight. Do not stop cold."),
	fluvoxamine: st("SSRI — SERT plus σ1, and a 1A2 hammer", [{
		r: "SERT",
		n: 4
	}, {
		r: "σ1",
		n: 3
	}], "The OCD SSRI. The desk cares because it is a strong 1A2 and 2C19 inhibitor — clozapine, theophylline, tizanidine, and melatonin all move. σ1 is a research footnote, not a dosing lever.", "Sedation, GI, and perpetrator toxicity of the other drugs — not a free SSRI next to clozapine."),
	citalopram: st("SSRI — clean SERT, known QT", [{
		r: "SERT",
		n: 4
	}], "The 'clean' racemate. 2C19 victim. FDA dose-cap exists because of QT, not because SERT needed more milligrams. Escitalopram is the S-enantiomer with less QT at labeled doses.", "QT at higher exposure, sexual side effects, hyponatremia in older adults."),
	escitalopram: st("SSRI — S-citalopram, SERT without the R-ballast", [{
		r: "SERT",
		n: 4
	}], "S-enantiomer. Same 2C19 map as citalopram. CPIC trims poor metabolizers. QT is quieter than the racemate at labeled doses — still not a free QT drug next to methadone.", "Sexual side effects, hyponatremia. 2C19 PM: start lower."),
	venlafaxine: st("SNRI — SERT first, NET later", [{
		r: "SERT",
		n: 4
	}, {
		r: "NET",
		n: 3
	}], "Low dose is mostly SERT; NET occupancy climbs with milligrams and with ODV. 2D6 makes ODV. Poor metabolizers stack parent; ultrarapid may look like a failed trial. Discontinuation is real.", "Sweat, blood pressure, withdrawal, sexual side effects. Check a sitting BP before calling it anxiety."),
	duloxetine: st("SNRI — SERT and NET together, plus 1A2", [{
		r: "SERT",
		n: 4
	}, {
		r: "NET",
		n: 4
	}], "Balanced SERT/NET at labeled doses. 1A2 plus 2D6 clearance — fluvoxamine and ciprofloxacin raise it. Pain labeling does not retire the serotonergic PD with MAOIs.", "Nausea, sweat, urinary hesitation, hepatotoxicity warning. Not for heavy drinkers."),
	bupropion: st("NDRI — DAT / NET, no SERT", [{
		r: "DAT",
		n: 3
	}, {
		r: "NET",
		n: 3
	}], "The anti-SSRI occupancy. No SERT, no sexual story from serotonin, seizure threshold falls with dose and with IR dumps. Strong 2D6 inhibitor — tamoxifen and codeine still go quiet. 2B6 to hydroxybupropion.", "Insomnia, jitter, seizure risk. Not a serotonergic; MAOI is still a pressor row."),
	mirtazapine: st("NaSSA — α2 off, H1 on, 5-HT2 off", [
		{
			r: "H1",
			n: 4
		},
		{
			r: "α2",
			n: 3
		},
		{
			r: "5-HT2A",
			n: 3
		},
		{
			r: "5-HT2C",
			n: 3
		},
		{
			r: "5-HT3",
			n: 2
		}
	], "H1 is why it puts people down and why weight climbs. α2 antagonism disinhibits NE and 5-HT; 5-HT2A/2C blockade is why it is not an SSRI-sexual story. Not a 2D6 bully.", "Sedation, appetite, weight. Falls in older adults. Rare agranulocytosis."),
	trazodone: st("SARI — 5-HT2A and H1 at sleep doses; SERT only high", [
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "H1",
			n: 3
		},
		{
			r: "α1",
			n: 3
		},
		{
			r: "SERT",
			n: 2
		}
	], "Hypnotic milligrams occupy 5-HT2A, H1, α1 — not SERT. Antidepressant milligrams start to occupy SERT and nobody stays awake for them. α1 is the priapism / orthostasis receptor.", "Morning hangover, orthostasis, rare priapism. Not a free benzo-alternative on a QT opioid."),
	amitriptyline: st("Tertiary TCA — SERT, NET, and the whole off-target piano", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "NET",
			n: 3
		},
		{
			r: "H1",
			n: 4
		},
		{
			r: "M1",
			n: 4
		},
		{
			r: "α1",
			n: 3
		}
	], "The original dirty drug, in the useful sense. H1 sedation, M1 anticholinergic, α1 orthostasis, quinidine-like Nav at overdose. 2D6 and 2C19 to nortriptyline. Narrow-ish index.", "Dry mouth, constipation, falls, QT, lethal in overdose. CPIC trims PMs."),
	nortriptyline: st("Secondary TCA — NET > SERT, cleaner than parent", [
		{
			r: "NET",
			n: 4
		},
		{
			r: "SERT",
			n: 2
		},
		{
			r: "H1",
			n: 2
		},
		{
			r: "M1",
			n: 2
		},
		{
			r: "α1",
			n: 2
		}
	], "Amitriptyline's metabolite, less H1/M1. Sensitive 2D6 substrate. Therapeutic drug monitoring is the old way to do what CPIC now says in a table.", "Dry mouth, constipation, still lethal in overdose. Better tolerated than parent, not clean."),
	clomipramine: st("TCA — SERT first (the OCD TCA)", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "NET",
			n: 3
		},
		{
			r: "H1",
			n: 3
		},
		{
			r: "M1",
			n: 3
		},
		{
			r: "α1",
			n: 2
		}
	], "Most serotonergic TCA — that is why OCD trials used it. Same off-target piano as amitriptyline. 2D6/2C19. MAOI is contraindicated.", "Anticholinergic load, seizure at high level, sexual side effects from SERT."),
	desipramine: st("Secondary TCA — NET, sensitive 2D6", [{
		r: "NET",
		n: 4
	}, {
		r: "SERT",
		n: 1
	}], "The NET TCA. Sensitive 2D6 — paroxetine/fluoxetine/bupropion spike parent. Narrow-ish index.", "Jitter, tachycardia, overdose lethality. Little H1 compared with amitriptyline."),
	imipramine: st("Tertiary TCA — SERT/NET plus off-targets", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "NET",
			n: 3
		},
		{
			r: "H1",
			n: 3
		},
		{
			r: "M1",
			n: 3
		},
		{
			r: "α1",
			n: 3
		}
	], "Parent of desipramine. 2C19 activation plus 2D6 clearance. Same TCA piano, same CPIC table.", "Orthostasis, anticholinergic, overdose."),
	phenelzine: st("Irreversible MAOI — MAO-A and MAO-B for two weeks after the last tablet", [{
		r: "MAO-A",
		n: 4
	}, {
		r: "MAO-B",
		n: 4
	}], "Occupancy is the enzyme, not a transporter. New enzyme has to be synthesized — that is the 14-day washout. Tyramine and any serotonergic on this desk are contraindicated, not a 'monitor.'", "Hypertensive crisis with tyramine/stimulants; serotonin syndrome with SSRIs, MDMA, meperidine, linezolid."),
	tranylcypromine: st("Irreversible MAOI — amphetamine-adjacent structure, same enzyme rule", [{
		r: "MAO-A",
		n: 4
	}, {
		r: "MAO-B",
		n: 4
	}], "Same irreversible occupancy as phenelzine. Structure looks a bit like an amphetamine — stimulating, not sedating. Washout is still two weeks. Tyramine still applies.", "Insomnia, pressor crisis, serotonin syndrome. Not a 'cleaner MAOI.'"),
	selegiline: st("MAO-B at labeled transdermal/low oral; MAO-A as the dose climbs", [{
		r: "MAO-B",
		n: 4
	}, {
		r: "MAO-A",
		n: 2
	}], "Selective MAO-B at Parkinson's doses; the patch at antidepressant doses starts to occupy MAO-A. Selectivity is not a free pass with MDMA or another serotonergic. 1A2 substrate — ciprofloxacin raises it.", "Pressor and serotonin rows still fire on this desk. Dietary tyramine is dose-dependent."),
	moclobemide: st("RIMA — reversible MAO-A", [{
		r: "MAO-A",
		n: 4
	}], "Reversible occupancy. Tyramine can compete it off the enzyme — that is the point of a RIMA. Still not a green light for MDMA or an SSRI. Not US-labeled.", "Serotonin syndrome with other serotonergics still applies. Less dietary theater than phenelzine, not zero."),
	lithium: st("Ion — second messenger, not a receptor cartoon", [], "No SERT, no D2. GSK-3 and inositol cycling. The desk maps the renal traps: ACEI, ARB, thiazide, NSAID, low salt, dehydration. Toxicity is a level and a tremor, not a CYP.", "Tremor, polyuria, hypothyroidism, Ebstein in pregnancy. NSAIDs and thiazides raise the level."),
	valproate: st("Mood stabilizer / anticonvulsant — GABA, Nav, HDAC", [{
		r: "Nav",
		n: 3
	}, {
		r: "GABA-T",
		n: 3
	}], "Not a CYP perpetrator in the strong-inducer sense — it is a UGT and 2C9 story, and it dumps lamotrigine. Weight, tremor, PCOS, teratogenicity. Ammonia can rise.", "Teratogen, hepatotoxicity, pancreatitis, tremor, hair. Check a pregnancy plan before a mood plan."),
	lamotrigine: st("Mood stabilizer — Nav / glutamate release, rash gene", [{
		r: "Nav",
		n: 3
	}], "Slow titration is the Stevens–Johnson protocol, not a CYP protocol. Valproate doubles it; estrogen OCPs dump it. Lithium-level thinking does not apply.", "Rash / SJS, insomnia. Estrogen is an inducer of its UGT — the pill can steal the dose."),
	carbamazepine: st("Mood stabilizer — Nav plus pan-CYP induction", [{
		r: "Nav",
		n: 4
	}], "HLA-B*15:02 is the rash gene. The desk scores the induction: OCPs fail, methadone looks stolen, oral ketamine fades. Autoinduction over the first weeks.", "SJS, hyponatremia, agranulocytosis, stolen victim-drug levels."),
	quetiapine: st("Atypical — H1 at 50 mg, D2 only as the milligrams climb", [
		{
			r: "H1",
			n: 4
		},
		{
			r: "α1",
			n: 3
		},
		{
			r: "5-HT2A",
			n: 3
		},
		{
			r: "D2",
			n: 2
		},
		{
			r: "M1",
			n: 2
		}
	], "Sleep doses occupy H1, not D2 — that is why 50 mg is a hypnotic and 300–800 mg is an antipsychotic. 3A4 victim. QT-possible next to methadone. Metabolic at antipsychotic doses.", "Sedation, orthostasis, weight at antipsychotic exposure. 'Seroquel for sleep' is H1, not D2."),
	olanzapine: st("Atypical — 5-HT2A/D2 plus H1 and M1 (the metabolic signature)", [
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "D2",
			n: 3
		},
		{
			r: "H1",
			n: 4
		},
		{
			r: "5-HT2C",
			n: 4
		},
		{
			r: "M1",
			n: 3
		}
	], "H1 plus 5-HT2C is the weight signature. 1A2 substrate — smoke dumps it, fluvoxamine raises it. Not a 3A4 first-pass trap like quetiapine.", "Weight, lipids, glucose, sedation. Smoking status belongs on the desk."),
	risperidone: st("Atypical — D2 and 5-HT2A, prolactin, EPS at the top of the range", [
		{
			r: "D2",
			n: 4
		},
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "α1",
			n: 3
		}
	], "Tighter D2 than quetiapine — prolactin and EPS show up. 2D6 to paliperidone (renal). QT-possible. Less H1 than olanzapine, so less 'sleep in a pill.'", "Prolactin, EPS, orthostasis. Paliperidone skips 2D6."),
	aripiprazole: st("Partial D2 / 5-HT1A — occupancy without full blockade", [
		{
			r: "D2",
			n: 4
		},
		{
			r: "5-HT1A",
			n: 3
		},
		{
			r: "5-HT2A",
			n: 3
		}
	], "Partial agonist: it sits on D2 and will not get off for a full antagonist. Akathisia is the signature, not sedation. 2D6 and 3A4; PM dose is on the label. Very long t½.", "Akathisia, insomnia, impulse-control (gambling) rare. Not an H1 hypnotic."),
	clozapine: st("Atypical — D4 / 5-HT2A, low D2, high H1/M1/α1 — the agranulocytosis drug", [
		{
			r: "D4",
			n: 3
		},
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "H1",
			n: 4
		},
		{
			r: "M1",
			n: 4
		},
		{
			r: "α1",
			n: 4
		},
		{
			r: "D2",
			n: 2
		}
	], "Low D2 occupancy is why EPS is rare and why it works when others fail. 1A2 — smoke dumps it, fluvoxamine can multiply it. ANC monitoring is the non-negotiable. Seizure threshold falls with level.", "Agranulocytosis, myocarditis, constipation to obstruction, sialorrhea, metabolic, seizure. Smoking status is a dose."),
	haloperidol: st("Typical — D2, EPS, QT", [{
		r: "D2",
		n: 4
	}], "The D2 stick. Little H1, little M1 — so it does not sedate like chlorpromazine, and it causes EPS and NMS. 2D6/3A4. QT-possible, worse IV.", "EPS, NMS, QT, tardive. Not a sleep drug."),
	ziprasidone: st("Atypical — D2/5-HT2A, QT, take with food", [
		{
			r: "D2",
			n: 4
		},
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "5-HT1A",
			n: 3
		}
	], "Known-QT atypical. Absorption needs a meal. Less metabolic than olanzapine. Still a D2 drug.", "QT, akathisia, take with 500 kcal. ECG next to other QT drugs."),
	lurasidone: st("Atypical — D2/5-HT2A/5-HT7, 3A4 sensitive, take with food", [
		{
			r: "D2",
			n: 4
		},
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "5-HT7",
			n: 3
		},
		{
			r: "5-HT1A",
			n: 3
		}
	], "Sensitive 3A4 substrate — grapefruit, azoles, ritonavir are labeled problems. Food for absorption. Little H1, so little metabolic compared with olanzapine.", "Akathisia, nausea. 3A4 inhibitors are not a seasoning footnote."),
	paliperidone: st("9-OH-risperidone — D2/5-HT2A, mostly renal", [
		{
			r: "D2",
			n: 4
		},
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "α1",
			n: 3
		}
	], "The metabolite. Skips 2D6. QT and prolactin still apply. Invega Sustenna is a long occupancy, not a CYP trick.", "Prolactin, EPS, QT. Renal dose, not 2D6 dose."),
	chlorpromazine: st("Low-potency typical — D2 plus H1/M1/α1", [
		{
			r: "D2",
			n: 3
		},
		{
			r: "H1",
			n: 4
		},
		{
			r: "M1",
			n: 4
		},
		{
			r: "α1",
			n: 4
		}
	], "Sedating typical. The off-target piano is why it looks like a TCA of psychosis. QT-possible, seizure-lowering, stacked anticholinergic.", "Sedation, orthostasis, anticholinergic, photosensitivity, QT."),
	pimozide: st("Typical — sensitive 3A4, boxed QT", [{
		r: "D2",
		n: 4
	}], "Tourette drug. Strong 3A4 inhibitors are labeled contraindicated. Known QT. Not a first-line antipsychotic on this desk.", "TdP with azoles/macrolides/ritonavir. EPS."),
	thioridazine: st("Typical — boxed QT, 2D6, withdrawn in many markets", [
		{
			r: "D2",
			n: 3
		},
		{
			r: "H1",
			n: 3
		},
		{
			r: "M1",
			n: 4
		}
	], "The cautionary typical. 2D6 PMs and strong 2D6 inhibitors are labeled problems. Known QT.", "TdP, retinitis pigmentosa at chronic high dose. Historical more than a start."),
	alprazolam: st("Benzodiazepine — GABA-A BZ site, short, 3A4", [{
		r: "GABA-A",
		n: 4
	}], "Positive allosteric modulator at the BZ site. Short occupancy, interdose anxiety, 3A4 victim (grapefruit, azoles, ritonavir). Opioid boxed airway. Not an antidepressant receptor.", "Rebound, withdrawal seizures, apnea with opioids/alcohol/GHB."),
	diazepam: st("Benzodiazepine — long parent, longer nordiazepam, 2C19/3A4", [{
		r: "GABA-A",
		n: 4
	}], "The long GABA occupancy. 2C19 PMs stretch both parent and nordiazepam. LOT benzos skip this CYP. Same airway PD as any benzo.", "Accumulation in older adults, falls, airway with opioids."),
	clonazepam: st("Benzodiazepine — long, 3A4", [{
		r: "GABA-A",
		n: 4
	}], "Longer than alprazolam, still a 3A4 benzo. Panic and seizure labeling. Opioid airway still applies.", "Sedation, dependence, withdrawal seizures."),
	lorazepam: st("Benzodiazepine — UGT, the switch when 3A4 is blocked", [{
		r: "GABA-A",
		n: 4
	}], "LOT: lorazepam, oxazepam, temazepam. Glucuronidation, not 3A4/2C19. PD stacking with opioids and alcohol is unchanged. Not a 'safe benzo' — a cleaner CYP map.", "Sedation, airway, withdrawal. Cleaner CYP, same GABA."),
	oxazepam: st("Benzodiazepine — UGT only", [{
		r: "GABA-A",
		n: 4
	}], "The other LOT. Same teaching as lorazepam. Prefer when 3A4 is occupied by ritonavir or an azole — PD still sedates.", "Same GABA airway. Not a CYP victim."),
	temazepam: st("Benzodiazepine — mostly UGT, hypnotic labeling", [{
		r: "GABA-A",
		n: 4
	}], "Sleep benzo, UGT. Still an opioid airway. Not midazolam's 3A4 trap.", "Hangover, dependence, airway."),
	midazolam: st("Benzodiazepine — sensitive 3A4, first-pass if swallowed", [{
		r: "GABA-A",
		n: 4
	}], "The procedure benzo. Oral/gut 3A4 is a first-pass victim like oral ketamine. IV skips the gut. Grapefruit and azoles stretch it.", "Apnea, especially with opioids. Overlay the curve oral vs IV."),
	triazolam: st("Benzodiazepine — sensitive 3A4, short hypnotic", [{
		r: "GABA-A",
		n: 4
	}], "Halcion. Labeled with strong 3A4 inhibitors. Short occupancy, amnesia reports. Same GABA family.", "Anterograde amnesia, 3A4 traps, airway."),
	zolpidem: st("Z-hypnotic — GABA-A α1 preferring", [{
		r: "GABA-A α1",
		n: 4
	}], "Not a benzo ring, same superfamily. α1-preferring — hypnotic more than anxiolytic. 3A4. Complex sleep behaviors. Still CNS with opioids.", "Sleep-driving, next-day impairment, women clear it slower. Not anxiolytic occupancy."),
	eszopiclone: st("Z-hypnotic — GABA-A, 3A4", [{
		r: "GABA-A",
		n: 4
	}], "Same superfamily as zolpidem, longer. 3A4 victim. Metallic taste. Opioid airway still applies.", "Dysgeusia, next-day impairment, dependence."),
	buspirone: st("Azapirone — 5-HT1A partial, sensitive 3A4, not GABA", [{
		r: "5-HT1A",
		n: 4
	}], "No BZ occupancy — no alcohol airway from GABA, no withdrawal seizures. Sensitive intestinal 3A4: grapefruit and azoles multiply oral exposure (the curve on this desk). Delayed onset.", "Dizziness, not sedation. Grapefruit is the PK trap, not a food footnote."),
	hydroxyzine: st("Sedating antihistamine — H1, not a benzo", [{
		r: "H1",
		n: 4
	}, {
		r: "M",
		n: 2
	}], "The OTP 'not a benzo' for anxiety. Occupies H1, prolongs QT, anticholinergic. Next to methadone that is TdP and airway, not a free extra. 3A4 substrate.", "Sedation, QT, dry mouth. Vistaril is not lorazepam and not nothing."),
	diphenhydramine: st("First-generation antihistamine — H1 and M", [{
		r: "H1",
		n: 4
	}, {
		r: "M",
		n: 3
	}], "OTC sleep is H1 plus antimuscarinic. Delirium in older adults. Weak 2D6 inhibition. Stacks with other anticholinergics and with opioids on the airway.", "Dry mouth, urinary retention, delirium, next-day hangover."),
	ketamine: st("NMDA open-channel blocker — dissociation, then a glutamate bounce", [{
		r: "NMDA",
		n: 4
	}, {
		r: "AMPA",
		n: 2
	}], "Occupies NMDA; AMPA throughput rises downstream — that is the plasticity story, not a SSRI occupancy. Oral 3A4/2B6 first-pass is the trap; IV mostly skips the gut. Benzos blunt the antidepressant signal and stack the airway.", "Dissociation, BP swing, bladder with chronic use, airway with GABA drugs. Route is the PK."),
	esketamine: st("S-ketamine — same NMDA pore, intranasal first-pass is quieter than a lozenge", [{
		r: "NMDA",
		n: 4
	}], "S-enantiomer. Spravato still sees hepatic 2B6/3A4. Same benzo-airway and blunting map as racemic ketamine. REMS is a clinic protocol, not this desk.", "Dissociation, BP, sedation. Watch 2B6 inducers (rifampin, efavirenz)."),
	dextromethorphan: st("NMDA + SERT/NET (via dextrorphan and parent) — 2D6 is the fork", [
		{
			r: "NMDA",
			n: 3
		},
		{
			r: "SERT",
			n: 3
		},
		{
			r: "σ1",
			n: 3
		}
	], "2D6 to dextrorphan (more NMDA). Poor metabolizers and paroxetine/fluoxetine stack parent (more SERT, more serotonin syndrome with MAOIs). Auvelity is bupropion occupying 2D6 on purpose.", "Serotonin syndrome with MAOIs, dissociation at high parent, airway with GABA."),
	memantine: st("Low-affinity NMDA — Alzheimer's labeling, not a K-hole", [{
		r: "NMDA",
		n: 3
	}], "Uncompetitive NMDA at therapeutic occupancy — not ketamine. Renal clearance, not CYP. Still an NMDA on the stack if someone mixes it with DXM or ketamine.", "Dizziness, confusion. Not a recreational map."),
	mdma: st("Entactogen — VMAT2 / SERT reverse-transport, 2D6 victim", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "NET",
			n: 3
		},
		{
			r: "DAT",
			n: 2
		},
		{
			r: "VMAT2",
			n: 4
		}
	], "Not an SSRI. It dumps serotonin (and some DA/NE) via reverse transport. 2D6 plus auto-inhibition. MAOI is a hyperthermia/serotonin-syndrome contraindication, not a 'watch.' SSRIs blunt the dump by occupying SERT first.", "Hyperthermia, hyponatremia, jaw, serotonin syndrome, mid-week crash. Not a dosing protocol."),
	amphetamine: st("Stimulant — VMAT2 / DAT / NET reverse-transport", [
		{
			r: "DAT",
			n: 4
		},
		{
			r: "NET",
			n: 4
		},
		{
			r: "VMAT2",
			n: 4
		}
	], "Releaser, not just a blocker. MAOI is a pressor contraindication. Urinary pH moves excretion on this desk. 2D6 is a minor clearance — the PD is the point.", "Tachycardia, insomnia, appetite, pressor crisis with MAOIs."),
	lisdexamfetamine: st("Prodrug stimulant — lysine-amphetamine, same DAT/NET once cleaved", [{
		r: "DAT",
		n: 4
	}, {
		r: "NET",
		n: 4
	}], "Red blood cell hydrolysis, not CYP activation. Same occupancy as dextroamphetamine after cleavage. MAOI still contraindicated.", "Same stimulant PD, slower dump than IR amphetamine."),
	methylphenidate: st("Stimulant — DAT/NET blocker, not a releaser", [{
		r: "DAT",
		n: 4
	}, {
		r: "NET",
		n: 3
	}], "Cocaine-like occupancy (block, not reverse-transport). CES1, not 2D6. MAOI is still a pressor row. Less of a 5-HT story than MDMA.", "Insomnia, appetite, tics, pressor with MAOIs."),
	methamphetamine: st("Stimulant — hotter DAT/NET/VMAT2 releaser", [
		{
			r: "DAT",
			n: 4
		},
		{
			r: "NET",
			n: 4
		},
		{
			r: "VMAT2",
			n: 4
		}
	], "Same family as amphetamine, more CNS. 2D6 minor. MAOI contraindicated. Street supply is not Desoxyn.", "Hyperthermia, pressor, psychosis, cardio."),
	cocaine: st("Blocker — DAT/NET/SERT plus Nav (the local anesthetic)", [
		{
			r: "DAT",
			n: 4
		},
		{
			r: "NET",
			n: 3
		},
		{
			r: "SERT",
			n: 2
		},
		{
			r: "Nav",
			n: 3
		}
	], "Not a releaser. Nav is why it is a local anesthetic and why wide-complex is a thing. Ethanol makes cocaethylene (PD on this desk). Speedball: stimulant masks the opioid apnea.", "MI, arrhythmia, hyperthermia, crack lung. Not a CYP first."),
	atomoxetine: st("NRI — NET, 2D6 sensitive", [{
		r: "NET",
		n: 4
	}], "Not a stimulant releaser. CPIC trims 2D6 PMs. Suicide-risk warning in youth. MAOI contraindicated.", "GI, BP/HR, sexual, rare liver. PM: slower peak, more parent."),
	modafinil: st("Wake-promoter — weak DAT, 3A4 induction", [{
		r: "DAT",
		n: 2
	}], "Not amphetamine occupancy. Moderate 3A4 induction — OCPs can fail. 2C19 mild inhibition. SJS rare.", "Headache, insomnia, OCP counseling. Not a DAT hammer."),
	psilocybin: st("Tryptamine psychedelic — 5-HT2A (via psilocin)", [{
		r: "5-HT2A",
		n: 4
	}, {
		r: "5-HT1A",
		n: 2
	}], "Prodrug to psilocin. 5-HT2A is the occupancy that correlates with the experience. Not a CYP substrate. Lithium and MAOIs still apply (seizure / serotonin). Set and setting are not this desk.", "Acute anxiety, rare HPPD, lithium-seizure signal. Not a SERT reuptake story."),
	lsd: st("Ergoline psychedelic — 5-HT2A partial", [
		{
			r: "5-HT2A",
			n: 4
		},
		{
			r: "5-HT1A",
			n: 3
		},
		{
			r: "D2",
			n: 1
		}
	], "Long 5-HT2A occupancy. Not a CYP victim. Lithium still a seizure/bad-trip signal. NBOMe sold as LSD is a different, vasoconstrictive map on this desk.", "Acute anxiety, vasoconstriction mild vs NBOMe. Duration is hours."),
	dmt: st("Tryptamine — 5-HT2A, MAO-A first-pass if swallowed", [{
		r: "5-HT2A",
		n: 4
	}], "Gut MAO-A destroys oral DMT — that is why ayahuasca is a harmala + DMT pair. Harmaline on this desk is the MAOI. Not a CYP story.", "Brief intense experience (smoked); oral only with an MAOI — then the serotonin rules apply."),
	"five-meo-dmt": st("Tryptamine — 5-HT1A > 5-HT2A", [{
		r: "5-HT1A",
		n: 4
	}, {
		r: "5-HT2A",
		n: 2
	}], "More 5-HT1A than classic 2A psychedelics. MAOI (toad + harmala, or pharma) is a reported danger zone. Not a CYP substrate.", "Intense, short. MAOI stacking is not a ceremony footnote."),
	dronabinol: st("THC — CB1/CB2 partial, 2C9 then 3A4", [{
		r: "CB1",
		n: 4
	}, {
		r: "CB2",
		n: 3
	}], "Edible first-pass to 11-OH-THC is the 2C9/3A4 trap; smoked mostly skips it. 2C9 PMs make edibles hotter. Fat meals raise oral AUC.", "Anxiety, tachycardia, delayed edible peak. Route is the PK."),
	cannabidiol: st("CBD — low CB1, 2C19/3A4 perpetrator and victim", [{
		r: "CB1",
		n: 1
	}, {
		r: "5-HT1A",
		n: 2
	}], "Not a THC occupancy. 2C19 and 3A4 inhibition can move clobazam (N-desmethyl stacks) and other victims. Epidiolex is the labeled one.", "Somnolence, transaminitis, clobazam levels. Not 'non-psychoactive' next to a 2C19 substrate."),
	ethanol: st("Alcohol — GABA-A up, NMDA down, 2E1 when chronic", [{
		r: "GABA-A",
		n: 4
	}, {
		r: "NMDA",
		n: 3
	}], "Acute: GABA occupancy and NMDA block — airway with opioids, benzos, GHB, xylazine. Chronic: 2E1 induction, NAPQI from acetaminophen. Cocaethylene with cocaine is PD on this desk.", "Withdrawal seizures, Wernicke, airway. Not a CYP substrate in the usual sense — a perpetrator and a PD."),
	"sodium-oxybate": st("GHB — GABA-B, steep dose-response", [{
		r: "GABA-B",
		n: 4
	}], "The same receptor family as baclofen, much steeper. Alcohol and benzos and opioids are apnea. REMS for narcolepsy is a clinic protocol. GBL/1,4-BD are prodrugs on this desk.", "Coma, vomit, amnesia, airway. Not a drink."),
	baclofen: st("GABA-B agonist — muscle, not a GHB analog in milligrams", [{
		r: "GABA-B",
		n: 4
	}], "Same receptor, clinical doses. Withdrawal can seize. Renal clearance. Still CNS with other depressants.", "Sedation, withdrawal seizures on abrupt stop. Not a party GHB."),
	gabapentin: st("Gabapentinoid — α2δ, not GABA-A", [{
		r: "α2δ",
		n: 4
	}], "Does not occupy the BZ site. Still an airway extra on an opioid — the MAT board treats it as such. Renal clearance, not CYP. Not a free 'nerve pain' on methadone.", "Sedation, edema, respiratory depression with opioids. Renal dose."),
	pregabalin: st("Gabapentinoid — α2δ, cleaner absorption than gabapentin", [{
		r: "α2δ",
		n: 4
	}], "Same family, more bioavailable. Same opioid airway. Renal, not CYP.", "Sedation, euphoria reports, airway with opioids."),
	buprenorphine: st("Partial μ — high affinity, ceiling, 3A4", [{
		r: "μ",
		n: 4
	}, {
		r: "κ",
		n: 3
	}], "Occupies μ so a full agonist cannot. That is precipitated withdrawal, not stacked milligrams — the MAT finding on this desk. 3A4 victim. Naloxone in the film is a diversion deterrent, not the occupancy.", "Precipitated withdrawal on a fentanyl load, QT quieter than methadone, 3A4 inducers look like a failing film."),
	naltrexone: st("μ antagonist — occupancy is the product", [{
		r: "μ",
		n: 4
	}, {
		r: "κ",
		n: 3
	}], "The shot occupies μ for weeks. Leftover fentanyl is precipitated withdrawal and blocked analgesia, not a failed injection. Oral is shorter occupancy. Not a CYP story.", "Precipitated withdrawal if agonist remains. Hepatotoxicity at high dose. Blocked analgesia in a trauma bay."),
	naloxone: st("μ antagonist — short occupancy, not α2", [{
		r: "μ",
		n: 4
	}], "Reverses μ. Will not reverse xylazine, lofexidine, clonidine, or a benzo. Repeat dosing because fentanyl outlasts it. Not a CYP victim.", "Precipitated withdrawal. α2 and GABA apnea keep going."),
	methadone: st("Full μ — long occupancy, 3A4/2B6, known QT", [{
		r: "μ",
		n: 4
	}, {
		r: "NMDA",
		n: 2
	}], "Long μ plus some NMDA. Inducers look like a stolen dose; azoles look like a nod plus TdP. Vistaril and Zofran are QT extras, not free. Partial agonist on top is precipitated withdrawal.", "TdP, delayed overdose (peak is late), airway with benzos/gabapentinoids."),
	morphine: st("Full μ — UGT to M3G/M6G, not CYP", [{
		r: "μ",
		n: 4
	}], "Glucuronides, not 2D6. Codeine is the 2D6 prodrug into this occupancy. PD with benzos and alcohol is the airway. Renal M6G in impairment.", "Respiratory depression, histamine flush, renal metabolite in CKD."),
	oxycodone: st("Full μ — 3A4 clearance, 2D6 to oxymorphone", [{
		r: "μ",
		n: 4
	}], "3A4 is the main clearance (noroxycodone). 2D6 makes oxymorphone. Percocet is this plus APAP — chronic alcohol is NAPQI. Pressed M30 is not this row.", "Airway, 3A4 inhibitors raise parent. APAP hepatotoxicity in the combo."),
	fentanyl: st("Full μ — sensitive 3A4, high affinity, short IV / long patch", [{
		r: "μ",
		n: 4
	}], "3A4 victim. Buprenorphine on a fentanyl load is occupancy conflict. Street fentanyl ± xylazine is the α2 extra naloxone will not reverse.", "Apnea, chest wall, delayed patch absorption. Naloxone may need repeats."),
	tramadol: st("μ (via M1) plus SNRI parent — 2D6 fork", [
		{
			r: "μ",
			n: 3
		},
		{
			r: "SERT",
			n: 3
		},
		{
			r: "NET",
			n: 3
		}
	], "Parent is SNRI; 2D6 makes O-desmethyltramadol (μ). PMs lose opioid, keep seizure/serotonin. MAOI contraindicated. Not a 'weak Vicodin.'", "Seizure, serotonin syndrome, airway. CPIC: avoid in UM and PM."),
	tapentadol: st("μ plus NET — UGT, not 2D6", [{
		r: "μ",
		n: 4
	}, {
		r: "NET",
		n: 3
	}], "The 'tramadol without 2D6.' Parent is the opioid and the NRI. MAOI and serotonergics still stack. UGT2B7.", "Airway, seizure, serotonin. Not a CYP activation story."),
	kratom: st("Mitragynine — mixed μ / adrenergic; 7-OH is the hot μ", [{
		r: "μ",
		n: 3
	}, {
		r: "α",
		n: 2
	}], "Tea vs tablet. 7-OH (separate row) is a hot μ-agonist. 3A4. Next to buprenorphine the 7-OH tablet is occupancy conflict. Not a vitamin.", "Dependence, airway with benzos, 3A4 inhibitors raise exposure."),
	"seven-oh": st("7-Hydroxymitragynine — hot μ, not a leaf", [{
		r: "μ",
		n: 4
	}], "Much hotter than mitragynine. Street 7-OH is an opioid map. 3A4. Buprenorphine is precipitated withdrawal / blocked high, not stacked milligrams.", "Respiratory depression, benzo airway, occupancy conflict with Suboxone."),
	tianeptine: st("μ agonist at high dose — not an SSRI despite the old story", [{
		r: "μ",
		n: 4
	}], "Labeled as an atypical antidepressant in some countries. The gas-station milligrams are μ. Airway and dependence. Not a SERT occupancy.", "Withdrawal, apnea, not a 'supplement.'"),
	xylazine: st("Veterinary α2 — naloxone will not reverse it", [{
		r: "α2",
		n: 4
	}], "Same family as clonidine, lofexidine, dexmedetomidine. μ reversal leaves the α2 apnea and bradycardia. Skin wounds are a separate tox. Not a CYP substrate.", "Bradycardia, hypotension, unresponsiveness naloxone does not fix. Pair the opioid separately."),
	clonidine: st("α2 agonist — rebound hypertension, stacked airway", [{
		r: "α2",
		n: 4
	}], "Clinical cousin of xylazine at different milligrams. Naloxone will not reverse it. Abrupt stop is a pressor. Still used for opioid withdrawal when lofexidine is not on the shelf.", "Sedation, dry mouth, rebound HTN, airway with opioids."),
	lofexidine: st("α2 — Lucemyra, 2D6 victim", [{
		r: "α2",
		n: 4
	}], "FDA-labeled for opioid withdrawal. Same naloxone-will-not-reverse family. Paroxetine/fluoxetine raise bradycardia via 2D6.", "Bradycardia, hypotension, QTc. 2D6 PMs and inhibitors."),
	prazosin: st("α1 blocker — PTSD nightmares, first-dose syncope", [{
		r: "α1",
		n: 4
	}], "Occupies α1, not NMDA, not SERT. Alcohol and PDE5 stack the orthostasis. Not a CYP row. Nightmares dose still drops standing BP.", "First-dose syncope, nasal congestion, reflex tachycardia."),
	varenicline: st("Partial α4β2 nicotinic — occupancy that blunts a cigarette", [{
		r: "nAChR α4β2",
		n: 4
	}], "Sits on the receptor so nicotine cannot. Not a CYP perpetrator. Neuropsychiatric warning is quieter than the original scare, still counsel. Alcohol sensitivity in some.", "Nausea, vivid dreams, rare mood signal. Not bupropion's 2D6."),
	nicotine: st("nAChR agonist — 1A2 induction is the smoke, not the gum", [{
		r: "nAChR",
		n: 4
	}], "The patch does not induce 1A2. Combusted smoke (PAHs) does — clozapine and olanzapine fall. Occupancy is addiction and withdrawal; the desk maps the smoke.", "Withdrawal, vivid dreams (patch). CYP story is combustion."),
	donepezil: st("AChE inhibitor — more acetylcholine in the cleft", [{
		r: "AChE",
		n: 4
	}], "Opposite of the anticholinergic piano. 2D6/3A4. GI cholinergic. Syncope from vagal tone. Not a NMDA drug (that is memantine).", "Nausea, bradycardia, insomnia, vivid dreams."),
	vortioxetine: st("Multimodal — SERT plus 5-HT1A agonist, 5-HT3 antagonist", [
		{
			r: "SERT",
			n: 4
		},
		{
			r: "5-HT1A",
			n: 3
		},
		{
			r: "5-HT3",
			n: 3
		},
		{
			r: "5-HT7",
			n: 2
		}
	], "SSRI occupancy plus receptor extras. 2D6 — CPIC max 10 mg in PMs. MAOI still contraindicated. Nausea from 5-HT.", "Nausea, sexual still possible. 2D6 PM ceiling."),
	vilazodone: st("SPAR — SERT plus 5-HT1A partial, 3A4", [{
		r: "SERT",
		n: 4
	}, {
		r: "5-HT1A",
		n: 3
	}], "Take with food. Strong 3A4 inhibitors raise it. MAOI contraindicated. Not a 'buspirone plus SSRI' to stack freely — it is both occupancies in one molecule.", "GI, insomnia, 3A4 victim."),
	ramelteon: st("MT1/MT2 agonist — 1A2 sensitive", [{
		r: "MT1",
		n: 4
	}, {
		r: "MT2",
		n: 4
	}], "Not GABA. Fluvoxamine (strong 1A2 inhibitor) is labeled contraindicated. No opioid airway from GABA — still CNS with other sedatives.", "Somnolence. 1A2 is the trap, not 3A4."),
	suvorexant: st("Dual orexin antagonist — 3A4 sensitive", [{
		r: "OX1",
		n: 4
	}, {
		r: "OX2",
		n: 4
	}], "Turns wake signaling down rather than turning GABA up. Strong 3A4 inhibitors are not recommended. Still CNS with alcohol.", "Next-day impairment, sleep paralysis, 3A4 victim."),
	lemborexant: st("Dual orexin antagonist — sensitive 3A4", [{
		r: "OX1",
		n: 4
	}, {
		r: "OX2",
		n: 4
	}], "Same superfamily as suvorexant, sensitive 3A4. Not a benzo occupancy.", "Sedation, 3A4 inhibitors not recommended."),
	melatonin: st("Pineal hormone — MT1/MT2, 1A2 victim", [{
		r: "MT1",
		n: 4
	}, {
		r: "MT2",
		n: 3
	}], "1A2 substrate — fluvoxamine and ciprofloxacin raise it. Not a GABA hypnotic. Formulation-dependent dose is a mess.", "Vivid dreams, next-day fog at high dose. 1A2 inhibitors make it hotter."),
	acamprosate: st("NMDA / GABA modulator — alcohol MAT, renal, quiet CYP", [{
		r: "NMDA",
		n: 2
	}, {
		r: "GABA",
		n: 2
	}], "The pair with naltrexone should stay CYP/PD quiet on this desk — that is the teaching. Renal dose. Not disulfiram's ALDH.", "Diarrhea, renal adjustment. Not a deterrent reaction."),
	disulfiram: st("ALDH inhibitor — occupancy is acetaldehyde", [{
		r: "ALDH",
		n: 4
	}], "Ethanol on this occupancy is the reaction: flush, nausea, hypotension. Metronidazole is a debated cousin. Not naltrexone's μ block.", "Hepatotoxicity, neuropathy, the reaction itself. Wait for alcohol to clear before the first tablet.")
};
function stahlFor(id) {
	return STAHL[id] ?? null;
}
function hasStahl(id) {
	return Boolean(STAHL[id]);
}
Object.keys(STAHL);
var TDM = {
	lithium: {
		analyte: "Lithium",
		unit: "mEq/L",
		trough: "0.6–1.2 (maintenance often 0.6–0.8)",
		toxic: ">1.5; severe >2.0",
		draw: "Trough ~12 h after the last dose",
		pearl: "NSAID, ACEI/ARB, and thiazides raise the level. Salt restriction retains it; caffeine dumps it. CKD is a TDM problem, not a CYP one."
	},
	valproate: {
		analyte: "Valproate",
		unit: "µg/mL",
		trough: "50–100 (mania sometimes higher)",
		toxic: ">150; hyperammonemia can happen inside the range",
		draw: "Trough before the morning dose",
		pearl: "UGT trap with lamotrigine — parent lamotrigine doubles. Boxed hepatotoxicity and pancreatitis. Not a first-line in people who can become pregnant."
	},
	carbamazepine: {
		analyte: "Carbamazepine",
		unit: "µg/mL",
		trough: "4–12",
		toxic: ">15; hyponatremia can happen inside the range",
		draw: "Trough; autoinduction over the first weeks",
		pearl: "Strong 3A4 inducer. HLA-B*15:02 is the SJS gene. OCP failure and stolen methadone live on the same card."
	},
	phenytoin: {
		analyte: "Phenytoin",
		unit: "µg/mL",
		trough: "10–20 total (free 1–2)",
		toxic: "Nystagmus ~20; ataxia ~30; lethargy ~40",
		draw: "Trough; correct for albumin",
		pearl: "Saturable 2C9/2C19 kinetics. Tube feeds bind it. A 2C9 PM looks like a dose that never settled."
	},
	phenobarbital: {
		analyte: "Phenobarbital",
		unit: "µg/mL",
		trough: "15–40",
		toxic: ">40 sedation; >60 often toxic",
		draw: "Trough; t½ is days — do not chase yesterday",
		pearl: "Pan-CYP inducer. Primidone is the prodrug. OCP failure is the quiet row."
	},
	lamotrigine: {
		analyte: "Lamotrigine",
		unit: "µg/mL",
		trough: "3–15 (lab-dependent)",
		toxic: "Rash is not a level — SJS is the titration",
		draw: "Trough; pregnancy clearance rises",
		pearl: "Valproate doubles parent via UGT. Estrogen dumps it. The boxed warning is the rash, not the number."
	},
	digoxin: {
		analyte: "Digoxin",
		unit: "ng/mL",
		trough: "0.5–0.9 in HFrEF (older 0.8–2.0 AF range is too hot)",
		toxic: ">2; toxicity at ‘normal’ if K is low",
		draw: "≥6 h after a dose; 8–24 h is cleaner",
		pearl: "P-gp victim. Clarithromycin, amiodarone, and verapamil raise it. Hypokalemia is the arrhythmia trap."
	},
	clozapine: {
		analyte: "Clozapine",
		unit: "ng/mL",
		trough: "350–600 (response often ≥350)",
		toxic: ">1000 seizure / sedation watch",
		draw: "Trough; norclozapine is the metabolite column",
		pearl: "1A2 is the clearance. Daily smoke dumps the level; quitting makes it jump. Fluvoxamine is a strong 1A2 inhibitor — parent climbs."
	},
	nortriptyline: {
		analyte: "Nortriptyline",
		unit: "ng/mL",
		trough: "50–150",
		toxic: ">500; anticholinergic / QT inside a hot range",
		draw: "Trough after ≥5 days",
		pearl: "2D6 victim. A PM or a strong 2D6 inhibitor (paroxetine, fluoxetine, bupropion) is how the TCA level surprises you."
	},
	amitriptyline: {
		analyte: "Amitriptyline + nortriptyline",
		unit: "ng/mL",
		trough: "80–200 combined (lab-dependent)",
		toxic: ">500; QT and anticholinergic",
		draw: "Trough after ≥5 days",
		pearl: "2D6 and 2C19 both sit on this molecule. CPIC trims the PM. Not a free sleep drug in older adults."
	},
	theophylline: {
		analyte: "Theophylline",
		unit: "µg/mL",
		trough: "10–20 (many labs now 5–15)",
		toxic: ">20 GI/CNS; >30 arrhythmia / seizure",
		draw: "Trough; peak 1–2 h after an IR dose",
		pearl: "Sensitive 1A2 substrate. Cipro and fluvoxamine raise it; smoke dumps it. The rebound on quit is the miss."
	},
	tacrolimus: {
		analyte: "Tacrolimus",
		unit: "ng/mL",
		trough: "5–15 (indication and time from transplant)",
		toxic: "Nephrotoxicity, tremor, hyperglycemia as trough climbs",
		draw: "Trough (C0) just before the morning dose",
		pearl: "Sensitive 3A4 / P-gp gut victim. Grapefruit and azoles raise F; rifampin steals the graft. t½ barely moves — it is bioavailability."
	},
	cyclosporine: {
		analyte: "Cyclosporine",
		unit: "ng/mL",
		trough: "100–400 (center protocol)",
		toxic: "Nephrotoxicity, HTN, gum, tremor",
		draw: "C0 or C2 per the transplant desk",
		pearl: "Same 3A4/P-gp gut story as tacrolimus. Diltiazem is sometimes used as a deliberate booster — that is a protocol, not a coincidence."
	},
	sirolimus: {
		analyte: "Sirolimus",
		unit: "ng/mL",
		trough: "4–12 (center protocol)",
		toxic: "Marrow, lipids, delayed wound healing",
		draw: "Trough; t½ is long — do not redraw tomorrow",
		pearl: "3A4/P-gp. Cyclosporine raises sirolimus if you stack them the wrong hour."
	},
	methotrexate: {
		analyte: "Methotrexate",
		unit: "µmol/L (high-dose) or nmol/L (weekly)",
		trough: "High-dose: follow the rescue nomogram, not a single number",
		toxic: "Mucositis, marrow, kidney — leucovorin is the rescue",
		draw: "Timed levels after high-dose; weekly RA doses are not this row",
		pearl: "NSAID, TMP-SMX, and PPI delay clearance. This is not a CYP story."
	},
	warfarin: {
		analyte: "INR",
		unit: "",
		trough: "2–3 most indications (2.5–3.5 mechanical mitral)",
		toxic: "Bleed climbs as INR climbs; 4–5 is a hold conversation",
		draw: "Morning INR; vitamin K is the antidote",
		pearl: "S-warfarin is a sensitive 2C9 substrate. Fluconazole, TMP-SMX, and amiodarone are the classic perpetrators. Leafy greens are vitamin K, not 2C9."
	}
};
function tdmOnDesk(ids) {
	return ids.map((id) => ({
		id,
		card: TDM[id]
	})).filter((row) => Boolean(row.card));
}
function tdmHostNote(id, host) {
	if (id === "lithium" && host.kidney === "ckd") return "CKD on this host — lithium is renally cleared. The trough will drift up.";
	if (id === "digoxin" && host.kidney === "ckd") return "CKD on this host — digoxin clearance falls. Recheck the trough, not just the milligrams.";
	if (id === "lithium" && host.age === "geriatric") return "Geriatric host — smaller Vd and GFR. Toxicity can sit inside a ‘therapeutic’ number.";
	if (id === "clozapine" && host.smoking) return "Daily smoke on this host — 1A2 induction. Expect a lower trough; quitting will raise it.";
	if (id === "theophylline" && host.smoking) return "Smoke induces 1A2. Theophylline falls; the quit rebound is the toxicity.";
	if (id === "phenytoin" && host.preg === "pregnant") return "Pregnancy — clearance and albumin both move. Free phenytoin is the honest number.";
	if (id === "lamotrigine" && host.preg === "pregnant") return "Pregnancy raises lamotrigine clearance. Levels fall unless you titrate.";
	if (id === "valproate" && host.preg === "pregnant") return "Valproate is avoid in pregnancy on this desk — neural-tube and cognitive risk, not a TDM tweak.";
	return null;
}
function hasTdm(id) {
	return Boolean(TDM[id]);
}
/** Oral MME factor unless noted. Methadone is dose-banded — use methadoneFactor(). */
var MME_FACTOR = {
	morphine: {
		id: "morphine",
		factor: 1,
		unit: "mg/day oral",
		hint: "The reference opioid."
	},
	hydrocodone: {
		id: "hydrocodone",
		factor: 1,
		unit: "mg/day oral",
		hint: "Norco / Vicodin. Same factor as morphine."
	},
	oxycodone: {
		id: "oxycodone",
		factor: 1.5,
		unit: "mg/day oral",
		hint: "Percocet milligrams × 1.5. Pressed 30s are not this row."
	},
	oxymorphone: {
		id: "oxymorphone",
		factor: 3,
		unit: "mg/day oral",
		hint: "Opana. Three times morphine milligram-for-milligram oral."
	},
	hydromorphone: {
		id: "hydromorphone",
		factor: 5,
		unit: "mg/day oral",
		hint: "Dilaudid. Oral factor 5. IV is a different map."
	},
	codeine: {
		id: "codeine",
		factor: .15,
		unit: "mg/day oral",
		hint: "2D6 activation to morphine. A PM gets almost no MME; a UM gets a surprise."
	},
	tramadol: {
		id: "tramadol",
		factor: .2,
		unit: "mg/day oral",
		hint: "Weak μ plus SNRI. MME undercounts the serotonin / seizure row."
	},
	tapentadol: {
		id: "tapentadol",
		factor: .4,
		unit: "mg/day oral",
		hint: "Nucynta. Stronger μ than tramadol, still not morphine."
	},
	meperidine: {
		id: "meperidine",
		factor: .1,
		unit: "mg/day oral",
		hint: "Demerol. Normeperidine seizures. Do not chase MME on this relic."
	},
	methadone: {
		id: "methadone",
		factor: null,
		unit: "mg/day oral",
		hint: "Dose-banded. 1–20 mg ×4, 21–40 ×8, 41–60 ×10, ≥61 ×12. OTP is not this calculator.",
		note: "CDC bands. Incomplete for a take-home. QT and t½ are the louder rows."
	},
	fentanyl: {
		id: "fentanyl",
		factor: null,
		unit: "mcg/hr patch or unknown street mg",
		hint: "Patch factor is 2.4 × mcg/hr. Illicit powder is not milligram-morphine.",
		note: "Street fentanyl is potency roulette. Treat as unknown, not a 50 MME assumption."
	},
	"dirty-30": {
		id: "dirty-30",
		factor: null,
		unit: "unknown",
		hint: "Stamped 30 ≠ 30 mg oxycodone. Fentanyl ± xylazine ± a nitazene."
	},
	"pressed-30": {
		id: "pressed-30",
		factor: null,
		unit: "unknown",
		hint: "Same as dirty 30. Do not convert a stamp to MME."
	},
	heroin: {
		id: "heroin",
		factor: null,
		unit: "unknown",
		hint: "Diacetylmorphine. Street mass is not a milligram."
	},
	buprenorphine: {
		id: "buprenorphine",
		factor: null,
		unit: "mg/day SL",
		hint: "Partial agonist. CDC does not convert MOUD bup to MME the same way.",
		note: "Occupancy, not morphine. Precipitated withdrawal is the induction row."
	},
	carfentanil: {
		id: "carfentanil",
		factor: null,
		unit: "unknown",
		hint: "Veterinary. Not MME-able. Naloxone still, then a long watch."
	},
	isotonitazene: {
		id: "isotonitazene",
		factor: null,
		unit: "unknown",
		hint: "Nitazene. Often hotter than fentanyl. Not a conversion."
	},
	protonitazene: {
		id: "protonitazene",
		factor: null,
		unit: "unknown",
		hint: "Nitazene. Unknown potency. Naloxone, then the residual."
	},
	metonitazene: {
		id: "metonitazene",
		factor: null,
		unit: "unknown",
		hint: "Nitazene. Not MME-able."
	},
	etonitazene: {
		id: "etonitazene",
		factor: null,
		unit: "unknown",
		hint: "Nitazene. Not MME-able."
	},
	"seven-oh": {
		id: "seven-oh",
		factor: null,
		unit: "unknown",
		hint: "7-OH-mitragynine. μ load that is not a morphine tablet."
	},
	loperamide: {
		id: "loperamide",
		factor: null,
		unit: "mg (P-gp knockout)",
		hint: "Imodium is peripheral until P-gp is knocked out. Then it is a central opioid with QT. Not CDC MME."
	}
};
function methadoneFactor(mgPerDay) {
	if (!Number.isFinite(mgPerDay) || mgPerDay <= 0) return 4;
	if (mgPerDay <= 20) return 4;
	if (mgPerDay <= 40) return 8;
	if (mgPerDay <= 60) return 10;
	return 12;
}
function fentanylPatchMme(mcgPerHr) {
	if (!Number.isFinite(mcgPerHr) || mcgPerHr <= 0) return null;
	return mcgPerHr * 2.4;
}
function mmeOnDesk(ids) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const id of ids) {
		const card = MME_FACTOR[id];
		if (!card || seen.has(id)) continue;
		seen.add(id);
		out.push(card);
	}
	return out;
}
function sub(enzyme, sensitivity, pathway = "clearance", nti = false) {
	return {
		enzyme,
		kind: "substrate",
		sensitivity,
		pathway,
		nti
	};
}
function inh(enzyme, strength) {
	return {
		enzyme,
		kind: "inhibitor",
		strength
	};
}
function ind(enzyme, strength) {
	return {
		enzyme,
		kind: "inducer",
		strength
	};
}
function d(id, name, brands, cls, enzymes, pd, toxicityHint, extra) {
	return {
		id,
		name,
		brands,
		cls,
		aliases: extra?.aliases ?? [],
		enzymes,
		pd,
		toxicityHint,
		note: extra?.note,
		kind: extra?.kind ?? "drug"
	};
}
var raw = [
	d("clarithromycin", "Clarithromycin", ["Biaxin"], "Macrolide antibiotic", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "strong"),
		inh("P-gp", "moderate")
	], ["qt-possible"], "QT prolongation, CYP3A4 perpetrator toxicity"),
	d("erythromycin", "Erythromycin", ["Ery-Tab"], "Macrolide antibiotic", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate")
	], ["qt-possible"], "QT prolongation"),
	d("azithromycin", "Azithromycin", ["Zithromax", "Z-Pak"], "Macrolide antibiotic", [], ["qt-possible"], "QT prolongation", { note: "Minimal CYP3A4 inhibition unlike other macrolides. Next to methadone it still stacks QT — not a free Z-Pak." }),
	d("ciprofloxacin", "Ciprofloxacin", ["Cipro"], "Fluoroquinolone", [inh("CYP1A2", "strong"), inh("CYP3A4", "weak")], ["qt-possible", "seizure-lowering"], "QT, CNS stimulation, 1A2 victim toxicity", { note: "Strong 1A2 inhibitor (tizanidine is the labeled victim). Weak 3A4 plus QT. Herrlin 2000: Cipro next to methadone caused sedation and respiratory depression — not a free UTI pill on the OTP." }),
	d("levofloxacin", "Levofloxacin", ["Levaquin"], "Fluoroquinolone", [], ["qt-possible", "seizure-lowering"], "QT prolongation"),
	d("moxifloxacin", "Moxifloxacin", ["Avelox"], "Fluoroquinolone", [], ["qt-known"], "QT prolongation"),
	d("metronidazole", "Metronidazole", ["Flagyl"], "Nitroimidazole", [inh("CYP2C9", "weak")], ["seizure-lowering"], "Disulfiram-like reaction, neuropathy", { note: "2C9 inhibition is modest and debated; still flagged with warfarin." }),
	d("fluconazole", "Fluconazole", ["Diflucan"], "Azole antifungal", [
		sub("CYP3A4", "minor"),
		inh("CYP2C9", "strong"),
		inh("CYP2C19", "strong"),
		inh("CYP3A4", "moderate")
	], ["qt-possible"], "QT, elevated victim-drug levels"),
	d("ketoconazole", "Ketoconazole", ["Nizoral"], "Azole antifungal", [
		inh("CYP3A4", "strong"),
		inh("P-gp", "strong"),
		inh("CYP2C19", "moderate")
	], ["qt-possible", "hepatotoxic"], "Hepatotoxicity, endocrine effects, victim-drug toxicity"),
	d("itraconazole", "Itraconazole", ["Sporanox"], "Azole antifungal", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "strong"),
		inh("P-gp", "strong")
	], ["hepatotoxic"], "Heart failure exacerbation, victim-drug toxicity"),
	d("voriconazole", "Voriconazole", ["Vfend"], "Azole antifungal", [
		sub("CYP2C19", "major"),
		sub("CYP3A4", "major"),
		inh("CYP3A4", "strong"),
		inh("CYP2C9", "moderate"),
		inh("CYP2C19", "moderate")
	], ["qt-possible", "hepatotoxic"], "Visual disturbance, hepatotoxicity, victim-drug toxicity"),
	d("rifampin", "Rifampin", ["Rifadin"], "Rifamycin", [
		ind("CYP3A4", "strong"),
		ind("CYP2C9", "strong"),
		ind("CYP2C19", "strong"),
		ind("CYP2B6", "strong"),
		ind("CYP1A2", "moderate"),
		ind("CYP2C8", "moderate"),
		ind("P-gp", "strong")
	], ["hepatotoxic"], "Loss of victim-drug efficacy, hepatotoxicity", { aliases: ["rifampicin"] }),
	d("linezolid", "Linezolid", ["Zyvox"], "Oxazolidinone", [], ["serotonergic", "maoi"], "Serotonin syndrome, myelosuppression", { note: "Reversible nonselective MAO inhibition." }),
	d("tmp-smx", "Trimethoprim–sulfamethoxazole", ["Bactrim", "Septra"], "Sulfonamide antibiotic", [inh("CYP2C9", "moderate"), inh("CYP2C8", "moderate")], ["k-sparing", "nephrotoxic"], "Hyperkalemia, marrow suppression, INR rise", { aliases: [
		"bactrim",
		"cotrimoxazole",
		"sulfamethoxazole"
	] }),
	d("isoniazid", "Isoniazid", ["Nydrazid"], "Antimycobacterial", [
		inh("CYP2C19", "moderate"),
		inh("CYP3A4", "weak"),
		inh("CYP2D6", "weak"),
		inh("CYP2E1", "weak")
	], ["hepatotoxic", "seizure-lowering"], "Hepatitis, neuropathy", {
		aliases: ["inh"],
		note: "Latent TB is common on OTP boards. Weak 3A4 inhibition can nudge methadone; the louder stories are INH hepatitis next to alcohol, rifampin dumping methadone, and tuna/mackerel (diamine oxidase) — search histamine fish."
	}),
	d("ritonavir", "Ritonavir", ["Norvir"], "HIV protease inhibitor / booster", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "strong"),
		inh("CYP2D6", "moderate"),
		inh("P-gp", "strong"),
		ind("CYP2B6", "moderate"),
		ind("CYP1A2", "moderate"),
		ind("CYP2C9", "weak")
	], [], "Victim-drug toxicity via 3A4/P-gp; methadone may fall", {
		aliases: ["norvir"],
		note: "Strong 3A4/P-gp inhibition raises fentanyl (Olkkola: clearance −67%). Steady-state ritonavir dumps methadone anyway (Kharasch) — watch OTP withdrawal, not nod. Paxlovid is the five-day version of this booster."
	}),
	d("paxlovid", "Paxlovid (nirmatrelvir/ritonavir)", ["Paxlovid"], "COVID-19 antiviral (ritonavir-boosted)", [
		inh("CYP3A4", "strong"),
		inh("P-gp", "strong"),
		ind("CYP2B6", "moderate")
	], [], "Fentanyl/oxycodone airway; methadone withdrawal", {
		aliases: [
			"nirmatrelvir",
			"nirmatrelvir/ritonavir",
			"paxlovid"
		],
		note: "Five-day ritonavir boost. Fentanyl, oxycodone, and hydrocodone rise — airway. Methadone often falls (2B6/UGT) — watch withdrawal at the window, not sedation. Not a dosing protocol. Search ritonavir for the chronic HIV booster."
	}),
	d("nevirapine", "Nevirapine", ["Viramune"], "NNRTI antiretroviral", [
		sub("CYP3A4", "major"),
		ind("CYP3A4", "moderate"),
		ind("CYP2B6", "moderate")
	], ["hepatotoxic"], "Methadone withdrawal; hepatotoxicity", {
		aliases: ["viramune"],
		note: "Classic OTP stolen-dose NNRTI, like efavirenz. 3A4/2B6 induction. Watch withdrawal 1–2 weeks in; hepatotoxicity is a separate row."
	}),
	d("cobicistat", "Cobicistat", ["Tybost"], "PK booster", [
		inh("CYP3A4", "strong"),
		inh("CYP2D6", "weak"),
		inh("P-gp", "strong")
	], [], "Victim-drug toxicity via 3A4", {
		aliases: ["tybost", "pk booster"],
		note: "The modern ritonavir-like booster in Genvoya, Prezcobix, Evotaz. Strong 3A4/P-gp inhibition raises buprenorphine and many 3A4 victims. Unlike ritonavir it does not induce 2B6 — methadone parent climbs, it does not fall. Tybost is not Norvir on an OTP board."
	}),
	d("warfarin", "Warfarin", ["Coumadin", "Jantoven"], "Vitamin K antagonist", [
		sub("CYP2C9", "sensitive", "clearance", true),
		sub("CYP3A4", "minor"),
		sub("CYP1A2", "minor")
	], ["anticoagulant"], "Bleeding / high INR", { note: "S-warfarin (more potent) is a sensitive CYP2C9 substrate; R-warfarin uses 1A2/3A4." }),
	d("apixaban", "Apixaban", ["Eliquis"], "Direct oral anticoagulant", [sub("CYP3A4", "major"), sub("P-gp", "major")], ["anticoagulant"], "Bleeding or loss of anticoagulation"),
	d("rivaroxaban", "Rivaroxaban", ["Xarelto"], "Direct oral anticoagulant", [sub("CYP3A4", "major"), sub("P-gp", "major")], ["anticoagulant"], "Bleeding or loss of anticoagulation"),
	d("dabigatran", "Dabigatran", ["Pradaxa"], "Direct thrombin inhibitor", [sub("P-gp", "sensitive")], ["anticoagulant"], "Bleeding or loss of anticoagulation"),
	d("clopidogrel", "Clopidogrel", ["Plavix"], "P2Y12 inhibitor", [
		sub("CYP2C19", "sensitive", "activation"),
		sub("CYP3A4", "minor", "activation"),
		inh("CYP2C8", "moderate")
	], ["antiplatelet"], "Loss of antiplatelet effect or bleeding", { note: "Prodrug. Bioactivation is CYP2C19-dependent; omeprazole/esomeprazole blunt it." }),
	d("aspirin", "Aspirin", ["Bayer", "Ecotrin"], "Antiplatelet / NSAID", [], [
		"antiplatelet",
		"nsaid",
		"nephrotoxic"
	], "Bleeding, GI ulcer, renal injury"),
	d("atorvastatin", "Atorvastatin", ["Lipitor"], "Statin", [sub("CYP3A4", "major")], ["statin", "hepatotoxic"], "Myopathy / rhabdomyolysis"),
	d("simvastatin", "Simvastatin", ["Zocor"], "Statin", [sub("CYP3A4", "sensitive")], ["statin", "hepatotoxic"], "Myopathy / rhabdomyolysis", { note: "Sensitive 3A4 substrate. Strong 3A4 inhibitors are contraindicated." }),
	d("lovastatin", "Lovastatin", ["Mevacor"], "Statin", [sub("CYP3A4", "sensitive")], ["statin", "hepatotoxic"], "Myopathy / rhabdomyolysis"),
	d("rosuvastatin", "Rosuvastatin", ["Crestor"], "Statin", [sub("CYP2C9", "minor")], ["statin", "hepatotoxic"], "Myopathy / rhabdomyolysis", { note: "Limited CYP clearance; OATP1B1 interactions dominate." }),
	d("pravastatin", "Pravastatin", ["Pravachol"], "Statin", [], ["statin"], "Myopathy", { note: "Not a CYP3A4 substrate — often the switch when 3A4 is blocked." }),
	d("gemfibrozil", "Gemfibrozil", ["Lopid"], "Fibrate", [inh("CYP2C8", "strong"), inh("CYP2C9", "moderate")], ["fibrate"], "Myopathy with statins, hypoglycemia with repaglinide"),
	d("amlodipine", "Amlodipine", ["Norvasc"], "Dihydropyridine CCB", [sub("CYP3A4", "major")], [], "Hypotension, edema"),
	d("diltiazem", "Diltiazem", ["Cardizem", "Tiazac"], "Non-DHP CCB", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate")
	], ["ndhp-ccb", "bradycardic"], "Bradycardia, AV block, hypotension"),
	d("verapamil", "Verapamil", ["Calan", "Isoptin"], "Non-DHP CCB", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "moderate"),
		inh("P-gp", "strong")
	], ["ndhp-ccb", "bradycardic"], "Bradycardia, AV block, hypotension"),
	d("metoprolol", "Metoprolol", ["Lopressor", "Toprol-XL"], "Beta blocker", [sub("CYP2D6", "major")], ["beta-blocker", "bradycardic"], "Bradycardia, heart block, hypotension"),
	d("carvedilol", "Carvedilol", ["Coreg"], "Beta / alpha blocker", [sub("CYP2D6", "major"), sub("CYP2C9", "minor")], [
		"beta-blocker",
		"alpha-blocker",
		"bradycardic"
	], "Bradycardia, hypotension"),
	d("propranolol", "Propranolol", ["Inderal"], "Beta blocker", [sub("CYP2D6", "major"), sub("CYP1A2", "major")], ["beta-blocker", "bradycardic"], "Bradycardia, bronchospasm"),
	d("amiodarone", "Amiodarone", ["Pacerone", "Cordarone"], "Class III antiarrhythmic", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "moderate"),
		inh("CYP2C9", "moderate"),
		inh("CYP2D6", "weak"),
		inh("CYP1A2", "moderate"),
		inh("P-gp", "moderate")
	], [
		"qt-known",
		"bradycardic",
		"hepatotoxic"
	], "TdP, bradycardia, thyroid/liver/lung toxicity", { note: "Inhibition accumulates over weeks; interactions persist after stopping." }),
	d("sotalol", "Sotalol", ["Betapace"], "Class III antiarrhythmic", [], [
		"qt-known",
		"beta-blocker",
		"bradycardic"
	], "TdP, bradycardia"),
	d("digoxin", "Digoxin", ["Lanoxin"], "Cardiac glycoside", [sub("P-gp", "sensitive", "clearance", true)], ["bradycardic"], "Digoxin toxicity (nausea, arrhythmia, visual change)", { note: "Narrow index. P-gp inhibitors (amiodarone, verapamil, clarithromycin) raise levels." }),
	d("lisinopril", "Lisinopril", ["Prinivil", "Zestril"], "ACE inhibitor", [], ["acei-arb", "nephrotoxic"], "Hyperkalemia, acute kidney injury, angioedema"),
	d("losartan", "Losartan", ["Cozaar"], "ARB", [sub("CYP2C9", "major", "activation"), sub("CYP3A4", "minor")], ["acei-arb", "nephrotoxic"], "Hyperkalemia, acute kidney injury"),
	d("spironolactone", "Spironolactone", ["Aldactone"], "Mineralocorticoid antagonist", [], ["k-sparing"], "Hyperkalemia, gynecomastia"),
	d("furosemide", "Furosemide", ["Lasix"], "Loop diuretic", [], ["loop-thiazide", "nephrotoxic"], "Volume depletion, AKI, electrolyte loss"),
	d("hctz", "Hydrochlorothiazide", ["Microzide"], "Thiazide diuretic", [], ["loop-thiazide"], "Hyponatremia, hypokalemia, gout", { aliases: ["hydrochlorothiazide"] }),
	d("tamsulosin", "Tamsulosin", ["Flomax"], "Alpha-1 blocker", [sub("CYP3A4", "major"), sub("CYP2D6", "major")], ["alpha-blocker"], "Orthostatic hypotension"),
	d("sertraline", "Sertraline", ["Zoloft"], "SSRI", [
		sub("CYP2C19", "major"),
		sub("CYP3A4", "minor"),
		inh("CYP2D6", "weak")
	], ["serotonergic", "ssri-snri"], "Serotonin syndrome, bleeding, hyponatremia"),
	d("fluoxetine", "Fluoxetine", ["Prozac"], "SSRI", [
		sub("CYP2D6", "major"),
		inh("CYP2D6", "strong"),
		inh("CYP2C19", "moderate"),
		inh("CYP3A4", "weak")
	], [
		"serotonergic",
		"ssri-snri",
		"seizure-lowering"
	], "Serotonin syndrome, bleeding; long-lived inhibition", { note: "Norfluoxetine prolongs 2D6 inhibition for weeks after stopping." }),
	d("paroxetine", "Paroxetine", ["Paxil"], "SSRI", [sub("CYP2D6", "major"), inh("CYP2D6", "strong")], [
		"serotonergic",
		"ssri-snri",
		"anticholinergic"
	], "Serotonin syndrome, discontinuation syndrome"),
	d("fluvoxamine", "Fluvoxamine", ["Luvox"], "SSRI", [
		sub("CYP2D6", "minor"),
		inh("CYP1A2", "strong"),
		inh("CYP2C19", "strong"),
		inh("CYP3A4", "moderate"),
		inh("CYP2B6", "moderate")
	], ["serotonergic", "ssri-snri"], "Serotonin syndrome; marked 1A2/2C19 perpetrator", { note: "The OTP Luvox bump: 1A2/2C19/3A4/2B6 inhibition raises methadone. Stopping it looks like a stolen dose. Not the same map as fluoxetine." }),
	d("citalopram", "Citalopram", ["Celexa"], "SSRI", [
		sub("CYP2C19", "major"),
		sub("CYP3A4", "major"),
		sub("CYP2D6", "minor")
	], [
		"serotonergic",
		"ssri-snri",
		"qt-known"
	], "QT prolongation, serotonin syndrome"),
	d("escitalopram", "Escitalopram", ["Lexapro"], "SSRI", [sub("CYP2C19", "major"), sub("CYP3A4", "major")], [
		"serotonergic",
		"ssri-snri",
		"qt-possible"
	], "QT prolongation, serotonin syndrome"),
	d("venlafaxine", "Venlafaxine", ["Effexor"], "SNRI", [sub("CYP2D6", "major"), sub("CYP3A4", "minor")], ["serotonergic", "ssri-snri"], "Serotonin syndrome, hypertension"),
	d("duloxetine", "Duloxetine", ["Cymbalta"], "SNRI", [
		sub("CYP1A2", "major"),
		sub("CYP2D6", "major"),
		inh("CYP2D6", "moderate")
	], [
		"serotonergic",
		"ssri-snri",
		"hepatotoxic"
	], "Serotonin syndrome, hepatotoxicity"),
	d("bupropion", "Bupropion", ["Wellbutrin", "Zyban"], "NDRI antidepressant", [sub("CYP2B6", "major"), inh("CYP2D6", "strong")], ["seizure-lowering"], "Seizures, 2D6 victim-drug toxicity"),
	d("mirtazapine", "Mirtazapine", ["Remeron"], "NaSSA antidepressant", [
		sub("CYP3A4", "major"),
		sub("CYP2D6", "minor"),
		sub("CYP1A2", "minor")
	], ["serotonergic", "cns-depressant"], "Sedation, serotonin syndrome (lower risk)"),
	d("trazodone", "Trazodone", ["Desyrel"], "SARI antidepressant", [sub("CYP3A4", "major")], [
		"serotonergic",
		"cns-depressant",
		"qt-possible"
	], "Sedation, priapism, serotonin syndrome"),
	d("amitriptyline", "Amitriptyline", ["Elavil"], "Tricyclic antidepressant", [
		sub("CYP2D6", "major"),
		sub("CYP2C19", "major"),
		sub("CYP3A4", "minor")
	], [
		"serotonergic",
		"cns-depressant",
		"anticholinergic",
		"qt-possible",
		"seizure-lowering"
	], "Anticholinergic toxicity, arrhythmia, seizures"),
	d("nortriptyline", "Nortriptyline", ["Pamelor"], "Tricyclic antidepressant", [sub("CYP2D6", "sensitive", "clearance", true)], [
		"serotonergic",
		"cns-depressant",
		"anticholinergic",
		"qt-possible"
	], "TCA toxicity, arrhythmia"),
	d("lithium", "Lithium", ["Lithobid"], "Mood stabilizer", [], [
		"serotonergic",
		"seizure-lowering",
		"nephrotoxic"
	], "Lithium toxicity (narrow index)", { note: "Renally cleared, not CYP. NSAIDs, ACE inhibitors, and thiazides raise levels." }),
	d("quetiapine", "Quetiapine", ["Seroquel"], "Atypical antipsychotic", [sub("CYP3A4", "sensitive")], [
		"cns-depressant",
		"qt-possible",
		"anticholinergic"
	], "Sedation, QT, hypotension"),
	d("olanzapine", "Olanzapine", ["Zyprexa"], "Atypical antipsychotic", [sub("CYP1A2", "major")], ["cns-depressant", "anticholinergic"], "Sedation, metabolic syndrome", { note: "Smoking induces 1A2 and can drop levels; cessation raises them." }),
	d("risperidone", "Risperidone", ["Risperdal"], "Atypical antipsychotic", [sub("CYP2D6", "major"), sub("CYP3A4", "minor")], ["cns-depressant", "qt-possible"], "EPS, hyperprolactinemia, QT"),
	d("aripiprazole", "Aripiprazole", ["Abilify"], "Atypical antipsychotic", [sub("CYP2D6", "major"), sub("CYP3A4", "major")], [], "Akathisia, impulse-control effects"),
	d("clozapine", "Clozapine", ["Clozaril"], "Atypical antipsychotic", [
		sub("CYP1A2", "sensitive", "clearance", true),
		sub("CYP3A4", "minor"),
		sub("CYP2C19", "minor")
	], [
		"cns-depressant",
		"anticholinergic",
		"seizure-lowering",
		"qt-possible"
	], "Agranulocytosis, seizures, myocarditis, constipation", { note: "Sensitive 1A2 substrate. Fluvoxamine and ciprofloxacin can spike levels." }),
	d("haloperidol", "Haloperidol", ["Haldol"], "Typical antipsychotic", [
		sub("CYP3A4", "major"),
		sub("CYP2D6", "major"),
		inh("CYP2D6", "moderate")
	], [
		"cns-depressant",
		"qt-known",
		"seizure-lowering"
	], "EPS, TdP, NMS"),
	d("ziprasidone", "Ziprasidone", ["Geodon"], "Atypical antipsychotic", [sub("CYP3A4", "minor")], [
		"cns-depressant",
		"qt-known",
		"fed-boost"
	], "TdP; F collapses without a ~500 kcal meal", { note: "Labeled with food — about 500 kcal or AUC falls by half. High-fat meal on this desk is the perpetrator. QT is the other row. 3A4 is quiet compared with quetiapine." }),
	d("alprazolam", "Alprazolam", ["Xanax"], "Benzodiazepine", [sub("CYP3A4", "sensitive")], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression, falls"),
	d("diazepam", "Diazepam", ["Valium"], "Benzodiazepine", [sub("CYP3A4", "major"), sub("CYP2C19", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, prolonged accumulation"),
	d("clonazepam", "Clonazepam", ["Klonopin"], "Benzodiazepine", [sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression"),
	d("lorazepam", "Lorazepam", ["Ativan"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "UGT-glucuronidated, not a CYP substrate — often preferred when CYPs are blocked." }),
	d("midazolam", "Midazolam", ["Versed"], "Benzodiazepine", [sub("CYP3A4", "sensitive")], ["cns-depressant", "benzo-zdrug"], "Profound sedation, respiratory depression"),
	d("zolpidem", "Zolpidem", ["Ambien"], "Z-hypnotic", [sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Complex sleep behavior, falls"),
	d("buspirone", "Buspirone", ["BuSpar"], "Anxiolytic", [sub("CYP3A4", "sensitive")], ["serotonergic"], "Serotonin syndrome (with other serotonergics), dizziness"),
	d("phenelzine", "Phenelzine", ["Nardil"], "Irreversible MAOI", [inh("CYP2C19", "moderate")], ["maoi", "serotonergic"], "Hypertensive crisis, serotonin syndrome", { note: "Irreversible MAO-A/B inhibitor. Serotonergic drugs and tyramine are contraindicated." }),
	d("selegiline", "Selegiline", ["Emsam", "Eldepryl"], "MAO-B inhibitor", [sub("CYP2B6", "major"), sub("CYP2C19", "minor")], ["maoi", "serotonergic"], "Serotonin syndrome, hypertensive crisis at higher doses"),
	d("levodopa", "Levodopa / carbidopa", [
		"Sinemet",
		"Rytary",
		"Duopa"
	], "Dopamine precursor (Parkinson)", [], [], "Lost 'on' time with a protein meal; iron binds it in the gut", {
		aliases: [
			"sinemet",
			"carbidopa",
			"l-dopa",
			"l dopa",
			"madopar",
			"stalevo"
		],
		note: "Large-neutral amino acids compete at LAT1 in gut and brain. A steak next to the morning dose is a motor fluctuation, not CYP. Iron chelates it. Mucuna on this shelf is the same precursor in a bean."
	}),
	d("codeine", "Codeine", [], "Opioid analgesic (prodrug)", [sub("CYP2D6", "sensitive", "activation"), sub("CYP3A4", "minor")], ["opioid", "cns-depressant"], "Loss of analgesia or morphine toxicity (UM phenotype)", { note: "Prodrug. CYP2D6 O-demethylation produces morphine; inhibitors blunt analgesia." }),
	d("tramadol", "Tramadol", ["Ultram"], "Opioid / SNRI analgesic", [sub("CYP2D6", "major", "activation"), sub("CYP3A4", "major")], [
		"opioid",
		"cns-depressant",
		"serotonergic",
		"seizure-lowering"
	], "Seizures, serotonin syndrome, respiratory depression"),
	d("oxycodone", "Oxycodone", [
		"OxyContin",
		"Percocet",
		"Roxicodone",
		"Endocet"
	], "Opioid analgesic", [sub("CYP3A4", "major"), sub("CYP2D6", "minor")], ["opioid", "cns-depressant"], "Respiratory depression, sedation", {
		aliases: [
			"percs",
			"perc",
			"perc 30",
			"roxi",
			"oxy"
		],
		note: "Percocet is oxycodone plus acetaminophen — put APAP on the desk for the 2E1/alcohol story. Street 'perc 30s' stamped M30 are often pressed fentanyl, not this row. Search dirty 30."
	}),
	d("hydrocodone", "Hydrocodone", ["Norco", "Vicodin"], "Opioid analgesic", [sub("CYP3A4", "major"), sub("CYP2D6", "minor", "activation")], ["opioid", "cns-depressant"], "Respiratory depression, sedation"),
	d("morphine", "Morphine", ["MS Contin"], "Opioid analgesic", [sub("P-gp", "minor")], ["opioid", "cns-depressant"], "Respiratory depression, sedation", { note: "UGT2B7, not CYP. PD synergies still apply." }),
	d("fentanyl", "Fentanyl", ["Duragesic", "Sublimaze"], "Opioid analgesic", [sub("CYP3A4", "sensitive")], [
		"opioid",
		"cns-depressant",
		"serotonergic"
	], "Respiratory depression", {
		aliases: [
			"duragesic",
			"actiq",
			"sublimaze",
			"china white"
		],
		note: "Norfentanyl via 3A4. Paxlovid, ritonavir, azoles, and macrolides raise parent and the airway risk — the opposite of methadone, which can fall. A methadone take-home plus illicit fentanyl is stacked μ, not two prescriptions. Street tablets stamped M30 are this row ± xylazine; search dirty 30."
	}),
	d("methadone", "Methadone", ["Dolophine", "Methadose"], "Opioid agonist", [
		sub("CYP3A4", "major"),
		sub("CYP2B6", "major"),
		sub("CYP2C19", "minor"),
		sub("CYP1A2", "minor")
	], [
		"opioid",
		"cns-depressant",
		"qt-known",
		"serotonergic"
	], "TdP, respiratory depression", {
		aliases: ["methadose", "diskets"],
		note: "Long t½ — q24h accumulates. 3A4/2B6 inducers (rifampin, carbamazepine, phenytoin, efavirenz, nevirapine, St. John's wort) look like a stolen dose. Inhibitors (fluconazole, fluvoxamine, erythromycin) and other QT drugs raise TdP. Paxlovid/ritonavir is the mixed arrow: methadone often falls, fentanyl rises. Boxed with benzos and gabapentinoids. Take-home plus illicit fentanyl is stacked μ."
	}),
	d("gabapentin", "Gabapentin", ["Neurontin"], "Gabapentinoid", [], ["cns-depressant"], "Sedation, respiratory depression with opioids"),
	d("pregabalin", "Pregabalin", ["Lyrica"], "Gabapentinoid", [], ["cns-depressant"], "Sedation, respiratory depression with opioids"),
	d("carbamazepine", "Carbamazepine", ["Tegretol"], "Anticonvulsant", [
		sub("CYP3A4", "major"),
		ind("CYP3A4", "strong"),
		ind("CYP2B6", "moderate"),
		ind("CYP2C9", "moderate"),
		ind("CYP2C19", "moderate"),
		ind("CYP1A2", "moderate"),
		ind("P-gp", "moderate")
	], [
		"cns-depressant",
		"anticholinergic",
		"seizure-lowering"
	], "Loss of victim-drug efficacy, hyponatremia, SJS", { note: "Autoinducer. Strong 3A4 (and 2B6) induction — looks like a stolen methadone take-home in 7–10 days, same family as phenytoin and rifampin." }),
	d("phenytoin", "Phenytoin", ["Dilantin"], "Anticonvulsant", [
		sub("CYP2C9", "sensitive", "clearance", true),
		sub("CYP2C19", "major"),
		ind("CYP3A4", "strong"),
		ind("CYP2B6", "moderate"),
		ind("CYP2C19", "moderate"),
		ind("P-gp", "moderate")
	], ["cns-depressant", "hepatotoxic"], "Phenytoin toxicity or loss of co-drug efficacy", { note: "Narrow index, nonlinear kinetics. Strong 3A4 (and 2B6) induction — Tong 1981: phenytoin looks like a stolen methadone take-home within days." }),
	d("valproate", "Valproate", ["Depakote", "Depakene"], "Anticonvulsant", [inh("CYP2C9", "weak")], [
		"cns-depressant",
		"hepatotoxic",
		"seizure-lowering"
	], "Hyperammonemia, hepatotoxicity, teratogenicity", { aliases: ["valproic acid", "divalproex"] }),
	d("lamotrigine", "Lamotrigine", ["Lamictal"], "Anticonvulsant", [], ["cns-depressant"], "SJS/TEN (with valproate), dizziness", { note: "UGT1A4, not CYP. Valproate doubles levels; inducers drop them." }),
	d("levetiracetam", "Levetiracetam", ["Keppra"], "Anticonvulsant", [], ["cns-depressant"], "Mood change, sedation", { note: "Renally cleared. Almost no CYP interactions." }),
	d("tizanidine", "Tizanidine", ["Zanaflex"], "Central muscle relaxant", [sub("CYP1A2", "sensitive", "clearance", true)], ["cns-depressant", "bradycardic"], "Profound hypotension, bradycardia, sedation", { note: "Sensitive 1A2 substrate. Ciprofloxacin and fluvoxamine are contraindicated." }),
	d("cyclobenzaprine", "Cyclobenzaprine", ["Flexeril"], "Muscle relaxant", [
		sub("CYP3A4", "major"),
		sub("CYP1A2", "major"),
		sub("CYP2D6", "minor")
	], [
		"cns-depressant",
		"anticholinergic",
		"serotonergic"
	], "Sedation, serotonin syndrome"),
	d("donepezil", "Donepezil", ["Aricept"], "AChE inhibitor", [sub("CYP2D6", "major"), sub("CYP3A4", "major")], ["bradycardic"], "Bradycardia, syncope, GI upset"),
	d("omeprazole", "Omeprazole", ["Prilosec"], "PPI", [
		sub("CYP2C19", "major"),
		inh("CYP2C19", "moderate"),
		inh("CYP3A4", "weak")
	], [], "Reduced clopidogrel activation, B12/Mg loss"),
	d("esomeprazole", "Esomeprazole", ["Nexium"], "PPI", [sub("CYP2C19", "major"), inh("CYP2C19", "moderate")], [], "Reduced clopidogrel activation"),
	d("pantoprazole", "Pantoprazole", ["Protonix"], "PPI", [sub("CYP2C19", "minor")], [], "Hypomagnesemia", { note: "Weaker 2C19 inhibition — often preferred with clopidogrel." }),
	d("metformin", "Metformin", ["Glucophage"], "Biguanide", [], ["hypoglycemic"], "Lactic acidosis (rare), GI upset", { note: "OCT/MATE, not CYP." }),
	d("glipizide", "Glipizide", ["Glucotrol"], "Sulfonylurea", [sub("CYP2C9", "major")], ["hypoglycemic", "insulin-secretagogue"], "Hypoglycemia"),
	d("glyburide", "Glyburide", ["Diabeta", "Micronase"], "Sulfonylurea", [sub("CYP2C9", "major"), sub("CYP3A4", "minor")], ["hypoglycemic", "insulin-secretagogue"], "Hypoglycemia"),
	d("repaglinide", "Repaglinide", ["Prandin"], "Meglitinide", [sub("CYP2C8", "sensitive"), sub("CYP3A4", "major")], ["hypoglycemic", "insulin-secretagogue"], "Severe hypoglycemia", { note: "Gemfibrozil is contraindicated (CYP2C8 + OATP)." }),
	d("insulin-glargine", "Insulin glargine", [
		"Lantus",
		"Basaglar",
		"Toujeo"
	], "Long-acting insulin", [], ["hypoglycemic"], "Hypoglycemia"),
	d("levothyroxine", "Levothyroxine", ["Synthroid", "Levoxyl"], "Thyroid hormone", [], [], "Iatrogenic hyper/hypothyroidism", { note: "Absorption interactions (iron, calcium, PPIs) dominate over CYP." }),
	d("prednisone", "Prednisone", ["Deltasone"], "Corticosteroid", [sub("CYP3A4", "minor")], [], "Hyperglycemia, immunosuppression"),
	d("tacrolimus", "Tacrolimus", ["Prograf"], "Calcineurin inhibitor", [sub("CYP3A4", "sensitive", "clearance", true), sub("P-gp", "major")], [
		"immunosuppressant",
		"nephrotoxic",
		"seizure-lowering"
	], "Nephrotoxicity, neurotoxicity, infection", { note: "Narrow index. Strong 3A4 inhibitors can multiply AUC." }),
	d("cyclosporine", "Cyclosporine", [
		"Neoral",
		"Sandimmune",
		"Gengraf"
	], "Calcineurin inhibitor", [
		sub("CYP3A4", "sensitive", "clearance", true),
		sub("P-gp", "major"),
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate")
	], ["immunosuppressant", "nephrotoxic"], "Nephrotoxicity, infection"),
	d("methotrexate", "Methotrexate", ["Trexall", "Rheumatrex"], "Antimetabolite", [], ["nephrotoxic", "hepatotoxic"], "Marrow suppression, mucositis, AKI", { note: "NSAIDs and TMP-SMX raise toxicity via renal/transporter effects." }),
	d("colchicine", "Colchicine", ["Colcrys", "Mitigare"], "Antigout", [sub("CYP3A4", "sensitive", "clearance", true), sub("P-gp", "sensitive")], [], "Myelosuppression, myopathy, GI toxicity", { note: "Contraindicated with strong 3A4/P-gp inhibitors in renal/hepatic impairment." }),
	d("allopurinol", "Allopurinol", ["Zyloprim"], "Xanthine oxidase inhibitor", [], [], "SJS/TEN (HLA-B*5801), marrow suppression with azathioprine", {
		aliases: ["zyloprim", "allopurinol"],
		note: "XO blockade is how 6-mercaptopurine accumulates. Azathioprine and 6-MP are labeled dose-cuts or contraindications — febuxostat is the same enzyme. Not a CYP row."
	}),
	d("sildenafil", "Sildenafil", ["Viagra", "Revatio"], "PDE5 inhibitor", [sub("CYP3A4", "major")], ["pde5"], "Severe hypotension with nitrates"),
	d("tadalafil", "Tadalafil", ["Cialis", "Adcirca"], "PDE5 inhibitor", [sub("CYP3A4", "major")], ["pde5"], "Severe hypotension with nitrates"),
	d("nitroglycerin", "Nitroglycerin", ["Nitrostat", "Nitro-Dur"], "Nitrate", [], ["nitrate"], "Catastrophic hypotension with PDE5 inhibitors"),
	d("ondansetron", "Ondansetron", ["Zofran"], "5-HT3 antagonist", [
		sub("CYP3A4", "major"),
		sub("CYP1A2", "minor"),
		sub("CYP2D6", "minor")
	], ["qt-known", "serotonergic"], "QT prolongation"),
	d("diphenhydramine", "Diphenhydramine", ["Benadryl"], "First-generation antihistamine", [sub("CYP2D6", "minor"), inh("CYP2D6", "weak")], ["cns-depressant", "anticholinergic"], "Sedation, delirium, urinary retention"),
	d("acetaminophen", "Acetaminophen", ["Tylenol", "Paracetamol"], "Analgesic / antipyretic", [
		sub("CYP2E1", "major", "activation"),
		sub("CYP1A2", "minor"),
		sub("CYP3A4", "minor")
	], ["hepatotoxic"], "Hepatotoxicity in overdose or with 2E1 induction (chronic alcohol)", {
		aliases: ["paracetamol", "apap"],
		note: "CYP2E1 activation to NAPQI. Chronic drinking induces 2E1 and depletes glutathione — the classic delayed-hepatotoxicity pattern."
	}),
	d("ibuprofen", "Ibuprofen", ["Advil", "Motrin"], "NSAID", [sub("CYP2C9", "major")], ["nsaid", "nephrotoxic"], "GI bleed, AKI, attenuated antiplatelet effect of aspirin"),
	d("naproxen", "Naproxen", ["Aleve", "Naprosyn"], "NSAID", [sub("CYP2C9", "minor"), sub("CYP1A2", "minor")], ["nsaid", "nephrotoxic"], "GI bleed, AKI"),
	d("celecoxib", "Celecoxib", ["Celebrex"], "COX-2 inhibitor", [sub("CYP2C9", "major"), inh("CYP2D6", "weak")], ["nsaid", "nephrotoxic"], "CV risk, AKI, attenuated but present bleeding risk"),
	d("theophylline", "Theophylline", ["Theo-24", "Uniphyl"], "Methylxanthine", [sub("CYP1A2", "sensitive", "clearance", true)], ["seizure-lowering"], "Tachyarrhythmia, seizures", { note: "Narrow index. Ciprofloxacin and fluvoxamine can double levels." }),
	d("tamoxifen", "Tamoxifen", ["Nolvadex", "Soltamox"], "SERM", [
		sub("CYP2D6", "sensitive", "activation"),
		sub("CYP3A4", "major"),
		sub("CYP2C9", "minor")
	], [], "Loss of endoxifen (efficacy) if 2D6 is blocked", { note: "Prodrug. Strong 2D6 inhibitors (paroxetine, fluoxetine, bupropion) are avoided." }),
	d("ethinyl-estradiol", "Ethinyl estradiol (OCP)", [
		"Yaz",
		"Ortho Tri-Cyclen",
		"Loestrin"
	], "Estrogen contraceptive", [sub("CYP3A4", "major")], [], "Contraceptive failure with inducers", { aliases: [
		"oral contraceptive",
		"birth control",
		"ocp"
	] }),
	d("grapefruit", "Grapefruit juice", [], "Furanocoumarin (intestinal CYP3A4)", [inh("CYP3A4", "strong"), inh("P-gp", "moderate")], [], "Raised oral 3A4-victim exposure for 24–72 h", {
		kind: "food",
		aliases: [
			"grapefruit",
			"gfj",
			"pomelo",
			"seville orange",
			"bergamottin"
		],
		note: "Mechanism-based intestinal CYP3A4 knockout. Hepatic 3A4 is largely spared — IV ketamine barely moves; oral ketamine, buspirone, and quetiapine do."
	}),
	d("caffeine", "Caffeine", [], "Methylxanthine", [sub("CYP1A2", "sensitive")], [], "Jitteriness, insomnia, tachycardia", { aliases: [
		"guarana",
		"caffeine pill",
		"no-doz",
		"yerba mate"
	] }),
	d("lurasidone", "Lurasidone", ["Latuda"], "Atypical antipsychotic", [sub("CYP3A4", "sensitive")], ["cns-depressant", "fed-boost"], "Sedation, akathisia; F collapses without ~350 kcal", { note: "Contraindicated with strong CYP3A4 inhibitors and inducers. Also labeled with food — about 350 kcal. Put a high-fat meal on the desk; empty-stomach Latuda is a different failure than grapefruit." }),
	d("ketamine", "Ketamine", ["Ketalar"], "NMDA dissociative anesthetic", [
		sub("CYP2B6", "major"),
		sub("CYP3A4", "major"),
		sub("CYP2C9", "minor")
	], [
		"dissociative",
		"cns-depressant",
		"seizure-lowering"
	], "Respiratory depression, emergence reactions, blood-pressure swings, cystitis with chronic exposure", {
		aliases: ["ketalar", "racemic ketamine"],
		note: "Norketamine via CYP2B6 (major) and CYP3A4. Strong 3A4 inhibitors raise exposure; GABA-ergic drugs add airway risk and can blunt antidepressant response."
	}),
	d("esketamine", "Esketamine", ["Spravato"], "NMDA dissociative (S-ketamine)", [
		sub("CYP2B6", "major"),
		sub("CYP3A4", "major"),
		sub("CYP2C9", "minor")
	], [
		"dissociative",
		"cns-depressant",
		"seizure-lowering"
	], "Sedation, dissociation, hypertension, respiratory depression with CNS depressants", {
		aliases: ["spravato"],
		note: "S-enantiomer of ketamine. Same 2B6/3A4 map. Label warns against other CNS depressants including benzodiazepines and alcohol."
	}),
	d("dextromethorphan", "Dextromethorphan", ["Delsym", "Robitussin DM"], "NMDA antitussive / dissociative", [sub("CYP2D6", "sensitive"), sub("CYP3A4", "minor")], [
		"dissociative",
		"serotonergic",
		"cns-depressant",
		"seizure-lowering"
	], "Serotonin syndrome, dissociation, sedation", {
		aliases: ["dxm"],
		note: "Sensitive CYP2D6 substrate. 2D6 poor metabolizers or strong inhibitors (paroxetine, fluoxetine, bupropion) raise exposure sharply. Serotonergic at therapeutic and supra-therapeutic doses."
	}),
	d("memantine", "Memantine", ["Namenda"], "NMDA antagonist", [], ["dissociative"], "Confusion, dizziness", { note: "Renally cleared (OCT2), not a CYP substrate. PD overlap with other NMDA drugs is modest." }),
	d("mdma", "MDMA", [], "Entactogen / stimulant", [
		sub("CYP2D6", "major"),
		inh("CYP2D6", "moderate"),
		sub("CYP1A2", "minor"),
		sub("CYP3A4", "minor")
	], [
		"serotonergic",
		"stimulant",
		"seizure-lowering"
	], "Hyperthermia, serotonin syndrome, hyponatremia, hypertensive crisis with MAOIs", {
		aliases: ["midomafetamine", "3,4-methylenedioxymethamphetamine"],
		note: "CYP2D6 demethylenation plus mechanism-based 2D6 inhibition after the first pass. Strong 2D6 inhibitors blunt the effect and raise parent exposure. MAOIs are contraindicated."
	}),
	d("amphetamine", "Amphetamine", ["Adderall", "Evekeo"], "Amphetamine stimulant", [sub("CYP2D6", "minor")], ["stimulant", "seizure-lowering"], "Hypertension, tachycardia, psychosis, MAOI hypertensive crisis", { aliases: ["adderall", "dextroamphetamine"] }),
	d("lisdexamfetamine", "Lisdexamfetamine", ["Vyvanse"], "Amphetamine prodrug", [], ["stimulant", "seizure-lowering"], "Hypertension, tachycardia, MAOI hypertensive crisis", { note: "Hydrolyzed to d-amphetamine (not CYP). Interactions are PD with MAOIs and other stimulants." }),
	d("methylphenidate", "Methylphenidate", [
		"Ritalin",
		"Concerta",
		"Daytrana"
	], "NDRI stimulant", [inh("CYP2D6", "weak")], ["stimulant"], "Hypertension, tachycardia, MAOI hypertensive crisis", {
		aliases: ["concerta", "ritalin"],
		note: "CES1, not a major CYP substrate."
	}),
	d("methamphetamine", "Methamphetamine", ["Desoxyn"], "Amphetamine stimulant", [sub("CYP2D6", "major")], ["stimulant", "seizure-lowering"], "Hypertensive crisis, hyperthermia, cardiotoxicity", { aliases: [
		"desoxyn",
		"meth",
		"crystal",
		"ice",
		"shard",
		"crystal meth"
	] }),
	d("cocaine", "Cocaine", [], "Local anesthetic / stimulant", [sub("CYP3A4", "minor")], [
		"stimulant",
		"qt-possible",
		"seizure-lowering",
		"hepatotoxic"
	], "Arrhythmia, seizure, hyperthermia, cocaethylene with ethanol", {
		aliases: [
			"crack",
			"coke",
			"blow",
			"snow",
			"powder"
		],
		note: "Mostly CES1 hydrolysis. CYP3A4 makes norcocaine. Ethanol forms cocaethylene — longer-lived and more cardiotoxic. Smoked crack skips first-pass; the PD map (speedball, MAOI, QT) does not. Pair with an opioid for the speedball finding."
	}),
	d("heroin", "Heroin", [], "Diacetylmorphine", [sub("P-gp", "minor")], ["opioid", "cns-depressant"], "Respiratory depression, pulmonary edema", {
		aliases: [
			"diamorphine",
			"dope",
			"smack",
			"tar",
			"china white",
			"brown"
		],
		note: "Rapidly deacetylated to 6-MAM then morphine. Not a CYP victim. Speedball with cocaine is PD — the stimulant masks apnea. Same μ map as morphine once it converts."
	}),
	d("modafinil", "Modafinil", ["Provigil"], "Wake-promoting agent", [
		sub("CYP3A4", "major"),
		inh("CYP2C19", "moderate"),
		ind("CYP3A4", "moderate")
	], ["stimulant"], "Loss of 3A4-victim efficacy (OCPs), 2C19 victim toxicity", { note: "Moderate 3A4 inducer and 2C19 inhibitor. Can fail oral contraceptives." }),
	d("armodafinil", "Armodafinil", ["Nuvigil"], "Wake-promoting agent", [
		sub("CYP3A4", "major"),
		inh("CYP2C19", "moderate"),
		ind("CYP3A4", "moderate")
	], ["stimulant"], "Loss of 3A4-victim efficacy, 2C19 victim toxicity"),
	d("atomoxetine", "Atomoxetine", ["Strattera"], "NRI (ADHD)", [sub("CYP2D6", "sensitive", "clearance", true)], ["seizure-lowering"], "Hypertension, suicidality warning, 2D6 victim toxicity", { note: "Sensitive CYP2D6 substrate. Strong 2D6 inhibitors require dose reduction." }),
	d("nicotine", "Nicotine", ["Nicorette", "Nicoderm"], "Nicotine agonist", [sub("CYP2B6", "minor"), ind("CYP1A2", "moderate")], ["stimulant"], "Tachycardia; smoking-induced 1A2 drops clozapine/olanzapine/theophylline", { note: "Combustion PAHs, not nicotine itself, drive most 1A2 induction. Cessation can spike 1A2 victims." }),
	d("psilocybin", "Psilocybin", [], "Tryptamine psychedelic", [], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs; seizure risk with lithium", {
		aliases: ["psilocin"],
		note: "Dephosphorylated to psilocin; then MAO-A and UGT1A10 — not a CYP substrate. Lithium combinations have been linked to seizures."
	}),
	d("lsd", "LSD", [], "Ergoline psychedelic", [], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs; seizure risk with lithium", {
		aliases: ["lysergide", "lysergic acid diethylamide"],
		note: "Negligible CYP clearance. PD collisions dominate: MAOIs, other serotonergics, lithium."
	}),
	d("dmt", "DMT", [], "Tryptamine psychedelic", [], ["serotonergic", "psychedelic"], "Hypertensive crisis / serotonin syndrome with pharmaceutical MAOIs", {
		aliases: ["n,n-dmt", "dimethyltryptamine"],
		note: "MAO-A in gut destroys oral DMT. Pharmaceutical MAOIs plus DMT are not the same as a supervised ayahuasca setting — pressor and serotonin risk is high."
	}),
	d("mescaline", "Mescaline", [], "Phenethylamine psychedelic", [], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs", { note: "MAO and some CYP2D6 contribution. PD with MAOIs and lithium matters more than CYP." }),
	d("dronabinol", "Dronabinol (THC)", ["Marinol", "Syndros"], "Cannabinoid (THC)", [sub("CYP2C9", "major"), sub("CYP3A4", "major")], ["cannabinoid", "cns-depressant"], "Sedation, tachycardia, 2C9/3A4 victim toxicity", { aliases: [
		"thc",
		"delta-9-thc",
		"cannabis"
	] }),
	d("cannabidiol", "Cannabidiol", ["Epidiolex"], "Cannabinoid (CBD)", [
		sub("CYP2C19", "major"),
		sub("CYP3A4", "major"),
		inh("CYP2C19", "strong"),
		inh("CYP3A4", "moderate"),
		inh("CYP2C9", "moderate"),
		inh("CYP2D6", "weak")
	], [
		"cannabinoid",
		"cns-depressant",
		"hepatotoxic"
	], "Somnolence, transaminase rise, victim-drug toxicity (clobazam, diazepam, warfarin)", {
		aliases: ["cbd", "epidiolex"],
		note: "Strong CYP2C19 inhibitor — a major perpetrator for diazepam, clobazam, and citalopram."
	}),
	d("ethanol", "Ethanol", [], "Alcohol", [sub("CYP2E1", "major"), ind("CYP2E1", "moderate")], [
		"alcohol",
		"cns-depressant",
		"hepatotoxic",
		"seizure-lowering"
	], "Respiratory depression with other CNS drugs, hepatotoxicity, cocaethylene with cocaine", {
		aliases: ["alcohol", "etoh"],
		note: "Chronic use induces CYP2E1 (and, via lifestyle, other pathways). Acute use is a CNS depressant. Never stack with GHB, opioids, or benzodiazepines."
	}),
	d("sodium-oxybate", "Sodium oxybate", ["Xyrem", "Lumryz"], "GHB (GABA-B)", [], ["ghb", "cns-depressant"], "Profound respiratory depression, coma", {
		aliases: [
			"ghb",
			"xyrem",
			"gamma hydroxybutyrate"
		],
		note: "Contraindicated with alcohol and other CNS depressants. Not a CYP substrate."
	}),
	d("phenibut", "Phenibut", [], "GABA-B analogue", [], ["cns-depressant"], "Sedation, withdrawal seizures when stacked then stopped", { note: "Not a CYP substrate. PD with alcohol, benzos, GHB, and opioids." }),
	d("baclofen", "Baclofen", ["Lioresal"], "GABA-B agonist", [], ["cns-depressant"], "Sedation, respiratory depression with other CNS drugs"),
	d("eszopiclone", "Eszopiclone", ["Lunesta"], "Z-hypnotic", [sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, complex sleep behavior"),
	d("ramelteon", "Ramelteon", ["Rozerem"], "Melatonin-receptor hypnotic", [sub("CYP1A2", "sensitive")], ["cns-depressant"], "Sedation; fluvoxamine is contraindicated", { note: "Sensitive CYP1A2 substrate. Fluvoxamine (strong 1A2 inhibitor) is labeled contraindicated." }),
	d("suvorexant", "Suvorexant", ["Belsomra"], "Orexin antagonist", [sub("CYP3A4", "sensitive")], ["cns-depressant"], "Sedation, next-day impairment", { note: "Sensitive 3A4 substrate. Strong 3A4 inhibitors are not recommended." }),
	d("melatonin", "Melatonin", [], "Pineal hormone", [sub("CYP1A2", "sensitive")], ["cns-depressant"], "Sedation; 1A2 inhibitors raise exposure"),
	d("buprenorphine", "Buprenorphine", [
		"Suboxone",
		"Subutex",
		"Butrans",
		"Sublocade",
		"Zubsolv",
		"Brixadi"
	], "Partial opioid agonist", [sub("CYP3A4", "major"), sub("CYP2C8", "minor")], [
		"opioid",
		"cns-depressant",
		"partial-opioid"
	], "Respiratory depression with benzos/alcohol; precipitated withdrawal with full agonists", {
		aliases: [
			"suboxone",
			"subutex",
			"zubsolv",
			"bunavail",
			"belbuca",
			"buprenex",
			"brixadi"
		],
		note: "High-affinity partial μ-agonist. On a fentanyl or methadone load it precipitates withdrawal — the classic failed induction. Stable bup then a full agonist (7-OH, fentanyl) blocks the high. 3A4 inhibitors (ritonavir, cobicistat, azoles) raise parent. Street benzos and gabapentinoids still hit the airway. Naloxone in Suboxone is poorly absorbed under the tongue; it is not a second opioid on this desk unless injected."
	}),
	d("naltrexone", "Naltrexone", [
		"ReVia",
		"Vivitrol",
		"Contrave"
	], "Opioid antagonist", [], ["opioid-antagonist"], "Precipitated opioid withdrawal; blocks opioid analgesia", {
		aliases: ["vivitrol", "revia"],
		note: "Not a CYP substrate. IM naltrexone occupies μ for weeks. Leftover fentanyl or a 'just this once' agonist is precipitated withdrawal, not a slip that didn't work. Also used for alcohol use disorder next to acamprosate."
	}),
	d("naloxone", "Naloxone", ["Narcan", "Kloxxado"], "Opioid antagonist", [], ["opioid-antagonist"], "Precipitated opioid withdrawal", { aliases: ["narcan"] }),
	d("nalmefene", "Nalmefene", ["Opvee", "Revex"], "Opioid antagonist", [], ["opioid-antagonist"], "Precipitated opioid withdrawal; longer μ occupancy than naloxone", {
		aliases: ["opvee", "revex"],
		note: "Nasal nalmefene (Opvee) occupies μ longer than naloxone. After a fentanyl or nitazene fold the patient can re-narcotize as nalmefene still sits — or look over-reversed for hours. Not a CYP substrate. This desk is not a field protocol."
	}),
	d("kratom", "Kratom (mitragynine)", [], "Atypical opioid / stimulant", [sub("CYP3A4", "major"), inh("CYP2D6", "weak")], [
		"opioid",
		"cns-depressant",
		"serotonergic"
	], "Respiratory depression with other CNS drugs; 3A4 victim toxicity", {
		aliases: ["mitragynine", "7-hydroxymitragynine"],
		note: "Mitragynine is a CYP3A4 substrate. Combined with other opioids, benzos, or alcohol the respiratory risk is additive."
	}),
	d("disulfiram", "Disulfiram", ["Antabuse"], "Aldehyde dehydrogenase inhibitor", [inh("CYP2E1", "strong"), inh("CYP1A2", "weak")], ["hepatotoxic", "seizure-lowering"], "Acetaldehyde reaction with ethanol; hepatotoxicity", { aliases: ["antabuse"] }),
	d("acamprosate", "Acamprosate", ["Campral"], "NMDA / GABA modulator", [], [], "Diarrhea, renal accumulation", { note: "Renally cleared. Almost no CYP interactions." }),
	d("varenicline", "Varenicline", ["Chantix"], "Partial nicotinic agonist", [], ["seizure-lowering"], "Nausea, neuropsychiatric warning", {
		aliases: ["chantix"],
		note: "Renally cleared. No CYP map."
	}),
	d("clomipramine", "Clomipramine", ["Anafranil"], "Tricyclic antidepressant", [
		sub("CYP2D6", "major"),
		sub("CYP2C19", "major"),
		sub("CYP3A4", "minor")
	], [
		"serotonergic",
		"cns-depressant",
		"anticholinergic",
		"qt-possible",
		"seizure-lowering"
	], "TCA toxicity, serotonin syndrome, seizure"),
	d("vortioxetine", "Vortioxetine", ["Trintellix"], "Multimodal antidepressant", [sub("CYP2D6", "major")], ["serotonergic", "ssri-snri"], "Serotonin syndrome, nausea"),
	d("tranylcypromine", "Tranylcypromine", ["Parnate"], "Irreversible MAOI", [], ["maoi", "serotonergic"], "Hypertensive crisis, serotonin syndrome", { note: "Irreversible MAO-A/B inhibitor. Stimulants, entactogens, and serotonergics are contraindicated." }),
	d("topiramate", "Topiramate", ["Topamax"], "Anticonvulsant", [ind("CYP3A4", "weak")], ["cns-depressant", "seizure-lowering"], "Cognitive slowing, metabolic acidosis, reduced OCP efficacy at high dose"),
	d("moclobemide", "Moclobemide", ["Manerix"], "Reversible MAOI (RIMA)", [
		sub("CYP2C19", "major"),
		inh("CYP2D6", "weak"),
		inh("CYP1A2", "weak")
	], ["maoi", "serotonergic"], "Serotonin syndrome, pressor with stimulants (lower than irreversible MAOIs)", { note: "Reversible MAO-A inhibitor. Still contraindicated with MDMA, other serotonergics, and stimulants, with a shorter washout than phenelzine." }),
	d("clobazam", "Clobazam", ["Onfi", "Sympazan"], "Benzodiazepine", [sub("CYP2C19", "sensitive"), sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression; 2C19 PM or CBD can spike N-desmethylclobazam", { note: "Sensitive CYP2C19 substrate. Cannabidiol (Epidiolex) is a classic perpetrator." }),
	d("pcp", "Phencyclidine", [], "NMDA dissociative", [sub("CYP3A4", "major")], [
		"dissociative",
		"cns-depressant",
		"seizure-lowering"
	], "Prolonged psychosis, seizure, hyperthermia, airway risk with other CNS drugs", {
		aliases: ["phencyclidine"],
		note: "CYP3A4 to trans-PCPOH. Same NMDA + GABA stacking as ketamine."
	}),
	d("twocb", "2C-B", [], "Phenethylamine psychedelic", [sub("CYP2D6", "minor")], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs; vasoconstriction", { aliases: [
		"2c-b",
		"2cb",
		"4-bromo-2,5-dimethoxyphenethylamine"
	] }),
	d("kava", "Kava", [], "Kavalactone sedative", [
		inh("CYP2E1", "moderate"),
		inh("CYP1A2", "weak"),
		inh("CYP2C9", "weak"),
		inh("CYP2C19", "weak"),
		inh("CYP3A4", "weak")
	], ["cns-depressant", "hepatotoxic"], "Hepatotoxicity, additive sedation with alcohol/benzos", { aliases: ["kava kava", "piper methysticum"] }),
	d("quinidine", "Quinidine", ["Quinidex"], "Class Ia antiarrhythmic", [
		sub("CYP3A4", "major"),
		inh("CYP2D6", "strong"),
		inh("P-gp", "strong")
	], ["qt-known"], "TdP, cinchonism, 2D6 victim toxicity", { note: "Strong CYP2D6 inhibitor. Paired with dextromethorphan as Nuedexta — a textbook 2D6 trap." }),
	d("ibogaine", "Ibogaine", [], "Oneirogen / NMDA–kappa agonist", [sub("CYP2D6", "major"), sub("CYP3A4", "minor")], [
		"dissociative",
		"qt-known",
		"cns-depressant",
		"seizure-lowering"
	], "Prolonged QT, ataxia, death in unsupervised use — especially with methadone or other QT drugs", {
		aliases: ["iboga", "noribogaine"],
		note: "CYP2D6 to noribogaine. Strong 2D6 inhibitors and QT drugs are a documented fatality pattern. Not a medical treatment map."
	}),
	d("harmaline", "Harmaline", [], "Beta-carboline MAOI", [inh("CYP2D6", "moderate")], ["maoi", "serotonergic"], "Hypertensive crisis and serotonin syndrome with tyramine, stimulants, or entactogens", {
		aliases: [
			"harmine",
			"ayahuasca",
			"banisteriopsis"
		],
		note: "The MAOI in ayahuasca. Pharmaceutical MAOIs plus DMT/MDMA remain contraindicated outside a supervised research setting."
	}),
	d("five-meo-dmt", "5-MeO-DMT", [], "Tryptamine psychedelic", [], ["serotonergic", "psychedelic"], "Intense serotonergic load; MAOI combinations have been lethal", {
		aliases: ["5-meo-dmt", "5meo"],
		note: "MAO-A clearance. Do not combine with harmala alkaloids or pharmaceutical MAOIs."
	}),
	d("nitrous-oxide", "Nitrous oxide", [], "Inhaled dissociative", [], ["dissociative", "cns-depressant"], "Hypoxia with other CNS depressants; B12 inactivation with chronic exposure", {
		aliases: ["n2o", "nitrous"],
		note: "Not a CYP substrate. PD with opioids, benzos, alcohol, and other NMDA drugs."
	}),
	d("tyramine-foods", "Tyramine foods", [], "Aged / fermented meal", [], ["tyramine"], "Hypertensive crisis with MAOIs", {
		kind: "food",
		aliases: [
			"tyramine",
			"aged cheese",
			"salami",
			"tap beer",
			"soy sauce",
			"sauerkraut"
		],
		note: "Aged cheese, cured meats, tap beer, soy, and fava beans. Irreversible MAOIs plus a tyramine load can spike blood pressure within minutes."
	}),
	d("st-johns-wort", "St. John's wort", [], "Hypericum (3A4 inducer)", [
		ind("CYP3A4", "strong"),
		ind("CYP2C19", "moderate"),
		ind("P-gp", "strong"),
		ind("CYP2C9", "weak")
	], ["serotonergic"], "Loss of 3A4-victim efficacy; serotonin syndrome with antidepressants", {
		kind: "herb",
		aliases: [
			"hypericum",
			"sjw",
			"st johns wort"
		],
		note: "Induces CYP3A4 and P-gp about like rifampin-lite. Also serotonergic — stacked SSRIs/MDMA are a problem on both axes."
	}),
	d("high-fat-meal", "High-fat meal", [], "Dietary absorption booster", [], ["fat-meal"], "Higher oral cannabinoid (and some lipophilic) AUC", {
		kind: "food",
		aliases: [
			"fatty meal",
			"high fat",
			"with food",
			"fed state",
			"with meals",
			"take with food"
		],
		note: "A 50–60% fat meal can several-fold increase oral THC and CBD. Lurasidone and ziprasidone are labeled with calories — F collapses fasted. Posaconazole suspension wants food; Fosamax wants none. Take that as a PK fact, not a dosing instruction."
	}),
	d("low-salt", "Low-salt / dehydration", [], "Renal lithium trap", [], ["sodium-restriction", "nephrotoxic"], "Lithium retention and toxicity", {
		kind: "food",
		aliases: [
			"low sodium",
			"dehydration",
			"salt restriction",
			"sauna"
		],
		note: "Lithium tracks sodium. Crash diets, heavy sweating, or a sudden low-salt stretch raise levels without a dose change."
	}),
	d("high-salt", "High-salt meal", [], "Renal lithium dump", [], ["sodium-load"], "Drop in lithium level / loss of effect", {
		kind: "food",
		aliases: ["high sodium", "salty meal"],
		note: "A sudden salt load increases lithium clearance. Less dangerous than restriction, but mood can slip."
	}),
	d("alkalinizer", "Urinary alkalinizer", [], "Bicarbonate / antacid load", [], ["urinary-alkaline"], "Slowed amphetamine excretion, longer stimulant effect", {
		kind: "food",
		aliases: [
			"baking soda",
			"sodium bicarbonate",
			"tums",
			"alkaline urine"
		],
		note: "Alkaline urine reabsorbs amphetamine. Antacids and bicarbonate stretch duration and peak — a classic stimulant PK trick, and a toxicity risk."
	}),
	d("acidic-juice", "Acidic juice / vitamin C", [], "Urinary acidifier", [], ["urinary-acid"], "Faster amphetamine clearance, shorter duration", {
		kind: "food",
		aliases: [
			"vitamin c",
			"ascorbic acid",
			"orange juice",
			"cranberry"
		],
		note: "Acid urine speeds amphetamine excretion. Opposite of bicarbonate. Not a 3A4 story — grapefruit is the furanocoumarin. Apple/orange juice cutting Allegra is OATP (search apple juice), not this pH row."
	}),
	d("charred-meat", "Charred / smoked meat", [], "PAH CYP1A2 inducer", [ind("CYP1A2", "moderate")], [], "Lower 1A2-victim levels (clozapine, olanzapine, caffeine)", {
		kind: "food",
		aliases: [
			"charcoal grilled",
			"barbecued",
			"smoked meat",
			"pah food"
		],
		note: "Same PAH induction as tobacco smoke, weaker. Cruciferous vegetables do a milder version of this."
	}),
	d("five-htp", "5-HTP / L-tryptophan", [], "Serotonin precursor", [], ["serotonergic", "tryptophan"], "Serotonin syndrome with MAOIs, SSRIs, MDMA, DXM", {
		kind: "herb",
		aliases: [
			"5-htp",
			"5htp",
			"tryptophan",
			"l-tryptophan"
		],
		note: "Feeds 5-HT synthesis. Stacked with an SSRI or MAOI this is a serotonergic load, not a gentle sleep aid."
	}),
	d("goldenseal", "Goldenseal", [], "CYP2D6 / 3A4 herbal inhibitor", [
		inh("CYP2D6", "moderate"),
		inh("CYP3A4", "moderate"),
		inh("CYP2C9", "weak")
	], [], "Raised 2D6 and 3A4 victim levels (DXM, MDMA, oral ketamine)", {
		kind: "herb",
		aliases: ["hydrastis", "goldenseal root"],
		note: "The plant. Berberine HCl is the capsule people actually buy — same 2D6/3A4 map, plus glucose-lowering. Search berberine for the pill."
	}),
	d("valerian", "Valerian root", [], "Herbal sedative", [], ["cns-depressant"], "Additive sedation with benzos, alcohol, GHB, ketamine", {
		kind: "herb",
		aliases: ["valerian", "valeriana"]
	}),
	d("tianeptine", "Tianeptine", ["Stablon", "Coaxil"], "Atypical μ-opioid antidepressant", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "Respiratory depression at high dose; withdrawal; 3A4 victim toxicity", {
		aliases: ["tianaa", "zaza"],
		note: "Prescribed as an antidepressant in some countries; μ-agonist at higher exposure. CYP3A4 substrate. Stacks with other CNS depressants."
	}),
	d("xylazine", "Xylazine", [], "Veterinary α2-agonist", [], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Profound sedation not reversed by naloxone; airway loss with opioids", {
		aliases: ["tranq", "tranq dope"],
		note: "Not a CYP story. Street opioid adulterant. Naloxone reverses the opioid but not the α2 sedation — airway support is the intervention."
	}),
	d("medetomidine", "Medetomidine", ["Domitor"], "Veterinary α2-agonist", [], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Deep sedation, bradycardia; not reversed by naloxone", {
		aliases: [
			"dexmedetomidine",
			"precedex",
			"dex"
		],
		note: "Appearing in the same street-opioid supply as xylazine. Same α2 airway problem."
	}),
	d("isotonitazene", "Isotonitazene", [], "Benzimidazole opioid (nitazene)", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "High-potency μ-agonist respiratory arrest; 3A4 victim toxicity", { aliases: ["iso", "nitazene"] }),
	d("protonitazene", "Protonitazene", [], "Benzimidazole opioid (nitazene)", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "High-potency μ-agonist respiratory arrest", { aliases: ["protonitazene", "nitazene"] }),
	d("bromazolam", "Bromazolam", [], "Designer benzodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "Respiratory depression with opioids; withdrawal seizures", { aliases: ["bromaz", "dbzd"] }),
	d("etizolam", "Etizolam", ["Etilaam"], "Thienodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "Respiratory depression with opioids; withdrawal seizures", { aliases: ["etiz"] }),
	d("flualprazolam", "Flualprazolam", [], "Designer benzodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "High-potency benzo × opioid airway stack", { aliases: ["flualp"] }),
	d("gbl", "GBL", [], "GHB prodrug", [], ["ghb", "cns-depressant"], "Converts to GHB; labeled contraindication with other CNS depressants", {
		aliases: ["gamma-butyrolactone", "gamma butyrolactone"],
		note: "Lactonase converts GBL to GHB. Same apnea map as sodium oxybate plus alcohol or benzos."
	}),
	d("bd-14", "1,4-Butanediol", [], "GHB prodrug", [sub("CYP2E1", "minor", "activation")], ["ghb", "cns-depressant"], "ADH/CYP2E1 activation to GHB; delayed coma with alcohol", {
		aliases: [
			"14bd",
			"1,4-bd",
			"butanediol"
		],
		note: "Alcohol occupies ADH and delays conversion, then dumps GHB later. Not a dosing map."
	}),
	d("mephedrone", "Mephedrone", [], "Cathinone entactogen", [sub("CYP2D6", "major")], ["serotonergic", "stimulant"], "Serotonin syndrome with MAOIs; 2D6 victim toxicity", { aliases: [
		"4-mmc",
		"4mmc",
		"m-cat"
	] }),
	d("three-mmc", "3-MMC", [], "Cathinone stimulant", [sub("CYP2D6", "major")], ["serotonergic", "stimulant"], "Serotonin and pressor load with MAOIs", { aliases: ["3-mmc", "3mmc"] }),
	d("two-fdck", "2-Fluorodeschloroketamine", [], "Arylcyclohexylamine dissociative", [sub("CYP2B6", "major"), sub("CYP3A4", "major")], ["dissociative", "cns-depressant"], "NMDA airway stack; oral first-pass 3A4/2B6 like ketamine", {
		aliases: [
			"2-fdck",
			"2fdck",
			"2fdck"
		],
		note: "Ketamine analogue. Oral first-pass is the 3A4 trap; IV mostly skips it."
	}),
	d("mxe", "Methoxetamine", [], "Arylcyclohexylamine dissociative", [
		sub("CYP2B6", "major"),
		sub("CYP3A4", "minor"),
		sub("CYP2C19", "minor")
	], [
		"dissociative",
		"cns-depressant",
		"seizure-lowering"
	], "Longer NMDA load than ketamine; stacked airway risk with GABA drugs", { aliases: ["methoxetamine"] }),
	d("loperamide", "Loperamide", ["Imodium"], "Peripheral μ-agonist / P-gp substrate", [sub("P-gp", "sensitive"), sub("CYP3A4", "major")], [
		"opioid",
		"qt-known",
		"cns-depressant"
	], "P-gp blockade lets loperamide into the CNS and heart — opioid toxicity plus QT", {
		aliases: ["imodium"],
		note: "P-gp and 3A4 keep therapeutic doses peripheral. Quinidine, ritonavir, or grapefruit plus high dose is a documented cardiotoxic pattern."
	}),
	d("hydroxyzine", "Hydroxyzine", ["Atarax", "Vistaril"], "Sedating antihistamine", [sub("CYP3A4", "major")], [
		"cns-depressant",
		"anticholinergic",
		"qt-possible"
	], "Additive sedation and QT with other CNS / QT drugs", {
		aliases: ["atarax", "vistaril"],
		note: "The OTP 'not a benzo' for anxiety still prolongs QT and sedates. Next to methadone that is a TdP and airway row, not a free extra."
	}),
	d("poppers", "Alkyl nitrites (poppers)", [], "Volatile nitrite vasodilator", [], ["nitrate"], "Profound hypotension / MI with PDE5 inhibitors", {
		aliases: [
			"amyl nitrite",
			"isobutyl nitrite",
			"popper"
		],
		note: "Same nitrate × PDE5 map as nitroglycerin. Not a CYP substrate."
	}),
	d("carfentanil", "Carfentanil", [], "Ultra-potent veterinary opioid", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "Respiratory arrest at microgram exposure; 3A4 victim", { aliases: ["carfent"] }),
	d("dck", "Deschloroketamine", [], "Arylcyclohexylamine dissociative", [sub("CYP2B6", "major"), sub("CYP3A4", "major")], ["dissociative", "cns-depressant"], "NMDA airway stack; oral first-pass like ketamine", {
		aliases: ["deschloroketamine", "2'-oxo-pcm"],
		note: "Ketamine analogue without the chlorine. Oral 3A4/2B6 first-pass is the trap; IV mostly skips it."
	}),
	d("three-meo-pcp", "3-MeO-PCP", [], "Arylcyclohexylamine dissociative", [sub("CYP3A4", "major"), sub("CYP2B6", "minor")], [
		"dissociative",
		"cns-depressant",
		"seizure-lowering"
	], "Longer NMDA load than ketamine; mania, seizure, airway risk with GABA drugs", {
		aliases: ["3-meo-pcp", "3meopcp"],
		note: "Longer and hotter than ketamine. Same NMDA × benzo/alcohol airway map, plus a mania/seizure signal at high exposure."
	}),
	d("four-aco-dmt", "4-AcO-DMT", [], "Tryptamine psychedelic (psilocin prodrug)", [], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs; seizure risk with lithium", {
		aliases: [
			"4-aco-dmt",
			"4aco",
			"psilacetin",
			"o-acetylpsilocin"
		],
		note: "Deacetylated to psilocin — same MAO-A/UGT map as mushrooms, not a CYP substrate. Lithium still applies."
	}),
	d("twentyfive-i", "25I-NBOMe", [], "NBOMe psychedelic", [], [
		"serotonergic",
		"psychedelic",
		"seizure-lowering",
		"qt-possible"
	], "Vasoconstriction, seizures, fatalities; MAOI and lithium still apply", {
		aliases: [
			"25i-nbome",
			"25i",
			"n-bomb",
			"nbome"
		],
		note: "Not a CYP story. Street blotter sold as LSD. Vasoconstriction and seizures dominate; serotonergic PD with MAOIs and lithium still fires."
	}),
	d("mda", "MDA", [], "Entactogen / stimulant", [
		sub("CYP2D6", "major"),
		inh("CYP2D6", "weak"),
		sub("CYP3A4", "minor")
	], [
		"serotonergic",
		"stimulant",
		"seizure-lowering"
	], "Hyperthermia, serotonin syndrome, MAOI hypertensive crisis", {
		aliases: [
			"3,4-methylenedioxyamphetamine",
			"sass",
			"sassafras"
		],
		note: "MDMA's demethylenated cousin and a metabolite of MDMA. Same 2D6 + MAOI map, slightly more stimulant."
	}),
	d("methylone", "Methylone", [], "Cathinone entactogen", [sub("CYP2D6", "major")], ["serotonergic", "stimulant"], "Serotonin syndrome with MAOIs; 2D6 victim toxicity", { aliases: [
		"bk-mdma",
		"m1",
		"3,4-methylenedioxymethcathinone"
	] }),
	d("clonazolam", "Clonazolam", [], "Designer benzodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "High-potency benzo × opioid airway stack; blackout and withdrawal seizures", { aliases: ["clam", "clonz"] }),
	d("flubromazolam", "Flubromazolam", [], "Designer benzodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "Very long high-potency benzo; opioid airway stack, withdrawal seizures", { aliases: ["flubrom", "fbzm"] }),
	d("a-pvp", "α-PVP", [], "Cathinone stimulant (pyrovalerone)", [sub("CYP2D6", "minor"), sub("CYP2C19", "minor")], ["stimulant", "seizure-lowering"], "Severe sympathomimetic toxicity; MAOI hypertensive crisis", {
		aliases: [
			"alpha-pvp",
			"flakka",
			"gravel"
		],
		note: "DAT/NET blocker more than a 5-HT releaser. Pressor with MAOIs still applies."
	}),
	d("metonitazene", "Metonitazene", [], "Benzimidazole opioid (nitazene)", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "High-potency μ-agonist respiratory arrest; 3A4 victim toxicity", { aliases: ["meto", "nitazene"] }),
	d("salvinorin", "Salvinorin A", [], "Kappa-opioid oneirogen", [], ["dissociative", "cns-depressant"], "Brief intense dissociation; additive CNS depression", {
		aliases: [
			"salvia",
			"salvia divinorum",
			"salvinorin-a"
		],
		note: "Kappa agonist, not a CYP substrate and not a mu opioid — naltrexone will not reverse it. PD with other CNS drugs is still sedation."
	}),
	d("scopolamine", "Scopolamine", ["Transderm Scop"], "Antimuscarinic tropane", [], [
		"anticholinergic",
		"cns-depressant",
		"seizure-lowering"
	], "Delirium, urinary retention, stacked anticholinergic burden", {
		aliases: [
			"hyoscine",
			"datura",
			"devil's trumpet",
			"jimsonweed"
		],
		note: "Datura/Brugmansia tropane. Not a CYP story. Stacks with diphenhydramine, hydroxyzine, TCAs — delirium, not a recreational map."
	}),
	d("cimetidine", "Cimetidine", ["Tagamet"], "H2 blocker / CYP perpetrator", [
		inh("CYP1A2", "moderate"),
		inh("CYP2D6", "moderate"),
		inh("CYP3A4", "moderate"),
		inh("CYP2C9", "weak"),
		inh("P-gp", "moderate")
	], [], "Raised victim-drug levels (theophylline, tizanidine, warfarin, oral ketamine)", {
		aliases: ["tagamet"],
		note: "The original OTC cytochrome bully. Famotidine does not do this — if you need an H2 blocker next to a 1A2/3A4 victim, switch. On an OTP board it can nudge methadone parent (Tagamet is not a free heartburn pill next to a known-QT opioid)."
	}),
	d("meperidine", "Meperidine", ["Demerol"], "Opioid analgesic", [sub("CYP3A4", "major"), sub("CYP2B6", "major")], [
		"opioid",
		"cns-depressant",
		"serotonergic",
		"seizure-lowering"
	], "Serotonin syndrome with MAOIs; seizures from normeperidine", {
		aliases: ["demerol", "pethidine"],
		note: "Labeled contraindicated with MAOIs. CYP3A4/2B6 to neurotoxic normeperidine, which seizes in renal impairment and with 3A4 blockade."
	}),
	d("phenobarbital", "Phenobarbital", ["Luminal"], "Barbiturate anticonvulsant", [
		sub("CYP2C19", "major"),
		ind("CYP3A4", "strong"),
		ind("CYP2C9", "strong"),
		ind("CYP2C19", "moderate"),
		ind("CYP1A2", "moderate"),
		ind("P-gp", "moderate")
	], ["cns-depressant", "seizure-lowering"], "Loss of victim-drug efficacy (OCPs, DOACs, ketamine); stacked sedation", {
		aliases: ["phenobarbitone"],
		note: "Strong pan-CYP inducer after 1–2 weeks, like carbamazepine. Barbiturate PD with alcohol/opioids is additive apnea."
	}),
	d("efavirenz", "Efavirenz", ["Sustiva", "Atripla"], "NNRTI antiretroviral", [
		sub("CYP2B6", "sensitive"),
		ind("CYP3A4", "moderate"),
		ind("CYP2B6", "moderate")
	], [
		"qt-possible",
		"cns-depressant",
		"seizure-lowering"
	], "Loss of 3A4/2B6 victims (methadone, ketamine); 2B6 PM neurotoxicity", {
		aliases: ["sustiva"],
		note: "Sensitive CYP2B6 substrate and a 3A4/2B6 inducer. Classic methadone-withdrawal precipitant. 2B6 PMs get more CNS toxicity."
	}),
	d("triazolam", "Triazolam", ["Halcion"], "Benzodiazepine", [sub("CYP3A4", "sensitive")], ["cns-depressant", "benzo-zdrug"], "Profound sedation with strong 3A4 inhibitors", { note: "Sensitive intestinal/hepatic 3A4 substrate. Ritonavir, azoles, and grapefruit are labeled problems." }),
	d("pimozide", "Pimozide", ["Orap"], "Typical antipsychotic", [sub("CYP3A4", "sensitive"), sub("CYP1A2", "minor")], ["qt-known", "cns-depressant"], "TdP — contraindicated with strong 3A4 inhibitors", { note: "Narrow-index QT drug. Strong 3A4 inhibitors (clarithromycin, azoles, ritonavir) are labeled contraindicated." }),
	d("thioridazine", "Thioridazine", ["Mellaril"], "Typical antipsychotic", [sub("CYP2D6", "sensitive", "clearance", true), inh("CYP2D6", "moderate")], [
		"qt-known",
		"cns-depressant",
		"anticholinergic"
	], "TdP — contraindicated with strong 2D6 inhibitors and in 2D6 PMs", { note: "Boxed QT warning. Paroxetine, fluoxetine, bupropion, and 2D6 poor metabolizers are a labeled problem." }),
	d("tapentadol", "Tapentadol", ["Nucynta"], "Opioid / NRI analgesic", [], [
		"opioid",
		"cns-depressant",
		"serotonergic",
		"seizure-lowering"
	], "Respiratory depression; serotonin syndrome; seizures", {
		aliases: ["nucynta"],
		note: "UGT2B7, not CYP. Parent is a μ-agonist plus norepinephrine reuptake blocker — MAOIs and other serotonergics still stack."
	}),
	d("hydromorphone", "Hydromorphone", ["Dilaudid", "Exalgo"], "Opioid analgesic", [], ["opioid", "cns-depressant"], "Respiratory depression, sedation", {
		aliases: ["dilaudid"],
		note: "UGT2B7 to H3G, not CYP. PD with benzos, alcohol, GHB, and xylazine still applies."
	}),
	d("carisoprodol", "Carisoprodol", ["Soma"], "Carbamate muscle relaxant", [sub("CYP2C19", "sensitive", "activation")], ["cns-depressant", "seizure-lowering"], "Sedation, respiratory depression, meprobamate accumulation in 2C19 PMs", {
		aliases: ["soma"],
		note: "Prodrug. CYP2C19 to meprobamate (a barbiturate-like sedative). 2C19 PMs and CBD/fluconazole stack parent plus metabolite."
	}),
	d("clonidine", "Clonidine", ["Catapres", "Kapvay"], "Central α2-agonist", [], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Sedation and bradycardia; stacked airway risk with opioids", {
		aliases: ["catapres"],
		note: "Same α2 family as xylazine, at clinical doses. Naloxone does not reverse the α2 sedation. Rebound hypertension on abrupt stop. Still used for opioid withdrawal when lofexidine is not on the shelf."
	}),
	d("lofexidine", "Lofexidine", ["Lucemyra"], "α2-agonist (opioid withdrawal)", [sub("CYP2D6", "major")], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Bradycardia, hypotension; sedation naloxone will not reverse", {
		aliases: ["lucemyra"],
		note: "FDA-approved for opioid withdrawal. Same α2 family as clonidine and xylazine — naloxone will not reverse it. CYP2D6 substrate; paroxetine and fluoxetine raise exposure and bradycardia."
	}),
	d("flecainide", "Flecainide", ["Tambocor"], "Class Ic antiarrhythmic", [sub("CYP2D6", "major")], ["qt-possible"], "Arrhythmia, 2D6 victim toxicity", { note: "CYP2D6 substrate with a narrow-ish index. Strong 2D6 inhibitors raise levels and QRS/QT risk." }),
	d("oxazepam", "Oxazepam", ["Serax"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "UGT-glucuronidated, like lorazepam — often the switch when 3A4/2C19 is blocked. PD stacking still applies." }),
	d("temazepam", "Temazepam", ["Restoril"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "Mostly UGT. Cleaner CYP map than diazepam or alprazolam; not a clean PD map with opioids or alcohol." }),
	d("posaconazole", "Posaconazole", ["Noxafil"], "Azole antifungal", [inh("CYP3A4", "strong"), inh("P-gp", "moderate")], [
		"qt-possible",
		"hepatotoxic",
		"fed-boost"
	], "Victim-drug toxicity via 3A4, QT; oral suspension wants food", { note: "Strong CYP3A4 inhibitor. Oral ketamine, quetiapine, midazolam, simvastatin, and colchicine all move. The suspension is a fed-state absorption victim — delayed-release tablets are quieter with food. High-fat meal on this desk is that row." }),
	d("isocarboxazid", "Isocarboxazid", ["Marplan"], "Irreversible MAOI", [], ["maoi", "serotonergic"], "Hypertensive crisis, serotonin syndrome", { note: "Irreversible MAO-A/B. Same 14-day washout as phenelzine. Tyramine, stimulants, and entactogens are contraindicated." }),
	d("oxcarbazepine", "Oxcarbazepine", ["Trileptal"], "Anticonvulsant", [ind("CYP3A4", "moderate"), inh("CYP2C19", "moderate")], ["cns-depressant"], "Loss of 3A4-victim efficacy (OCPs); 2C19 victim toxicity; hyponatremia", {
		aliases: ["trileptal"],
		note: "Weaker inducer than carbamazepine, still enough to fail oral contraceptives at higher doses."
	}),
	d("paliperidone", "Paliperidone", ["Invega"], "Atypical antipsychotic", [sub("P-gp", "minor")], ["cns-depressant", "qt-possible"], "QT, EPS, hyperprolactinemia", { note: "9-OH-risperidone. Mostly renal, not CYP2D6 — unlike parent risperidone. QT and PD still apply." }),
	d("desipramine", "Desipramine", ["Norpramin"], "Tricyclic antidepressant", [sub("CYP2D6", "sensitive", "clearance", true)], [
		"serotonergic",
		"cns-depressant",
		"anticholinergic",
		"qt-possible",
		"seizure-lowering"
	], "TCA toxicity, arrhythmia", { note: "Sensitive CYP2D6 substrate, narrow-ish index. Paroxetine/fluoxetine/bupropion can spike levels." }),
	d("imipramine", "Imipramine", ["Tofranil"], "Tricyclic antidepressant", [sub("CYP2D6", "major"), sub("CYP2C19", "major", "activation")], [
		"serotonergic",
		"cns-depressant",
		"anticholinergic",
		"qt-possible",
		"seizure-lowering"
	], "TCA toxicity, serotonin syndrome, seizure"),
	d("promethazine", "Promethazine", ["Phenergan"], "Sedating antihistamine", [sub("CYP2D6", "major")], [
		"cns-depressant",
		"anticholinergic",
		"qt-possible"
	], "Additive sedation, delirium, respiratory depression with opioids", {
		aliases: ["phenergan"],
		note: "The window antiemetic. Next to methadone it is airway plus a possible QT drug — not a free nausea drop. Purple-drank stacks are the same map with codeine."
	}),
	d("doxylamine", "Doxylamine", ["Unisom"], "Sedating antihistamine", [], ["cns-depressant", "anticholinergic"], "Additive sedation and anticholinergic burden", { aliases: ["unisom"] }),
	d("chlorpromazine", "Chlorpromazine", ["Thorazine"], "Typical antipsychotic", [
		sub("CYP2D6", "major"),
		sub("CYP1A2", "major"),
		inh("CYP2D6", "weak")
	], [
		"cns-depressant",
		"anticholinergic",
		"qt-possible",
		"seizure-lowering"
	], "Sedation, QT, EPS, stacked anticholinergic load"),
	d("rasagiline", "Rasagiline", ["Azilect"], "MAO-B inhibitor", [sub("CYP1A2", "major")], ["maoi", "serotonergic"], "Serotonin syndrome; pressor with stimulants at higher exposure", { note: "Selective MAO-B at labeled doses; selectivity is not a free pass with MDMA, other serotonergics, or ciprofloxacin (1A2)." }),
	d("lemborexant", "Lemborexant", ["Dayvigo"], "Orexin antagonist", [sub("CYP3A4", "sensitive")], ["cns-depressant"], "Sedation, next-day impairment; 3A4 victim", { note: "Sensitive 3A4 substrate. Strong 3A4 inhibitors are not recommended." }),
	d("piperine", "Black pepper (piperine)", [], "Alkaloid absorption booster", [
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate"),
		inh("CYP2D6", "weak")
	], [], "Raised oral 3A4/P-gp victim exposure", {
		kind: "herb",
		aliases: [
			"black pepper",
			"bioperine",
			"piper nigrum"
		],
		note: "Piperine is a real 3A4/P-gp inhibitor and a bioavailability hack. A heavy pepper extract next to oral ketamine, buspirone, or loperamide is not a seasoning footnote."
	}),
	d("pomegranate", "Pomegranate juice", [], "Intestinal CYP3A4 inhibitor", [inh("CYP3A4", "moderate")], [], "Raised oral 3A4-victim exposure", {
		kind: "food",
		aliases: ["pomegranate", "pom juice"],
		note: "Weaker and less consistent than grapefruit, same intestinal 3A4 neighborhood. Do not treat it as a free grapefruit substitute, or as harmless."
	}),
	d("starfruit", "Star fruit", [], "Furanocoumarin / nephrotoxin", [inh("CYP3A4", "moderate")], ["nephrotoxic", "seizure-lowering"], "Raised oral 3A4-victim exposure; seizures in CKD", {
		kind: "food",
		aliases: ["carambola", "star fruit"],
		note: "3A4 inhibition plus a neurotoxin that seizes in renal failure. Not a cocktail garnish if the GFR is low."
	}),
	d("licorice", "Licorice root", [], "Mineralocorticoid herb", [], ["hypokalemic"], "Hypokalemia, edema, apparent mineralocorticoid excess — worse QT and digoxin toxicity", {
		kind: "herb",
		aliases: [
			"glycyrrhiza",
			"glycyrrhizin",
			"liquorice"
		],
		note: "Glycyrrhizin blocks 11β-HSD2. Potassium falls. QT drugs and digoxin get more dangerous. Deglycyrrhizinated (DGL) is a different product."
	}),
	d("ginkgo", "Ginkgo biloba", [], "Herbal antiplatelet", [inh("CYP2C19", "weak")], ["antiplatelet"], "Bleeding with anticoagulants/antiplatelets; weak 2C19 inhibition", {
		kind: "herb",
		aliases: ["ginkgo biloba", "eb-761"]
	}),
	d("ginseng", "Panax ginseng", [], "Herbal adaptogen", [ind("CYP3A4", "weak")], ["hypoglycemic"], "Possible loss of 3A4-victim efficacy; stacked hypoglycemia", {
		kind: "herb",
		aliases: ["asian ginseng", "panax"]
	}),
	d("milk-thistle", "Milk thistle (silymarin)", [], "Herbal 2C9 / 3A4 modulator", [inh("CYP2C9", "weak"), inh("CYP3A4", "weak")], ["hepatotoxic"], "Modest 2C9/3A4 inhibition — warfarin and oral 3A4 victims can move", {
		kind: "herb",
		aliases: ["silymarin", "silybum"],
		note: "Inhibition is modest and formulation-dependent. Still worth mapping next to warfarin or oral ketamine."
	}),
	d("cruciferous", "Cruciferous vegetables", [], "Dietary CYP1A2 inducer", [ind("CYP1A2", "weak")], [], "Lower 1A2-victim levels (clozapine, olanzapine, caffeine) with a heavy daily load", {
		kind: "food",
		aliases: [
			"broccoli",
			"brussels sprouts",
			"cabbage",
			"kale",
			"indole-3-carbinol"
		],
		note: "Same PAH/AhR neighborhood as smoke, much weaker. A kale phase is not smoking a pack, but 1A2 victims can drift. Kale-as-vitamin-K next to warfarin is a different row — search leafy greens."
	}),
	d("dairy", "Dairy / milk", [], "Calcium-rich meal", [], [], "Chelates fluoroquinolones, tetracyclines, bisphosphonates, and levothyroxine", {
		kind: "food",
		aliases: [
			"milk",
			"yogurt",
			"yoghurt",
			"calcium meal",
			"cheese sandwich",
			"latte",
			"dairy"
		],
		note: "The calcium in a glass of milk — not the tyramine in aged cheddar. Cipro, tetracycline, Fosamax, and Synthroid never arrive. Separate by several hours. Aged-cheese MAOI is a different row."
	}),
	d("leafy-greens", "Leafy greens (vitamin K)", [], "Phylloquinone meal", [], ["vitk-food"], "Loss of warfarin anticoagulation", {
		kind: "food",
		aliases: [
			"kale",
			"spinach",
			"collards",
			"swiss chard",
			"kale smoothie",
			"vitamin k foods",
			"dark leafy"
		],
		note: "Dietary phylloquinone. A kale phase dumps INR; a consistent salad is easier to warfarin-adjust around. The K gummy is a different row. Not 2C9."
	}),
	d("oatp-juice", "Apple / orange juice", [], "OATP2B1 fruit juice", [], ["oatp-block"], "Lost absorption of fexofenadine, atenolol, nadolol, aliskiren", {
		kind: "food",
		aliases: [
			"apple juice",
			"orange juice",
			"oj",
			"fruit juice",
			"oatp",
			"tropicana"
		],
		note: "OATP2B1/1A2, not CYP3A4. Apple and orange juice cut Allegra, Tenormin, Corgard, and Tekturna. Grapefruit does this AND knocks out gut 3A4 — they are not interchangeable. Acidic-juice-as-amphetamine-acidifier is a different row."
	}),
	d("coffee", "Coffee / black tea", [], "Polyphenol beverage", [], ["polyphenol-drink"], "Lost levothyroxine and iron absorption — not the 1A2 caffeine row", {
		kind: "food",
		aliases: [
			"espresso",
			"morning coffee",
			"black tea",
			"tea with iron",
			"tannins",
			"americano",
			"coffee"
		],
		note: "Tannins bind levothyroxine and iron in the gut. Espresso with Synthroid is an empty TSH (Benvenga). Caffeine-as-1A2-substrate is a different bottle. Green-tea extract (EGCG) is the 3A4/liver capsule, not this cup."
	}),
	d("protein-meal", "High-protein meal", [], "Large-neutral amino acid load", [], ["protein-load"], "Lost levodopa 'on' time", {
		kind: "food",
		aliases: [
			"protein",
			"steak",
			"protein shake",
			"whey",
			"high protein",
			"amino acids"
		],
		note: "Leu/Phe/Tyr compete with levodopa at LAT1 in gut and brain. A protein breakfast next to Sinemet is a motor fluctuation, not CYP. Iron chelation is a separate row."
	}),
	d("soy", "Soy protein / soy milk", [], "Soy food (T4 binder / vitamin K)", [], ["vitk-food"], "Lost levothyroxine absorption; INR drift with warfarin", {
		kind: "food",
		aliases: [
			"soy milk",
			"soy protein",
			"tofu",
			"edamame",
			"soy formula",
			"soya",
			"soy"
		],
		note: "Soy binds levothyroxine in the gut and carries some vitamin K. Formula and protein shakes are the row, not a splash of soy sauce (that one is tyramine). Separate from Synthroid by several hours."
	}),
	d("high-k-foods", "High-potassium foods", [], "Dietary potassium load", [], ["k-food"], "Hyperkalemia with ACEI/ARB and spironolactone", {
		kind: "food",
		aliases: [
			"banana",
			"salt substitute",
			"potato",
			"coconut water",
			"high potassium",
			"losalt",
			"k foods"
		],
		note: "Bananas, potatoes, salt-substitute KCl, coconut water. Next to lisinopril plus spironolactone this is the hyperK triad without a Slow-K bottle. The potassium-supplement row is separate."
	}),
	d("histamine-fish", "Aged / histamine fish", [], "Scombroid / histamine meal", [], ["histamine"], "Flushing and headache with isoniazid (and MAOIs)", {
		kind: "food",
		aliases: [
			"tuna",
			"mackerel",
			"scombroid",
			"aged fish",
			"mahi",
			"histamine fish"
		],
		note: "INH blocks diamine oxidase. Tuna or mackerel that would be mild scombroid in anyone becomes a flush-and-headache reaction on isoniazid. MAOIs add a tyramine/histamine overlap — not the cheese plate, a different amine."
	}),
	d("enteral-feed", "Enteral / tube feed", [], "Continuous nutrition binding", [], ["enteral"], "Lost phenytoin, warfarin, and levothyroxine absorption", {
		kind: "food",
		aliases: [
			"tube feed",
			"ng feed",
			"osmolite",
			"jevity",
			"enteral nutrition",
			"tfn",
			"nasogastric"
		],
		note: "Bauer 1982. Continuous NG feeds bind phenytoin — levels crash, seizures return. Warfarin and Synthroid also lose the dose. Hold the feed, flush, separate. Not CYP."
	}),
	d("dexmedetomidine", "Dexmedetomidine", ["Precedex", "Igalmi"], "Central α2-agonist (IV anesthetic adjunct)", [], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Sedation naloxone will not reverse; bradycardia, stacked airway risk with opioids", {
		aliases: ["precedex", "dexmed"],
		note: "Clinical cousin of xylazine and medetomidine. Same α2 map: naloxone reverses the opioid, not the α2. Ketamine-clinic recovery stacks."
	}),
	d("propofol", "Propofol", ["Diprivan"], "IV anesthetic", [sub("CYP2B6", "minor")], ["cns-depressant"], "Apnea, hypotension; stacked CNS depression with benzos, opioids, ketamine", {
		aliases: ["diprivan", "milk of amnesia"],
		note: "Mostly UGT. The CYP row is quiet. PD with midazolam, fentanyl, and ketamine is the airway story."
	}),
	d("prazosin", "Prazosin", ["Minipress"], "Alpha-1 blocker", [], ["alpha-blocker"], "First-dose syncope; orthostasis with alcohol or PDE5 inhibitors", {
		aliases: ["minipress"],
		note: "PTSD-nightmare dose still drops standing blood pressure. Alcohol and sildenafil stack the orthostasis, not a CYP row."
	}),
	d("seven-oh", "7-Hydroxymitragynine", [], "Kratom μ-agonist (7-OH)", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "Respiratory depression; 3A4 victim; benzo/alcohol/xylazine airway stack", {
		aliases: [
			"7-oh",
			"7oh",
			"7-hydroxymitragynine",
			"7-oh-mitragynine"
		],
		note: "Much hotter μ-agonist than mitragynine. Street 7-OH tablets are an opioid map, not a tea map. 3A4 inhibitors raise exposure."
	}),
	d("nalbuphine", "Nalbuphine", ["Nubain"], "Mixed opioid agonist–antagonist", [], [
		"opioid",
		"cns-depressant",
		"opioid-antagonist"
	], "Respiratory depression; precipitated withdrawal in full-agonist dependence", {
		aliases: ["nubain"],
		note: "Kappa agonist / mu antagonist. Can precipitate withdrawal in a methadone or fentanyl-dependent patient, and still stack CNS depression."
	}),
	d("guanfacine", "Guanfacine", ["Intuniv", "Tenex"], "Central α2-agonist", [sub("CYP3A4", "major")], [
		"alpha2-agonist",
		"cns-depressant",
		"bradycardic"
	], "Sedation and bradycardia; 3A4 victim; stacked airway risk with opioids", {
		aliases: ["intuniv", "tenex"],
		note: "ADHD α2 agonist. Strong 3A4 inhibitors raise levels. Same naloxone-will-not-reverse family as clonidine and xylazine."
	}),
	d("primidone", "Primidone", ["Mysoline"], "Barbiturate anticonvulsant (prodrug)", [
		sub("CYP2C19", "major", "activation"),
		ind("CYP3A4", "strong"),
		ind("CYP2C9", "strong"),
		ind("CYP2C19", "moderate"),
		ind("P-gp", "moderate")
	], ["cns-depressant", "seizure-lowering"], "Loss of victim-drug efficacy (OCPs, DOACs, ketamine); stacked sedation", {
		aliases: ["mysoline"],
		note: "Activated to phenobarbital. Pan-CYP induction after days to weeks. Same OCP-failure map as carbamazepine."
	}),
	d("etonitazene", "Etonitazene", [], "Benzimidazole opioid (nitazene)", [sub("CYP3A4", "major")], ["opioid", "cns-depressant"], "High-potency μ-agonist respiratory arrest; 3A4 victim toxicity", { aliases: ["etazene", "nitazene"] }),
	d("diclazepam", "Diclazepam", [], "Designer benzodiazepine", [sub("CYP3A4", "major")], [
		"benzo-zdrug",
		"cns-depressant",
		"seizure-lowering"
	], "Long-acting RC benzo; opioid airway stack, delayed withdrawal", {
		aliases: ["chlorodiazepam"],
		note: "Metabolizes toward delorazepam / lorazepam / lormetazepam. Long tail. Treat as a 3A4 benzo next to opioids."
	}),
	d("vilazodone", "Vilazodone", ["Viibryd"], "SPAR antidepressant", [sub("CYP3A4", "major")], ["serotonergic", "ssri-snri"], "Serotonin syndrome; 3A4 victim", {
		aliases: ["viibryd"],
		note: "SSRI plus 5-HT1A partial agonist. Strong 3A4 inhibitors raise exposure. MAOIs remain contraindicated."
	}),
	d("aprepitant", "Aprepitant", ["Emend"], "NK1 antagonist (antiemetic)", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "moderate"),
		ind("CYP2C9", "weak")
	], [], "Raised 3A4-victim levels (oral midazolam, ketamine); modest 2C9 induction (warfarin)", {
		aliases: ["emend", "fosaprepitant"],
		note: "Moderate 3A4 inhibitor for a few days around a dose, then a weak 2C9 inducer. Check INR after a course next to warfarin."
	}),
	d("famotidine", "Famotidine", ["Pepcid"], "H2 blocker", [], [], "Not a CYP perpetrator — the switch when cimetidine is the problem", {
		aliases: ["pepcid"],
		note: "Unlike cimetidine, famotidine does not meaningfully inhibit 1A2/2D6/3A4. Put both on the materia when someone asks 'which H2 is safe next to tizanidine.'"
	}),
	d("oxymorphone", "Oxymorphone", ["Opana"], "Opioid analgesic", [], ["opioid", "cns-depressant"], "Respiratory depression, sedation", {
		aliases: ["opana"],
		note: "Mostly UGT, not CYP. PD with benzos, alcohol, GHB, and α2-agonists still applies. Alcohol dumps ER oxymorphone."
	}),
	d("dirty-30", "Dirty 30 (pressed M30)", [], "Street pressed opioid", [sub("CYP3A4", "sensitive")], ["opioid", "cns-depressant"], "Respiratory arrest; contents are not oxycodone", {
		aliases: [
			"dirty 30",
			"dirty 30s",
			"dirty thirty",
			"dirty thirties",
			"pressed 30",
			"pressed 30s",
			"blues",
			"m30",
			"m 30",
			"fake perc 30",
			"pressed perc",
			"pressed oxy"
		],
		note: "Street tablets stamped M30 are typically illicit fentanyl ± xylazine or a nitazene, not pharmaceutical oxycodone. This row is the tablet as sold. Pair xylazine for the α2 stack naloxone will not reverse. Percocet / percs is the real oxycodone + APAP combo."
	}),
	d("epclusa", "Sofosbuvir / velpatasvir", ["Epclusa"], "HCV DAA", [
		sub("P-gp", "major"),
		inh("P-gp", "moderate"),
		sub("CYP3A4", "minor")
	], ["hepatotoxic"], "Loss of DAA exposure with strong inducers — not a methadone dump", {
		aliases: [
			"epclusa",
			"sofosbuvir",
			"velpatasvir",
			"sof/vel"
		],
		note: "Pan-genotypic HCV treatment common on MAT desks. Strong inducers (rifampin, carbamazepine, St. John's wort) are labeled contraindicated — the DAA fails. Methadone exposure usually does not dump. Contrast rifampin next to methadone, which does."
	}),
	d("azathioprine", "Azathioprine", ["Imuran", "Azasan"], "Thiopurine immunosuppressant", [], ["immunosuppressant"], "Marrow suppression — xanthine oxidase blockade is labeled", {
		aliases: [
			"imuran",
			"aza",
			"azasan"
		],
		note: "Prodrug to 6-MP. Xanthine oxidase (allopurinol, febuxostat) and TPMT both clear 6-MP; block XO and the marrow sees a multiple of the dose. Not a CYP isoform on this desk."
	}),
	d("mercaptopurine", "Mercaptopurine", ["Purinethol", "Purixan"], "Thiopurine antimetabolite", [], ["immunosuppressant"], "Marrow suppression with xanthine oxidase inhibitors", {
		aliases: [
			"6-mp",
			"6mp",
			"6-mercaptopurine",
			"purinethol"
		],
		note: "The active thiopurine. Same XO map as azathioprine. Allopurinol is a labeled dose-cut or hold, not a gout footnote."
	}),
	d("febuxostat", "Febuxostat", ["Uloric"], "Xanthine oxidase inhibitor", [], [], "Boxed CV death; marrow suppression with azathioprine / 6-MP", {
		aliases: ["uloric"],
		note: "Same XO enzyme as allopurinol. Coadministration with azathioprine or 6-MP is contraindicated. Not a CYP perpetrator."
	}),
	d("terbinafine", "Terbinafine", ["Lamisil"], "Allylamine antifungal", [inh("CYP2D6", "strong")], ["hepatotoxic"], "2D6 victim toxicity; hepatotoxicity", {
		aliases: ["lamisil"],
		note: "Weeks of nail-fungus Lamisil is a strong 2D6 inhibitor. Metoprolol, desipramine, tamoxifen activation, and codeine all move. Not an azole — the 3A4 row stays quiet."
	}),
	d("mirabegron", "Mirabegron", ["Myrbetriq"], "Beta-3 agonist (OAB)", [sub("CYP3A4", "minor"), inh("CYP2D6", "moderate")], [], "Raised 2D6-victim levels; hypertension", {
		aliases: ["myrbetriq"],
		note: "Moderate 2D6 inhibitor at the OAB dose. Metoprolol, desipramine, and tamoxifen can move. Not an anticholinergic — that is oxybutynin on this desk."
	}),
	d("fenofibrate", "Fenofibrate", [
		"Tricor",
		"Trilipix",
		"Antara"
	], "Fibrate", [inh("CYP2C9", "weak")], ["fibrate"], "Myopathy with statins (preferable to gemfibrozil)", {
		aliases: [
			"tricor",
			"trilipix",
			"fenofibric acid"
		],
		note: "Still a statin × fibrate myopathy pair, usually major rather than the gemfibrozil–simvastatin contraindication. Weak 2C9 — warfarin INR can drift."
	}),
	d("isosorbide-mononitrate", "Isosorbide mononitrate", ["Imdur", "Monoket"], "Nitrate", [], ["nitrate"], "Catastrophic hypotension with PDE5 inhibitors", {
		aliases: [
			"imdur",
			"ismn",
			"isosorbide",
			"isosorbide mn"
		],
		note: "The daily angina nitrate. Same PDE5 map as nitroglycerin — Viagra, Cialis, Levitra, and poppers. Not a CYP substrate."
	}),
	d("ranolazine", "Ranolazine", ["Ranexa"], "Antianginal", [
		sub("CYP3A4", "sensitive"),
		inh("CYP2D6", "moderate"),
		sub("P-gp", "major"),
		inh("P-gp", "moderate")
	], ["qt-possible"], "QT; 3A4 victim toxicity — labeled with strong inhibitors", {
		aliases: ["ranexa"],
		note: "Sensitive 3A4 substrate. Strong 3A4 inhibitors (clarithromycin, azoles, ritonavir) are labeled contraindicated. Also a moderate 2D6 inhibitor."
	}),
	d("ticagrelor", "Ticagrelor", ["Brilinta"], "P2Y12 inhibitor", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "weak"),
		sub("P-gp", "major")
	], ["antiplatelet"], "Bleeding; loss of effect with strong 3A4 inducers", {
		aliases: ["brilinta"],
		note: "Not a prodrug — unlike clopidogrel, 2C19 PPIs do not blunt it. Strong 3A4 inhibitors/inducers and aspirin >100 mg are the labeled problems."
	}),
	d("hydroxychloroquine", "Hydroxychloroquine", ["Plaquenil"], "DMARD / antimalarial", [
		sub("CYP2D6", "minor"),
		sub("CYP3A4", "minor"),
		sub("CYP2C8", "minor")
	], ["qt-possible"], "Retinopathy, QT, cardiomyopathy", {
		aliases: ["plaquenil", "hcq"],
		note: "The CYP row is quiet. QT plus another known-QT drug (citalopram, methadone, ondansetron) is the collision, plus the eye exam."
	}),
	d("sumatriptan", "Sumatriptan", ["Imitrex"], "Triptan", [], ["serotonergic"], "Serotonin syndrome with MAOIs; vasospasm", {
		aliases: ["imitrex"],
		note: "MAO-A, not CYP. Phenelzine and other MAOIs are labeled contraindicated. An SSRI pair is the usual warning, not the MAOI row."
	}),
	d("eletriptan", "Eletriptan", ["Relpax"], "Triptan", [sub("CYP3A4", "sensitive")], ["serotonergic"], "3A4 victim toxicity; serotonin syndrome with MAOIs", {
		aliases: ["relpax"],
		note: "The CYP triptan. Strong 3A4 inhibitors are labeled — do not give Relpax within 72 h of clarithromycin, azoles, or ritonavir. Sumatriptan is the MAO-A cousin."
	}),
	d("budesonide", "Budesonide (oral / gut)", [
		"Entocort",
		"Uceris",
		"Pulmicort"
	], "Corticosteroid", [sub("CYP3A4", "sensitive")], [], "Iatrogenic Cushing / adrenal suppression with 3A4 inhibitors", {
		aliases: [
			"entocort",
			"uceris",
			"pulmicort"
		],
		note: "Oral Entocort/Uceris is a sensitive gut 3A4 first-pass victim — ketoconazole and grapefruit make a 'local' steroid systemic. Inhaled Pulmicort is quieter than fluticasone next to ritonavir, not zero."
	}),
	d("dexamethasone", "Dexamethasone", ["Decadron", "DexPak"], "Corticosteroid", [sub("CYP3A4", "major"), ind("CYP3A4", "moderate")], [], "Loss of 3A4-victim efficacy after days of induction", {
		aliases: [
			"decadron",
			"dexpak",
			"dex"
		],
		note: "Substrate and moderate 3A4 inducer. A few days of Decadron can dump OCPs, DOACs, and oral midazolam. Prednisone on this desk is not that inducer."
	}),
	d("eplerenone", "Eplerenone", ["Inspra"], "Mineralocorticoid antagonist", [sub("CYP3A4", "sensitive")], ["k-sparing"], "Hyperkalemia; 3A4 victim — labeled with strong inhibitors", {
		aliases: ["inspra"],
		note: "Sensitive 3A4 substrate. Strong 3A4 inhibitors are contraindicated. Spironolactone is the cousin without the CYP row — both still hyperkalemia next to an ACEI/ARB."
	}),
	d("nifedipine", "Nifedipine", [
		"Procardia",
		"Adalat",
		"Nifedical"
	], "Dihydropyridine CCB", [sub("CYP3A4", "sensitive")], [], "Hypotension, edema — grapefruit is labeled", {
		aliases: ["procardia", "adalat"],
		note: "Sensitive 3A4, more first-pass than amlodipine. Grapefruit and azoles raise parent. IR nifedipine is the old hypotension trap; ER is still a 3A4 victim. Felodipine is the original Lancet juice paper."
	}),
	d("felodipine", "Felodipine", ["Plendil"], "Dihydropyridine CCB", [sub("CYP3A4", "sensitive")], [], "Hypotension, edema — the original grapefruit victim", {
		aliases: ["plendil"],
		note: "Bailey 1991. Intestinal 3A4 first-pass is the whole story. Grapefruit raises F; hepatic 3A4 (an IV map) barely moves. Amlodipine is the quieter cousin; nifedipine is on this shelf too."
	}),
	d("glimepiride", "Glimepiride", ["Amaryl"], "Sulfonylurea", [sub("CYP2C9", "major")], ["hypoglycemic", "insulin-secretagogue"], "Hypoglycemia — 2C9 PMs and inhibitors raise parent", { aliases: ["amaryl"] }),
	d("pioglitazone", "Pioglitazone", ["Actos"], "Thiazolidinedione", [sub("CYP2C8", "sensitive"), sub("CYP3A4", "minor")], ["hypoglycemic"], "Edema, heart failure; 2C8 victim (gemfibrozil)", {
		aliases: ["actos"],
		note: "Sensitive CYP2C8 substrate. Gemfibrozil is a strong 2C8 inhibitor — labeled dose cap or avoid. Fluid retention next to a glitazone is PD, not this curve."
	}),
	d("empagliflozin", "Empagliflozin", ["Jardiance"], "SGLT2 inhibitor", [], [], "Euglycemic DKA, genital mycosis, volume depletion", {
		aliases: ["jardiance"],
		note: "UGT, not CYP. The collision is volume/AKI next to a diuretic or ACEI, and DKA with a sick day — not a cytochrome row. Stacked hypo with a sulfonylurea is still real."
	}),
	d("dapagliflozin", "Dapagliflozin", ["Farxiga"], "SGLT2 inhibitor", [], [], "Euglycemic DKA, genital mycosis, volume depletion", {
		aliases: ["farxiga"],
		note: "Same SGLT2 map as empagliflozin. Not a CYP substrate. Search jardiance if you want the class."
	}),
	d("semaglutide", "Semaglutide", [
		"Ozempic",
		"Wegovy",
		"Rybelsus"
	], "GLP-1 agonist", [], [], "Stacked hypoglycemia with sulfonylureas / insulin; delayed gastric emptying", {
		aliases: [
			"ozempic",
			"wegovy",
			"rybelsus",
			"sema"
		],
		note: "Peptide. Not a CYP substrate. Delayed gastric emptying can slow oral drugs (including OCPs and some desk victims). Hypoglycemia is the SU/insulin pair, not metformin."
	}),
	d("tirzepatide", "Tirzepatide", ["Mounjaro", "Zepbound"], "GIP / GLP-1 agonist", [], [], "Stacked hypoglycemia with sulfonylureas / insulin", {
		aliases: ["mounjaro", "zepbound"],
		note: "Same peptide map as semaglutide — no CYP, delayed emptying, hypo with a secretagogue."
	}),
	d("sirolimus", "Sirolimus", ["Rapamune"], "mTOR inhibitor", [sub("CYP3A4", "sensitive", "clearance", true), sub("P-gp", "major")], ["immunosuppressant"], "NTI — infection, marrow, hyperlipidemia; 3A4/P-gp victim", {
		aliases: ["rapamune", "rapamycin"],
		note: "Narrow index like tacrolimus. Azoles, grapefruit, and ritonavir multiply AUC. Inducers dump it and risk rejection. Not a dose."
	}),
	d("mycophenolate", "Mycophenolate", ["CellCept", "Myfortic"], "Antimetabolite immunosuppressant", [], ["immunosuppressant"], "Marrow suppression, GI toxicity, infection", {
		aliases: [
			"cellcept",
			"myfortic",
			"mmf",
			"mycophenolate mofetil"
		],
		note: "UGT, not CYP. PPIs and antacids cut absorption. The azathioprine/XO story is a different antimetabolite."
	}),
	d("metoclopramide", "Metoclopramide", ["Reglan"], "Prokinetic / D2 antagonist", [sub("CYP2D6", "major")], ["cns-depressant"], "Tardive dyskinesia, EPS — 2D6 PMs and inhibitors raise exposure", {
		aliases: ["reglan"],
		note: "Boxed tardive warning. 2D6 PMs and strong 2D6 inhibitors (paroxetine, fluoxetine, bupropion, terbinafine) raise parent. Not an ondansetron QT cousin."
	}),
	d("diclofenac", "Diclofenac", [
		"Voltaren",
		"Cataflam",
		"Flector"
	], "NSAID", [sub("CYP2C9", "major")], [
		"nsaid",
		"nephrotoxic",
		"hepatotoxic"
	], "GI bleed, AKI, hepatotoxicity", { aliases: ["voltaren", "cataflam"] }),
	d("meloxicam", "Meloxicam", ["Mobic"], "NSAID", [sub("CYP2C9", "major")], ["nsaid", "nephrotoxic"], "GI bleed, AKI", { aliases: ["mobic"] }),
	d("ketorolac", "Ketorolac", ["Toradol"], "NSAID", [sub("CYP2C9", "minor")], ["nsaid", "nephrotoxic"], "GI bleed, AKI — 5-day ceiling", {
		aliases: ["toradol"],
		note: "The IM/IV NSAID. Same ACEI × NSAID GFR hit and MTX clearance story as ibuprofen, louder GI. Not a CYP perpetrator."
	}),
	d("fluticasone", "Fluticasone", [
		"Flonase",
		"Flovent",
		"Advair"
	], "Inhaled / nasal corticosteroid", [sub("CYP3A4", "sensitive")], [], "Iatrogenic Cushing with strong 3A4 inhibitors (ritonavir)", {
		aliases: [
			"flonase",
			"flovent",
			"advair",
			"arnuity"
		],
		note: "Swallowed fraction is a sensitive 3A4 first-pass victim. Ritonavir/cobicistat plus Flonase is the classic iatrogenic Cushing / adrenal pair. Not 'just a spray.'"
	}),
	d("fexofenadine", "Fexofenadine", ["Allegra"], "Second-generation antihistamine", [sub("P-gp", "major")], [], "Loss of effect with fruit juice (OATP); raised levels with P-gp block", {
		aliases: ["allegra"],
		note: "P-gp/OATP, not CYP. Apple/orange/grapefruit juice cut absorption (search apple juice). Verapamil and other P-gp inhibitors raise it. The one 2nd-gen antihistamine with a transporter map. Juice is loss of effect, not a CYP rise."
	}),
	d("oxybutynin", "Oxybutynin", ["Ditropan", "Oxytrol"], "Antimuscarinic (OAB)", [sub("CYP3A4", "major")], ["anticholinergic", "cns-depressant"], "Delirium, retention — stacked anticholinergic burden", {
		aliases: ["ditropan", "oxytrol"],
		note: "3A4 to N-desethyloxybutynin. Strong inhibitors raise parent. PD with diphenhydramine, hydroxyzine, TCAs, and benztropine is delirium in older adults. Mirabegron is the non-anticholinergic OAB switch."
	}),
	d("enoxaparin", "Enoxaparin", ["Lovenox"], "LMWH", [], ["anticoagulant"], "Bleeding with antiplatelets / NSAIDs", {
		aliases: ["lovenox", "lmwh"],
		note: "Not a CYP substrate. The collision is stacked bleeding with NSAIDs, aspirin, SSRIs, and DOACs — not a cytochrome row."
	}),
	d("atenolol", "Atenolol", ["Tenormin"], "Beta blocker", [], ["beta-blocker", "bradycardic"], "Bradycardia, heart block, hypotension", {
		aliases: ["tenormin"],
		note: "Renal, not CYP2D6. The switch when metoprolol is a 2D6 victim (paroxetine, terbinafine, 2D6 PM). Apple/orange juice cut OATP absorption — search apple juice. PD with non-DHP CCBs still applies."
	}),
	d("nadolol", "Nadolol", ["Corgard"], "Beta blocker (OATP)", [], ["beta-blocker", "bradycardic"], "Lost effect with fruit juice and green tea (OATP)", {
		aliases: ["corgard"],
		note: "Renal, not 2D6. OATP1A2 substrate — green tea and apple/orange juice cut AUC sharply (Misaka). Atenolol is the quieter cousin on the same transporter. Not a CYP row."
	}),
	d("valsartan", "Valsartan", ["Diovan"], "ARB", [], ["acei-arb", "nephrotoxic"], "Hyperkalemia, acute kidney injury", {
		aliases: ["diovan"],
		note: "OATP, not CYP — unlike losartan, which needs 2C9 activation. Same RAAS PD: NSAID GFR hit, K-sparing hyperkalemia, lithium. Fruit juice dumping aliskiren is a different OATP row."
	}),
	d("aliskiren", "Aliskiren", ["Tekturna"], "Direct renin inhibitor", [], ["acei-arb", "nephrotoxic"], "Lost absorption with fruit juice (OATP); hyperkalemia with ACEI/ARB", {
		aliases: ["tekturna", "rasilez"],
		note: "OATP2B1. Apple, orange, and grapefruit juice dump aliskiren. Dual RAAS block with an ACEI is a different, labeled problem. Not a CYP substrate."
	}),
	d("chlorthalidone", "Chlorthalidone", ["Thalitone"], "Thiazide-like diuretic", [], ["loop-thiazide"], "Hyponatremia, hypokalemia, gout, lithium rise", {
		aliases: ["thalitone"],
		note: "Longer than HCTZ, same lithium and ACEI/NSAID triple-whammy map. Not a CYP substrate."
	}),
	d("amoxicillin", "Amoxicillin", ["Amoxil", "Augmentin"], "Beta-lactam antibiotic", [], [], "Hypersensitivity; not a CYP perpetrator", {
		aliases: [
			"amoxil",
			"augmentin",
			"amox",
			"amoxicillin-clavulanate"
		],
		note: "The quiet penicillin. Unlike clarithromycin it does not inhibit 3A4, and unlike TMP-SMX it does not raise MTX or potassium. Put it next to warfarin if you want the desk to stay mostly quiet."
	}),
	d("cephalexin", "Cephalexin", ["Keflex"], "Cephalosporin", [], [], "Hypersensitivity; not a CYP perpetrator", { aliases: ["keflex"] }),
	d("doxycycline", "Doxycycline", ["Vibramycin", "Doryx"], "Tetracycline antibiotic", [], [], "Photosensitivity; chelation with cations — not a CYP perpetrator", {
		aliases: [
			"vibramycin",
			"doryx",
			"doxy"
		],
		note: "Not an inducer like rifampin and not a 3A4 inhibitor like clarithromycin. Cations and dairy still bind it, less brutally than tetracycline itself. Isotretinoin is the other labeled problem."
	}),
	d("tetracycline", "Tetracycline", [], "Tetracycline antibiotic", [], [], "Chelation with dairy and cations — the original milk trap", {
		aliases: ["sumycin", "achaomycin"],
		note: "More dairy-sensitive than doxycycline. A glass of milk can empty the course. Not an inducer and not a 3A4 inhibitor. Cations are the map."
	}),
	d("alendronate", "Alendronate", ["Fosamax"], "Bisphosphonate", [], ["empty-stomach"], "Lost absorption with any food, dairy, or cations — take fasting upright", {
		aliases: [
			"fosamax",
			"bisphosphonate",
			"alendronic",
			"risedronate",
			"actonel"
		],
		note: "Anything in the stomach kills F. Dairy, calcium, coffee, a meal. Thirty minutes before food, full glass of water, stay upright. Not a CYP substrate. Risedronate is the same empty-stomach map."
	}),
	d("albuterol", "Albuterol", [
		"ProAir",
		"Ventolin",
		"Proventil"
	], "Short-acting beta-2 agonist", [], [], "Tachycardia, hypokalemia at high dose — not a CYP substrate", { aliases: [
		"salbutamol",
		"proair",
		"ventolin",
		"proventil"
	] }),
	d("cetirizine", "Cetirizine", ["Zyrtec"], "Second-generation antihistamine", [], [], "Somnolence at high dose — not a CYP perpetrator", {
		aliases: ["zyrtec"],
		note: "Renal, not CYP. The switch when hydroxyzine or diphenhydramine would stack anticholinergic and QT load. Fexofenadine is the P-gp cousin."
	}),
	d("sitagliptin", "Sitagliptin", ["Januvia"], "DPP-4 inhibitor", [], [], "Rare pancreatitis; modest glucose effect — not a CYP substrate", { aliases: ["januvia"] }),
	d("benztropine", "Benztropine", ["Cogentin"], "Antimuscarinic (EPS)", [], ["anticholinergic", "cns-depressant"], "Delirium, retention — stacked anticholinergic burden", {
		aliases: ["cogentin"],
		note: "The EPS antidote that is itself an anticholinergic. Stacks with diphenhydramine, oxybutynin, TCAs, hydroxyzine. Not a CYP story."
	}),
	d("vardenafil", "Vardenafil", ["Levitra", "Staxyn"], "PDE5 inhibitor", [sub("CYP3A4", "major")], ["pde5"], "Severe hypotension with nitrates; QT possible", {
		aliases: ["levitra", "staxyn"],
		note: "Same nitrate contraindication as sildenafil. 3A4 victim — azoles and protease inhibitors raise parent."
	}),
	d("doxazosin", "Doxazosin", ["Cardura"], "Alpha-1 blocker", [sub("CYP3A4", "major")], ["alpha-blocker"], "First-dose syncope; orthostasis with PDE5 inhibitors", { aliases: ["cardura"] }),
	d("lansoprazole", "Lansoprazole", ["Prevacid"], "PPI", [sub("CYP2C19", "major"), inh("CYP2C19", "weak")], [], "Weaker clopidogrel interaction than omeprazole", {
		aliases: ["prevacid"],
		note: "2C19 substrate, weaker inhibitor than omeprazole/esomeprazole. Pantoprazole is still the usual clopidogrel switch."
	}),
	d("red-yeast-rice", "Red yeast rice", [], "Monacolin K (lovastatin analog)", [sub("CYP3A4", "sensitive")], ["statin"], "Myopathy; 3A4 victim toxicity — this is a statin", {
		kind: "herb",
		aliases: [
			"red yeast",
			"monacolin",
			"cholestin",
			"xuezhikang"
		],
		note: "Monacolin K is lovastatin. Grapefruit, azoles, and gemfibrozil are the same map as Zocor. 'Natural cholesterol support' is not a free statin."
	}),
	d("sam-e", "SAM-e", [], "S-adenosylmethionine", [], ["serotonergic"], "Serotonin syndrome with MAOIs, SSRIs, MDMA, tramadol", {
		kind: "herb",
		aliases: [
			"same",
			"ademetionine",
			"s-adenosylmethionine"
		],
		note: "A methyl donor sold for mood and joints. It is serotonergic. Next to an MAOI or an SSRI this is the same PD as 5-HTP, not a wellness footnote."
	}),
	d("vitamin-k", "Vitamin K (phytonadione / MK-7)", [], "Vitamin K supplement", [], [], "Loss of warfarin anticoagulation", {
		kind: "herb",
		aliases: [
			"phytonadione",
			"phylloquinone",
			"menaquinone",
			"mk-7",
			"mk7",
			"vitamin k2",
			"vitamin k1"
		],
		note: "The antidote is also a gummy. Kale, MK-7, and IV phytonadione all dump INR. Not a 2C9 story — it bypasses the enzyme."
	}),
	d("fish-oil", "Fish oil (omega-3)", [], "Omega-3 supplement", [], ["antiplatelet"], "Bleeding with anticoagulants and other antiplatelets", {
		kind: "herb",
		aliases: [
			"omega-3",
			"omega 3",
			"epa",
			"dha",
			"lovaza",
			"icosapent",
			"krill oil"
		],
		note: "High-dose EPA/DHA impair platelet aggregation. A gram with dinner is quieter than a 4 g lipid dose next to warfarin or apixaban."
	}),
	d("garlic", "Garlic extract", [], "Allium supplement", [], ["antiplatelet"], "Bleeding with anticoagulants / antiplatelets", {
		kind: "herb",
		aliases: [
			"allicin",
			"allium sativum",
			"aged garlic"
		],
		note: "Food garlic is seasoning. Concentrated aged-garlic extracts are the bleed row. Do not stack with warfarin, DOACs, or ginkgo as a 'heart stack.'"
	}),
	d("turmeric", "Turmeric / curcumin", [], "Curcuminoid supplement", [inh("CYP3A4", "weak"), inh("CYP2C9", "weak")], ["antiplatelet"], "Bleeding; modest 3A4/2C9 inhibition at extract doses", {
		kind: "herb",
		aliases: [
			"curcumin",
			"curcuma",
			"golden milk",
			"meriva"
		],
		note: "Piperine is often co-formulated to raise curcumin — that adds the black-pepper 3A4/P-gp hit already on this shelf. The spice in food is not this extract."
	}),
	d("vitamin-e", "Vitamin E (high-dose)", [], "Tocopherol supplement", [], ["antiplatelet"], "Bleeding at high IU with anticoagulants", {
		kind: "herb",
		aliases: [
			"tocopherol",
			"alpha-tocopherol",
			"vitamin e"
		],
		note: "Dietary E is not the row. Hundreds of IU next to warfarin or a DOAC is the bleed map. Not a CYP perpetrator."
	}),
	d("yohimbine", "Yohimbine", [], "α2-antagonist (sexual / stimulant herb)", [sub("CYP2D6", "major")], ["stimulant"], "Pressor crisis with MAOIs; 2D6 victim tachycardia", {
		kind: "herb",
		aliases: [
			"yohimbe",
			"pausinystalia",
			"aphrodyne"
		],
		note: "α2 blockade raises NE. MAOIs, stimulants, and 2D6 PMs are a pressor and arrhythmia story. Not a gym footnote."
	}),
	d("quercetin", "Quercetin", [], "Flavonol supplement", [
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate"),
		inh("CYP2C8", "moderate")
	], [], "Raised oral 3A4/P-gp and 2C8 victim levels", {
		kind: "herb",
		aliases: ["flavonol", "sophora"],
		note: "A real 3A4/P-gp/2C8 inhibitor at supplement grams. Next to simvastatin, oral ketamine, or repaglinide it is a perpetrator, not a bioflavonoid."
	}),
	d("green-tea", "Green tea extract (EGCG)", [], "Catechin supplement", [inh("CYP3A4", "weak"), inh("P-gp", "weak")], [
		"hepatotoxic",
		"antiplatelet",
		"oatp-block"
	], "Hepatotoxicity of concentrated extract; bleed; OATP/P-gp victims can fall", {
		kind: "herb",
		aliases: [
			"egcg",
			"camellia sinensis",
			"matcha extract",
			"green tea"
		],
		note: "A cup of tea is not this row — coffee/black tea on this shelf is the tannin-Synthroid map. Concentrated EGCG has a liver signal. Also an OATP bully: nadolol and atenolol fall (Misaka). Next to Corgard it is loss of beta blockade, not a CYP rise."
	}),
	d("calcium", "Calcium supplement", [], "Divalent cation", [], [], "Chelates fluoroquinolones, tetracyclines, and levothyroxine", {
		kind: "herb",
		aliases: [
			"calcium carbonate",
			"calcium citrate",
			"os-cal",
			"caltrate",
			"tums extra"
		],
		note: "Absorption, not CYP. Separate from Cipro, doxycycline, and Synthroid by several hours. Tums-as-alkalinizer (amphetamine urine) is a different row."
	}),
	d("iron", "Iron supplement", [], "Divalent cation", [], [], "Chelates fluoroquinolones, tetracyclines, and levothyroxine", {
		kind: "herb",
		aliases: [
			"ferrous sulfate",
			"ferrous gluconate",
			"ferrous fumarate",
			"feosol"
		],
		note: "Same gut chelation as calcium. A prenatal plus morning levothyroxine is a classic empty TSH. Not a CYP row."
	}),
	d("magnesium", "Magnesium supplement", [], "Divalent cation", [], [], "Chelates fluoroquinolones, tetracyclines, and levothyroxine", {
		kind: "herb",
		aliases: [
			"magnesium oxide",
			"magnesium citrate",
			"magnesium glycinate",
			"milk of magnesia"
		],
		note: "Sleep and constipation doses still chelate. Separate from Cipro, doxycycline, and levothyroxine. Not a GABA occupancy."
	}),
	d("zinc", "Zinc supplement", [], "Divalent cation", [], [], "Chelates fluoroquinolones, tetracyclines, and levothyroxine", {
		kind: "herb",
		aliases: [
			"zinc sulfate",
			"zinc picolinate",
			"zinc gluconate"
		],
		note: "Cold lozenges and 'immune' grams still bind the same drugs in the gut. Separate the dose."
	}),
	d("niacin", "Niacin (nicotinic acid)", [], "Vitamin B3 (lipid dose)", [], ["hepatotoxic"], "Myopathy with statins; hepatotoxicity at gram doses", {
		kind: "herb",
		aliases: [
			"nicotinic acid",
			"vitamin b3",
			"niaspan",
			"nicotinamide"
		],
		note: "Flush niacin at lipid grams is the row — not a B-complex. Stacked with a statin (including red yeast rice) it is a muscle/liver map. Nicotinamide is a different product."
	}),
	d("potassium", "Potassium supplement", [], "Electrolyte supplement", [], ["k-sparing"], "Hyperkalemia with ACEI/ARB and spironolactone", {
		kind: "herb",
		aliases: [
			"kcl",
			"potassium chloride",
			"klor-con",
			"slow-k"
		],
		note: "Salt-substitute potassium plus lisinopril plus spironolactone is the hyperK triad. The desk already scores ACEI × K-sparing — this is the third bottle."
	}),
	d("senna", "Senna", [], "Stimulant laxative", [], ["hypokalemic"], "Hypokalemia — worse QT and digoxin toxicity", {
		kind: "herb",
		aliases: [
			"sennosides",
			"senokot",
			"ex-lax"
		],
		note: "Chronic stimulant laxatives drop potassium. Same QT/digoxin map as licorice, different mechanism. Not a CYP row."
	}),
	d("arginine", "L-arginine", [], "Nitric-oxide precursor", [], [], "Additive hypotension with PDE5 inhibitors", {
		kind: "herb",
		aliases: [
			"l-arginine",
			"arg",
			"nitric oxide booster",
			"pre-workout arginine"
		],
		note: "NO substrate. Next to sildenafil/tadalafil it is stacked vasodilation, quieter than a nitrate but not nothing. Pre-workout plus a weekend pill."
	}),
	d("glucosamine", "Glucosamine", [], "Aminosugar (joint)", [], [], "INR rise with warfarin (formulation-dependent)", {
		kind: "herb",
		aliases: [
			"glucosamine sulfate",
			"gs",
			"joint supplement",
			"chondroitin",
			"osteo bi-flex"
		],
		note: "Often paired with chondroitin. Warfarin INR can climb. Not a 2C9 inhibitor — a hemostasis footnote. Quiet next to a DOAC in most maps."
	}),
	d("cranberry", "Cranberry extract", [], "Vaccinium supplement", [inh("CYP2C9", "weak")], [], "Possible INR rise with warfarin", {
		kind: "herb",
		aliases: [
			"vaccinium",
			"cranberry juice",
			"uti supplement"
		],
		note: "Weak 2C9 story, inconsistent. A UTI capsule next to warfarin is worth mapping; a splash of juice is not grapefruit. Orange-juice-as-acidifier is a different row."
	}),
	d("cinnamon", "Cinnamon extract", [], "Cassia / cinnamaldehyde", [], ["hypoglycemic"], "Stacked hypoglycemia with secretagogues", {
		kind: "herb",
		aliases: [
			"cassia",
			"cinnamomum",
			"ceylon cinnamon"
		],
		note: "Cassia extracts can lower glucose. Next to glipizide or insulin that is a hypo row. Coumarin in cassia is a liver footnote at high dose — not warfarin vitamin K."
	}),
	d("ashwagandha", "Ashwagandha", [], "Withania (adaptogen)", [], ["cns-depressant", "hepatotoxic"], "Additive sedation; rare herb-induced liver injury", {
		kind: "herb",
		aliases: [
			"withania",
			"withania somnifera",
			"ksm-66",
			"sensoril"
		],
		note: "GABA-adjacent sedation plus a real, uncommon hepatitis signal. Next to benzos or alcohol it is CNS. Next to kava or green-tea extract it is stacked liver."
	}),
	d("passionflower", "Passionflower", [], "Herbal sedative", [], ["cns-depressant"], "Additive sedation with benzos, alcohol, valerian", {
		kind: "herb",
		aliases: ["passiflora", "passiflora incarnata"],
		note: "Sold in sleep teas with valerian. Same CNS stack, not a CYP perpetrator."
	}),
	d("chamomile", "Chamomile", [], "Herbal sedative / antiplatelet", [], ["cns-depressant", "antiplatelet"], "Sedation plus bleeding with anticoagulants", {
		kind: "herb",
		aliases: [
			"matricaria",
			"german chamomile",
			"chamaemelum"
		],
		note: "A tea is quieter than an extract. Coumarin-adjacent plus sedation. Next to warfarin it is a bleed footnote, not a 2C9 hammer."
	}),
	d("black-cohosh", "Black cohosh", [], "Cimicifuga (menopausal herb)", [], ["hepatotoxic"], "Herb-induced liver injury", {
		kind: "herb",
		aliases: [
			"cimicifuga",
			"actaea racemosa",
			"remifemin"
		],
		note: "Menopause shelf. The map is hepatotoxicity, not estrogen occupancy. Stacked with kava, EGCG, or niacin is a liver row."
	}),
	d("dong-quai", "Dong quai", [], "Angelica (coumarin herb)", [], ["antiplatelet"], "Bleeding with anticoagulants", {
		kind: "herb",
		aliases: [
			"angelica sinensis",
			"dang gui",
			"female ginseng"
		],
		note: "Coumarin-containing herb. Warfarin and DOACs are the bleed row. Not a CYP inducer like St. John's wort."
	}),
	d("feverfew", "Feverfew", [], "Migraine herb (antiplatelet)", [], ["antiplatelet"], "Bleeding with anticoagulants / antiplatelets", {
		kind: "herb",
		aliases: ["tanacetum", "tanacetum parthenium"],
		note: "Migraine prevention herb. Platelet effects plus NSAID stacks. Not a triptan 3A4 story."
	}),
	d("coq10", "Coenzyme Q10", [], "Ubiquinone supplement", [], [], "Possible INR drop with warfarin", {
		kind: "herb",
		aliases: [
			"coq-10",
			"ubiquinone",
			"ubiquinol",
			"coenzyme q"
		],
		note: "Vitamin K–like structure. Warfarin INR can fall — quieter and less consistent than a K gummy. Statin-associated muscle is why people buy it, not a myopathy pair on this desk."
	}),
	d("hawthorn", "Hawthorn", [], "Crataegus (cardiac herb)", [], ["bradycardic"], "Additive hypotension / bradycardia with antihypertensives and digoxin", {
		kind: "herb",
		aliases: [
			"crataegus",
			"hawthorn berry",
			"crataegus oxyacantha"
		],
		note: "Inotrope/vasodilator folklore with a real BP drop. Next to digoxin or a beta blocker it is PD, not CYP."
	}),
	d("mucuna", "Mucuna pruriens (L-DOPA)", [], "Dopamine precursor herb", [], ["stimulant"], "Pressor crisis with MAOIs; stacked dopaminergic load", {
		kind: "herb",
		aliases: [
			"mucuna",
			"velvet bean",
			"l-dopa herb",
			"cowhage"
		],
		note: "Contains levodopa. MAOIs are a pressor row. Not a 2D6 story. Parkinson's patients sometimes use it off-label — this is not a dosing protocol."
	}),
	d("biotin", "Biotin (high-dose)", [], "Vitamin B7", [], [], "Lab interference (troponin, thyroid) — not a CYP collision", {
		kind: "herb",
		aliases: [
			"vitamin b7",
			"vitamin h",
			"hair skin nails"
		],
		note: "The desk stays quiet on CYP/PD. High-dose biotin falsely deranges TSH, troponin, and some hormone assays. The collision is the lab, not the liver."
	}),
	d("folate", "Folic acid / folate", [], "Vitamin B9", [], [], "Oncology MTX efficacy vs rheumatology rescue — context, not CYP", {
		kind: "herb",
		aliases: [
			"folic acid",
			"vitamin b9",
			"methylfolate",
			"l-methylfolate",
			"5-mthf"
		],
		note: "Rheumatology gives folate with methotrexate on purpose. Oncology does not want it competing. This pair stays quiet so the desk does not scold a RA protocol. Not a 2C9 story."
	}),
	d("vitamin-d", "Vitamin D (cholecalciferol)", [], "Vitamin D3", [sub("CYP3A4", "minor")], [], "3A4 is a minor activation path — usually quiet", {
		kind: "herb",
		aliases: [
			"cholecalciferol",
			"vitamin d3",
			"ergocalciferol",
			"vitamin d"
		],
		note: "25-hydroxylation is not 3A4. 3A4 helps inactivate calcitriol. Strong inducers can lower 25-OH-D over weeks. A daily 2000 IU next to a statin should stay quiet."
	}),
	d("berberine", "Berberine", [], "Isoquinoline alkaloid (glucose / lipid)", [
		inh("CYP2D6", "moderate"),
		inh("CYP3A4", "moderate"),
		inh("P-gp", "moderate"),
		inh("CYP2C9", "weak")
	], ["hypoglycemic"], "Raised 2D6/3A4/P-gp victims; stacked hypoglycemia", {
		kind: "herb",
		aliases: [
			"berberine hcl",
			"berberine hydrochloride",
			"oregon grape",
			"coptis"
		],
		note: "The capsule, not the goldenseal tea. Same 2D6/3A4/P-gp bully plus a metformin-like glucose drop. Next to simvastatin, oral ketamine, or glipizide it is a perpetrator. Goldenseal is the plant row."
	}),
	d("saw-palmetto", "Saw palmetto", [], "Serenoa (BPH herb)", [inh("CYP3A4", "weak")], ["antiplatelet"], "Bleeding with anticoagulants; weak 3A4 inhibition", {
		kind: "herb",
		aliases: [
			"serenoa",
			"serenoa repens",
			"permixon"
		],
		note: "Prostate shelf. Antiplatelet plus a weak 3A4 hit. Next to warfarin it is a bleed footnote, not finasteride."
	}),
	d("echinacea", "Echinacea", [], "Immune herb", [inh("CYP1A2", "moderate"), inh("CYP3A4", "weak")], [], "Raised 1A2-victim levels (tizanidine, clozapine, caffeine)", {
		kind: "herb",
		aliases: [
			"echinacea purpurea",
			"coneflower",
			"echinacea angustifolia"
		],
		note: "Cold-and-flu bottle. 1A2 inhibition is the real map — tizanidine and clozapine move. Short courses; not St. John's wort."
	}),
	d("bitter-orange", "Bitter orange (synephrine)", [], "Citrus stimulant", [], ["stimulant"], "Pressor crisis with MAOIs; stacked sympathomimetic load", {
		kind: "herb",
		aliases: [
			"synephrine",
			"citrus aurantium",
			"p-synephrine",
			"adrena-lean",
			"fat burner orange"
		],
		note: "The 'ephedra-free' fat-burner. α1 agonist. MAOIs, yohimbine, and amphetamines are a pressor stack. Not grapefruit 3A4 — that is a different citrus."
	}),
	d("rhodiola", "Rhodiola", [], "Adaptogen (weak MAO)", [], ["serotonergic"], "Serotonin syndrome with MAOIs and other serotonergics", {
		kind: "herb",
		aliases: [
			"rhodiola rosea",
			"arctic root",
			"golden root"
		],
		note: "In-vitro MAO inhibition is why it sits next to 5-HTP and SAM-e, not next to ashwagandha as a free adaptogen. Evidence is thinner than phenelzine — still mapped."
	}),
	d("ala", "Alpha-lipoic acid", [], "Antioxidant / glucose supplement", [], ["hypoglycemic"], "Stacked hypoglycemia with secretagogues and insulin", {
		kind: "herb",
		aliases: [
			"alpha lipoic acid",
			"thioctic acid",
			"ala"
		],
		note: "Neuropathy and 'insulin sensitivity' bottle. Next to glipizide or insulin it is a hypo row. Not a CYP perpetrator."
	}),
	d("fenugreek", "Fenugreek", [], "Trigonella (glucose / lactation)", [], ["hypoglycemic", "antiplatelet"], "Stacked hypoglycemia; bleeding with anticoagulants", {
		kind: "herb",
		aliases: [
			"trigonella",
			"methi",
			"fenugreek seed"
		],
		note: "Kitchen seed at extract grams. Glucose plus a little bleed. Next to a sulfonylurea or warfarin, not a curry footnote."
	}),
	d("evening-primrose", "Evening primrose oil", [], "GLA supplement", [], ["antiplatelet"], "Bleeding with anticoagulants / antiplatelets", {
		kind: "herb",
		aliases: [
			"epo",
			"oenothera",
			"gamma-linolenic",
			"gla"
		],
		note: "Menopause / eczema bottle. Platelet effects. Quiet on CYP."
	}),
	d("resveratrol", "Resveratrol", [], "Stilbene supplement", [inh("CYP3A4", "moderate"), inh("CYP2C9", "weak")], ["antiplatelet"], "Raised oral 3A4 victims; bleed", {
		kind: "herb",
		aliases: [
			"trans-resveratrol",
			"polygonum cuspidatum",
			"japanese knotweed"
		],
		note: "Gram extracts inhibit 3A4. A glass of wine is not this row. Next to simvastatin or oral midazolam it is a perpetrator."
	}),
	d("dhea", "DHEA", [], "Adrenal androgen precursor", [sub("CYP3A4", "major")], [], "3A4 victim; androgenic effects — not a CYP perpetrator", {
		kind: "herb",
		aliases: ["prasterone", "dehydroepiandrosterone"],
		note: "Hormone, not a vitamin. 3A4 clears it. Inducers dump it; inhibitors raise androgenic noise. Not a testosterone protocol."
	}),
	d("nac", "N-acetylcysteine", [], "Glutathione precursor", [], [], "APAP antidote — not a CYP perpetrator", {
		kind: "herb",
		aliases: [
			"n-acetylcysteine",
			"acetylcysteine",
			"n-acetyl cysteine"
		],
		note: "The acetaminophen antidote sold as a mucolytic and 'liver support.' CYP/PD stays quiet. Does not retire NAPQI from chronic alcohol plus APAP."
	}),
	d("charcoal", "Activated charcoal", [], "Oral adsorbent", [], [], "Binds co-administered oral drugs — lost absorption", {
		kind: "herb",
		aliases: [
			"activated charcoal",
			"activated carbon",
			"charcoal capsule"
		],
		note: "A binder, not a CYP. Next to levothyroxine, warfarin, OCPs, or an anticonvulsant the dose never arrives. Separate by several hours. Not the charred-meat 1A2 row."
	}),
	d("creatine", "Creatine", [], "Muscle phosphagen", [], [], "Not a CYP or PD collision — renal load in dehydration", {
		kind: "herb",
		aliases: ["creatine monohydrate", "creatine hcl"],
		note: "The desk stays quiet. Dehydration plus an NSAID or an ACEI is a kidney footnote, not a scored pair. Not a stimulant."
	}),
	d("nattokinase", "Nattokinase", [], "Fibrinolytic enzyme (natto)", [], ["antiplatelet"], "Bleeding with anticoagulants — sold as a clot buster", {
		kind: "herb",
		aliases: [
			"natto kinase",
			"natto extract",
			"nattokinase nsk"
		],
		note: "A fibrinolytic sold as 'heart health.' Next to warfarin or a DOAC this is stacked hemostasis, not vitamin K. Stop before procedures. Food natto is quieter than the capsule."
	}),
	d("psyllium", "Psyllium", [], "Viscous fiber (bulk laxative)", [], [], "Binds co-administered oral drugs — lost absorption", {
		kind: "herb",
		aliases: [
			"metamucil",
			"ispaghula",
			"psyllium husk",
			"fiber capsule"
		],
		note: "A binder, not a CYP. Metamucil with morning Synthroid, digoxin, or carbamazepine is an empty dose. Separate by several hours. Not the charcoal-capsule row."
	}),
	d("chromium", "Chromium picolinate", [], "Trace mineral (glucose)", [], ["hypoglycemic"], "Stacked hypoglycemia with secretagogues and insulin", {
		kind: "herb",
		aliases: [
			"chromium",
			"chromium picolinate",
			"chrome mate"
		],
		note: "'Blood sugar support' bottle. Next to glipizide or insulin it is a hypo row. Not a CYP perpetrator. Food chromium is not this milligram capsule."
	}),
	d("citrulline", "L-citrulline", [], "Arginine precursor (NO)", [], [], "Additive hypotension with PDE5 inhibitors", {
		kind: "herb",
		aliases: [
			"l-citrulline",
			"citrulline malate",
			"pre-workout citrulline"
		],
		note: "Converts to arginine and feeds NO more reliably than oral arginine itself. Next to sildenafil it is the same stacked vasodilation. Pre-workout plus a weekend pill."
	}),
	d("grape-seed", "Grape seed extract", [], "OPC / proanthocyanidin", [], ["antiplatelet"], "Bleeding with anticoagulants / antiplatelets", {
		kind: "herb",
		aliases: [
			"gse",
			"opc",
			"proanthocyanidin",
			"grape seed"
		],
		note: "High-OPC extracts impair platelets. A glass of wine is not this row. Next to warfarin, a DOAC, or fish oil it is a bleed stack."
	}),
	d("icariin", "Horny goat weed (icariin)", [], "Herbal PDE5-like (Epimedium)", [], [], "Stacked vasodilation with nitrates and PDE5 drugs", {
		kind: "herb",
		aliases: [
			"horny goat weed",
			"epimedium",
			"yin yang huo",
			"icariin"
		],
		note: "The 'natural Viagra' bottle. Icariin is a weak PDE5 hit — not labeled like sildenafil, still a first-dose syncope watch next to a nitrate or a real PDE5. Not a CYP perpetrator."
	})
];
var DRUGS = raw;
var DRUG_BY_ID = Object.fromEntries(raw.map((x) => [x.id, x]));
var PSYCH_CLS = /SSRI|SNRI|MAOI|antipsychotic|antidepressant|Benzodiazepine|Opioid|Gabapentinoid|Mood stabilizer|NMDA|Dissociative|Psychedelic|Entactogen|Stimulant|Cannabinoid|Alcohol|GHB|Z-hypnotic|Anxiolytic|ADHD|NRI|Nicotine|Methylxanthine|Tricyclic|NaSSA|SARI|NDRI|hypnotic|orexin|Melatonin|kratom|GABA|MAT|Wake-promoting|Pineal|Partial opioid|Opioid antagonist|Atypical opioid|aldehyde|NMDA \/ GABA|nicotinic|Anticonvulsant|Central muscle|AChE|α2-agonist|Nitazene|Designer benzodiazepine|Thienodiazepine|Cathinone|Arylcyclohexylamine|GHB prodrug|Alkyl nitrite|Antidiarrheal|Sedating antihistamine|Veterinary|Barbiturate|NNRTI|NBOMe|Salvinorin|Tropane|H2 blocker|Carbamate|oneirogen|pyrovalerone|NRI analgesic|IV anesthetic|NK1|SPAR|mixed opioid|7-OH|Diacetylmorphine|Street pressed|Local anesthetic/i;
function isPsych(drug) {
	if (PSYCH_CLS.test(drug.cls)) return true;
	return drug.pd.some((p) => [
		"serotonergic",
		"dissociative",
		"psychedelic",
		"stimulant",
		"cannabinoid",
		"alcohol",
		"ghb",
		"cns-depressant",
		"opioid",
		"maoi",
		"ssri-snri",
		"benzo-zdrug",
		"opioid-antagonist"
	].includes(p));
}
function isFood(drug) {
	return drug.kind === "food" || drug.kind === "herb";
}
function psychRank(drug) {
	if (drug.pd.includes("dissociative")) return 0;
	if (drug.pd.includes("psychedelic") || drug.id === "mdma") return 1;
	if (drug.pd.includes("stimulant") || drug.pd.includes("cannabinoid") || drug.pd.includes("alcohol") || drug.pd.includes("ghb")) return 2;
	if (isFood(drug)) return 4;
	return 3;
}
function searchDrugs(query, excludeIds = []) {
	const q = query.trim().toLowerCase();
	const excluded = new Set(excludeIds);
	if (!q) {
		const psych = DRUGS.filter((d) => !excluded.has(d.id) && isPsych(d) && !isFood(d)).sort((a, b) => psychRank(a) - psychRank(b) || a.name.localeCompare(b.name)).slice(0, 12);
		const foods = DRUGS.filter((d) => !excluded.has(d.id) && isFood(d)).slice(0, 6);
		return [...psych, ...foods];
	}
	const foodQuery = q === "food" || q === "foods" || q === "diet" || q === "meal" || q === "herb" || q === "herbs" || q === "juice" || q === "dairy" || q === "kitchen";
	const psychQuery = q === "psych" || q.includes("psychoact") || q.includes("dissociat") || q.includes("psychedel") || q === "stimulant" || q === "stimulants";
	if (foodQuery) {
		const kitchenFirst = [
			"grapefruit",
			"dairy",
			"leafy-greens",
			"oatp-juice",
			"tyramine-foods",
			"high-fat-meal",
			"coffee",
			"protein-meal",
			"soy",
			"high-k-foods",
			"histamine-fish",
			"enteral-feed",
			"pomegranate",
			"starfruit",
			"charred-meat",
			"cruciferous",
			"st-johns-wort",
			"acidic-juice",
			"alkalinizer",
			"low-salt",
			"high-salt",
			"green-tea"
		];
		const seen = /* @__PURE__ */ new Set();
		const ordered = [];
		for (const id of kitchenFirst) {
			const d = DRUG_BY_ID[id];
			if (!d || excluded.has(d.id)) continue;
			seen.add(d.id);
			ordered.push(d);
		}
		for (const d of DRUGS) {
			if (excluded.has(d.id) || seen.has(d.id) || !isFood(d)) continue;
			ordered.push(d);
			if (ordered.length >= 24) break;
		}
		return ordered.slice(0, 24);
	}
	if (q === "supplement" || q === "supplements" || q === "vitamin" || q === "vitamins" || q === "otc") return [
		"berberine",
		"red-yeast-rice",
		"sam-e",
		"vitamin-k",
		"st-johns-wort",
		"goldenseal",
		"nattokinase",
		"fish-oil",
		"yohimbine",
		"quercetin",
		"bitter-orange",
		"calcium",
		"iron",
		"niacin",
		"charcoal",
		"psyllium",
		"echinacea",
		"icariin"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (psychQuery) return DRUGS.filter((d) => !excluded.has(d.id) && isPsych(d)).slice(0, 16);
	if (q === "street" || q === "rc" || q === "research") return DRUGS.filter((d) => !excluded.has(d.id) && /nitazene|Designer|Cathinone|Arylcyclohexylamine|NBOMe|oneirogen|pyrovalerone|xylazine|kratom|tianeptine|GHB prodrug|popper|ibogaine|2C-|MXE|FDCK|cocaine|heroin|Dirty|pressed opioid|Local anesthetic|Diacetylmorphine/i.test(d.cls + d.name)).slice(0, 16);
	if (q === "mat" || q === "otp" || q === "oud" || q === "obots" || q === "obot") {
		const matIds = /* @__PURE__ */ new Set([
			"buprenorphine",
			"methadone",
			"naltrexone",
			"naloxone",
			"nalmefene",
			"lofexidine",
			"clonidine",
			"acamprosate",
			"disulfiram",
			"gabapentin",
			"pregabalin",
			"xylazine",
			"epclusa",
			"seven-oh",
			"tianeptine",
			"hydroxyzine",
			"ondansetron"
		]);
		return DRUGS.filter((d) => !excluded.has(d.id) && (matIds.has(d.id) || /Partial opioid|Opioid antagonist|HCV DAA|α2-agonist \(opioid/i.test(d.cls))).slice(0, 16);
	}
	if (q === "clinic" || q === "primary" || q === "common" || q === "pcp" || q === "staple" || q === "staples") return [
		"azathioprine",
		"allopurinol",
		"febuxostat",
		"terbinafine",
		"mirabegron",
		"fenofibrate",
		"isosorbide-mononitrate",
		"sildenafil",
		"ranolazine",
		"eplerenone",
		"eletriptan",
		"budesonide",
		"fluticasone",
		"semaglutide",
		"pioglitazone",
		"clopidogrel",
		"omeprazole",
		"warfarin",
		"simvastatin",
		"sirolimus",
		"nifedipine",
		"metformin"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "pgx" || q === "pharmgkb" || q === "cpic" || q === "clinpgx") return DRUGS.filter((d) => !excluded.has(d.id) && hasPgx(d.id)).slice(0, 16);
	if (q === "stahl") return DRUGS.filter((d) => !excluded.has(d.id) && hasStahl(d.id)).slice(0, 16);
	if (q === "drugbank" || q === "db") return DRUGS.filter((d) => !excluded.has(d.id) && hasDrugbank(d.id)).slice(0, 16);
	if (q === "pubmed" || q === "pmid" || q === "cites" || q === "refs" || q === "papers") return DRUGS.filter((d) => !excluded.has(d.id) && hasCite(d.id)).slice(0, 16);
	if (q === "beers" || q === "geriatric") return CLINIC_BEERS.map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "pregnancy" || q === "pregnant" || q === "lactation" || q === "teratogen") return CLINIC_PREG_AVOID.map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "pheno" || q === "phenoconversion" || q === "phenoconvert" || q === "convert") return [
		"paroxetine",
		"fluoxetine",
		"bupropion",
		"quinidine",
		"terbinafine",
		"fluconazole",
		"fluvoxamine",
		"ciprofloxacin",
		"clarithromycin",
		"codeine",
		"dextromethorphan",
		"tamoxifen"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "mme" || q === "morphine equivalent" || q === "morphine-equivalent" || q === "omed") return Object.keys(MME_FACTOR).map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "hunter" || q === "serotonin syndrome" || q === "nms" || q === "clonus") return DRUGS.filter((d) => !excluded.has(d.id) && (d.pd.includes("serotonergic") || d.pd.includes("ssri-snri") || d.pd.includes("maoi") || /antipsychotic/i.test(d.cls))).slice(0, 16);
	if (q === "reversal" || q === "antidote" || q === "naloxone" || q === "narcan" || q === "opvee") return [
		"naloxone",
		"nalmefene",
		"nac",
		"vitamin-k",
		"fentanyl",
		"methadone",
		"acetaminophen",
		"warfarin",
		"xylazine",
		"dabigatran",
		"digoxin"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "tdm" || q === "levels" || q === "trough") return DRUGS.filter((d) => !excluded.has(d.id) && hasTdm(d.id)).slice(0, 16);
	if (q === "uds" || q === "uad" || q === "immunoassay" || q === "cup" || q === "urine" || q === "screen") return [
		"methadone",
		"buprenorphine",
		"fentanyl",
		"oxycodone",
		"quetiapine",
		"sertraline",
		"bupropion",
		"dextromethorphan",
		"rifampin",
		"bromazolam",
		"clonazepam",
		"tramadol"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "cows" || q === "ciwa" || q === "withdrawal" || q === "precipitated") return [
		"buprenorphine",
		"methadone",
		"fentanyl",
		"naltrexone",
		"nalmefene",
		"lofexidine",
		"clonidine",
		"ethanol",
		"dirty-30"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "lactmed" || q === "lactation" || q === "breastfeed" || q === "breastfeeding" || q === "milk") return [
		"methadone",
		"buprenorphine",
		"lithium",
		"codeine",
		"tramadol",
		"sertraline",
		"fluoxetine",
		"lamotrigine",
		"lorazepam",
		"warfarin"
	].map((id) => DRUG_BY_ID[id]).filter((d) => Boolean(d) && !excluded.has(d.id)).slice(0, 16);
	if (q === "qtc" || q === "qt" || q === "torsades") return DRUGS.filter((d) => !excluded.has(d.id) && (d.pd.includes("qt-known") || d.pd.includes("qt-possible"))).slice(0, 16);
	if (q === "rxnav" || q === "pubchem" || q === "trials" || q === "dailymed" || q === "shortage" || q === "shortages") return DRUGS.filter((d) => !excluded.has(d.id) && d.kind === "drug" && !d.id.startsWith("__")).slice(0, 16);
	const scored = [];
	for (const drug of DRUGS) {
		if (excluded.has(drug.id)) continue;
		const name = drug.name.toLowerCase();
		const brands = drug.brands.map((b) => b.toLowerCase());
		const aliases = drug.aliases.map((a) => a.toLowerCase());
		const cls = drug.cls.toLowerCase();
		const enzymeHit = drug.enzymes.some((e) => e.enzyme.toLowerCase().includes(q.replace(/\s+/g, "")));
		let score = 0;
		if (name === q || brands.includes(q) || aliases.includes(q)) score = 100;
		else if (name.startsWith(q)) score = 80;
		else if (brands.some((b) => b.startsWith(q)) || aliases.some((a) => a.startsWith(q))) score = 70;
		else if (name.includes(q)) score = 60;
		else if (brands.some((b) => b.includes(q)) || aliases.some((a) => a.includes(q))) score = 50;
		else if (cls.includes(q)) score = 35;
		else if (enzymeHit) score = 25;
		else if (eKindQuery(drug, q)) score = 20;
		if (score > 0) scored.push({
			drug,
			score
		});
	}
	scored.sort((a, b) => b.score - a.score || a.drug.name.localeCompare(b.drug.name));
	return scored.slice(0, 16).map((s) => s.drug);
}
function eKindQuery(drug, q) {
	if (q.includes("inhibit")) return drug.enzymes.some((e) => e.kind === "inhibitor");
	if (q.includes("induc")) return drug.enzymes.some((e) => e.kind === "inducer");
	if (q.includes("prodrug") || q.includes("activat")) return drug.enzymes.some((e) => e.kind === "substrate" && e.pathway === "activation");
	return false;
}
var FAMILIES = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "nmda",
		label: "NMDA"
	},
	{
		id: "psychedelic",
		label: "Psychedelic"
	},
	{
		id: "stimulant",
		label: "Stimulant"
	},
	{
		id: "gaba",
		label: "GABA"
	},
	{
		id: "opioid",
		label: "Opioid"
	},
	{
		id: "psych",
		label: "Psych"
	},
	{
		id: "cardio",
		label: "Cardio"
	},
	{
		id: "id",
		label: "Perp / ID"
	},
	{
		id: "food",
		label: "Food / herb"
	},
	{
		id: "other",
		label: "Other"
	}
];
function familyOf(drug) {
	if (drug.kind === "food" || drug.kind === "herb") return "food";
	if (drug.pd.includes("dissociative")) return "nmda";
	if (drug.pd.includes("psychedelic")) return "psychedelic";
	if (drug.pd.includes("stimulant") || drug.id === "mdma") return "stimulant";
	if (drug.pd.includes("opioid") || drug.pd.includes("opioid-antagonist") || drug.pd.includes("alpha2-agonist")) return "opioid";
	if (drug.pd.includes("alcohol") || drug.pd.includes("ghb") || drug.pd.includes("benzo-zdrug")) return "gaba";
	if (drug.pd.includes("ssri-snri") || drug.pd.includes("maoi") || /antipsychotic|antidepressant|Mood|Tricyclic|NaSSA|SARI|NDRI|Anxiolytic/i.test(drug.cls)) return "psych";
	if (/Macrolide|Azole|Fluoroquinolone|HIV|Rifamycin|NNRTI|antiviral|H2 blocker|PK booster|Oxazolidinone|Sulfonamide|Antimycobacterial|HCV|DAA|Allylamine|Beta-lactam|Tetracycline|Cephalosporin/i.test(drug.cls)) return "id";
	if (drug.pd.includes("anticoagulant") || drug.pd.includes("statin") || drug.pd.includes("beta-blocker") || drug.pd.includes("ndhp-ccb") || /Statin|CCB|Beta|ARB|ACE|antiarrhythmic|DOAC|Vitamin K|Cardiac|diuretic|Alpha-1|Fibrate|PDE5|Nitrate|SGLT2|GLP-1|GIP|DPP-4|Antianginal|Mineralocorticoid|P2Y12|thiazide|LMWH/i.test(drug.cls)) return "cardio";
	return "other";
}
//#endregion
export { searchCites as C, tdmOnDesk as D, tdmHostNote as E, pubmedUrl as S, stahlFor as T, hasStahl as _, DRUGS as a, pgxFor as b, citesFor as c, drugbankUrl as d, familyOf as f, hasPgx as g, hasClinic as h, DRUGBANK as i, clinicFor as l, hasCite as m, CITE_TAGS as n, DRUG_BY_ID as o, fentanylPatchMme as p, CLINIC as r, FAMILIES as s, CITES as t, drugbankSearchUrl as u, methadoneFactor as v, searchDrugs as w, pubmedSearchUrl as x, mmeOnDesk as y };
