const _every = require('lodash/every');
const { every } = require('../../src/functions/collection');

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

describe('every(collection, predicate)', () => {
  it('Should Return `true` if Predicate Function returns Truthy for all elements', () => {
    const collection = [true, 1, 'a'];

    expect(every(collection, function(val) { return val; })).toBe(true);

    expect(every(collection, function(val) { return val; }))
      .toEqual(_every(collection, function(val) { return val; }));
  });

  it('Should Return `false` as soon as predicate returns falsey', () => {
    let count = 0;

    expect(every([true, null, 0, 1], function(val) {
      count++;
      return val;
    })).toBe(false);

    expect(count).toBe(2);
  });

  it('Should work with `_.matches` iteratee shorthand', () => {
    const collection = [{ 'a': 0, 'b': 0 }, { 'a': 0, 'b': 1 }];
    expect(every(collection, { 'a': 0 })).toBe(true);
    expect(every(collection, { 'a': 0 })).toEqual(_every(collection, { 'a': 0 }));

    expect(every(users, { 'user': 'barney', 'active': false })).toBe(false);
    expect(every(users, { 'user': 'barney', 'active': false }))
      .toEqual(_every(users, { 'user': 'barney', 'active': false}));
  });

  it('Should work with `_.matchesProperty` iteratee shorthand', () => {
    expect(every(users, ['active', false])).toBe(true);
    expect(every(users, ['active', false])).toEqual(_every(users, ['active', false]));
  });

  it('Should work with `_.property` iteratee shorthand', () => {
    const collection = [{ 'a': 0, 'b': 1 }, { 'a': 1, 'b': 2 }];

    expect(every(collection, 'a')).toBe(false);
    expect(every(collection, 'a')).toEqual(_every(collection, 'a'));
    expect(every(collection, 'b')).toBe(true);
    expect(every(collection, 'b')).toEqual(_every(collection, 'b'));

    expect(every(users, 'active')).toBe(false);
    expect(every(users, 'active')).toEqual(_every(users, 'active'));
  });
});
