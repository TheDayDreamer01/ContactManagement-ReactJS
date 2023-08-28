/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ModalBox = ({ icon, title, message, onAccept, onCancel }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bg-[#0000006f] h-screen w-screen z-40"
      onClick={onCancel}
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          className="bg-white h-80 w-80 md:w-[26rem] relative top-28 rounded-lg shadow-md dark:bg-neutral-700 dark:text-white"
        >
          <div className="p-8 flex flex-col items-center justify-center h-full">
            <div className="flex-grow flex flex-col items-center justify-center gap-2 text-center mb-8 ">
              <div className="text-red-500 mt-2">
                {icon}
              </div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-sm text-neutral-600 max-w-[14rem] dark:text-neutral-200">
                {message}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-red-500 border border-red-500 text-sm text-white px-5 py-3 rounded-lg shadow-md hover:bg-red-600 transition-colors ease-out font-medium"
                onClick={onAccept}
              >
                {"Yes, I'm sure"}
              </button>
              <button
                className="border border-black text-sm text-black px-5 py-3 rounded-lg dark:text-white dark:border-white font-medium hover:bg-neutral-800 hover:text-white transition-colors ease-out"
                onClick={onCancel}
              >
                {"No, Cancel"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ModalBox;
