/* eslint-disable react/prop-types */
const ModalBox = ({icon, title, message, onAccept, onCancel}) => {
    return (
        <section className={` ${close ? "block" : "hidden"} absolute w-screen h-screen bg-[#0000006f] z-20 left-0 top-0`}
                onClick={onCancel}>
            <div className="bg-white h-80 w-80 sm:w-[30rem] mx-auto relative top-32 rounded-lg">
                <div className="flex flex-col h-full p-6 gap-4">
                    <div className="flex-grow flex flex-col justify-center items-center">
                        {icon}
                        <h1 className="py-2 font-semibold text-xl">{title}</h1>
                        <p className="text-center text-md leading-2 mx-4">{message}</p>
                    </div>
                    <div className="flex items-center px-4 justify-center gap-4 text-md">
                        <button className="py-2 px-4 bg-red-500 border border-red-500 text-white font-medium rounded-lg shadow-md text-sm"
                            onClick={onAccept}>
                            {"Yes, I'm sure"}
                        </button>
                        <button className="py-2 px-4 border border-black font-medium rounded-lg shadow-md text-sm"
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

