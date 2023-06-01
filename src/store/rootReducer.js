import { combineReducers } from "redux";
import signInReducer from '../pages/SignIn/reducers';
import getPokemonsReducer from '../pages/pokemons/reducers';
import pokemonDetailsReducer from '../pages/pokemonDetails/reducers'
import { cartReducer }  from '../pages/Cart/reducers';
import ordersReducer from '../pages/Profile/reducers'


export const reducers = combineReducers({
    auth:signInReducer,
    pokemons:getPokemonsReducer,
    pokemonsDetails: pokemonDetailsReducer,
    cart: cartReducer,
    orders: ordersReducer,
})