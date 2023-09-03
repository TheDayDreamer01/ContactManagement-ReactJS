/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Activity from "../../components/activity/Activity";
import Profile from "../../components/profile/Profile";

const ProfilePage = ({ isEditProfile, onSetIsEditProfile }) => {
  return (
    <>
      <div className="h-full w-full rounded-lg shadow-md p-4 bg-white lg:block lg:w-1/2 xl:w-full dark:bg-neutral-700 relative">
        <div className="overflow-y-scroll h-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Activity />
          </motion.div>
        </div>
      </div>

      <div className="p-4 h-full rounded-lg shadow-md bg-white lg:max-w-[30rem] lg:w-1/2 lg:block dark:bg-neutral-700 overflow-y-scroll">
        <Profile
          isEditProfile={isEditProfile}
          onSetIsEditProfile={onSetIsEditProfile}
        />
      </div>
    </>
  );
};

export default ProfilePage;
