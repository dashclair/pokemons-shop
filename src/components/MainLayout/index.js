import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCart } from "../../hooks";
import Header from "../Header";
import { isAuthenticatedSelector } from "../../pages/SignIn/selectors";

import styles from './styles.module.scss';

const MainLayout = ({children}) => {

    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const {getCartItemData} = useCart();

    useEffect(()=>{
        if(isAuthenticated) {
            getCartItemData()
        }
    }, [isAuthenticated, getCartItemData]);

    return (
        <div className={styles.bgcolor}>
            <div className={styles.wrapper}>
                <Header/>
                {children}
            </div>
        </div>
    )
};

export default MainLayout