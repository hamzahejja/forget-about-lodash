const _pull = require('lodash/pull');
const { pull } = require('../../functions/array');

describe('_.pull(array, [values]): removes all given values from array using SameValueZero for equality comparisons', () => {
  it('It Should Match Result with _.pull', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    const _arrayClone = [...array];

    pull(array, 'a', 'c');
    _pull(_arrayClone, 'a', 'c');
    expect(array).toEqual(_arrayClone);
  });
});