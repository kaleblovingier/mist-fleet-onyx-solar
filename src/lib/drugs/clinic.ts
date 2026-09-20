/** Teaching clinic cards — pregnancy, kidney, liver, Beers, boxed, labs. Not a label and not a dose. */

export type ClinicFlag = "avoid" | "caution" | "ok";

export interface ClinicCard {
  pregnancy?: ClinicFlag;
  pregNote?: string;
  lactation?: ClinicFlag;
  lactNote?: string;
  renal?: ClinicFlag;
  renalNote?: string;
  hepatic?: ClinicFlag;
  hepNote?: string;
  beers?: string;
  boxed?: string;
  monitor?: string[];
}

function card(partial: ClinicCard): ClinicCard {
  return partial;
}

export const CLINIC: Record<string, ClinicCard> = {
  warfarin: card({
    pregnancy: "avoid",
    pregNote: "Teratogen (nasal hypoplasia, stippled epiphyses). LMWH is the usual bridge. Former category X.",
    lactation: "ok",
    lactNote: "Warfarin is compatible with breastfeeding in most maps. INR the infant only if bleeding.",
    renal: "caution",
    hepatic: "caution",
    hepNote: "Synthesized clotting factors fall in liver failure — INR is the patient, not just the dose.",
    boxed: "Major or fatal bleed. INR is the monitor, vitamin K is the antidote.",
    monitor: ["INR", "CBC", "bleed"],
  }),
  apixaban: card({
    pregnancy: "caution",
    pregNote: "Limited human data. LMWH is still the default in pregnancy.",
    renal: "caution",
    renalNote: "Dose cut or avoid as GFR falls. Not dialysis-cleared like dabigatran.",
    boxed: "Premature discontinuation raises thrombotic risk. No vitamin-K reversal.",
    monitor: ["Cr", "bleed"],
  }),
  rivaroxaban: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Avoid in severe CKD. Take with food at the 15–20 mg doses.",
    boxed: "Premature discontinuation raises thrombotic risk.",
    monitor: ["Cr", "bleed"],
  }),
  dabigatran: card({
    pregnancy: "caution",
    renal: "avoid",
    renalNote: "Renally cleared. Severe CKD is a no. Idarucizumab is the reversal, not vitamin K.",
    boxed: "Premature discontinuation raises thrombotic risk.",
    monitor: ["Cr", "bleed"],
  }),
  enoxaparin: card({
    pregnancy: "ok",
    pregNote: "The usual antenatal anticoagulant. Does not cross like warfarin.",
    renal: "caution",
    renalNote: "Dose-adjust below CrCl 30. Anti-Xa if extremes of weight.",
    monitor: ["Cr", "platelets", "anti-Xa"],
  }),
  methotrexate: card({
    pregnancy: "avoid",
    pregNote: "Abortifacient and teratogen. Folate antagonism. Hold and wait out a cycle.",
    lactation: "avoid",
    renal: "caution",
    hepatic: "caution",
    boxed: "Marrow, liver, lung, pregnancy. NSAIDs and TMP-SMX raise toxicity.",
    monitor: ["CBC", "LFTs", "Cr"],
  }),
  azathioprine: card({
    pregnancy: "caution",
    pregNote: "Used in transplant/IBD pregnancy more often than MTX. Still a specialist call.",
    renal: "caution",
    hepatic: "caution",
    boxed: "Malignancy and myelosuppression. Allopurinol / febuxostat is xanthine oxidase — pancytopenia.",
    monitor: ["CBC", "LFTs"],
  }),
  mercaptopurine: card({
    pregnancy: "caution",
    boxed: "Myelosuppression. TPMT/NUDT15 and xanthine-oxidase blockers.",
    monitor: ["CBC"],
  }),
  mycophenolate: card({
    pregnancy: "avoid",
    pregNote: "REMS teratogen. Two forms of contraception. Switch before conception.",
    lactation: "avoid",
    boxed: "Embryofetal toxicity, malignancy, infection.",
    monitor: ["CBC", "preg test"],
  }),
  valproate: card({
    pregnancy: "avoid",
    pregNote: "Neural-tube defects, cognitive impairment. Not a first-line in people who can become pregnant.",
    lactation: "caution",
    hepatic: "avoid",
    hepNote: "Boxed hepatotoxicity, especially under 2 years and in mitochondrial disease.",
    boxed: "Hepatotoxicity, pancreatitis, fetal risk.",
    beers: "Avoid for most older adults unless bipolar/seizure with no alternative.",
    monitor: ["LFTs", "CBC", "level", "preg test"],
  }),
  carbamazepine: card({
    pregnancy: "caution",
    pregNote: "Neural-tube risk; folate. HLA-B*1502 SJS in ancestry from East/South Asia.",
    hepatic: "caution",
    boxed: "SJS/TEN, aplastic anemia, HLA-B*1502.",
    beers: "SIADH / hyponatremia watch in older adults.",
    monitor: ["CBC", "Na", "LFTs", "level"],
  }),
  lamotrigine: card({
    pregnancy: "caution",
    pregNote: "Clearance rises in pregnancy — levels fall. Valproate is the UGT trap.",
    lactation: "caution",
    boxed: "SJS/TEN. Slow titration. Valproate doubles parent.",
    monitor: ["rash", "level"],
  }),
  lithium: card({
    pregnancy: "caution",
    pregNote: "Ebstein anomaly signal, still used when the alternative is worse. Levels drift with GFR.",
    lactation: "caution",
    renal: "caution",
    renalNote: "Renally cleared. NSAID / ACEI / thiazide raise the level. CKD is a TDM problem.",
    beers: "Watch interactions that raise the level.",
    boxed: "Toxicity closely related to serum level.",
    monitor: ["Li", "Cr", "TSH", "Na"],
  }),
  phenytoin: card({
    pregnancy: "caution",
    pregNote: "Fetal hydantoin syndrome. 2C9 PMs stack parent.",
    hepatic: "caution",
    beers: "Falls, sedation, bone loss with chronic use.",
    monitor: ["level", "albumin", "CBC"],
  }),
  lisinopril: card({
    pregnancy: "avoid",
    pregNote: "Boxed fetal toxicity (renal dysgenesis, oligohydramnios) in 2nd/3rd trimester.",
    renal: "caution",
    renalNote: "Cr bump after start. HyperK with K-sparing or a salt substitute.",
    boxed: "Fetal toxicity.",
    monitor: ["Cr", "K"],
  }),
  losartan: card({
    pregnancy: "avoid",
    pregNote: "Same fetal toxicity boxed warning as ACE inhibitors.",
    renal: "caution",
    boxed: "Fetal toxicity.",
    monitor: ["Cr", "K"],
  }),
  valsartan: card({
    pregnancy: "avoid",
    renal: "caution",
    boxed: "Fetal toxicity.",
    monitor: ["Cr", "K"],
  }),
  spironolactone: card({
    pregnancy: "caution",
    pregNote: "Anti-androgen. Avoid when the fetus could be male.",
    renal: "caution",
    renalNote: "HyperK climbs as GFR falls. ACEI plus K plus this is the triad.",
    beers: "Avoid >25 mg/d if CrCl <30 — hyperK.",
    monitor: ["K", "Cr"],
  }),
  eplerenone: card({
    pregnancy: "caution",
    renal: "caution",
    monitor: ["K", "Cr"],
  }),
  metformin: card({
    pregnancy: "caution",
    pregNote: "Often continued in GDM / PCOS pathways. Not a teratogen like valproate.",
    renal: "avoid",
    renalNote: "Lactic acidosis risk as eGFR falls. Hold for contrast. Not a CYP story.",
    hepatic: "caution",
    beers: "Hold in significant CKD.",
    boxed: "Lactic acidosis — rare, renal/hepatic/hypoxia.",
    monitor: ["Cr", "B12"],
  }),
  glipizide: card({
    pregnancy: "caution",
    renal: "caution",
    beers: "Sulfonylureas — prolonged hypoglycemia in older adults. Glipizide is the quieter SU.",
    monitor: ["glucose"],
  }),
  glyburide: card({
    pregnancy: "caution",
    beers: "Avoid. Prolonged hypoglycemia in older adults — worse than glipizide.",
    monitor: ["glucose"],
  }),
  glimepiride: card({
    beers: "Sulfonylurea hypoglycemia in older adults.",
    monitor: ["glucose"],
  }),
  "insulin-glargine": card({
    pregnancy: "ok",
    beers: "Avoid sliding-scale-only insulin. Basal itself is not the Beers row.",
    monitor: ["glucose"],
  }),
  semaglutide: card({
    pregnancy: "caution",
    pregNote: "Weight-loss / GLP-1: stop well before planned pregnancy. Fetal growth signal in animals.",
    boxed: "Thyroid C-cell tumor boxed warning (rodent). Personal/family MTC / MEN2 is a no.",
    monitor: ["GI", "glucose"],
  }),
  tirzepatide: card({
    pregnancy: "caution",
    boxed: "Thyroid C-cell tumor boxed warning (rodent).",
    monitor: ["GI", "glucose"],
  }),
  ibuprofen: card({
    pregnancy: "avoid",
    pregNote: "Avoid in third trimester (ductus). Earlier pregnancy is a specialist call.",
    renal: "caution",
    renalNote: "Hemodynamic kidney hit. ACEI + diuretic + NSAID is the triple whammy.",
    beers: "Avoid chronic NSAIDs in older adults — GI bleed, CKD, HF.",
    boxed: "CV thrombotic events and GI bleed (NSAID class).",
    monitor: ["Cr", "CBC", "BP"],
  }),
  naproxen: card({
    pregnancy: "avoid",
    renal: "caution",
    beers: "Chronic NSAID — GI, CKD, HF.",
    boxed: "CV thrombotic events and GI bleed.",
    monitor: ["Cr", "CBC"],
  }),
  ketorolac: card({
    pregnancy: "avoid",
    renal: "avoid",
    beers: "Avoid. Highest GI/renal NSAID hit. Short course only even in adults.",
    boxed: "GI, renal, bleed, labor. 5-day ceiling.",
    monitor: ["Cr", "CBC"],
  }),
  diclofenac: card({
    pregnancy: "avoid",
    renal: "caution",
    hepatic: "caution",
    beers: "Chronic NSAID.",
    boxed: "CV and GI.",
    monitor: ["Cr", "LFTs"],
  }),
  meloxicam: card({
    pregnancy: "avoid",
    renal: "caution",
    beers: "Chronic NSAID.",
    boxed: "CV and GI.",
    monitor: ["Cr"],
  }),
  celecoxib: card({
    pregnancy: "avoid",
    renal: "caution",
    beers: "COX-2 still has CV/renal cost.",
    boxed: "CV thrombotic events.",
    monitor: ["Cr", "BP"],
  }),
  acetaminophen: card({
    pregnancy: "ok",
    pregNote: "Still the usual analgesic in pregnancy. Chronic alcohol plus APAP is the 2E1/NAPQI story.",
    hepatic: "caution",
    hepNote: "Ceiling dose. Chronic alcohol induces 2E1 — more NAPQI.",
    beers: "Prefer over NSAIDs in older adults if an analgesic is needed.",
    boxed: "Hepatotoxicity with doses above the labeled ceiling.",
    monitor: ["LFTs"],
  }),
  methadone: card({
    pregnancy: "caution",
    pregNote: "OTP continues methadone in pregnancy. Neonatal opioid withdrawal is expected, not a reason to stop.",
    lactation: "caution",
    hepatic: "caution",
    boxed: "QTc prolongation, respiratory depression, addiction.",
    beers: "Opioid + benzo is the airway boxed warning at any age.",
    monitor: ["ECG", "K", "Mg"],
  }),
  buprenorphine: card({
    pregnancy: "caution",
    pregNote: "Office-based and OTP both use buprenorphine in pregnancy. Precipitated withdrawal is occupancy.",
    boxed: "Respiratory depression with benzos / alcohol. Precipitated withdrawal with full agonists.",
    monitor: ["airway"],
  }),
  naltrexone: card({
    pregnancy: "caution",
    boxed: "Precipitated opioid withdrawal. Need a washout. Hepatotoxicity at high oral doses.",
    hepatic: "caution",
    monitor: ["LFTs"],
  }),
  morphine: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Morphine-6-glucuronide accumulates in CKD — longer apnea.",
    beers: "Opioids: falls, constipation, airway with gabapentinoids / benzos.",
    boxed: "Addiction, respiratory depression, neonatal withdrawal, benzo combo.",
    monitor: ["airway"],
  }),
  oxycodone: card({
    pregnancy: "caution",
    beers: "Opioid harms in older adults.",
    boxed: "Addiction, respiratory depression, benzo combo.",
    monitor: ["airway"],
  }),
  hydrocodone: card({
    pregnancy: "caution",
    beers: "Opioid harms in older adults.",
    boxed: "Addiction, respiratory depression, benzo combo.",
  }),
  fentanyl: card({
    pregnancy: "caution",
    boxed: "Addiction, respiratory depression, benzo combo. 3A4 inhibitors raise parent.",
    beers: "Opioid harms. Street fentanyl ± xylazine is a different row.",
  }),
  tramadol: card({
    pregnancy: "caution",
    renal: "caution",
    beers: "SIADH, seizures, serotonin. 2D6 UM stacks the opioid metabolite.",
    boxed: "Seizure, serotonin, addiction, respiratory depression.",
    monitor: ["Na"],
  }),
  codeine: card({
    pregnancy: "caution",
    lactation: "avoid",
    lactNote: "2D6 UM nursing parent can deliver morphine to the infant. Boxed.",
    beers: "Avoid. Unpredictable 2D6 activation.",
    boxed: "Respiratory depression in 2D6 UMs, including breastfed infants.",
  }),
  gabapentin: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Renally cleared. Dose-cut as GFR falls. Myoclonus in CKD.",
    beers: "With opioids — airway. Falls. Dose-cut in CKD.",
    boxed: "Respiratory depression with opioids and in respiratory disease.",
  }),
  pregabalin: card({
    pregnancy: "caution",
    renal: "caution",
    beers: "With opioids — airway. Dose-cut in CKD.",
    boxed: "Respiratory depression with opioids.",
  }),
  alprazolam: card({
    pregnancy: "caution",
    beers: "Avoid short-acting benzos in older adults — falls, delirium, crash.",
    boxed: "Concomitant opioid use. Dependence and withdrawal.",
  }),
  diazepam: card({
    pregnancy: "caution",
    beers: "Long-acting benzo. Avoid in older adults.",
    boxed: "Opioid combo, dependence.",
  }),
  clonazepam: card({
    pregnancy: "caution",
    beers: "Avoid benzos in older adults.",
    boxed: "Opioid combo, dependence.",
  }),
  lorazepam: card({
    pregnancy: "caution",
    beers: "Preferable to long-acting agents if a benzo is unavoidable — still Beers.",
    boxed: "Opioid combo, dependence.",
  }),
  midazolam: card({
    pregnancy: "caution",
    boxed: "Respiratory depression. 3A4 victims go deeper.",
  }),
  zolpidem: card({
    pregnancy: "caution",
    beers: "Avoid Z-drugs in older adults — falls, complex sleep behavior, crash.",
    boxed: "Complex sleep behaviors. Opioid combo.",
  }),
  amitriptyline: card({
    pregnancy: "caution",
    beers: "Highly anticholinergic, sedating. Avoid in older adults.",
    monitor: ["ECG"],
  }),
  nortriptyline: card({
    beers: "Anticholinergic / fall risk — quieter than amitriptyline, still Beers.",
    monitor: ["ECG"],
  }),
  diphenhydramine: card({
    pregnancy: "ok",
    beers: "Highly anticholinergic. Avoid as a sleep aid in older adults.",
  }),
  hydroxyzine: card({
    beers: "Anticholinergic. QT possible next to methadone.",
    monitor: ["ECG"],
  }),
  doxylamine: card({
    pregnancy: "ok",
    pregNote: "Used with B6 for nausea. Still anticholinergic in a geriatric host.",
    beers: "Anticholinergic sleep aid — avoid in older adults.",
  }),
  oxybutynin: card({
    beers: "Anticholinergic for bladder. Avoid if possible in older adults.",
  }),
  clozapine: card({
    pregnancy: "caution",
    boxed: "Agranulocytosis, myocarditis, seizures, orthostasis, constipation/ileus.",
    beers: "Anticholinergic / fall / constipation. ANC is the monitor at any age.",
    monitor: ["ANC", "ECG", "glucose", "lipids"],
  }),
  olanzapine: card({
    pregnancy: "caution",
    beers: "Antipsychotics in dementia — stroke and death boxed warning.",
    boxed: "Increased mortality in dementia-related psychosis.",
    monitor: ["glucose", "lipids", "weight"],
  }),
  quetiapine: card({
    pregnancy: "caution",
    beers: "Avoid for insomnia/behavior in dementia. QT possible.",
    boxed: "Increased mortality in dementia-related psychosis.",
    monitor: ["glucose", "ECG"],
  }),
  risperidone: card({
    beers: "Dementia mortality boxed. EPS / prolactin.",
    boxed: "Increased mortality in dementia-related psychosis.",
  }),
  haloperidol: card({
    beers: "Typical antipsychotic. Dementia mortality. QT.",
    boxed: "Increased mortality in dementia-related psychosis.",
    monitor: ["ECG"],
  }),
  citalopram: card({
    pregnancy: "caution",
    beers: "QTc — max dose lower in older adults.",
    monitor: ["ECG", "Na"],
  }),
  escitalopram: card({
    pregnancy: "caution",
    beers: "SIADH / fall risk. Quieter QT than citalopram.",
    monitor: ["Na"],
  }),
  sertraline: card({
    pregnancy: "caution",
    pregNote: "Often the preferred SSRI when one is needed in pregnancy.",
    beers: "SIADH / fall risk.",
    monitor: ["Na"],
  }),
  fluoxetine: card({
    pregnancy: "caution",
    beers: "Long washout. SIADH.",
    monitor: ["Na"],
  }),
  paroxetine: card({
    pregnancy: "caution",
    pregNote: "Cardiac malformation signal historically — usually not first-line in pregnancy.",
    beers: "Anticholinergic among SSRIs.",
    monitor: ["Na"],
  }),
  ketamine: card({
    pregnancy: "caution",
    boxed: "Sedation, dissociation, abuse. Blood pressure rise.",
    monitor: ["BP", "airway"],
  }),
  esketamine: card({
    pregnancy: "caution",
    boxed: "REMS: sedation, dissociation, abuse. Not a take-home bottle.",
    monitor: ["BP"],
  }),
  digoxin: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Renally cleared NTI. Levels lie if you draw too early.",
    beers: "Avoid as first-line in AF or HF. Toxicity as GFR falls.",
    monitor: ["level", "Cr", "K"],
  }),
  amiodarone: card({
    pregnancy: "avoid",
    pregNote: "Fetal thyroid. Long half-life — a washout of months.",
    hepatic: "caution",
    boxed: "Pulmonary, hepatic, and proarrhythmic toxicity. For life-threatening arrhythmia.",
    beers: "Avoid as first-line AF agent.",
    monitor: ["TSH", "LFTs", "CXR", "ECG", "eye"],
  }),
  sotalol: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Renally cleared. QT explodes as GFR falls.",
    boxed: "Proarrhythmia. In-hospital start historically.",
    beers: "QT / bradycardia.",
    monitor: ["ECG", "Cr", "K", "Mg"],
  }),
  colchicine: card({
    pregnancy: "caution",
    renal: "avoid",
    renalNote: "Fatal with clarithromycin or a strong 3A4/P-gp inhibitor in CKD.",
    hepatic: "caution",
    beers: "Reduce dose or avoid as GFR falls.",
    monitor: ["CBC", "Cr"],
  }),
  allopurinol: card({
    pregnancy: "caution",
    renal: "caution",
    renalNote: "Dose-cut in CKD. HLA-B*5801 SJS in high-risk ancestry.",
    boxed: "Severe cutaneous reaction.",
    monitor: ["rash", "Cr", "uric acid"],
  }),
  febuxostat: card({
    renal: "caution",
    boxed: "CV death vs allopurinol in CARES. Thiopurine interaction is xanthine oxidase.",
    monitor: ["LFTs", "uric acid"],
  }),
  tacrolimus: card({
    pregnancy: "caution",
    renal: "caution",
    hepatic: "caution",
    boxed: "Malignancy, infection. NTI. Grapefruit and azoles raise parent.",
    monitor: ["level", "Cr", "K", "glucose"],
  }),
  cyclosporine: card({
    pregnancy: "caution",
    renal: "caution",
    boxed: "Nephrotoxicity, malignancy, infection. Grapefruit / 3A4/P-gp.",
    monitor: ["level", "Cr", "BP", "K"],
  }),
  sirolimus: card({
    pregnancy: "caution",
    boxed: "Infection, malignancy. 3A4/P-gp victim.",
    monitor: ["level", "lipids", "CBC"],
  }),
  "ethinyl-estradiol": card({
    pregnancy: "avoid",
    pregNote: "Stop. Rifampin and St John's wort dump efficacy — that is the desk collision.",
    boxed: "Smoking + age >35: CV events. Thromboembolism.",
  }),
  rifampin: card({
    pregnancy: "caution",
    hepatic: "caution",
    boxed: "Hepatotoxicity. Induces everything that matters on this desk.",
    monitor: ["LFTs"],
  }),
  fluconazole: card({
    pregnancy: "avoid",
    pregNote: "High-dose / chronic: malformation signal. A one-dose yeast pill is a different row.",
    hepatic: "caution",
    monitor: ["LFTs", "ECG"],
  }),
  ketoconazole: card({
    pregnancy: "avoid",
    hepatic: "avoid",
    boxed: "Hepatotoxicity. QT. Strong 3A4 inhibitor — the probe perpetrator.",
    monitor: ["LFTs", "ECG"],
  }),
  itraconazole: card({
    hepatic: "caution",
    boxed: "CHF, QT, strong 3A4 inhibition.",
    monitor: ["LFTs"],
  }),
  voriconazole: card({
    pregnancy: "avoid",
    hepatic: "caution",
    monitor: ["LFTs", "level", "vision"],
  }),
  ciprofloxacin: card({
    pregnancy: "caution",
    renal: "caution",
    beers: "CNS, tendon, hypoglycemia, QT. Cations bind it in the gut.",
    boxed: "Tendon, peripheral neuropathy, CNS, myasthenia.",
    monitor: ["glucose", "ECG"],
  }),
  levofloxacin: card({
    pregnancy: "caution",
    renal: "caution",
    beers: "Same FQ boxed harms. QT more than cipro.",
    boxed: "Tendon, neuropathy, CNS, myasthenia.",
    monitor: ["ECG", "glucose"],
  }),
  moxifloxacin: card({
    beers: "FQ harms plus QT.",
    boxed: "Tendon, neuropathy, CNS. QT.",
    monitor: ["ECG"],
  }),
  doxycycline: card({
    pregnancy: "avoid",
    pregNote: "Tooth and bone in the second half of pregnancy. Cations bind it.",
    lactation: "caution",
  }),
  nitroglycerin: card({
    pregnancy: "caution",
    boxed: "PDE5 inhibitors are contraindicated — refractory hypotension.",
    monitor: ["BP"],
  }),
  "isosorbide-mononitrate": card({
    boxed: "PDE5 inhibitors are contraindicated.",
    monitor: ["BP"],
  }),
  sildenafil: card({
    pregnancy: "caution",
    boxed: "Nitrates contraindicated. 3A4 victims go hypotensive.",
    monitor: ["BP"],
  }),
  tadalafil: card({
    boxed: "Nitrates contraindicated (longer wait than sildenafil).",
    monitor: ["BP"],
  }),
  simvastatin: card({
    pregnancy: "avoid",
    pregNote: "Statins are generally stopped in pregnancy.",
    hepatic: "caution",
    boxed: "Myopathy / rhabdomyolysis. Strong 3A4 inhibitors contraindicated. Gemfibrozil too.",
    monitor: ["CK", "LFTs"],
  }),
  atorvastatin: card({
    pregnancy: "avoid",
    hepatic: "caution",
    boxed: "Myopathy. 3A4 victim — quieter than simva/lova.",
    monitor: ["CK", "LFTs"],
  }),
  lovastatin: card({
    pregnancy: "avoid",
    boxed: "Myopathy. Same 3A4/gemfibrozil map as simvastatin and red yeast rice.",
    monitor: ["CK"],
  }),
  "red-yeast-rice": card({
    pregnancy: "avoid",
    boxed: "This is lovastatin. Same myopathy map.",
    monitor: ["CK"],
  }),
  clopidogrel: card({
    pregnancy: "caution",
    boxed: "Diminished antiplatelet effect in 2C19 PMs. Omeprazole phenocopies that.",
    monitor: ["bleed"],
  }),
  levothyroxine: card({
    pregnancy: "ok",
    pregNote: "Dose usually goes up in pregnancy. Do not take with calcium, iron, or fiber.",
    monitor: ["TSH"],
  }),
  "st-johns-wort": card({
    pregnancy: "caution",
    boxed: "Induces 3A4/P-gp. Transplant, OCP, DOAC, tacrolimus all dump.",
  }),
  berberine: card({
    pregnancy: "avoid",
    pregNote: "Uterine stimulant folklore plus almost no pregnancy data. Skip.",
    monitor: ["glucose"],
  }),
  kava: card({
    hepatic: "avoid",
    hepNote: "Herb-induced liver injury. Not a free anxiolytic next to alcohol.",
    beers: "Sedating herb. Falls.",
  }),
  "green-tea": card({
    hepatic: "caution",
    hepNote: "Concentrated EGCG extract — USP liver signal. Tea is not this row.",
  }),
  "black-cohosh": card({
    hepatic: "caution",
    hepNote: "Herb-induced liver injury. Menopause shelf, not estrogen occupancy.",
  }),
  disulfiram: card({
    pregnancy: "caution",
    hepatic: "caution",
    boxed: "Never give if alcohol is on board. Hepatotoxicity.",
    monitor: ["LFTs"],
  }),
  linezolid: card({
    pregnancy: "caution",
    boxed: "MAO inhibition — serotonin syndrome and tyramine. Myelosuppression with duration.",
    monitor: ["CBC", "BP"],
  }),
  "tmp-smx": card({
    pregnancy: "caution",
    pregNote: "Folate in the first trimester; kernicterus signal near term.",
    renal: "caution",
    boxed: "Severe cutaneous reaction. Raises MTX and warfarin effect.",
    monitor: ["Cr", "K", "CBC"],
  }),
  ondansetron: card({
    pregnancy: "caution",
    beers: "QT. Next to methadone it is not a free antiemetic.",
    monitor: ["ECG"],
  }),
  cimetidine: card({
    beers: "CNS in older adults. The CYP perpetrator among H2 blockers.",
  }),
  baclofen: card({
    renal: "caution",
    renalNote: "Encephalopathy in CKD. Dose-cut or avoid.",
    beers: "Sedation, falls.",
  }),
  tizanidine: card({
    hepatic: "caution",
    beers: "Hypotension, sedation. 1A2 victims go deeper (cipro, fluvoxamine).",
    monitor: ["BP", "LFTs"],
  }),
  cyclobenzaprine: card({
    beers: "Anticholinergic muscle relaxant. Avoid in older adults.",
  }),
  meperidine: card({
    renal: "avoid",
    beers: "Avoid. Normeperidine seizures as GFR falls. Serotonin with MAOIs.",
    boxed: "MAOIs. Seizures. Not for chronic pain.",
  }),
  pioglitazone: card({
    pregnancy: "caution",
    hepatic: "caution",
    beers: "Heart failure. Fluid.",
    boxed: "CHF. Bladder cancer signal.",
    monitor: ["weight"],
  }),
  ranolazine: card({
    boxed: "QT. Strong 3A4 inhibitors contraindicated.",
    monitor: ["ECG"],
  }),
  hydroxychloroquine: card({
    pregnancy: "ok",
    pregNote: "Continued in lupus pregnancy.",
    beers: "Retinopathy with duration/dose. QT.",
    monitor: ["eye", "ECG"],
  }),
  fluticasone: card({
    boxed: "Ritonavir / cobicistat / strong 3A4 inhibitors — iatrogenic Cushing from 'local' steroid.",
  }),
  budesonide: card({
    boxed: "Gut 3A4 first-pass. Azoles and boosters make it systemic.",
  }),
};

export function clinicFor(id: string): ClinicCard | undefined {
  return CLINIC[id];
}

export function hasClinic(id: string) {
  return Boolean(CLINIC[id]);
}

export const CLINIC_PREG_AVOID = Object.entries(CLINIC)
  .filter(([, v]) => v.pregnancy === "avoid")
  .map(([id]) => id);

export const CLINIC_BEERS = Object.entries(CLINIC)
  .filter(([, v]) => Boolean(v.beers))
  .map(([id]) => id);

export const CLINIC_RENAL = Object.entries(CLINIC)
  .filter(([, v]) => v.renal === "avoid" || v.renal === "caution")
  .map(([id]) => id);
