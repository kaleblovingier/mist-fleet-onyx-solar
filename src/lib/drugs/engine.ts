import { DRUG_BY_ID } from "./catalog";
import { applyHost, isVirtual, WASHOUT } from "./host";
import {
  ENZYMES,
  METABOLIZER_LABEL,
  PHENOTYPE_ENZYMES,
  SEVERITY_RANK,
  STACK_AXES,
  type Drug,
  type Enzyme,
  type EnzymeBurden,
  type EnzymeRole,
  type Finding,
  type HostContext,
  type Metabolizer,
  type PhenotypeMap,
  type Report,
  type Severity,
  type StackBar,
  type Strength,
  type SubstrateSensitivity,
} from "./types";

const STRENGTH_RANK: Record<Strength, number> = { strong: 3, moderate: 2, weak: 1 };

function pkSeverity(
  strength: Strength,
  sensitivity: SubstrateSensitivity,
  nti: boolean,
  pathway: "clearance" | "activation",
  kind: "inhibitor" | "inducer",
): Severity {
  const ntiOrSensitive = nti || sensitivity === "sensitive";
  if (kind === "inhibitor") {
    if (strength === "strong" && ntiOrSensitive) return "contraindicated";
    if (strength === "strong" && sensitivity === "major") return "major";
    if (strength === "strong") return "moderate";
    if (strength === "moderate" && ntiOrSensitive) return "major";
    if (strength === "moderate" && sensitivity === "major") return "moderate";
    if (strength === "moderate") return "minor";
    if (ntiOrSensitive) return "moderate";
    return "minor";
  }
  // inducers: loss of efficacy (or boosted activation)
  if (pathway === "activation") {
    if (strength === "strong") return "major";
    if (strength === "moderate") return "moderate";
    return "minor";
  }
  if (strength === "strong" && ntiOrSensitive) return "contraindicated";
  if (strength === "strong") return "major";
  if (strength === "moderate" && (ntiOrSensitive || sensitivity === "major")) return "major";
  if (strength === "moderate") return "moderate";
  return "minor";
}

function substratesOf(drug: Drug, enzyme: Enzyme) {
  return drug.enzymes.filter(
    (e): e is Extract<EnzymeRole, { kind: "substrate" }> =>
      e.enzyme === enzyme && e.kind === "substrate",
  );
}

function perpetratorsOf(drug: Drug, enzyme: Enzyme, kind: "inhibitor" | "inducer") {
  return drug.enzymes.filter(
    (e): e is Extract<EnzymeRole, { kind: "inhibitor" | "inducer" }> =>
      e.enzyme === enzyme && e.kind === kind,
  );
}

function pairId(a: string, b: string, suffix: string) {
  return [a, b].sort().join("__") + "__" + suffix;
}

function names(ids: string[]) {
  return ids.map((id) => DRUG_BY_ID[id]?.name ?? id);
}

function arrowFor(
  kind: "inhibitor" | "inducer",
  pathway: "clearance" | "activation",
): string {
  if (kind === "inhibitor" && pathway === "clearance") return "↑ exposure";
  if (kind === "inhibitor" && pathway === "activation") return "↓ active metabolite";
  if (kind === "inducer" && pathway === "clearance") return "↓ exposure / loss of efficacy";
  return "↑ active metabolite";
}

function pkClinical(victim: Drug, kind: "inhibitor" | "inducer", pathway: "clearance" | "activation") {
  if (kind === "inhibitor" && pathway === "activation") {
    return `Expect blunted conversion of ${victim.name} to its active metabolite and reduced clinical effect (${victim.toxicityHint}).`;
  }
  if (kind === "inducer" && pathway === "clearance") {
    return `Expect falling ${victim.name} levels and loss of efficacy. Monitor for treatment failure (${victim.toxicityHint}).`;
  }
  if (kind === "inducer" && pathway === "activation") {
    return `Faster activation of ${victim.name} may raise active-metabolite exposure. Watch for ${victim.toxicityHint}.`;
  }
  return `Expect higher ${victim.name} exposure. Watch for ${victim.toxicityHint}.`;
}

function pkFindings(a: Drug, b: Drug): Finding[] {
  const out: Finding[] = [];
  for (const enzyme of ENZYMES) {
    for (const [perp, victim] of [
      [a, b],
      [b, a],
    ] as const) {
      for (const kind of ["inhibitor", "inducer"] as const) {
        const perps = perpetratorsOf(perp, enzyme, kind);
        const subs = substratesOf(victim, enzyme);
        if (!perps.length || !subs.length) continue;
        const strongest = perps.reduce((m, p) =>
          STRENGTH_RANK[p.strength] > STRENGTH_RANK[m.strength] ? p : m,
        );
        const hottest = subs.reduce((m, s) => {
          const rank = { sensitive: 3, major: 2, minor: 1 };
          return rank[s.sensitivity] > rank[m.sensitivity] ? s : m;
        });
        const severity = pkSeverity(
          strongest.strength,
          hottest.sensitivity,
          Boolean(hottest.nti),
          hottest.pathway,
          kind,
        );
        const verb = kind === "inhibitor" ? "inhibition" : "induction";
        const pathwayWord =
          hottest.pathway === "activation" ? "prodrug activation" : "clearance";
        out.push({
          id: pairId(a.id, b.id, `pk-${enzyme}-${kind}-${perp.id}`),
          severity,
          kind: "pk",
          drugIds: [perp.id, victim.id],
          headline: `${perp.name} × ${victim.name}`,
          enzymes: [enzyme],
          effect: arrowFor(kind, hottest.pathway),
          mechanism: `${strongest.strength} ${enzyme} ${verb} of ${pathwayWord}`,
          clinical: `${perp.name} is a ${strongest.strength} ${enzyme} ${kind}. ${victim.name} is a ${hottest.sensitivity} ${enzyme} substrate${hottest.nti ? " with a narrow therapeutic index" : ""}${hottest.pathway === "activation" ? " (prodrug)" : ""}. ${pkClinical(victim, kind, hottest.pathway)}`,
          tags: [enzyme, kind, hottest.pathway],
        });
      }
    }

    const aSubs = substratesOf(a, enzyme);
    const bSubs = substratesOf(b, enzyme);
    const perpOnEnzyme = out.some(
      (f) =>
        f.enzymes.includes(enzyme) &&
        (f.tags.includes("inhibitor") || f.tags.includes("inducer")),
    );
    if (!perpOnEnzyme && aSubs.length && bSubs.length) {
      const aHot = aSubs[0];
      const bHot = bSubs[0];
      const nti = Boolean(aHot.nti || bHot.nti);
      const bothHot =
        (aHot.sensitivity === "sensitive" || aHot.sensitivity === "major") &&
        (bHot.sensitivity === "sensitive" || bHot.sensitivity === "major");
      if (nti || bothHot) {
        out.push({
          id: pairId(a.id, b.id, `pk-comp-${enzyme}`),
          severity: nti ? "moderate" : "minor",
          kind: "pk",
          drugIds: [a.id, b.id],
          headline: `${a.name} × ${b.name}`,
          enzymes: [enzyme],
          effect: "competitive substrate overlap",
          mechanism: `shared ${enzyme} substrate`,
          clinical: `Both drugs are ${enzyme} substrates. Competition is usually modest unless a perpetrator is also present, but narrow-index or sensitive substrates can still shift.`,
          tags: [enzyme, "competition"],
        });
      }
    }
  }
  return out;
}

function has(drug: Drug, flag: Drug["pd"][number]) {
  return drug.pd.includes(flag);
}

function pdPair(
  a: Drug,
  b: Drug,
  opts: {
    suffix: string;
    severity: Severity;
    headline?: string;
    effect: string;
    mechanism: string;
    clinical: string;
    tags: string[];
  },
): Finding {
  return {
    id: pairId(a.id, b.id, opts.suffix),
    severity: opts.severity,
    kind: "pd",
    drugIds: [a.id, b.id],
    headline: opts.headline ?? `${a.name} × ${b.name}`,
    enzymes: [],
    effect: opts.effect,
    mechanism: opts.mechanism,
    clinical: opts.clinical,
    tags: opts.tags,
  };
}

function pdFindings(a: Drug, b: Drug): Finding[] {
  const out: Finding[] = [];

  const aMaoi = has(a, "maoi");
  const bMaoi = has(b, "maoi");
  const aSero = has(a, "serotonergic");
  const bSero = has(b, "serotonergic");
  if ((aMaoi && bSero) || (bMaoi && aSero) || (aMaoi && bMaoi)) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-maoi-sero",
        severity: "contraindicated",
        effect: "serotonin syndrome / hypertensive crisis",
        mechanism: "MAOI × serotonergic",
        clinical:
          "Combining an MAOI (including linezolid) with another serotonergic drug is contraindicated. Risk of life-threatening serotonin syndrome and, with tyramine-like effects, hypertensive crisis.",
        tags: ["serotonin", "maoi"],
      }),
    );
  } else if (aSero && bSero) {
    const strong =
      has(a, "ssri-snri") ||
      has(b, "ssri-snri") ||
      a.id === "tramadol" ||
      b.id === "tramadol" ||
      a.id === "dextromethorphan" ||
      b.id === "dextromethorphan" ||
      a.id === "mdma" ||
      b.id === "mdma" ||
      (has(a, "serotonergic") && has(a, "stimulant")) ||
      (has(b, "serotonergic") && has(b, "stimulant"));
    out.push(
      pdPair(a, b, {
        suffix: "pd-sero",
        severity: strong ? "major" : "moderate",
        effect: "additive serotonergic tone",
        mechanism: "serotonin syndrome risk",
        clinical: `Both ${a.name} and ${b.name} raise serotonergic activity. Watch for agitation, clonus, hyperreflexia, fever, and diarrhea. Risk climbs with additional serotonergic agents.`,
        tags: ["serotonin"],
      }),
    );
  }

  const aOp = has(a, "opioid");
  const bOp = has(b, "opioid");
  const aBz = has(a, "benzo-zdrug");
  const bBz = has(b, "benzo-zdrug");
  const aCns = has(a, "cns-depressant");
  const bCns = has(b, "cns-depressant");
  if ((aOp && bBz) || (bOp && aBz)) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-opioid-benzo",
        severity: "major",
        effect: "respiratory depression",
        mechanism: "opioid × benzodiazepine / Z-drug",
        clinical:
          "FDA boxed warning: opioids plus benzodiazepines (or Z-drugs) cause profound sedation, respiratory depression, coma, and death. Avoid unless no alternative exists; if combined, use the lowest doses and monitor.",
        tags: ["cns", "respiratory"],
      }),
    );
  }
  if ((has(a, "alpha2-agonist") && bOp) || (has(b, "alpha2-agonist") && aOp)) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-alpha2-opioid",
        severity: "major",
        effect: "sedation not reversed by naloxone",
        mechanism: "α2-agonist × opioid",
        clinical:
          "Xylazine, medetomidine, and related α2-agonists sedate independently of the mu receptor. Naloxone reverses the opioid but not the α2 airway loss — support ventilation, do not stack extra naloxone expecting a wake-up.",
        tags: ["cns", "alpha2", "street"],
      }),
    );
  }
  if (
    (has(a, "ghb") && (bCns || has(b, "alcohol") || bBz || bOp)) ||
    (has(b, "ghb") && (aCns || has(a, "alcohol") || aBz || aOp))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-ghb-cns",
        severity: "contraindicated",
        effect: "coma / apnea",
        mechanism: "GHB × CNS depressant",
        clinical:
          "Sodium oxybate (GHB) plus alcohol, benzodiazepines, opioids, or other CNS depressants is labeled contraindicated. The combination produces abrupt respiratory arrest.",
        tags: ["cns", "ghb"],
      }),
    );
  } else if (
    !((has(a, "alpha2-agonist") && bOp) || (has(b, "alpha2-agonist") && aOp)) &&
    ((aOp && bCns) || (bOp && aCns) || (aCns && bCns && a.id !== b.id))
  ) {
    const gabapentinoid =
      a.id === "gabapentin" ||
      b.id === "gabapentin" ||
      a.id === "pregabalin" ||
      b.id === "pregabalin";
    const nmda =
      has(a, "dissociative") ||
      has(b, "dissociative") ||
      has(a, "alcohol") ||
      has(b, "alcohol");
    out.push(
      pdPair(a, b, {
        suffix: "pd-cns",
        severity: aOp || bOp || gabapentinoid || nmda ? "major" : "moderate",
        effect: "additive CNS depression",
        mechanism: nmda
          ? has(a, "dissociative") || has(b, "dissociative")
            ? "NMDA dissociative × CNS depressant"
            : "alcohol × CNS depressant"
          : "CNS depressant synergy",
        clinical: nmda
          ? `Combining ${a.name} and ${b.name} stacks airway and sedative risk. NMDA dissociatives plus benzodiazepines or alcohol also blunt ketamine/esketamine antidepressant response. This is not a recreational pairing map — it is a respiratory-depression warning.`
          : `Additive sedation and respiratory depression with ${a.name} and ${b.name}. Extra caution in older adults and sleep-disordered breathing.`,
        tags: ["cns"],
      }),
    );
  }

  const qtScore = (x: Drug) => (has(x, "qt-known") ? 2 : has(x, "qt-possible") ? 1 : 0);
  const qt = qtScore(a) + qtScore(b);
  if (qtScore(a) && qtScore(b)) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-qt",
        severity: qt >= 3 ? "major" : "moderate",
        effect: "additive QT prolongation / TdP",
        mechanism: "combined QT load",
        clinical: `Both drugs prolong ventricular repolarization. Stacking QT risk raises torsades de pointes. Check electrolytes, avoid other QT drugs, and review ECG if the pair cannot be separated.`,
        tags: ["qt"],
      }),
    );
  }

  const bleedA = has(a, "anticoagulant") || has(a, "antiplatelet") || has(a, "nsaid");
  const bleedB = has(b, "anticoagulant") || has(b, "antiplatelet") || has(b, "nsaid");
  const ssriBleed =
    (has(a, "ssri-snri") && (has(b, "anticoagulant") || has(b, "nsaid") || has(b, "antiplatelet"))) ||
    (has(b, "ssri-snri") && (has(a, "anticoagulant") || has(a, "nsaid") || has(a, "antiplatelet")));
  if (
    (bleedA && bleedB && !(has(a, "nsaid") && has(b, "nsaid") && !has(a, "anticoagulant") && !has(b, "anticoagulant") && !has(a, "antiplatelet") && !has(b, "antiplatelet"))) ||
    ssriBleed
  ) {
    const twoAc = has(a, "anticoagulant") && has(b, "anticoagulant");
    const acPlus = (has(a, "anticoagulant") || has(b, "anticoagulant")) && (has(a, "nsaid") || has(b, "nsaid") || has(a, "antiplatelet") || has(b, "antiplatelet"));
    out.push(
      pdPair(a, b, {
        suffix: "pd-bleed",
        severity: twoAc || acPlus ? "major" : "moderate",
        effect: "additive bleeding",
        mechanism: "hemostasis synergy",
        clinical: `Combined effects on coagulation, platelets, or gastric mucosa raise bleed risk (GI, intracranial). SSRIs add platelet-serotonin depletion. Reconsider gastroprotection and the need for every agent.`,
        tags: ["bleeding"],
      }),
    );
  } else if (has(a, "nsaid") && has(b, "nsaid")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-nsaid",
        severity: "moderate",
        effect: "stacked NSAID toxicity",
        mechanism: "duplicate NSAID",
        clinical: "Two NSAIDs (including aspirin at anti-inflammatory doses) raise GI bleed and renal risk without extra analgesia.",
        tags: ["bleeding", "renal"],
      }),
    );
  }

  if (
    (has(a, "anticoagulant") || has(b, "anticoagulant") || a.id === "lithium" || b.id === "lithium") &&
    (has(a, "nsaid") || has(b, "nsaid")) &&
    (a.id === "lithium" || b.id === "lithium")
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-lithium-nsaid",
        severity: "major",
        effect: "↑ lithium level",
        mechanism: "NSAID reduced lithium clearance",
        clinical:
          "NSAIDs reduce renal lithium clearance and can precipitate lithium toxicity. Prefer acetaminophen for pain, or monitor levels closely.",
        tags: ["lithium", "renal"],
      }),
    );
  }

  if (
    (has(a, "acei-arb") || has(b, "acei-arb")) &&
    (has(a, "nsaid") || has(b, "nsaid")) &&
    (a.id === "lithium" || b.id === "lithium") === false
  ) {
    // lithium handled above; ACEI + NSAID still nephrotoxic
  }

  if ((has(a, "acei-arb") && has(b, "nsaid")) || (has(b, "acei-arb") && has(a, "nsaid"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-acei-nsaid",
        severity: "moderate",
        effect: "afferent + efferent renal hit",
        mechanism: "ACEI/ARB × NSAID",
        clinical:
          "ACE inhibitors/ARBs dilate the efferent arteriole; NSAIDs constrict the afferent. Together they drop GFR — the start of the 'triple whammy' when a diuretic is added.",
        tags: ["renal"],
      }),
    );
  }

  if ((has(a, "acei-arb") && has(b, "k-sparing")) || (has(b, "acei-arb") && has(a, "k-sparing"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-hyperk",
        severity: "major",
        effect: "hyperkalemia",
        mechanism: "RAAS blockade × potassium retention",
        clinical:
          "ACEI/ARB plus a potassium-sparing agent (spironolactone, TMP-SMX) can produce life-threatening hyperkalemia. Check potassium and creatinine, especially in CKD.",
        tags: ["potassium"],
      }),
    );
  }

  if (
    (has(a, "acei-arb") && (b.id === "lithium")) ||
    (has(b, "acei-arb") && a.id === "lithium") ||
    (has(a, "loop-thiazide") && b.id === "lithium") ||
    (has(b, "loop-thiazide") && a.id === "lithium")
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-lithium-renal",
        severity: "major",
        effect: "↑ lithium level",
        mechanism: "reduced lithium clearance",
        clinical:
          "ACE inhibitors, ARBs, and thiazides reduce lithium clearance. This is a classic precipitant of lithium toxicity.",
        tags: ["lithium"],
      }),
    );
  }

  if (
    (has(a, "hypoglycemic") && has(b, "hypoglycemic")) ||
    (has(a, "insulin-secretagogue") && (b.id === "ciprofloxacin" || b.id === "levofloxacin" || b.id === "moxifloxacin")) ||
    (has(b, "insulin-secretagogue") && (a.id === "ciprofloxacin" || a.id === "levofloxacin" || a.id === "moxifloxacin"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-hypoglycemia",
        severity: "moderate",
        effect: "stacked hypoglycemia",
        mechanism: "glucose-lowering synergy",
        clinical:
          "Combined glucose-lowering (or a fluoroquinolone with a sulfonylurea) can produce severe hypoglycemia. Recheck home glucose and consider dose reduction.",
        tags: ["glucose"],
      }),
    );
  }

  if (has(a, "anticholinergic") && has(b, "anticholinergic")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-ach",
        severity: "moderate",
        effect: "anticholinergic burden",
        mechanism: "additive muscarinic blockade",
        clinical:
          "Stacked anticholinergic load: confusion, urinary retention, constipation, dry mouth, and falls — especially in older adults.",
        tags: ["anticholinergic"],
      }),
    );
  }

  if (
    (has(a, "beta-blocker") && has(b, "ndhp-ccb")) ||
    (has(b, "beta-blocker") && has(a, "ndhp-ccb")) ||
    (has(a, "bradycardic") && has(b, "bradycardic") && (has(a, "ndhp-ccb") || has(b, "ndhp-ccb") || a.id === "amiodarone" || b.id === "amiodarone" || a.id === "donepezil" || b.id === "donepezil"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-brady",
        severity: "major",
        effect: "bradycardia / AV block",
        mechanism: "additive nodal depression",
        clinical: `Both ${a.name} and ${b.name} slow sinus and AV nodal conduction. Combined use can cause symptomatic bradycardia or heart block.`,
        tags: ["bradycardia"],
      }),
    );
  }

  if ((has(a, "nitrate") && has(b, "pde5")) || (has(b, "nitrate") && has(a, "pde5"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-nitrate-pde5",
        severity: "contraindicated",
        effect: "catastrophic hypotension",
        mechanism: "nitrate × PDE5 inhibitor",
        clinical:
          "PDE5 inhibitors potentiate nitric-oxide-mediated vasodilation. Nitrates plus sildenafil/tadalafil can cause refractory hypotension and are contraindicated (wait 24 h after sildenafil, 48 h after tadalafil).",
        tags: ["hypotension"],
      }),
    );
  }

  if ((has(a, "pde5") && has(b, "alpha-blocker")) || (has(b, "pde5") && has(a, "alpha-blocker"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-pde5-alpha",
        severity: "moderate",
        effect: "orthostatic hypotension",
        mechanism: "PDE5 × alpha blocker",
        clinical: "Both dilate vascular smooth muscle. Separate dosing and watch for first-dose syncope.",
        tags: ["hypotension"],
      }),
    );
  }

  if ((has(a, "statin") && has(b, "fibrate")) || (has(b, "statin") && has(a, "fibrate"))) {
    const simLova =
      a.id === "simvastatin" ||
      b.id === "simvastatin" ||
      a.id === "lovastatin" ||
      b.id === "lovastatin";
    out.push(
      pdPair(a, b, {
        suffix: "pd-statin-fibrate",
        severity: simLova ? "contraindicated" : "major",
        effect: "myopathy / rhabdomyolysis",
        mechanism: "statin × fibrate",
        clinical:
          "Gemfibrozil with simvastatin or lovastatin is contraindicated. Other statin–fibrate pairs still raise rhabdomyolysis risk; prefer fenofibrate if a fibrate is required.",
        tags: ["myopathy"],
      }),
    );
  }

  if (has(a, "seizure-lowering") && has(b, "seizure-lowering")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-seizure",
        severity: "moderate",
        effect: "lowered seizure threshold",
        mechanism: "stacked proconvulsant effect",
        clinical: `Both ${a.name} and ${b.name} can lower seizure threshold. Extra caution with tramadol, bupropion, or clozapine combinations.`,
        tags: ["seizure"],
      }),
    );
  }

  if (
    (a.id === "methotrexate" && (has(b, "nsaid") || b.id === "tmp-smx")) ||
    (b.id === "methotrexate" && (has(a, "nsaid") || a.id === "tmp-smx"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-mtx",
        severity: "major",
        effect: "methotrexate toxicity",
        mechanism: "reduced MTX clearance",
        clinical:
          "NSAIDs and trimethoprim–sulfamethoxazole reduce methotrexate clearance and add marrow/mucosal toxicity. This pairing is a classic cause of MTX disaster.",
        tags: ["marrow"],
      }),
    );
  }

  if (has(a, "nephrotoxic") && has(b, "nephrotoxic")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-nephro",
        severity: "moderate",
        effect: "stacked nephrotoxicity",
        mechanism: "additive kidney injury",
        clinical: `Both ${a.name} and ${b.name} can injure the kidney. Monitor creatinine and volume status.`,
        tags: ["renal"],
      }),
    );
  }

  if ((has(a, "maoi") && has(b, "stimulant")) || (has(b, "maoi") && has(a, "stimulant"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-maoi-stim",
        severity: "contraindicated",
        effect: "hypertensive crisis",
        mechanism: "MAOI × stimulant",
        clinical:
          "MAOIs plus amphetamines, methylphenidate, cocaine, MDMA, or other stimulants can produce a paroxysmal pressor crisis. This pairing is contraindicated.",
        tags: ["pressor", "maoi"],
      }),
    );
  }

  if (
    (a.id === "cocaine" && has(b, "alcohol")) ||
    (b.id === "cocaine" && has(a, "alcohol"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-cocaethylene",
        severity: "major",
        effect: "cocaethylene cardiotoxicity",
        mechanism: "cocaine × ethanol transesterification",
        clinical:
          "Ethanol plus cocaine forms cocaethylene, a longer-lived metabolite with more arrhythmia, seizure, and hepatic risk than cocaine alone.",
        tags: ["cardiac", "alcohol"],
      }),
    );
  }

  if (
    (has(a, "opioid-antagonist") && has(b, "opioid")) ||
    (has(b, "opioid-antagonist") && has(a, "opioid"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-antag-opioid",
        severity: "major",
        effect: "precipitated withdrawal / blocked analgesia",
        mechanism: "opioid antagonist × agonist",
        clinical:
          "Naltrexone or naloxone will displace full and partial agonists from the mu receptor. In a dependent patient that means precipitated withdrawal; in anyone it means lost opioid analgesia.",
        tags: ["opioid"],
      }),
    );
  }

  if (
    (has(a, "psychedelic") && b.id === "lithium") ||
    (has(b, "psychedelic") && a.id === "lithium")
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-lithium-psychedelic",
        severity: "major",
        effect: "seizures / severe psychotoxicity",
        mechanism: "lithium × serotonergic psychedelic",
        clinical:
          "Lithium combined with psilocybin or LSD has a documented signal for seizures and prolonged adverse reactions. Do not stack them.",
        tags: ["seizure", "lithium"],
      }),
    );
  }

  if (has(a, "stimulant") && has(b, "stimulant")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-stim-stack",
        severity: "moderate",
        effect: "stacked sympathomimetic load",
        mechanism: "stimulant × stimulant",
        clinical: `Combined ${a.name} and ${b.name} raise heart rate, blood pressure, and seizure risk. Watch for hyperthermia and arrhythmia.`,
        tags: ["stimulant"],
      }),
    );
  }

  if (has(a, "dissociative") && has(b, "dissociative")) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-nmda-stack",
        severity: "major",
        effect: "stacked NMDA blockade",
        mechanism: "dissociative × dissociative",
        clinical:
          "Two NMDA antagonists (ketamine, analogues, DXM, PCP, ibogaine) compound dissociation, blood-pressure swings, and airway risk.",
        tags: ["nmda"],
      }),
    );
  }

  if ((has(a, "tyramine") && has(b, "maoi")) || (has(b, "tyramine") && has(a, "maoi"))) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-tyramine-maoi",
        severity: "contraindicated",
        effect: "hypertensive crisis",
        mechanism: "tyramine × MAOI",
        clinical:
          "MAO-A in gut and liver normally destroys dietary tyramine. An irreversible MAOI lets it into the circulation — aged cheese, cured meat, tap beer, soy. Headache, neck stiffness, and stroke-range blood pressure can follow in minutes.",
        tags: ["food", "maoi", "tyramine"],
      }),
    );
  }

  if (
    (has(a, "tryptophan") && has(b, "serotonergic") && !has(b, "tryptophan")) ||
    (has(b, "tryptophan") && has(a, "serotonergic") && !has(a, "tryptophan"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-htp",
        severity: has(a, "maoi") || has(b, "maoi") ? "contraindicated" : "major",
        effect: "precursor plus reuptake/MAO block",
        mechanism: "5-HTP / tryptophan × serotonergic",
        clinical:
          "A serotonin precursor stacked on an SSRI, MAOI, MDMA, or DXM is extra 5-HT, not a gentle sleep stack.",
        tags: ["food", "serotonin"],
      }),
    );
  }

  if (
    (has(a, "fat-meal") && has(b, "cannabinoid")) ||
    (has(b, "fat-meal") && has(a, "cannabinoid"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-fat-cannabinoid",
        severity: "moderate",
        effect: "↑ oral cannabinoid AUC",
        mechanism: "fed-state lymphatic absorption",
        clinical:
          "A high-fat meal can several-fold increase oral THC and CBD exposure. Same milligrams, much more parent drug in plasma.",
        tags: ["food", "absorption"],
      }),
    );
  }

  if (
    (has(a, "sodium-restriction") && b.id === "lithium") ||
    (has(b, "sodium-restriction") && a.id === "lithium")
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-lithium-low-salt",
        severity: "major",
        effect: "↑ lithium level",
        mechanism: "sodium restriction / dehydration",
        clinical:
          "Lithium is handled like sodium in the proximal tubule. A low-salt stretch, fever, or heavy sweat can push a stable dose into toxicity (tremor, confusion, diarrhea).",
        tags: ["food", "lithium"],
      }),
    );
  }

  if (
    (has(a, "sodium-load") && b.id === "lithium") ||
    (has(b, "sodium-load") && a.id === "lithium")
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-lithium-high-salt",
        severity: "moderate",
        effect: "↓ lithium level",
        mechanism: "sodium load increases lithium clearance",
        clinical: "A sudden salt load can drop lithium and lose mood coverage. Opposite of restriction.",
        tags: ["food", "lithium"],
      }),
    );
  }

  if (
    (has(a, "urinary-alkaline") && has(b, "stimulant")) ||
    (has(b, "urinary-alkaline") && has(a, "stimulant"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-alk-stim",
        severity: "major",
        effect: "↑ amphetamine exposure / duration",
        mechanism: "alkaline urine reabsorbs weak bases",
        clinical:
          "Bicarbonate and antacids trap amphetamine in the tubule. Duration and peak climb; MAOI or other stimulant stacks get worse.",
        tags: ["food", "stimulant"],
      }),
    );
  }

  if (
    (has(a, "urinary-acid") && has(b, "stimulant")) ||
    (has(b, "urinary-acid") && has(a, "stimulant"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-acid-stim",
        severity: "moderate",
        effect: "↓ amphetamine duration",
        mechanism: "acid urine speeds excretion",
        clinical:
          "Vitamin C and acidic juices ionize amphetamine and shorten its effect. Orange juice is a pH story; grapefruit is the 3A4 furanocoumarin — they are not interchangeable.",
        tags: ["food", "stimulant"],
      }),
    );
  }

  if (
    (a.id === "disulfiram" && has(b, "alcohol")) ||
    (b.id === "disulfiram" && has(a, "alcohol"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-disulfiram",
        severity: "contraindicated",
        effect: "acetaldehyde reaction",
        mechanism: "ALDH blockade × ethanol",
        clinical:
          "Disulfiram blocks aldehyde dehydrogenase. Ethanol then dumps acetaldehyde — flushing, vomiting, hypotension, sometimes shock. This is the intended deterrent, and it is not a mild hangover.",
        tags: ["alcohol", "disulfiram"],
      }),
    );
  } else if (
    (a.id === "metronidazole" && has(b, "alcohol")) ||
    (b.id === "metronidazole" && has(a, "alcohol"))
  ) {
    out.push(
      pdPair(a, b, {
        suffix: "pd-metro-etoh",
        severity: "moderate",
        effect: "possible disulfiram-like reaction",
        mechanism: "metronidazole × ethanol",
        clinical:
          "A disulfiram-like reaction with metronidazole is debated but still flagged. Flushing, nausea, and tachycardia are the watch-outs — not a green light to drink on Flagyl.",
        tags: ["alcohol"],
      }),
    );
  }

  if (
    (has(a, "hypokalemic") && (has(b, "qt-known") || has(b, "qt-possible") || b.id === "digoxin")) ||
    (has(b, "hypokalemic") && (has(a, "qt-known") || has(a, "qt-possible") || a.id === "digoxin"))
  ) {
    const dig = a.id === "digoxin" || b.id === "digoxin";
    out.push(
      pdPair(a, b, {
        suffix: "pd-hypok",
        severity: dig ? "major" : "moderate",
        effect: dig ? "digoxin toxicity via hypokalemia" : "hypokalemia plus QT load",
        mechanism: "mineralocorticoid hypokalemia",
        clinical: dig
          ? "Licorice-type hypokalemia plus digoxin is a classic arrhythmia trap. Potassium and digoxin level both belong on the desk."
          : "Glycyrrhizin drops potassium. A QT drug on a low-K background is how torsades gets invited.",
        tags: ["food", "potassium", "qt"],
      }),
    );
  }

  return out;
}

function multiDrugFindings(drugs: Drug[]): Finding[] {
  const out: Finding[] = [];
  if (drugs.length < 3) return out;

  const sero = drugs.filter((d) => has(d, "serotonergic"));
  if (sero.length >= 3) {
    out.push({
      id: "grp-sero-" + sero.map((d) => d.id).sort().join("-"),
      severity: "major",
      kind: "pd",
      drugIds: sero.map((d) => d.id),
      headline: `${sero.length}-drug serotonergic stack`,
      enzymes: [],
      effect: "escalating serotonin syndrome risk",
      mechanism: "multi-drug serotonergic load",
      clinical: `${names(sero.map((d) => d.id)).join(", ")} all increase serotonergic tone. Risk is not strictly pairwise — a third agent often turns a theoretical interaction into a clinical event.`,
      tags: ["serotonin", "stack"],
    });
  }

  const qt = drugs.filter((d) => has(d, "qt-known") || has(d, "qt-possible"));
  const known = qt.filter((d) => has(d, "qt-known"));
  if (qt.length >= 3 || known.length >= 2) {
    out.push({
      id: "grp-qt-" + qt.map((d) => d.id).sort().join("-"),
      severity: known.length >= 2 || qt.length >= 3 ? "major" : "moderate",
      kind: "pd",
      drugIds: qt.map((d) => d.id),
      headline: `QT stack · ${qt.length} agents`,
      enzymes: [],
      effect: "torsades risk",
      mechanism: "cumulative QT load",
      clinical: `${names(qt.map((d) => d.id)).join(", ")} all prolong QT. Cumulative load, hypokalemia, and hypomagnesemia compound torsades risk.`,
      tags: ["qt", "stack"],
    });
  }

  const acei = drugs.filter((d) => has(d, "acei-arb"));
  const nsaid = drugs.filter((d) => has(d, "nsaid"));
  const diu = drugs.filter((d) => has(d, "loop-thiazide"));
  if (acei.length && nsaid.length && diu.length) {
    const triple = [...acei, ...nsaid, ...diu];
    const uniq = [...new Map(triple.map((d) => [d.id, d])).values()];
    out.push({
      id: "grp-triple-" + uniq.map((d) => d.id).sort().join("-"),
      severity: "major",
      kind: "pd",
      drugIds: uniq.map((d) => d.id),
      headline: "Triple whammy · ACEI/ARB + diuretic + NSAID",
      enzymes: [],
      effect: "acute kidney injury",
      mechanism: "afferent constriction + efferent dilation + volume depletion",
      clinical:
        "The 'triple whammy' is a leading cause of community-acquired AKI. Drop the NSAID whenever possible; check creatinine after initiation.",
      tags: ["renal", "stack"],
    });
  }

  const cns = drugs.filter((d) => has(d, "cns-depressant") || has(d, "opioid"));
  if (cns.length >= 3) {
    out.push({
      id: "grp-cns-" + cns.map((d) => d.id).sort().join("-"),
      severity: "major",
      kind: "pd",
      drugIds: cns.map((d) => d.id),
      headline: `${cns.length}-drug CNS depressant stack`,
      enzymes: [],
      effect: "sedation / respiratory depression",
      mechanism: "multi-drug CNS depression",
      clinical: `${names(cns.map((d) => d.id)).join(", ")} all depress the CNS. Three or more is a high-risk combination, especially with an opioid.`,
      tags: ["cns", "stack"],
    });
  }

  return out;
}

function burdenFor(drugs: Drug[]): EnzymeBurden[] {
  return ENZYMES.map((enzyme) => {
    const substrates: string[] = [];
    const inhibitors: string[] = [];
    const inducers: string[] = [];
    for (const drug of drugs) {
      for (const role of drug.enzymes) {
        if (role.enzyme !== enzyme) continue;
        if (role.kind === "substrate") substrates.push(drug.id);
        if (role.kind === "inhibitor") inhibitors.push(drug.id);
        if (role.kind === "inducer") inducers.push(drug.id);
      }
    }
    const collisions =
      inhibitors.filter((id) => substrates.some((s) => s !== id)).length +
      inducers.filter((id) => substrates.some((s) => s !== id)).length;
    return { enzyme, substrates, inhibitors, inducers, collisions };
  }).filter((b) => b.substrates.length || b.inhibitors.length || b.inducers.length);
}

function dedupe(findings: Finding[]): Finding[] {
  const byKey = new Map<string, Finding>();
  for (const f of findings) {
    const key = f.kind === "pd"
      ? f.id
      : `${[...f.drugIds].sort().join("-")}|${f.enzymes.join(",")}|${f.tags.join(",")}`;
    const prev = byKey.get(key);
    if (!prev || SEVERITY_RANK[f.severity] > SEVERITY_RANK[prev.severity]) {
      byKey.set(key, f);
    }
  }
  return [...byKey.values()];
}

function phenotypeFindings(drugs: Drug[], phenotypes: PhenotypeMap): Finding[] {
  const out: Finding[] = [];
  for (const enzyme of PHENOTYPE_ENZYMES) {
    const pheno = phenotypes[enzyme];
    if (!pheno || pheno === "NM") continue;
    const label = METABOLIZER_LABEL[pheno];
    for (const drug of drugs) {
      const subs = substratesOf(drug, enzyme);
      if (!subs.length) continue;
      const hottest = subs.reduce((m, s) => {
        const rank = { sensitive: 3, major: 2, minor: 1 };
        return rank[s.sensitivity] > rank[m.sensitivity] ? s : m;
      });
      const ntiOrSensitive = Boolean(hottest.nti) || hottest.sensitivity === "sensitive";
      let severity: Severity = "minor";
      let effect = "";
      let mechanism = "";
      let clinical = "";
      if (pheno === "PM" || pheno === "IM") {
        const asStrength: Strength = pheno === "PM" ? "strong" : "moderate";
        severity = pkSeverity(asStrength, hottest.sensitivity, Boolean(hottest.nti), hottest.pathway, "inhibitor");
        if (hottest.pathway === "activation") {
          effect = "↓ active metabolite";
          mechanism = `${enzyme} ${label.toLowerCase()} metabolizer · blocked activation`;
          clinical = `A ${label.toLowerCase()} ${enzyme} metabolizer activates ${drug.name} poorly. Expect loss of effect (${drug.toxicityHint}). Same pattern as a ${asStrength} ${enzyme} inhibitor.`;
        } else {
          effect = "↑ exposure";
          mechanism = `${enzyme} ${label.toLowerCase()} metabolizer · reduced clearance`;
          clinical = `A ${label.toLowerCase()} ${enzyme} metabolizer clears ${drug.name} slowly${ntiOrSensitive ? " — this is a sensitive or narrow-index substrate" : ""}. Watch for ${drug.toxicityHint}.`;
        }
        if (severity === "contraindicated") severity = "major";
      } else {
        const asStrength: Strength = "strong";
        severity = pkSeverity(asStrength, hottest.sensitivity, Boolean(hottest.nti), hottest.pathway, "inducer");
        if (hottest.pathway === "activation") {
          effect = "↑ active metabolite";
          mechanism = `${enzyme} ultrarapid metabolizer · extra activation`;
          clinical = `An ultrarapid ${enzyme} metabolizer converts ${drug.name} to its active metabolite faster. Toxicity risk rises (${drug.toxicityHint}) — the classic example is codeine → morphine in CYP2D6 UM.`;
          if (hottest.sensitivity === "sensitive" || hottest.nti) severity = "contraindicated";
        } else {
          effect = "↓ exposure / shorter duration";
          mechanism = `${enzyme} ultrarapid metabolizer · accelerated clearance`;
          clinical = `An ultrarapid ${enzyme} metabolizer shortens ${drug.name} exposure. For MDMA that means a briefer parent-drug effect and more downstream metabolite; for ketamine it can mean a weaker NMDA response.`;
          severity = ntiOrSensitive ? "major" : hottest.sensitivity === "major" ? "moderate" : "minor";
        }
      }
      out.push({
        id: `geno-${enzyme}-${pheno}-${drug.id}`,
        severity,
        kind: "geno",
        drugIds: [drug.id],
        headline: `${enzyme} ${pheno} × ${drug.name}`,
        enzymes: [enzyme],
        effect,
        mechanism,
        clinical,
        tags: [enzyme, "phenotype", pheno],
      });
    }
  }
  return out;
}

function washoutFindings(drugs: Drug[]): Finding[] {
  const out: Finding[] = [];
  const ids = new Set(drugs.map((d) => d.id));
  for (const w of WASHOUT) {
    const hit = w.ids.filter((id) => ids.has(id));
    if (!hit.length) continue;
    const others = drugs.filter((d) => !w.ids.includes(d.id) && !isVirtual(d.id));
    const sero = others.some((d) => d.pd.includes("serotonergic") || d.pd.includes("stimulant") || d.pd.includes("maoi"));
    if (!others.length) continue;
    if (others.every((d) => d.kind !== "drug")) continue;
    out.push({
      id: `washout-${hit.join("-")}`,
      severity: sero ? "major" : "moderate",
      kind: "pd",
      drugIds: [...hit, ...others.map((d) => d.id)],
      headline: `${w.days}-day washout`,
      enzymes: hit.includes("fluoxetine") ? ["CYP2D6"] : [],
      effect: "lingering perpetrator effect",
      mechanism: "washout clock",
      clinical: w.label,
      tags: ["washout"],
    });
  }
  return out;
}

function alcoholHostFindings(drugs: Drug[], alcohol: HostContext["alcohol"]): Finding[] {
  if (alcohol === "off") return [];
  const apap = drugs.find((d) => d.id === "acetaminophen");
  if (!apap) return [];
  if (alcohol === "chronic") {
    return [
      {
        id: "host-etoh-chronic-apap",
        severity: "major",
        kind: "pk",
        drugIds: [apap.id],
        headline: "Chronic alcohol × acetaminophen",
        enzymes: ["CYP2E1"],
        effect: "↑ NAPQI",
        mechanism: "CYP2E1 induction + glutathione depletion",
        clinical:
          "Daily drinking induces CYP2E1, which activates acetaminophen to NAPQI, and depletes glutathione that would mop it up. Therapeutic doses can still injure. This is delayed hepatotoxicity, not drunkenness.",
        tags: ["alcohol", "2E1", "host"],
      },
    ];
  }
  return [
    {
      id: "host-etoh-acute-apap",
      severity: "moderate",
      kind: "pk",
      drugIds: [apap.id],
      headline: "Acute alcohol × acetaminophen",
      enzymes: ["CYP2E1"],
      effect: "2E1 occupancy now, rebound NAPQI later",
      mechanism: "acute 2E1 competition then induction",
      clinical:
        "During intoxication CYP2E1 is occupied, so NAPQI formation can fall. After the binge, induction plus empty glutathione stores raise risk. The dangerous window is the morning after, not the drink itself.",
      tags: ["alcohol", "2E1", "host"],
    },
  ];
}

function lingerFindings(drugs: Drug[]): Finding[] {
  const gf = drugs.find((d) => d.id === "grapefruit");
  if (!gf) return [];
  const victims = drugs.filter((d) => d.id !== "grapefruit" && !isVirtual(d.id) && substratesOf(d, "CYP3A4").length);
  if (!victims.length) return [];
  return [
    {
      id: "linger-grapefruit",
      severity: "moderate",
      kind: "pk",
      drugIds: [gf.id, ...victims.map((d) => d.id)],
      headline: "Grapefruit block lasts 24–72 h",
      enzymes: ["CYP3A4"],
      effect: "intestinal CYP3A4 still down",
      mechanism: "mechanism-based furanocoumarin inactivation",
      clinical:
        "Bergamottin destroys intestinal CYP3A4; the enzyme has to be resynthesized. Yesterday’s glass still raises oral 3A4 victims. Hepatic 3A4 (IV ketamine) is largely spared.",
      tags: ["food", "grapefruit", "linger"],
    },
  ];
}

function stackLoad(drugs: Drug[]): StackBar[] {
  const real = drugs.filter((d) => d.id !== "__smoke" && d.id !== "__etoh-chronic");
  const add = (map: Map<string, string[]>, key: string, name: string, n = 1) => {
    const cur = map.get(key) ?? [];
    for (let i = 0; i < n; i++) cur.push(name);
    map.set(key, cur);
  };
  const hits = new Map<string, string[]>();
  for (const d of real) {
    if (has(d, "serotonergic")) add(hits, "serotonin", d.name);
    if (has(d, "ssri-snri") || d.id === "mdma") add(hits, "serotonin", d.name);
    if (has(d, "maoi") || has(d, "tryptophan")) add(hits, "serotonin", d.name);
    if (has(d, "cns-depressant")) add(hits, "cns", d.name);
    if (has(d, "opioid") || has(d, "benzo-zdrug") || has(d, "alcohol")) add(hits, "cns", d.name);
    if (has(d, "ghb")) add(hits, "cns", d.name);
    if (has(d, "alpha2-agonist")) add(hits, "cns", d.name, 2);
    if (has(d, "qt-known")) add(hits, "qt", d.name, 2);
    else if (has(d, "qt-possible")) add(hits, "qt", d.name);
    if (has(d, "maoi") || has(d, "tyramine")) add(hits, "pressor", d.name, 2);
    if (has(d, "stimulant")) add(hits, "pressor", d.name);
    if (has(d, "dissociative")) add(hits, "nmda", d.name, 2);
  }
  return STACK_AXES.map((axis) => {
    const items = hits.get(axis) ?? [];
    return { axis, score: Math.min(items.length, 5), cap: 5, items: [...new Set(items)] };
  });
}

export function analyze(drugIds: string[], host?: HostContext | PhenotypeMap): Report {
  const ctx: HostContext | undefined =
    host && "smoking" in (host as HostContext)
      ? (host as HostContext)
      : host && "CYP2D6" in host
        ? {
            phenotypes: host as PhenotypeMap,
            smoking: false,
            ketamineRoute: "iv",
            cannabisRoute: "smoked",
            alcohol: "off",
          }
        : undefined;
  const base = drugIds.map((id) => DRUG_BY_ID[id]).filter(Boolean);
  const drugs = ctx ? applyHost(base, ctx) : base;
  const real = drugs.filter((d) => !isVirtual(d.id));
  const findings: Finding[] = [];
  for (let i = 0; i < drugs.length; i++) {
    for (let j = i + 1; j < drugs.length; j++) {
      const a = drugs[i];
      const b = drugs[j];
      const skipApapChronic =
        (a.id === "__etoh-chronic" && b.id === "acetaminophen") ||
        (b.id === "__etoh-chronic" && a.id === "acetaminophen");
      if (!skipApapChronic) findings.push(...pkFindings(a, b));
      findings.push(...pdFindings(a, b));
    }
  }
  findings.push(...multiDrugFindings(real));
  if (ctx) findings.push(...phenotypeFindings(real, ctx.phenotypes));
  findings.push(...washoutFindings(drugs));
  findings.push(...lingerFindings(drugs));
  if (ctx) findings.push(...alcoholHostFindings(real, ctx.alcohol));
  const uniq = dedupe(findings);
  uniq.sort((a, b) => {
    const d = SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
    if (d) return d;
    if (a.kind !== b.kind) return a.kind === "pk" ? -1 : 1;
    return a.headline.localeCompare(b.headline);
  });
  const counts: Record<Severity, number> = {
    contraindicated: 0,
    major: 0,
    moderate: 0,
    minor: 0,
  };
  for (const f of uniq) counts[f.severity] += 1;
  const highest =
    uniq.length === 0
      ? "none"
      : (["contraindicated", "major", "moderate", "minor"] as Severity[]).find(
          (s) => counts[s] > 0,
        ) ?? "none";
  return { findings: uniq, burden: burdenFor(drugs), highest, counts, stacks: stackLoad(drugs) };
}

export function enzymeIndex(): Record<
  Enzyme,
  { substrates: Drug[]; inhibitors: Drug[]; inducers: Drug[] }
> {
  const empty = () => ({ substrates: [] as Drug[], inhibitors: [] as Drug[], inducers: [] as Drug[] });
  const idx = Object.fromEntries(ENZYMES.map((e) => [e, empty()])) as Record<
    Enzyme,
    { substrates: Drug[]; inhibitors: Drug[]; inducers: Drug[] }
  >;
  for (const drug of Object.values(DRUG_BY_ID)) {
    const seen = { substrate: new Set<Enzyme>(), inhibitor: new Set<Enzyme>(), inducer: new Set<Enzyme>() };
    for (const role of drug.enzymes) {
      if (seen[role.kind].has(role.enzyme)) continue;
      seen[role.kind].add(role.enzyme);
      if (role.kind === "substrate") idx[role.enzyme].substrates.push(drug);
      if (role.kind === "inhibitor") idx[role.enzyme].inhibitors.push(drug);
      if (role.kind === "inducer") idx[role.enzyme].inducers.push(drug);
    }
  }
  for (const e of ENZYMES) {
    idx[e].substrates.sort((a, b) => a.name.localeCompare(b.name));
    idx[e].inhibitors.sort((a, b) => a.name.localeCompare(b.name));
    idx[e].inducers.sort((a, b) => a.name.localeCompare(b.name));
  }
  return idx;
}
