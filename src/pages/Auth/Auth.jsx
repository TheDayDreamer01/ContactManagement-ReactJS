
import { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Auth = () => {

    const [register, setRegister] = useState(false);
    const [isDark, setDark] = useState(false);

    useEffect(() => {
        setDark(localStorage.getItem("isDark") === "true")
    }, [setDark]);

    return (
        <div className={`${isDark ? "dark" : ""}`}>
            <div className="flex flex-col h-screen p-4 md:px-8 items-center dark:bg-neutral-800 dark:text-white">
                <h1 className="text-3xl font-bold self-start">Nexio</h1>
                <div className="w-full max-w-sm">
                    <nav className="flex mt-6 mb-4"> 
                        <button className={`border-b ${register ? "border-none text-neutral-500" : "border-neutral-900"} w-full pb-4 text-sm dark:border-neutral-500`}
                                onClick={() => setRegister(false)}>
                            Sign Up
                        </button>
                        <button className={`border-b ${register ? "border-neutral-900" : "border-none text-neutral-500"} w-full pb-4 text-sm dark:border-neutral-500`}
                                onClick={() => setRegister(true)}>
                            Sign In
                        </button>
                    </nav>

                    {register ? <SignIn /> : <SignUp />}
                </div>
                
                <div className="flex-grow"></div>
                <p className="text-center text-xs py-4">© 2023 Nexio</p>
            </div>
        </div>
    );
};

export default Auth;

