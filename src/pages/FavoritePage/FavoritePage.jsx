/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import DeviceSvg from "../../assets/svg/Device.svg";
import ContactList from "../../components/contact/ContactList";
import ContactDetail from "../../components/contact/ContactDetail";
import FavoritesSvg from "../../assets/svg/Favorites.svg";

/**
 * FavoritePage - A page for displaying favorite contacts.
 * @param {Object} props - The component's props.
 * @param {string} searchContact - The search query for filtering contacts.
 * @param {boolean} isAddContact - Flag indicating if contact is being added.
 * @param {boolean} isEditContact - Flag indicating if contact is being edited.
 * @param {object} selectedContact - The selected contact to display details.
 * @param {function} onSetIsEditContact - Function to toggle edit mode for contact.
 * @param {function} onSetSelectedContact - Function to set the selected contact.
 */
const FavoritePage = ({
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
            emptyImage={FavoritesSvg}
            emptyTitle="No Available Favorite Contact"
            searchContact={searchContact}
            isAddContact={isAddContact}
            isEditContact={isEditContact}
            onSetSelectedContact={onSetSelectedContact}
            isFavorite
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

export default FavoritePage;
