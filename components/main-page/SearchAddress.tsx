import {FC, useState} from "react";
import Button from "@/components/Button";
import ArrowIcon from "@/icons/ArrowIcon";
import QRicon from "@/icons/QRicon";
import Input from "@/components/Input";
import { useRouter } from "next/router"


const SearchAddress: FC = () => {
    const router = useRouter()

    const [address, setAddress] = useState('')

    const redirectToAddressPage = () => {
      if(address.trim().length > 0) {
        router.push({
            pathname: '/address',
            query: {
                user: address
            }
        })
      }
    }

    return (
        <>


            <Input placeholder="Enter addresses" value={address} setValue={setAddress}/>


            <Button active small onClick={redirectToAddressPage}>
                <span>Search</span>
                <ArrowIcon fill="white" />
            </Button>
        </>
    )
}

export default SearchAddress
