/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiSearch, BiMenu, BiMoon, BiSun } from "react-icons/bi";
import { Context } from "../pages/Dashboard";

const Header = ({ setSearchContact }) => {
  const [
    showNavBar,
    setShowNavBar,
    dark,
    setDark,
  ] = useContext(Context);

  const onSearchContact = (e) => setSearchContact(e.target.value);
  const onShowNavBar = () => setShowNavBar(!showNavBar);
  const onDarkMode = () => setDark(!dark)

  return (
    <header className="p-4 transition-colors ease dark:bg-neutral-800">
      <div className="md:mx-4 flex justify-between items-center">
        <button
          className="block p-2 mr-2 bg-white shadow-md rounded-full transition-colors ease dark:bg-neutral-700 md:hidden dark:text-neutral-400"
          onClick={onShowNavBar}
        >
          <BiMenu size={26} />
        </button>
        <div className="relative w-full md:w-96">
          <input
            className="h-10 w-full rounded-full pl-11 pr-2 drop-shadow-md transition-colors ease dark:bg-neutral-700 dark:text-white"
            type="text"
            placeholder="Search contact"
            onChange={onSearchContact}
          />
          <BiSearch
            className=" absolute top-2 left-3 text-neutral-400"
            size={26}
          />
        </div>
        <button
          className="hidden p-2 shadow-md rounded-full transition-colors ease dark:text-neutral-400 bg-white md:block dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          onClick={onDarkMode}
        >
          {dark ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
