/** Live PsychonautWiki MediaWiki extracts + TripSit combo. Server-only. */

import { DRUG_BY_ID } from "./catalog";
import {
  PW_TITLE,
  TRIPSIT_NAME,
  pwHref,
  pwTitleFor,
  sanitizeWiki,
  type LiveCombo,
  type PsychonautPack,
  type WikiPage,
} from "./psychonaut";

export type { LiveCombo, PsychonautPack, WikiPage };

const cache = new Map<string, { at: number; value: unknown }>();
const TTL = 30 * 60 * 1000;
const UA = "FirstPass/1.5 (educational CDS; kaleblovingier@gmail.com)";

function cached<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return Promise.resolve(hit.value as T);
  return fn().then((value) => {
    cache.set(key, { at: Date.now(), value });
    return value;
  });
}

async function getJson(url: string, ms = 8000): Promise<unknown> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { Accept: "application/json", "User-Agent": UA },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

interface MwPage {
  title?: string;
  extract?: string;
  missing?: boolean;
  fullurl?: string;
}

async function fetchWiki(id: string): Promise<WikiPage> {
  const drug = DRUG_BY_ID[id];
  const name = drug?.name ?? id;
  const wikiTitle = PW_TITLE[id] ?? pwTitleFor(id);
  if (!wikiTitle) {
    return { id, name, wikiTitle: "", url: "", extract: "", stripped: false, reason: "No PsychonautWiki title mapped." };
  }
  const url = `https://psychonautwiki.org/w/api.php?action=query&prop=extracts|info&exintro=1&explaintext=1&inprop=url&redirects=1&format=json&titles=${encodeURIComponent(wikiTitle)}`;
  try {
    const json = (await cached(`pw:${wikiTitle}`, () => getJson(url))) as {
      query?: { pages?: Record<string, MwPage> };
    };
    const page = Object.values(json.query?.pages ?? {})[0];
    if (!page || page.missing || !page.extract) {
      return {
        id,
        name,
        wikiTitle,
        url: pwHref(wikiTitle),
        extract: "",
        stripped: false,
        reason: "Wiki page had no intro extract.",
      };
    }
    const clean = sanitizeWiki(page.extract);
    return {
      id,
      name,
      wikiTitle: page.title ?? wikiTitle,
      url: page.fullurl ?? pwHref(wikiTitle),
      extract: clean.text,
      stripped: clean.stripped,
      reason: clean.text ? undefined : "Intro was only dosage / route — stripped. Open the wiki.",
    };
  } catch {
    return {
      id,
      name,
      wikiTitle,
      url: pwHref(wikiTitle),
      extract: "",
      stripped: false,
      reason: "PsychonautWiki did not answer.",
    };
  }
}

function tripsitName(id: string): string | null {
  if (TRIPSIT_NAME[id]) return TRIPSIT_NAME[id];
  const d = DRUG_BY_ID[id];
  if (!d) return null;
  if (d.pd.includes("benzo-zdrug")) return "Benzodiazepines";
  if (d.pd.includes("opioid") || d.pd.includes("partial-opioid")) return "Opioids";
  if (d.pd.includes("maoi")) return "MAOIs";
  if (d.pd.includes("ssri-snri")) return "SSRIs";
  return null;
}

async function fetchCombo(a: string, b: string): Promise<LiveCombo | null> {
  const na = tripsitName(a);
  const nb = tripsitName(b);
  if (!na || !nb || na === nb) return null;
  const url = `https://tripbot.tripsit.me/api/tripsit/getInteraction/${encodeURIComponent(na)}/${encodeURIComponent(nb)}`;
  try {
    const json = (await cached(`ts:${na}|${nb}`, () => getJson(url, 6000))) as {
      err?: unknown;
      error?: { err?: boolean; msg?: string };
      success?: { status?: string; result?: string; note?: string; definition?: string };
      data?: Array<{
        status?: string;
        result?: string;
        note?: string;
        definition?: string;
      }>;
    };
    if (json.err && json.err !== null) {
      return {
        a: na,
        b: nb,
        status: "",
        note: "",
        source: "TripSit",
        ok: false,
        reason: json.error?.msg || "TripSit had no row for this pair.",
      };
    }
    const row = json.data?.[0] ?? json.success ?? {};
    const status = String(row.status ?? row.result ?? "").trim();
    const note = sanitizeWiki(String(row.note ?? row.definition ?? "")).text;
    if (!status && !note) {
      return { a: na, b: nb, status: "", note: "", source: "TripSit", ok: false, reason: "Empty combo row." };
    }
    return { a: na, b: nb, status, note, source: "TripSit combo API", ok: true };
  } catch {
    return {
      a: na,
      b: nb,
      status: "",
      note: "",
      source: "TripSit",
      ok: false,
      reason: "TripSit did not answer. Local chart still stands.",
    };
  }
}

export async function lookupPsychonaut(ids: string[]): Promise<PsychonautPack> {
  const unique = [...new Set(ids.filter((id) => DRUG_BY_ID[id]))].slice(0, 2);
  const pages = await Promise.all(unique.map(fetchWiki));
  const combo = unique.length === 2 ? await fetchCombo(unique[0], unique[1]) : null;
  const ok = pages.some((p) => Boolean(p.extract)) || Boolean(combo?.ok);
  return { ok, pages, combo };
}
