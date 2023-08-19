import React, { useState, useEffect } from "react";
import { BiSolidContact, BiLogOut, BiUser, BiX, BiSearch, BiErrorCircle} from "react-icons/bi";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import ModalBox from "../../components/ModalBox";

export const Context = React.createContext();

const Dashboard = () => {
    
    const [isSignOut, setSignOut] = useState(false);
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
            <div className={`${isDark ? "dark" : ""} relative flex flex-col h-screen w-screen`}>
                {isSignOut ? <ModalBox  icon={<BiErrorCircle size={80}/>}
                                        title="Sign Out" message="Are you sure you want to sign out? You'll be missed!"
                                        onCancel={() => setSignOut(false)} /> : null}
                <Header />
                <main className="flex-grow flex">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSearchBar ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute md:hidden h-16 bg-white w-full border-b border-neutral-900 flex items-center p-4 dark:bg-neutral-800">
                        <div className="md:block relative w-full">
                            <BiSearch className="text-black absolute top-2 left-3 dark:text-white " size={26} />
                            <input
                                className="pl-10 pr-2 bg-neutral-100 w-full h-10 border border-neutral-900 rounded-md dark:bg-neutral-600"
                                placeholder="Search Contact"
                            />
                        </div>
                        <button
                            className="ml-2 rounded-md hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700"
                            onClick={() => setSearchBar(!isSearchBar)}
                        >
                            <BiX size={40} />
                        </button>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isNavbar ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        className={`${(isNavbar) ? "block" : "hidden"} md:hidden h-full w-full bg-[#0000006f] absolute top-0 left-0 z-10`}
                        onClick={() => setNavbar(!isNavbar)}>
                    </motion.div>

                    <nav className={`${isNavbar ? "translate-x-0" : "translate-x-[-100%]"} md:translate-x-0 bg-white w-72 absolute top-0 z-20 h-screen md:relative md:h-full transition-all ease border-r border-neutral-900 dark:border-neutral-500 dark:bg-neutral-800`}>
                        <div className="flex flex-col h-full p-4">
                            <button className="md:hidden self-end p-2 mb-4 hover:bg-neutral-200 dark:hover:bg-neutral-700  dark:text-white rounded-lg" 
                                    onClick={() => setNavbar(!isNavbar)}>
                                <BiX size={40}/>
                            </button>

                            <SideBarItem icon={<BiSolidContact size={24} />} title="Contacts" />
                            <SideBarItem icon={<BiUser size={24} />} title="Profile" />
                            <div className="flex-grow"></div>
                            <SideBarItem icon={<BiLogOut size={24} />} 
                                        title="Sign Out" itemOnClick={() => setSignOut(true)} />
                        </div>
                    </nav>

                    <div className="flex-grow bg-neutral-100 dark:bg-neutral-700">


                    </div>
                </main>
            </div>
        </Context.Provider>    
    );
};


// eslint-disable-next-line react/prop-types
const SideBarItem = ({ icon, title, itemOnClick }) => {
    return (
        <button className="flex items-center gap-4 p-4 rounded-md  mb-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600 transition-colors ease-out" onClick={itemOnClick}>
            {icon}
            <p className="text-md leading-2 font-normal">{title}</p>
        </button>
    );
};


export default Dashboard;
