/* eslint-disable react/prop-types */
export const ContactItem = ({firstName, lastName, email, phone, date, onContactView}) => {
    return (
        <>
            <button className="p-4 w-full text-start rounded-md my-1 hover:bg-neutral-100 dark:hover:bg-neutral-600"
                    onClick={onContactView}>
                <div className="flex gap-4 items-center">
                    <div className="min-h-[3.5rem] min-w-[3.5rem] bg-neutral-300 rounded-lg flex justify-center items-center dark:bg-neutral-700">
                        <h1 className="text-neutral-600 font-bold text-xl dark:text-neutral-300">
                            {firstName[0].toUpperCase()}{lastName[0].toUpperCase()}
                        </h1> 
                    </div>
                   <div className="text-neutral-500 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-between w-full place-items-center text-md dark:text-neutral-400">
                        <div className="place-self-start max-w-[18rem] lg:max-w-[8rem]">
                            <h1 className="text-black font-medium truncate dark:text-white">{firstName} {lastName}</h1>
                            <p className="text-sm xl:hidden">{email}</p>
                        </div>
                        <p className="hidden xl:block">{email}</p>
                        <p className="hidden 2xl:xl:block">{phone}</p>
                        <p className="text-sm hidden xl:block">{date}</p>
                   </div>
                </div>
            </button>
            <hr />
        </> 
    );
};

export const ContactHeader = ({ title }) => {
    return (    
        <div className="w-full rounded-md bg-neutral-800 mt-2 dark:bg-neutral-950">
            <p className="p-1 ml-4 font-semibold text-white">{title}</p>
        </div>
    );
};

