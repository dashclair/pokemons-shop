import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonsApiConfig } from "../../../config/pokemonsApi";
import { pick } from "lodash";

const getPokemonByName = (name) => pokemonsApiConfig.get(`/pokemon/${name}`);

export const getPokemonDetailsThunk = createAsyncThunk('pokemonDetails/getDetailsByName', async (name) => {
    
    const response = await getPokemonByName(name)

    console.log(response.data)
    return pick(response.data, ['name', 'stats', 'sprites'])
})