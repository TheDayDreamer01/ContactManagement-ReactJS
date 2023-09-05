/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

/**
 * ModalBox - A reusable component for displaying a modal dialog box.
 *
 * @param {Object} props - The component's properties.
 * @param {ReactNode} props.icon - The icon or visual element to display at the top of the modal.
 * @param {string} props.title - The title or heading of the modal.
 * @param {string} props.message - The message or content to display in the modal body.
 * @param {function} props.onAccept - A function to be called when the user accepts or confirms the action.
 * @param {function} props.onCancel - A function to be called when the user cancels or closes the modal.
 */
const ModalBox = ({ icon, title, message, onAccept, onCancel }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 bg-[#0000006f] h-screen w-screen z-40"
      onClick={onCancel}
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ translateY: -100 }}
          animate={{ translateY: 0 }}
          className="bg-white h-80 w-80 md:w-[26rem] relative top-28 rounded-lg shadow-md dark:bg-neutral-700 dark:text-white"
        >
          <div className="p-8 flex flex-col items-center justify-center h-full">
            <div className="flex-grow flex flex-col items-center justify-center gap-2 text-center mb-8">
              <div className="text-red-500 mt-2">{icon}</div>
              <h1 className="text-2xl font-bold not-italic text-black dark:text-white">{title}</h1>
              <p className="text-sm text-neutral-600 max-w-[14rem] dark:text-neutral-200 not-italic">
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
