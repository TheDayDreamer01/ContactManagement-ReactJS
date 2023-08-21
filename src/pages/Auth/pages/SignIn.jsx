import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SignInService } from "../../../services/authService.js";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [visible, setVisible] = useState(false);

  const setFormValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showPassword = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {

      const response = await SignInService(formData);
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data);
        navigate("/dashboard", { replace : true });

      } else if (response.status === 401) {
        errors.password = "Invalid user password.";
      } else if (response.status === 404) {
        errors.email = "User does not exists.";
      } else {
        // Navigate to Internal Server page
        console.log("Internal server error.");
      }
    } 
    setFormError(errors); 
  };

  const validateForm = (data) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!data.email.match(emailPattern)) {
      errors.email = "Invalid email address.";
    }

    if (data.password.trim().length < 6) {
      errors.password = "Password must at least be 6 characters long.";
    }

    return errors;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="flex flex-col space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold py-4 md:text-5xl">Sign In</h1>
          <p className="text-sm md:m-2">
            Welcome back! Please sign in to access your account.
          </p>
        </div>

        <form className="flex flex-col" onSubmit={onFormSubmit}>
          <label
            className="mt-2 py-2 text-sm text-neutral-600 dark:text-neutral-200"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={`${
              formError.email && "border border-red-500"
            } drop-shadow-md h-10 px-2 rounded-md dark:bg-neutral-700`}
            id="email"
            type="text"
            name="email"
            onChange={setFormValue}
          />
          {formError.email && (
            <p className="text-sm text-red-600">{formError.email}</p>
          )}

          <label
            className="mt-2 py-2 text-sm text-neutral-600 dark:text-neutral-200"
            htmlFor="password"
          >
            Password:
          </label>
          <div className="relative">
            <input
              className={`${
                formError.password && "border border-red-500"
              } w-full drop-shadow-md h-10 pl-2 pr-14 rounded-md dark:bg-neutral-700`}
              id="password"
              type={visible ? "text" : "password"}
              name="password"
              onChange={setFormValue}
            />
            <button className="absolute right-4 top-2" onClick={showPassword}>
              {visible ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
          </div>
          {formError.password && (
            <p className="text-sm text-red-600">{formError.password}</p>
          )}

          <Link className="mt-4 mb-8 self-end text-sm underline" path="/">
            Forgot Password?
          </Link>
          <button className="h-12 bg-neutral-800 text-white text-sm rounded-md dark:bg-neutral-900">
            Sign In
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default SignIn;
