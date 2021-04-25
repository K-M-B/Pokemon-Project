import styles from './PokemonCard.module.css'
import { Link } from 'react';

function PokemonCard({id, name, image, handleClick}) {
    return (
        <div className={styles.card} onClick={() => handleClick(id)}>
            <img src={image} alt={name} />
            <div className={styles.text}>
                <h3>{name}</h3>
            </div>
        </div> 
        
    )
}

export default PokemonCard