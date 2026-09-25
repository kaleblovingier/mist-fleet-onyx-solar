import test from "node:test";
import assert from "node:assert/strict";
import { maxDrugs } from "./plans.ts";

test("free desk allows up to five drugs", () => {
  assert.equal(maxDrugs("free"), 5);
});

test("pro desk still allows eight drugs", () => {
  assert.equal(maxDrugs("pro"), 8);
});
