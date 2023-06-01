import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import  omit  from "lodash/omit"

import SignUpLayout from "../componens"
import { signUpValidationSchema } from "../validation"
import useFetching from "../../../hooks/useFetching"
import { signUp } from "../api"
import { usePassword } from "../../../hooks"

const SignUpContainer = () => {
  const {data, errors,  handleDataLoad} = useFetching(signUp);
  const navigate = useNavigate();

  const {showPassword, handleClickShowPassword, handleMouseDownPassword} = usePassword()
  
  const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          gender:'',
          phone:'',
          password:'',
          confirmPassword:''
        },
        validationSchema: signUpValidationSchema,

        onSubmit: (values, {resetForm}) => {
          handleDataLoad(omit(values, 'confirmPassword'))
          resetForm()
        }
    })

    const isDisabled = !(formik.values.firstName && formik.values.lastName && formik.values.email && formik.values.gender && formik.values.phone 
      &&formik.values.password && formik.values.confirmPassword);

    return (
        <SignUpLayout
        formik = {formik}
        handleSubmitForm = {formik.handleSubmit}
        handleFormBlur = {formik.handleBlur}
        handleChange={formik.handleChange}
        valueFirstName = {formik.values.firstName}
        isTouchedFirstName = {formik.touched.firstName}
        errorsFirstName = {formik.errors.firstName}
        valueLasttName = {formik.values.lastName}
        isTouchedLastName = {formik.touched.lastName}
        errorsLastName = {formik.errors.lastName}
        valueEmail = {formik.values.email}
        isTouchedEmai = {formik.touched.email}
        errorsEmail = {formik.errors.email}
        valueGender = {formik.values.gender}
        isTouchedGender = {formik.touched.gender}
        errorsGender = {formik.errors.gender}
        valuePhone = {formik.values.phone}
        isTouchedPhone = {formik.touched.phone}
        errorsPhone = {formik.errors.phone}
        valuePassword = {formik.values.password}
        isTouchedPassword = {formik.touched.password}
        errorsPassword = {formik.errors.password}
        valueConfirmPassword = {formik.values.confirmPassword}
        isTouchedConfirmPassword = {formik.touched.confirmPassword}
        errorsConfirmPassword = {formik.errors.confirmPassword}
        data = {data}
        errors={errors}
        navigate = {navigate}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        isDisabled={isDisabled}
        />
    )
}

export default SignUpContainer