/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  MdOutlineMailOutline,
  MdPhone,
  MdOutlineReceiptLong,
  MdLocationOn,
} from "react-icons/md";
import { GetUserContact } from "../../services/contactService.js";
import { ProfileHeader, ProfileItem } from "../../components/ProfileItems.jsx";

const ContactDetail = ({ selectedContact, onPageChange }) => {
  const [userContact, setUserContact] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const getUserContact = async () => {
      const response = await GetUserContact(token, selectedContact);
      setUserContact(response.data);
    };

    getUserContact();
  }, [selectedContact]);

  return (
    <>
      <ProfileHeader
        firstName={userContact.firstName}
        lastName={userContact.lastName}
        onBack={onPageChange}
        onEdit={() => {}}
        page={0}
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
    </>
  );
};

export default ContactDetail;
