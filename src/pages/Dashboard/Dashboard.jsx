/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidContact, BiUser, BiLogOut, BiBlock } from "react-icons/bi";
import { SideBar, SideBarItem } from "../../components/SideBar";
import { TbAlertHexagon } from "react-icons/tb";
import { BsStarFill } from "react-icons/bs";
import Header from "../../components/Header";
import ModalBox from "../../components/ModalBox";
import ContactForm from "../../components/contact/ContactForm";
import ProfileForm from "../../components/profile/ProfileForm";
import ContactPage from "../ContactPage";
import FavoritePage from "../FavoritePage";
import BlockPage from "../BlockPage";
import ProfilePage from "../ProfilePage";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDark") === "true"
  );
  const [searchContact, setSearchContact] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAddContact, setIsAddContact] = useState(false);
  const [isEditContact, setIsEditContact] = useState(false);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const onSetIsAddContact = () => setIsAddContact(!isAddContact);
  const onSetIsEditContact = () => setIsEditContact(!isEditContact);
  const onSetIsEditProfile = () => setIsEditProfile(!isEditProfile);
  const onSetSelectedContact = (value) => setSelectedContact(value);
  const onSetShowNavBar = () => setShowNavBar(!showNavBar);
  const onSetIsDarkMode = () => setIsDarkMode(!isDarkMode);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShowNavBar(false);
    onSetSelectedContact(null);
  };

  const onAcceptSignOut = () => {
    sessionStorage.clear();
    navigate("/auth", { replace: true });
  };

  const onCancelSignOut = () => {
    setIsShowModal(false);
    setShowNavBar(false);
  };

  useEffect(() => {
    localStorage.setItem("isDark", isDarkMode);

    const isAuthenticated = sessionStorage.getItem("token");
    if (isAuthenticated === null) {
      navigate("/auth", { replace: true });
    }
  }, [navigate, isDarkMode]);

  const DashboardPages = {
    0: (
      <ContactPage
        searchContact={searchContact}
        isAddContact={isAddContact}
        isEditContact={isEditContact}
        selectedContact={selectedContact}
        onSetIsAddContact={onSetIsAddContact}
        onSetIsEditContact={onSetIsEditContact}
        onSetSelectedContact={onSetSelectedContact}
      />
    ),
    1: (
      <FavoritePage
        searchContact={searchContact}
        isEditContact={isEditContact}
        selectedContact={selectedContact}
        onSetIsAddContact={onSetIsAddContact}
        onSetIsEditContact={onSetIsEditContact}
        onSetSelectedContact={onSetSelectedContact}
      />
    ),
    2: (
      <BlockPage
        searchContact={searchContact}
        isEditContact={isEditContact}
        selectedContact={selectedContact}
        onSetIsAddContact={onSetIsAddContact}
        onSetIsEditContact={onSetIsEditContact}
        onSetSelectedContact={onSetSelectedContact}
      />
    ),
    3: (
      <ProfilePage
        isEditProfile={isEditProfile}
        onSetIsEditProfile={onSetIsEditProfile}
      />
    ),
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} w-screen h-screen flex`}>
      {isShowModal && (
        <ModalBox
          icon={<TbAlertHexagon size={80} />}
          title="Sign Out"
          message="Are you sure you want to sign out? you'll be missed!"
          onCancelValue={isShowModal}
          onAccept={onAcceptSignOut}
          onCancel={onCancelSignOut}
        />
      )}

      <ProfileForm
        isEditProfile={isEditProfile}
        onSetIsEditProfile={onSetIsEditProfile}
      />
      <ContactForm
        isAddContact={isAddContact}
        onSetIsAddContact={onSetIsAddContact}
      />
      <ContactForm
        contactId={selectedContact}
        isAddContact={isEditContact}
        onSetIsAddContact={onSetIsEditContact}
        onSetSelectedContact={() => onSetSelectedContact(null)}
        isEdit
      />

      <SideBar showNavBar={showNavBar} onSetShowNavBar={onSetShowNavBar}>
        <SideBarItem
          title="Contacts"
          icon={<BiSolidContact size={24} />}
          isActive={currentPage == 0}
          onPageChange={() => onPageChange(0)}
        />
        <SideBarItem
          title="Favorites"
          icon={<BsStarFill size={24} />}
          isActive={currentPage == 1}
          onPageChange={() => onPageChange(1)}
        />
        <SideBarItem
          title="Block List"
          icon={<BiBlock size={24} />}
          isActive={currentPage == 2}
          onPageChange={() => onPageChange(2)}
        />
        <SideBarItem
          title="Profile"
          icon={<BiUser size={24} />}
          isActive={currentPage == 3}
          onPageChange={() => onPageChange(3)}
        />
        <div className="flex-grow"></div>
        <SideBarItem
          icon={<BiLogOut size={24} />}
          title="Sign Out"
          isActive
          onPageChange={() => setIsShowModal(true)}
        />
      </SideBar>

      <main className="relative flex-grow h-full flex flex-col bg-neutral-100">
        <Header
          isDarkMode={isDarkMode}
          setSearchContact={setSearchContact}
          onSetShowNavBar={onSetShowNavBar}
          onSetIsDarkMode={onSetIsDarkMode}
        />
        <section className="p-4 flex-grow flex md:px-8 gap-8 overflow-hidden transition-colors ease dark:bg-neutral-800">
          {DashboardPages[currentPage]}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
