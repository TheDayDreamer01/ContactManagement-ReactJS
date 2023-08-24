import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbHexagon3D } from "react-icons/tb";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Loading from "../../components/Loading";

const Auth = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [isDark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDark(localStorage.getItem("isDark") === "true");
    const isAuthenticated = sessionStorage.getItem("token");
    if (isAuthenticated !== null) {
      navigate("/dashboard", { replace: true });
    }
  }, [setDark, navigate , loading]);

  return (
    <div className={`${isDark ? "dark" : ""}`}>

      {loading && <Loading />}
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

          {register ? (
            <SignUp setLoading={setLoading} />
          ) : (
            <SignIn setLoading={setLoading} />
          )}
        </div>

        <div className="flex-grow"></div>
        <p className="text-center text-xs py-4">© 2023 Nexio</p>
      </div>
    </div>
  );
};

export default Auth;
