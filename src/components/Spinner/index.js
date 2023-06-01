import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
    <Box sx={{height:1000, display:'flex', justifyContent:'center', marginTop:30}}>
        <CircularProgress color="success"/>
    </Box>)
};

export default Spinner