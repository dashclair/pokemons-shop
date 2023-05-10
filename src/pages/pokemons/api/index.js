import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../config/mainApi";


const getPokemons = ({page, limit}) => mainApi.get('/products', {
    params:{
        page,
        limit,
    },
});

export const getPokemonsAsyncThunk = createAsyncThunk('pokemons/getPokemons', async( body, {rejectWithValue})=>{
    try{
        const {data} = await getPokemons(body);

        return data
    } catch(error) {
        return rejectWithValue(error.response.data.message)
    }
})