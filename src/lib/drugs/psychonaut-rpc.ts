import { createServerFn } from "@tanstack/react-start";
import { DRUG_BY_ID } from "./catalog";

function readIds(input: unknown): string[] {
  if (!input || typeof input !== "object") return [];
  const v = (input as Record<string, unknown>).ids;
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string" && Boolean(DRUG_BY_ID[x])).slice(0, 2);
}

export const lookupPsychonaut = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ ids: readIds(input) }))
  .handler(async ({ data }) => {
    const { lookupPsychonaut: pull } = await import("./psychonaut.server");
    return pull(data.ids);
  });
