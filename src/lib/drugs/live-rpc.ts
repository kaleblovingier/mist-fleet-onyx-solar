import { createServerFn } from "@tanstack/react-start";
import { DRUG_BY_ID } from "./catalog";
import { EMPTY_LIVE } from "./live";

function readString(input: unknown, key: string) {
  if (!input || typeof input !== "object") return "";
  const v = (input as Record<string, unknown>)[key];
  return typeof v === "string" ? v : "";
}

function readIds(input: unknown): string[] {
  if (!input || typeof input !== "object") return [];
  const v = (input as Record<string, unknown>).ids;
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string").slice(0, 8);
}

function miss(query: string, reason: string, ok = false) {
  return { ok, query, ...EMPTY_LIVE, reason };
}

export const lookupLiveSources = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ id: readString(input, "id") }))
  .handler(async ({ data }) => {
    const drug = DRUG_BY_ID[data.id];
    if (!drug) return miss(data.id, "Not on this shelf.");
    const { lookupLive } = await import("./live.server");
    return lookupLive(drug.id, drug.name);
  });

export const lookupRxnavInteractions = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ ids: readIds(input) }))
  .handler(async ({ data }) => {
    const { lookupInteractions } = await import("./rxnav.server");
    return lookupInteractions(data.ids);
  });

export const searchTrials = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    query: readString(input, "query"),
    ids: readIds(input),
  }))
  .handler(async ({ data }) => {
    const { searchLiveTrials } = await import("./trials.server");
    const names = data.ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean);
    const q = data.query.trim() || names.slice(0, 2).join(" ");
    return searchLiveTrials(q);
  });

export const lookupCpicGuideline = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({ name: readString(input, "name") }))
  .handler(async ({ data }) => {
    const { lookupCpic } = await import("./cpic.server");
    return lookupCpic(data.name);
  });
