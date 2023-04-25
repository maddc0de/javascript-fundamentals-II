const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket class', () => {
  it("should return total price of 4.99 when a candy is added in the basket", () => {
    const basket = new ShoppingBasket();
    
    const candyDouble = {
        getName: () => 'Mars',
        getPrice: () => 4.99
    }

    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });
});
