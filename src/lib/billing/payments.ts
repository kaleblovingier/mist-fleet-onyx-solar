/** Detect inbound Venmo / Cash App / PayPal receipts that look like a desk license. */

export type PayRail = "venmo" | "cashapp" | "paypal" | "stripe" | "hunt" | "manual";

export type MailStub = {
  messageId: string;
  from: string;
  subject: string;
  date: string;
  body: string;
};

export type DetectedPay = {
  id: string;
  rail: PayRail;
  soldTo: string;
  email: string;
  amount: number;
  note: string;
  at: string;
};

/** Exact founding / plan prices. Family food transfers must not mint. */
export const LICENSE_AMOUNTS = [12, 29, 79, 99, 249] as const;

const LICENSE_SET = new Set<number>(LICENSE_AMOUNTS);

const LICENSE_NOTE =
  /first\s*pass|cyp\s*450|founding\s+license|desk\s+license|enzyme\s+atlas/i;

const REJECT_SUBJECT =
  /you spent|you withdrew|you transferred|overdue borrow|account statement|debit card|was declined|auto reload|on its way to your bank|transfer was successful|monthly paypal|pick a monthly/i;

export function isLicenseAmount(amount: number) {
  const rounded = Math.round(amount);
  return LICENSE_SET.has(rounded);
}

export function looksLikeLicenseNote(text: string) {
  return LICENSE_NOTE.test(text);
}

export function planFromAmount(amount: number, fallback: "pro" | "lab" | "life"): "pro" | "lab" | "life" {
  const n = Math.round(amount);
  if (n === 79) return "life";
  if (n === 12 || n === 99) return "pro";
  if (n === 29 || n === 249) return "lab";
  return fallback;
}

function railFromFrom(from: string): PayRail | null {
  const f = from.toLowerCase();
  if (f.includes("venmo")) return "venmo";
  if (f.includes("square.com") || f.includes("cash.app") || f.includes("cash app")) return "cashapp";
  if (f.includes("paypal")) return "paypal";
  return null;
}

function cleanName(raw: string) {
  const name = raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:amp|#39|nbsp);/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.,;:]+$/, "");
  if (!name || /^you$/i.test(name)) return "";
  if (/paid you|has sent you|payment received/i.test(name)) return "";
  return name.slice(0, 80);
}

function parseMoney(raw: string) {
  const n = Number.parseFloat(raw.replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function extractInbound(blob: string): { soldTo: string; amount: number } | null {
  const paidYou = blob.match(/([A-Za-z][\w .,'-]{1,80}?)\s+paid you\s+\$?\s*([\d,]+(?:\.\d{1,2})?)/i);
  if (paidYou) {
    const soldTo = cleanName(paidYou[1]);
    const amount = parseMoney(paidYou[2]);
    if (soldTo && amount > 0) return { soldTo, amount };
  }
  const receivedFrom = blob.match(
    /you received\s+\$?\s*([\d,]+(?:\.\d{1,2})?)\s+(?:usd\s+)?from\s+([A-Za-z][\w .,'-]{1,80})/i,
  );
  if (receivedFrom) {
    const soldTo = cleanName(receivedFrom[2]);
    const amount = parseMoney(receivedFrom[1]);
    if (soldTo && amount > 0) return { soldTo, amount };
  }
  const sentYou = blob.match(
    /([A-Za-z][\w .,'-]{1,80}?)\s+has sent you\s+\$?\s*([\d,]+(?:\.\d{1,2})?)/i,
  );
  if (sentYou) {
    const soldTo = cleanName(sentYou[1]);
    const amount = parseMoney(sentYou[2]);
    if (soldTo && amount > 0) return { soldTo, amount };
  }
  return null;
}

export function parsePaymentMail(mail: MailStub): DetectedPay | null {
  const rail = railFromFrom(mail.from);
  if (!rail) return null;
  if (REJECT_SUBJECT.test(mail.subject)) return null;
  const blob = `${mail.subject}\n${mail.body}`;
  const inbound = extractInbound(blob);
  if (!inbound) return null;
  if (!isLicenseAmount(inbound.amount) && !looksLikeLicenseNote(blob)) return null;
  if (!isLicenseAmount(inbound.amount) && inbound.amount < 12) return null;
  const noteMatch = blob.match(/(?:for|note)[:\s]+(.{2,80}?)(?:\n|\+|transaction|deposited|$)/i);
  return {
    id: mail.messageId,
    rail,
    soldTo: inbound.soldTo,
    email: "",
    amount: inbound.amount,
    note: noteMatch ? noteMatch[1].trim() : "",
    at: mail.date,
  };
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null;
}

export function flattenMail(data: unknown): MailStub[] {
  const out: MailStub[] = [];
  const seen = new Set<string>();
  const walk = (node: unknown) => {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    const r = asRecord(node);
    if (!r) return;
    const id = typeof r.message_id === "string" ? r.message_id : typeof r.id === "string" ? r.id : "";
    const subject = typeof r.subject === "string" ? r.subject : "";
    const from = typeof r.from === "string" ? r.from : "";
    const body =
      (typeof r.body_preview === "string" && r.body_preview) ||
      (typeof r.snippet === "string" && r.snippet) ||
      (typeof r.body === "string" && r.body) ||
      (typeof r.text === "string" && r.text) ||
      "";
    if (id && (subject || body) && !seen.has(id)) {
      seen.add(id);
      out.push({
        messageId: id,
        from,
        subject,
        date: typeof r.date === "string" ? r.date : "",
        body,
      });
    }
    if (r.messages) walk(r.messages);
    if (r.threads) walk(r.threads);
    if (r.data) walk(r.data);
  };
  walk(data);
  return out;
}

export const MAIL_QUERY = [
  "(from:venmo.com OR from:cash@square.com OR from:paypal.com)",
  '("paid you" OR "Payment received" OR "has sent you" OR "You received")',
  "-subject:spent -subject:withdrew -subject:statement -subject:declined -subject:transfer",
  "newer_than:180d",
].join(" ");
