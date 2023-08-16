const SignUp = () => {
    return (
        <>
            <section className="flex flex-col space-y-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold py-4 md:text-5xl">Sign Up</h1>
                    <p className="text-sm md:m-2">Join us to start connecting.</p>
                </div>

                <form className="flex flex-col">
                    <div className="flex gap-4 mb-3 md:gap-6">
                        <span className="flex-grow">
                            <label className="py-2 text-sm block" htmlFor="first-name">First Name</label>
                            <input className="border border-black px-2 h-10 w-full" id="first-name" type="text" />
                        </span>
                        <span className="flex-grow">
                            <label className="py-2 text-sm block" htmlFor="last-name">Last Name</label>
                            <input className="border border-black px-2 h-10 w-full" id="last-name" type="text" />
                        </span>
                    </div>
                    <label className="py-2 text-sm" htmlFor="username">Username</label>
                    <input className="border border-black px-2 h-10 mb-3" id="username" type="text" />
                    <label className="py-2 text-sm" htmlFor="email">Email</label>
                    <input className="border border-black px-2 h-10 mb-3" id="email" type="text" />
                    <label className="py-2 text-sm" htmlFor="password">Password</label>
                    <input className="border border-black px-2 h-10 mb-3" id="password" type="password" />
                    <label className="py-2 text-sm" htmlFor="confirm-password">Confirm Password</label>
                    <input className="border border-black px-2 h-10 mb-10" id="confirm-password" type="password" />

                    <button className="h-12 bg-black text-white text-sm rounded-sm">Sign Up</button>
                </form>                
            </section>
        </>
    );
};

export default SignUp;