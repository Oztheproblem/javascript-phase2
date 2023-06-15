class ShoppingBasket {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getPrice(), 0);
    }
  }
  
  module.exports = ShoppingBasket;
// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97