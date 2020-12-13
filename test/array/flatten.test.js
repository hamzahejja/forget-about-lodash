const _flatten = require('lodash/flatten');
const { flatten } = require('../../src/functions/array');

describe('_.flatten(array): Flattens array a single level deep', () => {
    it('It Should Match Result with _.flatten', () => {
        expect(flatten([1, [2, [3, [4]], 5]])).toEqual(_flatten([1, [2, [3, [4]], 5]]));
    });
});
