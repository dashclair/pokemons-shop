import { Button } from '@mui/material';
import PropTypes from 'prop-types';

import CartItemsCard from '../../../../components/CartItemsCard';
import CustomButton from '../../../../components/CustomButton';
import Spinner from '../../../../components/Spinner';

import styles from './styles.module.scss';

const CartLayout = ({
    itemsList,
    amount,
    customerId,
    totalPrice,
    handleItemDecrement,
    handleItemIncrement,
    handleDeleteCartItem,
    handleItemsOrder,
    handleDeleteAll,
    cartLoading


})=> {
   
    return (
        <div className={styles.wrapper} style={amount<3 ? ({height:800}):({height:'auto'})}>
             <h2 style={{marginTop:7, paddingLeft:25}}>Cart</h2>
            {cartLoading ? <Spinner/> :
            <div>

                <div className={styles.flex}> 
                    {amount===0 ? <p style={{marginTop:225, marginBottom:400, marginLeft:500, color:'gray' }}>Cart is empty</p> :
                    <div className={styles.items_wrapper}>
                    {itemsList.map(({id, name, price, image, quantity})=>{
                        return (
                            <CartItemsCard
                            id={id}
                            key = {id}
                            name={name}
                            price={price}
                            image={image}
                            quantity={quantity}
                            handleItemDecrement = {handleItemDecrement}
                            handleItemIncrement = {handleItemIncrement}
                            handleDeleteCartItem = {handleDeleteCartItem}
                            />
                        )
                    })}
                    </div> }
                    <div className={styles.delete__order}> 
                        <div className={styles.orders_wrapper}>
                            <div className={styles.flex__items}>
                                <p>Price:</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className={styles.flex__items}>
                                <p>Amount:</p>
                                <p>{amount}</p>
                            </div>
                            <div className={styles.flex__items_total}>
                                <p>TOTAL:</p>
                                <h3>${totalPrice}</h3>
                            </div>
                            <CustomButton fullWidth ='true' sx={{}} size='medium' text='order' onClick = {()=>handleItemsOrder({totalPrice, itemsList, customerId})}/>
                        </div>
                        <Button disabled={amount===0 ? true : false}size="small" variant= "text" onClick={handleDeleteAll} sx={{ color: 'darkred', fontWeight:'bold', alignItems:'center', ":hover": {
                        bgcolor: "LightGray",
                        color:'darkred'
                        }}}> delete all </Button>
                
                    </div>
                </div>
            </div> }
        
        </div>
    )
};

CartLayout.propTypes = {
    itemsList: PropTypes.arrayOf(PropTypes.object),
    amount: PropTypes.number,
    customerId: PropTypes.string,
    totalPrice: PropTypes.number,
    handleItemDecrement: PropTypes.func,
    handleItemIncrement: PropTypes.func,
    handleDeleteCartItem: PropTypes.func,
    handleItemsOrder: PropTypes.func,
    handleDeleteAll: PropTypes.func,
    cartLoading: PropTypes.bool,

};

export default CartLayout