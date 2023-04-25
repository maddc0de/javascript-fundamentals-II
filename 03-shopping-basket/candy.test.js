const Candy = require('./candy');

describe('candy class', () => {
  it('should create a candy instance', () => {
    const candy = new Candy('Mars', 1)
    expect(candy.getName()).toBe('Mars')
    expect(candy.getPrice()).toBe(1)
  })
})