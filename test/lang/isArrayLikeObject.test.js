const { isArrayLikeObject } = require('../../src/functions/lang');

describe('isArrayLikeObject(value)', () => {
  it('Should Return `true` for Array-Like objects', () => {
    const arrayLikeObjects = [
      {'0': 'a', 'length': 1},
      [1, true, 'foo', new Date(), /x/g],
      (function() {return arguments;}).apply(null, [1, 2, 3])
    ];

    const expected = arrayLikeObjects.map(() => true);
    const actual = arrayLikeObjects.map(isArrayLikeObject);
    expect(actual).toEqual(expected);
  });

  it('Should Return `false` for Non ArrayLikeObject values', () => {
    expect(isArrayLikeObject(1)).toBeFalsy();
    expect(isArrayLikeObject(/x/)).toBeFalsy();
    expect(isArrayLikeObject(true)).toBeFalsy();
    expect(isArrayLikeObject(new Date)).toBeFalsy();
    expect(isArrayLikeObject(new Error)).toBeFalsy();
    expect(isArrayLikeObject({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isArrayLikeObject(new ArrayBuffer(2))).toBeFalsy();
    expect(isArrayLikeObject(Array.prototype.slice)).toBeFalsy();
  });
});
