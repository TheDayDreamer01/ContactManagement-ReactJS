import {
  useEffect,
  useState 
} from "react";
import {
  useNavigate,
  useLocation
} from "react-router-dom";
import { BiSolidLeftArrow } from "react-icons/bi";
import NotFoundSvg from "../../assets/svg/NotFound.svg";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dark, setDark] = useState(localStorage.getItem("isDark") === "true");

  useEffect(() => {
    setDark(localStorage.getItem("isDark") === "true");
  }, []);

  const onGoBack = () => navigate(-1);

  return (
    <main className={`${dark && "dark"}`}>
      <div className="h-screen w-screen flex justify-center items-center gap-20 dark:bg-neutral-800">
        <div className="bg-red-100 w-full h-80 opacity-40 dark:bg-red-900"></div>
        <div className="flex items-center gap-0 absolute flex-col md:flex-row">
          <img
            src={NotFoundSvg}
            alt="404"
            className="h-60 lg:h-80 xl:h-[30rem]"
          />
          <div className="text-start p-6 justify-center dark:text-white">
            <h1 className="text-4xl xl:text-6xl font-medium">Page Not Found</h1>
            <p className="text-sm lg:text-lg py-4">
              {"We're "}sorry, but the page {"you're"} trying to access{" "}
              {"doesn't"} exist.
              <br />
              <span className="font-medium text-red-400 ">
                http://localhost:3001{location.pathname}
              </span>
              <br />
            </p>
            <button
              className="flex items-center px-5 py-3 text-sm lg:text-md pr-8 shadow-md text-white uppercase font-medium bg-red-400 rounded-md hover:bg-red-600 transition-colors ease "
              onClick={onGoBack}
            >
              <BiSolidLeftArrow className="mr-2" /> Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
