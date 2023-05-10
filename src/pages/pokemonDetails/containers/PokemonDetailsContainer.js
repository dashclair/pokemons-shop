import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { nameSelector, spritesSelector, statsSelector } from "../selectors"
import PokemonDetailsLayout from "../components/PokemonDetailsLayout";
import { getPokemonDetailsThunk } from "../api";
import { ROUTE_NAMES } from "../../../routes/routeNames";


const PokemonDetailsContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pokemonName} = useParams();

    const handleAddCart = () =>{
        return navigate(ROUTE_NAMES.CART)
    }

    const goBack = () => {
		navigate(-1);
	}

    const name = useSelector(nameSelector);
    const stats = useSelector(statsSelector);
    const sprites = useSelector(spritesSelector);

    useEffect(()=>{
        dispatch(getPokemonDetailsThunk(pokemonName))
    },[dispatch, pokemonName])
   
    return (
        <PokemonDetailsLayout
        name = {name}
        image = {sprites?.front_default}
        stats = {stats}
        handleChange={handleAddCart}
        goBack = {goBack}
        />
    )
}

export default PokemonDetailsContainer