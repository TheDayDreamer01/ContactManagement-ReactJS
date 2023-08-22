import { useState, useEffect } from "react";
import {
  ProfileContactCount,
  ProfileHeader,
  ProfileItem,
} from "../../components/ProfileItems";
import { GetUserProfile } from "../../services/userService.js";
import { BsCardHeading } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const getUserProfile = async () => {
      const response = await GetUserProfile(token);
      setUserData(response.data);
    };

    getUserProfile();
  }, []);

  return (
    <ProfileHeader
      firstName={userData.firstName}
      lastName={userData.lastName}
      onBack={() => {}}
      onEdit={() => {}}
      page={1}
    >
      <ProfileContactCount contact={0} favorite={0} block={0} />
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
