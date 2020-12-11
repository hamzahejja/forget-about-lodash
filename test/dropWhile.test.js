const _dropWhile = require('lodash/dropWhile');
const { dropWhile } = require('../functions/array');

const inputArr = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

describe('_.dropWhile(array, [predicate=_.identity]); drops elements from beginning while predicate is truthy', () => {
  it('It Should Match Result with _.dropWhile When Passing Function predicate', () => {
    expect(dropWhile(inputArr, function(o) { return !o.active; }))
      .toEqual(_dropWhile(inputArr, function(o) { return !o.active; }));
  });

  it('It Should Match Result with _.dropWhile When Passing Object Type Predicate', () => {
    expect(dropWhile(inputArr, { 'user': 'barney', 'active': false }))
      .toEqual(_dropWhile(inputArr, { 'user': 'barney', 'active': false }));
  });

  it('It Should Match Result with _.dropWhile When Passing Array Type Predicate', () => {
    expect(dropWhile(inputArr, ['active', false]))
      .toEqual(_dropWhile(inputArr, ['active', false]));
  });

  it('It Should Match Result with _.dropWhile With `_.property` iteratee shorthand', () => {
    expect(dropWhile(inputArr, 'active'))
      .toEqual(_dropWhile(inputArr, 'active'));
  });
});