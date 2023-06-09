import { useDispatch, useSelector } from "react-redux"

import SignInLayout from "../components"
import useForm from "../../../hooks/useForm"
import { signInThunk } from "../api"
import { errorSelector, isAuthenticatedSelector } from "../selectors"
import { usePassword } from "../../../hooks"

const SignInContainer = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const error = useSelector(errorSelector);

    const {showPassword, handleClickShowPassword, handleMouseDownPassword} = usePassword()

    const dispatch = useDispatch()
    const {form, handleChange} = useForm({
        email:'',
        password:'',
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(signInThunk(form))
    }

    return (
        <SignInLayout
        error = {error}
        isAuthenticated = {isAuthenticated}
        valueEmai = {form.email}
        valuePassword = {form.password}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        />
    )
} 

export default SignInContainer