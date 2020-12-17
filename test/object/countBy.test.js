const assert = require('assert');
const _countBy = require('lodash/countBy');
const { countBy } = require('../../src/functions/object');

describe('countBy(collection, iteratee)', () => {
  it('Should Transform Keys with Function `_.identity` Iteratee', () => {
    const array = [6.1, 4.2, 6.3];
    const actual = countBy(array, Math.floor);

    assert.deepStrictEqual(actual, {'4': 1, '6': 2});
    assert.deepStrictEqual(actual, _countBy(array, Math.floor));
  });

  it('Should Transform Keys with `_.property` Shorthands', () => {
    const array = ['one', 'two', 'three'];
    const actual = countBy(array, 'length');

    assert.deepStrictEqual(actual, {'3': 2, '5': 1});
    assert.deepStrictEqual(actual, _countBy(array, 'length'));
  });

  it('Should Work and Transform Keys with Number for `iteratee`', function() {
    const array = [
      [1, 'a'],
      [2, 'a'],
      [2, 'b']
    ];

    assert.deepStrictEqual(countBy(array, 0), { '1': 1, '2': 2 });
    assert.deepStrictEqual(countBy(array, 0), _countBy(array, 0));

    assert.deepStrictEqual(countBy(array, 1), { 'a': 2, 'b': 1 });
    assert.deepStrictEqual(countBy(array, 1), _countBy(array, 1));
  });
});
