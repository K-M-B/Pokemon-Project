import { useEffect, useState } from 'react';
import CACHE from './apiCache';

function PokemonDetail( {selectedPokemon }) {
    const [pokemonData, setPokemonData] = useState({});
    useEffect(() => {
        if (selectedPokemon != 0)
        {
        (async () => {
            if (CACHE["/pokemon/" + selectedPokemon ] === undefined)
            {
              try {
                  fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemon)
                  .then(response => { return response.json() })
                  .then((data) => {
                    CACHE["/pokemon/" + selectedPokemon] = data;
                    setPokemonData(data);
                 })
              } catch(error) {
              console.log(error);
              }
          }
        })(console.log(selectedPokemon))
      }
    }, [selectedPokemon])


    return (
        <div>
        { pokemonData != {} ? pokemonData.id : "" }
        </div>
    )
}

export default PokemonDetail