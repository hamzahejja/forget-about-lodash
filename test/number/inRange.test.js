const assert = require('assert');
const _inRange = require('lodash/inRange');
const { inRange } = require('../../src/functions/number');

it('Should Work Without Specifying `end` Parameter', () => {
  assert.strictEqual(inRange(3, 5), true);
  assert.strictEqual(inRange(3, 5), _inRange(3, 5));
  assert.strictEqual(inRange(5, 5), false);
  assert.strictEqual(inRange(5, 5), _inRange(5, 5));
  assert.strictEqual(inRange(6, 5), false);
  assert.strictEqual(inRange(6, 5), _inRange(6, 5));
});

it('Should Work With Specifying Parameters: `start` and `end`', () => {
  assert.strictEqual(inRange(1, 1, 5), true);
  assert.strictEqual(inRange(1, 1, 5), _inRange(1, 1,5));
  assert.strictEqual(inRange(3, 1, 5), true);
  assert.strictEqual(inRange(3, 1, 5), _inRange(3, 1,5));
  assert.strictEqual(inRange(0, 1, 5), false);
  assert.strictEqual(inRange(0, 1, 5), _inRange(0, 1,5));
  assert.strictEqual(inRange(5, 1, 5), false);
  assert.strictEqual(inRange(5, 1, 5), _inRange(5, 1,5));
});

it('Should Swap `start` and `end` When `start` > `end`', () => {
  assert.strictEqual(inRange(2, 5, 1), true);
  assert.strictEqual(inRange(2, 5, 1), _inRange(2, 5, 1));
  assert.strictEqual(inRange(-3, -2, -6), true);
  assert.strictEqual(inRange(-3, -2, -6), _inRange(-3, -2, -6));
});
