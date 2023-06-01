import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { isAuthenticatedSelector } from "../../pages/SignIn/selectors";
import {NAVIGATION_ITEMS, privateNavKeys, publicNavKeys} from "./config";
import pokemon from "../../static/icons/pokemon-23 (1).svg"
import { ROUTE_NAMES } from "../../routes/routeNames";
import CartButtonIcon from "../CartButtonIcon";
import { useCart } from "../../hooks";
import MaterialDivider from "../Divider";
import { logout } from "../../utils/logout";

import styles from './styles.module.scss';

const Header = () => {
    
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const navAccessKeys = isAuthenticated ? privateNavKeys : publicNavKeys;
    
    const {quantity}=useCart();

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerLinks}>
            <Link to={ROUTE_NAMES.HOME}><img src = {pokemon} alt = "" width = {100} height = {100}/></Link>
            {NAVIGATION_ITEMS[navAccessKeys].map(({title,path})=>(
                <Link
                key = {title}
                to = {path}
                className = {styles.navLink}
                >{title}</Link>
            ))}
            </div>

            <MaterialDivider/>

            <div className={styles.header_icons}>
                <CartButtonIcon content = {quantity} />
                <Button sx={{marginBottom:1}} onClick={logout}>
                    <ExitToApp sx={{color:'black'}}/>
                </Button>
            </div>
        </div>
    )
};

export default Header;