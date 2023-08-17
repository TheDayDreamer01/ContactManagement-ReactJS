import { FiSettings } from "react-icons/fi";

const Profile = () => {
    return (
        <>
            <div className="bg-stone-400 h-44">
            </div>
            <div className="px-6 py-4">
                <div className="flex justify-between items-start">
                    <div className="h-24 w-24 bg-stone-200 rounded-lg relative -top-12 flex justify-center items-center">
                        <h1 className="text-4xl font-semibold tracking-wide text-stone-500 shadow-sm">
                            LD
                        </h1>
                    </div>
                    <button className="px-4 self-start py-2">
                        <FiSettings className="inline" size={26} />
                    </button>
                </div>  

                <div className="grid grid-cols-3 place-items-center gap-6">
                    <span className="text-end">
                        <h2 className="text-3xl font-medium">0</h2> 
                        <p className="leading-2 text-sm font-medium text-stone-400 upper">Contacts</p>
                    </span>
                    <span className="text-end">
                        <h2 className="text-3xl font-medium">0</h2> 
                        <p className="leading-2 text-sm font-medium text-stone-400">Favorites</p>
                    </span>
                    <span className="text-end">
                        <h2 className="text-3xl font-medium">0</h2> 
                        <p className="leading-2 text-sm font-medium text-stone-400">Blocks</p>
                    </span>
                </div>
                
                <div>
                    
                </div>
            </div>
        </>
    );
};

export default Profile;