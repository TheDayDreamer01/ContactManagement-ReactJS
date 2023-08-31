/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
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
import useFormData from "../../hooks/useFormData.js";
import useFormError from "../../hooks/useFormError.js";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePhone,
} from "../../utils/validation.js";
import { getCurrentDate } from "../../utils/currentDate.js";

const ContactForm = ({
  contactId,
  addContact,
  onAddContact,
  onSelectedContact,
  isEdit,
}) => {
  const navigation = useNavigate();
  const token = sessionStorage.getItem("token");
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    billingAddress: "",
    deliveryAddress: "",
  };

  const { formData, onSetFormData, setFormData } = useFormData(initialData);
  const { formError, onSetFormError } = useFormError();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUserContact = async () => {
      const response = await GetUserContact(token, contactId);

      try {
        if (response.status === 200) {
          if (response.data.phoneNo) {
            response.data.phoneNo = response.data.phoneNo.substring(4);
          }
          delete response.data.createdAt;
          delete response.data.id;
          setFormData(response.data);
        }
      } catch (error) {
        navigation("/error");
      }
    };

    if (contactId !== null && contactId !== undefined) {
      getUserContact();
    }
  }, [addContact]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.values(errors).every((value) => value === "")) {
      formData.phoneNo = "+639" + formData.phoneNo;

      try {
        const response = isEdit
          ? await UpdateUserContact(token, contactId, formData)
          : await CreateUserContact(token, formData);

        if (response.status === 200) {
          setFormData(initialData);
          onExitForm();

          const activities =
            JSON.parse(sessionStorage.getItem("activities")) || [];
          activities.push({
            status: isEdit ? "Edit" : "Create",
            description: `${isEdit ? "Edit" : "Add"} Contact Person`,
            date: getCurrentDate(),
          });
          sessionStorage.setItem("activities", JSON.stringify(activities));
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
    errors.email = validateEmail(data.email);
    errors.phoneNo = validatePhone(data.phoneNo);

    if (!data.billingAddress.trim()) {
      errors.billingAddress = "Billing Address is required.";
    }

    if (!data.deliveryAddress.trim()) {
      errors.deliveryAddress = "Delivery Address is required.";
    }

    return errors;
  };

  const onDeleteUserContact = async () => {
    onExitForm();
    onShowModal();
    onSelectedContact(null);
    await DeleteUserContact(token, contactId);
    const activities = JSON.parse(sessionStorage.getItem("activities")) || [];
    activities.push({
      status: "Delete",
      description: "Delete Contact Person",
      date: getCurrentDate(),
    });
    sessionStorage.setItem("activities", JSON.stringify(activities));
  };

  const onShowModal = () => setShowModal(!showModal);
  const onExitForm = () => {
    setFormData(initialData);
    onSetFormError({});
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
            <div className="flex gap-4 md:gap-6">
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
                  onChange={onSetFormData}
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
                  onChange={onSetFormData}
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
              onChange={onSetFormData}
            />
            {formError.email && (
              <p className="text-sm text-red-600">{formError.email}</p>
            )}
            <label
              className="text-neutral-600 mt-2 py-2 text-sm dark:text-neutral-200"
              htmlFor="phoneNo"
            >
              Mobile No:
            </label>
            <div className="relative flex items-center">
              <span className="bg-neutral-800 text-white absolute h-full flex items-center px-4 rounded-s-md">
                <p className="font-semibold">+639</p>
              </span>
              <input
                className={`${
                  formError.phoneNo && "border border-red-600 "
                } shadow-md pl-[4.5rem] pr-2 h-10 w-full rounded-md dark:bg-neutral-500`}
                id="phoneNo"
                value={formData.phoneNo}
                type="text"
                name="phoneNo"
                onChange={onSetFormData}
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
              onChange={onSetFormData}
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
                onChange={onSetFormData}
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
