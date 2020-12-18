const _invokeMap = require('lodash/invokeMap');
const { invokeMap } = require('../../src/functions/collection');

describe('invokeMap(collection, path, [args])', () => {
  it('Should Work When The Path of Method to Invoke is `String`', () => {
    const collection = ['a', 'b', 'c'];
    expect(invokeMap(collection, 'toUpperCase')).toEqual(_invokeMap(collection, 'toUpperCase'));

    const arrays = [[5, 1, 7], [3, 1, 2]];
    expect(invokeMap(arrays, 'sort')).toEqual(_invokeMap(arrays, 'sort'));
  });

  it('Should Work When The Path is `Function` to be invoked per iteration', () => {
    const array = ['a', 'b', 'c'];
    const path = function(left, right) { return `${left}${this.toUpperCase()}${right}`; };
    expect(invokeMap(array, path, '(', ')')).toEqual(_invokeMap(array, path, '(', ')'));

    expect(invokeMap([123, 456], String.prototype.split, ''))
      .toEqual(_invokeMap([123, 456], String.prototype.split, ''));
  });

  it('Should Support Invoking With Arguments', () => {
    const array = [ function() { return Array.prototype.slice.call(arguments); }];

    expect(invokeMap(array, 'call', null, 'a', 'b', 'c'))
      .toEqual(_invokeMap(array, 'call', null, 'a', 'b', 'c'));
  });

  it('Should Work With An Object for Collection', () => {
    const collection = {'a': 1, 'b': 2, 'c': 3};
    const actual = invokeMap(collection, 'toFixed', 1);
    const expected = _invokeMap(collection, 'toFixed', 1);

    expect(actual).toEqual(['1.0', '2.0', '3.0']);
    expect(actual).toEqual(expected);
  });

  it('Should Treat `Number` values for `collection` argument as empty collection', () => {
    expect(invokeMap(1)).toEqual([]);
  });
});
