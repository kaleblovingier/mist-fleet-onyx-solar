import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as RotateCcw, c as LoaderCircle, d as Download, f as Copy, i as Search, l as KeyRound, m as Check, o as Plus, p as ChevronDown, r as Share2, s as Lock, t as X, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CVjSetkh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	d("azithromycin", "Azithromycin", ["Zithromax", "Z-Pak"], "Macrolide antibiotic", [], ["qt-possible"], "QT prolongation", { note: "Minimal CYP3A4 inhibition unlike other macrolides." }),
	d("ciprofloxacin", "Ciprofloxacin", ["Cipro"], "Fluoroquinolone", [inh("CYP1A2", "strong"), inh("CYP3A4", "weak")], ["qt-possible", "seizure-lowering"], "QT, CNS stimulation, 1A2 victim toxicity"),
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
	], ["hepatotoxic", "seizure-lowering"], "Hepatitis, neuropathy"),
	d("ritonavir", "Ritonavir", ["Norvir"], "HIV protease inhibitor / booster", [
		sub("CYP3A4", "major"),
		inh("CYP3A4", "strong"),
		inh("CYP2D6", "moderate"),
		inh("P-gp", "strong"),
		ind("CYP1A2", "moderate"),
		ind("CYP2C9", "weak")
	], [], "Victim-drug toxicity via 3A4/P-gp"),
	d("cobicistat", "Cobicistat", ["Tybost"], "PK booster", [
		inh("CYP3A4", "strong"),
		inh("CYP2D6", "weak"),
		inh("P-gp", "strong")
	], [], "Victim-drug toxicity via 3A4"),
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
		inh("CYP3A4", "moderate")
	], ["serotonergic", "ssri-snri"], "Serotonin syndrome; marked 1A2/2C19 perpetrator"),
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
	d("ziprasidone", "Ziprasidone", ["Geodon"], "Atypical antipsychotic", [sub("CYP3A4", "minor")], ["cns-depressant", "qt-known"], "TdP"),
	d("alprazolam", "Alprazolam", ["Xanax"], "Benzodiazepine", [sub("CYP3A4", "sensitive")], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression, falls"),
	d("diazepam", "Diazepam", ["Valium"], "Benzodiazepine", [sub("CYP3A4", "major"), sub("CYP2C19", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, prolonged accumulation"),
	d("clonazepam", "Clonazepam", ["Klonopin"], "Benzodiazepine", [sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression"),
	d("lorazepam", "Lorazepam", ["Ativan"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "UGT-glucuronidated, not a CYP substrate — often preferred when CYPs are blocked." }),
	d("midazolam", "Midazolam", ["Versed"], "Benzodiazepine", [sub("CYP3A4", "sensitive")], ["cns-depressant", "benzo-zdrug"], "Profound sedation, respiratory depression"),
	d("zolpidem", "Zolpidem", ["Ambien"], "Z-hypnotic", [sub("CYP3A4", "major")], ["cns-depressant", "benzo-zdrug"], "Complex sleep behavior, falls"),
	d("buspirone", "Buspirone", ["BuSpar"], "Anxiolytic", [sub("CYP3A4", "sensitive")], ["serotonergic"], "Serotonin syndrome (with other serotonergics), dizziness"),
	d("phenelzine", "Phenelzine", ["Nardil"], "Irreversible MAOI", [inh("CYP2C19", "moderate")], ["maoi", "serotonergic"], "Hypertensive crisis, serotonin syndrome", { note: "Irreversible MAO-A/B inhibitor. Serotonergic drugs and tyramine are contraindicated." }),
	d("selegiline", "Selegiline", ["Emsam", "Eldepryl"], "MAO-B inhibitor", [sub("CYP2B6", "major"), sub("CYP2C19", "minor")], ["maoi", "serotonergic"], "Serotonin syndrome, hypertensive crisis at higher doses"),
	d("codeine", "Codeine", [], "Opioid analgesic (prodrug)", [sub("CYP2D6", "sensitive", "activation"), sub("CYP3A4", "minor")], ["opioid", "cns-depressant"], "Loss of analgesia or morphine toxicity (UM phenotype)", { note: "Prodrug. CYP2D6 O-demethylation produces morphine; inhibitors blunt analgesia." }),
	d("tramadol", "Tramadol", ["Ultram"], "Opioid / SNRI analgesic", [sub("CYP2D6", "major", "activation"), sub("CYP3A4", "major")], [
		"opioid",
		"cns-depressant",
		"serotonergic",
		"seizure-lowering"
	], "Seizures, serotonin syndrome, respiratory depression"),
	d("oxycodone", "Oxycodone", ["OxyContin", "Percocet"], "Opioid analgesic", [sub("CYP3A4", "major"), sub("CYP2D6", "minor")], ["opioid", "cns-depressant"], "Respiratory depression, sedation"),
	d("hydrocodone", "Hydrocodone", ["Norco", "Vicodin"], "Opioid analgesic", [sub("CYP3A4", "major"), sub("CYP2D6", "minor", "activation")], ["opioid", "cns-depressant"], "Respiratory depression, sedation"),
	d("morphine", "Morphine", ["MS Contin"], "Opioid analgesic", [sub("P-gp", "minor")], ["opioid", "cns-depressant"], "Respiratory depression, sedation", { note: "UGT2B7, not CYP. PD synergies still apply." }),
	d("fentanyl", "Fentanyl", ["Duragesic", "Sublimaze"], "Opioid analgesic", [sub("CYP3A4", "sensitive")], [
		"opioid",
		"cns-depressant",
		"serotonergic"
	], "Respiratory depression"),
	d("methadone", "Methadone", ["Dolophine"], "Opioid agonist", [
		sub("CYP3A4", "major"),
		sub("CYP2B6", "major"),
		sub("CYP2C19", "minor"),
		sub("CYP1A2", "minor")
	], [
		"opioid",
		"cns-depressant",
		"qt-known",
		"serotonergic"
	], "TdP, respiratory depression"),
	d("gabapentin", "Gabapentin", ["Neurontin"], "Gabapentinoid", [], ["cns-depressant"], "Sedation, respiratory depression with opioids"),
	d("pregabalin", "Pregabalin", ["Lyrica"], "Gabapentinoid", [], ["cns-depressant"], "Sedation, respiratory depression with opioids"),
	d("carbamazepine", "Carbamazepine", ["Tegretol"], "Anticonvulsant", [
		sub("CYP3A4", "major"),
		ind("CYP3A4", "strong"),
		ind("CYP2C9", "moderate"),
		ind("CYP2C19", "moderate"),
		ind("CYP1A2", "moderate"),
		ind("P-gp", "moderate")
	], [
		"cns-depressant",
		"anticholinergic",
		"seizure-lowering"
	], "Loss of victim-drug efficacy, hyponatremia, SJS", { note: "Autoinducer. Strong 3A4 inducer after ~2–3 weeks." }),
	d("phenytoin", "Phenytoin", ["Dilantin"], "Anticonvulsant", [
		sub("CYP2C9", "sensitive", "clearance", true),
		sub("CYP2C19", "major"),
		ind("CYP3A4", "strong"),
		ind("CYP2C19", "moderate"),
		ind("P-gp", "moderate")
	], ["cns-depressant", "hepatotoxic"], "Phenytoin toxicity or loss of co-drug efficacy", { note: "Narrow index, nonlinear kinetics." }),
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
	d("allopurinol", "Allopurinol", ["Zyloprim"], "Xanthine oxidase inhibitor", [], [], "SJS/TEN (HLA-B*5801), marrow suppression with azathioprine"),
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
	d("caffeine", "Caffeine", [], "Methylxanthine", [sub("CYP1A2", "sensitive")], [], "Jitteriness, insomnia, tachycardia"),
	d("lurasidone", "Lurasidone", ["Latuda"], "Atypical antipsychotic", [sub("CYP3A4", "sensitive")], ["cns-depressant"], "Sedation, akathisia", { note: "Contraindicated with strong CYP3A4 inhibitors and inducers." }),
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
	d("methamphetamine", "Methamphetamine", ["Desoxyn"], "Amphetamine stimulant", [sub("CYP2D6", "major")], ["stimulant", "seizure-lowering"], "Hypertensive crisis, hyperthermia, cardiotoxicity", { aliases: ["desoxyn"] }),
	d("cocaine", "Cocaine", [], "Local anesthetic / stimulant", [sub("CYP3A4", "minor")], [
		"stimulant",
		"qt-possible",
		"seizure-lowering",
		"hepatotoxic"
	], "Arrhythmia, seizure, hyperthermia, cocaethylene with ethanol", { note: "Mostly CES1 hydrolysis. CYP3A4 makes norcocaine. Ethanol forms cocaethylene — longer-lived and more cardiotoxic." }),
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
		"Sublocade"
	], "Partial opioid agonist", [sub("CYP3A4", "major"), sub("CYP2C8", "minor")], ["opioid", "cns-depressant"], "Respiratory depression with benzos/alcohol; precipitated withdrawal with full agonists", { aliases: ["suboxone", "subutex"] }),
	d("naltrexone", "Naltrexone", [
		"ReVia",
		"Vivitrol",
		"Contrave"
	], "Opioid antagonist", [], ["opioid-antagonist"], "Precipitated opioid withdrawal; blocks opioid analgesia", {
		aliases: ["vivitrol", "revia"],
		note: "Not a CYP substrate. Will precipitate withdrawal in opioid-dependent patients and cancel opioid analgesia."
	}),
	d("naloxone", "Naloxone", ["Narcan", "Kloxxado"], "Opioid antagonist", [], ["opioid-antagonist"], "Precipitated opioid withdrawal", { aliases: ["narcan"] }),
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
			"fed state"
		],
		note: "A 50–60% fat meal can several-fold increase oral THC and CBD exposure. Take that as a PK fact, not a dosing instruction."
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
		note: "Acid urine speeds amphetamine excretion. Opposite of bicarbonate. Not a 3A4 story — grapefruit is the furanocoumarin, orange juice is mostly pH."
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
	d("goldenseal", "Goldenseal (berberine)", [], "CYP2D6 / 3A4 herbal inhibitor", [
		inh("CYP2D6", "moderate"),
		inh("CYP3A4", "moderate"),
		inh("CYP2C9", "weak")
	], [], "Raised 2D6 and 3A4 victim levels (DXM, MDMA, oral ketamine)", {
		kind: "herb",
		aliases: ["berberine", "hydrastis"],
		note: "One of the few OTC botanicals with a real CYP2D6/3A4 inhibition signal."
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
	], "Additive sedation and QT with other CNS / QT drugs", { aliases: ["atarax"] }),
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
		note: "The original OTC cytochrome bully. Famotidine does not do this — if you need an H2 blocker next to a 1A2/3A4 victim, switch."
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
		note: "Same α2 family as xylazine, at clinical doses. Naloxone does not reverse the α2 sedation. Rebound hypertension on abrupt stop."
	}),
	d("flecainide", "Flecainide", ["Tambocor"], "Class Ic antiarrhythmic", [sub("CYP2D6", "major")], ["qt-possible"], "Arrhythmia, 2D6 victim toxicity", { note: "CYP2D6 substrate with a narrow-ish index. Strong 2D6 inhibitors raise levels and QRS/QT risk." }),
	d("oxazepam", "Oxazepam", ["Serax"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "UGT-glucuronidated, like lorazepam — often the switch when 3A4/2C19 is blocked. PD stacking still applies." }),
	d("temazepam", "Temazepam", ["Restoril"], "Benzodiazepine", [], ["cns-depressant", "benzo-zdrug"], "Sedation, respiratory depression", { note: "Mostly UGT. Cleaner CYP map than diazepam or alprazolam; not a clean PD map with opioids or alcohol." }),
	d("posaconazole", "Posaconazole", ["Noxafil"], "Azole antifungal", [inh("CYP3A4", "strong"), inh("P-gp", "moderate")], ["qt-possible", "hepatotoxic"], "Victim-drug toxicity via 3A4, QT", { note: "Strong CYP3A4 inhibitor. Oral ketamine, quetiapine, midazolam, simvastatin, and colchicine all move." }),
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
	d("promethazine", "Promethazine", ["Phenergan"], "Sedating antihistamine", [sub("CYP2D6", "major")], ["cns-depressant", "anticholinergic"], "Additive sedation, delirium, respiratory depression with opioids", { aliases: ["phenergan"] }),
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
		note: "Same PAH/AhR neighborhood as smoke, much weaker. A kale phase is not smoking a pack, but 1A2 victims can drift."
	})
];
var DRUGS = raw;
var DRUG_BY_ID = Object.fromEntries(raw.map((x) => [x.id, x]));
var PSYCH_CLS = /SSRI|SNRI|MAOI|antipsychotic|antidepressant|Benzodiazepine|Opioid|Gabapentinoid|Mood stabilizer|NMDA|Dissociative|Psychedelic|Entactogen|Stimulant|Cannabinoid|Alcohol|GHB|Z-hypnotic|Anxiolytic|ADHD|NRI|Nicotine|Methylxanthine|Tricyclic|NaSSA|SARI|NDRI|hypnotic|orexin|Melatonin|kratom|GABA|MAT|Wake-promoting|Pineal|Partial opioid|Opioid antagonist|Atypical opioid|aldehyde|NMDA \/ GABA|nicotinic|Anticonvulsant|Central muscle|AChE|α2-agonist|Nitazene|Designer benzodiazepine|Thienodiazepine|Cathinone|Arylcyclohexylamine|GHB prodrug|Alkyl nitrite|Antidiarrheal|Sedating antihistamine|Veterinary|Barbiturate|NNRTI|NBOMe|Salvinorin|Tropane|H2 blocker|Carbamate|oneirogen|pyrovalerone|NRI analgesic/i;
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
	const foodQuery = q === "food" || q === "foods" || q === "diet" || q === "meal" || q === "herb" || q === "herbs";
	const psychQuery = q === "psych" || q.includes("psychoact") || q.includes("dissociat") || q.includes("psychedel") || q === "stimulant" || q === "stimulants";
	if (foodQuery) return DRUGS.filter((d) => !excluded.has(d.id) && isFood(d)).slice(0, 16);
	if (psychQuery) return DRUGS.filter((d) => !excluded.has(d.id) && isPsych(d)).slice(0, 16);
	if (q === "street" || q === "rc" || q === "research") return DRUGS.filter((d) => !excluded.has(d.id) && /nitazene|Designer|Cathinone|Arylcyclohexylamine|NBOMe|oneirogen|pyrovalerone|xylazine|kratom|tianeptine|GHB prodrug|popper|ibogaine|2C-|MXE|FDCK/i.test(d.cls + d.name)).slice(0, 16);
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
	if (/Macrolide|Azole|Fluoroquinolone|HIV|Rifamycin|NNRTI|antiviral|H2 blocker|PK booster|Oxazolidinone|Sulfonamide|Antimycobacterial/i.test(drug.cls)) return "id";
	if (drug.pd.includes("anticoagulant") || drug.pd.includes("statin") || drug.pd.includes("beta-blocker") || drug.pd.includes("ndhp-ccb") || /Statin|CCB|Beta|ARB|ACE|antiarrhythmic|DOAC|Vitamin K|Cardiac|diuretic|Alpha-1|Fibrate|PDE5|Nitrate/i.test(drug.cls)) return "cardio";
	return "other";
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
({ ...DEFAULT_PHENOTYPES });
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
var STRENGTH_RANK = {
	strong: 3,
	moderate: 2,
	weak: 1
};
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
	if (aOp && bBz || bOp && aBz) out.push(pdPair(a, b, {
		suffix: "pd-opioid-benzo",
		severity: "major",
		effect: "respiratory depression",
		mechanism: "opioid × benzodiazepine / Z-drug",
		clinical: "FDA boxed warning: opioids plus benzodiazepines (or Z-drugs) cause profound sedation, respiratory depression, coma, and death. Avoid unless no alternative exists; if combined, use the lowest doses and monitor.",
		tags: ["cns", "respiratory"]
	}));
	if (has(a, "alpha2-agonist") && bOp || has(b, "alpha2-agonist") && aOp) out.push(pdPair(a, b, {
		suffix: "pd-alpha2-opioid",
		severity: "major",
		effect: "sedation not reversed by naloxone",
		mechanism: "α2-agonist × opioid",
		clinical: "Xylazine, medetomidine, and related α2-agonists sedate independently of the mu receptor. Naloxone reverses the opioid but not the α2 airway loss — support ventilation, do not stack extra naloxone expecting a wake-up.",
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
	else if (!(has(a, "alpha2-agonist") && bOp || has(b, "alpha2-agonist") && aOp) && (aOp && bCns || bOp && aCns || aCns && bCns && a.id !== b.id)) {
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
	if (qtScore(a) && qtScore(b)) out.push(pdPair(a, b, {
		suffix: "pd-qt",
		severity: qt >= 3 ? "major" : "moderate",
		effect: "additive QT prolongation / TdP",
		mechanism: "combined QT load",
		clinical: `Both drugs prolong ventricular repolarization. Stacking QT risk raises torsades de pointes. Check electrolytes, avoid other QT drugs, and review ECG if the pair cannot be separated.`,
		tags: ["qt"]
	}));
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
	if (has(a, "statin") && has(b, "fibrate") || has(b, "statin") && has(a, "fibrate")) {
		const simLova = a.id === "simvastatin" || b.id === "simvastatin" || a.id === "lovastatin" || b.id === "lovastatin";
		out.push(pdPair(a, b, {
			suffix: "pd-statin-fibrate",
			severity: simLova ? "contraindicated" : "major",
			effect: "myopathy / rhabdomyolysis",
			mechanism: "statin × fibrate",
			clinical: "Gemfibrozil with simvastatin or lovastatin is contraindicated. Other statin–fibrate pairs still raise rhabdomyolysis risk; prefer fenofibrate if a fibrate is required.",
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
		clinical: "Ethanol plus cocaine forms cocaethylene, a longer-lived metabolite with more arrhythmia, seizure, and hepatic risk than cocaine alone.",
		tags: ["cardiac", "alcohol"]
	}));
	if (has(a, "opioid-antagonist") && has(b, "opioid") || has(b, "opioid-antagonist") && has(a, "opioid")) out.push(pdPair(a, b, {
		suffix: "pd-antag-opioid",
		severity: "major",
		effect: "precipitated withdrawal / blocked analgesia",
		mechanism: "opioid antagonist × agonist",
		clinical: "Naltrexone or naloxone will displace full and partial agonists from the mu receptor. In a dependent patient that means precipitated withdrawal; in anyone it means lost opioid analgesia.",
		tags: ["opioid"]
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
		clinical: "Vitamin C and acidic juices ionize amphetamine and shorten its effect. Orange juice is a pH story; grapefruit is the 3A4 furanocoumarin — they are not interchangeable.",
		tags: ["food", "stimulant"]
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
	const ctx = host && "smoking" in host ? host : host && "CYP2D6" in host ? {
		phenotypes: host,
		smoking: false,
		ketamineRoute: "iv",
		cannabisRoute: "smoked",
		alcohol: "off"
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
	findings.push(...washoutFindings(drugs));
	findings.push(...lingerFindings(drugs));
	if (ctx) findings.push(...alcoholHostFindings(real, ctx.alcohol));
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
		nodes: [{
			name: "Benzoylecgonine",
			via: "hCE1",
			note: "Inactive urinary metabolite"
		}, {
			name: "Cocaethylene",
			via: "hCE1 + ethanol",
			note: "Longer t½, more cardiotoxic",
			active: true,
			toxic: true
		}]
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
		lane: "entactogen"
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
		id: "tyramine-maoi",
		title: "Tyramine foods + phenelzine",
		blurb: "Aged cheese / tap beer × irreversible MAOI",
		drugIds: ["tyramine-foods", "phenelzine"],
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
	cruciferous: PLATES.tobacco,
	mdma: PLATES.mdma,
	mda: PLATES.mdma,
	methylone: PLATES.mdma,
	mephedrone: PLATES.mdma,
	"three-mmc": PLATES.mdma,
	"a-pvp": PLATES.mdma,
	"tyramine-foods": PLATES.cheese,
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
	dronabinol: PLATES.wort,
	cannabidiol: PLATES.wort,
	ibogaine: PLATES.mushroom
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
	if (s.drugIds.includes("grapefruit")) return PLATES.grapefruit;
	if (s.drugIds.includes("tyramine-foods")) return PLATES.cheese;
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
		hint: "Fentanyl, naltrexone",
		plate: PLATES.poppy
	},
	{
		id: "food",
		label: "Food / herb",
		hint: "Grapefruit, tyramine",
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
		hint: "Xylazine, nitazenes",
		plate: PLATES.poppy
	},
	{
		id: "phenotype",
		label: "Phenotype",
		hint: "2D6 / 2C19 / 2C9 / 2B6",
		plate: PLATES.heme
	}
];
var PLANS = [
	{
		id: "free",
		name: "Desk",
		tagline: "Two-drug CYP and PD collisions.",
		monthly: 0,
		yearly: 0,
		features: [
			"Search the 240+ compound formulary",
			"Two drugs on the desk",
			"PK / PD collision cards",
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
	plan: "free",
	license: null,
	lifetime: false,
	previewUntil: null,
	justActivated: false,
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
		alcohol: "off"
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
				alcohol: "off"
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
			alcohol: extras?.alcohol ?? "off"
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
	resetPhenotypes: () => set({
		phenotypes: { ...DEFAULT_PHENOTYPES },
		smoking: false,
		ketamineRoute: "iv",
		cannabisRoute: "smoked",
		alcohol: "off"
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
			lifetime: Boolean(p.lifetime),
			justActivated: false
		};
	},
	partialize: (s) => ({
		selected: s.selected,
		phenotypes: s.phenotypes,
		smoking: s.smoking,
		ketamineRoute: s.ketamineRoute,
		cannabisRoute: s.cannabisRoute,
		alcohol: s.alcohol,
		plan: s.plan,
		license: s.license,
		lifetime: s.lifetime,
		previewUntil: s.previewUntil
	})
}));
function usePlan() {
	const plan = useDesk((s) => s.plan);
	const previewUntil = useDesk((s) => s.previewUntil);
	if (plan === "pro" || plan === "lab") return plan;
	if (previewUntil && Date.now() < previewUntil) return "pro";
	return "free";
}
/** Public pay / write lines — the operator asked these onto the desk. */
var OPERATOR = {
	name: "Kaleb Lovingier",
	venmo: "kaleblovingier",
	email: "kaleblovingier@gmail.com",
	phone: "360-707-8923",
	phoneHref: "tel:+13607078923",
	social: ["@badbird", "@kaleblovingier"],
	venmoUrl: "https://venmo.com/u/kaleblovingier",
	payLine: "Venmo @kaleblovingier"
};
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
	return `Pay $${price} on Venmo @${OPERATOR.venmo}. I send a signed key when it clears.`;
}
function salesDm(price = COMMERCE.founding) {
	return [
		"I built FirstPass — a CYP450 desk that maps ketamine, MAT, street adulterants (xylazine, nitazenes), and the usual psych stack, including grapefruit, smoke, and metabolizer status.",
		"",
		"Free: two-drug collisions.",
		`Founding license: $${price} once. Host factors, metabolites, enzyme atlas, export. Yours on this desk.`,
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
		`Venmo @${OPERATOR.venmo}`,
		"",
		"Educational model. Not a charting system."
	].join("\n");
}
function requestLicense(price = COMMERCE.founding) {
	return `I'd like a FirstPass founding license ($${price} once). I'll Venmo @${OPERATOR.venmo}. Send the key when it clears.`;
}
function fulfillKey(opts) {
	const to = opts.soldTo?.trim();
	return [
		to ? `${to} —` : "",
		"Your FirstPass founding license is ready.",
		"",
		opts.key,
		"",
		"Open Pro, paste the key, Redeem. The desk is yours on that browser.",
		"",
		"Educational CYP map — not a clinical system of record."
	].filter((l) => l !== "").join("\n");
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
	return `${`${regimen} — ${highest}`}${headline && headline !== regimen ? `\n${headline}` : ""}\nMapped on FirstPass. Educational CYP desk.`.trim();
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
function DrugSearch() {
	const selected = useDesk((s) => s.selected);
	const add = useDesk((s) => s.add);
	const cap = maxDrugs(usePlan());
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
				placeholder: full ? "Regimen full · remove a drug to add another" : "Ketamine, grapefruit, MAOI…",
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
					className: "flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: finding.tags.includes("food") ? "warn" : finding.kind === "pk" ? "accent" : finding.kind === "geno" ? "warn" : "info",
							children: finding.tags.includes("food") ? "Food" : finding.kind === "pk" ? "Pharmacokinetic" : finding.kind === "geno" ? "Phenotype" : "Pharmacodynamic"
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
	const dirty = PHENOTYPE_ENZYMES.some((e) => phenotypes[e] !== "NM") || smoking || ketamineRoute !== "iv" || cannabisRoute !== "smoked" || alcohol !== "off";
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
				children: "Poor ≈ a strong inhibitor. Smoke induces 1A2. Chronic alcohol induces 2E1. 2C9 PMs stack warfarin and edible THC."
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
					children: [
						"Venmo @",
						OPERATOR.venmo,
						" · ",
						OPERATOR.email
					]
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
function readString(input, key) {
	if (!input || typeof input !== "object") return "";
	const v = input[key];
	return typeof v === "string" ? v : "";
}
var redeemLicense = createServerFn({ method: "POST" }).validator((input) => ({ key: readString(input, "key") })).handler(createSsrRpc("44d8bbe640632087e1ae0c85eee1989e89f5aea9b69ea3fe55986c2c45da9af4"));
var mintLicenseKey = createServerFn({ method: "POST" }).validator((input) => ({
	pin: readString(input, "pin"),
	plan: readString(input, "plan")
})).handler(createSsrRpc("c4b9a08d61fce0057ad5128b30c506678321938dc4e4e2a201694c6b9199409c"));
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
					"Educational CYP450 / PD map. Not a clinician and not a charting system. Founding license is $79 once — Venmo @",
					OPERATOR.venmo,
					", then redeem the key on Pro."
				]
			})]
		})
	});
}
function OperatorLines({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: OPERATOR.venmoUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex min-h-10 items-center font-medium text-accent hover:underline",
				children: ["Venmo @", OPERATOR.venmo]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: " · $79"
			})] }),
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
	const [key, setKey] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!checkout.open) return null;
	const life = checkout.interval === "life" || checkout.plan === "lab";
	const amount = priceFor(checkout.plan === "free" ? "pro" : checkout.plan, checkout.interval);
	const name = checkout.interval === "life" ? "Founding" : checkout.plan === "lab" ? "Lab" : "Pro";
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: [
						"Licenses are signed keys. After payment you receive",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-fg",
							children: "FP-LIFE-…"
						}),
						" and paste it here. Preview is free for a week."
					]
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
				COMMERCE.payUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: COMMERCE.payUrl,
						target: "_blank",
						rel: "noreferrer",
						children: [
							"Pay $",
							amount,
							" on Venmo"
						]
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 rounded-md bg-bg-sunken px-3 py-3 text-sm leading-relaxed text-muted",
					children: [
						life ? `Founding is $${COMMERCE.founding} once. Venmo @${OPERATOR.venmo}, then paste the key ${OPERATOR.name} sends.` : `Pay $${amount} on Venmo @${OPERATOR.venmo}, then redeem the key you are sent.`,
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
		`Pay $${price} on Venmo @${OPERATOR.venmo}. I send a signed key when it clears.`,
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
function toPipe(t, status = "queued") {
	return {
		...t,
		status,
		note: "",
		added: (/* @__PURE__ */ new Date()).toISOString()
	};
}
var PIPE_KEY = "firstpass.pipeline.v1";
function loadPipe() {
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
	localStorage.setItem(PIPE_KEY, JSON.stringify(rows.slice(0, 80)));
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
var ISSUED_KEY = "firstpass.issued.v1";
var PAY_NOTE_KEY = "firstpass.payNote";
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
function Foundry() {
	const setView = useDesk((s) => s.setView);
	const [pin, setPin] = (0, import_react.useState)("");
	const [plan, setPlan] = (0, import_react.useState)("life");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [last, setLast] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)("");
	const [issued, setIssued] = (0, import_react.useState)([]);
	const [payNote, setPayNote] = (0, import_react.useState)("");
	const [soldTo, setSoldTo] = (0, import_react.useState)("");
	const [tab, setTab] = (0, import_react.useState)("hunt");
	(0, import_react.useEffect)(() => {
		setIssued(loadIssued());
		setPayNote(localStorage.getItem(PAY_NOTE_KEY) || OPERATOR.payLine);
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
	const fulfillment = last ? fulfillKey({
		key: last,
		soldTo
	}) : "";
	async function copy(label, text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(label);
			window.setTimeout(() => setCopied(""), 1600);
		} catch {}
	}
	async function mint() {
		setBusy(true);
		setErr("");
		try {
			const res = await mintLicenseKey({ data: {
				pin,
				plan
			} });
			if (!res.ok) {
				setErr(res.reason);
				return;
			}
			const next = [{
				key: res.key,
				plan: res.plan,
				at: (/* @__PURE__ */ new Date()).toISOString(),
				soldTo: soldTo.trim()
			}, ...issued].slice(0, 40);
			setIssued(next);
			localStorage.setItem(ISSUED_KEY, JSON.stringify(next));
			setLast(res.key);
			await copy("fulfill", fulfillKey({
				key: res.key,
				soldTo
			}));
		} catch {
			setErr("Could not mint. Try again.");
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
							children: "Find buyers. Sell keys."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: "This week’s hunt is five real WA shops. Copy the DM, take payment however you already get paid, mint a signed key. Hidden from the public nav."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1",
							children: [["hunt", "Hunt"], ["close", "Close"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
		}), tab === "hunt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HuntDesk, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseDesk, {
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
			dm,
			tweet,
			invoice,
			fulfillment,
			copy,
			mint
		})]
	});
}
function CloseDesk({ pin, setPin, plan, setPlan, busy, err, last, copied, issued, payNote, setPayNote, soldTo, setSoldTo, dm, tweet, invoice, fulfillment, copy, mint }) {
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						["1. Pitch", "Send the buyer DM. Founding is $79 once — cheaper to say yes than $12/mo."],
						["2. Collect", `${OPERATOR.payLine}. Email or text if they need a receipt.`],
						["3. Fulfill", "Mint LIFE. Copy fulfillment. They redeem under Pro."]
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
						children: "Mint a key"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Signed on the server. Forged strings will not redeem. The operator PIN is set on the server — it is not printed here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-4 block text-xs font-medium text-muted",
					htmlFor: "sold-to",
					children: "Sold to (optional — stamped on the fulfillment you copy)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "sold-to",
					className: "mt-1.5",
					value: soldTo,
					placeholder: "Clinic name, NP, student — whoever just paid",
					onChange: (e) => setSoldTo(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							autoComplete: "off",
							placeholder: "Operator PIN",
							value: pin,
							onChange: (e) => setPin(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => void mint(),
							disabled: busy || !pin,
							children: busy ? "Minting…" : "Mint"
						})
					]
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
				fulfillment ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium uppercase tracking-wide text-muted",
						children: "Fulfillment to paste back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => void copy("fulfill", fulfillment),
						children: copied === "fulfill" ? "Copied" : "Copy fulfillment"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-2 whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-sans text-sm leading-relaxed text-fg",
					children: fulfillment
				})] }) : null,
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
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-wide text-muted",
				children: "Issued on this browser"
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
	const cap = maxDrugs(usePlan());
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 font-mono text-[10px] uppercase tracking-wide text-subtle",
									children: enzymes.length ? enzymes.join(" · ") : sub ? `${sub.enzyme.replace("CYP", "")} sub` : "PD only"
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
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-bg-sunken px-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-fg",
								children: names.join(", ")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] tabular-nums text-accent",
								children: [w.days, "d"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: w.label
						})]
					}, w.ids.join("-"));
				})
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
	const host = (0, import_react.useMemo)(() => ({
		phenotypes,
		smoking,
		ketamineRoute,
		cannabisRoute,
		alcohol
	}), [
		phenotypes,
		smoking,
		ketamineRoute,
		cannabisRoute,
		alcohol
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
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
							children: "CYP450 desk"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex items-center gap-1 rounded-full bg-bg-sunken p-1",
							children: [
								["desk", "Desk"],
								["library", "Materia"],
								["atlas", "Atlas"],
								["plans", "Pro"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setView(id),
								className: cn("h-9 rounded-full px-2.5 text-xs font-medium sm:px-4 sm:text-sm", view === id ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg"),
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
			justActivated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-ok-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-start justify-between gap-3 px-4 py-3 sm:items-center sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-ok",
						children: "Founding license is live on this desk. Host factors, atlas, and export are open."
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
				children: view === "plans" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlansPage, {}) : view === "foundry" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foundry, {}) : view === "atlas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnzymeAtlas, {}) : view === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formulary, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							selected.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								onLoad: load,
								ready: hydrated
							}) : selected.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleDrug, { id: selected[0] }),
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
								blurb: "Phenotype, smoke, alcohol pattern, and route change the score. Two-drug PK stays free.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhenotypeCard, {})
							}),
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
	const shown = SAMPLE_REGIMENS.filter((s) => lane === "all" || s.lane === lane);
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
					children: "FirstPass is built around psychoactive CYP450 maps — NMDA dissociatives, 2D6 entactogens, psychedelics, stimulants, cannabinoids — then layers food, smoke, serotonin, and metabolizer status. Two-drug collisions stay free. Browse the materia, then put a pair on the desk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: () => setView("library"),
						children: "Browse the materia"
					})
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
					license ? ` · ${license}` : plan === "free" ? ` · founding $79 · Venmo @${OPERATOR.venmo}` : previewing ? " · buy before it lapses" : ""
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
				}), " Grapefruit knocks out intestinal 3A4. Tyramine plus an MAOI is a pressor crisis. Piperine and pomegranate are quieter 3A4 hits. Licorice drops potassium. Fat meals raise oral THC/CBD. Salt and urine pH move lithium and amphetamine."] })
			]
		})]
	});
}
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-1 text-[11px] leading-relaxed text-subtle",
		children: "Educational model of published CYP maps, food effects, and pharmacodynamic patterns, including ketamine, entactogens, psychedelics, and diet. Not a clinician, not a complete database, and not guidance for non-medical use. Always verify with primary references."
	});
}
function exportDesk(report, selected, host, license) {
	const body = {
		license,
		generated: (/* @__PURE__ */ new Date()).toISOString(),
		regimen: selected.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean),
		host,
		highest: report.highest,
		findings: report.findings
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
	const blob = new Blob([`# FirstPass ${selected.map((id) => DRUG_BY_ID[id]?.name ?? id).join(" + ")}\n${rows.join("\n")}`], { type: "text/csv" });
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
export { Home as component };
