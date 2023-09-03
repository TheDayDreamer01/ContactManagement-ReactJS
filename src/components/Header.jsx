/* eslint-disable react/prop-types */
import { BiSearch, BiMenu, BiMoon, BiSun } from "react-icons/bi";

/**
 * Header - A component for rendering the application header.
 *
 * @param {Object} props - The component's properties.
 * @param {boolean} props.isDarkMode - A flag indicating whether the application is in dark mode.
 * @param {function} props.setSearchContact - A function to handle search contact input changes.
 * @param {function} props.onSetShowNavBar - A function to toggle the visibility of the navigation sidebar.
 * @param {function} props.onSetIsDarkMode - A function to toggle the dark mode of the application.
 */
const Header = ({
  isDarkMode,
  setSearchContact,
  onSetShowNavBar,
  onSetIsDarkMode,
}) => {
  /**
   * Handles changes in the search contact input field.
   *
   * @param {Object} e - The event object representing the input change.
   */
  const onSearchContact = (e) => setSearchContact(e.target.value);

  return (
    <header className="p-4 transition-colors ease dark:bg-neutral-800">
      <div className="md:mx-4 flex justify-between items-center">
        {/* Menu button (visible on mobile) */}
        <button
          className="block p-2 mr-2 bg-white shadow-md rounded-full transition-colors ease dark:bg-neutral-700 md:hidden dark:text-neutral-400"
          onClick={onSetShowNavBar}
        >
          <BiMenu size={26} />
        </button>
        {/* Search input field */}
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
        {/* Dark mode toggle button (visible on desktop) */}
        <button
          className="hidden p-2 shadow-md rounded-full transition-colors ease dark:text-neutral-400 bg-white md:block dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          onClick={onSetIsDarkMode}
        >
          {isDarkMode ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
