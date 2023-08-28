/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SignInService } from "../../services/authService.js";
import {
  validateEmail,
  validatePasswordLength,
} from "../../utils/validation.js";
import useSignInFormData from "../../hooks/useFormData.js";
import useFormError from "../../hooks/useFormError.js";
import useVisible from "../../hooks/useVisible.js";

const SignIn = ({ setOnLoading }) => {
  const navigate = useNavigate();

  const { formData, onSetFormData } = useSignInFormData({
    email: "",
    password: "",
  });
  const { formError, onSetFormError } = useFormError();
  const { visible, onSetVisibility } = useVisible();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.values(errors).every((value) => value === "")) {
      try {
        setOnLoading(true);
        const response = await SignInService(formData);

        if (response.status === 200) {
          sessionStorage.setItem("token", response.data);
          setOnLoading(false);
          navigate("/dashboard", { replace: true });
        } else if (response.status === 401) {
          errors.password = "Incorrect Password. Please try again later.";
        } else if (response.status === 404) {
          errors.email = "Invalid email address. Please enter a valid email.";
        } else {
          setOnLoading(false);
          navigate("/error");
        }
      } catch (error) {
        setOnLoading(false);
        navigate("/error", { replace: true });
      }
    }
    setOnLoading(false);
    onSetFormError(errors);
  };

  const validateForm = (data) => {
    const errors = {};
    errors.email = validateEmail(data.email);
    errors.password = validatePasswordLength(data.password);
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
            } drop-shadow-md h-10 px-3 rounded-md dark:bg-neutral-600`}
            id="email"
            type="text"
            name="email"
            onChange={onSetFormData}
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
              } w-full drop-shadow-md h-10 pl-3 pr-14 rounded-md dark:bg-neutral-600`}
              id="password"
              type={visible ? "text" : "password"}
              name="password"
              onChange={onSetFormData}
            />
            <button
              className="absolute right-4 top-2 text-neutral-400"
              onClick={onSetVisibility}
            >
              {visible ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
          </div>
          {formError.password && (
            <p className="text-sm text-red-600">{formError.password}</p>
          )}

          <button className="mt-10 h-12 bg-neutral-800 text-white text-sm rounded-md transition-colors ease hover:bg-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-700">
            Sign In
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default SignIn;
