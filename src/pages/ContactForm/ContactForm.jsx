/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import {
  CreateUserContact,
  UpdateUserContactu,
} from "../../services/contactService.js";

const ContactForm = ({ addContact, onAddContact, defaultData, isEdit }) => {
  const [formData, setFormData] = useState(
    defaultData && {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      billingAddress: "",
      deliveryAddress: "",
    }
  );
  const [formError, setFormError] = useState({});

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
      const token = sessionStorage.getItem("token");
      const response = isEdit
        ? await UpdateUserContactu(token, formData)
        : await CreateUserContact(token, formData);

      if (response.status === 200) {
        console.log("Hello WOrld");
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
    } else if (data.firstName.trim().length() < 2) {
      errors.firstName = "Must be 2 characters long.";
    } else if (data.firstName.match(namePattern)) {
      errors.firstName = "Invalid first name.";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required.";
    } else if (data.lastName.trim().length() < 2) {
      errors.lastName = "Must be 2 characters long.";
    } else if (data.lastName.match(namePattern)) {
      errors.lastName = "Invalid last name.";
    }

    if (!data.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (data.email.match(emailPattern)) {
      errors.email = "Invalid Email Address.";
    }

    if (!data.phoneNo.trim()) {
      errors.phoneNo = "Phone No. is required.";
    }

    if (!data.billingAddress.trim()) {
        errors.billingAddress = "Billing Address is required.";
    }

    if (!data.deliveryAddress.trim()) {
        errors.deliveryAddress = "Delivery Address is required.";
    }

    return errors;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: addContact ? 1 : 0 }}
        className={`${
          addContact ? "block" : "hidden"
        } absolute h-screen w-screen bg-[#0000006f] top-0 left-0 z-30`}
        onClick={onAddContact}
      ></motion.div>

      <div
        className={`${
          addContact ? "block" : "hidden"
        } bg-white w-96 h-full absolute z-40 right-0 top-0 overflow-y-scroll`}
      >
        <div className="p-6">
          <div className="flex w-full flex-items justify-between mb-6">
            <button onClick={onAddContact}>
              <BiX size={24} />
            </button>
            <h1 className="text-lg font-semibold">
              {isEdit ? "Edit Contact" : "Add New Contact"}
            </h1>
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
              htmlFor="phoneNo"
            >
              Phone No:
            </label>
            <div className="relative flex items-center">
              <span className="bg-neutral-200 absolute h-full flex items-center px-4 rounded-s-md">
                <p className="font-semibold">+63</p>
              </span>
              <input
                className={`${
                  formError.phoneNo && "border border-red-600 "
                } shadow-md pl-[4.5rem] pr-2 h-10 w-full rounded-md dark:bg-neutral-700`}
                id="phoneNo"
                type="text"
                name="phoneNo"
                onChange={setFormValue}
              />
            </div>
            {formError.phoneNo && (
              <p className="text-sm text-red-600">{formError.phoneNo}</p>
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
              htmlFor="billingAddress"
            >
              Billing Address:
            </label>
            <textarea
              className={`${
                formError.billingAddress && "border border-red-600"
              } shadow-md h-40 rounded-md p-2`}
              id="billingAddress"
              name="billingAddress"
              onChange={setFormValue}
            ></textarea>
            {formError.billingAddress && (
              <p className="text-sm text-red-600">{formError.billingAddress}</p>
            )}
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="deliveryAddress"
            >
              Delivery Address:
            </label>
            <textarea
              className={`${
                formError.billingAddress && "border border-red-600"
              } shadow-md h-40 rounded-md p-2 mb-10`}
              id="deliveryAddress"
              name="deliveryAddress"
              onChange={setFormValue}
            ></textarea>
            {formError.deliveryAddress && (
              <p className="text-sm text-red-600">
                {formError.deliveryAddress}
              </p>
            )}

            <button className="h-12 bg-neutral-800 text-white text-sm rounded-md dark:bg-neutral-900">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
