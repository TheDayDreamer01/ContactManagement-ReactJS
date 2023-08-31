/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import {
  GetUserProfile,
  UpdateUserProfile,
} from "../../services/userService.js";
import useFormData from "../../hooks/useFormData.js";
import useFormError from "../../hooks/useFormError.js";
import { validateFirstName, validateLastName } from "../../utils/validation.js";

const ProfileForm = ({ editProfile, onEditProfile }) => {
  const token = sessionStorage.getItem("token");
  const initialData = {
    firstName: "",
    lastName: "",
    userName: "",
  };

  const { formData, onSetFormData, setFormData } = useFormData(initialData);
  const { formError, onSetFormError } = useFormError();

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await GetUserProfile(token);

      try {
        if (response.status === 200) {
          setFormData({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            userName: response.data.userName,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);

    if (Object.values(errors).every((value) => value === "")) {
      const response = await UpdateUserProfile(token, formData);

      try {
        if (response.status === 200) {
          onEditProfile();
        }
      } catch (error) {
        console.log(error);
      }
    }
    onSetFormError(errors);
  };

  const validateForm = (data) => {
    const errors = {};

    errors.firstName = validateFirstName(data.firstName);
    errors.lastName = validateLastName(data.lastName);

    if (!data.userName.trim()) {
      errors.userName = "Last Name is required.";
    } else if (data.userName.trim().length < 2) {
      errors.userName = "Username must be 2 characters long.";
    }

    return errors;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${
          editProfile ? "block" : "hidden"
        } absolute h-screen w-screen bg-[#0000006f] top-0 left-0 z-20`}
        onClick={onEditProfile}
      ></motion.div>

      <div
        className={`${
          editProfile ? "block" : "hidden"
        } bg-white w-96 h-full absolute z-30 right-0 top-0 overflow-y-scroll dark:bg-neutral-700 dark:text-white`}
      >
        <div className="px-6 pt-4 pb-2">
          <div className="flex w-full flex-items justify-between mb-6 items-center">
            <button
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-500"
              onClick={onEditProfile}
            >
              <BiX size={24} />
            </button>
            <h1 className="text-xl font-semibold">Edit User Profile</h1>
          </div>
          <form className="flex flex-col" onSubmit={onFormSubmit}>
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              className={`${
                formError.firstName && "border border-red-600"
              } shadow-md px-2 h-10  rounded-md dark:bg-neutral-500`}
              id="firstName"
              value={formData.firstName}
              type="text"
              name="firstName"
              onChange={onSetFormData}
            />
            {formError.firstName && (
              <p className="text-sm text-red-600">{formError.firstName}</p>
            )}
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              className={`${
                formError.lastName && "border border-red-600"
              } shadow-md px-2 h-10  rounded-md dark:bg-neutral-500`}
              id="lastName"
              value={formData.lastName}
              type="text"
              name="lastName"
              onChange={onSetFormData}
            />
            {formError.lastName && (
              <p className="text-sm text-red-600">{formError.lastName}</p>
            )}
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="userName"
            >
              Username:
            </label>
            <input
              className={`${
                formError.userName && "border border-red-600"
              } shadow-md px-2 h-10  rounded-md dark:bg-neutral-500`}
              id="userName"
              value={formData.userName}
              type="text"
              name="userName"
              onChange={onSetFormData}
            />
            {formError.userName && (
              <p className="text-sm text-red-600">{formError.userName}</p>
            )}

            <button className="h-12 mt-10 w-full bg-neutral-800 text-white shadow-md text-sm rounded-md hover:bg-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors ease">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
