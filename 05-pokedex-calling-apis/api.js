const fetchPokemon = pokemonName => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map( t => t.type.name )
      }
      return pokemon;
    })
}

// const fetchPokemon = require('./api')
// fetchPokemon('charizard')
//   .then((pokemon) => console.log(pokemon));

module.exports = fetchPokemon;




// .then((data) => console.log(data));