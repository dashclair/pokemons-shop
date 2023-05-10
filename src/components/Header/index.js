import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../pages/SignIn/selectors";
import {NAVIGATION_ITEMS, privateNavKeys, publicNavKeys} from "./config";
import pokemon from "../../static/icons/pokemon.svg"

import styles from './styles.module.scss';
import { ROUTE_NAMES } from "../../routes/routeNames";

const Header = () => {

    const isAuthenticated = useSelector(isAuthenticatedSelector)
    const navAccessKeys = isAuthenticated ? privateNavKeys : publicNavKeys

    return (
        <div className={styles.wrapper}>
            <Link to={ROUTE_NAMES.HOME}><img src = {pokemon} alt = "" width = {100} height = {100}/></Link>
            {NAVIGATION_ITEMS[navAccessKeys].map(({title,path})=>(
                <Link
                key = {title}
                to = {path}
                className = {styles.navLink}
                >{title}</Link>
            ))}

        </div>
    )
};

export default Header;