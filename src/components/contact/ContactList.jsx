/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContactHeader, ContactItem, ContactTitleHeader } from "./ContactItems";
import { GetUserContacts } from "../../services/contactService.js";

const ContactList = ({
  title,
  emptyImage,
  emptyTitle,
  searchContact,
  isAddContact,
  isEditContact,
  onSetSelectedContact,
  isFavorite,
  isBlock,
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
          let data = response.data;
          let filterlist = data;

          if (searchContact !== null) {
            filterlist = response.data.filter((element) => {
              const fullName = `${element.firstName} ${element.lastName}`;
              return fullName
                .toLowerCase()
                .includes(searchContact.toLowerCase());
            });
          }
          filterlist = data.filter((element) => !element.isBlock); 
          
          if (isFavorite) {
            filterlist = data.filter((element) => element.isFavorite);
          }

          if (isBlock) {
            filterlist = data.filter((element) => element.isBlock);
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
  }, [isAddContact, isBlock, isEditContact, isFavorite, navigation, searchContact]);

  return (
    <>
      <ContactHeader title={title}/>

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
                      onContactView={() => onSetSelectedContact(element.id)}
                      favorite={element.isFavorite}
                      block={element.isBlock}
                      currentItem={(isFavorite) ? 1 : (isBlock) ? 2 : 0}
                    />
                  )
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="relative -top-32 h-full flex flex-col justify-center items-center p-4 gap-8">
          <img
            className="max-w-sm md:max-w-lg mx-auto"
            src={emptyImage}
            alt="No Available Contacts"
          />
          <h1 className="text-lg md:text-2xl font-bold text-center dark:text-white">
            {emptyTitle}
          </h1>
        </div>
      )}
    </>
  );
};

export default ContactList;
