/* eslint-disable react/prop-types */
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import DeviceSvg from "../../assets/svg/Device.svg";
import ContactList from "../../components/contact/ContactList";
import ContactDetail from "../../components/contact/ContactDetail";
import WorldSvg from "../../assets/svg/World.svg";

/**
 * ContactPage - A component for displaying a contact page with contact list and contact details.
 *
 * @param {Object} props - The component's properties.
 * @param {function} props.searchContact - A function for searching contacts.
 * @param {boolean} props.isAddContact - A flag indicating whether adding a new contact is enabled.
 * @param {boolean} props.isEditContact - A flag indicating whether editing a contact is enabled.
 * @param {Object} props.selectedContact - The selected contact to display details.
 * @param {function} props.onSetIsAddContact - A function to enable adding a new contact.
 * @param {function} props.onSetIsEditContact - A function to enable editing a contact.
 * @param {function} props.onSetSelectedContact - A function to set the selected contact.
 */
const ContactPage = ({
  searchContact,
  isAddContact,
  isEditContact,
  selectedContact,
  onSetIsAddContact,
  onSetIsEditContact,
  onSetSelectedContact,
}) => {
  return (
    <>
      {/* Left Panel: Contact List */}
      <div className="h-full w-full rounded-lg shadow-md p-4 bg-white lg:block lg:w-1/2 xl:w-full dark:bg-neutral-700 relative">
        {/* Add New Contact Button */}
        <div className="absolute bottom-6 right-6 z-10">
          <button
            className="h-14 w-14 rounded-full bg-neutral-800 shadow-lg flex justify-center items-center text-white hover:bg-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors ease-out"
            onClick={onSetIsAddContact}
          >
            <BiPlus size={24} />
          </button>
        </div>
        <div className="overflow-y-scroll h-full">
          <ContactList
            title="All Contacts"
            emptyImage={WorldSvg}
            emptyTitle="No Available Contact"
            searchContact={searchContact}
            isAddContact={isAddContact}
            isEditContact={isEditContact}
            onSetSelectedContact={onSetSelectedContact}
          />
        </div>
      </div>

      {/* Right Panel: Contact Details or No Selected Contact */}
      <div className="p-4 h-full rounded-lg shadow-md bg-white lg:max-w-[30rem] lg:w-1/2 lg:block dark:bg-neutral-700 overflow-y-scroll">
        {selectedContact !== null ? (
          // Display Contact Details
          <ContactDetail
            isEditContact={isEditContact}
            onSetIsEditContact={onSetIsEditContact}
            selectedContact={selectedContact}
            onSetSelectedContact={() => onSetSelectedContact(null)}
          />
        ) : (
          // Display "No Selected Contact" Message
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

export default ContactPage;
