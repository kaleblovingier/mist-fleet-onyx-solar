/** Labeling for FirstPass as non-device clinical decision support.
 *  Not FDA-cleared. Not FDA-approved. The Prescribing Information governs. */

export const SOFTWARE = {
  name: "FirstPass",
  version: "1.1.0",
  released: "2026-09-19",
  manufacturer: "Kaleb Lovingier",
  email: "kaleblovingier@gmail.com",
  phone: "360-707-8923",
  udi: "FP-SW-1.1.0",
} as const;

/** 21 CFR / FDA CDS Guidance (Sept 28, 2022) posture — not a clearance. */
export const INTENDED_USE =
  "FirstPass is clinical decision support software intended for use by licensed healthcare professionals to display mapped cytochrome P450 and pharmacodynamic interaction information, FDA-label excerpts (OpenFDA / DailyMed), published scale scores, and cited literature so the healthcare professional can independently review the basis of any recommendation before acting. It is not intended to diagnose, treat, mitigate, or prevent disease, to calculate or recommend a dose, or to replace the FDA-approved Prescribing Information.";

export const INDICATIONS = [
  "Displaying CYP450 substrate / inhibitor / inducer maps and pharmacodynamic collision scores for drugs and foods on a user-selected regimen.",
  "Surfacing excerpts of FDA-approved labeling (boxed warnings, contraindications, drug interactions, pregnancy) retrieved from OpenFDA and DailyMed.",
  "Displaying published clinical scales (COWS, CIWA-Ar, Hunter criteria, CDC 2022 oral MME factors, Bazett / Fridericia, Cockcroft–Gault) with the published source named.",
  "Linking CPIC / ClinPGx tables, PubMed PMIDs, DrugBank accessions, NIH RxClass, LactMed paraphrases, and ClinicalTrials.gov records for independent review.",
] as const;

export const NOT_FOR = [
  "Patients acting without a licensed healthcare professional.",
  "Generating a prescription, a milligram, a take-home, or an induction protocol.",
  "Charting, billing, PDMP query, or storing protected health information.",
  "Processing medical images, waveforms, or device signals.",
  "Replacing the FDA-approved Prescribing Information, a poison-control consult, or bedside assessment.",
] as const;

export const WARNINGS = [
  "FirstPass is not FDA-cleared and not FDA-approved. Do not describe it as either.",
  "The FDA-approved Prescribing Information is the authority. If this desk and the label disagree, the label wins.",
  "Absence of a mapped collision is not proof of safety. Transporters, UGT, plasma protein, unlisted metabolites, and unpublished interactions still apply.",
  "Live OpenFDA / DailyMed excerpts are truncated. Open the full SPL before acting.",
  "Street-supply rows (xylazine, nitazenes, designer benzos) are teaching maps, not labeled products.",
  "COWS, CIWA-Ar, Hunter, MME, and QTc are published formulas displayed for independent scoring — not a diagnosis and not a documented vital.",
] as const;

/** FDA CDS Guidance 2022 — four criteria for non-device CDS. */
export const CDS_CRITERIA: { id: string; title: string; how: string }[] = [
  {
    id: "1",
    title: "Not an image or signal device",
    how: "FirstPass does not acquire, process, or analyze medical images, IVD data, or physiologic signals. Inputs are user-selected drug names and optional host flags.",
  },
  {
    id: "2",
    title: "Displays medical information",
    how: "The desk displays FDA-label excerpts, published enzyme maps, and cited literature about the selected regimen.",
  },
  {
    id: "3",
    title: "Recommendations to a healthcare professional",
    how: "Watch / counsel / consider language is directed at licensed HCPs. It is not a patient-facing treatment app.",
  },
  {
    id: "4",
    title: "Independent review of the basis",
    how: "Every collision names its mechanism, the drugs, the source class (FDA boxed, PI, CPIC, PMID, published scale, or desk map), and a link to DailyMed or PubMed. The HCP can reject the recommendation.",
  },
];

export const HAZARDS: { id: string; hazard: string; control: string }[] = [
  {
    id: "H1",
    hazard: "User treats a collision as a dose or a hold order.",
    control: "No milligrams. Window language is 'consider / independently review.' IFU and huddle footer repeat that the PI governs.",
  },
  {
    id: "H2",
    hazard: "Desk map disagrees with the current label.",
    control: "Live OpenFDA / DailyMed excerpts sit on the desk. Label wins. Sources page is one tap.",
  },
  {
    id: "H3",
    hazard: "Missing interaction is read as 'safe.'",
    control: "Empty-collision copy states absence is not proof of safety. Live label-pair scan is offered.",
  },
  {
    id: "H4",
    hazard: "Patient uses the desk without an HCP.",
    control: "Intended-use statement, persistent HCP banner, and no patient-dosing UI.",
  },
  {
    id: "H5",
    hazard: "Stale software after a label change.",
    control: "Software version is printed on the IFU, export, and huddle. Live label fetch is not a cache of last year.",
  },
];

export const PRIMARY_SOURCES = [
  { name: "OpenFDA drug labels", href: "https://open.fda.gov/apis/drug/label/" },
  { name: "DailyMed SPL", href: "https://dailymed.nlm.nih.gov/" },
  { name: "FDA drug shortages", href: "https://www.fda.gov/drugs/drug-safety-and-availability/drug-shortages" },
  { name: "FDA enforcement reports", href: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts" },
  { name: "NIH RxNorm / RxClass", href: "https://www.nlm.nih.gov/research/umls/rxnorm/" },
  { name: "CPIC", href: "https://cpicpgx.org/" },
  { name: "NCBI PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/" },
  { name: "NIDDK LiverTox", href: "https://www.ncbi.nlm.nih.gov/books/NBK547852/" },
  { name: "NIH LactMed", href: "https://www.ncbi.nlm.nih.gov/books/NBK501922/" },
] as const;

export const NOT_CLEARED =
  "This software has not been cleared or approved by the U.S. Food and Drug Administration. Display of FDA-label text does not make FirstPass an FDA-cleared device.";

export const PI_FOOTER = `${SOFTWARE.name} ${SOFTWARE.version} · Not FDA-cleared · Confirm against the FDA-approved Prescribing Information · Not a dose, not a treatment order, not a chart. Independent review required.`;

export function dailymedSearchUrl(name: string) {
  return `https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=${encodeURIComponent(name)}`;
}

export function dailymedSetUrl(setId: string) {
  return `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${encodeURIComponent(setId)}`;
}

export function openFdaLabelUrl(name: string) {
  return `https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=BasicSearch.process&searchterm=${encodeURIComponent(name)}`;
}
