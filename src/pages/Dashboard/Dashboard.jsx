import { useState, useEffect } from "react";
import { BiSun, BiMoon, BiSearch, BiMenuAltRight } from "react-icons/bi";

const Dashboard = () => {

    const [isNavbar, setNavbar] = useState(false);
    const [isDark, setDark] = useState(
        localStorage.getItem("isDark") === "true"
    );

    useEffect(() => {
        localStorage.setItem("isDark", isDark);
    }, [isDark]);

    return (
        <div className={`${isDark ? "dark" : ""} flex flex-col h-screen w-screen`}>
            <header className={`p-4 md:px-8 border-b border-zinc-900 dark:border-zinc-500 grid grid-cols-2 md:grid-cols-3 items-center ${isDark ? "dark:bg-zinc-800 dark:text-white" : ""}`}>
                <div className="flex items-center">
                    <button className="block md:hidden p-2 mr-2 rounded-md hover:bg-zinc-200"
                            onClick={() => setNavbar(!isNavbar)}>
                        <BiMenuAltRight size={30}/>
                    </button>
                    <h1 className="self-center text-3xl font-bold ">Nexio</h1>
                </div>
                <div className="hidden md:block relative">
                    <input
                        className="border pl-12 pr-2 border-zinc-900 dark:border-zinc-500 h-10 px-2 w-full justify-self-center bg-zinc-100 dark:bg-white dark:text-black rounded-sm"
                        type="text" placeholder="Search Contact"
                    />
                    <BiSearch
                        className="text-black absolute top-2 left-3"
                        size={26}
                    />
                </div>
                <button
                    className="justify-self-end"
                    onClick={() => setDark(!isDark)}
                >
                    {isDark ? <BiSun size={26} /> : <BiMoon size={26} />}
                </button>
            </header>
            <main className="flex-grow flex">
                <div className={`${isNavbar ? "block" : "hidden"} md:hidden h-full w-full bg-[#0000006f] absolute top-0 left-0 z-10`}
                    onClick={() => setNavbar(!isNavbar)}>
                </div>

                <nav className={`${isNavbar ? "translate-x-0" : "translate-x-[-100%]"} md:translate-x-0 bg-white w-72 absolute top-0 z-20 h-screen md:relative md:h-full transition-all ease-linear border-r border-zinc-900 dark:border-zinc-500 dark:bg-zinc-800`}>
                    hi
                </nav>
        
                <div className="flex-grow bg-zinc-100 dark:bg-zinc-700">
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
