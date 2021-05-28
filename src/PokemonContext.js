import React, { createContext, useReducer } from 'react';
import PokemonReducer from './PokemonReducer';

const initialState = {
    capturedPokemon: []
};

const Store=({children})=> {
    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    return (
        <PokemonContext.Provider value={[state, dispatch]}>
            {children}
        </PokemonContext.Provider>
    )
}

export const PokemonContext = createContext(initialState);

export default Store;