const { isBuffer } = require('../../src/functions/lang');

describe('isBuffer(value)', () => {
  it('Should Return `true` for `Buffer` objects', () => {
    expect(isBuffer(Buffer.from(new ArrayBuffer(2)))).toEqual(true);
  });

  it('Should Return `false` for non-buffers', () => {
    const args = (function() { return arguments; })();

    expect(isBuffer(args)).toBeFalsy();
    expect(isBuffer(1)).toBeFalsy();
    expect(isBuffer(/x/)).toBeFalsy();
    expect(isBuffer('a')).toBeFalsy();
    expect(isBuffer(true)).toBeFalsy();
    expect(isBuffer(new Date)).toBeFalsy();
    expect(isBuffer(new Error)).toBeFalsy();
    expect(isBuffer({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isBuffer(new ArrayBuffer(2))).toBeFalsy();
    expect(isBuffer(Array.prototype.slice)).toBeFalsy();
    expect(isBuffer([1, true, 'hello', new Date(), /x/g])).toBeFalsy();
  });
});
