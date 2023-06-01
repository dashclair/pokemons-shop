import { createSelector } from "@reduxjs/toolkit";

const cartSelector = (state) => state.cart;

export const cartItemSelector = createSelector(cartSelector, (cart)=> cart.items);
export const cartQuantitySelector = createSelector(cartSelector, (cart)=> cart.quantity);
export const cartPriceSelector = createSelector(cartSelector, (cart)=> cart.totalPrice);
export const cartLoadingSelector = createSelector(cartSelector, (cart)=> cart.isLoading);
export const cartErrorsSelector = createSelector(cartSelector, (cart)=> cart.errors);
