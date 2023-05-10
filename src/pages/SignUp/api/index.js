import { mainApi } from "../../../config/mainApi"


export const signUp = (body) => {
    console.log (body)
    return mainApi.post('auth/signup', body)
}

