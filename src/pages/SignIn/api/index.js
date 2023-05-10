import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../config/mainApi";
import LocalStorageService from "../../../services/LocalStorageService";

export const signInRequest = (body) => {
    console.log('BODY',body)
    return mainApi.post('/auth/signIn', body);
}

export const signInThunk = createAsyncThunk('auth/signIn', async (payload, {rejectWithValue}) => {
    try {
        const {data} = await signInRequest(payload);

        const {accessToken, ...profileData} = data

        console.log('DATA',data);

        LocalStorageService.saveToken(accessToken)

        console.log('PROFILEDATA',profileData);
        return profileData;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})