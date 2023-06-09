import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({
    onClick,
    type,
    disabled,
    text,
    size="small",
    variant="contained",
    fullWidth = false,
}) => {
    return (<Button type = {type} fullWidth = {fullWidth} variant={variant} size={size} onClick={onClick} sx={{
        backgroundColor:'black', color:'white', ":hover": {
             bgcolor: "LightGray",
             color:'black'
           }}} disabled = {disabled}>
            {text}
    </Button>)
};

CustomButton.protoTypws = {
    onClick:PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    size: PropTypes.oneOf(['medium', 'large', 'small']),
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['contained', 'outlined', 'text'])
};

export default CustomButton;