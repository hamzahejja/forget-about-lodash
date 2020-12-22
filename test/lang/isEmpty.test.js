const { isEmpty } = require('../../src/functions/lang');

const args = function() { return arguments; };

describe('isEmpty(value)', () => {
  it('Should Return `true` for `Empty` values', () => {
    const empties = [[], {}, null, undefined, false, 0, NaN, ''];
    const actual = empties.map(isEmpty);
    const expected = empties.map(() => true);

    expect(actual).toEqual(expected);

    expect(isEmpty()).toEqual(true);
    expect(isEmpty(1)).toEqual(true);
    expect(isEmpty(NaN)).toEqual(true);
    expect(isEmpty(/x/)).toEqual(true);
    expect(isEmpty(true)).toEqual(true);
    expect(isEmpty(Array.prototype.slice)).toEqual(true);

    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Map())).toEqual(true);
    expect(isEmpty(args.call(null))).toEqual(true);
    expect(isEmpty(new ArrayBuffer())).toEqual(true);
    expect(isEmpty(Buffer.from(new ArrayBuffer(0)))).toEqual(true);
  });

  it('Should Return `false` for non-empty values', () => {
    expect(isEmpty('a')).toBeFalsy();
    expect(isEmpty([1, 2, 3])).toBeFalsy();
    expect(isEmpty({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isEmpty(new Set([1, 2,3]))).toBeFalsy();
    expect(isEmpty(new ArrayBuffer(2))).toBeFalsy();
    expect(isEmpty(Buffer.alloc(1000))).toBeFalsy();
    expect(isEmpty(new Map().set('a', 1))).toBeFalsy();
    expect(isEmpty(args.call(null, 1, 2, 3))).toBeFalsy();
  });
});
