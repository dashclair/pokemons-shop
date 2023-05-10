import { useState, useCallback } from "react";

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue)

    const handleChange = useCallback(({target}) => {

        const { name, value } = target;

        setForm((state) => {
            return {
              ...state,
              [name]: value,
            };
        })
    }, []);

    const handleReset = useCallback(() => {
        setForm(initialValue)
    }, [initialValue])
    return {form, handleChange, handleReset}
}

export default useForm