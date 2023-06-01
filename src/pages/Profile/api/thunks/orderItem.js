import { createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../OrderService";
import {emptyCart} from "../../../Cart/reducers"

export const orderItemThunk = createAsyncThunk('orders/orderItem', async(payload, {dispatch, rejectWithValue})=> {
    try {
        const {data} = await OrderService.orderItem(payload);

        dispatch(emptyCart())
        return data
    } catch (error){ 
        return rejectWithValue(error.response.data.message)
    }
});

