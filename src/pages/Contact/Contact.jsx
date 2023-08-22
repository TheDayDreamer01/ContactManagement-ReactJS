/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ContactItem } from "../../components/ContactItems";
import { GetUserContacts } from "../../services/contactService.js";


const Contact = ({ onSelectedContact }) => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const getUserContactsAPI = async () => {
      const response = await GetUserContacts(token);
      setContactData(response.data);
    };

    getUserContactsAPI();
  }, []);

  return (
    <>
      {contactData.map((element, index) => (
        <ContactItem
          key={index}
          firstName={element.firstName}
          lastName={element.lastName}
          phone={element.phoneNo}
          email={element.email}
          date="10/10/2023"
          onContactView={() => onSelectedContact(element.id)}
        />
      ))}
    </>
  );
};

export default Contact;
