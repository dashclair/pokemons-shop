import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartLayout from "../components/CartLayout";
import { useCart } from "../../../hooks";
import { orderItemThunk } from "../../Profile/api/thunks/orderItem";
import { idProfileSelector } from "../../Profile/selectors";
import { cartLoadingSelector } from "../selectors";


const CartContainer = () => {
    const dispatch = useDispatch()
    const customerId = useSelector(idProfileSelector)
    const cartLoading = useSelector(cartLoadingSelector)

    const {getCartItemData, updatedItemQuantity, deleteItemFromCart, deleteAllItems, cartItem, quantity, price}=useCart();

    useEffect(()=>{
        getCartItemData();
    }, [getCartItemData]);

    const handleItemsOrder = useCallback((orderInfo) => {
        dispatch(orderItemThunk(orderInfo));
    }, [dispatch]);

    return (
        <CartLayout
        customerId = {customerId}
        itemsList={cartItem}
        amount={quantity}
        totalPrice={price}
        handleItemDecrement = {updatedItemQuantity}
        handleItemIncrement = {updatedItemQuantity}
        handleDeleteCartItem = {deleteItemFromCart}
        handleItemsOrder = {handleItemsOrder}
        handleDeleteAll = {deleteAllItems}
        cartLoading = {cartLoading}
        />
    )
}

export default CartContainer