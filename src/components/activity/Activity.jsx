import { useState, useEffect } from "react";
import { ActivityHeader, ActivityItem, ActivityTitleHeader } from "./ActivityItems";
import ActivitySvg from "../../assets/svg/Activity.svg";

/**
 * Activity - A component for displaying a list of activities.
 *
 * This component fetches and displays a list of activities. If there are no activities available,
 * it shows a message indicating that no activities have been recorded.
 */
const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from session storage
    const activitiesJSON = sessionStorage.getItem("activities");
    setActivities(activitiesJSON ? JSON.parse(activitiesJSON) : []);
  }, []);

  return (
    <>
      <ActivityHeader />
      <ActivityTitleHeader />
      {activities.length !== 0 ? (
        // Display activities if there are any
        <>
          {activities.map((element, index) => (
            <ActivityItem
              key={index}
              status={element.status}
              description={element.description}
              date={element.date}
            />
          ))}
        </>
      ) : (
        // Display a message if there are no activities
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
      )}
    </>
  );
};

export default Activity;
