import { useEffect, useState, Fragment } from 'react';
import CACHE from './apiCache';
import PokemonClass from './PokemonClass'

function PokemonDetail( { selectedPokemon, capturedPokemon, handleCapture, handleRelease }) {
    const [pokemonData, setPokemonData] = useState({});
    //const [capturedPokemon, setCapturedPokemon] = useState([]);
    useEffect(() => {
        if (selectedPokemon != 0)
        {
        (async () => {
            if (CACHE["/pokemon/" + selectedPokemon ] === undefined)
            {
              try {
                  fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemon)
                  .then(response => response.json() )
                  .then((data) => {
                    CACHE["/pokemon/" + selectedPokemon] = data;
                    var poke = new PokemonClass(data);
                    setPokemonData(poke);
                 })
              } catch(error) {
              console.log(error);
              }
            }
            else {
                var poke = new PokemonClass(CACHE["/pokemon/" + selectedPokemon])
                setPokemonData(poke);
            }
        })()
      }
    }, [selectedPokemon])

    useEffect(() => {
        console.log(capturedPokemon);
    }, [])
   
    return (
        <div>
        { selectedPokemon != 0 ? 
        <Fragment><img src={pokemonData.image} alt={pokemonData.name} />
            <div>
                <h3>{pokemonData.name}</h3>
                <p>{pokemonData.types}</p>
            </div>
            { capturedPokemon.map( cp => cp.id).includes(pokemonData.id) ? 
                <button onClick={() => handleRelease(pokemonData)}>Release</button>
             :  <button onClick={() => handleCapture(pokemonData)}>Capture</button>
            }
            </Fragment> : "" }
        </div>
    )
}

export default PokemonDetail