import Link from "next/link";
import {FC} from "react";
import {motion} from "framer-motion";

interface CustomLinkType {
    to: string,
    children?: any
}

const CustomLink: FC<CustomLinkType> = ({to, children}) => {


    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link href={to} className="py-2.5 px-5 bg-gray-100 text-gray-600 rounded-md font-bold flex items-center gap-x-4">{children}</Link>
        </motion.div>
    )
}

export default CustomLink