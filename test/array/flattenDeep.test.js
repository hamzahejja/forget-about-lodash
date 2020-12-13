const _flattenDeep = require('lodash/flattenDeep');
const { flattenDeep } = require('../../src/functions/array');

describe('_.flattenDeep(array): Recursively Flattens Array of any depth', () => {
    it('It Should Match Result with Lodash _.flattenDeep and flattens array of any depth', () => {
        expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual(_flattenDeep([1, [2, [3, [4]], 5]]));
    });
});
