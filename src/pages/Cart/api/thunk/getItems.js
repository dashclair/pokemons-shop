import { createAsyncThunk } from "@reduxjs/toolkit";

import CartService from "../CartService";

export const getItemsThunk = createAsyncThunk('cart/getItems', async( _, {rejectWithValue})=>{
    try {
        const response = await CartService.getItems();

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
});

