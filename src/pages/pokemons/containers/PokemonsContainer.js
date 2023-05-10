import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"

import PokemonsLayout from "../components"
import { pokemonsSelector, errorsSelector} from "../selectors"
import { getPokemonsAsyncThunk } from "../api"
import { usePagination } from "../../../hooks"

const PokemonsContainer = () => {
    const dispatch = useDispatch()

    const [page, handlePageChange] = usePagination(1)
    
    const pokemons = useSelector(pokemonsSelector)
    const errors = useSelector(errorsSelector)


    useEffect(()=>{
        dispatch(getPokemonsAsyncThunk({page, limit:10}))
    },[dispatch, page])
    
    return (
        <PokemonsLayout
        pokemons = {pokemons}
        errors = {errors}
        page = {page}
        handlePageChange={handlePageChange}
        />
    )
}

export default PokemonsContainer