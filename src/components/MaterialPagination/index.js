import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';

const MaterialPagination = ({handlePageChange, page}) =>{
    return (
       <Pagination onChange={handlePageChange} page={page} count={15}/>
    )
};

MaterialPagination.propTypes = {
    handlePageChange: PropTypes.func,
    page: PropTypes.number
}

export default MaterialPagination