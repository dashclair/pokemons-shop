import { createSelector} from "@reduxjs/toolkit";

const baseSelector = (store) => store.pokemonsDetails

export const statsSelector = createSelector(
    baseSelector,
    (details) => details.stats
)

export const nameSelector = createSelector(
    baseSelector,
    (details) => details.name
)

export const spritesSelector = createSelector(
    baseSelector,
    (details) => details.sprites
)