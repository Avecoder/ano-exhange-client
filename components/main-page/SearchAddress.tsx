import {FC} from "react";
import Button from "@/components/Button";
import ArrowIcon from "@/icons/ArrowIcon";
import QRicon from "@/icons/QRicon";
import Input from "@/components/Input";


const SearchAddress: FC = () => {

    return (
        <>

            <Input placeholder="Enter addresses" />


            <Button active small>
                <span>Search</span>
                <ArrowIcon fill="white" />
            </Button>
        </>
    )
}

export default SearchAddress