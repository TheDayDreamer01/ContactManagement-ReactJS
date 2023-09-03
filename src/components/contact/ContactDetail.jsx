/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineMailOutline,
  MdPhone,
  MdOutlineReceiptLong,
  MdLocationOn,
} from "react-icons/md";
import { GetUserContact } from "../../services/contactService.js";
import { ProfileHeader, ProfileItem } from "../profile/ProfileItems.jsx";

/**
 * ContactDetail - A component for displaying the details of a contact.
 *
 * @param {Object} props - The component's properties.
 * @param {boolean} props.isEditContact - A flag indicating if the contact is being edited.
 * @param {number} props.selectedContact - The unique identifier of the selected contact.
 * @param {function} props.onSetSelectedContact - A function to set the selected contact.
 * @param {function} props.onSetIsEditContact - A function to set the edit mode for the contact.
 */
const ContactDetail = ({ isEditContact, selectedContact, onSetSelectedContact, onSetIsEditContact }) => {
  const [userContact, setUserContact] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const getUserContact = async () => {
      try {
        const response = await GetUserContact(token, selectedContact);
        setUserContact(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserContact(); 
  }, [isEditContact, selectedContact]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProfileHeader
        firstName={userContact.firstName}
        lastName={userContact.lastName}
        onBack={onSetSelectedContact}
        onEdit={onSetIsEditContact}
        buttonVisibility
      >
        <ProfileItem
          icon={<MdOutlineMailOutline size={24} />}
          title="Email"
          data={userContact.email}
        />
        <ProfileItem
          icon={<MdPhone size={24} />}
          title="Phone"
          data={userContact.phoneNo}
        />
        <ProfileItem
          icon={<MdOutlineReceiptLong size={24} />}
          title="Billing Address"
          data={userContact.billingAddress}
        />
        <ProfileItem
          icon={<MdLocationOn size={24} />}
          title="Delivery Address"
          data={userContact.deliveryAddress}
        />
      </ProfileHeader>
    </motion.div>
  );
};

export default ContactDetail;
