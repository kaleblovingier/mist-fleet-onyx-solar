/** Clozapine REMS ANC teaching bands. Not the REMS portal and not a dispense decision. */

export interface AncBand {
  id: "green" | "yellow" | "red" | "invalid";
  label: string;
  tone: "ok" | "warn" | "danger";
  note: string;
}

/** General population vs benign ethnic neutropenia, paraphrasing Clozapine REMS ANC tables. */
export function ancBand(anc: number, ben: boolean): AncBand {
  if (!Number.isFinite(anc) || anc <= 0 || anc > 30000) {
    return {
      id: "invalid",
      label: "Need an ANC",
      tone: "warn",
      note: "Enter ANC as cells/µL (e.g. 1800). This is not a WBC and not the REMS website.",
    };
  }
  if (ben) {
    if (anc >= 1000) {
      return {
        id: "green",
        label: "BEN green",
        tone: "ok",
        note: "ANC ≥1000 in documented BEN is the usual continue band. Confirm the BEN designation in the REMS, not here.",
      };
    }
    if (anc >= 500) {
      return {
        id: "yellow",
        label: "BEN yellow",
        tone: "warn",
        note: "ANC 500–999 in BEN is increased monitoring on the REMS table. This desk does not interrupt or continue clozapine.",
      };
    }
    return {
      id: "red",
      label: "BEN interrupt band",
      tone: "danger",
      note: "ANC <500 in BEN is the interrupt / hematology teaching cut. Open Clozapine REMS. Not a charted hold from FirstPass.",
    };
  }
  if (anc >= 1500) {
    return {
      id: "green",
      label: "Green",
      tone: "ok",
      note: "ANC ≥1500 is the usual continue band for general population. Smoke induction and fluvoxamine still move the level — that is the TDM tab.",
    };
  }
  if (anc >= 1000) {
    return {
      id: "yellow",
      label: "Yellow",
      tone: "warn",
      note: "ANC 1000–1499 is increased monitoring on the REMS table. Independently review. This desk does not schedule the next draw.",
    };
  }
  return {
    id: "red",
    label: "Interrupt band",
    tone: "danger",
    note: "ANC <1000 general population is the interrupt / hematology teaching cut. Open clozapine REMS and the PI. Not a dispense from this desk.",
  };
}

export function ancWanted(ids: string[]) {
  return ids.includes("clozapine");
}
