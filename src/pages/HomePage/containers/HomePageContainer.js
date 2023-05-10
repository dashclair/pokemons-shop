import { useSelector } from "react-redux"
import SignUpContainer from "../../SignUp/containers/SignUpContainer"
import { isAuthenticatedSelector } from "../../SignIn/selectors"
import PokemonsLayout from "../../pokemons/components"

const HomePageContainer = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector)

    return (
        <div>

            <h1 style = {{padding:"15px"}}>Welcome to PokeShop</h1>

        </div>
    )
}

export default HomePageContainer