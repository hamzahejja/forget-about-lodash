const _conformsTo = require('lodash/conformsTo');
const { conformsTo } = require('../../src/functions/lang');

describe('_.conformsTo(object, source): Returns true if object conforms, else false.', () => {
  it('It Should Match Result with _.conformsTo', () => {
    const object = {'a': 1, 'b': 2};

    expect(conformsTo(object, { 'b': function(n) { return n > 1; } })).toBeTruthy();
    expect(conformsTo(object, { 'b': function(n) { return n > 2; } })).toBeFalsy();

    expect(conformsTo(object, { 'b': function(n) { return n > 1; } }))
      .toEqual(_conformsTo(object, { 'b': function(n) { return n > 1; } }));

    expect(conformsTo(object, { 'b': function(n) { return n > 2; } }))
      .toEqual(_conformsTo(object, { 'b': function(n) { return n > 2; } }));
  });
});
