import ContactList from "./ContactList";
import Header from "./Header";
import SideBar from "./SideBar";
import ContactDetail from "./ContactDetail";

const Dashboard = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />  
                <div className="hidden absolute bg-white border-r border-black h-screen w-80">
                    <SideBar />
                </div>
                <section className="flex flex-grow">
                    <div className="hidden lg:block w-72 border-r border-black">
                        <SideBar />
                    </div>
                    <div className="hidden w-full lg:w-96 border-r border-black">
                        <ContactList />
                    </div>
                    {/* <div className="bg-purple-500 w-96">

                    </div> */}
                    <div className="hidden flex-grow">
                        <ContactDetail />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;