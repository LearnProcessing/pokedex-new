import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import pokemonsReducer from './pokemonsReducer'

const rootReducer = combineReducers({
    pokemons: pokemonsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store

