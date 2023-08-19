import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}}>
            <section className="flex flex-col space-y-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold py-4 md:text-5xl">Sign In</h1>
                    <p className="text-sm md:m-2">Welcome back! Please sign in to access your account.</p>
                </div>

                <form className="flex flex-col">    
                    <label className="py-2 text-sm" htmlFor="email">Email</label>
                    <input className="border border-neutral-900 h-10 mb-3 px-2 rounded-md dark:bg-neutral-600" id="email" type="text" />
                    <label className="py-2 text-sm" htmlFor="password">Password</label>
                    <input className="border border-neutral-900 h-10 mb-3 px-2 rounded-md dark:bg-neutral-600" id="password" type="password" />

                    <Link className="mb-10 self-end text-sm underline" path="/">Forgot Password?</Link>
                    <button className="h-12 bg-neutral border-neutral-900 text-white text-sm rounded-md dark:bg-neutral-900">Sign In</button>
                </form>
            </section>
        </motion.div>
    );
};

export default SignIn;