/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiSolidContact, BiUser, BiLogOut, BiPlus } from "react-icons/bi";
import { TbAlertHexagon } from "react-icons/tb";
import Header from "../../components/Header";
import ModalBox from "../../components/ModalBox";
import Activity from "../Activity";
import Contact from "../Contact";
import Profile from "../Profile/Profile";
import ContactDetail from "../ContactDetail";
import { SideBar, SideBarItem } from "../../components/SideBar";
import Device from "../../assets/svg/Device.svg";
import ContactForm from "../ContactForm/ContactForm";
import ProfileForm from "../ProfileForm/ProfileForm";

export const Context = React.createContext();

const Dashboard = () => {
  const navigate = useNavigate();

  const [dark, setDark] = useState(localStorage.getItem("isDark") === "true");
  const [showNavBar, setShowNavBar] = useState(false);
  const [searchContact, setSearchContact] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [addContact, setAddContact] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    localStorage.setItem("isDark", dark);

    const isAuthenticated = sessionStorage.getItem("token");
    if (isAuthenticated === null) {
      navigate("/auth", { replace: true });
    }
  }, [dark, navigate]);

  const onAddContact = () => setAddContact(!addContact);
  const onEditContact = () => setEditContact(!editContact);
  const onSelectedContact = (value) => setSelectedContact(value);
  const onDefaultPage = () => onSelectedContact(null);
  const onEditProfile = () => setEditProfile(!editProfile);

  const onAcceptSignOut = () => {
    sessionStorage.clear();
    navigate("/auth", { replace: true });
  };

  const onCancelSignOut = () => {
    setShowModal(false);
    setShowNavBar(false);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShowNavBar(false);
  };

  return (
    <Context.Provider value={[showNavBar, setShowNavBar, dark, setDark]}>
      <div className={`${dark && "dark"} w-screen h-screen flex`}>
        {showModal && (
          <ModalBox
            icon={<TbAlertHexagon size={80} />}
            title="Sign Out"
            message="Are you sure you want to sign out? you'll be missed!"
            onCancelValue={showModal}
            onAccept={onAcceptSignOut}
            onCancel={onCancelSignOut}
          />
        )}

        <ContactForm addContact={addContact} onAddContact={onAddContact} />
        <ContactForm
          contactId={selectedContact}
          addContact={editContact}
          onAddContact={onEditContact}
          onPageChange={onDefaultPage}
          onSelectedContact={onSelectedContact}
          isEdit
        />

        <ProfileForm editProfile={editProfile} onEditProfile={onEditProfile} />

        <SideBar>
          <SideBarItem
            icon={<BiSolidContact size={24} />}
            title="Contacts"
            isActive={currentPage == 0}
            onPageChange={() => onPageChange(0)}
          />
          <SideBarItem
            icon={<BiUser size={24} />}
            title="Profile"
            isActive={currentPage == 1}
            onPageChange={() => onPageChange(1)}
          />
          <div className="flex-grow"></div>
          <SideBarItem
            icon={<BiLogOut size={24} />}
            title="Sign Out"
            isActive
            onPageChange={() => setShowModal(true)}
          />
        </SideBar>

        <main className="relative flex-grow h-full flex flex-col bg-neutral-100">
          <Header setSearchContact={setSearchContact} />
          <section className="p-4 flex-grow flex md:px-8 gap-8 overflow-hidden transition-colors ease dark:bg-neutral-800">
            <div
              className={`${
                (selectedContact !== null || currentPage == 1) && "hidden"
              }  h-full w-full rounded-lg shadow-md p-4 bg-white lg:block lg:w-1/2 xl:w-full dark:bg-neutral-700 relative`}
            >
              <div
                className={`${
                  currentPage != 0 && "hidden"
                } absolute bottom-6 right-6 z-10`}
              >
                <button
                  className="h-14 w-14 rounded-full bg-neutral-800 shadow-lg flex justify-center items-center text-white hover:bg-neutral-600 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors ease-out"
                  onClick={onAddContact}
                >
                  <BiPlus size={24} />
                </button>
              </div>
              <div className="overflow-y-scroll h-full">
                {currentPage == 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Contact
                      searchContact={searchContact}
                      onSelectedContact={onSelectedContact}
                      addContact={addContact}
                      editContact={editContact}
                    />
                  </motion.div>
                )}

                {currentPage == 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Activity />
                  </motion.div>
                )}
              </div>
            </div>
            <div
              className={`${
                selectedContact !== null || currentPage == 1
                  ? "block w-full"
                  : "hidden w-2/4"
              } p-4 h-full rounded-lg shadow-md bg-white lg:max-w-[30rem] lg:w-1/2 lg:block dark:bg-neutral-700 overflow-y-scroll`}
            >
              {currentPage == 0 &&
                (selectedContact !== null ? (
                  <ContactDetail
                    onEditContact={onEditContact}
                    selectedContact={selectedContact}
                    onPageChange={onDefaultPage}
                  />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col justify-center items-center"
                  >
                    <img
                      className="max-w-xs mx-auto"
                      src={Device}
                      alt="No Selected Contact"
                    />
                    <h1 className="text-lg font-semibold mt-4 dark:text-white">
                      No Selected Contact
                    </h1>
                  </motion.div>
                ))}

              {currentPage == 1 && (
                <Profile
                  editProfile={editProfile}
                  onEditPage={() => setEditProfile(!editProfile)}
                />
              )}
            </div>
          </section>
        </main>
      </div>
    </Context.Provider>
  );
};

export default Dashboard;
