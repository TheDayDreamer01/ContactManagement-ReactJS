import React, { useState, useEffect } from "react";
import { BsCardHeading } from "react-icons/bs";
import { BiSolidContact, BiUser, BiLogOut } from "react-icons/bi";
import { TbAlertHexagon } from "react-icons/tb";
import { SideBar, SideBarItem } from "../../components/SideBar";
import Header from "../../components/Header";   
import ModalBox from "../../components/ModalBox";


import { MdOutlineMailOutline, MdPhone, MdOutlineReceiptLong, MdLocationOn } from "react-icons/md";
import ProfileHeader from "../../components/ProfileHeader";
import { ActivityHeader, ActivityItem } from "../../components/ActivityItems";
import { ProfileItem, ProfileContactCount } from "../../components/ProfileItems";
import { ContactItem, ContactHeader } from "../../components/ContactItems";

export const Context = React.createContext();

const Dashboard = () => {

    const [contact, setContact] = useState(0);
    const [navBar, setNavBar] = useState(false);
    const [dark, setDark] = useState(localStorage.getItem("isDark") === "true");
    const [page, setPage] = useState(0);
    const [signOut, setSignOut] = useState(false);

    useEffect(() => {
        localStorage.setItem("isDark", dark);
    }, [dark]);

    return (    
        <Context.Provider value={[
            navBar, setNavBar, 
            dark, setDark]}>

            {signOut && <ModalBox icon={<TbAlertHexagon size={80} />} title="Sign Out"
                                message="Are you sure you want to sign out? you'll be missed!" 
                                onAccept={() => {}}
                                onCancelValue={signOut}
                                onCancel={() => setSignOut(false)}/>}
            <div className={`${dark && "dark" } w-screen h-screen flex`}>
                <SideBar>
                    <SideBarItem icon={<BiSolidContact size={24} />} 
                                title="Contacts"
                                isActive={page == 0}
                                onPageChange={() => {setPage(0); setNavBar(false)}}/>
                    <SideBarItem icon={<BiUser size={24} />} 
                                title="Profile"
                                isActive={page == 1}
                                onPageChange={() => {setPage(1); setNavBar(false)}}/>
                    <div className="flex-grow"></div>  
                    <SideBarItem icon={<BiLogOut size={24} />} 
                                title="Sign Out"
                                isActive={true}
                                onPageChange={() => setSignOut(true)}/>
                </SideBar>

                <main className="relative flex-grow h-full flex flex-col bg-neutral-100">
                    <Header />
                    <section className="flex-grow dark:bg-neutral-900 flex md:px-8 md:py-4 gap-8 overflow-hidden transition-colors ease">
                        <div className={`${(contact != 0 || page == 1) && "hidden"} lg:block h-full w-full lg:w-1/2 xl:w-full rounded-lg shadow-md p-4 bg-white overflow-y-scroll dark:bg-neutral-800`}>
                            {(page == 0) && (
                                <>
                                    <ContactHeader title="A" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" onContactView={() => setContact(1)}/>
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" onContactView={() => setContact(1)} />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" onContactView={() => setContact(1)} />
                                    <ContactHeader title="B" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" />
                                    <ContactHeader title="C" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" />
                                    <ContactItem firstName="Lirae Que" lastName="Data" 
                                                phone="+639760292633" email="liraedata59@gmail.com"
                                                date="10/10/2023" />
                                </>
                            )}

                            {(page == 1) && (
                                <>
                                    <ActivityHeader />
                                    <ActivityItem />
                                </>
                            )}
                        </div>
                        <div className={`${(contact != 0 || page==1)? "block w-full" : "hidden w-2/4"} p-4 h-full lg:w-1/2 lg:block rounded-lg shadow-md bg-white max-w-[30rem] dark:bg-neutral-800`}>

                            {(page == 0 && contact != 0 ) ?  (
                                <ProfileHeader firstName="Lirae Que" lastName="Data" 
                                            onBack={() => setContact(0)} page={page}>
                                    <ProfileItem icon={<MdOutlineMailOutline />} title="Email" data="liraedata59@gmail.com" />
                                    <ProfileItem icon={<MdPhone />} title="Mobile" data="+639760292633" />
                                    <ProfileItem icon={<MdOutlineReceiptLong />} title="Billing Address" data="dsjhfskjfh" />
                                    <ProfileItem icon={<MdLocationOn />} title="Delivery Address" data="hkhkjheqwkjhekqj" />
                                </ProfileHeader>   
                            ) : (
                                <>
                                    
                                </>
                            )}

                            {(page == 1) && (
                                <ProfileHeader firstName="Lirae Que" lastName="Data" 
                                            onBack={() => setContact(0)} page={page}>
                                    <ProfileContactCount contact={99}
                                                        favorite={99}
                                                        block={99}/>
                                    <ProfileItem icon={<BsCardHeading />} title="Username" data="WannaCry081" />                                            
                                    <ProfileItem icon={<MdOutlineMailOutline />} title="Email" data="liraedata59@gmail.com" />                                            
                                </ProfileHeader>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </Context.Provider>
    );
};

export default Dashboard;