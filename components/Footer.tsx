import {FC} from 'react'
import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import GithubIcon from "@/icons/GithubIcon";


const Footer: FC = () => {


    return (
        <div className="grid grid-cols-12">
            <div className="flex items-center mt-36 justify-between col-start-3 col-end-11">
                <span>© 2023 AnoExchange</span>
                <CustomLink to="/address">
                    <GithubIcon fill="#4B5563" />
                    <span>View on github</span>
                </CustomLink>
            </div>
        </div>
    )
}

export default Footer