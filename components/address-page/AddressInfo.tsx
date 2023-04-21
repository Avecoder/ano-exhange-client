import {FC} from "react";
import Card from "@/components/Card";
import QRicon from "@/icons/QRicon";
import {motion} from "framer-motion";
import CopyIcon from "@/icons/CopyIcon";
import {AddressComponentProps} from '@/components/@type'
import TokenBalances from './TokenBalances'

const AddressInfo: FC<AddressComponentProps> = ({data}) => {
    console.log(data)



    return (
        <div className="grid grid-cols-8 gap-y-14">
            <div className="col-start-1 col-end-9 flex items-center justify-between">
                <div className="flex flex-col gap-y-5">
                    <p className="text-xl font-bold">Address</p>
                    <div className="flex items-center gap-x-5">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer"
                        >
                            <QRicon fill="black"  />
                        </motion.div>

                        <span className="text-sm">{data.address}</span>

                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="cursor-pointer"
                        >
                            <CopyIcon fill="black"/>
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 items-end">
                    <p className="text-xl font-bold">{data.activeData.etheriumData.balance} ETH</p>
                    <span>{data.activeData.etheriumData.usdBalance} USD</span>
                </div>
            </div>
            <div className="col-start-1 col-end-7 grid grid-cols-2 gap-x-5 gap-y-5">
                {
                    data.activeData.infoAddress.mainData.map((item: any, i: number ) =>
                        <Card>
                            <div className="flex flex-col gap-y-4">
                                <p className="font-bold">{item.title}</p>
                                <span className="text-sm">{item.value}</span>
                            </div>
                        </Card>
                    )
                }
            </div>

            <TokenBalances data={data} />
        </div>
    )
}


export default AddressInfo