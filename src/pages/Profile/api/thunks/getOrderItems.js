import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../OrderService";

export const getOrderItemsThunk = createAsyncThunk('order/getItems', async( _, {rejectWithValue})=>{
    try {
        const response = await OrderService.getOrderItems();

        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
});