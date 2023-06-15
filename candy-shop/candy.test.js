const Candy = require('./Candy');

describe('Candy', () => {
    it('returns name of Candy', () => {
        const candy = new Candy('Twirl', 2.99);
        expect(candy.getName()).toBe('Twirl');
    })

    it('returns price of Candy', () => {
        const candy = new Candy('Twirl', 2.99);
        expect(candy.getPrice()).toBe(2.99);
    })

});