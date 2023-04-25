const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.total = 0.00;
    this.discount = 0;
  }

  getTotalPrice() {
    return this.total;
  }

  addItem(candy) {
    this.basket.push(candy.getName());
    this.total += candy.getPrice();
    return `${candy.getName()} added to the basket.`
  }
  
}


// const candy = new Candy('Mars', 4.99);
// candy.getName();    // 'Mars'
// candy.getPrice();   // 4.99

// const basket = new ShoppingBasket();
// basket.getTotalPrice();   // 0

// basket.addItem(candy);

// basket.getTotalPrice(); // 4.99
// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// basket.getTotalPrice();  // 12.97


module.exports = ShoppingBasket;