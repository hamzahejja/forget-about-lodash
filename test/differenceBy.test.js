const _differenceBy = require('lodash/differenceBy');
const { differenceBy } = require('../functions/array');

describe('_.differenceBy(array, [values], [iteratee=_.identity])', () => {
  it('It Should Match Result with _.differenceBy for Function Iteratee', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))
      .toEqual(_differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
  });

  it('It Should Match Result with _.differenceBy for Property `_.property` iteratee shorthand', () => {
    expect(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'))
      .toEqual(_differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
  });
});