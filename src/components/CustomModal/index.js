import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import { style } from './styles';

const CustomModal = ({open, onClose, titleText, descriptionText, onClick, handleCloseClick}) => {

    return (<Modal open={open}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
            <Box sx={{ ...style, position: 'absolute', width: 400 }}>
                <h2 id="parent-modal-title">{titleText}</h2>
                <p style={{marginBottom:15, marginTop:5}} id="parent-modal-description">
                 {descriptionText}
                </p>
                <div style={{display: "flex", gap:10}}> 
                    <Button size="medium" variant= "text" onClick={onClick} sx={{ color: 'darkred', alignItems:'center', ":hover": {
                      bgcolor: "darkred",
                      color: "white"
                    }}}> 
                        yes
                    </Button>
                    <Button size="medium" variant= "text" onClick={handleCloseClick} sx={{color: 'black', alignItems:'center', ":hover": {
                      bgcolor: "black",
                      color: "white"
                    }}}> 
                        no
                    </Button>
                </div>
            </Box>
    </Modal>)
};

CustomModal.protoTypes = {
    open:PropTypes.bool,
    onClose:PropTypes.func,
    titleText:PropTypes.string,
    descriptionText:PropTypes.string,
    onClick:PropTypes.func,
    handleCloseClick:PropTypes.func,
}

export default CustomModal