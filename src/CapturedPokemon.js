import { useContext, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import PokemonCard from './PokemonCard'
import PokemonDetail from './PokemonDetail'

function CapturedPokemon () {
    const [state] = useContext(PokemonContext);
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    
    const handleSelect = (id) => {
        setSelectedPokemon(id);
    }
    return (
        <div class="container">
            { selectedPokemon !== undefined ? <div><PokemonDetail selectedPokemon={selectedPokemon} /><button>Battle</button></div>: "" }
            
            <div class="grid">
                { state.capturedPokemon.length == 0 ? <p>Go catch some pokemon</p>: state.capturedPokemon.map((p, idx) => { return <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} handleSelect={handleSelect} /> }) }
            </div>
        </div>
    )
}

export default CapturedPokemon;