import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { startCase } from "lodash";
import PropTypes from 'prop-types';

import CustomModal from '../CustomModal';
import { useModal } from '../../hooks';


const CartItemsCard = (
    {
        id, 
        image,
        name,
        price,
        quantity,
        handleItemDecrement,
        handleItemIncrement,
        handleDeleteCartItem
      }
) => {
    const {open, handleOpen, handleClose}= useModal()


    return (
        <Card sx={{width:700}}>
            <Box sx={{ display: 'flex', justifyContent:'space-between'}}>
                <Box sx={{ display: 'flex'}}>
                    <CardMedia
                    alt=""
                    sx={{height:'fullheight' ,width: 200}}
                    image={image}
                    />
                    <Box sx={{ display: 'flex', flexDirection:'column'}} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {startCase(name)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                $ {price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Button variant="contained" size="small" onClick={()=> handleItemDecrement({id, quantity:quantity-1})} sx={{
                                     backgroundColor:'black', ":hover": {
                                          bgcolor: "lightgray"
                                        }}} disabled = {quantity===1 ? true : false}>
                                        <RemoveOutlinedIcon sx={{ color: 'white'}}/> 
                                </Button>
                                <Typography variant="body2" color="text.secondary" sx={{paddingLeft:1, paddingRight:1}}>
                                    {quantity}
                                </Typography>
                                <Button size="small" onClick={()=>handleItemIncrement({id, quantity: quantity+1})} sx={{
                                     backgroundColor:'black', ":hover": {
                                          bgcolor: "lightgray"
                                        }}}> 
                                    <AddOutlinedIcon sx={{ color: 'white'}} />
                                </Button>
                            </Box>
                        </CardActions>
                    </Box>
                </Box>
                <Box sx={{ display:'flex',flexDirection:'column', alignItems: 'center', marginRight:2}}>
                    <Typography variant="h5" component="div" sx={{marginTop:4, alignItems: 'center'}}>
                        $ {price*quantity}
                    </Typography>
                    <div>
                        <Button size="medium" onClick={handleOpen} sx={{marginTop:4, backgroundColor: "darkred", color: 'white', alignItems:'center', ":hover": {
                                          bgcolor: "lightgray"
                                        }}}> 
                            delete
                        </Button>
                        <CustomModal open = {open}
                        onClose={handleClose}
                        titleText='Are you sure?'
                        descriptionText='Do you really want to delete this item?'
                        onClick = {()=>handleDeleteCartItem(id)}
                        handleCloseClick = {handleClose}
                        />
                    </div>
                </Box>
            </Box>
      </Card>
    )
}

CartItemsCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    handleItemDecrement: PropTypes.func,
    handleItemIncrement: PropTypes.func,
    handleDeleteCartItem: PropTypes.func,
}

export default CartItemsCard