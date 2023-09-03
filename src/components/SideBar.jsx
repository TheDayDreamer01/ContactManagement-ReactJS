/* eslint-disable react/prop-types */
import { BiX } from "react-icons/bi";
import { TbHexagon3D } from "react-icons/tb";
import { motion } from "framer-motion";

export const SideBar = ({ children, showNavBar, onSetShowNavBar}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${
          showNavBar ? "block" : "hidden"
        } absolute h-screen w-screen bg-[#0000006f] top-0 z-10`}
        onClick={onSetShowNavBar}
      ></motion.div>

      <nav
        className={`${
          showNavBar ? "translate-x-0" : "-translate-x-full"
        } absolute top-0 left-0 h-screen min-w-[18rem] bg-neutral-800 z-20 transition-all ease shadow-md md:relative md:translate-x-[100] dark:bg-neutral-900 lg:z-10`}
      >
        <div className="h-full flex flex-col text-white items-start p-4 md:px-8">
          <div className="w-full mb-4 space-y-4">
            <div className="self-start flex items-center">
              <TbHexagon3D size={40} className="mr-1" />
              <h1 className="text-3xl font-bold">Nexio</h1>
            </div>
            <hr />
          </div>
          {children}
        </div>
        <button
          className={`${
            showNavBar ? "-right-14" : "right-0"
          } absolute  top-4 text-black p-2 rounded-full bg-neutral-200  transition-all ease delay-100 hover:bg-neutral-300 md:hidden`}
          onClick={onSetShowNavBar}
        >
          <BiX size={26} />
        </button>
      </nav>
    </>
  );
};

export const SideBarItem = ({ icon, title, isActive, onPageChange }) => {
  return (
    <button
      className={`${
        isActive && "text-white dark:text-white"
      } p-4 flex items-center gap-4 w-full mb-2 rounded-md transition ease-out text-neutral-400 hover:bg-neutral-800`}
      onClick={onPageChange}
    >
      {icon}
      <p className="text-lg">{title}</p>
    </button>
  );
};
