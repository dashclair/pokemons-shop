import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { abilitiesSelector, imageSelector, loadingDetailsSelector, nameSelector, priceSelector, statsSelector } from "../selectors"
import PokemonDetailsLayout from "../components/PokemonDetailsLayout";
import { getPokemonDetailsThunk } from "../api";
import { createStatLists } from "../utils/createStatList";
import { createAbilityList } from "../utils/createAbilityList";


const PokemonDetailsContainer = () => {
    
    const dispatch = useDispatch();
    
    const {pokemonName} = useParams();

    const loadingDetails = useSelector(loadingDetailsSelector)
    const name = useSelector(nameSelector);
    const stats = useSelector(statsSelector);
    const abilities = useSelector(abilitiesSelector);
    const image = useSelector(imageSelector);
    const statsList = createStatLists(stats)
    const abilitiesList = createAbilityList(abilities)
    const price = useSelector(priceSelector);

    useEffect(()=>{
        dispatch(getPokemonDetailsThunk(pokemonName))
    },[dispatch, pokemonName])
   
    return (
        <PokemonDetailsLayout
        name = {name}
        stats = {statsList}
        image = {image}
        abilities = {abilitiesList}
        price = {price}
        loadingDetails={loadingDetails}
        
        />
    )
}

export default PokemonDetailsContainer