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
