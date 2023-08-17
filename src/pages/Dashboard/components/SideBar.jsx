/* eslint-disable react/prop-types */

export const SideBar = ({children}) => {
    return (
        <div className="p-4 flex flex-col h-full">
            {children}
        </div>
    );
};


export const SideBarItem = ({icon, title, isActive, changePage}) => {
    return (
        <button className={`flex items-center gap-4 p-4 ${isActive ? "bg-stone-100" : ""} hover:bg-stone-100 w-full rounded-md mb-2 transition-colors ease-out`} onClick={changePage}>
            {icon} 
            <p className="text-md font-medium">{title}</p>
        </button>
    );
};