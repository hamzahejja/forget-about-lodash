const _get = require('lodash/get');
const { get } = require('../functions/object');

describe('_.get(obj, path, defaultValue) Test Suite', () => {
  it('It Should Match Result with _.get for String path', () => {
    const path = 'a[0].b.c';
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, path)).toEqual(_get(object, path));
  });

  it('It Should Match Result with _.get for Array path', () => {
    const path = ['a', '0', 'b', 'c'];
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, path)).toEqual(_get(object, path));
  });

  it('It Should Match Result with _.get for undefined and return default value passed', () => {
    const path = 'a.b.c';
    const defaultValue = 'default';
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, path, defaultValue)).toEqual(_get(object, path, defaultValue));
  });
});