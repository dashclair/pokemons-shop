import { TextField } from "@mui/material";
import { Link} from "react-router-dom";
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

import { ROUTE_NAMES } from "../../../routes/routeNames";
import CustomButton from "../../../components/CustomButton";

import styles from './styles.module.scss';


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
    errors,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    isDisabled

}) => {
    return (

      <div className = {styles.wrapper}>

        {errors && errors ? (<Alert severity="error">{errors.message}!</Alert>) : null}
        {data?.data ? (<div style={{paddingBottom:600}}>
          <Alert severity="success">{data.data.message}. <Link to = {ROUTE_NAMES.SIGN_IN}>Log in</Link> to your account.</Alert>
          </div>):(
          <div>
          <form  className = {styles.form_wrapper} onSubmit={handleSubmitForm}>
              <h2 className={styles.title}>Sign up</h2>
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
              helperText={errorsFirstName}
              />
 
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
                helperText={errorsLastName}
              />

 
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
                helperText={errorsEmail}
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
                helperText={errorsGender}
              />
        
 
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
                helperText={errorsPhone}
              />
         
 
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={valuePassword}
                onBlur={handleFormBlur}
                onChange={handleChange}
                    InputProps={{ 
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                error={isTouchedPassword && Boolean(errorsPassword)}
                helperText={errorsPassword}
              />
        
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm password"
                type={showPassword ? "text" : "password"}
                value={valueConfirmPassword}
                onBlur={handleFormBlur}
                onChange={handleChange}
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={isTouchedConfirmPassword && Boolean(errorsConfirmPassword)}
                helperText={errorsConfirmPassword}
              />

              <CustomButton disabled={isDisabled} type="submit" text='submit' size = 'medium'/>
            </form>
          </div>
          )
        }
      </div>
    )
}

export default SignUpLayout