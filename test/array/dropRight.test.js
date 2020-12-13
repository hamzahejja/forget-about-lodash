const _dropRight = require('lodash/dropRight');
const { dropRight } = require('../../src/functions/array');

const inputArr = [1, 2, 3];

describe('_.dropRight(array, [n = 1]): creates a slice of array with n elements dropped from end', () => {
  it('It Should Match Result with _.dropRight when n is not passed (n = 1)', () => {
    expect(dropRight(inputArr)).toEqual(_dropRight(inputArr));
  });

  it('It Should Match Result with _.dropRight when n < array.length', () => {
    expect(dropRight(inputArr, 2)).toEqual(_dropRight(inputArr, 2));
  });

  it('It Should Match Result with _.dropRight when n > array.length', () => {
    expect(dropRight(inputArr, 5)).toEqual(_dropRight(inputArr, 5));
  });

  it('It Should Match Result with _.dropRight when n = 0', () => {
    expect(dropRight(inputArr, 0)).toEqual(_dropRight(inputArr, 0));
  });
});
