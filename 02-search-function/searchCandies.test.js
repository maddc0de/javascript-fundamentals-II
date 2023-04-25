const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('should return "Mars" and "Maltesers" when given "Ma" and 10 as arguments', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('should return "Skittles" and "Skittles" when given "S" and 4 as arguments', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});