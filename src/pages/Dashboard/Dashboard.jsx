/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidContact, BiUser, BiLogOut } from "react-icons/bi";
import { TbAlertHexagon } from "react-icons/tb";
import Header from "../../components/Header";
import ModalBox from "../../components/ModalBox";
import Contact from "../Contact";
import Profile from "../Profile/Profile";
import ContactDetail from "../ContactDetail";
import { SideBar, SideBarItem } from "../../components/SideBar";


export const Context = React.createContext();

const Dashboard = () => {
  const navigate = useNavigate();

  // navbar use state
  const [navBar, setNavBar] = useState(false);

  // darkmode use state
  const [dark, setDark] = useState(localStorage.getItem("isDark") === "true");

  // select contact use state
  const [selectedContact, setSelectedContact] = useState(0);

  // navigate page use state
  const [page, setPage] = useState(0);

  // sign out use state
  const [signOut, setSignOut] = useState(false);

  useEffect(() => {
    localStorage.setItem("isDark", dark);

    const isAuthenticated = sessionStorage.getItem("token");
    if (isAuthenticated === null) {
      navigate("/", { replace: true });
    }
  }, [dark, navigate]);

  const onAcceptSignOut = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
  };
  const onCancelSignOut = () => {
    setSignOut(false);
    setNavBar(false);
  };
  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
    setNavBar(false);
  };
  const onSelectedContact = (value) => setSelectedContact(value);

  return (
    <Context.Provider value={[navBar, setNavBar, dark, setDark]}>
      {signOut && (
        <ModalBox
          icon={<TbAlertHexagon size={80} />}
          title="Sign Out"
          message="Are you sure you want to sign out? you'll be missed!"
          onCancelValue={signOut}
          onAccept={onAcceptSignOut}
          onCancel={onCancelSignOut}
        />
      )}

      <div className={`${dark && "dark"} w-screen h-screen flex`}>
        <SideBar>
          <SideBarItem
            icon={<BiSolidContact size={24} />}
            title="Contacts"
            isActive={page == 0}
            onPageChange={() => onPageChange(0)}
          />
          <SideBarItem
            icon={<BiUser size={24} />}
            title="Profile"
            isActive={page == 1}
            onPageChange={() => onPageChange(1)}
          />
          <div className="flex-grow"></div>
          <SideBarItem
            icon={<BiLogOut size={24} />}
            title="Sign Out"
            isActive
            onPageChange={() => setSignOut(true)}
          />
        </SideBar>

        <main className="relative flex-grow h-full flex flex-col bg-neutral-100">
          <Header />
          <section className="flex-grow flex md:px-8 md:py-4 gap-8 overflow-hidden transition-colors ease dark:bg-neutral-800">
            <div
              className={`${
                (selectedContact != 0 || page == 1) && "hidden"
              }  h-full w-full rounded-lg shadow-md p-4 bg-white overflow-y-scroll lg:block lg:w-1/2 xl:w-full dark:bg-neutral-700`}
            >
              {page == 0 ? (
                <Contact onSelectedContact={onSelectedContact} />
              ) : (
                <></>
              )}
            </div>
            <div
              className={`${
                selectedContact != 0 || page == 1
                  ? "block w-full"
                  : "hidden w-2/4"
              } p-4 h-full rounded-lg shadow-md bg-white max-w-[30rem] lg:w-1/2 lg:block dark:bg-neutral-700`}
            >
              {page == 0 && selectedContact != 0 ? (
                <>
                  <ContactDetail
                    selectedContact={selectedContact}
                    onPageChange={() => onSelectedContact(0)}
                  />
                </>
              ) : (
                <Profile />
              )}

              {page == 0 && selectedContact != 0 ? <></> : <></>}
            </div>
          </section>
        </main>
      </div>
    </Context.Provider>
  );
};

export default Dashboard;
