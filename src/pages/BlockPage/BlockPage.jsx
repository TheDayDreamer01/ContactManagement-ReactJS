/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import DeviceSvg from "../../assets/svg/Device.svg";
import ContactList from "../../components/contact/ContactList";
import ContactDetail from "../../components/contact/ContactDetail";

const BlockPage = ({
  searchContact,
  isAddContact,
  isEditContact,
  selectedContact,
  onSetIsEditContact,
  onSetSelectedContact,
}) => {
  return (
    <>
      <div className="h-full w-full rounded-lg shadow-md p-4 bg-white lg:block lg:w-1/2 xl:w-full dark:bg-neutral-700 relative">
        <div className="overflow-y-scroll h-full">
          <ContactList
            title="Favorite Contacts"
            emptyTitle="No Available Block Contact"
            searchContact={searchContact}
            isAddContact={isAddContact}
            isEditContact={isEditContact}
            onSetSelectedContact={onSetSelectedContact}
            isBlock
          />
        </div>
      </div>

      <div className="p-4 h-full rounded-lg shadow-md bg-white lg:max-w-[30rem] lg:w-1/2 lg:block dark:bg-neutral-700 overflow-y-scroll">
        {selectedContact !== null ? (
          <ContactDetail
            isEditContact={isEditContact}
            onSetIsEditContact={onSetIsEditContact}
            selectedContact={selectedContact}
            onSetSelectedContact={() => onSetSelectedContact(null)}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col justify-center items-center"
          >
            <img
              className="max-w-xs mx-auto"
              src={DeviceSvg}
              alt="No Selected Contact"
            />
            <h1 className="text-lg font-semibold mt-4 dark:text-white">
              No Selected Contact
            </h1>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default BlockPage;
