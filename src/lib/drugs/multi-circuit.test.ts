import assert from 'node:assert/strict';
import test from 'node:test';

import { summarizeMultiCircuitFindings } from './multi-circuit.ts';

test('sums drug interactions by circuit and severity', () => {
  const summary = summarizeMultiCircuitFindings([
    { id: 'a', kind: 'pk', severity: 'contraindicated', drugIds: ['ketamine', 'grapefruit'], headline: 'x', enzymes: ['CYP3A4'], effect: 'y', mechanism: 'z', clinical: 'w', tags: [] },
    { id: 'b', kind: 'pd', severity: 'major', drugIds: ['ketamine', 'alprazolam'], headline: 'x', enzymes: ['CYP3A4'], effect: 'y', mechanism: 'z', clinical: 'w', tags: [] },
    { id: 'c', kind: 'geno', severity: 'moderate', drugIds: ['codeine', 'paroxetine'], headline: 'x', enzymes: ['CYP2D6'], effect: 'y', mechanism: 'z', clinical: 'w', tags: [] },
    { id: 'd', kind: 'pk', severity: 'minor', drugIds: ['ethanol', 'oxycodone'], headline: 'x', enzymes: ['CYP3A4'], effect: 'y', mechanism: 'z', clinical: 'w', tags: [] },
  ]);

  assert.deepEqual(summary.byCircuit, {
    pk: { count: 2, severe: 1 },
    pd: { count: 1, severe: 1 },
    geno: { count: 1, severe: 0 },
    clinic: { count: 0, severe: 0 },
  });
  assert.equal(summary.total, 4);
  assert.deepEqual(summary.topPairs.map((p) => p.id), ['ketamine+grapefruit', 'ketamine+alprazolam', 'codeine+paroxetine', 'ethanol+oxycodone']);
});
