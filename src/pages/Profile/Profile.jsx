/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ProfileContactCount,
  ProfileHeader,
  ProfileItem,
} from "../../components/ProfileItems";
import { GetUserContacts } from "../../services/contactService";
import { GetUserProfile } from "../../services/userService.js";
import { BsCardHeading } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Profile = ({ editProfile, onEditPage }) => {
  const token = sessionStorage.getItem("token");
  const navigation = useNavigate();
  const [userData, setUserData] = useState({});
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {

    const getUserProfile = async () => {
      const response = await GetUserProfile(token);
      try {
        if (response.status === 200) {
          setUserData(response.data);
        } else if (response.status === 401) {
          sessionStorage.clear();
          navigation("/auth", { replace : true });
        }
        
      } catch (error) {
        console.log(error);
      }
    };

    const getUserContacts = async () => {
        const response = await GetUserContacts(token);
        try {
          if (response.status === 200) {
            setContactCount(response.data.length);
          } 
        } catch (error) {
          console.log(error);
        }
    };  

    getUserProfile();
    getUserContacts();
  }, [editProfile]);

  return (
    <ProfileHeader
      firstName={userData.firstName}
      lastName={userData.lastName}
      onEdit={onEditPage}
      buttonVisibility={false}
    >
      <ProfileContactCount contact={contactCount} favorite={0} block={0} />
      <ProfileItem
        icon={<BsCardHeading size={24} />}
        title="Username"
        data={userData.userName}
      />
      <ProfileItem
        icon={<MdOutlineMailOutline size={24} />}
        title="Email"
        data={userData.email}
      />
    </ProfileHeader>
  );
};

export default Profile;
