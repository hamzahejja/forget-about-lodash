const _flattenDepth = require('lodash/flattenDepth');
const { flattenDepth } = require('../../src/functions/array');

const inputArray = [1, [2, [3, [4]], 5]]
describe('flattenDepth(array, [depth=1]): recursively flattens array to depth times', () => {
  it('It Should Match Result with _.flattenDepth when depth = 1', () => {
    expect(flattenDepth(inputArray, 1)).toEqual(_flattenDepth(inputArray, 1));
  });

  it('It Should Match Result with _.flattenDepth when depth > 1', () => {
    expect(flattenDepth(inputArray, 2)).toEqual(_flattenDepth(inputArray, 2));
  });
});
