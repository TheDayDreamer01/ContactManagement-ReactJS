/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdEditNote } from "react-icons/md";

const ProfileHeader = ({ children, firstName, lastName, onBack, onEdit, page}) => {
    return (
        <div className="overflow-y-scroll h-full">
            <div className="w-full h-48 bg-neutral-800 rounded-t-lg relative flex justify-center" >

                <div className="h-20 w-full flex justify-between items-center px-4">
                    <button className={`${page == 1 && "invisible"} lg:invisible p-2 rounded-full bg-white`}>
                        <MdArrowBackIosNew size={22}
                                            onClick={onBack}/>
                    </button>
                    <button className="p-2 rounded-full bg-white">
                        <MdEditNote size={22}
                                    onClick={onEdit}/>
                    </button>
                </div>

                <div className="absolute -bottom-10 min-w-[4.5rem] min-h-[4.5rem] bg-neutral-300 rounded-lg flex justify-center items-center">
                    <h1 className="text-neutral-600 font-bold text-2xl">
                        {firstName[0].toUpperCase()}{lastName[0].toUpperCase()}
                    </h1>
                </div> 
            </div>
            <div className="flex justify-center items-end h-20">
                <h2 className="text-xl">{firstName} {lastName}</h2>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};

export default ProfileHeader;