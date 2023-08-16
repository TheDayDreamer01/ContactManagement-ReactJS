import { useState } from "react";
import { motion } from "framer-motion";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Auth = () => {

    const [register, setRegister] = useState(false);

    return (
        <>
            <div className="flex flex-col h-screen px-6 py-4 items-center">
                <h1 className="text-2xl font-bold self-start md:text-3xl">Logo</h1>
                <div className="w-full max-w-md">
                    <nav className="flex mt-6 mb-4">
                        <button className={`border-b ${register ? "border-none text-neutral-400" : "border-black"} w-full pb-4 text-sm`}
                                onClick={() => setRegister(false)}>
                            Sign Up
                        </button>
                        <button className={`border-b ${register ? "border-black" : "border-none text-neutral-400"} w-full pb-4 text-sm`}
                                onClick={() => setRegister(true)}>
                            Sign In
                        </button>
                    </nav>

                    {register ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="signin">
                            <SignIn />
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="signup">
                            <SignUp />
                        </motion.div>
                    )}
                </div>
                
                <div className="flex-grow"></div>
                <p className="text-center text-xs py-4">© 2023 ContactConnect Pro</p>
            </div>
        </>
    );
};

export default Auth;

