import { useState } from "react";

const useVisible = () => {
    const [ visible, setVisible ] = useState(false);

    const onSetVisibility = (e) => {
        e.preventDefault();
        setVisible(prev => !prev);
    };

    return { visible, onSetVisibility };
};

export default useVisible;