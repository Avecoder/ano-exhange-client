import {FC, useMemo} from "react";
import Card from "@/components/Card";
import CopyIcon from "@/icons/CopyIcon";
import {AddressComponentProps} from '@/components/@type'
import {convertData} from '@/hooks/useTime'


const TransactionHistory: FC<AddressComponentProps> = ({data}) => {

    console.log('DATA - ', data)

    const transactionHistory = useMemo(() => {

        const parseData = data.history.map((item: any) => {
            return {
                balance: (parseFloat(item.value) / (10 ** parseInt(item.tokenInfo.decimals) )),
                tokenName: item.tokenInfo.name,
                tokenSymbol: item.tokenInfo.symbol,
                from: item.from,
                to: item.to,
                timeStamp: item.timestamp,
                sendFrom: item.from === data.address.toLowerCase() ? 'OUT' : 'IN'
            }
        })

        return parseData
    }, [data])

    console.log('HISTORY - ', transactionHistory)

    return (
        <div className="flex flex-col gap-y-5">
            {
                transactionHistory.map((item: any, i: number) =>
                    <Card key={i}>
                        <div className="flex flex-col gap-y-5">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-y-2.5">
                                    <p className="font-bold">{item.value} {item.tokenSymbol}</p>
                                    <span className="font-light text-xs"></span>
                                </div>
                                <span className="font-bold text-emerald-300">{item.sendFrom}</span>
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="flex items-center gap-x-10">
                                    <div className="flex flex-col gap-y-2.5">
                                        <div className="flex gap-x-5 items-center">
                                            <span className="font-medium text-sm">From</span>
                                            <CopyIcon fill="white"/>
                                        </div>
                                        <span className="text-xs">{item.from.slice(0, 10)}-{item.from.slice(-6)}</span>
                                    </div>
                                    <div className="flex flex-col gap-y-2.5">
                                        <div className="flex gap-x-5 items-center">
                                            <span className="font-medium text-sm">To</span>
                                            <CopyIcon fill="white"/>
                                        </div>
                                        <span className="text-xs">{item.to.slice(0, 10)}-{item.to.slice(-6)}</span>
                                    </div>
                                </div>
                                <div className="text-xs">{convertData(item.timeStamp)}</div>
                            </div>
                        </div>
                    </Card>
                )
            }
        </div>
    )
}


export default TransactionHistory