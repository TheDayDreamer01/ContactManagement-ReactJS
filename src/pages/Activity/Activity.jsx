import { ActivityHeader } from "../../components/ActivityItems";
import ActivitySvg from "../../assets/svg/Activity.svg";

const Activity = () => {
  return (
    <>
      <ActivityHeader />
      <div className="relative top-20 h-full flex flex-col justify-center items-center p-4 gap-8">
        <img
          className="max-w-sm md:max-w-lg mx-auto"
          src={ActivitySvg}
          alt="No Available Contacts"
        />
        <h1 className="text-lg md:text-2xl font-semibold text-center dark:text-white">
          No Activities Recorded
        </h1>
      </div>
    </>
  );
};

export default Activity;
