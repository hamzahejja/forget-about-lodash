const _differenceWith = require('lodash/differenceWith');
const { differenceWith } = require('../../functions/array');

describe('_.differenceWith(array, [values], [comparator])', () => {
  it('It Should Match Result with _.differenceWith with Equality Comparator', () => {
    const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    const comparator = (arrVal, otherVal) => {
      if (typeof(arrVal) !== typeof(otherVal)) return false;

      return typeof(arrVal) === 'object' ?
        JSON.stringify(arrVal) === JSON.stringify(otherVal):
        arrVal === otherVal;
    }

    expect(_differenceWith(objects, [{ 'x': 1, 'y': 2 }], comparator))
      .toEqual(differenceWith(objects, [{ 'x': 1, 'y': 2 }], comparator));
  });
});
