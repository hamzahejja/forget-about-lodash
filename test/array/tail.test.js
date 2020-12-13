const _tail = require('lodash/tail');
const { tail } = require('../../src/functions/array');

describe('_.tail(array) - gets all but the first element of an array', () => {
  it('It Should Match Result with _.tail for array of primitives [pure/mixed]', () => {
    const numbersArr = [1, 2, 3];
    const strArr = ['banana', 'oranges', 'apples'];
    const mixedArr = [1, 2, 'banana', 'oranges', true, 3.5];

    expect(tail(strArr)).toEqual(_tail(strArr));
    expect(tail(mixedArr)).toEqual(_tail(mixedArr));
    expect(tail(numbersArr)).toEqual(_tail(numbersArr));
  });

  it('It Should Match Result with _.tail for array of objects/nested arrays', () => {
    const multiDimArray = [[1,2], [[3, 4,5]]];
    const objectsArray = [{age: 18, name: 'John'}, {age: 20, name: 'Jane'}];

    expect(tail(objectsArray)).toEqual(_tail(objectsArray));
    expect(tail(multiDimArray)).toEqual(_tail(multiDimArray));
  });
});
