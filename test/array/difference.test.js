const _difference = require('lodash/difference');
const { difference } = require('../../src/functions/array');

describe('_.difference(array, [values])', () => {
  it('It Should Match Result with _.difference for number array', () => {
    const actual = difference([2, 1], [2, 3]);
    const expected = _difference([2, 1], [2, 3]);
    expect(actual).toEqual([1]);
    expect(actual).toEqual(expected);
  });

  it('It Should Match Result with _.difference for string array', () => {
    const actual = difference(['banana', 'apple', 'orange', 'carrot'], ['watermelon', 'orange'], ['carrot']);
    const expected = _difference(['banana', 'apple', 'orange', 'carrot'], ['watermelon', 'orange'], ['carrot']);
    expect(actual).toEqual(['banana', 'apple']);
    expect(actual).toEqual(expected);
  });

  it('It Should Match Result with _.difference for mixed(*) array', () => {
    const actual = difference([1, 2, 'banana', 'orange', true, false], [1, false], ['banana']);
    const expected = _difference([1, 2, 'banana', 'orange', true, false], [1, false], ['banana']);
    expect(actual).toEqual([2, 'orange', true]);
    expect(actual).toEqual(expected);
  });
});