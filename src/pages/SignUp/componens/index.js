import { Button, TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

import styles from './styles.module.scss';
import { ROUTE_NAMES } from "../../../routes/routeNames";

const SignUpLayout = ({
    handleSubmitForm, 
    handleFormBlur,
    valueFirstName,
    handleChange,
    isTouchedFirstName,
    errorsFirstName,
    valueLasttName,
    isTouchedLastName,
    errorsLastName,
    valueEmail,
    isTouchedEmail,
    errorsEmail,
    valueGender,
    isTouchedGender,
    errorsGender,
    valuePhone,
    isTouchedPhone,
    errorsPhone,
    valuePassword,
    isTouchedPassword,
    errorsPassword,
    valueConfirmPassword,
    isTouchedConfirmPassword,
    errorsConfirmPassword,
    data,
    errors

}) => {
    return (

      <div className = {styles.wrapper}>

        {errors && errors ? (<h4 className = {styles.errors}> {errors.message} </h4>): null}
        {data?.data ? (<div>
          <p>{data.data.message}</p>
          <Link to = {ROUTE_NAMES.SIGN_IN}>SIGN IN</Link>
          </div>):(
           <form  className = {styles.form_wrapper} onSubmit={handleSubmitForm}>
           <TextField
           fullWidth
           id="firstName"
           name="firstName"
           label="First Name"
           type = "text"
           value={valueFirstName}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedFirstName && Boolean(errorsFirstName)}
         />

         {isTouchedFirstName && errorsFirstName ? (
             <div className = {styles.errors}>{errorsFirstName}</div>
           ) : null}
 
         <TextField
           fullWidth
           id="lastName"
           name="lastName"
           label="Last Name"
           type = "text"
           value={valueLasttName}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedLastName && Boolean(errorsLastName)}
         />

         {isTouchedLastName && errorsLastName ? (
             <div className = {styles.errors}>{errorsLastName}</div>
           ) : null}
 
         <TextField
           fullWidth
           id="email"
           name="email"
           label="email"
           type = "email"
           value={valueEmail}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedEmail && Boolean(errorsEmail)}
         />
 
         <TextField
           fullWidth
           id="gender"
           name="gender"
           label="Gender"
           type = "text"
           value={valueGender}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedGender && Boolean(errorsGender)}
         />
         {isTouchedGender && errorsGender ? (
             <div className = {styles.errors}>{errorsGender}</div>
           ) : null}
 
         <TextField
           fullWidth
           id="phone"
           name="phone"
           label="Phone number"
           type = "text"
           value={valuePhone}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedPhone && Boolean(errorsPhone)}
         />
         {isTouchedPhone  && errorsPhone ? (
             <div className = {styles.errors}>{errorsPhone}</div>
           ) : null}
 
         <TextField
           fullWidth
           id="password"
           name="password"
           label="Password"
           type = "password"
           value={valuePassword}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedPassword && Boolean(errorsPassword)}
         />
         {isTouchedPassword && errorsPassword ? (
             <div className = {styles.errors}>{errorsPassword}</div>
           ) : null}
 
         <TextField
           fullWidth
           id="confirmPassword"
           name="confirmPassword"
           label="Confirm password"
           type = "password"
           value={valueConfirmPassword}
           onBlur={handleFormBlur}
           onChange={handleChange}
           error={isTouchedConfirmPassword && Boolean(errorsConfirmPassword)}
         />
 
           <Button type="submit" variant = 'contained' sx={{ backgroundColor: 'black'}}> Submit </Button>
         </form>
        )}
        

      </div>
    
    )
}

export default SignUpLayout