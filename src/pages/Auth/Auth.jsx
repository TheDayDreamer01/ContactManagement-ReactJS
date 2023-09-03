import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbHexagon3D } from "react-icons/tb";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/useLoading.js";
import DarkPatternSvg from "../../assets/svg/DarkPattern.svg";
import LightsPatternSvg from "../../assets/svg/LightPattern.svg";

const Auth = () => {
  const navigate = useNavigate();

  // Use the useLoading hook to manage loading states
  const { loading, setOnLoading } = useLoading();
  const [register, setRegister] = useState(false);
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // Load dark mode preference from localStorage
    setDark(localStorage.getItem("isDark") === "true");

    // Check if the user is authenticated and navigate accordingly
    const isAuthenticated = sessionStorage.getItem("token");
    if (isAuthenticated !== null) {
      navigate("/dashboard", { replace: true });
    }
  }, [setDark, navigate, loading]);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      {loading && <Loading />}

      <div className="flex flex-col h-screen p-4 md:px-8 items-center dark:bg-neutral-800 dark:text-white overflow-x-hidden">

        {/* Background Patterns */}
        <div className="hidden md:block absolute bottom-0 w-64 lg:w-96 left-0">
          <img src={DarkPatternSvg} alt="pattern" className="dark:hidden" />
          <img src={LightsPatternSvg} alt="pattern" className="hidden dark:block" />
        </div>

        <div className="hidden md:block absolute top-0 w-64 lg:w-96 right-0">
          <img src={DarkPatternSvg} alt="pattern" className="dark:hidden" />
          <img src={LightsPatternSvg} alt="pattern" className="hidden dark:block" />
        </div>

        {/* Logo */}
        <div className="self-start flex items-center">
          <TbHexagon3D size={40} className="mr-1" />
          <h1 className="text-3xl font-bold">Nexio</h1>
        </div>

        {/* Sign In/Sign Up Tabs */}
        <div className="w-full max-w-sm">
          <nav className="flex mt-6 mb-4">
            <button
              className={`border-b ${
                register ? "border-none text-neutral-600" : "border-neutral-800"
              } w-full pb-4 text-sm dark:border-neutral-600`}
              onClick={() => setRegister(false)}
            >
              Sign In
            </button>
            <button
              className={`border-b ${
                register ? "border-neutral-800" : "border-none text-neutral-600"
              } w-full pb-4 text-sm dark:border-neutral-600`}
              onClick={() => setRegister(true)}
            >
              Sign Up
            </button>
          </nav>

          {/* Render Sign In or Sign Up component based on 'register' state */}
          {register ? (
            <SignUp setOnLoading={setOnLoading} />
          ) : (
            <SignIn setOnLoading={setOnLoading} />
          )}
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <p className="text-center text-xs py-4">© 2023 Nexio</p>
      </div>
    </div>
  );
};

export default Auth;
