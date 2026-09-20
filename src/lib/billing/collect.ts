import { createServerFn } from "@tanstack/react-start";
import type { CollectRow } from "./collect.server";

function readString(input: unknown, key: string) {
  if (!input || typeof input !== "object") return "";
  const v = (input as Record<string, unknown>)[key];
  return typeof v === "string" ? v : "";
}

function readRows(input: unknown): CollectRow[] {
  if (!input || typeof input !== "object") return [];
  const raw = (input as Record<string, unknown>).rows;
  if (!Array.isArray(raw)) return [];
  return raw.filter((row): row is CollectRow => {
    if (!row || typeof row !== "object") return false;
    const r = row as Record<string, unknown>;
    return typeof r.key === "string" && typeof r.soldTo === "string";
  }) as CollectRow[];
}

export const collectLicenses = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    pin: readString(input, "pin"),
    plan: readString(input, "plan"),
    names: readString(input, "names"),
    hunt: readString(input, "hunt"),
  }))
  .handler(async ({ data }) => {
    const { collectLicenses: run } = await import("./collect.server");
    return run(data);
  });

export const draftCollected = createServerFn({ method: "POST" })
  .validator((input: unknown) => ({
    pin: readString(input, "pin"),
    rows: readRows(input),
  }))
  .handler(async ({ data }) => {
    const { draftCollected: run } = await import("./collect.server");
    return run(data);
  });
