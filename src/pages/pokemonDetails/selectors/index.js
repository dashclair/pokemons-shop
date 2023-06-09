import { createSelector} from "@reduxjs/toolkit";

const baseSelector = (store) => store.pokemonsDetails
export const dataSelector = createSelector(baseSelector, (details)=>details.data);
export const loadingDetailsSelector = createSelector(baseSelector, (details)=>details.isLoading);
export const errorsDetailsSelector = createSelector(baseSelector, (details)=>details.errors);

export const statsSelector = createSelector(dataSelector, (details) => details.stats);
export const nameSelector = createSelector(dataSelector, (details) => details.name);
export const imageSelector = createSelector(dataSelector, (details) => details.image);
export const abilitiesSelector = createSelector(  dataSelector, (details) => details.abilities);
export const priceSelector = createSelector(dataSelector, (details) => details.price);

