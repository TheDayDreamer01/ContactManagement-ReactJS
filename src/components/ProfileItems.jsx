/* eslint-disable react/prop-types */
export const ProfileItem = ({ icon, title, data }) => {
    return (
        <>
            <div className="flex items-center w-full gap-6 my-2 p-4 flex-overflow">
                <div className="">
                    {icon}
                </div>
                <div className="max-w-[20rem]">
                    <h2 className="text-sm text-neutral-500 font-medium">{title}</h2>
                    <p className="text-md break-words">{data}</p>
                </div>
            </div>
            <hr />
        </>
    );
};

export const ProfileContactCount = ({contact, favorite, block}) => {
    return (
        <>
            <div className="flex items-center w-full gap-6 my-2 p-4 flex-overflow">
                <span className="flex-1 text-center">  
                    <h2 className="font-mono text-2xl font-semibold">{contact}</h2>
                    <p className="text-md leading-6 text-neutral-500">Contacts</p>
                </span>
                <span className="flex-1 text-center">
                    <h2 className="font-mono text-2xl font-semibold">{favorite}</h2>
                    <p className="text-md leading-6 text-neutral-500">Favorites</p>

                </span>
                <span className="flex-1 text-center">
                    <h2 className="font-mono text-2xl font-semibold">{block}</h2>
                    <p className="text-md leading-6 text-neutral-500">Blocks</p>
                </span>
            </div>
        </>
    );
};
