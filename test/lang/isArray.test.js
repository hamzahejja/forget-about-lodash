const { isArray } = require('../../src/functions/lang');

describe('isArray(value)', () => {
  it('Should Return `true` for `Array` objects', () => {
    expect(isArray([1, true, 'hello', new Date(), /x/g])).toEqual(true);
  });

  it('Should Return `false` for non-arrays', () => {
    const args = (function() { return arguments; })();

    expect(isArray(args)).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray(/x/)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(new Date)).toBeFalsy();
    expect(isArray(new Error)).toBeFalsy();
    expect(isArray({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isArray(Array.prototype.slice)).toBeFalsy();
  });
});
