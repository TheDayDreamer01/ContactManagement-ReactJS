import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiSolidContact, BiLogOut, BiUser, BiX, BiSearch} from "react-icons/bi";
import Header from "../../components/Header";

export const Context = React.createContext();

const Dashboard = () => {
    
    const [isNavbar, setNavbar] = useState(false);
    const [isSearchBar, setSearchBar] = useState(false);
    const [isDark, setDark] = useState(
        localStorage.getItem("isDark") === "true"
    );

    useEffect(() => {
        localStorage.setItem("isDark", isDark);
    }, [isDark]);

    return (
        <Context.Provider value={[ 
            isNavbar, setNavbar, 
            isDark, setDark, 
            isSearchBar, setSearchBar]}>
            <div className={`${isDark ? "dark" : ""} flex flex-col h-screen w-screen`}>
                <Header />
                <main className="flex-grow flex">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSearchBar ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute md:hidden h-16 bg-white w-full border-b border-black flex items-center p-4">
                        <div className="md:block relative w-full">
                            <BiSearch className="text-black absolute top-2 left-3" size={26} />
                            <input
                                className="pl-10 pr-2 bg-zinc-100 w-full h-10 border border-black rounded-md"
                                placeholder="Search Contact"
                            />
                        </div>
                        <button
                            className="ml-2 rounded-md hover:bg-zinc-200"
                            onClick={() => setSearchBar(!isSearchBar)}
                        >
                            <BiX size={40} />
                        </button>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isNavbar ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        className={`${isNavbar ? "block" : "hidden"} md:hidden h-full w-full bg-[#0000006f] absolute top-0 left-0 z-10`}
                        onClick={() => setNavbar(!isNavbar)}>
                    </motion.div>

                    <nav className={`${isNavbar ? "translate-x-0" : "translate-x-[-100%]"} md:translate-x-0 bg-white w-72 absolute top-0 z-20 h-screen md:relative md:h-full transition-all ease border-r border-zinc-900 dark:border-zinc-500 dark:bg-zinc-800`}>
                        <div className="flex flex-col h-full p-4">
                            <button className="md:hidden self-end p-2 mb-4 hover:bg-zinc-200 rounded-lg" 
                                    onClick={() => setNavbar(!isNavbar)}>

                                <BiX size={40}/>
                            </button>
                            <SideBarItem icon={<BiSolidContact size={24} />} title="Contacts" />
                            <SideBarItem icon={<BiUser size={24} />} title="Profile" />
                            <div className="flex-grow"></div>
                            <SideBarItem icon={<BiLogOut size={24} />} 
                                        title="Sign Out" />
                        </div>
                    </nav>

                    <div className="flex-grow bg-zinc-100 dark:bg-zinc-700">
                    </div>
                </main>
            </div>
        </Context.Provider>    
    );
};


// eslint-disable-next-line react/prop-types
const SideBarItem = ({ icon, title }) => {
    return (
        <button className="flex items-center gap-4 p-4 rounded-md bg-zinc-100 hover:bg-zinc-200 mb-2">
            {icon}
            <p className="text-md leading-2 font-normal">{title}</p>
        </button>
    );
};


export default Dashboard;
