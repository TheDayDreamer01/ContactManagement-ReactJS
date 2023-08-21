import { useState, useEffect } from "react";
import { TbHexagon3D } from "react-icons/tb";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Auth = () => {
  const [register, setRegister] = useState(false);
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem("isDark") === "true");
  }, [setDark]);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="flex flex-col h-screen p-4 md:px-8 items-center dark:bg-neutral-800 dark:text-white">
        <div className="self-start flex items-center">
          <TbHexagon3D size={40} className="mr-1" />
          <h1 className="text-3xl font-bold">Nexio</h1>
        </div>
        <div className="w-full max-w-sm">
          <nav className="flex mt-6 mb-4">
            <button
              className={`border-b ${
                register ? "border-none text-neutral-600" : "border-neutral-800"
              } w-full pb-4 text-sm dark:border-neutral-600`}
              onClick={() => setRegister(false)}
            >
              Sign Up
            </button>
            <button
              className={`border-b ${
                register ? "border-neutral-800" : "border-none text-neutral-600"
              } w-full pb-4 text-sm dark:border-neutral-600`}
              onClick={() => setRegister(true)}
            >
              Sign In
            </button>
          </nav>

          {register ? <SignIn /> : <SignUp />}
        </div>

        <div className="flex-grow"></div>
        <p className="text-center text-xs py-4">© 2023 Nexio</p>
      </div>
    </div>
  );
};

export default Auth;
