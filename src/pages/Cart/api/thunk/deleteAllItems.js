import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../CartService";

export const deleteAllItemsThunk = createAsyncThunk('cart/deleteAll', async(ids, {rejectWithValue})=>{
    try {
        const promises = ids.map((id) => CartService.deleteItem(id));
        const results = await Promise.all(promises);
        const result = results.map((response) => response.data);

        console.log(result);
        return result
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

