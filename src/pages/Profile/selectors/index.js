import { createSelector } from "@reduxjs/toolkit";

const mainSelector = (state) => state.auth;
const prfileDataSelector = createSelector(mainSelector,(state) => state.profileData);
export const firstNameSelector = createSelector(prfileDataSelector, (state) => state.firstName)
export const lastNameSelector = createSelector(prfileDataSelector,(state)=> state.lastName)
export const emailSelector = createSelector(prfileDataSelector, (state) => state.email)
export const phoneSelector = createSelector(prfileDataSelector, (state) => state.phone)
export const rolesSelector = createSelector(prfileDataSelector, (state) => state.roles)
export const genderSelector = createSelector(prfileDataSelector, (state) => state.gender)
export const idProfileSelector = createSelector(prfileDataSelector, (state) => state._id)

const orderSelector = (state) => state.orders;
export const profileLoadingSelector = createSelector(orderSelector, (state)=>state.isLoading);
export const orderDataSelector = createSelector(orderSelector, (state) => state.data)
export const createdAtSelector = createSelector(orderDataSelector, (state)=> state.createdAt)


