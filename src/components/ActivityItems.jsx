export const ActivityItem = () => {
    return (
        <>
            <div className="p-4 w-full text-start rounded-md my-1 hover:bg-stone-100">
                <div className="grid grid-cols-3 xl:grid-cols-6">
                    <div className="hidden xl:block">
                        <h1>Delete</h1>
                    </div>
                    <div className="col-span-2 xl:col-span-4 max-w-[38rem]">
                        <p className="break-words "> 
                            Created a new contact
                        </p>
                    </div>  
                    <p>10-10-2023</p>
                </div>
            </div>
            <hr />
        </>
    );
};

export  const ActivityHeader = () => {
    return (
        <div className="p-4 w-full text-start rounded-md my-1 bg-neutral-800 text-white font-semibold">
            <div className="grid grid-cols-3 xl:grid-cols-6">
                <h1 className="hidden xl:block">Status</h1>
                <div className="col-span-2 xl:col-span-4 max-w-[38rem]">
                    <p className="break-words "> 
                        Description
                    </p>
                </div>
                <p>Date</p>
            </div>
        </div>
    );
};


