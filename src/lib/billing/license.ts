import { createServerFn } from "@tanstack/react-start";

function readString(input: unknown, key: string) {
  if (!input || typeof input !== "object") return "";
  const v = (input as Record<string, unknown>)[key];
  return typeof v === "string" ? v : "";
}

export const redeemLicense = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ key: readString(input, "key") }))
  .handler(async ({ data }) => {
    const { verifyKey } = await import("./license.server");
    if (!data.key.trim()) return { ok: false as const, reason: "Paste a key." };
    return verifyKey(data.key);
  });

export const mintLicenseKey = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    pin: readString(input, "pin"),
    plan: readString(input, "plan"),
    soldTo: readString(input, "soldTo"),
  }))
  .handler(async ({ data }) => {
    const { mintKey, mintKeyFromNote, pinOk, defaultPinSet, parseIssuedPlan } = await import("./license.server");
    if (!pinOk(data.pin)) {
      return { ok: false as const, reason: "Operator PIN is wrong." };
    }
    const plan = parseIssuedPlan(data.plan);
    const soldTo = data.soldTo.trim();
    return {
      ok: true as const,
      key: soldTo ? mintKeyFromNote(plan, soldTo) : mintKey(plan),
      plan,
      defaultPin: defaultPinSet(),
    };
  });

export const mintLicenseBatch = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    pin: readString(input, "pin"),
    plan: readString(input, "plan"),
    names: readString(input, "names"),
  }))
  .handler(async ({ data }) => {
    const { mintKeyedRows, parseIssuedPlan, parseNameList, pinOk, defaultPinSet } = await import(
      "./license.server"
    );
    if (!pinOk(data.pin)) {
      return { ok: false as const, reason: "Operator PIN is wrong." };
    }
    const names = parseNameList(data.names);
    if (!names.length) {
      return { ok: false as const, reason: "Add at least one name — one per line." };
    }
    const plan = parseIssuedPlan(data.plan);
    return {
      ok: true as const,
      plan,
      keys: mintKeyedRows(plan, names),
      defaultPin: defaultPinSet(),
    };
  });
