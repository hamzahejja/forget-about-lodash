const _compact = require('lodash/compact');
const { compact } = require('../../functions/array');

describe('_.compact(array): creates new array with all falsey values removed.', () => {
  it('It Should Match Result with _.compact.', () => {
    compact([0, 1, false, 2, '', 3]).forEach(v => expect(v).toBeTruthy());
    expect(compact([0, 1, false, 2, '', 3])).toEqual(_compact([0, 1, false, 2, '', 3]));
  });
});
