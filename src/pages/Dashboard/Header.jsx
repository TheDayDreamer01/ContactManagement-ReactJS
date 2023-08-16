import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/Ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <>
            <header className="relative top-0 border-b border-black p-4 w-full">
                <div className="grid grid-cols-2 grid-rows-1 items-center lg:grid-cols-3">
                    <div className="flex items-center ml-0 lg:ml-4">
                        <button className="block pr-2 lg:hidden">
                            <AiOutlineMenu size={26}/>
                        </button>
                        <h1 className="text-2xl font-bold md:text-3xl">Logo</h1>
                    </div>
                    <div className="hidden lg:block relative">
                        <BsSearch className="absolute z-10 top-2 left-3" size={24}/>
                        <input className="h-10 pl-12 pr-2 rounded-sm border border-black w-full" type="text" placeholder="Search"/>
                    </div>
                    <div className="place-self-end self-center mr-0 lg:mr-4">
                        <div className="flex gap-4">
                            <button className="block lg:hidden">
                                <BsSearch size={26}/>
                            </button>
                            <button >
                                <CgProfile size={28}/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;