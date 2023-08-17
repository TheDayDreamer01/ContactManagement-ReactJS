import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {

    const [token, setToken] = useState(null);
    
    useEffect(() => {
        setToken(localStorage.getItem("token"));        
    }, [token]);

    return (
        token === null ?    
            <Navigate to="/"/> :
            <Outlet />
    );
};

export default AuthRequired;