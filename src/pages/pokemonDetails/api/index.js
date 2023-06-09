import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApi } from "../../../config/mainApi";

const getPokemonByName = (id)=> mainApi.get(`/products/${id}`);

export const getPokemonDetailsThunk = createAsyncThunk('pokemonDetails/getDetailsByName', async(id, {rejectWithValue})=>{
    try {
        const response = await getPokemonByName(id);

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
});