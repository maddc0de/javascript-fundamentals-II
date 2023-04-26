const fetchPokemon = require('./api')

// describe('fetchPokemon', () => {
//   it('returns a promise of the useful pokemon data', (done) => {
//     fetchPokemon('charizard')
//       .then((pokemon) => {
//         expect(pokemon.id).toEqual(6);
//         done();
//       });
//   });
// });

describe('fetchPokemon', () => {
  it('Can fetch the data for Charizard', async () => {
    const pokemon = await fetchPokemon('charizard');
     // console.log(fetchPokemon('charizard'));  -> prints Promise { <pending> }
    expect(pokemon.id).toEqual(6);
  });
});