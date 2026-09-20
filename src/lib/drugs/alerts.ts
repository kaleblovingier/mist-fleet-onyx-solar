/**
 * ISMP high-alert, NIOSH hazardous, and REMS teaching flags.
 * Paraphrase of public lists — open the source. Not a complete inventory.
 */

export type AlertKind = "ismp" | "niosh" | "rems";

export interface AlertFlag {
  kind: AlertKind;
  label: string;
  note: string;
}

const ISMP = new Set([
  "methadone",
  "fentanyl",
  "morphine",
  "hydromorphone",
  "oxycodone",
  "oxymorphone",
  "hydrocodone",
  "buprenorphine",
  "insulin-glargine",
  "warfarin",
  "apixaban",
  "rivaroxaban",
  "dabigatran",
  "enoxaparin",
  "methotrexate",
  "digoxin",
  "lithium",
  "clozapine",
  "propofol",
  "midazolam",
  "ketamine",
  "esketamine",
  "amiodarone",
  "sotalol",
  "naloxone",
]);

const NIOSH = new Set([
  "methotrexate",
  "valproate",
  "carbamazepine",
  "phenytoin",
  "spironolactone",
  "fluconazole",
  "risperidone",
  "paroxetine",
  "fluoxetine",
  "colchicine",
  "azathioprine",
  "mercaptopurine",
  "sirolimus",
  "tacrolimus",
  "cyclosporine",
  "mycophenolate",
]);

const REMS: Record<string, string> = {
  clozapine: "Clozapine REMS — ANC before dispense. The agranulocytosis boxed row.",
  esketamine: "Spravato REMS — healthcare setting, 2-hour watch, no driving.",
  buprenorphine: "MOUD buprenorphine is no longer X-waiver; some film / implant products still carry REMS paperwork.",
};

export function alertsFor(id: string): AlertFlag[] {
  const out: AlertFlag[] = [];
  if (ISMP.has(id)) {
    out.push({
      kind: "ismp",
      label: "ISMP high-alert",
      note: "Heightened risk of significant harm when used in error. Independent double-check culture, not a CYP finding.",
    });
  }
  if (NIOSH.has(id)) {
    out.push({
      kind: "niosh",
      label: "NIOSH hazardous",
      note: "Occupational handling — crush, split, and compounding PPE. Not a patient counseling point by itself.",
    });
  }
  if (REMS[id]) {
    out.push({
      kind: "rems",
      label: "REMS",
      note: REMS[id],
    });
  }
  return out;
}

export function alertsOnDesk(ids: string[]): Array<{ id: string; flags: AlertFlag[] }> {
  return ids
    .map((id) => ({ id, flags: alertsFor(id) }))
    .filter((row) => row.flags.length > 0);
}

export function hasAlerts(ids: string[]) {
  return alertsOnDesk(ids).length > 0;
}
