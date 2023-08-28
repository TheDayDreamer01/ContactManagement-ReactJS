/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SignUpService } from "../../services/authService.js";
import {
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePasswordLength,
} from "../../utils/validation.js";
import useFormData from "../../hooks/useFormData.js";
import useFormError from "../../hooks/useFormError.js";
import useVisible from "../../hooks/useVisible.js";

const SignUp = ({ setOnLoading }) => {
  const navigate = useNavigate();

  const { formData, onSetFormData } = useFormData({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { formError, onSetFormError } = useFormError();
  const password = useVisible();
  const confirmPassword = useVisible();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.values(errors).every((value) => value === "")) {
      setOnLoading(true);

      try {
        const response = await SignUpService(formData);

        if (response.status === 200) {
          sessionStorage.setItem("token", response.data);
          setOnLoading(false);
          navigate("/", { replace: true });
        } else if (response.status === 409) {
          errors.general =
            "User is already registered. Please enter another credential.";
        } else {
          setOnLoading(false);
          navigate("/error");
        }
      } catch (error) {
        setOnLoading(false);
        navigate("/error");
      }
    }
    setOnLoading(false);
    onSetFormError(errors);
  };

  const validateForm = (data) => {
    const errors = {};

    errors.firstName = validateFirstName(data.firstName);
    errors.lastName = validateLastName(data.lastName);

    if (!data.userName.trim()) {
      errors.userName = "Username is required.";
    }

    errors.email = validateEmail(data.email);
    errors.password = validatePasswordLength(data.email);
    errors.confirmPassword = validateConfirmPassword(
      data.password,
      data.confirmPassword
    );
    return errors;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="flex flex-col space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold py-4 md:text-5xl">Sign Up</h1>
          <p className="text-sm md:m-2">Join us to start connecting.</p>
        </div>

        <form className="flex flex-col" onSubmit={onFormSubmit}>
          <div className="flex gap-4  md:gap-6">
            <span className="flex-grow">
              <label
                className="text-neutral-600 py-2 text-sm block dark:text-neutral-200"
                htmlFor="first-name"
              >
                First Name:
              </label>
              <input
                className={`${
                  formError.firstName && "border border-red-600 "
                } shadow-md px-3 h-10 w-full rounded-md dark:bg-neutral-600`}
                id="first-name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={onSetFormData}
                placeholder="John"
              />
              {formError.firstName && (
                <p className="text-sm text-red-600">{formError.firstName}</p>
              )}
            </span>
            <span className="flex-grow">
              <label
                className="text-neutral-600 py-2 text-sm block dark:text-neutral-200"
                htmlFor="last-name"
              >
                Last Name:
              </label>
              <input
                className={`${
                  formError.lastName && "border border-red-600 "
                } shadow-md px-3 h-10 w-full rounded-md dark:bg-neutral-600`}
                id="last-name"
                type="text"
                name="lastName"
                placeholder="Doe"
                onChange={onSetFormData}
              />

              {formError.lastName && (
                <p className="text-sm text-red-600">{formError.lastName}</p>
              )}
            </span>
          </div>
          <label
            className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className={`${
              formError.userName && "border border-red-600 "
            } shadow-md px-3 h-10  rounded-md dark:bg-neutral-600`}
            id="username"
            type="text"
            name="userName"
            placeholder="JohnDoe12"
            onChange={onSetFormData}
          />
          {formError.userName && (
            <p className="text-sm text-red-600">{formError.userName}</p>
          )}
          <label
            className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className={`${
              formError.email && "border border-red-600"
            } shadow-md px-3 h-10  rounded-md dark:bg-neutral-600`}
            id="email"
            type="text"
            name="email"
            placeholder="example@example.com"
            onChange={onSetFormData}
          />
          {formError.email && (
            <p className="text-sm text-red-600">{formError.email}</p>
          )}
          <label
            className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
            htmlFor="password"
          >
            Password:
          </label>
          <div className="relative ">
            <input
              className={`${
                formError.password && "border border-red-600 "
              } shadow-md pl-3 h-10 rounded-md pr-14 w-full dark:bg-neutral-600`}
              id="password"
              type={password.visible ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={onSetFormData}
            />
            <button
              className="absolute right-4 top-2 text-neutral-400"
              onClick={password.onSetVisibility}
            >
              {password.visible ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>
            {formError.password && (
              <p className="text-sm text-red-600">{formError.password}</p>
            )}
          </div>
          <label
            className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
            htmlFor="confirm-password"
          >
            Confirm Password:
          </label>
          <div className="relative mb-8">
            <input
              className={`${
                formError.confirmPassword && "border border-red-600 "
              } w-full shadow-md pl-3 pr-14 h-10 rounded-md dark:bg-neutral-600`}
              id="confirm-password"
              type={confirmPassword.visible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onSetFormData}
            />

            <button
              className="absolute right-4 top-2 text-neutral-400"
              onClick={confirmPassword.onSetVisibility}
            >
              {confirmPassword.visible ? (
                <FiEyeOff size={24} />
              ) : (
                <FiEye size={24} />
              )}
            </button>

            {formError.confirmPassword && (
              <p className="text-sm text-red-600">
                {formError.confirmPassword}
              </p>
            )}
          </div>
          {formError.general && (
            <p className=" text-center mb-2 text-sm text-red-600">
              {formError.general}
            </p>
          )}

          <button className="h-12 bg-neutral-800 text-white text-sm rounded-md dark:bg-neutral-900">
            Sign Up
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default SignUp;
