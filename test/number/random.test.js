const { random } = require('../../src/functions/number');

describe('random([lower=0], [upper=1], [floating=false]', () => {
  it('Should Return Integer of `0` or `1`  When No Arguments are given/passed', () => {
    const actual = random();
    const valuesExpected = [0, 1];

    expect(actual % 1).toEqual(0);
    expect(valuesExpected.includes(actual)).toBeTruthy();
  });

  it('Should Generate Random Integer Between Inclusive Integer `lower`, `upper` bounds', () => {
    const actual = random(0, 5);

    expect(actual % 1).toEqual(0);
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(5);
  });

  it('Should Generate Random Int When Only 1-Argument is passed `upper`', () => {
    const actual = random(5);

    expect(actual % 1).toEqual(0);
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(5);
  });

  it('Should Genearate a Floating-Point Between `lower` and `upper` with one of them being Floating-Point', () => {
    const actual = random(1.2, 5.2);

    expect(actual % 1).toBeTruthy();
    expect(actual).toBeGreaterThanOrEqual(1.2);
    expect(actual).toBeLessThanOrEqual(5.2);
  });

  it('Should Genearate a Floating-Point When `floating` is true', () => {
    let actual = random(true);
    expect(actual % 1).toBeTruthy();
    expect(actual >= 0 && actual <= 1).toBeTruthy();

    actual = random(2, true);
    expect(actual % 1).toBeTruthy();
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(2);

    actual = random(2, 5, true);
    expect(actual % 1).toBeTruthy();
    expect(actual).toBeGreaterThanOrEqual(2);
    expect(actual).toBeLessThanOrEqual(5);
  });

  it('Should Handle Mapping `NaN`, `Infinity` and Loose Integers to Finite Numbers', () => {
    expect(random(NaN, NaN)).toEqual(0);
    expect(random('1', '1')).toEqual(1);
    expect(random(Infinity, Infinity)).toEqual(Number.MAX_VALUE);
  });
});
