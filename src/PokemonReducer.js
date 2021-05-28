const PokemonReducer=(state, action) => {
    switch(action.type) {
        case 'CAPTURE_POKEMON':  {
            const tempCaptured = [...state.capturedPokemon];
            tempCaptured.push(action.payload);
            return Object.assign({}, state, {
                capturedPokemon: tempCaptured
            })
        };
        case 'RELEASE_POKEMON': {
            const tempCaptured = [...state.capturedPokemon];
            tempCaptured.splice(tempCaptured.findIndex(cp => cp.id === action.payload.id), 1);
            return Object.assign({}, state, {
                capturedPokemon: tempCaptured
            })
        };
        default:
            return state;
    }
}

export default PokemonReducer;