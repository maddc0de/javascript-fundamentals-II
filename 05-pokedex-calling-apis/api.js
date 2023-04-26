const fetchPokemon = pokemonName => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const obj = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map( t => t.type.name )
      }
      return obj;
    })
}

module.exports = fetchPokemon;


// const fetchPokemon = require('./api')
// fetchPokemon('charizard')
//   .then((pokemon) => console.log(pokemon))

// .then((data) => console.log(data));