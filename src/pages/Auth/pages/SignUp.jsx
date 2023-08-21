import { motion } from "framer-motion";

const SignUp = () => {
    return (
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}}>
            <section className="flex flex-col space-y-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold py-4 md:text-5xl">Sign Up</h1>
                    <p className="text-sm md:m-2">Join us to start connecting.</p>
                </div>

                <form className="flex flex-col">
                    <div className="flex gap-4 mb-3 md:gap-6">
                        <span className="flex-grow">
                            <label className="ml-2 py-2 text-sm block" htmlFor="first-name">First Name</label>
                            <input className="drop-shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-800" id="first-name" type="text" />
                        </span>
                        <span className="flex-grow">
                            <label className="ml-2 py-2 text-sm block" htmlFor="last-name">Last Name</label>
                            <input className="drop-shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-800" id="last-name" type="text" />
                        </span>
                    </div>
                    <label className="ml-2 py-2 text-sm" htmlFor="username">Username</label>
                    <input className="drop-shadow-md px-2 h-10 mb-3 rounded-md dark:bg-neutral-800" id="username" type="text" />
                    <label className="ml-2 py-2 text-sm" htmlFor="email">Email</label>
                    <input className="drop-shadow-md px-2 h-10 mb-3 rounded-md dark:bg-neutral-800" id="email" type="text" />
                    <label className="ml-2 py-2 text-sm" htmlFor="password">Password</label>
                    <input className="drop-shadow-md px-2 h-10 mb-3 rounded-md dark:bg-neutral-800" id="password" type="password" />
                    <label className="ml-2 py-2 text-sm" htmlFor="confirm-password">Confirm Password</label>
                    <input className="drop-shadow-md px-2 h-10 mb-10 rounded-md dark:bg-neutral-800" id="confirm-password" type="password" />

                    <button className="h-12 bg-neutral-950 text-white text-sm rounded-md">Sign Up</button>
                </form>                
            </section>
        </motion.div>
    );
};

export default SignUp;