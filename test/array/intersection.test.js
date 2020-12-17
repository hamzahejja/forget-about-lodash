const assert = require('assert');
const _intersection = require('lodash/intersection');
const { intersection } = require('../../src/functions/array');

describe('intersection([arrays])', () => {
  describe('Should Match Result with _.intersection', () => {
    it('Should Return the Intersection of Two Arrays', () => {
      assert.deepStrictEqual(intersection([2, 1], [2, 3]), _intersection([2, 1], [2, 3]));
    });

    it('Should Return the Intersection of Multiple Arrays', () => {
      assert.deepStrictEqual(
        intersection([2, 1, 2, 3], [3, 4], [3, 2]),
        _intersection([2, 1, 2, 3], [3, 4], [3, 2])
      );
    });

    it('Should Work With a Single Array', function() {
      const actual = intersection([1, 1, 3, 2, 2]);

      assert.deepStrictEqual(actual, [1, 3, 2]);
      assert.deepStrictEqual(actual, _intersection([1, 1, 3, 2, 2]))
    });

    it('Should Return an Array of Only Unique Values', () => {
      const actual = intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]);

      assert.deepStrictEqual(actual, [1, 2]);
      assert.deepStrictEqual(actual, _intersection([1, 1, 3, 2, 2], [5, 2, 2, 1, 4], [2, 1, 1]));
    });

    it('Should Match `NaN`', () => {
      const actual = intersection([1, NaN, 3], [NaN, 5, NaN]);

      assert.deepStrictEqual(actual, [NaN]);
      assert.deepStrictEqual(actual, _intersection([1, NaN, 3], [NaN, 5, NaN]));
    })
  });
});