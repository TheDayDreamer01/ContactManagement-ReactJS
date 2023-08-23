/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdEditNote } from "react-icons/md";

export const ProfileHeader = ({
  children,
  firstName,
  lastName,
  onBack,
  onEdit,
  buttonVisibility,
}) => {

  let name;
  
  if (firstName !== undefined || lastName !== undefined){
    name = firstName[0].toUpperCase() + lastName[0].toUpperCase();
  }

  return (
    <div className="overflow-y-scroll h-full">
      <div className="w-full h-48 bg-neutral-800 rounded-t-lg relative flex justify-center dark:bg-neutral-900">
        <div className="h-20 w-full flex justify-between items-center px-4">
          <button
            className={`${
              buttonVisibility ? "visible" : "invisible"
            } p-2 rounded-full bg-white`}
          >
            <MdArrowBackIosNew size={22} onClick={onBack} />
          </button>
          <button className="p-2 rounded-full bg-white">
            <MdEditNote size={22} onClick={onEdit} />
          </button>
        </div>

        <div className="absolute -bottom-10 min-w-[4.5rem] min-h-[4.5rem] bg-neutral-300 rounded-lg flex justify-center items-center dark:bg-neutral-800">
          <h1 className="text-neutral-600 font-bold text-2xl dark:text-neutral-200">
              {name}
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-end h-20">
        <h2 className="text-xl dark:text-white truncate text-center">
          {firstName} {lastName}
        </h2>
      </div>
      <div className="p-4 dark:text-white">{children}</div>
    </div>
  );
};

export const ProfileItem = ({ icon, title, data }) => {
  return (
    <>
      <div className="flex items-center w-full gap-6 my-2 p-4 flex-overflow">
        {icon}
        <div className="max-w-[20rem]">
          <h2 className="text-sm text-neutral-600 dark:text-neutral-200 font-medium">
            {title}
          </h2>
          <p className="text-md break-words">{data}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export const ProfileContactCount = ({ contact, favorite, block }) => {
  return (
    <>
      <div className="flex items-center w-full gap-6 my-2 p-4 flex-overflow">
        <span className="flex-1 text-center">
          <h2 className="font-mono text-2xl font-semibold">{contact}</h2>
          <p className="text-md leading-6 text-neutral-600 dark:text-neutral-200 ">
            Contacts
          </p>
        </span>
        <span className="flex-1 text-center">
          <h2 className="font-mono text-2xl font-semibold">{favorite}</h2>
          <p className="text-md leading-6 text-neutral-600 dark:text-neutral-200 ">
            Favorites
          </p>
        </span>
        <span className="flex-1 text-center">
          <h2 className="font-mono text-2xl font-semibold">{block}</h2>
          <p className="text-md leading-6 text-neutral-600 dark:text-neutral-200 ">
            Blocks
          </p>
        </span>
      </div>
    </>
  );
};
