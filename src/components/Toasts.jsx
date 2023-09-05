/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbCircleXFilled } from "react-icons/tb";

export const SuccessToasts = ({ message, isFavorite, setIsFavorite }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFavorite(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isFavorite]);

  return (
    <AnimatePresence>
      {isFavorite && (
        <motion.div
          initial={{ opacity: 0, bottom: 50 }}
          animate={{ opacity: 1, bottom: 0 }}
          exit={{ opacity: 0, bottom: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="fixed z-20 bottom-10 right-10">
            <div className="w-96 h-16 shadow-xl border-4 border-green-400 rounded-lg bg-green-100">
              <div className="flex h-full items-center px-6 space-x-4">
                <BsFillCheckCircleFill size={22} />
                <h1 className="text-lg font-semibold not-italic">{message}</h1>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const UnsuccessToasts = ({ message, isRemove, setIsRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRemove(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isRemove]);

  return (
    <AnimatePresence>
      {isRemove && (
        <motion.div
          initial={{ opacity: 0, bottom: 50 }}
          animate={{ opacity: 1, bottom: 0 }}
          exit={{ opacity: 0, bottom: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="fixed z-20 bottom-10 right-10">
            <div className="w-96 h-16 shadow-xl border-4 border-red-400 rounded-lg bg-red-100">
              <div className="flex h-full items-center px-6 space-x-4">
                <TbCircleXFilled size={22} />
                <h1 className="text-lg font-semibold not-italic">{message}</h1>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
