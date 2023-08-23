/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { TbAlertHexagon } from "react-icons/tb";
import {
  CreateUserContact,
  UpdateUserContact,
  DeleteUserContact,
} from "../../services/contactService.js";
import ModalBox from "../../components/ModalBox";
import { GetUserContact } from "../../services/contactService.js";

const ContactForm = ({
  contactId,
  addContact,
  onAddContact,
  onPageChange,
  isEdit,
}) => {
  const token = sessionStorage.getItem("token");
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    billingAddress: "",
    deliveryAddress: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUserContact = async () => {
      const response = await GetUserContact(token, contactId);

      if (response.data.phoneNo) {
        response.data.phoneNo = response.data.phoneNo.substring(3);
      }
      delete response.data.createdAt;
      delete response.data.id;
      setFormData(response.data);
    };

    if (contactId !== null && contactId !== undefined) {
      getUserContact();
    }
  }, [addContact]);

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
      formData.phoneNo = "+63" + formData.phoneNo;

      try {
        const response = isEdit
          ? await UpdateUserContact(token, contactId, formData)
          : await CreateUserContact(token, formData);

        if (response.status === 200) {
          setFormData(initialData);
          onExitForm();
          onPageChange();
        }
      } catch (error) {
        console.log(error);
      }
    }
    setFormError(errors);
  };

  const validateForm = (data) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[\w\d\s]+$/;
    const phonePattern = /^[\w]+$/;

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
      errors.lastName = "Invalid last name.";
    }

    if (!data.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!data.email.match(emailPattern)) {
      errors.email = "Invalid Email Address.";
    }

    if (!data.phoneNo.trim()) {
      errors.phoneNo = "Phone No. is required.";
    } else if (data.phoneNo.trim().length != 10) {
      errors.phoneNo = "Phone Number must be 10 characters long.";
    } else if (!data.phoneNo.match(phonePattern)) {
      errors.phoneNo = "Invalid phone number.";
    }

    if (!data.billingAddress.trim()) {
      errors.billingAddress = "Billing Address is required.";
    }

    if (!data.deliveryAddress.trim()) {
      errors.deliveryAddress = "Delivery Address is required.";
    }

    return errors;
  };

  const onDeleteUserContact = async () => {
    try {
      const response = await DeleteUserContact(token, contactId);
      if (response === 200) {
        onShowModal();
      }
    } catch (error) {
      console.log(error);
    }
    onExitForm();
    onPageChange();
  };

  const onShowModal = () => setShowModal(!showModal);
  const onExitForm = () => {
    setFormData(initialData);
    setFormError({});
    onAddContact();
  };

  return (
    <>
      {showModal && (
        <ModalBox
          icon={<TbAlertHexagon size={80} />}
          title="Delete Contact"
          message={`Are you sure you want to delete '${formData.firstName} ${formData.lastName}'?`}
          onAccept={onDeleteUserContact}
          onCancel={onShowModal}
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: addContact ? 1 : 0 }}
        className={`${
          addContact ? "block" : "hidden"
        } absolute h-screen w-screen bg-[#0000006f] top-0 left-0 z-20`}
        onClick={onAddContact}
      ></motion.div>

      <div
        className={`${
          addContact ? "block" : "hidden"
        } bg-white w-96 h-full absolute z-30 right-0 top-0 overflow-y-scroll dark:bg-neutral-700 dark:text-white`}
      >
        <div className="px-6 pt-4 pb-2">
          <div className="flex w-full flex-items justify-between mb-6 items-center">
            <button
              onClick={onExitForm}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-500"
            >
              <BiX size={24} />
            </button>
            <h1 className="text-xl font-semibold">
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
                  } shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-500`}
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
                  } shadow-md px-2 h-10 w-full rounded-md dark:bg-neutral-500`}
                  id="last-name"
                  value={formData.lastName}
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
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className={`${
                formError.email && "border border-red-600"
              } shadow-md px-2 h-10  rounded-md dark:bg-neutral-500`}
              id="email"
              value={formData.email}
              type="text"
              name="email"
              onChange={setFormValue}
            />
            {formError.email && (
              <p className="text-sm text-red-600">{formError.email}</p>
            )}
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="phoneNo"
            >
              Phone No:
            </label>
            <div className="relative flex items-center">
              <span className="bg-neutral-800 text-white absolute h-full flex items-center px-4 rounded-s-md">
                <p className="font-semibold">+63</p>
              </span>
              <input
                className={`${
                  formError.phoneNo && "border border-red-600 "
                } shadow-md pl-[4.5rem] pr-2 h-10 w-full rounded-md dark:bg-neutral-500`}
                id="phoneNo"
                value={formData.phoneNo}
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
              htmlFor="billingAddress"
            >
              Billing Address:
            </label>
            <textarea
              className={`${
                formError.billingAddress && "border border-red-600"
              } shadow-md h-40 rounded-md p-2 bg-white dark:bg-neutral-500`}
              id="billingAddress"
              value={formData.billingAddress}
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
            <div className="mb-10">
              <textarea
                className={`${
                  formError.billingAddress && "border border-red-600"
                } shadow-md h-40 rounded-md p-2 w-full bg-white dark:bg-neutral-500`}
                id="deliveryAddress"
                value={formData.deliveryAddress}
                name="deliveryAddress"
                onChange={setFormValue}
              ></textarea>
              {formError.deliveryAddress && (
                <p className="text-sm text-red-600">
                  {formError.deliveryAddress}
                </p>
              )}
            </div>

            <div className="flex w-full gap-4">
              <button className="h-12 w-full bg-neutral-800 text-white shadow-md text-sm rounded-md hover:bg-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors ease">
                Submit
              </button>
              {isEdit && (
                <button
                  className="bg-red-500 dark:bg-red-600 shadow-md text-white px-4 rounded-md hover:bg-red-600 dark:hover:bg-red-800 transition-colors ease"
                  type="button"
                  onClick={onShowModal}
                >
                  <MdDeleteOutline size={24} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
