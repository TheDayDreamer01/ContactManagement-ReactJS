import { useState } from "react";

const useFormError = () => {
    const [formError, setFormError] = useState({});

    const onSetFormError = (data) => {
        setFormError(data);
    };
    
    return { formError, onSetFormError };
}


export default useFormError;