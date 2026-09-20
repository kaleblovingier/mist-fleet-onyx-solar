/** COWS and CIWA-Ar teaching calculators. Not a charted score and not an induction protocol. */

export interface ScaleOption {
  score: number;
  label: string;
}

export interface ScaleItem {
  id: string;
  label: string;
  hint: string;
  options: ScaleOption[];
}

export interface ScaleBand {
  id: string;
  label: string;
  min: number;
  max: number;
  note: string;
}

/** Wesson & Ling 2003. Eleven items, max 48. */
export const COWS_ITEMS: ScaleItem[] = [
  {
    id: "pulse",
    label: "Resting pulse",
    hint: "After sitting. Rate the rate, not anxiety.",
    options: [
      { score: 0, label: "≤80" },
      { score: 1, label: "81–100" },
      { score: 2, label: "101–120" },
      { score: 4, label: ">120" },
    ],
  },
  {
    id: "sweat",
    label: "Sweating",
    hint: "Over the past 30 minutes, not the room.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Subjective chills" },
      { score: 2, label: "Flushed / moist face" },
      { score: 3, label: "Beads on the face" },
      { score: 4, label: "Streaming" },
    ],
  },
  {
    id: "restless",
    label: "Restlessness",
    hint: "Observation. Difficulty sitting still.",
    options: [
      { score: 0, label: "Still" },
      { score: 1, label: "Subjective" },
      { score: 3, label: "Frequent shifting" },
      { score: 5, label: "Cannot sit" },
    ],
  },
  {
    id: "pupil",
    label: "Pupil size",
    hint: "In ambient light.",
    options: [
      { score: 0, label: "Pinned / normal" },
      { score: 1, label: "Maybe large" },
      { score: 2, label: "Moderately dilated" },
      { score: 5, label: "Only iris rim" },
    ],
  },
  {
    id: "aches",
    label: "Bone / joint aches",
    hint: "Not the chronic pain they walked in with.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Mild" },
      { score: 2, label: "Severe, shifting" },
      { score: 4, label: "Rubbing joints" },
    ],
  },
  {
    id: "nose",
    label: "Runny nose / tearing",
    hint: "Not a cold. Not allergies they named on intake.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Subjective" },
      { score: 2, label: "Nose or eyes running" },
      { score: 4, label: "Constant" },
    ],
  },
  {
    id: "gi",
    label: "GI upset",
    hint: "Last 30 minutes.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Cramps" },
      { score: 2, label: "Nausea" },
      { score: 3, label: "Vomiting or loose" },
      { score: 5, label: "Multiple vomits / diarrhea" },
    ],
  },
  {
    id: "tremor",
    label: "Tremor",
    hint: "Outstretched hands.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Felt, not seen" },
      { score: 2, label: "Slight" },
      { score: 4, label: "Gross" },
    ],
  },
  {
    id: "yawn",
    label: "Yawning",
    hint: "Observation during the interview.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Subjective" },
      { score: 2, label: "Two or three" },
      { score: 4, label: "Several / unstoppable" },
    ],
  },
  {
    id: "anxiety",
    label: "Anxiety / irritability",
    hint: "Observation plus report.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Subjective" },
      { score: 2, label: "Obviously irritable" },
      { score: 4, label: "Severe, so that it is hard to interview" },
    ],
  },
  {
    id: "goose",
    label: "Gooseflesh",
    hint: "Arm. The most specific sign on this scale.",
    options: [
      { score: 0, label: "None" },
      { score: 3, label: "Palpable" },
      { score: 5, label: "Visible piloerection" },
    ],
  },
];

export const COWS_BANDS: ScaleBand[] = [
  { id: "none", label: "None / minimal", min: 0, max: 4, note: "Not enough withdrawal to hang an induction on. Wait, or this is not opioid withdrawal." },
  { id: "mild", label: "Mild", min: 5, max: 12, note: "Many office protocols wait for ≥8–12 before a first film. Fentanyl in tissue can still precipitate at this number." },
  { id: "moderate", label: "Moderate", min: 13, max: 24, note: "Classic 'enough COWS' band. Recent fentanyl is still occupancy, not this integer." },
  { id: "mod-severe", label: "Moderately severe", min: 25, max: 36, note: "Uncomfortable. Supportive α2 (lofexidine / clonidine) is a different row from a film." },
  { id: "severe", label: "Severe", min: 37, max: 48, note: "Rare on a sitting interview. Recheck the pulse item. This desk is not an induction protocol." },
];

/** Sullivan 1989. Ten items, max 67. */
export const CIWA_ITEMS: ScaleItem[] = [
  {
    id: "nausea",
    label: "Nausea / vomiting",
    hint: "Ask, then observe.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Mild nausea" },
      { score: 4, label: "Intermittent dry heaves" },
      { score: 7, label: "Constant / vomiting" },
    ],
  },
  {
    id: "tremor",
    label: "Tremor",
    hint: "Arms extended, fingers spread.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Not visible, can be felt" },
      { score: 4, label: "Moderate, arms extended" },
      { score: 7, label: "Severe, even at rest" },
    ],
  },
  {
    id: "sweat",
    label: "Paroxysmal sweats",
    hint: "Observation.",
    options: [
      { score: 0, label: "No sweat" },
      { score: 1, label: "Barely moist" },
      { score: 4, label: "Beads of sweat" },
      { score: 7, label: "Drenching" },
    ],
  },
  {
    id: "anxiety",
    label: "Anxiety",
    hint: "Ask 'do you feel nervous?'",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Mildly anxious" },
      { score: 4, label: "Moderately anxious / guarded" },
      { score: 7, label: "Acute panic" },
    ],
  },
  {
    id: "agitation",
    label: "Agitation",
    hint: "Observation.",
    options: [
      { score: 0, label: "Normal activity" },
      { score: 1, label: "Somewhat more than normal" },
      { score: 4, label: "Moderately fidgety" },
      { score: 7, label: "Paces or thrashes" },
    ],
  },
  {
    id: "tactile",
    label: "Tactile disturbances",
    hint: "Itching, pins and needles, burning, bugs.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Very mild itching" },
      { score: 3, label: "Moderate", },
      { score: 4, label: "Moderately severe hallucinations" },
      { score: 7, label: "Continuous tactile hallucinations" },
    ],
  },
  {
    id: "auditory",
    label: "Auditory disturbances",
    hint: "Harshness, then voices.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Very mild harshness" },
      { score: 4, label: "Moderately severe hallucinations" },
      { score: 7, label: "Continuous auditory hallucinations" },
    ],
  },
  {
    id: "visual",
    label: "Visual disturbances",
    hint: "Light sensitivity, then seeing things.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Very mild sensitivity" },
      { score: 4, label: "Moderately severe hallucinations" },
      { score: 7, label: "Continuous visual hallucinations" },
    ],
  },
  {
    id: "headache",
    label: "Headache / fullness",
    hint: "Not for dizziness. Rate fullness in the head.",
    options: [
      { score: 0, label: "None" },
      { score: 1, label: "Very mild" },
      { score: 4, label: "Moderate" },
      { score: 7, label: "Extremely severe" },
    ],
  },
  {
    id: "orient",
    label: "Orientation",
    hint: "Person, place, time, current events. Max 4.",
    options: [
      { score: 0, label: "Oriented" },
      { score: 1, label: "Unsure of date" },
      { score: 2, label: "Disoriented date by ≤2 days" },
      { score: 3, label: "Disoriented date by >2 days" },
      { score: 4, label: "Disoriented to place / person" },
    ],
  },
];

export const CIWA_BANDS: ScaleBand[] = [
  { id: "mild", label: "Mild", min: 0, max: 9, note: "Often supportive care. This desk is not a benzo protocol." },
  { id: "moderate", label: "Moderate", min: 10, max: 15, note: "Many CIWA-driven pathways start symptom-triggered benzos around 8–10. Open the label." },
  { id: "severe", label: "Severe", min: 16, max: 67, note: "DT risk climbs. Seizure history is a different card. Get medical. Not a dose." },
];

export function scoreOf(items: ScaleItem[], picked: Record<string, number>): number {
  let n = 0;
  for (const item of items) {
    const v = picked[item.id];
    if (Number.isFinite(v)) n += v;
  }
  return n;
}

export function bandOf(bands: ScaleBand[], total: number): ScaleBand {
  return bands.find((b) => total >= b.min && total <= b.max) ?? bands[bands.length - 1]!;
}

export function cowsMax() {
  return COWS_ITEMS.reduce((n, i) => n + Math.max(...i.options.map((o) => o.score)), 0);
}

export function ciwaMax() {
  return CIWA_ITEMS.reduce((n, i) => n + Math.max(...i.options.map((o) => o.score)), 0);
}

export function cowsWanted(ids: string[]) {
  return ids.some((id) =>
    [
      "methadone",
      "buprenorphine",
      "naltrexone",
      "naloxone",
      "nalmefene",
      "fentanyl",
      "dirty-30",
      "heroin",
      "lofexidine",
      "clonidine",
      "seven-oh",
    ].includes(id),
  );
}

export function ciwaWanted(ids: string[], alcohol?: string) {
  return ids.includes("ethanol") || alcohol === "acute" || alcohol === "chronic" || ids.includes("disulfiram") || ids.includes("acamprosate");
}
