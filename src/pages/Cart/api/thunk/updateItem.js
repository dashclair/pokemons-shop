import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../CartService";

const updateItemThunk = createAsyncThunk('cart/updateItem', async(payload, {rejectWithValue})=>{
    try {
        const {data} = await CartService.updateItem({
            id: payload.id,
            quantity: payload.quantity
        })

        return data
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

export default updateItemThunk