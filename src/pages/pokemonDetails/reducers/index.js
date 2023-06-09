import { createSlice } from "@reduxjs/toolkit";

import { getPokemonDetailsThunk } from "../api";

const initialState = {
    isLoading: false,
    errors: null,
    data:{}
}

const pokemonDetailsSlice = createSlice({
    name:'pokemonDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemonDetailsThunk.pending, (state) => {
            state.isLoading = true;
            state.errors= null;
        });
        builder.addCase(getPokemonDetailsThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.errors= null;

            state.data = payload
        });
        builder.addCase(getPokemonDetailsThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.errors = payload
        })
    }
})

export default pokemonDetailsSlice.reducer