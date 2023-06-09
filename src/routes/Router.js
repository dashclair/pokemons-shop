import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES} from "./routeNames";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import PokemonsContainer from "../pages/pokemons/containers/PokemonsContainer";
import PrivateRoute from "./PrivateRoute";
import PokemonDetailsContainer from "../pages/pokemonDetails/containers/PokemonDetailsContainer";
import CartContainer from "../pages/Cart/containers/CartContainer";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";


const Router = () => {
    return (

        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePageContainer/>}/>
            <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer/>}/>
            <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer/>}/>
            <Route path={ROUTE_NAMES.POKEMONS} element={
                <PrivateRoute>
                    <PokemonsContainer/>
                </PrivateRoute> }/>
            <Route path={ROUTE_NAMES.PROFILE} element={
                <PrivateRoute>
                    <ProfileContainer/>
                </PrivateRoute>}/>
            <Route path={ROUTE_NAMES.POKEMON_DETAILS} element={<PokemonDetailsContainer/>}/>
            <Route path={ROUTE_NAMES.CART} element={
                <PrivateRoute>
                    <CartContainer/>
                </PrivateRoute>}/>
        </Routes>
    )
}

export default Router