import { useContext } from "react";
import { BiSun, BiMoon, BiSearch, BiMenuAltRight } from "react-icons/bi";
import { Context } from "../pages/Dashboard/Dashboard";

const Header = () => {

    const [isNavbar, setNavbar, 
            isDark, setDark,
            isSearchBar, setSearchBar] = useContext(Context);
    
    return (
        <header className={`p-4 md:px-8 dark:border-neutral-500 grid grid-cols-2 bg-neutral-950 md:grid-cols-3 items-center ${isDark ? "dark:text-white" : ""}`}>
            <div className="flex items-center">
                <button className="block md:hidden p-2 mr-2 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-800"
                    onClick={() => setNavbar(!isNavbar)}>
                    <BiMenuAltRight size={30} className="text-white"/>
                </button>
                <h1 className="self-center text-3xl font-bold text-white">Nexio</h1>
            </div>
            <div className="hidden md:block relative">
                <input
                    className=" pl-12 pr-2  dark:border-neutral-500 h-10 px-2 w-full justify-self-center bg-neutral-100 dark:bg-neutral-700 dark:text-white rounded-md"
                    type="text" placeholder="Search Contact"
                />
                <BiSearch
                    className="text-black absolute top-2 left-3 dark:text-white"
                    size={26}
                />
            </div>
            <div className="justify-self-end flex items-center gap-6">
                <button className="block md:hidden"
                    onClick={() => setSearchBar(!isSearchBar)}>
                    <BiSearch size={28} className="dark:text-white"/>
                </button>
                <button className="p-2 rounded-full dark:bg-neutral-800 bg-neutral-100"
                    onClick={() => setDark(!isDark)}>
                    {isDark ? <BiSun size={28} className="dark:text-white"/> : <BiMoon size={26} />}
                </button>
            </div>
        </header>
    );
};

export default Header;