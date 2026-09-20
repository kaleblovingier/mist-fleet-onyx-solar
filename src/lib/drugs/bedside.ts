/** Bedside teaching calculators — Bazett / Fridericia QTc and Cockcroft–Gault. Not a charted QTc. */

export interface QtcInput {
  qtMs: number;
  hr: number;
}

export interface QtcResult {
  rr: number;
  bazett: number;
  fridericia: number;
  note: string;
}

export function qtcOf({ qtMs, hr }: QtcInput): QtcResult | null {
  if (!Number.isFinite(qtMs) || !Number.isFinite(hr) || qtMs < 200 || qtMs > 800 || hr < 30 || hr > 220) {
    return null;
  }
  const rr = 60 / hr;
  const bazett = qtMs / Math.sqrt(rr);
  const fridericia = qtMs / rr ** (1 / 3);
  let note = "Fridericia is quieter at high heart rates. Bazett over-corrects tachycardia.";
  if (bazett >= 500 || fridericia >= 500) {
    note = "≥500 ms on either formula is the classic high-risk teaching cut — electrolytes, stop a possible-risk agent if you can. Not a diagnosis of TdP.";
  } else if (bazett >= 470) {
    note = "Prolonged on many maps (often ~450 men / ~470 women). This desk is not sex-adjusted and not an ECG.";
  }
  return {
    rr: Math.round(rr * 1000) / 1000,
    bazett: Math.round(bazett),
    fridericia: Math.round(fridericia),
    note,
  };
}

export type Sex = "male" | "female";

export interface CrclInput {
  age: number;
  weightKg: number;
  scr: number;
  sex: Sex;
}

export interface CrclResult {
  crcl: number;
  band: "usual" | "caution" | "severe";
  note: string;
}

export function crclOf({ age, weightKg, scr, sex }: CrclInput): CrclResult | null {
  if (
    !Number.isFinite(age) ||
    !Number.isFinite(weightKg) ||
    !Number.isFinite(scr) ||
    age < 18 ||
    age > 110 ||
    weightKg < 30 ||
    weightKg > 250 ||
    scr <= 0 ||
    scr > 20
  ) {
    return null;
  }
  const crcl = ((140 - age) * weightKg * (sex === "female" ? 0.85 : 1)) / (72 * scr);
  const rounded = Math.round(crcl);
  let band: CrclResult["band"] = "usual";
  let note = "Cockcroft–Gault, not CKD-EPI. Many labels still dose on this number. IBW vs total weight is a separate argument for obesity.";
  if (rounded < 30) {
    band = "severe";
    note = "CrCl <30 — several NTI and DOAC rows on this desk become avoid or specialist-only. Flip CKD on the host to score them.";
  } else if (rounded < 60) {
    band = "caution";
    note = "CrCl 30–59. Dose-cuts live here for dabigatran, gabapentin, lithium, enoxaparin. Flip CKD on the host.";
  }
  return { crcl: rounded, band, note };
}

/** Sheiner–Tozer total-to-corrected phenytoin. Hypoalbuminemia teaching — not a free level. */
export interface PhenytoinInput {
  total: number;
  albumin: number;
  crclLow: boolean;
}

export interface PhenytoinResult {
  corrected: number;
  note: string;
}

export function phenytoinCorrected({ total, albumin, crclLow }: PhenytoinInput): PhenytoinResult | null {
  if (
    !Number.isFinite(total) ||
    !Number.isFinite(albumin) ||
    total <= 0 ||
    total > 80 ||
    albumin < 0.8 ||
    albumin > 6
  ) {
    return null;
  }
  const adj = crclLow ? 0.1 : 0.2;
  const corrected = total / (adj * albumin + 0.1);
  const rounded = Math.round(corrected * 10) / 10;
  let note =
    "Sheiner–Tozer. Corrected ≈ total / ((0.2 × albumin) + 0.1). CrCl <10 uses 0.1 × albumin. A free level is better when you can get one.";
  if (rounded >= 20) {
    note = `Corrected ~${rounded} µg/mL — nystagmus teaching starts around 20 total. This is not a free phenytoin and not a dose cut.`;
  }
  return { corrected: rounded, note };
}

