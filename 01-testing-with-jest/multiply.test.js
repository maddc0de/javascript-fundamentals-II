const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2.5 and 2', () => {
    expect(multiply(2.5, 2)).toEqual(5);
  });
});