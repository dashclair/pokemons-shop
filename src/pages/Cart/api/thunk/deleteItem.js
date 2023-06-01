import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../CartService";

export const deleteItemThunk = createAsyncThunk('cart/deleteItem', async( id, {rejectWithValue})=>{
    try {
        const response = await CartService.deleteItem(id)

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
});