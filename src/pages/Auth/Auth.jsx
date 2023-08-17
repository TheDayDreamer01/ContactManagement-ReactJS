
import { useState } from "react";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Auth = () => {

    const [register, setRegister] = useState(false);

    return (
        <div className="flex flex-col h-screen px-6 py-4 items-center">
            <h1 className="text-2xl font-bold self-start md:text-3xl">Nexio</h1>
            <div className="w-full max-w-md">
                <nav className="flex mt-6 mb-4">
                    <button className={`border-b ${register ? "border-none text-stone-400" : "border-black"} w-full pb-4 text-sm`}
                            onClick={() => setRegister(false)}>
                        Sign Up
                    </button>
                    <button className={`border-b ${register ? "border-black" : "border-none text-stone-400"} w-full pb-4 text-sm`}
                            onClick={() => setRegister(true)}>
                        Sign In
                    </button>
                </nav>

                {register ? <SignIn /> : <SignUp />}
            </div>
            
            <div className="flex-grow"></div>
            <p className="text-center text-xs py-4">© 2023 Nexio</p>
        </div>
    );
};

export default Auth;

