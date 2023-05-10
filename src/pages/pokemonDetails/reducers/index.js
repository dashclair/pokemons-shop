import { createSlice } from "@reduxjs/toolkit"
import { getPokemonDetailsThunk } from "../api"
import { createStatLists } from "../utils/createStatList";

const initialState = {
    isLoading: false,
    errors: null,
    name:'',
    data: {},
    stats: [],
    sprites:[],
}

const pokemonDetailsSlice = createSlice({
    name:'pokemonDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemonDetailsThunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPokemonDetailsThunk.fulfilled, (state, {payload}) => {
            const {name, stats, sprites} = payload
            state.isLoading = false;
            state.name = name;
            state.sprites = sprites;
            state.stats = createStatLists(stats)
        });
        builder.addCase(getPokemonDetailsThunk.rejected, (state, {error}) => {
            state.isLoading = false;
            state.errors = error
        })
    }
})

export default pokemonDetailsSlice.reducer