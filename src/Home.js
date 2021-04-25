import styles from './Home.module.css'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import { useState } from 'react'

function Home() {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const handleClick= (id) => {
        setSelectedPokemon(id);
    }

    return(
        <div className={styles.container}>
        <PokemonDetail id={selectedPokemon} />
        <PokemonList handleClick={handleClick} />
        </div>
    )
}

export default Home;