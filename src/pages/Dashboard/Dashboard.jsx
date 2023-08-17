/* eslint-disable react/jsx-key */
import { useState } from "react";
import { motion } from "framer-motion";
import { BiBlock, BiLogOut} from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { SideBar, SideBarItem } from "./components/SideBar";
import Header from "./components/Header";
import ContactDetail from "./pages/ContactDetail";
import ContactList from "./pages/ContactList";
import ContactForm from "./pages/ContactForm";
import Profile from "./pages/Profile";

const Dashboard = () => {

    const [item, setItem] = useState(0);
    const [active, setActive] = useState(false);
    const [form, setForm] = useState(false);

    const sideBarItems = [
        [<RiContactsLine size={22} />, "Contacts", <ContactList title="My Contacts" onClick={() => setForm(true)}/>],
        [<GrFavorite size={22} />, "Favorite", <ContactList title="My Favorites" onClick={() => setForm(true)}/>],
        [<BiBlock size={22} />, "Block List", <ContactList title="My Block List" onClick={() => setForm(true)}/>],
        [<GoPerson size={22} />, "Profile", <Profile />],
        [<BiLogOut size={22}  />, "Sign Out", null]
    ];

    const setCurrentItem = (value) => {
        setItem(value);
        setActive(false);
    };
    
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header active={active} setActive={setActive}/>  

                <motion.div className={`${ active ? "block" : "hidden"} md:hidden absolute z-20 bg-white border-r border-black h-screen w-80`}
                    initial={{ x: "-100%" }} 
                    animate={{ x: active ? "0%" : "-100%" }} 
                    transition={{ duration: 0.3 }}>

                    <SideBar>
                        <button className="p-4 mb-2 ml-auto"
                                onClick={() => setActive(!active)}>
                            <RxCross2 size={30} color="red"/>
                        </button>

                        {sideBarItems.map((element, index) => (
                            <>
                                {(index == sideBarItems.length -1 ) ? <div className="flex-grow"></div> : null}

                                <SideBarItem key={index} 
                                            icon={element[0]} 
                                            title={element[1]} 
                                            isActive={index == item}
                                            changePage={() => setCurrentItem(index)}/>
                            </> 
                        ))}
                    </SideBar>
                </motion.div>

                <section className="flex flex-grow h-full overflow-y-hidden">
                    <div className="hidden w-96 md:block lg:w-72 border-r border-black">
                        <SideBar>
                            {sideBarItems.map((element, index) => (
                                <>
                                    {(index == sideBarItems.length-1 ) ? <div className="flex-grow"></div> : null}

                                    <SideBarItem key={index} 
                                                icon={element[0]} 
                                                title={element[1]} 
                                                isActive={index == item}
                                                changePage={() => setCurrentItem(index)}/>
                                </> 
                            ))}
                        </SideBar>
                    </div>
                    <div className={`block ${sideBarItems[item][2] ?? "lg:hidden"} lg:block w-full lg:w-96 border-r border-black overflow-y-scroll`}>
                        {sideBarItems[item][2]}
                    </div>
                    <div className="hidden flex-grow bg-stone-100 lg:block ">
                        <ContactDetail />
                    </div>
                    <div className={`hidden ${form ? "lg:block" : "lg:hidden"} w-full lg:w-96 border-l border-black`}>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;