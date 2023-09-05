/* eslint-disable react/prop-types */
/**
 * ActivityItem - A component for displaying an individual activity item.
 *
 * This component displays an individual activity item with its status, description, and date.
 *
 * @param {string} status - The status of the activity.
 * @param {string} description - The description of the activity.
 * @param {string} date - The date of the activity.
 */
export const ActivityItem = ({ status, description, date }) => {
  return (
    <>
      <div className="p-4 w-full text-start rounded-md my-1 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <div className="grid grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="hidden xl:block">
            <p>{status}</p>
          </div>
          <div className="col-span-2 max-w-[38rem] xl:col-span-4">
            <p className="break-words">{description}</p>
          </div>
          <p className="text-sm italic">{date}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

/**
 * ActivityHeader - A component for displaying the header of the activity list.
 *
 * This component displays the header of the activity list, including column titles.
 */
export const ActivityTitleHeader = () => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-200  font-semibold dark:bg-neutral-800 dark:text-white">
      <div className="grid grid-cols-3 xl:grid-cols-6">
        <h1 className="hidden xl:block">Status</h1>
        <p className="col-span-2 max-w-[38rem] xl:col-span-4">Description</p>
        <p>Date</p>
      </div>
    </div>
  );
};

export const ActivityHeader = () => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-800 text-white dark:bg-neutral-900 ">
      <h1 className="text-start text-xl font-semibold">Recent Activities</h1>
    </div>
  );
};
