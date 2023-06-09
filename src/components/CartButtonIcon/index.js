import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticatedSelector } from '../../pages/SignIn/selectors';
import { ROUTE_NAMES } from '../../routes/routeNames';

import styles from './styles.module.scss';

const CartButtonIcon = ({content, handleGoToCart}) => {
    const isAuthenticated = useSelector(isAuthenticatedSelector)
    
    return  <IconButton onClick={handleGoToCart} aria-label="cart">
        <Badge badgeContent={isAuthenticated ? content : null} color="success">
            <Link to={ROUTE_NAMES.CART} className={styles.navLink}>
                <ShoppingCartIcon />
            </Link>
        </Badge>
  </IconButton>
}

CartButtonIcon.propTypes = {
    content: PropTypes.node,
    handleGoToCart: PropTypes.func,
}

export default CartButtonIcon