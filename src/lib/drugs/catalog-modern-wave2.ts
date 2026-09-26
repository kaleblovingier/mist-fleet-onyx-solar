/**
 * Formulary wave 2 — more modern pharmacy + street-supply teaching rows.
 * Stacks on catalog-modern.ts. Empty enzyme lists mean no CYP story here, not "safe."
 * Educational desk only. Not a dose. Not FDA-cleared. PI / FDA / DEA govern.
 */

import type { Drug, Enzyme, EnzymeRole, ItemKind, PdFlag, Strength, SubstrateSensitivity } from "./types";

function sub(
  enzyme: Enzyme,
  sensitivity: SubstrateSensitivity,
  pathway: "clearance" | "activation" = "clearance",
  nti = false,
): EnzymeRole {
  return { enzyme, kind: "substrate", sensitivity, pathway, nti };
}

function inh(enzyme: Enzyme, strength: Strength): EnzymeRole {
  return { enzyme, kind: "inhibitor", strength };
}

function ind(enzyme: Enzyme, strength: Strength): EnzymeRole {
  return { enzyme, kind: "inducer", strength };
}

function d(
  id: string,
  name: string,
  brands: string[],
  cls: string,
  enzymes: EnzymeRole[],
  pd: PdFlag[],
  toxicityHint: string,
  extra?: { aliases?: string[]; note?: string; kind?: ItemKind },
): Drug {
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
    kind: extra?.kind ?? "drug",
  };
}

/** Second modern / street wave — merged after MODERN_FORMULARY. */
export const MODERN_WAVE2_FORMULARY: Drug[] = [
  // —— Migraine / NK3 / sleep-wake ——————————————————————
  d("rimegepant", "Rimegepant", ["Nurtec ODT"], "CGRP antagonist (gepant)",
    [sub("CYP3A4", "major"), inh("P-gp", "weak")],
    [],
    "3A4 victim toxicity; avoid with strong 3A4 perpetrators",
    {
      aliases: ["nurtec", "nurtec odt"],
      note: "ODT gepant for migraine. Strong 3A4 inhibitors raise exposure. Not an opioid or CNS-depressant story on this desk.",
    }),
  d("ubrogepant", "Ubrogepant", ["Ubrelvy"], "CGRP antagonist (gepant)",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim; labeled avoid with strong 3A4 inhibitors",
    {
      aliases: ["ubrelvy"],
      note: "Acute gepant. Same 3A4 map as other gepants — ritonavir-class boosters matter.",
    }),
  d("atogepant", "Atogepant", ["Qulipta"], "CGRP antagonist (gepant, preventive)",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim; dose tables live on the PI",
    {
      aliases: ["qulipta"],
      note: "Preventive oral gepant. Strong 3A4 inhibitors and inducers change exposure. This desk does not dose it.",
    }),
  d("zavegepant", "Zavegepant", ["Zavzpret"], "CGRP antagonist (nasal gepant)",
    [sub("CYP3A4", "minor")],
    [],
    "Local nasal effects; systemic CYP map is thin vs oral gepants",
    {
      aliases: ["zavzpret"],
      note: "Intranasal gepant. Less of a 3A4 teaching victim than oral gepants — still not 'interaction-free.'",
    }),
  d("fezolinetant", "Fezolinetant", ["Veozah"], "NK3 receptor antagonist",
    [sub("CYP1A2", "major")],
    ["hepatotoxic"],
    "Hepatotoxicity monitoring; 1A2 victim (ciprofloxacin, fluvoxamine)",
    {
      aliases: ["veozah"],
      note: "Menopause vasomotor. Strong 1A2 inhibitors are labeled avoid. LFTs on the PI — not a CYP dose card here.",
    }),
  d("elinzanetant", "Elinzanetant", [], "NK1/NK3 antagonist (investigational / emerging)",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim as the class map evolves — check current PI/label",
    {
      aliases: ["elinzanetant"],
      note: "Emerging NK antagonist for VMS. Treat as a 3A4 teaching row until the final label settles. Not FDA-status advice.",
    }),
  d("pitolisant", "Pitolisant", ["Wakix"], "H3 antagonist / inverse agonist (wake)",
    [sub("CYP2D6", "major"), sub("CYP3A4", "minor"), ind("CYP3A4", "weak")],
    ["qt-possible", "seizure-lowering"],
    "QT possible; 2D6 PM / inhibitors raise levels; weak 3A4 induction",
    {
      aliases: ["wakix"],
      note: "Narcolepsy wake drug. 2D6 PMs and strong inhibitors matter. Weak 3A4 induction can nudge sensitive victims.",
    }),
  d("solriamfetol", "Solriamfetol", ["Sunosi"], "DNRI wake-promoting",
    [],
    ["stimulant", "seizure-lowering"],
    "Pressor / psychiatric activation; MAOI contraindicated",
    {
      aliases: ["sunosi"],
      note: "Renal clearance dominates — not a CYP story. MAOI washout and BP monitoring live on the label.",
    }),
  d("tasimelteon", "Tasimelteon", ["Hetlioz"], "Melatonin receptor agonist",
    [sub("CYP1A2", "major"), sub("CYP3A4", "major")],
    ["cns-depressant"],
    "Sedation; 1A2/3A4 victim; smoke induction can lower levels",
    {
      aliases: ["hetlioz"],
      note: "Non-24 / Smith-Magenis. Fluvoxamine (1A2) and strong 3A4 inhibitors raise exposure. Smoking can cut levels.",
    }),

  // —— Fixed combos / modern psych ——————————————————————
  d("dxm-bupropion", "Dextromethorphan / bupropion", ["Auvelity"], "NMDA / NDRI antidepressant combo",
    [sub("CYP2D6", "major"), inh("CYP2D6", "strong")],
    ["serotonergic", "seizure-lowering", "dissociative"],
    "Seizure risk; serotonin toxicity with MAOIs; bupropion blocks 2D6 (DXM rises)",
    {
      aliases: ["auvelity", "dxm bupropion", "auvelity xr"],
      note: "Bupropion is the 2D6 inhibitor that keeps DXM around. MAOIs are labeled contraindicated. Not a cough-syrup redose toy.",
    }),
  d("olanzapine-samidorphan", "Olanzapine / samidorphan", ["Lybalvi"], "Atypical antipsychotic + opioid antagonist",
    [sub("CYP1A2", "major")],
    ["cns-depressant", "qt-possible", "opioid-antagonist", "seizure-lowering"],
    "Smoke induction lowers olanzapine; samidorphan precipitates withdrawal in opioid-dependent people",
    {
      aliases: ["lybalvi"],
      note: "Same 1A2 smoke map as olanzapine. Samidorphan is a μ antagonist — do not start on someone still on opioids.",
    }),

  // —— HIV / antivirals / mpox ————————————————————————
  d("doravirine", "Doravirine", ["Pifeltro"], "HIV NNRTI",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim; strong inducers drop levels",
    {
      aliases: ["pifeltro", "dora"],
      note: "NNRTI with a quieter CYP map than efavirenz, still a 3A4 victim to rifampin-class inducers.",
    }),
  d("fostemsavir", "Fostemsavir", ["Rukobia"], "HIV attachment inhibitor",
    [sub("CYP3A4", "minor")],
    ["qt-possible"],
    "QT possible; ethinyl estradiol exposure rises — PI has the contraceptive note",
    {
      aliases: ["rukobia"],
      note: "gp120 attachment inhibitor for MDR HIV. Watch QT stacks and the estrogen note on the label.",
    }),
  d("tecovirimat", "Tecovirimat", ["Tpoxx"], "Orthopox antiviral",
    [inh("CYP2C8", "weak"), inh("CYP2C19", "weak"), ind("CYP3A4", "weak")],
    [],
    "Weak perpetrator — still check sensitive victims (e.g. midazolam tables on PI)",
    {
      aliases: ["tpoxx", "ST-246"],
      note: "Mpox / orthopox. Capsule needs a fatty meal. Weak CYP hits — the PI still lists midazolam and repaglinide watches.",
    }),
  d("brincidofovir", "Brincidofovir", ["Tembexa"], "Orthopox / dsDNA antiviral (lipid cidofovir)",
    [inh("P-gp", "moderate")],
    ["hepatotoxic", "nephrotoxic"],
    "Hepatotoxicity; transporter interactions; not a casual cidofovir swap",
    {
      aliases: ["tembexa", "CMX001"],
      note: "Oral lipid conjugate. Liver signal dominates. Transporter story more than classic CYP.",
    }),

  // —— Cardio / renal / heme modern ————————————————————
  d("finerenone", "Finerenone", ["Kerendia"], "Nonsteroidal mineralocorticoid antagonist",
    [sub("CYP3A4", "major")],
    ["k-sparing", "nephrotoxic"],
    "Hyperkalemia with ACEI/ARB/K-sparing; strong 3A4 inhibitors contraindicated",
    {
      aliases: ["kerendia"],
      note: "CKD / T2D cardiorenal. Strong 3A4 inhibitors are a hard stop. Potassium stacks with ACEI/ARB.",
    }),
  d("vericiguat", "Vericiguat", ["Verquvo"], "sGC stimulator (HF)",
    [],
    ["pde5"],
    "Stacked vasodilation with PDE5 inhibitors — labeled avoid",
    {
      aliases: ["verquvo"],
      note: "Heart-failure sGC stimulator. PDE5 is the teaching pair (syncope), not CYP.",
    }),
  d("mavacamten", "Mavacamten", ["Camzyos"], "Cardiac myosin inhibitor",
    [sub("CYP2C19", "major"), sub("CYP3A4", "major")],
    ["hepatotoxic"],
    "Systolic dysfunction; 2C19/3A4 victim — REMS / PI dose tables",
    {
      aliases: ["camzyos"],
      note: "oHCM REMS drug. Strong 2C19 or 3A4 inhibitors/inducers change exposure. This desk never picks the milligram.",
    }),
  d("aprocitentan", "Aprocitentan", ["Tryvio"], "ERA (endothelin antagonist)",
    [sub("CYP3A4", "minor")],
    ["hepatotoxic", "nephrotoxic"],
    "Hepatotoxicity / edema / embryo-fetal toxicity class risks — PI governs",
    {
      aliases: ["tryvio"],
      note: "Resistant hypertension ERA. Embryo-fetal and liver class warnings matter more than CYP here.",
    }),
  d("andexanet", "Andexanet alfa", ["Andexxa"], "Factor Xa reversal",
    [],
    ["anticoagulant"],
    "Thrombotic risk after reversal; not a CYP story",
    {
      aliases: ["andexxa", "andexanet alfa"],
      note: "Reversal for apixaban/rivaroxaban bleeding. Teaching row for 'how do you undo a DOAC' — not an interaction desk star.",
    }),
  d("idarucizumab", "Idarucizumab", ["Praxbind"], "Dabigatran reversal (Fab)",
    [],
    ["anticoagulant"],
    "Specific dabigatran reversal; no CYP map",
    {
      aliases: ["praxbind"],
      note: "Monoclonal Fab for dabigatran. Pair teaching with dabigatran overdose / bleed cases.",
    }),

  // —— Pain / onco oral / ID ——————————————————————————
  d("suzetrigine", "Suzetrigine", ["Journavx"], "NaV1.8 inhibitor (non-opioid analgesic)",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim; avoid with strong 3A4 inhibitors per label",
    {
      aliases: ["journavx", "vx-548"],
      note: "Non-opioid acute pain. Strong 3A4 inhibitors raise exposure. Not an opioid PD stack — still not 'interaction-free.'",
    }),
  d("sotorasib", "Sotorasib", ["Lumakras"], "KRAS G12C inhibitor",
    [inh("CYP3A4", "moderate"), ind("CYP3A4", "weak"), inh("P-gp", "moderate")],
    ["hepatotoxic"],
    "Perpetrator for 3A4/P-gp victims; acid-reducing agents cut absorption",
    {
      aliases: ["lumakras"],
      note: "Oral KRAS G12C. PPI/H2 timing matters. Moderate 3A4 inhibition can raise midazolam-class victims.",
    }),
  d("adagrasib", "Adagrasib", ["Krazati"], "KRAS G12C inhibitor",
    [sub("CYP3A4", "major"), inh("CYP3A4", "strong"), inh("P-gp", "moderate")],
    ["qt-possible", "hepatotoxic"],
    "Strong 3A4 inhibitor + QT possible; victim to strong 3A4 perpetrators",
    {
      aliases: ["krazati"],
      note: "Hotter CYP story than sotorasib — strong 3A4 inhibition. QT stacks with methadone/macrolides still teach.",
    }),
  d("lefamulin", "Lefamulin", ["Xenleta"], "Pleuromutilin antibiotic",
    [sub("CYP3A4", "major"), inh("CYP3A4", "moderate")],
    ["qt-known"],
    "QT prolongation; 3A4 victim and moderate inhibitor",
    {
      aliases: ["xenleta"],
      note: "Community pneumonia. Labeled QT. Moderate 3A4 inhibition plus 3A4 substrate — messy with ritonavir or midazolam.",
    }),
  d("omadacycline", "Omadacycline", ["Nuzyra"], "Aminomethylcycline antibiotic",
    [],
    [],
    "Cation chelation (antacids / iron); little CYP story",
    {
      aliases: ["nuzyra"],
      note: "Tetracycline-family absorption rules. Not a CYP perpetrator — still separate from dairy/antacids.",
    }),
  d("ibrexafungerp", "Ibrexafungerp", ["Brexafemme"], "Triterpenoid antifungal",
    [sub("CYP3A4", "major")],
    [],
    "3A4 victim; embryo-fetal toxicity — PI pregnancy testing",
    {
      aliases: ["brexafemme"],
      note: "Oral glucan synthase inhibitor. Strong 3A4 inhibitors/inducers matter. Pregnancy contraindication is on the label.",
    }),
  d("rezafungin", "Rezafungin", ["Rezzayo"], "Echinocandin antifungal (weekly IV)",
    [],
    [],
    "Infusion / hepatic signals on PI; minimal CYP map",
    {
      aliases: ["rezzayo"],
      note: "Long-acting echinocandin. Little CYP teaching value — still a shelf row for candidemia cases.",
    }),

  // —— Metabolic emerging ————————————————————————————
  d("retatrutide", "Retatrutide", [], "Triple GIP/GLP-1/glucagon agonist (emerging)",
    [],
    ["hypoglycemic"],
    "Stacked hypoglycemia with SU/insulin; GI slowing",
    {
      aliases: ["ly3437943", "reta"],
      note: "Investigational / emerging incretin. Same hypo + delayed-emptying teaching map as other incretins. Status changes — not a marketing claim.",
    }),
  d("orforglipron", "Orforglipron", [], "Oral non-peptide GLP-1 agonist (emerging)",
    [sub("CYP3A4", "minor")],
    ["hypoglycemic"],
    "Hypoglycemia with secretagogues; check evolving label for CYP",
    {
      aliases: ["ly3502970"],
      note: "Oral small-molecule GLP-1 in development. Treat CYP as provisional — PI/final label wins.",
    }),
  d("cagrilintide", "Cagrilintide", [], "Amylin analog (emerging, often with semaglutide)",
    [],
    ["hypoglycemic"],
    "GI slowing / hypo when stacked with insulin secretagogues",
    {
      aliases: ["cagri", "cagrisema"],
      note: "Amylin analog teaching row. Delayed emptying stack with GLP-1s. Not a CYP desk star.",
    }),
  d("setmelanotide", "Setmelanotide", ["Imcivree"], "MC4R agonist",
    [],
    [],
    "Hyperpigmentation / sexual arousal class effects — PI governs",
    {
      aliases: ["imcivree"],
      note: "Rare genetic obesity. Minimal CYP map — shelf presence for specialty endocrine cases.",
    }),

  // —— Street opioids / fentanyl analogs ————————————————
  d("acrylfentanyl", "Acrylfentanyl", [], "Street synthetic opioid (fentanyl analog)",
    [sub("CYP3A4", "major")],
    ["opioid", "cns-depressant"],
    "Potent μ agonist; naloxone may need repeat doses; benzo airway stack",
    {
      aliases: ["acryloylfentanyl", "acrylic fentanyl"],
      note: "Illicit fentanyl analog. Same teaching map as fentanyl: 3A4 victims, xylazine/benzo stacks, naloxone is μ-only.",
    }),
  d("furanylfentanyl", "Furanylfentanyl", [], "Street synthetic opioid (fentanyl analog)",
    [sub("CYP3A4", "major")],
    ["opioid", "cns-depressant"],
    "Potent illicit opioid; naloxone μ-only; designer benzo stack",
    {
      aliases: ["furanyl fentanyl", "fuf"],
      note: "Common in seized powder. Treat like other illicit fentanyls on this desk.",
    }),
  d("cyclopropylfentanyl", "Cyclopropylfentanyl", [], "Street synthetic opioid (fentanyl analog)",
    [sub("CYP3A4", "major")],
    ["opioid", "cns-depressant"],
    "Illicit μ agonist; airway stack with sedatives",
    { aliases: ["cyclopropyl fentanyl"] }),
  d("ocfentanil", "Ocfentanil", [], "Street synthetic opioid (fentanyl analog)",
    [sub("CYP3A4", "major")],
    ["opioid", "cns-depressant"],
    "Potent illicit opioid; naloxone μ-only",
    { aliases: ["ocfentanil", "A-3217"] }),
  d("sufentanil", "Sufentanil", ["Dsuvia", "Sufenta"], "Opioid analgesic (anesthesia)",
    [sub("CYP3A4", "major")],
    ["opioid", "cns-depressant"],
    "Profound respiratory depression; 3A4 victim; benzo stack",
    {
      aliases: ["dsuvia", "sufenta"],
      note: "Clinical high-potency fentanyl cousin. Strong 3A4 inhibitors raise exposure. Not a street baggie — still an airway desk row.",
    }),
  d("alfentanil", "Alfentanil", ["Alfenta"], "Opioid analgesic (anesthesia)",
    [sub("CYP3A4", "sensitive")],
    ["opioid", "cns-depressant"],
    "Sensitive 3A4 victim; respiratory depression",
    {
      aliases: ["alfenta"],
      note: "Classic sensitive 3A4 opioid substrate — teaching pair with strong azoles / ritonavir.",
    }),
  d("remifentanil", "Remifentanil", ["Ultiva"], "Opioid analgesic (esterase-cleared)",
    [],
    ["opioid", "cns-depressant"],
    "Ultra-short; plasma esterase clearance — little CYP story",
    {
      aliases: ["ultiva"],
      note: "Cleared by nonspecific esterases, not CYP. PD with other CNS depressants still applies in the OR.",
    }),
  d("metodesnitazene", "Metodesnitazene", [], "Benzimidazole opioid (nitazene)",
    [sub("CYP3A4", "major"), sub("CYP2D6", "minor")],
    ["opioid", "cns-depressant"],
    "High-potency nitazene; naloxone μ-only; benzo/xylazine stack",
    {
      aliases: ["metodesnitazene", "metodesaza"],
      note: "Illicit benzimidazole opioid. Same desk map as other nitazenes.",
    }),
  d("o-dsmt", "O-Desmethyltramadol", [], "Tramadol active metabolite / street opioid",
    [sub("CYP2D6", "minor"), sub("CYP3A4", "major")],
    ["opioid", "serotonergic", "seizure-lowering", "cns-depressant"],
    "μ agonist + serotonin; seizures; MAOI risk",
    {
      aliases: ["odsmt", "o-dsmt", "desmetramadol"],
      note: "Active metabolite of tramadol, also sold alone. Serotonin + opioid + seizure map — not 'just a weak opioid.'",
    }),

  // —— Cathinones / dissociatives / designer benzos ————
  d("mdpv", "MDPV", [], "Cathinone stimulant (pyrovalerone)",
    [sub("CYP2D6", "minor")],
    ["stimulant", "seizure-lowering"],
    "Severe sympathomimetic toxicity; MAOI hypertensive crisis",
    {
      aliases: ["bath salts", "mdpv", "methylenedioxypyrovalerone"],
      note: "DAT/NET blocker. Pressor with MAOIs. Not an MDMA roll.",
    }),
  d("3-mmc", "3-MMC", [], "Cathinone stimulant / entactogen",
    [sub("CYP2D6", "major")],
    ["serotonergic", "stimulant", "seizure-lowering"],
    "Hyperthermia / serotonin toxicity with MAOIs",
    {
      aliases: ["3mmc", "3-methylmethcathinone", "metaphedrone"],
      note: "Often sold as a mephedrone replacement. MAOI + serotonin map still applies.",
    }),
  d("n-ethylhexedrone", "N-Ethylhexedrone", [], "Cathinone stimulant",
    [sub("CYP2D6", "minor")],
    ["stimulant", "seizure-lowering"],
    "Sympathomimetic toxicity; MAOI pressor risk",
    {
      aliases: ["hexen", "n-ethylhexedrone", "neh"],
      note: "Research-chemical cathinone. Stimulant PD dominates.",
    }),
  d("2-fdck", "2-Fluorodeschloroketamine", [], "Arylcyclohexylamine dissociative",
    [sub("CYP2B6", "major"), sub("CYP3A4", "major")],
    ["dissociative", "cns-depressant", "seizure-lowering"],
    "Dissociation + CNS depression with opioids / alcohol / benzos",
    {
      aliases: ["2fdck", "2f-dck", "2-fdck"],
      note: "Ketamine analog on the street. Same airway stack teaching as ketamine — not a free k-hole.",
    }),
  d("3-meo-pcp", "3-MeO-PCP", [], "Arylcyclohexylamine dissociative",
    [sub("CYP2B6", "minor"), sub("CYP3A4", "minor")],
    ["dissociative", "cns-depressant", "seizure-lowering"],
    "Longer, hotter dissociative; mania / seizure risk; CNS-depressant stack",
    {
      aliases: ["3meopcp", "3-meo-pcp"],
      note: "More stimulating than ketamine for many people. Still an airway stack with opioids and benzos.",
    }),
  d("nifoxipam", "Nifoxipam", [], "Designer benzodiazepine",
    [sub("CYP3A4", "major")],
    ["benzo-zdrug", "cns-depressant", "seizure-lowering"],
    "Active metabolite-class RC benzo; opioid airway stack",
    {
      aliases: ["nifoxipam", "3-hydroxy-desmethylflunitrazepam"],
      note: "Often described as a flunitrazepam-related metabolite RC. Treat as a high-potency 3A4 benzo.",
    }),
  d("desalkylgidazepam", "Desalkylgidazepam", [], "Designer benzodiazepine",
    [sub("CYP3A4", "major")],
    ["benzo-zdrug", "cns-depressant", "seizure-lowering"],
    "Long-acting RC benzo; delayed withdrawal; opioid airway stack",
    {
      aliases: ["gidazepam-metabolite", "desalkylgidazepam", "bromonordiazepam"],
      note: "Gidazepam metabolite sold as an RC. Long action — blackouts and delayed withdrawal.",
    }),
  d("flubrotizolam", "Flubrotizolam", [], "Thienodiazepine (designer)",
    [sub("CYP3A4", "major")],
    ["benzo-zdrug", "cns-depressant", "seizure-lowering"],
    "Potent thienodiazepine RC; opioid airway stack",
    {
      aliases: ["flubrotizolam"],
      note: "Etizolam-family RC. Same teaching: 3A4 + opioid/alcohol airway.",
    }),

  // —— Nicotine cessation teaching ————————————————————
  d("cytisine", "Cytisine", ["Tabex", "Toxovac"], "Partial nicotinic agonist",
    [],
    [],
    "Nausea / sleep disturbance; not a CYP perpetrator",
    {
      aliases: ["tabex", "baptitoxine", "cytisinicline"],
      note: "Plant alkaloid smoking-cessation aid (region-dependent availability). Minimal CYP map — shelf row next to varenicline teaching.",
    }),
];
