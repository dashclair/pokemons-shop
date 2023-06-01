import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PokemonsLayout from "../components";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { pokemonsSelector, errorsSelector, isLoadingSelector} from "../selectors";
import { getPokemonsAsyncThunk } from "../api";
import { useCart, usePagination } from "../../../hooks";


const PokemonsContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [page, handlePageChange] = usePagination(1);
    const {addItemToCart, cartItem} = useCart();
    
    const pokemons = useSelector(pokemonsSelector);
    const errors = useSelector(errorsSelector);
    const isLoading = useSelector(isLoadingSelector);

    const handleLearnMore = (id) => {
        return navigate(`${ROUTE_NAMES.POKEMONS}/${id}`)
    };
    
    useEffect(()=>{
        dispatch(getPokemonsAsyncThunk({page, limit:12}))
    },[dispatch, page]);
    
    return (
        <PokemonsLayout
        pokemons = {pokemons}
        cartItem = {cartItem}
        errors = {errors}
        page = {page}
        handlePageChange={handlePageChange}
        handleLearnMore = {handleLearnMore}
        addItemToCart={addItemToCart}
        isLoading={isLoading}
        />
    )
}

export default PokemonsContainer