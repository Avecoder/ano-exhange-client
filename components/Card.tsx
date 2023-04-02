import {FC} from "react";
import {motion} from "framer-motion";

interface CardType {
    children?: any
}

const Card: FC<CardType> = ({children}) => {


    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white rounded-md px-7 py-5 cursor-pointer"
        >
            {children}
        </motion.div>
    )
}

export default Card