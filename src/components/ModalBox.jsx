/* eslint-disable react/prop-types */
const ModalBox = ({icon, message, onAccept, onCancel}) => {
    return (
        <section className={` ${close ? "block" : "hidden"} absolute w-screen h-screen bg-[#0000006f] z-10 left-0 top-0`}
                onClick={onCancel}>
            <div className="bg-white h-72 w-[30rem] mx-auto relative top-32 rounded-lg">
                <div className="flex flex-col h-full p-6">
                    <div className="flex-grow flex justify-center items-center">
                        {icon}
                        <p className="text-center text-md leading-2 mx-4">{message}</p>
                    </div>
                    <div className="flex items-center px-4 justify-center gap-4 text-md">
                        <button className="py-2 px-4 bg-red-500 border border-black  text-white font-medium rounded-lg"
                            onClick={onAccept}>
                            {"Yes, I'm sure"}
                        </button>
                        <button className="py-2 px-4 border border-black font-medium  rounded-lg"
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

