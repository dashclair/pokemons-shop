import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { startCase } from 'lodash';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';

import styles from './styles.module.scss';



const PokeCard = ({
  id, 
  image,
  name,
  price,
  handleAddToCart,
  handleLearnMore,
  isDisabled

}) => {

    return ( 
    <Card sx={{ width: 250 }}>
        <CardMedia
          alt=""
          sx={{height:200}}
          image={image}
        />
        <CardContent>
          <h2>
          {startCase(name)}
          </h2>
        </CardContent>
        <CardActions>
          <div className = {styles.buttons_wrapper}>
          <Typography variant="h6" color="text.secondary" sx={{marginRight:4, paddingLeft:1}}>
            $ {price}
          </Typography>
          <Button sx={{color:"black"}} onClick={()=> handleLearnMore(id)} size="small">more</Button>
          <CustomButton disabled ={isDisabled} onClick={()=>handleAddToCart({id, name, image, price, quantity:1})} text={
            isDisabled ? "added" : "buy" 
          }/>
          </div>
        </CardActions>
      </Card>
    )
};

PokeCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  handleAddToCart: PropTypes.func,
  handleLearnMore: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default PokeCard