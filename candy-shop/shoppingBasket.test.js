const ShoppingBasket = require('./Shoppingbasket');
const Candy = require('./Candy');


describe('ShoppingBasket', () => {
    it('it expects price of 0 for no items', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    })

    it('adds total price to items in basket', () => {
        const new_candy1 = new Candy('Skittles', 3.99);
        let mock_candy = new Candy('Twirl', 2.99);

        const basket = new ShoppingBasket();
        basket.addItem(new_candy1);
        basket.addItem(mock_candy);

        expect(basket.getTotalPrice()).toBe(6.98);
    })
})