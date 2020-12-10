const _find = require('lodash/find');
const { find } = require('../index');

const users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

describe('find(collection, predicate, startIndex = 0)', () => {
  it('It Should Match Result of _.find with Function Predicate', () => {
    const predicate = o => o.age < 40;
    expect(find(users, predicate)).toEqual(_find(users, predicate));
  });

  it('It Should Match Result of _.find with Object-Like Predicate', () => {
    const predicate = { 'age': 1, 'active': true};
    expect(find(users, predicate)).toEqual(_find(users, predicate));
  });

  it('It Should Match Result of _.find with Array-Like Predicate', () => {
    const predicate = ['active', false];
    expect(find(users, predicate)).toEqual(_find(users, predicate));
  });

  it('It Should Match Result of _.find with Value/Property Predicate', () => {
    const predicate = 'active';
    expect(find(users, predicate)).toEqual(_find(users, predicate));
  });
});
