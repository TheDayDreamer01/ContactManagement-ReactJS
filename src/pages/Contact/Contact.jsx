/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ContactItem } from "../../components/ContactItems";
import { GetUserContacts } from "../../services/contactService.js";
import World from "../../assets/svg/World.svg";

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
      {contactData ? (
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
      ) : (
        <div className="h-full flex flex-col justify-center items-center p-4 gap-8">
          <img
            className="max-w-sm md:max-w-lg mx-auto"
            src={World}
            alt="No Available Contacts"
          />
          <h1 className="text-lg md:text-2xl font-semibold text-center dark:text-white">
            No Available Contacts
          </h1>
        </div>
      )}
    </>
  );
};

export default Contact;
