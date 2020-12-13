const _uniq = require('lodash/uniq');
const { uniq } = require('../../src/functions/array');

describe('_.uniq(array)', () => {
  it('It Should Match _.uniq and Give Unique/Duplicate-Free Array Elements', () => {
    expect(uniq([2, 1, 2])).toEqual(_uniq([2, 1, 2]));
  });
});