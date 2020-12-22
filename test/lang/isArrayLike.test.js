const { isArrayLike } = require('../../src/functions/lang');

describe('isArrayLike(value)', () => {
  it('Should Return `true` for Array-Like objects', () => {
    const arrayLike = [
      'foo',
      {'0': 'a', 'length': 1},
      Buffer.from(new ArrayBuffer(2)),
      [1, true, 'foo', new Date(), /x/g],
      (function() {return arguments;}).apply(null, [1, 2, 3])
    ];

    const expected = arrayLike.map(() => true);
    const actual = arrayLike.map(isArrayLike);
    expect(actual).toEqual(expected);
  });

  it('Should Return `false` for non ArrayLike values', () => {
    expect(isArrayLike(null)).toBeFalsy();
    expect(isArrayLike(undefined)).toBeFalsy();
    expect(isArrayLike(1)).toBeFalsy();
    expect(isArrayLike(/x/)).toBeFalsy();
    expect(isArrayLike(true)).toBeFalsy();
    expect(isArrayLike(new Date)).toBeFalsy();
    expect(isArrayLike(new Error)).toBeFalsy();
    expect(isArrayLike({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isArrayLike(new ArrayBuffer(2))).toBeFalsy();
    expect(isArrayLike(Array.prototype.slice)).toBeFalsy();
  });
});
