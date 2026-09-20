import { createServerFn } from "@tanstack/react-start";
import { DRUG_BY_ID } from "./catalog";

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

export const searchPubmed = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    query: readString(input, "query"),
    ids: readIds(input),
  }))
  .handler(async ({ data }) => {
    const { searchLive } = await import("./pubmed.server");
    const names = data.ids.map((id) => DRUG_BY_ID[id]?.name).filter(Boolean);
    const q =
      data.query.trim() ||
      (names.length >= 2
        ? `${names[0]} AND ${names[1]} AND (drug interaction OR CYP OR cytochrome)`
        : names.length === 1
          ? `${names[0]} AND (drug interaction OR pharmacokinetics OR CYP)`
          : "");
    return searchLive(q);
  });
