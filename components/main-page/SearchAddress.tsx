import {FC, useState, lazy, Suspense, useEffect, useCallback} from "react";
import Button from "@/components/Button";
import ButtonIcon from "@/components/ButtonIcon";
import ArrowIcon from "@/icons/ArrowIcon";
import QRicon from "@/icons/QRicon";
import Input from "@/components/Input";
import { useRouter } from "next/router"
import QRScanner from '@/components/QRScanner'
import Image from 'next/image'
import {getMetamaskAddress} from '@/hooks/useMetamask'


const SearchAddress: FC = () => {
    const router = useRouter()

    const [address, setAddress] = useState('')
    const [input, setInput] = useState('')
    const [scannedQR, setScannedQR] = useState(false)
    const [showScanner, setShowScanner] = useState(false)

    const redirectToAddressPage = useCallback(address => {
      console.log('REDIRECT - ', address)

      if(address.trim().length > 0 ) {


        router.push({
            pathname: '/address',
            query: {
                user: address
            }
        })
      }
    }, [address])

    useEffect(() => {
      if(scannedQR) {
        redirectToAddressPage(address)
      }
    }, [scannedQR])

    useEffect(() => {
      if(input) {
        setAddress(input)
      }
    }, [input])

    const getAddress = async () => {
      const data = await getMetamaskAddress()
      if(data) {
        redirectToAddressPage(data)
      }
    }



    return (
        <>

            {
              showScanner && <QRScanner setAddress={setAddress} setScannedQR={setScannedQR} showScanner={showScanner} setShowScanner={setShowScanner}/>
            }

            <Input placeholder="Enter addresses" value={input} setValue={setInput} setShowQr={() => setShowScanner(true)}/>


            <Button active small onClick={() => redirectToAddressPage(address)}>
                <span>Search</span>
                <ArrowIcon fill="white" />
            </Button>

            <ButtonIcon onClick={getAddress}>
              <Image
                src="metamask.svg"
                alt="metamask"
                width="40"
                height="40"
               />
            </ ButtonIcon>
        </>
    )
}

export default SearchAddress
