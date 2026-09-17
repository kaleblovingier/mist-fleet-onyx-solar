export const ENZYMES = [
  "CYP1A2",
  "CYP2B6",
  "CYP2C8",
  "CYP2C9",
  "CYP2C19",
  "CYP2D6",
  "CYP2E1",
  "CYP3A4",
  "P-gp",
] as const;

export type Enzyme = (typeof ENZYMES)[number];

export type Strength = "strong" | "moderate" | "weak";
export type SubstrateSensitivity = "sensitive" | "major" | "minor";
export type Severity = "contraindicated" | "major" | "moderate" | "minor";

export type Metabolizer = "PM" | "IM" | "NM" | "UM";

export const PHENOTYPE_ENZYMES = ["CYP2D6", "CYP2C19", "CYP2C9", "CYP2B6"] as const;
export type PhenotypeEnzyme = (typeof PHENOTYPE_ENZYMES)[number];
export type PhenotypeMap = Record<PhenotypeEnzyme, Metabolizer>;

export const DEFAULT_PHENOTYPES: PhenotypeMap = {
  CYP2D6: "NM",
  CYP2C19: "NM",
  CYP2C9: "NM",
  CYP2B6: "NM",
};

export const METABOLIZER_LABEL: Record<Metabolizer, string> = {
  PM: "Poor",
  IM: "Intermediate",
  NM: "Normal",
  UM: "Ultrarapid",
};

export type KetamineRoute = "iv" | "in" | "oral";
export type CannabisRoute = "smoked" | "oral";
export type AlcoholPattern = "off" | "acute" | "chronic";

export const KETAMINE_ROUTE_LABEL: Record<KetamineRoute, string> = {
  iv: "IV / IM",
  in: "Intranasal",
  oral: "Oral",
};

export const CANNABIS_ROUTE_LABEL: Record<CannabisRoute, string> = {
  smoked: "Smoked",
  oral: "Edible",
};

export const ALCOHOL_LABEL: Record<AlcoholPattern, string> = {
  off: "Off",
  acute: "Acute",
  chronic: "Chronic",
};

export const PHENO_FREQ: Record<PhenotypeEnzyme, Partial<Record<Metabolizer, string>>> = {
  CYP2D6: { PM: "~7% EUR", UM: "~2–3% EUR" },
  CYP2C19: { PM: "~3% EUR · ~13% E. Asian", UM: "~30% EUR *17" },
  CYP2C9: { PM: "~2–6% EUR *3/*3", IM: "~30% EUR *2/*3" },
  CYP2B6: { PM: "~5–10% *6/*6" },
};

export interface HostContext {
  phenotypes: PhenotypeMap;
  smoking: boolean;
  ketamineRoute: KetamineRoute;
  cannabisRoute: CannabisRoute;
  alcohol: AlcoholPattern;
}

export const DEFAULT_HOST: HostContext = {
  phenotypes: { ...DEFAULT_PHENOTYPES },
  smoking: false,
  ketamineRoute: "iv",
  cannabisRoute: "smoked",
  alcohol: "off",
};

export type EnzymeRole =
  | {
      enzyme: Enzyme;
      kind: "substrate";
      sensitivity: SubstrateSensitivity;
      pathway: "clearance" | "activation";
      nti?: boolean;
    }
  | {
      enzyme: Enzyme;
      kind: "inhibitor" | "inducer";
      strength: Strength;
    };

export type PdFlag =
  | "serotonergic"
  | "maoi"
  | "cns-depressant"
  | "opioid"
  | "partial-opioid"
  | "benzo-zdrug"
  | "qt-known"
  | "qt-possible"
  | "anticoagulant"
  | "antiplatelet"
  | "nsaid"
  | "ssri-snri"
  | "hypoglycemic"
  | "insulin-secretagogue"
  | "acei-arb"
  | "k-sparing"
  | "loop-thiazide"
  | "anticholinergic"
  | "bradycardic"
  | "ndhp-ccb"
  | "beta-blocker"
  | "nitrate"
  | "pde5"
  | "alpha-blocker"
  | "statin"
  | "fibrate"
  | "nephrotoxic"
  | "seizure-lowering"
  | "hepatotoxic"
  | "immunosuppressant"
  | "dissociative"
  | "psychedelic"
  | "stimulant"
  | "cannabinoid"
  | "opioid-antagonist"
  | "alcohol"
  | "ghb"
  | "tyramine"
  | "fat-meal"
  | "sodium-load"
  | "sodium-restriction"
  | "urinary-acid"
  | "urinary-alkaline"
  | "tryptophan"
  | "alpha2-agonist"
  | "hypokalemic";

export type ItemKind = "drug" | "food" | "herb";

export interface Drug {
  id: string;
  name: string;
  brands: string[];
  cls: string;
  aliases: string[];
  enzymes: EnzymeRole[];
  pd: PdFlag[];
  toxicityHint: string;
  note?: string;
  kind: ItemKind;
}

export interface Finding {
  id: string;
  severity: Severity;
  kind: "pk" | "pd" | "geno";
  drugIds: string[];
  headline: string;
  enzymes: Enzyme[];
  effect: string;
  mechanism: string;
  clinical: string;
  tags: string[];
}

export interface EnzymeBurden {
  enzyme: Enzyme;
  substrates: string[];
  inhibitors: string[];
  inducers: string[];
  collisions: number;
}

export interface Report {
  findings: Finding[];
  burden: EnzymeBurden[];
  highest: Severity | "none";
  counts: Record<Severity, number>;
  stacks: StackBar[];
}

export const STACK_AXES = ["serotonin", "cns", "qt", "pressor", "nmda"] as const;
export type StackAxis = (typeof STACK_AXES)[number];

export const STACK_LABEL: Record<StackAxis, string> = {
  serotonin: "Serotonin",
  cns: "CNS / airway",
  qt: "QT",
  pressor: "Pressor",
  nmda: "NMDA",
};

export interface StackBar {
  axis: StackAxis;
  score: number;
  cap: number;
  items: string[];
}

export const SEVERITY_RANK: Record<Severity | "none", number> = {
  contraindicated: 4,
  major: 3,
  moderate: 2,
  minor: 1,
  none: 0,
};

export const SEVERITY_LABEL: Record<Severity | "none", string> = {
  contraindicated: "Contraindicated",
  major: "Major",
  moderate: "Moderate",
  minor: "Minor",
  none: "Clear",
};
