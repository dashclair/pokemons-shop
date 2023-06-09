import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsAsyncThunk } from "../api";

const initialState = {
    isLoading: false,
    errors: null,
    data: []
}

const getPokemons = createSlice({
    name: 'pokemons',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(getPokemonsAsyncThunk.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getPokemonsAsyncThunk.fulfilled, (state, {payload})=>{
            state.isLoading = false;
            state.data = payload
        });
        builder.addCase(getPokemonsAsyncThunk.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.errors = payload;
        })
    }
})

export default getPokemons.reducer