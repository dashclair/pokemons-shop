import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialPage) => {

    const [params, setParams] = useSearchParams({page:initialPage, litimit:12});

    const page = +Object.fromEntries(params.entries()).page;

    useEffect(()=>{
        setParams({page, litimit:12})
    },[]);

    const handlePageChange = (_, page) =>{
        setParams({page,litimit:12})
    };

    return [page, handlePageChange]
}

export default usePagination