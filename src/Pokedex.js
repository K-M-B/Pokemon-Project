import PokemonDetail from './PokemonDetail'
import PokemonList from './PokemonList'
import {useEffect, useState} from 'react'

function Pokedex() {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const handleClick= (id) => {
        console.log('id: ' + id);
        setSelectedPokemon(id);
    }

    useEffect(() => {
        console.log('useEffect: ' + selectedPokemon);
    })

    return(
        <div className="container">
        { selectedPokemon !== undefined ? <PokemonDetail selectedPokemon={selectedPokemon} /> : "" }
        <PokemonList handleClick={handleClick} />
        </div>
    )
}

export default Pokedex;