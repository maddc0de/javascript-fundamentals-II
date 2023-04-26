const Pokedex = require('./pokedex');

describe('Pokedex class', () => {
  let pokedex;
  beforeEach(() => { pokedex = new Pokedex() });

  it('returns a pokemon after catching one pokemon', async () => {
    await pokedex.catch('pikachu');

    expect(pokedex.all()).toEqual(['pikachu']);
  })

  it('returns a list of pokemon after catching two pokemon', async () => {
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');

    expect(pokedex.all()).toEqual(['pikachu', 'jigglypuff']);
  })

  it('returns an empty array when no pokemon has been caught', () => {

    expect(pokedex.all()).toEqual([]);
  })

  // it('returns something when calling a pokemon that doesnt exist', async () => {
  //   await pokedex.catch('grrr');

  //   expect(pokedex.all()).toEqual([]);
  // })
})