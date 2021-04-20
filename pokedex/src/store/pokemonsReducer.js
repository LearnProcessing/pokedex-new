
const initialState= {
    pokemons: [],
    offset: 0
}

export default function pokemonsReducer (state=initialState, action){
    switch(action.type){
        case 'POKEMONS/SETOFFSET':
            return {...state, offset: action.offset}
        default:
            return {...state}
    }
}

