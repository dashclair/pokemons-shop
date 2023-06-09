import { useDispatch, useSelector } from "react-redux";
import { emailSelector, firstNameSelector, genderSelector, idProfileSelector, lastNameSelector, orderDataSelector, phoneSelector, profileLoadingSelector, rolesSelector } from "../selectors";
import ProfileLayout from "../components/ProfileLayout";
import { getOrderItemsThunk } from "../api/thunks/getOrderItems";
import { useEffect } from "react";

const ProfileContainer = () => {

    const dispatch = useDispatch();

    const name =  useSelector(firstNameSelector);
    const email = useSelector(emailSelector);
    const phone = useSelector(phoneSelector);
    const roles = useSelector(rolesSelector);
    const userId = useSelector(idProfileSelector);
    const lastName = useSelector(lastNameSelector);
    const gender = useSelector(genderSelector);

    const profileLoading = useSelector(profileLoadingSelector);

    const orderData = useSelector(orderDataSelector);

    const items = orderData.map((order) => (
        order.itemsList.map(item => ({
          id: item.id,
          name: item.name,
          image: item.image,
          price:item.price,
          quantity: item.quantity
        }))
      )).flat();

    useEffect(()=>{
        dispatch(getOrderItemsThunk())
    }, [dispatch]);


    return (
    <ProfileLayout
    profileName={name}
    email = {email}
    phone = {phone}
    roles = {roles}
    userId = {userId}
    items = {items}
    lastName = {lastName}
    gender={gender}
    profileLoading = {profileLoading}

    />
    )
};

export default ProfileContainer;