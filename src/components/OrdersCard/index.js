
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';


const OrdersCard = ({name, image, price, quantity}) => {

    return (
        <div> 
        <Card sx={{ marginBottom:1}}>
          <Box sx={{display:'flex', gap:5}}>
          <CardMedia
            alt=""
            sx={{height:140, width:140}}
            image={image}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount: {quantity}
          </Typography>
        </CardContent>
          </Box>
      </Card>
        </div>
    )
};

OrdersCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default OrdersCard