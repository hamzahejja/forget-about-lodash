const { isBoolean } = require('../../src/functions/lang');

describe('isBoolean(value)', () => {
  it('Should Return `true` for `Boolean`', () => {
    const booleans = [true, false, Object(true), Object(false)];
    const actual = booleans.map(isBoolean);
    const expected = booleans.map(() => true);

    expect(actual).toEqual(expected);
  });

  it('Should Return `false` for non booleans', () => {
    const toArgs = function() { return arguments; };

    expect(isBoolean(1)).toBeFalsy();
    expect(isBoolean(/x/)).toBeFalsy();
    expect(isBoolean('a')).toBeFalsy();
    expect(isBoolean(new Date)).toBeFalsy();
    expect(isBoolean(new Error)).toBeFalsy();
    expect(isBoolean([1, 2, 3])).toBeFalsy();
    expect(isBoolean({ 'a': 1, 'b': 2})).toBeFalsy();
    expect(isBoolean(Array.prototype.slice)).toBeFalsy();
    expect(isBoolean(toArgs.apply(null, [1, 2, 3]))).toBeFalsy();
  });
});
