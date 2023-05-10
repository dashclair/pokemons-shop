import Pagination from '@mui/material/Pagination';

const MaterialPagination = ({handlePageChange, page}) =>{
    return (
       <Pagination onChange={handlePageChange} page={page} count={15}/>
    )
}

export default MaterialPagination