import { useDispatch, useSelector } from "react-redux"

import SignInLayout from "../components"
import useForm from "../../../hooks/useForm"
import { signInThunk } from "../api"
import { errorSelector, isAuthenticatedSelector } from "../selectors"

const SignInContainer = () => {
    const isAuthenticated = useSelector(isAuthenticatedSelector)
    const error = useSelector(errorSelector)

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
        />
    )
} 

export default SignInContainer