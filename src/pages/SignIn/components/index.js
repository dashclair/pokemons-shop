import { TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

import { ROUTE_NAMES } from "../../../routes/routeNames";
import CustomButton from "../../../components/CustomButton";

import styles from './styles.module.scss';


const SignInLayout = ({
    handleSubmit,
    handleChange,
    valueEmail,
    valuePassword,
    isAuthenticated,
    error,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword

}) => {

    return (
        < div className={styles.wrapper}>
                <form className = {styles.form_wrapper} onSubmit = {handleSubmit}>
                    <h2 className={styles.title}>Log in</h2>
                    {error && (<Alert severity="error">{error}!</Alert>)}

                <TextField
                fullWidth
                    id="email"
                    name="email"
                    label="email"
                    type = "email"
                    value={valueEmail}
                    onChange={handleChange}
                />
    
                <TextField
                fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={valuePassword}
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
                />
    
                <CustomButton type="submit" sx={{ backgroundColor: 'black'}} text='sign in' size = 'medium'/>
                </form>

                {isAuthenticated &&  (<Navigate to={ROUTE_NAMES.POKEMONS}/>)}

        </div>
    )
};

SignInLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  valueEmail: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  valuePassword: PropTypes.string,
  showPassword: PropTypes.string,
  handleClickShowPassword: PropTypes.func,
  handleMouseDownPassword: PropTypes.func,

}

export default SignInLayout