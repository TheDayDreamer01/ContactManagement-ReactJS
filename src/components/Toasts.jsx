/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { TbCircleXFilled } from "react-icons/tb";
import { PiWarningFill, PiWarningCircleFill } from "react-icons/pi";

export const Successful = ({ isActive, message }) => {
    const [isInvisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);

        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isActive]);

    return (
        isInvisible && (
            <section className="fixed bottom-10 w-96 right-10 p-4 rounded-xl h-16 shadow-lg z-50 flex items-center bg-green-100 border-2 border-green-400 gap-4">
                <BsFillCheckCircleFill size={20} className="text-green-500"/>
                <p className="text-green-500 font-medium">{message}</p>
            </section>
        )
    );
};

export const Unsuccessful = ({ isActive, message }) => {
    const [isInvisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);

        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isActive]);

    return (
        isInvisible && (
            <section className="fixed bottom-10 w-96 right-10 p-4 rounded-xl h-16 shadow-lg z-50 flex items-center bg-red-100 border-2 border-red-400 gap-3">
                <TbCircleXFilled size={26} className="text-red-500"/>
                <p className="text-red-500 font-medium">{message}</p>
            </section>
        )
    );
};

export const Warning = ({ isActive, message }) => {
    const [isInvisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);

        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isActive]);

    return (
        isInvisible && (
            <section className="fixed bottom-10 w-96 right-10 p-4 rounded-xl h-16 shadow-lg z-50 flex items-center bg-amber-100 border-2 border-amber-400 gap-4">
                <PiWarningFill size={20} className="text-amber-500"/>
                <p className="text-amber-500 font-medium">{message}</p>
            </section>
        )
    );
};

export const Information = ({ isActive, message }) => {
    const [isInvisible, setIsInvisible] = useState(false);

    useState(() => {
        const timeout = setTimeout(() => {
            setIsInvisible(true);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isActive]); 

    return (
        isInvisible && (
            <section className="fixed bottom-10 w-96 right-10 p-4 rounded-xl h-16 shadow-lg z-50 flex items-center bg-cyan-100 border-2 border-cyan-400 gap-3">
                <PiWarningCircleFill size={26} className="text-cyan-500"/>
                <p className="text-cyan-500 font-medium">{message}</p>
            </section>
        )
    );
};      