/** Public pay / write lines — the operator asked these onto the desk. */

export const OPERATOR = {
  name: "Kaleb Lovingier",
  venmo: "kaleblovingier",
  email: "kaleblovingier@gmail.com",
  phone: "360-707-8923",
  phoneHref: "tel:+13607078923",
  social: ["@badbird", "@kaleblovingier"] as const,
  venmoUrl: "https://venmo.com/u/kaleblovingier",
  cashApp: "kaleblovingier7",
  cashAppUrl: "https://cash.app/$kaleblovingier7",
  paypal: "kaleblovingier@gmail.com",
  paypalUrl:
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=kaleblovingier%40gmail.com&item_name=FirstPass%20founding&amount=79&currency_code=USD",
  payLine:
    "Venmo @kaleblovingier · Cash App $kaleblovingier7 · PayPal kaleblovingier@gmail.com",
};

export const PAY_RAILS = [
  { id: "venmo", label: "Venmo", handle: `@${OPERATOR.venmo}`, href: OPERATOR.venmoUrl },
  { id: "cashapp", label: "Cash App", handle: `$${OPERATOR.cashApp}`, href: OPERATOR.cashAppUrl },
  { id: "paypal", label: "PayPal", handle: OPERATOR.paypal, href: OPERATOR.paypalUrl },
] as const;

export const COMMERCE = {
  founding: 79,
  payUrl: (import.meta.env.VITE_PAY_URL as string | undefined)?.trim() || OPERATOR.venmoUrl,
  operatorContact: (import.meta.env.VITE_OPERATOR_CONTACT as string | undefined)?.trim() || OPERATOR.email,
  pitch:
    "A CYP450 desk for ketamine clinics, MAT, harm-reduction staff, and pharmacy students. Two-drug collisions stay free. Host factors, the atlas, and export are licensed.",
};

export const BUYERS = [
  {
    who: "Ketamine / esketamine clinics",
    why: "Oral vs IV first-pass, benzo airway stack, 2B6 phenotype — the map they keep asking pharmacy for.",
    hook: "oral vs IV ketamine, benzo airway stacks, and 2B6 phenotype",
  },
  {
    who: "MAT and street-supply desks",
    why: "Xylazine, nitazenes, designer benzos, loperamide, naltrexone. Naloxone will not reverse an α2.",
    hook: "xylazine, nitazenes, designer benzos, and the naltrexone / loperamide traps",
  },
  {
    who: "Pharmacy students and residents",
    why: "A teaching desk they will actually open. Lab export goes in the notebook.",
    hook: "a teaching desk they will actually open, with JSON/CSV for the lab book",
  },
  {
    who: "Harm-reduction and psych NPs",
    why: "MDMA × SSRI, DXM × 2D6 PM, grapefruit × oral ketamine, lithium × mushrooms.",
    hook: "MDMA × SSRI, DXM in 2D6 PMs, grapefruit × oral ketamine",
  },
] as const;

export function payClose(price = COMMERCE.founding) {
  return `Pay $${price} — Venmo @${OPERATOR.venmo}, Cash App $${OPERATOR.cashApp}, or PayPal ${OPERATOR.email}. I send a signed key when it clears.`;
}

export function salesDm(price = COMMERCE.founding) {
  return [
    "I built FirstPass — a CYP450 desk that maps ketamine, MAT, street adulterants (xylazine, nitazenes), and the usual psych stack, including grapefruit, smoke, and metabolizer status.",
    "",
    "Free: two-drug collisions.",
    `Founding license: $${price} once. Host factors, metabolites, enzyme atlas, export. Yours on this desk.`,
    "",
    payClose(price),
    `${OPERATOR.email} · ${OPERATOR.phone}`,
    "",
    "Educational model — not a clinical system of record.",
  ].join("\n");
}

export function buyerDm(who: (typeof BUYERS)[number]["who"], price = COMMERCE.founding) {
  const buyer = BUYERS.find((b) => b.who === who);
  const hook = buyer?.hook ?? "the maps you keep asking pharmacy for";
  return [
    `I built FirstPass — a CYP450 desk for ${hook}.`,
    "",
    "Two-drug collisions stay free so you can kick the tires.",
    `Founding license is $${price} once: host factors, metabolites, enzyme atlas, JSON/CSV export.`,
    "",
    payClose(price),
    `${OPERATOR.email} · ${OPERATOR.phone}`,
    "",
    "Educational model — not a clinical system of record.",
  ].join("\n");
}

export function launchTweet(price = COMMERCE.founding) {
  return [
    "FirstPass is a CYP450 desk for ketamine clinics, MAT, and pharmacy students.",
    "",
    "Two-drug collisions stay free.",
    `Founding license $${price} once — host factors, enzyme atlas, export.`,
    `Venmo @${OPERATOR.venmo} · Cash App $${OPERATOR.cashApp} · PayPal ${OPERATOR.email}`,
    "",
    "Educational model. Not a charting system.",
  ].join("\n");
}

export function requestLicense(price = COMMERCE.founding) {
  return `I'd like a FirstPass founding license ($${price} once). I'll pay Venmo @${OPERATOR.venmo}, Cash App $${OPERATOR.cashApp}, or PayPal ${OPERATOR.email}. Send the key when it clears.`;
}

export function fulfillKey(opts: { key: string; soldTo?: string }) {
  const to = opts.soldTo?.trim();
  return [
    to ? `${to} —` : "",
    "Your FirstPass founding license is ready.",
    "",
    opts.key,
    "",
    "Open Pro, paste the key, Redeem. The desk is yours on that browser.",
    "",
    "Educational CYP map — not a clinical system of record.",
  ]
    .filter((l) => l !== "")
    .join("\n");
}

export function invoiceText(opts: {
  plan: string;
  price: number;
  pay: string;
  keyHint?: string;
}) {
  return [
    "FIRSTPASS DESK LICENSE",
    "Educational CYP450 / PD map. Not clinical decision support.",
    "",
    `From: ${OPERATOR.name}`,
    `Item: ${opts.plan}`,
    `Amount: $${opts.price}`,
    `Pay: ${opts.pay || OPERATOR.payLine}`,
    `Write: ${OPERATOR.email} · ${OPERATOR.phone}`,
    "",
    "After payment you receive a key like FP-LIFE-A1B2C3D4-9F3C2A1B.",
    "Paste it under Pro → Redeem on the desk.",
    opts.keyHint ? `Key: ${opts.keyHint}` : "",
  ]
    .filter((l) => l !== "")
    .join("\n");
}

export function tweetFor(regimen: string, highest: string, headline: string) {
  const line = `${regimen} — ${highest}`;
  const extra = headline && headline !== regimen ? `\n${headline}` : "";
  return `${line}${extra}\nMapped on FirstPass. Educational CYP desk.`.trim();
}
