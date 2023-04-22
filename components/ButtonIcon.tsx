
import {FC} from "react";
import { motion } from "framer-motion";

interface CustomLinkType {
    children?: any,
    onClick?: (any) => any
}

const ButtonIcon: FC<CustomLinkType> = ({children, onClick}) => {


    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`py-1.5 px-3 rounded-md font-bold flex items-center gap-x-4 h-fit border border-slate-150`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    )
}

export default ButtonIcon
