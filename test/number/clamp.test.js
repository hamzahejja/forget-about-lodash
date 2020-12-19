const _clamp = require('lodash/clamp');
const { clamp } = require('../../src/functions/number');

describe('clamp', function() {
  it('Should Work with `upper` bound undefined', function() {
    expect(clamp(5, 3)).toBe(3);
    expect(clamp(5, 3)).toEqual(_clamp(5, 3));
    expect(clamp(1, 3)).toBe(1);
    expect(clamp(1, 3)).toEqual(_clamp(1, 3));
  });

  it('Should Clamp `Negative` Numbers When Out of Bounds/Range', function() {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(-10, -5, 5)).toEqual(_clamp(-10, -5, 5));
    expect(clamp(-10.2, -5.5, 5.5)).toBe(-5.5);
    expect(clamp(-10.2, -5.5, 5.5)).toEqual(_clamp(-10.2, -5.5, 5.5));
    expect(clamp(-Infinity, -5, 5)).toBe(-5);
    expect(clamp(-Infinity, -5, 5)).toEqual(_clamp(-Infinity, -5, 5));
  });

  it('Should Clamp `Positive` Numbers When Out of Bounds/Range', function() {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(10, -5, 5)).toEqual(_clamp(10, -5, 5));
    expect(clamp(10.6, -5.6, 5.4)).toBe(5.4);
    expect(clamp(10.6, -5.6, 5.4)).toEqual(_clamp(10.6 , -5.6, 5.4));
    expect(clamp(Infinity, -5, 5)).toBe(5);
    expect(clamp(Infinity, -5, 5)).toEqual(_clamp(Infinity, -5, 5));
  });

  it('Should Not Alter `Negative` Numbers in Range', function() {
    expect(clamp(-4, -5, 5)).toBe(-4);
    expect(clamp(-4, -5, 5)).toEqual(_clamp(-4, -5, 5));
    expect(clamp(-3, -3, 3)).toBe(-3);
    expect(clamp(-3, -3, 3)).toEqual(_clamp(-3, -3, 3));
    expect(clamp(-3.5, -3.8, 3.8)).toBe(-3.5);
    expect(clamp(-3.5, -3.8, 3.8)).toEqual(_clamp(-3.5, -3.8, 3.8));
  });

  it('Should Not Alter `Positive` Numbers in Range', function() {
    expect(clamp(1, -3, 3)).toBe(1);
    expect(clamp(1, -3, 3)).toEqual(_clamp(1, -3, 3));
    expect(clamp(3, -3, 3)).toBe(3);
    expect(clamp(3, -3, 3)).toEqual(_clamp(3, -3, 3));
    expect(clamp(1.5, -3.1, 3.2)).toBe(1.5);
    expect(clamp(1.5, -3.1, 3.2)).toEqual(_clamp(1.5, -3.1, 3.2));
  });

  it('Should Not Alter `0` in Range', function() {
    expect(clamp(0, -1, 1)).toBe(0);
    expect(1 / clamp(0, -1, 1)).toEqual(Infinity);
    expect(clamp(0, -1, 1)).toEqual(_clamp(0, -1, 1));
  });

  it('Should Clamp to `0`', function() {
    expect(clamp(-1, 0 ,1)).toBe(0);
    expect(1 / clamp(-1, 0, 1)).toEqual(Infinity);
  });

  it('Should Not Alter `-0` in Range', function() {
    expect(clamp(-0, -3, 3)).toBe(-0);
    expect(1 / clamp(-0, -3, 3)).toEqual(-Infinity);
    expect(clamp(-0, -3, 3)).toEqual(_clamp(-0, -3, 3));
  });

  it('Should Clamp to `-0`', function() {
    expect(1 / clamp(-10, -0, 5)).toEqual(-Infinity);
  });

  it('Should Return `NaN` when passed number is `NaN`', function() {
    expect(clamp(NaN, -1, 1)).toBeNaN();
  });

  it('Should Map/Treat `NaN` lower/upper bound as 0', function() {
    expect(clamp(1, -1, NaN)).toBe(0);
    expect(clamp(1, -1, NaN)).toEqual(_clamp(1, -5, NaN));
    expect(clamp(-1, NaN, 1)).toBe(0);
    expect(clamp(-1, NaN, 1)).toEqual(_clamp(-1, NaN, 1));
    expect(clamp(-1, -3, NaN)).toBe(-1);
    expect(clamp(-1, -3, NaN)).toEqual(_clamp(-1, -3, NaN));
    expect(clamp(1, NaN, 3)).toBe(1);
    expect(clamp(1, NaN, 3)).toEqual(_clamp(1, NaN, 3));
  });
});