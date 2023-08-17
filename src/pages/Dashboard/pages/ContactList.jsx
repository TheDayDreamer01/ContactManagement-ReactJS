/* eslint-disable react/prop-types */
import { BsJournalPlus } from "react-icons/bs";

const ContactList = ({ title, onClick }) => {
    return (
        <>
            <div className="p-4 sticky top-0 bg-white shadow-sm flex z-10">
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <div className="py-2">
                <div className="relative flex flex-col items-end">
                    <div className="fixed z-10 bottom-5 mx-4">
                        <button className="h-14 w-14 rounded-full flex items-center justify-center bg-stone-300 shadow-lg hover:bg-stone-400 ease-out transition-colors" onClick={onClick}>
                            <BsJournalPlus size={24} /> 
                        </button>
                    </div>

                    <ContactListItem />
                    <ContactListItem />
                    <ContactListItem />
                    
                </div>
            </div>
        </>
    );
};


const ContactListItem = () => {
    return (
        <>
            <button className="px-4 w-full mb-1 rounded-sm bg-white hover:bg-stone-50 transition-colors ease-out">
                <div className="flex items-center gap-4 border-b py-2">
                    <div className="h-12 w-12 bg-stone-200 rounded flex items-center justify-center">
                        <p className="text-2xl text-stone-500 tracking-wide"> 
                            LD
                        </p>
                    </div>
                    <div className="text-left">
                        <h2 className="text-lg font-medium">Lirae Que Data</h2>
                        <p className="leading-2 text-xs italic">liraedata59@gmail.com</p>
                    </div>
                </div>
            </button>
        </>
    );
};
export default ContactList;