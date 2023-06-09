import { createSlice } from "@reduxjs/toolkit";

import { getItemsThunk } from "../api/thunk/getItems"; 
import { addItemThunk } from "../api/thunk/addItem";
import updateItemThunk from "../api/thunk/updateItem";
import { deleteItemThunk } from "../api/thunk/deleteItem";
import { deleteAllItemsThunk } from "../api/thunk/deleteAllItems";

const initialState = {
    totalPrice: 0,
    quantity: 0,
    items: [],
    errors: null,
    isLoading: false
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        emptyCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.quantity = 0;
            state.errors = null;
            state.isLoading = false;
          },
    },
    extraReducers: (builder)=>{
        builder.addCase(getItemsThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors= null;
            state.isDisabled=false;
        });
        builder.addCase(getItemsThunk.fulfilled, (state, {payload})=>{
            const {totalPrice, quantity, itemsList} = payload;
            
            state.isLoading = false;
            state.errors = null;
            state.isDisabled=false;
            state.items = itemsList;
            state.totalPrice = totalPrice;
            state.quantity = quantity;
        });
        builder.addCase(getItemsThunk.rejected, (state, {payload})=>{
            state.errors = payload;
            state.isLoading = false;
            state.isDisabled=false;
        });


        builder.addCase(addItemThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors = null;
            state.isDisabled=false;
        });
        builder.addCase(addItemThunk.fulfilled, (state, {payload})=>{
            const {totalPrice, quantity, itemsList} = payload;

            state.isLoading = false;
            state.errors = null;
            

            state.items = itemsList;
            state.totalPrice = totalPrice;
            state.quantity = quantity;
        });
        builder.addCase(addItemThunk.rejected, (state, {payload})=>{
            state.errors = payload;
            state.isLoading = false;
            state.isDisabled=false;
        });

        
        builder.addCase(updateItemThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors = null;
            state.isDisabled=false;
        });
        builder.addCase(updateItemThunk.fulfilled, (state,{payload})=>{
            state.isLoading = false;
            state.errors = null;
            state.isDisabled=false;

            const {cartState, updatedItem} = payload;

            const foundItem = state.items.find((item)=> item.id===updatedItem.id);

            foundItem.quantity = updatedItem.quantity;
            state.totalPrice = cartState.totalPrice;
        });
        builder.addCase(updateItemThunk.rejected, ((state, {payload})=>{
            state.errors = payload;
            state.isLoading = false;
            state.isDisabled=false;
        }));


        builder.addCase(deleteItemThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors = null;
        });
        builder.addCase(deleteItemThunk.fulfilled, (state, {payload})=>{
            state.isLoading = false;
            state.errors = null;

            const {cartState, removedItemId} = payload;

            state.items = state.items.filter((item) => item.id !== removedItemId);
            state.totalPrice = cartState.totalPrice;
            state.quantity = cartState.quantity;
        });
        builder.addCase(deleteItemThunk.rejected, (state, {payload})=>{
            state.errors = payload;
            state.isLoading = false;
        });


        builder.addCase(deleteAllItemsThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors = null;
        });
        builder.addCase(deleteAllItemsThunk.fulfilled, (state)=>{
            state.isLoading = false;
            state.errors = null;

            state.items = []
            state.totalPrice = 0;
            state.quantity = 0;

        });
        builder.addCase(deleteAllItemsThunk.rejected, (state, {payload})=>{
            state.errors = payload;
            state.isLoading = false;
        });
    },
});

export const { emptyCart } = cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;

export default cartReducer;