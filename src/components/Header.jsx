import { useContext } from "react";
import { BiSearch, BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { Context } from "../pages/Dashboard";

const Header = () => {

    const [ navBar, setNavBar, dark, setDark ] = useContext(Context);
    
    return (
        <header className="p-4 dark:bg-neutral-900 transition-colors ease">
            <div className="md:mx-4 flex justify-between items-center">
                <button className="block md:hidden p-2 shadow-md rounded-full dark:bg-neutral-800 transition-colors ease dark:text-neutral-400 mr-2 bg-white"
                        onClick={() => setNavBar(!navBar)}>
                    <BiMenu size={26} />
                </button>
                <div className="relative w-full md:w-96">
                    <input  className="h-10 w-full rounded-full pl-11 pr-2 drop-shadow-md dark:bg-neutral-800 transition-colors ease dark:text-white"
                            type="text" 
                            placeholder="Search contact"/>
                    <BiSearch className=" absolute top-2 left-3 text-neutral-400"
                            size={26} />
                </div>
                <button className="hidden md:block p-2 shadow-md rounded-full dark:bg-neutral-800 transition-colors ease dark:text-neutral-400 bg-white"
                        onClick={() => setDark(!dark)}>
                    {(dark) ? <BiSun size={24} /> : <BiMoon size={24} /> } 
                </button>
            </div>
        </header>
    );
};

export default Header;