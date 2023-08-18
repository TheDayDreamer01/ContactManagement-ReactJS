import { useContext } from "react";
import { BiSun, BiMoon, BiSearch, BiMenuAltRight } from "react-icons/bi";
import { Context } from "../pages/Dashboard/Dashboard";

const Header = () => {

    const [isNavbar, setNavbar, isDark, setDark,
        isSearchBar, setSearchBar] = useContext(Context);
    
    return (
        <header className={`p-4 md:px-8 border-b border-zinc-900 dark:border-zinc-500 grid grid-cols-2 md:grid-cols-3 items-center ${isDark ? "dark:bg-zinc-800 dark:text-white" : ""}`}>
            <div className="flex items-center">
                <button className="block md:hidden p-2 mr-2 rounded-md hover:bg-zinc-200"
                    onClick={() => setNavbar(!isNavbar)}>
                    <BiMenuAltRight size={30} />
                </button>
                <h1 className="self-center text-3xl font-bold ">Nexio</h1>
            </div>
            <div className="hidden md:block relative">
                <input
                    className="border pl-12 pr-2 border-zinc-900 dark:border-zinc-500 h-10 px-2 w-full justify-self-center bg-zinc-100 dark:bg-white dark:text-black rounded-md"
                    type="text" placeholder="Search Contact"
                />
                <BiSearch
                    className="text-black absolute top-2 left-3"
                    size={26}
                />
            </div>
            <div className="justify-self-end flex items-center gap-6">
                <button className="block md:hidden"
                    onClick={() => setSearchBar(!isSearchBar)}>
                    <BiSearch size={28} />
                </button>
                <button className="p-2 rounded-full bg-zinc-200"
                    onClick={() => setDark(!isDark)}>
                    {isDark ? <BiSun size={28} /> : <BiMoon size={26} />}
                </button>
            </div>
        </header>
    );
};

export default Header;