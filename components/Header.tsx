import {FC} from 'react'
import Link from "next/link";


const Header: FC = () => {


    return (
        <div className="flex items-center justify-center mb-36">
            <Link href="/" className="flex items-center gap-x-10">
                <div className="w-10 h-10 rounded-full border border-black"></div>
                <span className="text-lg font-medium">AnoExchange</span>
            </Link>
        </div>
    )
}

export default Header