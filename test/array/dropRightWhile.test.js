const _dropRightWhile = require('lodash/dropRightWhile');
const { dropRightWhile } = require('../../src/functions/array');

const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

describe('_.dropRightWhile(array, [predicate=_.identity])', () => {
  it('It Should Match Result with _.dropRightWhile with Function Predicate `_.matches` iteratee', () => {
    expect(dropRightWhile(users, function(o) { return !o.active; }))
      .toEqual(_dropRightWhile(users, function(o) { return !o.active; }));
  });

  it('It Should Match Result with _.dropRightWhile with Object-Like Predicate `_.matches` iteratee', () => {
    expect(dropRightWhile(users, { 'user': 'pebbles', 'active': false }))
      .toEqual(_dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
  });

  it('It Should Match Result with _.dropRightWhile with Array-Like Predicate `_.matches` iteratee', () => {
    expect(dropRightWhile(users, ['active', false]))
      .toEqual(_dropRightWhile(users, ['active', false]));
  });

  it('It Should Match Result with _.dropRightWhile with Object-Like Predicate `_.matches` iteratee', () => {
    expect(dropRightWhile(users, 'active'))
      .toEqual(_dropRightWhile(users, 'active'));
  });
});
