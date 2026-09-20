/**
 * LiverTox (NIDDK / NCBI Bookshelf) likelihood — teaching paraphrase.
 * Open the chapter for the official category and case series.
 */

export type LiverCat = "A" | "B" | "C" | "D" | "E";

export interface LiverCard {
  cat: LiverCat;
  label: string;
  pearl: string;
  nbk?: string;
}

const CAT: Record<LiverCat, string> = {
  A: "Well-known cause",
  B: "Likely cause",
  C: "Probable cause",
  D: "Possible cause",
  E: "Unlikely / unproven",
};

function L(cat: LiverCat, pearl: string, nbk?: string): LiverCard {
  return nbk ? { cat, label: CAT[cat], pearl, nbk } : { cat, label: CAT[cat], pearl };
}

/** NCBI Bookshelf LiverTox chapter IDs (NBK…). */
export const LIVERTOX: Record<string, LiverCard> = {
  acetaminophen: L("A", "Dose-dependent NAPQI. Chronic alcohol induces 2E1 and empties glutathione — the teaching hepatotoxin.", "NBK548162"),
  isoniazid: L("A", "The classic INH hepatitis. NAT2 slow acetylators stack parent. Stop the drug; it is not a taper.", "NBK548735"),
  valproate: L("A", "Boxed hepatotoxicity, especially under 2 years and in mitochondrial disease. Hyperammonemia can sit with normal LFTs.", "NBK548284"),
  amiodarone: L("A", "Phospholipidosis and steatohepatitis — months in, months out. The t½ is weeks; stopping is not a next-day fix.", "NBK548184"),
  methotrexate: L("A", "Chronic fibrotic injury on weekly rheumatology doses; acute on high-dose. NSAID and alcohol stack the risk.", "NBK548438"),
  ketoconazole: L("A", "The oral azole that earned a boxed hepatic warning. The CYP3A4 perpetrator is a different row.", "NBK548152"),
  nevirapine: L("A", "Idiosyncratic hepatitis and SJS, worst in the first weeks, worse at higher CD4 in some maps.", "NBK548584"),
  carbamazepine: L("A", "DRESS / vanishing bile duct more than a transaminase bump. HLA-B*15:02 is the rash gene, not this enzyme.", "NBK548027"),
  phenytoin: L("A", "DRESS and chronic injury. 2C9 PMs stack parent — a separate PK row.", "NBK548890"),
  diclofenac: L("A", "The NSAID with the loudest LiverTox file. Not interchangeable with naproxen on this axis.", "NBK548772"),
  fluconazole: L("B", "Quieter than ketoconazole, still a real hepatitis file — and a strong 2C9/2C19 perpetrator.", "NBK548238"),
  itraconazole: L("B", "Cholestatic and mixed injury. Heart-failure label is the other stop.", "NBK548073"),
  voriconazole: L("B", "Transaminitis is common; 2C19 PMs stack parent. Visual and periostitis are the other rows.", "NBK548206"),
  rifampin: L("A", "Cholestatic and mixed. The 3A4/2B6 induction that steals methadone is a different finding.", "NBK548151"),
  amoxicillin: L("B", "Usually the clavulanate combo (Augmentin) is the LiverTox villain — cholestatic, often delayed.", "NBK547854"),
  azithromycin: L("B", "Rare but real hepatocellular injury. QT is the louder row on this desk.", "NBK548434"),
  erythromycin: L("A", "Estolate especially — cholestatic. 3A4 inhibition and QT sit beside it.", "NBK547923"),
  terbinafine: L("A", "Cholestatic and mixed; can be delayed. 2D6 inhibition of metoprolol is the other row.", "NBK548169"),
  allopurinol: L("A", "DRESS / SCAR with HLA-B*58:01. The azathioprine marrow pair is xanthine oxidase, not this.", "NBK548108"),
  kava: L("A", "The herbal that earned a hepatotoxicity banner. Not a CYP perpetrator — a liver one.", "NBK548272"),
  "green-tea": L("B", "Concentrated EGCG extracts, not a cup of tea. Idiosyncratic hepatitis is documented.", "NBK547925"),
  "st-johns-wort": L("E", "Not a LiverTox villain. The damage is PXR / 3A4 and P-gp induction — stolen cyclosporine and indinavir.", "NBK548257"),
  disulfiram: L("A", "Hepatocellular injury independent of the acetaldehyde reaction. LFTs belong on the card.", "NBK547851"),
  tizanidine: L("C", "Transaminitis and rare injury. The loud desk story is 1A2 (cipro, fluvoxamine) hypotension.", "NBK548233"),
  atorvastatin: L("A", "Statins as a class are Category A; severe injury is still rare. Gemfibrozil is the muscle pair.", "NBK548232"),
  simvastatin: L("A", "Same class file. 3A4 inhibitors and grapefruit are the exposure story, not the idiosyncratic one.", "NBK548232"),
  lovastatin: L("A", "Monacolin K in red yeast rice is this molecule. Treat the bottle as a 3A4-sensitive statin.", "NBK548232"),
  "red-yeast-rice": L("C", "Monacolin K is lovastatin. Liver watch plus the 3A4/grapefruit map."),
  duloxetine: L("B", "Labeled hepatic warning — avoid in pre-existing liver disease. 2D6/1A2 substrate.", "NBK548243"),
  bupropion: L("C", "Rare hepatocellular reports. The desk story is 2D6 inhibition and seizure threshold.", "NBK548166"),
  chlorpromazine: L("A", "The phenothiazine that taught cholestatic jaundice.", "NBK548098"),
  haloperidol: L("C", "Rare cholestatic injury. QT and EPS are the daily rows.", "NBK548390"),
  lamotrigine: L("C", "DRESS more than isolated hepatitis. The boxed warning is SJS from titration.", "NBK548366"),
  olanzapine: L("C", "Metabolic and rare hepatocellular. Clozapine is the 1A2 cousin.", "NBK548234"),
  clozapine: L("C", "Rare injury; agranulocytosis and 1A2/smoke are the daily card.", "NBK548306"),
  risperidone: L("D", "Uncommon. 2D6 to paliperidone is the PK row.", "NBK548307"),
  sertraline: L("C", "Rare but documented. Hyponatremia is the louder SSRI clinic flag.", "NBK548182"),
  fluoxetine: L("D", "Uncommon. Strong 2D6 inhibition is the desk story.", "NBK548241"),
  paroxetine: L("D", "Uncommon. Strong 2D6 inhibitor and anticholinergic SSRI.", "NBK548215"),
  citalopram: L("D", "Uncommon. QT is the labeled row, not the liver.", "NBK548335"),
  lisinopril: L("C", "Rare. The boxed warning is fetal toxicity, not hepatitis.", "NBK548050"),
  metformin: L("E", "Not a hepatotoxin. Lactic acidosis in CKD is the stop.", "NBK548344"),
  infliximab: L("A", "Autoimmune-like hepatitis from TNF blockade."),
};

export function livertoxFor(id: string): LiverCard | undefined {
  return LIVERTOX[id];
}

export function livertoxOnDesk(ids: string[]): Array<{ id: string; card: LiverCard }> {
  const out: Array<{ id: string; card: LiverCard }> = [];
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) continue;
    const card = LIVERTOX[id];
    if (!card) continue;
    seen.add(id);
    out.push({ id, card });
  }
  return out;
}

export function livertoxUrl(id: string, name: string) {
  const card = LIVERTOX[id];
  if (card?.nbk) return `https://www.ncbi.nlm.nih.gov/books/${card.nbk}/`;
  return `https://www.ncbi.nlm.nih.gov/books/NBK547852/?term=${encodeURIComponent(name)}`;
}

export function hasLivertox(id: string) {
  return Boolean(LIVERTOX[id]);
}

export const LIVERTOX_CAT_TONE: Record<LiverCat, "danger" | "warn" | "info" | "default"> = {
  A: "danger",
  B: "warn",
  C: "info",
  D: "default",
  E: "default",
};
