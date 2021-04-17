import {useEffect, useState} from 'react';

function PokemonList() {
    const [pokemon, setState] = useState({
        species: [],
        loading: false,
        fetched: false
    });
  
    var gotAllPokemon = function(pokeArray) {
      setState({
        species: pokeArray,
        loading: true,
        fetched: true
      })
    }
  
    useEffect(() => {
      (async () => {
        
          try {
              setState({ loading: true});
              fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
              .then(response => { return response.json() })
              .then((data) => {
                var pokeDone = 0;
                let pokeArray = []
                for (let i = 0; i <data.results.length; i++) {
                    const pokeSpecies = data.results[i];
                    fetch(pokeSpecies.url)
                    .then(response => { return response.json() })
                    .then((pokeData) => {
                        const pokeObj = {
                            name: pokeSpecies.name,
                            image: pokeData.sprites.front_default
                        }
                        pokeArray.push(pokeObj)
                        pokeDone++;
                        if (pokeDone === data.results.length) {
                          gotAllPokemon(pokeArray);
                        }
                    })
                }
              })
          } catch(error) {
          console.log(error);
        }
      })()
    }, [])
    
    return (
        <div>
            {pokemon.fetched ? pokemon.species.map((p, idx) => { return <div key={idx}><p>{p.name}</p><img src={p.image} /></div>}) : "Loading..."}
        </div>
    )
}

export default PokemonList