const { chunk } = require('../../src/functions/array');
const _chunk = require('lodash/chunk');

const inputArr = [1, 2, 3, 4, 5, 6, 7, 8];

describe('chunk(array, size = 1) "Array" Method', () => {
  it('It Should Match Result of _.chunk when array cannot be split evenly', () => {
    const actual = chunk(inputArr, 3);
    const expected = _chunk(inputArr, 3);
    expect(actual).toEqual(expected);
  });

  it('It Should Match Result of _.chunk with equal chunks', () => {
    const actual = chunk(inputArr, 2);
    const expected = _chunk(inputArr, 2);
    expect(actual).toEqual(expected);
  });

  it('It Should Match Result of _.chunk with default size', () => {
    const actual = chunk(inputArr);
    const expected = _chunk(inputArr);
    expect(actual).toEqual(expected);
  });
});
