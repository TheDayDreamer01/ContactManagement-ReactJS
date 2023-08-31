/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ContactHeader,
  ContactItem,
  ContactTitleHeader,
} from "../../components/ContactItems";
import { GetUserContacts } from "../../services/contactService.js";
import WorldSvg from "../../assets/svg/World.svg";

const Contact = ({
  searchContact,
  onSelectedContact,
  addContact,
  editContact,
}) => {
  const navigation = useNavigate();
  const [contactData, setContactData] = useState([]);
  const [uniqueFirstLetters, setUniqueFirstLetters] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const getUserContactsAPI = async () => {
      try {
        const response = await GetUserContacts(token);
        if (response.status === 200) {
          let filterlist = response.data;

          if (searchContact !== null) {
            filterlist = response.data.filter((element) => {
              const fullName = `${element.firstName} ${element.lastName}`;
              return fullName
                .toLowerCase()
                .includes(searchContact.toLowerCase());
            });
          }
          filterlist.sort((a, b) => {
            const firstName = `${a.firstName} ${a.lastName}`.toLowerCase();
            const lastName = `${b.firstName} ${b.lastName}`.toLowerCase();
            return firstName.localeCompare(lastName);
          });

          // Get unique first letters of contact names
          const uniqueLetters = Array.from(
            new Set(
              filterlist.map((contact) => contact.firstName[0].toUpperCase())
            )
          );
          setUniqueFirstLetters(uniqueLetters);

          setContactData(filterlist);
        } else if (response.status === 401) {
          sessionStorage.clear();
          navigation("/auth", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserContactsAPI();
  }, [addContact, editContact, searchContact]);

  return (
    <>
      <ContactHeader />

      {contactData.length > 0 ? (
        <>
          {uniqueFirstLetters.map((letter) => (
            <div key={letter}>
              <ContactTitleHeader title={letter} />
              {contactData.map(
                (element, index) =>
                  element.firstName[0].toUpperCase() === letter && (
                    <ContactItem
                      key={index}
                      id={element.id}
                      firstName={element.firstName}
                      lastName={element.lastName}
                      phone={element.phoneNo}
                      email={element.email}
                      onContactView={() => onSelectedContact(element.id)}
                      favorite={element.isFavorite}
                    />
                  )
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="relative top-20 h-full flex flex-col justify-center items-center p-4 gap-8">
          <img
            className="max-w-sm md:max-w-lg mx-auto"
            src={WorldSvg}
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
