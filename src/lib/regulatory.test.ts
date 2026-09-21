import assert from 'node:assert/strict';
import test from 'node:test';

import { INTENDED_USE, WARNINGS } from './regulatory.ts';

test('recreational safety uses stay educational and non-diagnostic', () => {
  const combined = `${INTENDED_USE}\n${WARNINGS.join('\n')}`;

  assert.match(combined, /recreational[- ]safety|harm-reduction/i);
  assert.match(combined, /not intended to diagnose|not intended to .*dose|dose.*not/i);
  assert.match(combined, /purity and content|drug[- ]checking|testing services/i);
  assert.match(combined, /not.*urine|urine.*not/i);
});
