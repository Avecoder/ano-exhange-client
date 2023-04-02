import {FC} from "react";
import Card from "@/components/Card";
import CopyIcon from "@/icons/CopyIcon";


const TransactionHistory: FC = () => {


    return (
        <div className="flex flex-col gap-y-5">
            {
                [... new Array(5)].map(item =>
                    <Card>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-y-2.5">
                                    <p className="font-bold">175.00 USDT</p>
                                    <span className="font-light text-xs">Mar 10, 2023 6:36 AM UTC</span>
                                </div>
                                <span className="font-bold text-emerald-300">confirmed</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-10">
                                    <div className="flex flex-col gap-y-2.5">
                                        <div className="flex gap-x-5 items-center">
                                            <span className="font-medium text-sm">Transaction hash</span>
                                            <CopyIcon fill="white"/>
                                        </div>
                                        <span className="text-xs">0x8bb-0938e</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2.5">
                                        <div className="flex gap-x-5 items-center">
                                            <span className="font-medium text-sm">Contract</span>
                                            <CopyIcon fill="white"/>
                                        </div>
                                        <span className="text-xs">0x8bb-0938e</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2.5">
                                    <span className="font-medium text-sm">Fee</span>
                                    <span className="text-xs">0.0355 ETH - 55.94 USD</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                )
            }
        </div>
    )
}


export default TransactionHistory