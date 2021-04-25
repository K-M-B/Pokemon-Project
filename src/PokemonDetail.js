import { useState } from 'react';

function PokemonDetail( { id }) {
    return (
        <div>
        { parseInt(id) > 0 ? id : "no id" }
        </div>
    )
}

export default PokemonDetail