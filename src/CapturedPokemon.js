import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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
            { selectedPokemon !== undefined && selectedPokemon > 0 ? <div><PokemonDetail selectedPokemon={selectedPokemon} /><Link to="/battle"><button>Battle</button></Link></div>: "" }
            
            <div class="grid">
                { state.capturedPokemon.length == 0 ? <p>Go catch some <a href="/pokemon">pokemon</a></p>: state.capturedPokemon.map((p, idx) => { return <PokemonCard key={p.id} id={p.id} name={p.name} image={p.image} handleSelect={handleSelect} /> }) }
            </div>
        </div>
    )
}

export default CapturedPokemon;