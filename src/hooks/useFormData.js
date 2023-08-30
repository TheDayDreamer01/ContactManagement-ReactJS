import { useState } from "react";


const useFormData = (initialData) => {
    const [formData, setFormData] = useState(initialData);

    const onSetFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    return { formData, onSetFormData, setFormData };
}

export default useFormData;