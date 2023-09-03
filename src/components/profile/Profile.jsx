/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsCardHeading } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  ProfileContactCount,
  ProfileHeader,
  ProfileItem,
} from "./ProfileItems";
import { GetUserContacts } from "../../services/contactService.js";
import { GetUserProfile } from "../../services/userService.js";

/**
 * Profile - A component for displaying user profile information.
 *
 * @param {Object} props - The component's properties.
 * @param {boolean} props.isEditProfile - A flag indicating whether the user is in profile edit mode.
 * @param {function} props.onSetIsEditProfile - A function to set the profile edit mode.
 */
const Profile = ({ isEditProfile, onSetIsEditProfile }) => {
  const token = sessionStorage.getItem("token");
  const navigation = useNavigate();
  const [userData, setUserData] = useState({});
  const [contactCount, setContactCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [blockCount, setBlockCount] = useState(0);

  useEffect(() => {
    /**
     * Fetches user profile data.
     */
    const getUserProfile = async () => {
      const response = await GetUserProfile(token);
      try {
        if (response.status === 200) {
          setUserData(response.data);
        } else if (response.status === 401) {
          sessionStorage.clear();
          navigation("/auth", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    };

    /**
     * Fetches user contacts and calculates contact statistics.
     */
    const getUserContacts = async () => {
      const response = await GetUserContacts(token);
      try {
        if (response.status === 200) {
          const contact = response.data;
          const favorite = contact.filter((element) => element.isFavorite);
          const block = contact.filter((element) => element.isBlock);

          setContactCount(contact.length);
          setFavoriteCount(favorite.length);
          setBlockCount(block.length);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
    getUserContacts();
  }, [isEditProfile, navigation]);

  return (
    <ProfileHeader
      firstName={userData.firstName}
      lastName={userData.lastName}
      onEdit={onSetIsEditProfile}
      buttonVisibility={false}
    >
      <ProfileContactCount
        contact={contactCount}
        favorite={favoriteCount}
        block={blockCount}
      />
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
