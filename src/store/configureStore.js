import { configureStore} from "@reduxjs/toolkit";
import signInReducer from '../pages/SignIn/reducers';
import getPokemonsReducer from '../pages/pokemons/reducers';
import pokemonDetailsReducer from '../pages/pokemonDetails/reducers'

export const store = configureStore({
    reducer: {
        auth:signInReducer,
        pokemons:getPokemonsReducer,
        pokemonsDetails: pokemonDetailsReducer
    },
  })