/**
 * Hunter serotonin toxicity vs NMS teaching screen.
 * Dunkley 2003 decision rules — not a diagnosis and not a score you chart.
 */

import { DRUG_BY_ID } from "./catalog";
import type { Drug } from "./types";

export type HunterKey =
  | "serotonergic"
  | "spontaneous"
  | "inducible"
  | "ocular"
  | "agitation"
  | "diaphoresis"
  | "tremor"
  | "hyperreflexia"
  | "hypertonia"
  | "fever";

export interface HunterFlag {
  key: HunterKey;
  label: string;
  hint: string;
}

export const HUNTER_FLAGS: HunterFlag[] = [
  { key: "serotonergic", label: "Serotonergic agent", hint: "On this desk, or taken in the last 5 weeks (fluoxetine lingers)." },
  { key: "spontaneous", label: "Spontaneous clonus", hint: "Enough by itself." },
  { key: "inducible", label: "Inducible clonus", hint: "Needs agitation or diaphoresis." },
  { key: "ocular", label: "Ocular clonus", hint: "Needs agitation or diaphoresis — or fever + hypertonia." },
  { key: "agitation", label: "Agitation", hint: "Pairs with clonus." },
  { key: "diaphoresis", label: "Diaphoresis", hint: "Pairs with clonus." },
  { key: "tremor", label: "Tremor", hint: "Needs hyperreflexia." },
  { key: "hyperreflexia", label: "Hyperreflexia", hint: "Pairs with tremor. NMS is the opposite (bradyreflexia)." },
  { key: "hypertonia", label: "Hypertonia", hint: "Needs temperature >38 °C and ocular or inducible clonus." },
  { key: "fever", label: "Temperature >38 °C", hint: "Hunter uses 38, not 41." },
];

export function hunterPositive(on: Record<HunterKey, boolean>): boolean {
  if (!on.serotonergic) return false;
  if (on.spontaneous) return true;
  if (on.inducible && (on.agitation || on.diaphoresis)) return true;
  if (on.ocular && (on.agitation || on.diaphoresis)) return true;
  if (on.tremor && on.hyperreflexia) return true;
  if (on.hypertonia && on.fever && (on.ocular || on.inducible)) return true;
  return false;
}

export function hunterWhy(on: Record<HunterKey, boolean>): string {
  if (!on.serotonergic) return "Hunter requires a serotonergic agent in the history. Put one on the desk, or tick the first box if it is already in the patient.";
  if (on.spontaneous) return "Spontaneous clonus with a serotonergic agent — Hunter positive.";
  if (on.inducible && (on.agitation || on.diaphoresis)) return "Inducible clonus plus agitation or sweating — Hunter positive.";
  if (on.ocular && (on.agitation || on.diaphoresis)) return "Ocular clonus plus agitation or sweating — Hunter positive.";
  if (on.tremor && on.hyperreflexia) return "Tremor plus hyperreflexia — Hunter positive.";
  if (on.hypertonia && on.fever && (on.ocular || on.inducible)) return "Hypertonia, fever, and clonus — Hunter positive.";
  return "Not Hunter-positive on the boxes ticked. Absence is not proof — this is a teaching screen, not a rule-out.";
}

const SERO_PD = new Set(["serotonergic", "ssri-snri", "maoi", "tryptophan"]);

export function serotonergicOnDesk(ids: string[]): Array<{ id: string; name: string; why: string }> {
  const out: Array<{ id: string; name: string; why: string }> = [];
  for (const id of ids) {
    const d = DRUG_BY_ID[id];
    if (!d) continue;
    if (d.pd.some((p) => SERO_PD.has(p))) {
      const why = d.pd.includes("maoi")
        ? "MAOI — the loudest serotonin row"
        : d.pd.includes("ssri-snri")
          ? "SSRI / SNRI"
          : d.id === "tramadol" || d.id === "meperidine"
            ? "Weak μ plus serotonin"
            : d.id === "dextromethorphan"
              ? "DXM is serotonergic, not just a cough syrup"
              : d.id === "mdma"
                ? "Entactogen"
                : "Serotonergic";
      out.push({ id, name: d.name, why });
    }
  }
  return out;
}

export function nmsRiskOnDesk(ids: string[]): Array<{ id: string; name: string }> {
  const out: Array<{ id: string; name: string }> = [];
  for (const id of ids) {
    const d = DRUG_BY_ID[id];
    if (!d) continue;
    if (
      /antipsychotic|phenothiazine/i.test(d.cls) ||
      d.id === "haloperidol" ||
      d.id === "metoclopramide" ||
      d.id === "chlorpromazine" ||
      d.id === "risperidone" ||
      d.id === "paliperidone" ||
      d.id === "quetiapine" ||
      d.id === "olanzapine" ||
      d.id === "aripiprazole" ||
      d.id === "ziprasidone" ||
      d.id === "lurasidone" ||
      d.id === "clozapine"
    ) {
      out.push({ id, name: d.name });
    }
  }
  return out;
}

export function hasHunter(ids: string[]) {
  return serotonergicOnDesk(ids).length > 0 || nmsRiskOnDesk(ids).length > 0;
}

export function hunterPreset(ids: string[]): Partial<Record<HunterKey, boolean>> {
  return { serotonergic: serotonergicOnDesk(ids).length > 0 };
}

export function isSerotonergicDrug(d: Drug) {
  return d.pd.some((p) => SERO_PD.has(p));
}
