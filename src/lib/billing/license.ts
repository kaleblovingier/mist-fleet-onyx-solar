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
  }))
  .handler(async ({ data }) => {
    const { mintKey, pinOk, defaultPinSet } = await import("./license.server");
    if (!pinOk(data.pin)) {
      return { ok: false as const, reason: "Operator PIN is wrong." };
    }
    const plan = data.plan === "lab" || data.plan === "life" || data.plan === "pro" ? data.plan : "life";
    return {
      ok: true as const,
      key: mintKey(plan),
      plan,
      defaultPin: defaultPinSet(),
    };
  });
