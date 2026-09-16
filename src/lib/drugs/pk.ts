import { DRUG_BY_ID } from "./catalog";
import { FIRST_PASS_NMDA, isVirtual } from "./host";
import {
  DEFAULT_HOST,
  PHENOTYPE_ENZYMES,
  type Drug,
  type Enzyme,
  type HostContext,
  type Metabolizer,
  type Strength,
} from "./types";

const I_INH: Record<Strength, number> = { strong: 5, moderate: 2, weak: 0.5 };
const E_IND: Record<Strength, number> = { strong: 4, moderate: 2, weak: 0.5 };
const PHENO_CL: Record<Metabolizer, number> = { PM: 0.12, IM: 0.5, NM: 1, UM: 2.2 };

/** Furanocoumarins / juices that knock out intestinal CYP3A4 and spare the liver. */
const GUT_ONLY = new Set(["grapefruit", "pomegranate", "starfruit"]);

export interface PkSpec {
  tHalfH: number;
  kaH: number;
  F: number;
  fm: Partial<Record<Enzyme, number>>;
  /** Share of first-pass that is intestinal CYP3A4 (oral victims). */
  gut3A4?: number;
  iv?: boolean;
  activation?: { enzyme: Enzyme; name: string };
  note: string;
}

interface PkRow {
  tHalfH: number;
  kaH: number;
  F: number;
  fm: Partial<Record<Enzyme, number>>;
  gut3A4?: number;
  activation?: { enzyme: Enzyme; name: string };
  note: string;
}

const ROWS: Record<string, PkRow> = {
  ketamine: {
    tHalfH: 2.5,
    kaH: 1.4,
    F: 0.17,
    fm: { CYP2B6: 0.35, CYP3A4: 0.45 },
    gut3A4: 0.65,
    activation: { enzyme: "CYP2B6", name: "Norketamine" },
    note: "Oral first-pass is the 3A4 trap. IV skips the gut; hepatic 2B6 still clears.",
  },
  esketamine: {
    tHalfH: 2.6,
    kaH: 1.6,
    F: 0.48,
    fm: { CYP2B6: 0.4, CYP3A4: 0.35 },
    gut3A4: 0.25,
    activation: { enzyme: "CYP2B6", name: "S-norketamine" },
    note: "Intranasal Spravato still sees hepatic 2B6/3A4; less gut first-pass than a lozenge.",
  },
  "two-fdck": {
    tHalfH: 3.2,
    kaH: 1.2,
    F: 0.2,
    fm: { CYP2B6: 0.35, CYP3A4: 0.45 },
    gut3A4: 0.6,
    note: "Same oral 2B6/3A4 gauntlet as ketamine.",
  },
  dck: {
    tHalfH: 4,
    kaH: 1.1,
    F: 0.22,
    fm: { CYP2B6: 0.3, CYP3A4: 0.45 },
    gut3A4: 0.55,
    note: "Deschloroketamine — oral first-pass still 3A4/2B6.",
  },
  dextromethorphan: {
    tHalfH: 3,
    kaH: 1.8,
    F: 0.5,
    fm: { CYP2D6: 0.85, CYP3A4: 0.1 },
    activation: { enzyme: "CYP2D6", name: "Dextrorphan" },
    note: "2D6 PM or a strong 2D6 inhibitor stacks parent DXM (serotonergic) and cuts dextrorphan.",
  },
  mdma: {
    tHalfH: 8,
    kaH: 1.3,
    F: 0.6,
    fm: { CYP2D6: 0.55, CYP3A4: 0.15 },
    note: "Mechanism-based 2D6 inhibition after the first pass — the second dose is not the first.",
  },
  mda: {
    tHalfH: 10,
    kaH: 1.2,
    F: 0.55,
    fm: { CYP2D6: 0.5, CYP3A4: 0.15 },
    note: "MDMA cousin. Same 2D6 victim map.",
  },
  codeine: {
    tHalfH: 3,
    kaH: 2,
    F: 0.5,
    fm: { CYP2D6: 0.1, CYP3A4: 0.7 },
    activation: { enzyme: "CYP2D6", name: "Morphine" },
    note: "Parent clearance is mostly 3A4. Analgesia is the 2D6 morphine step — UM is the danger.",
  },
  tramadol: {
    tHalfH: 6,
    kaH: 1.5,
    F: 0.75,
    fm: { CYP2D6: 0.25, CYP3A4: 0.45 },
    activation: { enzyme: "CYP2D6", name: "O-desmethyltramadol" },
    note: "Parent is SNRI-like; M1 is the μ-agonist. 2D6 PM = less analgesia, more parent serotonin.",
  },
  warfarin: {
    tHalfH: 40,
    kaH: 1.2,
    F: 0.95,
    fm: { CYP2C9: 0.8, CYP3A4: 0.1 },
    note: "S-warfarin is a sensitive 2C9 substrate. Fluconazole, amiodarone, and 2C9 PMs raise INR.",
  },
  clozapine: {
    tHalfH: 12,
    kaH: 0.9,
    F: 0.55,
    fm: { CYP1A2: 0.7, CYP3A4: 0.15 },
    note: "Smoke induces 1A2 — levels fall, then rebound on quit.",
  },
  olanzapine: {
    tHalfH: 30,
    kaH: 0.8,
    F: 0.6,
    fm: { CYP1A2: 0.55, CYP2D6: 0.15 },
    note: "Same 1A2 smoke story as clozapine, quieter.",
  },
  tizanidine: {
    tHalfH: 2.5,
    kaH: 1.6,
    F: 0.2,
    fm: { CYP1A2: 0.95 },
    gut3A4: 0,
    note: "Sensitive 1A2 substrate. Cimetidine and ciprofloxacin are the classic bullies.",
  },
  midazolam: {
    tHalfH: 3,
    kaH: 2.2,
    F: 0.4,
    fm: { CYP3A4: 0.9 },
    gut3A4: 0.55,
    note: "Probe 3A4 substrate. Oral midazolam is how we measure the isoform.",
  },
  triazolam: {
    tHalfH: 2.5,
    kaH: 2.4,
    F: 0.44,
    fm: { CYP3A4: 0.9 },
    gut3A4: 0.6,
    note: "Sensitive 3A4 benzo. Ritonavir, azoles, grapefruit.",
  },
  buspirone: {
    tHalfH: 2.5,
    kaH: 1.8,
    F: 0.04,
    fm: { CYP3A4: 0.95 },
    gut3A4: 0.8,
    note: "Tiny F. Grapefruit and azoles turn a 5 mg anxiolytic into a much larger exposure.",
  },
  alprazolam: {
    tHalfH: 12,
    kaH: 1.4,
    F: 0.9,
    fm: { CYP3A4: 0.7 },
    note: "Hepatic 3A4 more than gut. Inhibitors stretch duration.",
  },
  clobazam: {
    tHalfH: 18,
    kaH: 1.1,
    F: 0.9,
    fm: { CYP3A4: 0.4, CYP2C19: 0.45 },
    activation: { enzyme: "CYP2C19", name: "N-desmethylclobazam" },
    note: "CBD and fluconazole stack the long active metabolite via 2C19.",
  },
  dronabinol: {
    tHalfH: 4,
    kaH: 0.7,
    F: 0.1,
    fm: { CYP2C9: 0.55, CYP3A4: 0.3 },
    gut3A4: 0.35,
    activation: { enzyme: "CYP2C9", name: "11-OH-THC" },
    note: "Edible first-pass makes 11-OH-THC. Smoked THC mostly skips that metabolite spike.",
  },
  cannabidiol: {
    tHalfH: 24,
    kaH: 0.6,
    F: 0.06,
    fm: { CYP2C19: 0.4, CYP3A4: 0.35 },
    gut3A4: 0.3,
    note: "High-dose CBD is a 2C19 perpetrator as well as a victim.",
  },
  methadone: {
    tHalfH: 24,
    kaH: 0.8,
    F: 0.8,
    fm: { CYP2B6: 0.45, CYP3A4: 0.35 },
    note: "Inducers (efavirenz, rifampin) precipitate withdrawal. Inhibitors raise QT risk.",
  },
  fentanyl: {
    tHalfH: 4,
    kaH: 2.5,
    F: 0.5,
    fm: { CYP3A4: 0.7 },
    note: "Norfentanyl via 3A4. Strong inhibitors raise parent and the airway risk.",
  },
  oxycodone: {
    tHalfH: 4,
    kaH: 1.6,
    F: 0.6,
    fm: { CYP3A4: 0.55, CYP2D6: 0.2 },
    note: "3A4 is the main clearance. 2D6 makes oxymorphone — a smaller piece.",
  },
  loperamide: {
    tHalfH: 11,
    kaH: 1,
    F: 0.1,
    fm: { CYP3A4: 0.4, "P-gp": 0.45 },
    gut3A4: 0.3,
    note: "P-gp and 3A4 keep it peripheral. Quinidine or ritonavir opens the gate.",
  },
  simvastatin: {
    tHalfH: 3,
    kaH: 1.5,
    F: 0.05,
    fm: { CYP3A4: 0.9 },
    gut3A4: 0.7,
    note: "Sensitive oral 3A4 victim. Strong inhibitors are a labeled myopathy trap.",
  },
  quetiapine: {
    tHalfH: 6,
    kaH: 1.3,
    F: 0.09,
    fm: { CYP3A4: 0.8 },
    gut3A4: 0.45,
    note: "Low F, 3A4 victim. Azoles and grapefruit raise parent.",
  },
  theophylline: {
    tHalfH: 8,
    kaH: 1.2,
    F: 0.9,
    fm: { CYP1A2: 0.9 },
    note: "Classic 1A2 victim. Cipro, fluvoxamine, cimetidine, and smoke all move it.",
  },
  caffeine: {
    tHalfH: 5,
    kaH: 2.5,
    F: 1,
    fm: { CYP1A2: 0.95 },
    note: "1A2 probe. Smoke shortens it; fluvoxamine stretches it.",
  },
  atomoxetine: {
    tHalfH: 5,
    kaH: 1.4,
    F: 0.63,
    fm: { CYP2D6: 0.9 },
    note: "Sensitive 2D6 substrate. PMs and paroxetine/fluoxetine spike exposure.",
  },
  citalopram: {
    tHalfH: 35,
    kaH: 0.9,
    F: 0.8,
    fm: { CYP2C19: 0.45, CYP3A4: 0.3, CYP2D6: 0.15 },
    note: "2C19 PM and strong 2C19 inhibitors raise QT-relevant exposure.",
  },
  risperidone: {
    tHalfH: 3,
    kaH: 1.5,
    F: 0.7,
    fm: { CYP2D6: 0.7, CYP3A4: 0.2 },
    activation: { enzyme: "CYP2D6", name: "Paliperidone" },
    note: "2D6 to 9-OH-risperidone (paliperidone). PMs stack parent.",
  },
  bupropion: {
    tHalfH: 21,
    kaH: 0.7,
    F: 0.05,
    fm: { CYP2B6: 0.7 },
    note: "2B6 victim and a strong 2D6 inhibitor of other drugs.",
  },
  guanfacine: {
    tHalfH: 17,
    kaH: 0.8,
    F: 0.8,
    fm: { CYP3A4: 0.8 },
    note: "ADHD α2 agonist. Strong 3A4 inhibitors raise sedation and bradycardia.",
  },
  "seven-oh": {
    tHalfH: 3.5,
    kaH: 1.4,
    F: 0.4,
    fm: { CYP3A4: 0.7 },
    note: "The hot μ-agonist. 3A4 inhibitors raise the opioid load.",
  },
  meperidine: {
    tHalfH: 4,
    kaH: 1.3,
    F: 0.5,
    fm: { CYP3A4: 0.4, CYP2B6: 0.35 },
    activation: { enzyme: "CYP3A4", name: "Normeperidine" },
    note: "Normeperidine is the seizure metabolite. 3A4 blockade and renal failure stack it.",
  },
  tamoxifen: {
    tHalfH: 170,
    kaH: 0.4,
    F: 1,
    fm: { CYP3A4: 0.5, CYP2D6: 0.3 },
    activation: { enzyme: "CYP2D6", name: "Endoxifen" },
    note: "Endoxifen is the workhorse. 2D6 PMs and strong 2D6 inhibitors lose activation.",
  },
  clopidogrel: {
    tHalfH: 6,
    kaH: 1.6,
    F: 0.5,
    fm: { CYP2C19: 0.45, CYP3A4: 0.25 },
    activation: { enzyme: "CYP2C19", name: "Thiol metabolite" },
    note: "Prodrug. 2C19 PMs and omeprazole blunt the antiplatelet effect.",
  },
  carisoprodol: {
    tHalfH: 2,
    kaH: 1.8,
    F: 0.8,
    fm: { CYP2C19: 0.8 },
    activation: { enzyme: "CYP2C19", name: "Meprobamate" },
    note: "2C19 to meprobamate. PMs and CBD/fluconazole stack parent plus metabolite.",
  },
};

export function hasPk(id: string) {
  return Boolean(ROWS[id]);
}

export function pkIdsOn(ids: string[]) {
  return ids.filter((id) => ROWS[id]);
}

function specFor(id: string, host: HostContext): PkSpec | null {
  const row = ROWS[id];
  if (!row) return null;
  const spec: PkSpec = {
    tHalfH: row.tHalfH,
    kaH: row.kaH,
    F: row.F,
    fm: { ...row.fm },
    gut3A4: row.gut3A4,
    activation: row.activation,
    note: row.note,
    iv: false,
  };
  if ((FIRST_PASS_NMDA as readonly string[]).includes(id)) {
    if (host.ketamineRoute === "iv") {
      spec.F = 1;
      spec.kaH = 8;
      spec.gut3A4 = 0;
      spec.iv = true;
      spec.fm = { CYP2B6: 0.55, CYP3A4: 0.2 };
      spec.note =
        "IV/IM skips gut 3A4. Hepatic CYP2B6 is the main clearance — inhibitors still move it, quietly.";
    } else if (host.ketamineRoute === "in") {
      spec.F = 0.5;
      spec.kaH = 2.2;
      spec.gut3A4 = 0.2;
      spec.fm = { CYP2B6: 0.4, CYP3A4: 0.35 };
    }
  }
  if (id === "dronabinol") {
    if (host.cannabisRoute === "smoked") {
      spec.F = 0.25;
      spec.kaH = 4;
      spec.gut3A4 = 0;
      spec.iv = true;
      spec.fm = { CYP2C9: 0.35, CYP3A4: 0.2 };
      spec.note = "Smoked THC mostly skips 11-OH-THC first-pass. Hepatic 2C9/3A4 still clear parent.";
    }
  }
  return spec;
}

function enzymeCl(
  enzyme: Enzyme,
  others: Drug[],
  host: HostContext,
  site: "hep" | "gut" = "hep",
): { cl: number; drivers: string[] } {
  let inh = 0;
  let ind = 0;
  const drivers: string[] = [];
  for (const d of others) {
    if (isVirtual(d.id)) continue;
    if (site === "hep" && GUT_ONLY.has(d.id)) continue;
    for (const role of d.enzymes) {
      if (role.enzyme !== enzyme) continue;
      if (role.kind === "inhibitor") {
        const I = I_INH[role.strength];
        if (I > inh) {
          inh = I;
          drivers.push(
            GUT_ONLY.has(d.id)
              ? `${d.name} intestinal ${enzyme} knockout`
              : `${d.name} ${role.strength} ${enzyme} inhibition`,
          );
        }
      }
      if (role.kind === "inducer") {
        const E = E_IND[role.strength];
        if (E > ind) {
          ind = E;
          drivers.push(`${d.name} ${role.strength} ${enzyme} induction`);
        }
      }
    }
  }
  let cl = 1 / (1 + inh);
  if (ind) cl *= 1 + ind;
  if (site === "hep") {
    if ((PHENOTYPE_ENZYMES as readonly string[]).includes(enzyme)) {
      const p = host.phenotypes[enzyme as (typeof PHENOTYPE_ENZYMES)[number]];
      if (p && p !== "NM") {
        cl *= PHENO_CL[p];
        drivers.push(`${enzyme} ${p} (${p === "UM" ? "faster" : "slower"} clearance)`);
      }
    }
    if (enzyme === "CYP1A2" && host.smoking) {
      cl *= 2.4;
      drivers.push("tobacco smoke CYP1A2 induction");
    }
    if (enzyme === "CYP2E1" && host.alcohol === "chronic") {
      cl *= 2.2;
      drivers.push("chronic alcohol CYP2E1 induction");
    }
  }
  return { cl: Math.max(0.05, cl), drivers };
}

function oralF(F: number, gut3A4: number, clGut: number) {
  if (gut3A4 <= 0) return F;
  const lift = (1 - F) * gut3A4 * (1 - clGut);
  return Math.min(1, F + lift);
}

export interface PkPoint {
  t: number;
  base: number;
  desk: number;
  metab?: number;
}

export interface PkModel {
  id: string;
  name: string;
  note: string;
  drivers: string[];
  aucr: number;
  cmaxFold: number;
  tHalfBase: number;
  tHalfDesk: number;
  tmaxBase: number;
  tmaxDesk: number;
  horizonH: number;
  activationName?: string;
  metabFold?: number;
  iv: boolean;
  points: PkPoint[];
}

function ke(tHalf: number) {
  return Math.LN2 / Math.max(0.2, tHalf);
}

function conc(t: number, F: number, ka: number, kElim: number, iv: boolean) {
  if (iv) return F * Math.exp(-kElim * t);
  if (Math.abs(ka - kElim) < 0.02) ka = kElim + 0.05;
  return ((F * ka) / (ka - kElim)) * (Math.exp(-kElim * t) - Math.exp(-ka * t));
}

function tmaxOf(F: number, ka: number, kElim: number, iv: boolean, horizon: number) {
  if (iv) return 0;
  const t = Math.log(ka / kElim) / (ka - kElim);
  return Math.min(horizon, Math.max(0, t));
}

export function modelPk(victim: Drug, others: Drug[], host: HostContext): PkModel | null {
  const spec = specFor(victim.id, host);
  if (!spec) return null;
  const mono: HostContext = {
    ...DEFAULT_HOST,
    ketamineRoute: host.ketamineRoute,
    cannabisRoute: host.cannabisRoute,
  };
  const fmEntries = Object.entries(spec.fm) as [Enzyme, number][];
  const fmSum = fmEntries.reduce((s, [, v]) => s + v, 0);
  const other = Math.max(0, 1 - fmSum);
  const drivers: string[] = [];
  let clHep0 = other;
  let clHep1 = other;
  let clGut0 = 1;
  let clGut1 = 1;
  const perps = others.filter((d) => !isVirtual(d.id));
  for (const [enz, fm] of fmEntries) {
    const a = enzymeCl(enz, [], mono, "hep");
    const b = enzymeCl(enz, perps, host, "hep");
    clHep0 += fm * a.cl;
    clHep1 += fm * b.cl;
    if (enz === "CYP3A4") {
      const gutA = enzymeCl(enz, [], mono, "gut");
      const gutB = enzymeCl(enz, perps, host, "gut");
      clGut0 = gutA.cl;
      clGut1 = gutB.cl;
      if ((spec.gut3A4 ?? 0) > 0) drivers.push(...gutB.drivers);
    }
    drivers.push(...b.drivers);
  }
  clHep0 = Math.max(0.08, clHep0);
  clHep1 = Math.max(0.08, clHep1);
  const ke0 = ke(spec.tHalfH);
  const ke1 = ke0 * (clHep1 / clHep0);
  const F0 = oralF(spec.F, spec.gut3A4 ?? 0, clGut0);
  const F1 = oralF(spec.F, spec.gut3A4 ?? 0, clGut1);
  if (F1 / Math.max(F0, 0.01) > 1.15 && (spec.gut3A4 ?? 0) > 0) {
    drivers.push("intestinal CYP3A4 first-pass opening");
  }
  const uniqueDrivers = [...new Set(drivers)];
  const tHalfDesk = Math.LN2 / ke1;
  const horizon = Math.min(168, Math.max(12, 5 * Math.max(spec.tHalfH, tHalfDesk)));
  const n = 80;
  const act = spec.activation;
  const act0 = act ? enzymeCl(act.enzyme, [], mono, "hep").cl : 1;
  const act1 = act ? enzymeCl(act.enzyme, perps, host, "hep").cl : 1;
  const raw: { t: number; base: number; desk: number; met0: number; met1: number }[] = [];
  let maxBase = 0;
  let aucBase = 0;
  let aucDesk = 0;
  for (let i = 0; i <= n; i++) {
    const t = (horizon * i) / n;
    const base = Math.max(0, conc(t, F0, spec.kaH, ke0, Boolean(spec.iv)));
    const desk = Math.max(0, conc(t, F1, spec.kaH, ke1, Boolean(spec.iv)));
    maxBase = Math.max(maxBase, base);
    raw.push({ t, base, desk, met0: base * act0, met1: desk * act1 });
    if (i > 0) {
      const dt = horizon / n;
      aucBase += ((raw[i - 1].base + base) / 2) * dt;
      aucDesk += ((raw[i - 1].desk + desk) / 2) * dt;
    }
  }
  const scale = maxBase > 0 ? 1 / maxBase : 1;
  const maxMet0 = Math.max(...raw.map((p) => p.met0), 1e-9);
  const points: PkPoint[] = raw.map((p) => ({
    t: p.t,
    base: p.base * scale,
    desk: p.desk * scale,
    metab: act ? p.met1 / maxMet0 : undefined,
  }));
  const aucr = aucBase > 0 ? aucDesk / aucBase : 1;
  const metabFold = act ? (act1 / Math.max(act0, 0.05)) * aucr : undefined;
  const maxDesk = Math.max(...raw.map((p) => p.desk));
  return {
    id: victim.id,
    name: victim.name,
    note: spec.note,
    drivers: uniqueDrivers,
    aucr,
    cmaxFold: maxBase > 0 ? maxDesk / maxBase : 1,
    tHalfBase: spec.tHalfH,
    tHalfDesk,
    tmaxBase: tmaxOf(F0, spec.kaH, ke0, Boolean(spec.iv), horizon),
    tmaxDesk: tmaxOf(F1, spec.kaH, ke1, Boolean(spec.iv), horizon),
    horizonH: horizon,
    activationName: act?.name,
    metabFold,
    iv: Boolean(spec.iv),
    points,
  };
}

export function modelsFor(drugs: Drug[], host: HostContext): PkModel[] {
  const real = drugs.filter((d) => !isVirtual(d.id) && ROWS[d.id] && DRUG_BY_ID[d.id]);
  const out: PkModel[] = [];
  for (const v of real) {
    const others = drugs.filter((d) => d.id !== v.id && !isVirtual(d.id));
    const m = modelPk(v, others, host);
    if (m) out.push(m);
  }
  out.sort((a, b) => Math.abs(Math.log(b.aucr)) - Math.abs(Math.log(a.aucr)));
  return out;
}
