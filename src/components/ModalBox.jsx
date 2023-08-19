/* eslint-disable react/prop-types */
const ModalBox = ({icon, title, message, onAccept, onCancel}) => {
    return (
        <section className={` ${close ? "block" : "hidden"} border border-neutral-600 absolute w-screen h-screen bg-[#0000006f] z-40 left-0 top-0 dark:text-white`}
                onClick={onCancel}>
            <div className="bg-white h-80 w-80 sm:w-[22rem] mx-auto relative top-32 rounded-lg dark:bg-neutral-700">
                <div className="flex flex-col h-full p-6 gap-4">
                    <div className="flex-grow flex flex-col justify-center items-center gap-2">
                        {icon}
                        <h1 className="py-2 font-semibold text-xl">{title}</h1>
                        <p className="text-center text-md leading-2 mx-4">{message}</p>
                    </div>
                    <div className="flex items-center px-4 justify-center gap-4 text-md h-14">
                        <button className="py-2 px-4 bg-red-500 hover:bg-red-600 transition-colors ease-out border border-red-500 text-white font-medium rounded-lg shadow-md text-sm"
                            onClick={onAccept}>
                            {"Yes, I'm sure"}
                        </button>
                        <button className="py-2 px-4 border border-neutral-600 font-medium rounded-lg shadow-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors ease-out"
                            onClick={onCancel}>
                            No, Cancel
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModalBox;

