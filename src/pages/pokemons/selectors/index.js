import { createSelector } from "@reduxjs/toolkit";

const mainSelector = (state) => state.pokemons;

const pokemonsSelector = createSelector(
    mainSelector, (state) => state.data
    );

const errorsSelector = createSelector(
    mainSelector,
        (state) => state.errors
    );

const isLoadingSelector = createSelector(mainSelector,
    (state) => state.isLoading);
    
export {pokemonsSelector, errorsSelector, isLoadingSelector} 