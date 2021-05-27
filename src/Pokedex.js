import PokemonDetail from './PokemonDetail'
import PokemonList from './PokemonList'
import {useEffect, useState} from 'react'
import Pokemon from './PokemonClass'

function Pokedex() {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const [capturedPokemon, setCapturedPokemon] = useState([]);
    
    const handleSelect = (id) => {
        setSelectedPokemon(id);
    }

    const handleCapture = (poke) => {
        const tempCaptured = [...capturedPokemon];
        tempCaptured.push(poke);
        setCapturedPokemon(tempCaptured);
    }

    const handleRelease = (poke) => {
        const tempCaptured = [...capturedPokemon];
        tempCaptured.splice(tempCaptured.findIndex(cp => cp.id === poke.id), 1);
        setCapturedPokemon(tempCaptured);
    }

    useEffect(() => {
        
    })

    return(
        <div className="container">
        { selectedPokemon !== undefined ? <PokemonDetail selectedPokemon={selectedPokemon} capturedPokemon={capturedPokemon} handleCapture={handleCapture} handleRelease={handleRelease} /> : "" }
        <PokemonList handleSelect={handleSelect} />
        </div>
    )
}

export default Pokedex;