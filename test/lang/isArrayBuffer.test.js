const { isArrayBuffer } = require('../../src/functions/lang');

describe('isArrayBuffer(value)', () => {
  it('Should Return `true` for `ArrayBuffer` objects', () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toEqual(true);
  });

  it('Should Return `false` for non Array Buffer', () => {
    const args = (function() { return arguments; })();

    expect(isArrayBuffer(args)).toBeFalsy();
    expect(isArrayBuffer(1)).toBeFalsy();
    expect(isArrayBuffer(/x/)).toBeFalsy();
    expect(isArrayBuffer('a')).toBeFalsy();
    expect(isArrayBuffer(true)).toBeFalsy();
    expect(isArrayBuffer(new Date)).toBeFalsy();
    expect(isArrayBuffer(new Error)).toBeFalsy();
    expect(isArrayBuffer({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isArrayBuffer(Array.prototype.slice)).toBeFalsy();
    expect(isArrayBuffer([1, true, 'hello', new Date(), /x/g])).toBeFalsy();
  });
});
