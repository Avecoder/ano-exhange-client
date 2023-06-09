import Image from "next/image";
import ethImg from '@/public/eth.svg'
import Info from "@/components/address-page/Info";
import Button from "@/components/Button";
import ExchangeIcon from "@/icons/ExchangeIcon";
import {useState} from "react";
import AddressInfo from "@/components/address-page/AddressInfo";
import TokenBalance from "@/components/address-page/TokenBalances";
import TransactionHistory from "@/components/address-page/TransactionHistory";
import NFT from "@/components/address-page/NFT";
import CustomHead from "@/components/CustomHead";
import {motion} from "framer-motion";
import { GetServerSideProps } from 'next'
import axios from 'axios'
import {FC, lazy, Suspense} from 'react'
import {getHistory, getActiveByAddress, getAddressData} from '@/controllers/etherscan'
import {coins} from '@/utils/coins'
import QR from '@/components/QR'
const EthModel = lazy(() => import('@/components/EthModel'))

export interface AddressPageProps {
    data: any
}

const AddressPage: FC<AddressPageProps> = ({data}) => {
    const [showQR, setShowQr] = useState(false)

    const buttons = [
        {
            title: 'Address info',
            value: 'address',
        },
        {
            title: 'ERC-20 Token balances',
            value: 'balance'
        },
        {
            title: 'Transaction history',
            value: 'history',
            Icon: ExchangeIcon,
        }
    ]

    const sections = [
        {
            value: 'address',
            Component: AddressInfo,
            setValue: setShowQr
        },
        {
            value: 'balance',
            Component: TokenBalance,
        },
        {
            value: 'history',
            Component: TransactionHistory,
        }
    ]




    const [buttonCurrent, setButtonCurrent] = useState(buttons[0])

    const imgPath = coins.find(item => item.name === 'Etherium')?.path




    return (
        <>
            <CustomHead title="Account data" description="This is account page anoExchange"/>
            <main className="flex flex-col grid grid-cols-12 gap-x-5 gap-y-14">
                <div className="flex gap-x-5 col-start-1 col-end-13 items-center">


                    <Suspense>
                      <div className="w-20">
                        <EthModel rotationY={0}/>
                      </div>
                    </ Suspense>
                    <h2 className="pb-6">Ethereum account</h2>
                </div>

                <div className="col-start-1 col-end-3">
                    <Info data={data.activeData.infoAddress}/>
                </div>
                <div className="col-start-4 col-end-12 flex flex-col gap-y-14">
                    <div className="flex gap-5 flex-wrap">
                        {
                            buttons.map(({value, title, Icon}, i) =>
                                <Button
                                    active={value === buttonCurrent.value}
                                    small
                                    onClick={() => setButtonCurrent(buttons[i])}
                                >
                                    {
                                        Icon && <Icon fill={value === buttonCurrent.value ? 'white' : '#4b5563'} size="15" />
                                    }
                                    <span>{title}</span>

                                </Button>
                            )
                        }
                    </div>
                    <div>
                        {
                            sections.map(({value, Component, setValue}) =>
                                value === buttonCurrent.value &&
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Component data={data} setValue={setValue}/>
                                </motion.div>
                            )
                        }
                    </div>
                </div>

            </main>
            {
              showQR && <QR showQR={showQR} setShowQr={setShowQr} valueQR={data.address}/>
            }
        </>

    )

}

export default AddressPage



export const getServerSideProps: GetServerSideProps<any> = async ctx => {
  const apiKeyEtherscan = 'A2P8KAW7BVY52TQ5Y3FCDYKMYG5GUXQBY4'
  const apiKeyEthplorer = 'EK-vzzkC-pWsKUQS-ujUqC'
  let address: string = '0xf9Ca4CceA8732d5C803CF0Ed2be102817FC9aBDe'

  if(ctx.query.user) address = `${ctx.query.user}`

  const history = await getHistory(address, apiKeyEthplorer)



  if(history?.response?.status === 406) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      }
    }
  }

  const activeData = await getActiveByAddress(address, apiKeyEthplorer)

  return {
    props: {
      data: {
          history,
          address,
          activeData,
          addressInfo: []
      }
    }
  }
}
