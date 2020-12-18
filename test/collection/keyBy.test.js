const _keyBy = require('lodash/keyBy');
const { keyBy } = require('../../src/functions/collection');

const array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];

describe('keyBy(collection, [iteratee=_.identity])', () => {
  it('Should Work with Function iteratee `_.identity`', () => {
    const iteratee = function(o) { return String.fromCharCode(o.code); };
    expect(keyBy(array, iteratee)).toEqual(_keyBy(array, iteratee));
  });

  it('Should Work with `String` iteratee; `_.property` iteratee shorthand', () => {
    const iteratee = 'dir';
    expect(keyBy(array, iteratee)).toEqual(_keyBy(array, iteratee));
  });

  it('Should Work with An `Object` for Collection', () => {
    const object = { 'a': 6.1, 'b': 4.2, 'c': 6.3 };
    const actual = keyBy(object, Math.floor);

    expect(actual).toEqual({ '4': 4.2, '6': 6.3});
    expect(actual).toEqual(_keyBy(object, Math.floor));
  });

  it('Should Work With a `Number` as Iteratee; `_.property` shorthand', () => {
    const array = [ [1, 'a'], [2, 'a'], [2, 'b']];

    expect(keyBy(array, 0)).toEqual(_keyBy(array, 0));
    expect(keyBy(array, 1)).toEqual(_keyBy(array, 1));
  });
});
