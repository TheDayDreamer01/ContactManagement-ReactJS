import { useState, useEffect } from "react";
import MaintenanceSvg from "../../assets/svg/Maintenance.svg";

/**
 * Errors - A component displaying a 500 Internal Server Error message.
 * Provides an option to refresh the page or try again later.
 */
const Errors = () => {
  // State to track the dark mode
  const [dark, setDark] = useState(localStorage.getItem("isDark") === "true");

  // Effect to update the dark mode state
  useEffect(() => {
    setDark(localStorage.getItem("isDark") === "true");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex flex-col items-center p-6 dark:bg-neutral-800 h-screen ">
        {/* Displaying the maintenance image */}
        <img
          src={MaintenanceSvg}
          alt="Internal Server Error"
          className="h-72 my-10"
        />
        {/* Displaying the error message */}
        <h1 className="text-red-600 font-bold text-lg md:text-2xl dark:text-red-400">
          500 - Internal Server Error
        </h1>
        <p className="text-red-600 text-sm md:text-md py-2 dark:text-red-400">
          Please refresh this page or try again later.
        </p>
      </div>
    </div>
  );
};

export default Errors;
