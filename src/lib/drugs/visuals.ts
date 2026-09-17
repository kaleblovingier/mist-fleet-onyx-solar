import type { Drug, Enzyme } from "./types";
import type { SampleLane, SampleRegimen } from "./samples";

export const PLATES = {
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
  alcohol: "/plates/alcohol.jpg",
} as const;

export type PlateId = keyof typeof PLATES;

export const ENZYME_PLATE: Record<Enzyme, string> = {
  CYP1A2: PLATES.tobacco,
  CYP2B6: PLATES.cyp2b6,
  CYP2C8: PLATES.heme,
  CYP2C9: PLATES.heme,
  CYP2C19: PLATES.cyp2d6,
  CYP2D6: PLATES.cyp2d6,
  CYP2E1: PLATES.liver,
  CYP3A4: PLATES.cyp3a4,
  "P-gp": PLATES.heme,
};

export const LANE_PLATE: Record<SampleLane | "all", string> = {
  all: PLATES.hero,
  nmda: PLATES.ketamine,
  entactogen: PLATES.mdma,
  gaba: PLATES.alcohol,
  phenotype: PLATES.heme,
  smoke: PLATES.tobacco,
  mat: PLATES.poppy,
  food: PLATES.grapefruit,
  street: PLATES.poppy,
  clinic: PLATES.heme,
};

const DRUG_PLATE: Record<string, string> = {
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
  propofol: PLATES.alcohol,
  diclazepam: PLATES.alcohol,
  primidone: PLATES.alcohol,
  dronabinol: PLATES.wort,
  cannabidiol: PLATES.wort,
  ibogaine: PLATES.mushroom,
};

export function plateForDrug(drug: Pick<Drug, "id" | "pd" | "cls" | "kind">): string {
  if (DRUG_PLATE[drug.id]) return DRUG_PLATE[drug.id];
  if (drug.kind === "food") return PLATES.grapefruit;
  if (drug.kind === "herb") return PLATES.wort;
  if (drug.pd.includes("dissociative")) return PLATES.ketamine;
  if (drug.pd.includes("psychedelic")) return PLATES.mushroom;
  if (drug.pd.includes("opioid") || drug.pd.includes("opioid-antagonist")) return PLATES.poppy;
  if (drug.pd.includes("alcohol") || drug.pd.includes("ghb") || drug.pd.includes("benzo-zdrug"))
    return PLATES.alcohol;
  if (drug.pd.includes("cannabinoid")) return PLATES.wort;
  if (drug.pd.includes("stimulant") || drug.pd.includes("serotonergic")) return PLATES.mdma;
  return PLATES.heme;
}

export function plateForSample(s: SampleRegimen): string {
  if (s.drugIds.includes("grapefruit")) return PLATES.grapefruit;
  if (s.drugIds.includes("tyramine-foods")) return PLATES.cheese;
  if (s.drugIds.includes("st-johns-wort")) return PLATES.wort;
  if (s.drugIds.includes("psilocybin") || s.drugIds.includes("lsd") || s.drugIds.includes("twentyfive-i") || s.drugIds.includes("four-aco-dmt"))
    return PLATES.mushroom;
  if (s.drugIds.includes("poppers")) return PLATES.heme;
  if (s.smoking) return PLATES.tobacco;
  if (s.alcohol === "chronic" || s.drugIds.includes("ethanol") || s.drugIds.includes("gbl"))
    return PLATES.alcohol;
  return LANE_PLATE[s.lane];
}

export const CLASS_TILES: { id: SampleLane; label: string; hint: string; plate: string }[] = [
  { id: "nmda", label: "NMDA", hint: "Ketamine, DXM, DCK", plate: PLATES.ketamine },
  { id: "entactogen", label: "Entactogen", hint: "MDMA, cathinones", plate: PLATES.mdma },
  { id: "gaba", label: "GABA", hint: "Alcohol, GHB, benzos", plate: PLATES.alcohol },
  { id: "mat", label: "Opioid / MAT", hint: "Buprenorphine, methadone, QT", plate: PLATES.poppy },
  { id: "food", label: "Food / herb", hint: "Grapefruit, tyramine", plate: PLATES.grapefruit },
  { id: "smoke", label: "Smoke / 1A2", hint: "Clozapine, PAHs", plate: PLATES.tobacco },
  { id: "street", label: "Street", hint: "Cocaine, dirty 30s, xylazine", plate: PLATES.poppy },
  { id: "phenotype", label: "Phenotype", hint: "2D6 / 2C19 / 2C9 / 2B6", plate: PLATES.heme },
];
