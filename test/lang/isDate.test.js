const { isDate } = require('../../src/functions/lang');

describe('isDate(value)', () => {
  it('Should Return `true` for `Date` objects', () => {
    expect(isDate(new Date())).toEqual(true);
  });

  it('Should Return `false` for non-date', () => {
    const args = (function() { return arguments; })();

    expect(isDate(1)).toBeFalsy();
    expect(isDate(/x/)).toBeFalsy();
    expect(isDate('a')).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(args)).toBeFalsy();
    expect(isDate([1, 2, 3])).toBeFalsy();
    expect(isDate(new Error)).toBeFalsy();
    expect(isDate({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isDate(new ArrayBuffer(2))).toBeFalsy();
    expect(isDate(Array.prototype.slice)).toBeFalsy();
    expect(isDate(Buffer.from(new ArrayBuffer(2)))).toBeFalsy();
  });
});
