import {FC, useEffect, useRef, useState} from "react";
import ArrowMiniIcon from "@/icons/ArrowMiniIcon";
import { motion, AnimatePresence } from "framer-motion";

interface SelectType {
    options: string[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const Select: FC<SelectType> = ({options, selectedValue, setSelectedValue}) => {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);


    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative cursor-pointer " ref={ref}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggle}
                className="block w-60 text-sm font-bold text-left bg-black text-white rounded-md px-5 py-2.5 flex items-center justify-between"
            >
                <span>{selectedValue}</span>
                <ArrowMiniIcon fill="white" classes={`${isOpen ? 'rotate-180' : ''} duration-100`}/>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
                        className='absolute mt-5 w-full rounded-md bg-white shadow-lg overflow-hidden z-10 '
                    >
                        <ul className='list-none flex flex-col text-sm overflow-y-scroll max-h-80'>
                            {options.map((option, index) => (
                                <li key={index} className="px-5 py-3 pr-9 hover:bg-slate-100 cursor-pointer" onClick={() => handleSelect(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}

export default Select