import test from "node:test";
import assert from "node:assert/strict";
import { DRUG_BY_ID, searchDrugs } from "./catalog.ts";

const WAVE2_IDS = [
  "rimegepant",
  "ubrogepant",
  "atogepant",
  "zavegepant",
  "fezolinetant",
  "elinzanetant",
  "pitolisant",
  "solriamfetol",
  "tasimelteon",
  "dxm-bupropion",
  "olanzapine-samidorphan",
  "doravirine",
  "fostemsavir",
  "tecovirimat",
  "brincidofovir",
  "finerenone",
  "vericiguat",
  "mavacamten",
  "aprocitentan",
  "andexanet",
  "idarucizumab",
  "suzetrigine",
  "sotorasib",
  "adagrasib",
  "lefamulin",
  "omadacycline",
  "ibrexafungerp",
  "rezafungin",
  "retatrutide",
  "orforglipron",
  "cagrilintide",
  "setmelanotide",
  "acrylfentanyl",
  "furanylfentanyl",
  "cyclopropylfentanyl",
  "ocfentanil",
  "sufentanil",
  "alfentanil",
  "remifentanil",
  "metodesnitazene",
  "o-dsmt",
  "mdpv",
  "3-mmc",
  "n-ethylhexedrone",
  "2-fdck",
  "3-meo-pcp",
  "nifoxipam",
  "desalkylgidazepam",
  "flubrotizolam",
  "cytisine",
] as const;

test("wave2 formulary ids are present and searchable", () => {
  for (const id of WAVE2_IDS) {
    assert.ok(DRUG_BY_ID[id], `missing ${id}`);
    assert.ok(searchDrugs(id).some((d) => d.id === id), `search miss ${id}`);
  }
});

test("wave2 brand aliases resolve", () => {
  assert.equal(searchDrugs("Nurtec")[0]?.id, "rimegepant");
  assert.equal(searchDrugs("Auvelity")[0]?.id, "dxm-bupropion");
  assert.equal(searchDrugs("Lybalvi")[0]?.id, "olanzapine-samidorphan");
  assert.equal(searchDrugs("Camzyos")[0]?.id, "mavacamten");
  assert.equal(searchDrugs("Kerendia")[0]?.id, "finerenone");
  assert.equal(searchDrugs("Journavx")[0]?.id, "suzetrigine");
  assert.equal(searchDrugs("a-pvp")[0]?.id, "a-pvp"); // core shelf already has α-PVP
  assert.equal(searchDrugs("odsmt")[0]?.id, "o-dsmt");
});
