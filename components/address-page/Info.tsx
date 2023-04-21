import {FC} from "react";
import InfoItem from "@/components/address-page/InfoItem";
import {convertTransactionData} from "@/hooks/useTime"

interface InfoItemType {
    title: string,
    value: string | number
}

interface InfoType {
    data: any
}

const Info: FC<InfoType> = ({data}) => {

    

    // const firstChange = convertTransactionData(data.address, data.firstTransaction)
    // const lastChange = convertTransactionData(data.address, data.lastTransaction)


    return (
        <div className="flex flex-col gap-y-6 px-5 py-7 border border-gray-300 rounded-md h-fit">
            <InfoItem value={'firstChange'} title="First balance change" />
            <InfoItem value={'lastChange'} title="Last balance change" />
            <InfoItem value={data.transactionCount} title="Transaction count" />
        </div>
    )
}

export default Info