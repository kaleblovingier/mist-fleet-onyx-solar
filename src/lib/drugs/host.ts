import type { CannabisRoute, Drug, EnzymeRole, HostContext, KetamineRoute } from "./types";

export const SMOKE: Drug = {
  id: "__smoke",
  name: "Tobacco smoke (PAH)",
  brands: [],
  cls: "Combustion CYP1A2 inducer",
  aliases: ["smoking", "cigarettes", "pah"],
  enzymes: [{ enzyme: "CYP1A2", kind: "inducer", strength: "strong" }],
  pd: [],
  toxicityHint: "Loss of 1A2-victim efficacy while smoking; rebound toxicity on cessation",
  note: "Polycyclic aromatic hydrocarbons induce CYP1A2. Nicotine itself is not the inducer.",
  kind: "food",
};

export const CHRONIC_ETOH: Drug = {
  id: "__etoh-chronic",
  name: "Chronic alcohol (CYP2E1)",
  brands: [],
  cls: "Lifestyle CYP2E1 inducer",
  aliases: ["chronic drinking"],
  enzymes: [{ enzyme: "CYP2E1", kind: "inducer", strength: "strong" }],
  pd: [],
  toxicityHint: "Induced 2E1 — more NAPQI from acetaminophen, faster 2E1-victim clearance",
  note: "Chronic daily drinking induces CYP2E1. Acute intoxication is a different story (CNS + 2E1 occupancy).",
  kind: "food",
};

export const HOST_ETOH_CNS: Drug = {
  id: "__etoh-cns",
  name: "Alcohol (host pattern)",
  brands: [],
  cls: "Host CNS depressant",
  aliases: ["drinking", "host alcohol"],
  enzymes: [],
  pd: ["alcohol", "cns-depressant", "seizure-lowering"],
  toxicityHint: "Respiratory depression with other CNS drugs, cocaethylene with cocaine",
  note: "Host-factor alcohol — the pattern on the desk, not a pour. Stacks as ethanol for PD.",
  kind: "food",
};

export const FIRST_PASS_NMDA = [
  "ketamine",
  "esketamine",
  "two-fdck",
  "mxe",
  "dck",
  "three-meo-pcp",
] as const;

function retargetKetamine(drug: Drug, route: KetamineRoute): Drug {
  if (!(FIRST_PASS_NMDA as readonly string[]).includes(drug.id)) return drug;
  const enzymes: EnzymeRole[] = drug.enzymes.filter((e) => e.enzyme !== "CYP3A4" && e.enzyme !== "CYP2B6");
  if (route === "oral") {
    enzymes.push(
      { enzyme: "CYP2B6", kind: "substrate", sensitivity: "major", pathway: "clearance" },
      { enzyme: "CYP3A4", kind: "substrate", sensitivity: "sensitive", pathway: "clearance" },
    );
  } else if (route === "in") {
    enzymes.push(
      { enzyme: "CYP2B6", kind: "substrate", sensitivity: "major", pathway: "clearance" },
      { enzyme: "CYP3A4", kind: "substrate", sensitivity: "major", pathway: "clearance" },
    );
  } else {
    enzymes.push(
      { enzyme: "CYP2B6", kind: "substrate", sensitivity: "major", pathway: "clearance" },
      { enzyme: "CYP3A4", kind: "substrate", sensitivity: "minor", pathway: "clearance" },
    );
  }
  const routeNote =
    route === "oral"
      ? "Oral dosing sees extensive 3A4/2B6 first-pass; 3A4 inhibitors raise exposure far more than IV."
      : route === "in"
        ? "Intranasal esketamine still hits hepatic 2B6/3A4, with less first-pass than oral."
        : "IV/IM bypasses gut 3A4 first-pass; hepatic CYP2B6 remains the main clearance step.";
  return { ...drug, enzymes, note: routeNote };
}

function retargetThc(drug: Drug, route: CannabisRoute): Drug {
  if (drug.id !== "dronabinol") return drug;
  const enzymes: EnzymeRole[] =
    route === "oral"
      ? [
          { enzyme: "CYP2C9", kind: "substrate", sensitivity: "sensitive", pathway: "clearance" },
          { enzyme: "CYP3A4", kind: "substrate", sensitivity: "major", pathway: "clearance" },
        ]
      : [
          { enzyme: "CYP2C9", kind: "substrate", sensitivity: "minor", pathway: "clearance" },
          { enzyme: "CYP3A4", kind: "substrate", sensitivity: "minor", pathway: "clearance" },
        ];
  return {
    ...drug,
    enzymes,
    note:
      route === "oral"
        ? "Edible first-pass makes 11-OH-THC, which is more psychoactive than parent. CYP2C9/3A4 inhibitors stretch it."
        : "Smoked THC mostly skips 11-OH-THC first-pass. Hepatic 2C9/3A4 still clear parent, but the edible trap is quieter.",
  };
}

export function applyHost(drugs: Drug[], host: HostContext): Drug[] {
  const mapped = drugs.map((d) => retargetThc(retargetKetamine(d, host.ketamineRoute), host.cannabisRoute));
  const extra: Drug[] = [];
  if (host.smoking) extra.push(SMOKE);
  if (host.alcohol === "chronic") extra.push(CHRONIC_ETOH);
  if (host.alcohol !== "off" && !drugs.some((d) => d.id === "ethanol")) extra.push(HOST_ETOH_CNS);
  return extra.length ? [...mapped, ...extra] : mapped;
}

export function isVirtual(id: string) {
  return id.startsWith("__");
}

export const WASHOUT: Array<{ ids: string[]; days: number; label: string }> = [
  {
    ids: ["fluoxetine"],
    days: 35,
    label:
      "Norfluoxetine keeps CYP2D6 blocked for ~5 weeks after the last dose. Stopping yesterday does not clear the interaction.",
  },
  {
    ids: ["phenelzine", "tranylcypromine", "isocarboxazid"],
    days: 14,
    label:
      "Irreversible MAOIs need a 14-day washout before a serotonergic, stimulant, or entactogen. Linezolid is an MAOI too.",
  },
  {
    ids: ["moclobemide", "harmaline"],
    days: 1,
    label:
      "Reversible MAO-A (moclobemide, harmala alkaloids) washes out faster (~24 h) but is still contraindicated with MDMA and DMT.",
  },
  {
    ids: ["amiodarone"],
    days: 28,
    label:
      "Amiodarone inhibition (2C9, 3A4, 2D6, 1A2, P-gp) lingers for weeks after the last dose. The half-life is measured in tens of days.",
  },
];

export function washoutsFor(ids: string[]) {
  const set = new Set(ids);
  return WASHOUT.filter((w) => w.ids.some((id) => set.has(id)));
}
