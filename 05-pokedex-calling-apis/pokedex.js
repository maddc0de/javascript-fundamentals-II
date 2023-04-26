const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.caughtPokemons = [];
  }
  
  catch (pokemon) {
    return fetchPokemon(pokemon)  //returning a promise
      .then((pokemonData) => {
        this.caughtPokemons.push(pokemonData);
      });
  }

  // async catch (pokemon) {
  //   const pokemonData = await fetchPokemon(pokemon)  //returning a promise 
  //   this.caughtPokemons.push(pokemonData); 
  // }

  all() {
    let pokemons = this.caughtPokemons.map ( pokemon => pokemon.name );
    return pokemons;
  }
}

module.exports = Pokedex;