import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SignUpService } from "../../../services/authService";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState({});
  const [visible, setVisible] = useState([false, false]);

  const setFormValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      const response = await SignUpService(formData);

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data);
        navigate("/dashboard", { replace : true });

      } else if (response.status === 409) {
        errors.userName = "User already exists.";
        errors.email = "User already exists.";
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
    const namePattern = /^[\w\d\s]+$/;

    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required.";
    } else if (data.firstName.trim().length < 2) {
      errors.firstName = "Must be 2 characters long.";
    } else if (!data.firstName.match(namePattern)) {
      errors.firstName = "Invalid first name.";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required.";
    } else if (data.lastName.trim().length < 2) {
      errors.lastName = "Must be 2 characters long.";
    } else if (!data.lastName.match(namePattern)) {
      errors.lastName = "Invalid last name";
    }

    if (!data.userName.trim()) {
      errors.userName = "Username is required.";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!data.email.match(emailPattern)) {
      errors.email = "Invalid email address.";
    }

    if (data.password.trim().length < 6) {
      errors.password = "Password must at least be 6 characters long.";
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (data.confirmPassword.trim() !== data.password.trim()) {
      errors.confirmPassword = "Password does not match.";
    }
    return errors;
  };

  const showPassword = (e, currentIndex) => {
    e.preventDefault();
    setVisible((prevVisible) =>
      prevVisible.map((value, index) =>
        index === currentIndex ? !value : value
      )
    );
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
                } shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-700`}
                id="first-name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={setFormValue}
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
                } shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-700`}
                id="last-name"
                type="text"
                name="lastName"
                onChange={setFormValue}
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
            } shadow-md px-2 h-10  rounded-md dark:bg-neutral-700`}
            id="username"
            type="text"
            name="userName"
            onChange={setFormValue}
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
            } shadow-md px-2 h-10  rounded-md dark:bg-neutral-700`}
            id="email"
            type="text"
            name="email"
            onChange={setFormValue}
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
              } shadow-md pl-2 h-10 rounded-md pr-14 w-full dark:bg-neutral-700`}
              id="password"
              type={visible[0] ? "text" : "password"}
              name="password"
              onChange={setFormValue}
            />
            <button
              className="absolute right-4 top-2"
              onClick={(e) => showPassword(e, 0)}
            >
              {visible[0] ? <FiEyeOff size={24} /> : <FiEye size={24} />}
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
          <div className="relative mb-10">
            <input
              className={`${
                formError.confirmPassword && "border border-red-600 "
              } w-full shadow-md pl-2 pr-14 h-10 rounded-md dark:bg-neutral-700`}
              id="confirm-password"
              type={visible[1] ? "text" : "password"}
              name="confirmPassword"
              onChange={setFormValue}
            />

            <button
              className="absolute right-4 top-2"
              onClick={(e) => showPassword(e, 1)}
            >
              {visible[1] ? <FiEyeOff size={24} /> : <FiEye size={24} />}
            </button>

            {formError.confirmPassword && (
              <p className="text-sm text-red-600">
                {formError.confirmPassword}
              </p>
            )}
          </div>

          <button className="h-12 bg-neutral-800 text-white text-sm rounded-md dark:bg-neutral-900">
            Sign Up
          </button>
        </form>
      </section>
    </motion.div>
  );
};

export default SignUp;
