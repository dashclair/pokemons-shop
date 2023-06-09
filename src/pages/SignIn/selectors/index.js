import { createSelector } from "@reduxjs/toolkit";

const mainSelector = (state) => state.auth;

export const isAuthenticatedSelector = createSelector(mainSelector,(state) => state.isAuthenticated)

export const errorSelector = createSelector(mainSelector,(state) => state.error)