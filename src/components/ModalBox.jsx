/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ModalBox = ({
  icon,
  title,
  message,
  onAccept,
  onCancel,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity:  1 }}
      className="absolute bg-[#0000006f] h-screen w-screen z-40"
      onClick={onCancel}
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          className="bg-white h-80 md:h-80 w-80 md:w-[30rem] relative top-28 rounded-lg shadow-md dark:bg-neutral-700 dark:text-white"
        >
          <div className="p-8 flex flex-col items-center justify-center h-full">
            <div className="flex-grow flex flex-col items-center justify-center gap-4 text-center mb-8">
              {icon}
              <h1 className="text-2xl font-medium">{title}</h1>
              <p className="text-sm text-neutral-600 max-w-[14rem] dark:text-neutral-200">
                {message}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-red-500 border border-red-500 text-sm text-white px-5 py-3 rounded-lg shadow-md"
                onClick={onAccept}
              >
                {"Yes, I'm sure"}
              </button>
              <button
                className="border shadow-md border-black text-sm text-black px-5 py-3 rounded-lg dark:text-white dark:border-white"
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
