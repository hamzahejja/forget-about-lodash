const { isArguments } = require('../../src/functions/lang');

describe('isArguments(value)', () => {
  it('Should Return `true` for `Arguments` objects', () => {
    const toArgs = function() { return arguments; };
    expect(isArguments(toArgs())).toEqual(true)
    expect(isArguments(toArgs.call(null, 1, 2, 3))).toEqual(true);
    expect(isArguments(toArgs.apply(undefined, [1, 2, 3]))).toEqual(true);
    expect(isArguments(function(){ 'use strict'; return arguments; }(1, 2, 3))).toEqual(true);
  });

  it('Should Return `false` for non `Arguments` objects', () => {
    expect(isArguments(1)).toBeFalsy();
    expect(isArguments(/x/)).toBeFalsy();
    expect(isArguments('a')).toBeFalsy();
    expect(isArguments(true)).toBeFalsy();
    expect(isArguments(new Date)).toBeFalsy();
    expect(isArguments(new Error)).toBeFalsy();
    expect(isArguments([1, 2, 3])).toBeFalsy();
    expect(isArguments({ 'a': 1, 'b': 2})).toBeFalsy();
  });
});
