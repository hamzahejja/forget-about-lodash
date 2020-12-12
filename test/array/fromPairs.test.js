const _fromPairs = require('lodash/fromPairs');
const { fromPairs } = require('../../functions/array');

describe('_.fromPairs(pairs)', () => {
  it('It Should Match Result with _.fromPairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    expect(fromPairs(pairs)).toEqual(_fromPairs(pairs));
  });

  it('It Should Match Result with _.fromPairs with complex structure pairs', () => {
    const pairs = [
      ['address', {street: 'x', zipCode: '21244'}],
      ['phoneNumbers', ['+999-111111', '+1-123-4567']],
      ['emailAddress', 'john.doe@gm.com'],
      ['isFullTimeEmployee', true],
      ['hourlyRate', 12.5]
    ];

    expect(fromPairs(pairs)).toEqual(_fromPairs(pairs));
  });
});