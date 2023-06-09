import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState} from "react";

import { cartItemSelector, cartPriceSelector, cartQuantitySelector } from "../pages/Cart/selectors";
import { addItemThunk } from "../pages/Cart/api/thunk/addItem";
import { getItemsThunk } from "../pages/Cart/api/thunk/getItems";
import updateItemThunk from "../pages/Cart/api/thunk/updateItem";
import { deleteItemThunk } from "../pages/Cart/api/thunk/deleteItem";
import { deleteAllItemsThunk } from "../pages/Cart/api/thunk/deleteAllItems";




const useCart = () => {
    const dispatch = useDispatch();

    const cartItem = useSelector(cartItemSelector);
    const price = useSelector(cartPriceSelector);
    const quantity = useSelector(cartQuantitySelector);


    const getCartItemData = useCallback(()=>{
        dispatch(getItemsThunk())
    }, [dispatch]);

    const addItemToCart = useCallback(
        (itemData)=>{
            dispatch(addItemThunk(itemData))
    }, [dispatch]);

    const updatedItemQuantity = useCallback((payload)=>{
        dispatch(updateItemThunk(payload))
    }, [dispatch]);

    const deleteItemFromCart = useCallback((itemId)=>{
        dispatch(deleteItemThunk(itemId))
    }, [dispatch]);

    const deleteAllItems = useCallback(()=>{
        const ids = cartItem.map(item => item.id);
        dispatch(deleteAllItemsThunk(ids));
    }, [dispatch])

    return {cartItem, price, quantity, getCartItemData, addItemToCart, updatedItemQuantity, deleteItemFromCart, deleteAllItems}
};

export default useCart