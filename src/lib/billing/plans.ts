export type PlanId = "free" | "pro" | "lab";
export type Interval = "month" | "year" | "life";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  lifetime?: number;
  features: string[];
  highlighted?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Desk",
    tagline: "Two-drug CYP and PD collisions.",
    monthly: 0,
    yearly: 0,
    features: [
      "Search the 350+ compound formulary (including vitamin-shop bottles)",
      "Two drugs on the desk",
      "PK / PD collision cards",
      "DrugBank, CPIC / PharmGKB, Stahl receptor cards",
      "PubMed citation shelf (curated PMIDs + live NCBI)",
      "Concentration-time sketch (two-drug AUCR, q8h accumulation)",
      "CYP occupancy heatmap",
      "Share a one-line map",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Host factors, metabolites, the atlas.",
    monthly: 12,
    yearly: 99,
    lifetime: 79,
    highlighted: true,
    features: [
      "Eight-drug regimens",
      "CYP2D6 / 2C19 / 2C9 / 2B6 phenotype",
      "Smoke, alcohol pattern, ketamine & cannabis route",
      "Age (Beers), kidney, pregnancy / lactation",
      "Metabolite maps",
      "Stack load meters",
      "Enzyme atlas",
      "Full copyable collision report",
    ],
  },
  {
    id: "lab",
    name: "Founding / Lab",
    tagline: "Lifetime desk, or a teaching seat.",
    monthly: 29,
    yearly: 249,
    lifetime: 79,
    features: [
      "Everything in Pro",
      "JSON + CSV export",
      "Founding lifetime at $79 once",
      "License receipt for the lab book",
      "Priority formulary additions",
    ],
  },
];

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<PlanId, Plan>;

export function priceFor(plan: PlanId, interval: Interval) {
  const p = PLAN_BY_ID[plan];
  if (!p || plan === "free") return 0;
  if (interval === "life") return p.lifetime ?? 79;
  return interval === "year" ? p.yearly : p.monthly;
}

export function maxDrugs(plan: PlanId) {
  return plan === "free" ? 2 : 8;
}
