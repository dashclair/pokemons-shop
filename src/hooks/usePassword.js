import { useState } from "react";

const usePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return {showPassword, handleClickShowPassword, handleMouseDownPassword}
};

export default usePassword