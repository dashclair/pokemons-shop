import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useCallback } from "react"

import { isAuthenticatedSelector } from "../../SignIn/selectors"
import HomePageLayout from "../components/HomePageLayout"
import { ROUTE_NAMES } from "../../../routes/routeNames"

const HomePageContainer = () => {
    const isSignedIn = useSelector(isAuthenticatedSelector);

    const navigate = useNavigate();

    const handleGoToPokemons = useCallback(()=> {
        navigate(ROUTE_NAMES.POKEMONS)
    },[navigate]);

    const handleGoToSignUp = useCallback(()=> {
        navigate(ROUTE_NAMES.SIGN_UP)
    }, [navigate]);

    const handleGoToSignIn = useCallback(()=>{
        navigate(ROUTE_NAMES.SIGN_IN)
    }, [navigate]);

    return (
        <HomePageLayout
        isSignedIn={isSignedIn}
        handleGoToPokemons={handleGoToPokemons}
        handleGoToSignUp={ handleGoToSignUp}
        handleGoToSignIn = {handleGoToSignIn}
        />
    )
}

export default HomePageContainer