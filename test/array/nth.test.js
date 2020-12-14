const _nth = require('lodash/nth');
const { nth } = require('../../src/functions/array');
const array = require('../../src/functions/array');

const inputArray = [{'a': 1}, {'b': 2}, {'c': 3}, [1,2,3,4,5,6]];

describe('nth(array, [n = 0]): Returns the nth element of an array', () => {
  it('It Should Match Result with _.nth when n is not passed (n = 0)', () => {
    expect(nth(inputArray)).toEqual(_nth(inputArray));
  });

  it('It Should Match Result with _.nth when n is positive (n > 0)', () => {
    expect(nth(inputArray, 1)).toEqual(_nth(inputArray, 1));
  });

  it('It Should Match Result with _.nth when n is negative (n < 0)', () => {
    expect(nth(inputArray, -2)).toEqual(_nth(inputArray, -2));
  });
});
