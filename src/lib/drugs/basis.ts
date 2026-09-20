/** Independent-review basis for a collision — CDS criterion 4. */

import { citesFor, pubmedUrl } from "./pubmed";
import { dailymedSearchUrl } from "@/lib/regulatory";
import { DRUG_BY_ID } from "./catalog";
import type { Finding } from "./types";

export type BasisKind = "fda-boxed" | "fda-pi" | "fda-warning" | "cpic" | "pubmed" | "scale" | "desk";

export interface FindingBasis {
  kind: BasisKind;
  label: string;
  detail: string;
  href?: string;
}

const BOXED: Record<string, { detail: string; href?: string }> = {
  "pd-opioid-benzo": {
    detail:
      "FDA boxed warning (2016): opioids plus benzodiazepines or other CNS depressants — profound sedation, respiratory depression, coma, and death.",
    href: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-warns-about-serious-risks-and-death-when-combining-opioid-pain-or",
  },
  "pd-gaba-opioid": {
    detail:
      "FDA 2019 warning: gabapentinoids plus opioids or other CNS depressants — serious breathing difficulties.",
    href: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-about-serious-breathing-problems-seizure-and-nerve-pain-medicines-gabapentin-neurontin",
  },
  "pd-nitrate-pde5": {
    detail: "Sildenafil / tadalafil / vardenafil labels contraindicate organic nitrates. Refractory hypotension.",
  },
  "pd-maoi-sero": {
    detail: "MAOI labels contraindicate serotonergic agents. Serotonin toxicity, hypertensive crisis.",
  },
  "pd-antag-opioid": {
    detail: "Naltrexone / naloxone labels: precipitated withdrawal in opioid-dependent patients; blockade of agonists.",
  },
};

const PI: Record<string, string> = {
  "pd-methadone-ritonavir":
    "Methadone and ritonavir / Paxlovid labels: mixed PK — methadone may fall (withdrawal); fentanyl and other 3A4 opioids may rise.",
  "pd-bup-ritonavir": "Buprenorphine labels: 3A4 inhibitors can raise exposure. Opposite arrow from methadone on the same booster.",
  "pd-bup-precip": "Buprenorphine labels: precipitated withdrawal if a full agonist is still occupying μ receptors.",
  "pd-opioid-stack": "Opioid labels: additive respiratory depression with another full agonist.",
  "pd-qt": "CredibleMeds-class QT plus methadone / citalopram / ondansetron labels. Not a QTc.",
  "pd-sero": "SSRI / SNRI / MAOI / opioid labels flag serotonergic combinations. Hunter is the published screen.",
  "clinic-preg-avoid": "Label: boxed or contraindicated in pregnancy. Open the PI. This desk is not obstetric advice.",
  "clinic-preg-caution": "Label: use in pregnancy is a specialist call. Open the PI.",
  "clinic-beers": "AGS Beers 2023. Not an FDA box. Confirm against the PI and the geriatric indication.",
  "clinic-renal": "Many labels dose-adjust on Cockcroft–Gault or eGFR. This desk flags CKD; it does not pick a dose.",
  "cyp-clock":
    "FDA 2020 Clinical Drug Interaction Studies / Huang CPT 2007. Strong ≥5× AUC; strong inducer ≥80% ↓ AUC. Start and stop are different clocks. Not a milligram.",
  "cyp-dual": "FDA example inhibitors often hit both CYP3A4 and P-gp. Gut first-pass victims move more than a CYP-only row.",
};

const SCALE: Record<string, string> = {
  cows: "Wesson & Ling, J Psychoactive Drugs 2003. COWS is a published scale, not a diagnosis.",
  ciwa: "Sullivan et al., Br J Addict 1989. CIWA-Ar is a published scale, not a diagnosis.",
  hunter: "Dunkley 2003 Hunter criteria. Not Sternbach. Not a charted diagnosis.",
  mme: "CDC Clinical Practice Guideline for Prescribing Opioids, 2022. Factors, not a ceiling.",
};

function suffixOf(id: string) {
  const parts = id.split("__");
  return parts[parts.length - 1] ?? id;
}

export function basisFor(finding: Finding): FindingBasis[] {
  const suffix = suffixOf(finding.id);
  const out: FindingBasis[] = [];
  const boxed = BOXED[suffix];
  if (boxed) {
    out.push({
      kind: "fda-boxed",
      label: "FDA boxed / safety communication",
      detail: boxed.detail,
      href: boxed.href ?? dailymedSearchUrl(DRUG_BY_ID[finding.drugIds[0]]?.name ?? ""),
    });
  }
  const pi = PI[suffix];
  if (pi) {
    const name = DRUG_BY_ID[finding.drugIds[0]]?.name;
    out.push({
      kind: suffix.startsWith("clinic-") ? "fda-warning" : "fda-pi",
      label: "Prescribing Information",
      detail: pi,
      href: name ? dailymedSearchUrl(name) : undefined,
    });
  }
  const cites = citesFor(finding.drugIds).slice(0, 1);
  if (cites[0]) {
    out.push({
      kind: "pubmed",
      label: `PMID ${cites[0].pmid}`,
      detail: `${cites[0].year} ${cites[0].journal}. ${cites[0].why}`,
      href: pubmedUrl(cites[0].pmid),
    });
  }
  if (finding.kind === "geno" || suffix.includes("pheno")) {
    out.push({
      kind: "cpic",
      label: "CPIC / ClinPGx",
      detail: "Phenotype rows paraphrase published CPIC tables. Open the guideline. This desk is not a PGx report.",
      href: "https://cpicpgx.org/guidelines/",
    });
  }
  if (out.length === 0) {
    out.push({
      kind: "desk",
      label: "FirstPass map",
      detail:
        "Curated CYP / PD map. Independently review the Prescribing Information and primary literature before acting. Absence of an FDA box here is not absence of risk.",
      href: finding.drugIds[0] ? dailymedSearchUrl(DRUG_BY_ID[finding.drugIds[0]]?.name ?? "") : undefined,
    });
  }
  return out;
}

export function scaleBasis(id: keyof typeof SCALE): FindingBasis {
  return { kind: "scale", label: "Published scale", detail: SCALE[id] };
}
