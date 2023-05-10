import axios from "axios"
import LocalStorageService from "../services/LocalStorageService"

const BASE_URL = 'http://localhost:3001'

const config = {
    baseURL: BASE_URL,
}

const mainApi = axios.create(config)

mainApi.interceptors.request.use((config)=>{
    const accessToken = LocalStorageService.getToken();

    config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

export {mainApi}

