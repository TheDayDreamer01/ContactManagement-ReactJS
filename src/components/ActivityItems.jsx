export const ActivityItem = () => {
  return (
    <>
      <div className="p-4 w-full text-start rounded-md my-1 hover:bg-neutral-100 dark:hover:bg-neutral-600">
        <div className="grid grid-cols-3 xl:grid-cols-6 dark:text-white">
          <div className="hidden xl:block">
            <p>Delete</p>
          </div>
          <div className="col-span-2 max-w-[38rem] xl:col-span-4">
            <p className="break-words">Created a new contact</p>
          </div>
          <p className="text-sm italic">10-10-2023</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export const ActivityHeader = () => {
  return (
    <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-900 text-white font-semibold">
      <div className="grid grid-cols-3 xl:grid-cols-6">
        <h1 className="hidden xl:block">Status</h1>
        <p className="col-span-2 max-w-[38rem] xl:col-span-4">Description</p>
        <p>Date</p>
      </div>
    </div>
  );
};
