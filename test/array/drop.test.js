const _drop = require('lodash/drop');
const { drop } = require('../../src/functions/array');

const inputArr = [1, 2, 3];

describe('_drop(array, n = 1): n elements dropped from the beginning', () => {
  it('It Should Match Result with _.drop when n is not passed (defaultvalue = 1)', () => {
    expect(drop(inputArr)).toHaveLength(inputArr.length - 1);
    expect(drop(inputArr)).toEqual(_drop(inputArr));
  });

  it('It Should Match Result with _.drop for n < array.length.', () => {
    expect(drop(inputArr, 2)).toHaveLength(inputArr.length - 2);
    expect(drop(inputArr, 2)).toEqual(_drop(inputArr, 2));
  });

  it('It Should Match Result with _.drop for n > array.length and return empty array', () => {
    expect(drop(inputArr, 5)).toHaveLength(0); // Empty Array
    expect(drop(inputArr, 5)).toEqual(_drop(inputArr, 5));
  });

  it('It Should Match Result with _.drop for n = 0 (The Whole Array to be returned)', () => {
    expect(drop(inputArr, 0)).toHaveLength(inputArr.length);
    expect(drop(inputArr, 0)).toEqual(_drop(inputArr, 0));
  });
});