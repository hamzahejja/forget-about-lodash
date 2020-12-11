const _concat = require('lodash/concat');
const { concat } = require('../functions/array');

describe('_.concat(array, [values]) creates a new array concatenating array with additional arrays or values', () => {
  it('It Should Match Result of _.concat', () => {
    const array = [1];
    expect(concat(array, 2, [3], [[4]])).toEqual(_concat(array, 2, [3], [[4]]));
  });
});