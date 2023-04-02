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

const user = {

    firstBalanceChange: {
        title: 'First balance change',
        value: 'Received 6 months ago'
    },
    lastBalanceChange: {
        title: 'Last balance change',
        value: 'Sent 6 days ago'
    },
    transactionCount: {
        title: 'Transaction count',
        value: 44
    }
}

const userAddressInf = {
    address: {
        title: 'Address',
        value: '0xf9ca4ccea8732d5c803cf0ed2be102817fc9abde'
    },
    balance: {
        title: 'Balance',
        value: '0.008947123479246065 ETH - 14.94 USD'
    },
    totalRecieved: {
        title: 'Total received',
        value: '0.078698 ETH - 127.94 USD'
    },
    totalSpent: {
        title: 'Total spent',
        value: '0.0355 ETH - 55.94 USD'
    },
    tokenBalance: {
        title: 'ERC-20 token balance',
        value: '0.94 USD'
    },
    assetCount: {
        title: 'Asset count',
        value: 2
    },
}

const AddressPage = () => {


    const buttons = [
        {
            title: 'Address info',
            value: 'address'
        },
        {
            title: 'ERC-20 Token balances',
            value: 'balance'
        },
        {
            title: 'Transaction history',
            value: 'history',
            Icon: ExchangeIcon
        },
        {
            title: 'NFT',
            value: 'nft'
        }
    ]

    const sections = [
        {
            value: 'address',
            Component: AddressInfo,
            componentProps: userAddressInf
        },
        {
            value: 'balance',
            Component: TokenBalance,
            componentProps: userAddressInf
        },
        {
            value: 'history',
            Component: TransactionHistory,
            componentProps: userAddressInf
        },
        {
            value: 'nft',
            Component: NFT,
            componentProps: userAddressInf
        },
    ]

    const [buttonCurrent, setButtonCurrent] = useState(buttons[0])




    return (
        <>
            <CustomHead title="Account data" description="This is account page anoExchange"/>
            <main className="flex flex-col grid grid-cols-12 gap-x-5 gap-y-14">
                <div className="flex gap-x-5 col-start-1 col-end-13">
                    <Image
                        className="rounded-full"
                        src={ethImg}
                        alt="account type"
                        width="50"
                        height="50"
                    />
                    <h2>Ethereum account</h2>
                </div>
                <div className="col-start-1 col-end-3">
                    <Info data={user}/>
                </div>
                <div className="col-start-4 col-end-12 flex flex-col gap-y-14">
                    <div className="flex gap-x-5">
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
                            sections.map(({value, Component}) =>
                                value === buttonCurrent.value &&
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Component />
                                </motion.div>
                            )
                        }
                    </div>
                </div>
            </main>
        </>

    )
}

export default AddressPage