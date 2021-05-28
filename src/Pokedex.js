import PokemonDetail from './PokemonDetail'
import PokemonList from './PokemonList'
import {useEffect, useState} from 'react'
import Pokemon from './PokemonClass'

function Pokedex() {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    
    const handleSelect = (id) => {
        setSelectedPokemon(id);
    }

    useEffect(() => {
        
    })

    return(
        <div className="container">
        <h1>Pokedex</h1>
        { selectedPokemon !== undefined ? <PokemonDetail selectedPokemon={selectedPokemon} /> : "" }
        <PokemonList handleSelect={handleSelect} />
        </div>
    )
}

export default Pokedex;