import { Button, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import styles from './styles.module.scss';

const SignInLayout = ({
    handleSubmit,
    handleChange,
    valueEmail,
    valuePassword,
    isAuthenticated,
    error
}) => {
    return (
        < div className={styles.wrapper}>
                <form className = {styles.form_wrapper} onSubmit = {handleSubmit}>
                    <h2 className={styles.title}>Log in</h2>
                    {error && (<h4 className={styles.errors}>{error}</h4>)}

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
                    type = "password"
                    value={valuePassword}
                    onChange={handleChange}
                />
    
                <Button type="submit" variant = 'contained' sx={{ backgroundColor: 'black'}}> sign in </Button>
                </form>

                {isAuthenticated &&  (<Navigate to={ROUTE_NAMES.POKEMONS}/>)}

        </div>
    )
}

export default SignInLayout