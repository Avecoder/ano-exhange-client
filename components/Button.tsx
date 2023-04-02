
import {FC} from "react";
import { motion } from "framer-motion";

interface CustomLinkType {
    children?: any,
    active?: boolean,
    small?: boolean,
    onClick?: (any) => any
}

const Button: FC<CustomLinkType> = ({active, children, small, onClick}) => {


    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`py-2.5 px-5 ${active ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'} ${small ? 'text-sm' : 'text-base'} rounded-md font-bold flex items-center gap-x-4 h-fit`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
}

export default Button