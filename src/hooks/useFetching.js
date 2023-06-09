import { useState, useCallback } from "react"

const useFetching = (requestFunction) => {
    const [data, setData] = useState();
    const [errors, setErrors] = useState();
    const [isLoading, setLoading] = useState();

    const handleDataLoad = useCallback((...args)=>{
        (async()=>{
            try {
                setLoading(true)
                setErrors(null);
                const response = await requestFunction(...args);

                setData(response)
            } catch(error) {
                setErrors(error.response.data)
            } finally {
                setLoading(false)
            }
        })()
    }, [requestFunction])
    return {data, errors, isLoading, handleDataLoad}
}

export default useFetching