import styles from './PokemonCard.module.css'
import { Link } from 'react';

function PokemonCard({id, name, image, handleSelect}) {
    return (
        <div className={styles.card} onClick={() => handleSelect(id)}>
            <img src={image} alt={name} />
            <div className={styles.text}>
                <h3>{name}</h3>
            </div>
        </div> 
        
    )
}

export default PokemonCard