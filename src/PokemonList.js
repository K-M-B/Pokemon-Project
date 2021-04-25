import {useEffect, useState} from 'react';
import PokemonCard from './PokemonCard'
import styles from './PokemonList.module.css'
import PokemonDetail from './PokemonDetail'
import { Link } from 'react-router-dom';



function PokemonList({ handleClick }) {
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
                let pokeArray = []
                for (let i = 0; i <data.results.length; i++) {
                    var pokeDone = 0;
                    const pokeSpecies = data.results[i];
                    fetch(pokeSpecies.url)
                    .then(response => { return response.json() })
                    .then((pokeData) => {
                        const pokeObj = {
                            name: pokeSpecies.name,
                            id: i + 1,
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
        <div className={styles.grid}>
            {pokemon.fetched ? pokemon.species.map((p, idx) => { return <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} handleClick={handleClick} /> }) : "Loading..."}
            {/* {pokemon.fetched ? pokemon.species.map((p, idx) => { return <Link to={`/pokemon/${p.id}`}><PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} /></Link> }) : "Loading..."} */}
        </div>
    )
}

export default PokemonList