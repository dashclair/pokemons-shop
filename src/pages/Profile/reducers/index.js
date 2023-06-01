import { createSlice } from "@reduxjs/toolkit";
import { getOrderItemsThunk } from "../api/thunks/getOrderItems";
import { orderItemThunk } from "../api/thunks/orderItem";

const initialState = {
    totalPrice: 0,
    items: [],
    data:[],
    errors: null,
    isLoading: false
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getOrderItemsThunk.pending, (state)=>{
            state.isLoading = true;
            state.errors = null;
        });
        builder.addCase(getOrderItemsThunk.fulfilled, (state, {payload})=>{
            state.isLoading = false;
            state.errors = null;

            state.data = payload;

        });
        builder.addCase(getOrderItemsThunk.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.errors = payload;
        });

        builder.addCase(orderItemThunk.pending, (state)=>{
            state.isLoading=true;
            state.errors = null;
        });
        builder.addCase(orderItemThunk.fulfilled, (state, {payload})=>{
            state.isLoading=false;
            state.errors = null;

            const {totalPrice, itemsList} = payload;

            state.totalPrice = totalPrice;
            state.items = itemsList;
        });
        builder.addCase(orderItemThunk.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.errors = payload;
        });
    }
});

export default ordersSlice.reducer;