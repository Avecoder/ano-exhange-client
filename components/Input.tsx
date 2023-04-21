import {FC} from "react";
import SearchIcon from "@/icons/SearchIcon";
import QRicon from "@/icons/QRicon";
import {motion} from "framer-motion";

interface InputType {
    placeholder: string
}

const Input: FC<InputType> = ({placeholder}) => {


    return (
        <div className="input-wrap w-full">
            <div className="input-icon">
                <SearchIcon fill="#DBDBDB" />
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="py-2.5 px-5 pl-14 text-sm border border-slate-150  rounded-md w-full"
            />

            <div className="input-qr cursor-pointer">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <QRicon fill="black"  />
                </motion.div>
            </div>


        </div>
    )
}

export default Input