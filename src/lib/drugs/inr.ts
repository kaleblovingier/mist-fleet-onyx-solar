/** Warfarin INR movers on this desk. Teaching — not a warfarin clinic protocol. */

import { DRUG_BY_ID } from "./catalog";

const RAISE = new Set([
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
  "dabigatran",
]);

const LOWER = new Set([
  "rifampin",
  "carbamazepine",
  "phenytoin",
  "phenobarbital",
  "primidone",
  "st-johns-wort",
  "vitamin-k",
  "kale",
  "spinach",
  "broccoli",
]);

export interface InrReport {
  raisers: { id: string; name: string; how: string }[];
  lowers: { id: string; name: string; how: string }[];
  pearl: string;
}

const HOW_RAISE: Record<string, string> = {
  amiodarone: "2C9 / 3A4 block — INR climbs over weeks, not overnight.",
  fluconazole: "2C9 inhibition. The azole that actually moves warfarin.",
  "tmp-smx": "2C9 plus displacement. A UTI pill is a classic INR spike.",
  ciprofloxacin: "Quieter than TMP-SMX, still a bump. QT is the other methadone row.",
  sertraline: "Bleed is PD (platelet serotonin) more than 2C9.",
  "fish-oil": "High-dose EPA/DHA — bleed, not CYP.",
  nattokinase: "The 'clot buster' bottle next to a VKA.",
  ibuprofen: "NSAID plus warfarin — GI bleed even if INR looks polite.",
};

const HOW_LOWER: Record<string, string> = {
  rifampin: "Pan-induction. INR falls hard. Stolen warfarin, stolen methadone.",
  carbamazepine: "3A4/2C9 induction. Autoinduction over weeks.",
  phenytoin: "Mixed — can raise then lower. TDM both drugs.",
  "st-johns-wort": "3A4/2C9 induction in a tea.",
  "vitamin-k": "The antidote in a gummy. Same cofactor as kale.",
  kale: "Phylloquinone smoothie — INR falls, not 2C9.",
};

export function inrOnDesk(ids: string[]): InrReport | null {
  if (!ids.includes("warfarin")) return null;
  const raisers = ids
    .filter((id) => id !== "warfarin" && RAISE.has(id))
    .map((id) => ({
      id,
      name: DRUG_BY_ID[id]?.name ?? id,
      how: HOW_RAISE[id] ?? "Labeled or mapped INR / bleed bump. Open the PI.",
    }));
  const lowers = ids
    .filter((id) => LOWER.has(id))
    .map((id) => ({
      id,
      name: DRUG_BY_ID[id]?.name ?? id,
      how: HOW_LOWER[id] ?? "Induction or vitamin K. INR falls.",
    }));
  let pearl =
    "Warfarin is 2C9 (S) and 3A4 (R). A new perpetrator deserves an INR plan you own — this desk does not pick a milligram or a hold.";
  if (raisers.length && lowers.length) {
    pearl = "Raisers and lowerers on the same board. Do not average them. Independently review.";
  } else if (raisers.length) {
    pearl = "Something on this desk can raise INR or bleed risk. Recheck is a clinician call, not a FirstPass order.";
  } else if (lowers.length) {
    pearl = "Something on this desk can dump INR. Leafy greens and inducers look the same on the strip.";
  }
  return { raisers, lowers, pearl };
}

export function inrWanted(ids: string[]) {
  return ids.includes("warfarin");
}
