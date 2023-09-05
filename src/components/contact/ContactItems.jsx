/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { BsStar, BsStarFill, BsThreeDots } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import {
  UpdateUserContactProperty,
  DeleteUserContact,
} from "../../services/contactService.js";
import ModalBox from "../ModalBox.jsx";
import { SuccessToasts } from "../Toasts.jsx";

export const ContactItem = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  onContactView,
  favorite,
  block,
  currentItem,
}) => {
  const token = sessionStorage.getItem("token");

  const contactItemButton = {
    0: <ContactItemGeneral id={id} token={token} />,
    1: <ContactItemFavorite favorite={favorite} token={token} id={id} />,
    2: <ContactItemBlock block={block} token={token} id={id} />,
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
          <div className="text-neutral-600 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-center w-full items-center text-md dark:text-neutral-200 ">
            <div className="max-w-[20rem] lg:max-w-[10rem]">
              <h1 className="text-neutral-900 font-medium truncate dark:text-white">
                {firstName} {lastName}
              </h1>
              <p className="text-sm xl:hidden">{email}</p>
            </div>
            <p className="hidden xl:block place-self-center">{email}</p>
            <p className="hidden 2xl:xl:block place-self-center">{phone}</p>
            <div className="text-sm italic place-self-end lg:place-self-center relative">
              {contactItemButton[currentItem]}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

const ContactItemFavorite = ({ id, token, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const updateUserContactProperty = async () => {
    await UpdateUserContactProperty(token, id, [
      {
        path: "/isFavorite",
        op: "replace",
        value: !isFavorite,
      },  
    ]);
    setIsFavorite((prev) => !prev);
    window.location.reload();
  };
  return (
    <>
      <button onClick={updateUserContactProperty}>
        {isFavorite ? (
          <BsStarFill size={26} className="text-amber-300" />
        ) : (
          <BsStar size={26} />
        )}
      </button>
    </>
  );
};

const ContactItemBlock = ({ id, token, block }) => {
  const [isBlock, setIsBlock] = useState(block);

  const updateUserContactProperty = async () => {
    await UpdateUserContactProperty(token, id, [
      {
        path: "/isBlock",
        op: "replace",
        value: !isBlock,
      },
    ]);
    setIsBlock((prev) => !prev);
    window.location.reload();
  };

  return (
    <button onClick={updateUserContactProperty}>
      {isBlock ? (
        <BiBlock size={26} className="text-red-600" />
      ) : (
        <BiBlock size={26} />
      )}
    </button>
  );
};

const ContactItemGeneral = ({ id, token }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const onChangeFavorite = async () => {
    await UpdateUserContactProperty(token, id, [
      {
        path: "/isFavorite",
        op: "replace",
        value: true,
      },
    ]);
    setIsFavorite(true);
  };

  const onChangeBlock = async () => {
    await UpdateUserContactProperty(token, id, [
      {
        path: "/isFavorite",
        op: "replace",
        value: false,
      },
      {
        path: "/isBlock",
        op: "replace",
        value: true,
      },
    ]);
    window.location.reload();
  };

  const onChangeDelete = async () => {
    await DeleteUserContact(token, id);
    window.location.reload();
  };

  return (
    <>
      {isFavorite && (
        <SuccessToasts
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          message="Contact is Added to Favorites"
        />
      )}

      {isBlock && (
        <ModalBox
          icon={<BiBlock size={80} />}
          title="Block Contact"
          message="Are you sure you want to block this Contact Person?"
          onAccept={onChangeBlock}
          onCancel={() => setIsBlock(false)}
        />
      )}

      {isRemove && (
        <ModalBox
          icon={<MdDeleteForever size={80} />}
          title="Delete Contact"
          message="Are you sure you want to delete this Contact Person?"
          onAccept={onChangeDelete}
          onCancel={() => setIsRemove(false)}
        />
      )}

      <div className="rounded-full hover:bg-neutral-200 p-2 group">
        <BsThreeDots size={26} />
        <div className="relative hidden group-hover:block">
          <div className="absolute -left-16 top-2 rounded-lg z-10 shadow-lg bg-white">
            <div className="flex flex-col text-center text-md font-semibold">
              <button
                className="hover:bg-neutral-200 w-40 py-3"
                onClick={onChangeFavorite}
              >
                Add to Favorite
              </button>
              <button
                className="hover:bg-neutral-200 w-40 py-3"
                onClick={() => setIsBlock(true)}
              >
                Block Contact
              </button>
              <button
                className="hover:bg-neutral-200 w-40 py-3 text-red-500"
                onClick={() => setIsRemove(true)}
              >
                Delete Contact
              </button>
            </div>
          </div>
        </div>
      </div>
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

export const ContactHeader = ({ title }) => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-800 text-white dark:bg-neutral-900 ">
      <h1 className="text-start text-xl font-semibold">{title}</h1>
    </div>
  );
};
