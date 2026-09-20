/** LactMed-style teaching cards. Relative infant dose is a teaching range, not a measurement. */

export type LactLevel = "compatible" | "caution" | "avoid";

export interface LactCard {
  id: string;
  rid: string;
  level: LactLevel;
  milk: string;
  infant: string;
  pearl: string;
}

function c(
  id: string,
  rid: string,
  level: LactLevel,
  milk: string,
  infant: string,
  pearl: string,
): LactCard {
  return { id, rid, level, milk, infant, pearl };
}

const CARDS: Record<string, LactCard> = {
  methadone: c(
    "methadone",
    "~1–3%",
    "compatible",
    "Low RID on a stable OTP dose. Peak milk ~2–4 h after the bottle — not a reason to pump-and-dump.",
    "Watch the infant for sedation and poor weight gain. Neonatal opioid withdrawal is expected from in-utero exposure, not from usual milk doses.",
    "LactMed lists methadone as usually compatible. Do not stop OTP to breastfeed. Jones MOTHER is NAS after pregnancy, not a milk protocol.",
  ),
  buprenorphine: c(
    "buprenorphine",
    "~<1%",
    "compatible",
    "Low RID. Sublingual film still yields little in milk. Naloxone in Suboxone is poorly bioavailable to the infant via milk.",
    "Watch sedation. NAS is the pregnancy row, not this one.",
    "Office-based and OTP both keep buprenorphine through lactation in most maps. Occupancy, not milligrams.",
  ),
  naltrexone: c(
    "naltrexone",
    "low / limited",
    "caution",
    "Limited human milk data. Oral naltrexone appears in milk at low levels; IM Vivitrol is even thinner data.",
    "Theoretical μ blockade if the infant needed opioid analgesia.",
    "Alcohol-use-disorder naltrexone is not the same conversation as a Vivitrol shot in someone still using. Open LactMed.",
  ),
  naloxone: c(
    "naloxone",
    "negligible",
    "compatible",
    "Poor oral bioavailability. Milk is not a naloxone delivery system.",
    "No meaningful infant opioid blockade from usual maternal IN / IM doses.",
    "The tray, not the milk. Give Narcan if the adult needs it.",
  ),
  nalmefene: c(
    "nalmefene",
    "unknown",
    "caution",
    "No useful human milk data. Longer μ occupancy than naloxone is the adult row.",
    "Theoretical prolonged blockade.",
    "Opvee is a field antagonist, not a lactation drug. Open the label.",
  ),
  lofexidine: c(
    "lofexidine",
    "unknown",
    "caution",
    "No useful milk data. α2 agonists can sedate.",
    "Watch infant sedation and tone if used short-term for withdrawal.",
    "Clonidine has more milk ink than Lucemyra. This is not a reason to skip withdrawal care.",
  ),
  clonidine: c(
    "clonidine",
    "~1–2%",
    "caution",
    "Appears in milk. Used in pediatrics, so the RID is not exotic — still sedating.",
    "Hypotension, sedation, hypotonia reported at higher maternal doses.",
    "Short-term OTP adjunct is a different exposure than chronic HTN doses. Watch the infant.",
  ),
  sertraline: c(
    "sertraline",
    "~0.5–1%",
    "compatible",
    "Often the SSRI picked in lactation. Low RID. Nor-sertraline is the metabolite.",
    "Occasional infant restlessness or sleep change. Most stay quiet.",
    "The benzo-cup false-positive is a different row from this milk card.",
  ),
  fluoxetine: c(
    "fluoxetine",
    "~2–5%",
    "caution",
    "Long half-life. Norfluoxetine hangs in milk. Higher RID than sertraline.",
    "Colic, sleep, and rare hypotonia reports. Prefer sertraline or escitalopram if starting now.",
    "Do not stop a working Prozac solely to breastfeed without a plan. 2D6 phenoconversion is the other card.",
  ),
  paroxetine: c(
    "paroxetine",
    "~1%",
    "compatible",
    "Low RID. Short half-life relative to fluoxetine.",
    "Usually quiet. Neonatal adaptation is the pregnancy row if they were on it at delivery.",
    "Strong 2D6 inhibitor — phenoconversion of codeine in milk is the nightmare row. Avoid codeine while paroxetine is on.",
  ),
  lithium: c(
    "lithium",
    "~10–50%",
    "caution",
    "RID is not small. Infant serum can approach a third of maternal. Hydration and GFR swing the number.",
    "Monitor infant TSH, Cr, tone, and a level if the infant is unwell. Fever and dehydration raise infant levels.",
    "Not a free pass. Some maps still feed with TDM of the infant. Open LactMed and the Levels tab.",
  ),
  lamotrigine: c(
    "lamotrigine",
    "~10%",
    "caution",
    "RID is real. Infant serum can be measurable. Clearance rises in pregnancy then crashes postpartum — that is the maternal row.",
    "Watch rash and sedation. Rare withdrawal if milk stops abruptly.",
    "Valproate is the UGT trap on the desk; this card is milk, not SJS.",
  ),
  valproate: c(
    "valproate",
    "~1–6%",
    "caution",
    "Low-ish RID but a hepatotoxin and a teratogen. Milk is not the reason to pick it.",
    "Theoretical infant hepatotoxicity. Pregnancy avoid is louder than lactation caution.",
    "Do not start valproate to 'cover' bipolar in someone who can get pregnant. Lactation is the smaller card.",
  ),
  codeine: c(
    "codeine",
    "variable",
    "avoid",
    "2D6 UM mothers convert to morphine in milk. The infant is the poor metabolizer of that morphine.",
    "Documented infant sedation and death in UM mothers. FDA warns against codeine in lactation.",
    "This is the PGx milk disaster. Tramadol is the same family. Morphine with a known dose is still not casual.",
  ),
  tramadol: c(
    "tramadol",
    "variable",
    "avoid",
    "2D6 to the μ-active metabolite. Same UM-mother trap as codeine.",
    "Sedation, respiratory depression. FDA warns against tramadol in lactation.",
    "The PCP-cup false-positive is a different row. Do not send tramadol home with a nursing parent.",
  ),
  oxycodone: c(
    "oxycodone",
    "~1–3%",
    "caution",
    "Short courses at low dose appear in some maps. RID climbs with dose.",
    "Watch infant sedation. Not a chronic milk opioid.",
    "Pressed 30s are fentanyl. That is not this card.",
  ),
  morphine: c(
    "morphine",
    "~2–10%",
    "caution",
    "Immediate-release, low-dose, short course is the usual milk map. Avoid sustained-release.",
    "Sedation, poor feeding. The 2D6 story is codeine, not morphine itself.",
    "Post-op doses are not OTP. Do not confuse the two.",
  ),
  lorazepam: c(
    "lorazepam",
    "~3%",
    "caution",
    "Glucuronidated. Short courses used. Chronic high dose is a different exposure.",
    "Sedation, poor feeding. Floppy infant if stacked at delivery.",
    "Often the benzo that misses the immunoassay — that is the UDS tab, not milk.",
  ),
  diazepam: c(
    "diazepam",
    "~3–7%",
    "caution",
    "Long-acting. Nordiazepam hangs in milk. Not the first benzo in lactation.",
    "Sedation, poor weight gain with chronic maternal use.",
    "The cup was built for this family. Milk is still caution.",
  ),
  warfarin: c(
    "warfarin",
    "negligible",
    "compatible",
    "Highly protein-bound. Milk transfer is tiny. INR the infant only if bleeding.",
    "Usually none. The pregnancy teratogen row is not this card.",
    "LMWH and warfarin are both used postpartum. DOACs have less milk data.",
  ),
};

export function lactFor(id: string): LactCard | undefined {
  return CARDS[id];
}

export function lactOnDesk(ids: string[]): LactCard[] {
  return ids.map((id) => CARDS[id]).filter((c): c is LactCard => Boolean(c));
}

export function lactmedSearchUrl(name: string) {
  return `https://www.ncbi.nlm.nih.gov/books/?term=${encodeURIComponent(`${name} AND lactmed[book]`)}`;
}

export function lactmedHomeUrl() {
  return "https://www.ncbi.nlm.nih.gov/books/NBK501922/";
}
