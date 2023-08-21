/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiX } from "react-icons/bi"; 
import { motion } from "framer-motion";
import { Context } from "../pages/Dashboard";
import { TbHexagon3D } from "react-icons/tb";


export const SideBar = ({ children }) => {

    const [navBar, setNavBar] = useContext(Context);

    return (
        <>
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: navBar ? 1 : 0 }}
                        className={`${navBar ? "block" : "hidden"} absolute h-screen w-screen bg-[#0000006f] top-0 z-10`}
                        onClick={() => setNavBar(!navBar)}>
            </motion.div>
            <nav className={`${navBar ? "translate-x-0" : "-translate-x-full"} absolute top-0 left-0 h-screen w-72 bg-neutral-950 md:relative z-20 transition-all ease md:translate-x-[100] shadow-lg`}>
                <div className="h-full flex flex-col text-white items-start p-4 md:px-8">
                    <div className="w-full mb-4 space-y-4">
                        <div className="self-start flex items-center">
                            <TbHexagon3D size={40} className="mr-1"/>
                            <h1 className="text-3xl font-bold">Nexio</h1>
                        </div>
                        <hr />  
                    </div>
                    {children}
                </div>
                <button className={`${navBar ? "-right-14" : "right-0"} absolute md:hidden top-4 text-black p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 transition-all ease delay-100`}
                        onClick={() => setNavBar(!navBar)}>
                    <BiX size={26} />
                </button>
            </nav>
        </>
    );
};

export const SideBarItem = ({ icon, title, isActive, onPageChange }) => {
    return (
        <button className={`p-4 flex items-center gap-4 w-full mb-2 rounded-md transition ease-out hover:bg-neutral-800 text-neutral-500 ${isActive && "text-white" }`}
                onClick={onPageChange}>
            {icon}
            <p className="text-lg">{title}</p>
        </button>
    );
};
