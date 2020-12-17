const _groupBy = require('lodash/groupBy');
const { groupBy } = require('../../src/functions/object');

describe('groupBy(collection, [iteratee=_.identity]', () => {
  it('Should Transform Keys by function `_.idetnity` iteratee', () => {
    const array = [6.1, 4.2, 6.3];
    expect(groupBy(array, Math.floor)).toEqual(_groupBy(array, Math.floor));
  });

  it('should work with an object for `collection`', function() {
    const actual = groupBy({ 'a': 6.1, 'b': 4.2, 'c': 6.3 }, Math.floor);

    expect(actual).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
    expect(actual).toEqual(_groupBy({ 'a': 6.1, 'b': 4.2, 'c': 6.3 }, Math.floor));
  });

  it('Should Transform Keys with `_.property` shorthands', () => {
    const array = ['one', 'two', 'three'];
    expect(groupBy(array, 'length')).toEqual(_groupBy(array, 'length'));
  });

  it('Should Transform Keys with Number(Index) as`iteratee`', function() {
    const array = [
      [1, 'a'],
      [2, 'a'],
      [2, 'b']
    ];

    expect(groupBy(array, 0)).toEqual({ '1': [[1, 'a']], '2': [[2, 'a'], [2, 'b']] });
    expect(groupBy(array, 1)).toEqual({ 'a': [[1, 'a'], [2, 'a']], 'b': [[2, 'b']] });
    expect(groupBy(array, 0)).toEqual(_groupBy(array, 0));
    expect(groupBy(array, 1)).toEqual(_groupBy(array, 1));
  });
});
