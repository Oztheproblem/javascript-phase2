const candies = require('./candies');
const searchCandies = require('./candies');

describe('searchCandies', () => {
    it('returns filtered list of candies based on search params', () => {
        expect(searchCandies('ma', 10)).toEqual['Mars', 'Maltesers'];
    })

    it('returns filtered list of candies based on search params', () => {
        expect(searchCandies('Ma', 10)).toEqual['Mars', 'Maltesers'];
    })

    it('returns filtered list of candies based on search params', () => {
        expect('sweetItem').toMatch(/[a-z]/i);
    })

    it('returns empty array if wrong inputs', () => {
        expect(searchCandies('zz', 1)).toEqual([]);
    })
});
