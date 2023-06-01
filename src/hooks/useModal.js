import { useState } from "react";

const useModal = () => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    return {handleClose, handleOpen, open}

};

export default useModal