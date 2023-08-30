/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { UpdateUserContactProperty } from "../services/contactService.js";

export const ContactItem = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  onContactView,
  favorite
}) => {
  const token = sessionStorage.getItem("token");
  const [isFavorite, setIsFavorite] = useState(favorite);

  const updateUserContactProperty = async () => {
    try {
      const response = await UpdateUserContactProperty(token, id, [
        {
          path: "/isFavorite",
          op: "replace",
          value: !isFavorite,
        },
      ]);
      setIsFavorite(prev => !prev);

      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Update error:", error.data);
    }
  };

  return (
    <>
      <div
        className="p-4 w-full text-start rounded-md my-1 hover:bg-neutral-100 dark:hover:bg-neutral-600 "
        onClick={onContactView}
      >
        <div className="flex gap-4 items-center">
          <div className="min-h-[3.5rem] min-w-[3.5rem] bg-neutral-300 rounded-lg flex justify-center items-center dark:bg-neutral-800">
            <h1 className="text-neutral-600 font-bold text-xl dark:text-neutral-300">
              {firstName[0].toUpperCase()}
              {lastName[0].toUpperCase()}
            </h1>
          </div>
          <div className="text-neutral-600 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-between w-full place-items-center text-md dark:text-neutral-200">
            <div className="place-self-start max-w-[20rem] lg:max-w-[10rem]">
              <h1 className="text-neutral-900 font-medium truncate dark:text-white">
                {firstName} {lastName}
              </h1>
              <p className="text-sm xl:hidden">{email}</p>
            </div>
            <p className="hidden xl:block">{email}</p>
            <p className="hidden 2xl:xl:block">{phone}</p>
            <div className="text-sm italic place-self-end lg:place-self-center px-4 relative">
              <button onClick={updateUserContactProperty}>
                {isFavorite ? (
                  <BsStarFill size={26} className="text-amber-300" />
                ) : (
                  <BsStar size={26} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export const ContactTitleHeader = ({ title }) => {
  return (
    <div className="w-full rounded-md bg-neutral-200 mt-2 dark:bg-neutral-800 sticky top-0 z-0">
      <p className="p-1 ml-4 font-semibold dark:text-white">{title}</p>
    </div>
  );
};

export const ContactHeader = () => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-800 text-white dark:bg-neutral-900 ">
      <h1 className="text-start text-xl font-semibold">Contact List</h1>
    </div>
  );
};
