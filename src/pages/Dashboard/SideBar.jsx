import { BiBlock, BiLogOut} from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { BsFolder } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

const SideBar = () => {
    return (
        <div className="px-6 py-4 flex flex-col h-full">
            <SideBarItem icon={<GoPerson size={20} />} title="Profile" />
            <SideBarItem icon={<RiContactsLine size={20} />} title="Contacts" />
            <SideBarItem icon={<BsFolder size={20} />} title="Archive" />
            <SideBarItem icon={<GrFavorite size={20} />} title="Favorite" />
            <SideBarItem icon={<BiBlock size={20} />} title="Block" />
            <div className="flex-grow"></div>
            <SideBarItem icon={<BiLogOut size={20} />} title="Sign Out" />
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const SideBarItem = ({ icon, title }) => {
    return (
        <button className="flex items-center gap-4 p-2 hover:bg-zinc-100 w-full rounded-md mb-2">
            {icon}
            <p className="text-md font-medium">{title}</p>
        </button>
    );
};

export default SideBar;
    