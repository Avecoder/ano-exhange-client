import {FC} from "react";
import InfoItem from "@/components/address-page/InfoItem";

interface InfoItemType {
    title: string,
    value: string | number
}

interface InfoType {
    data: {
        [key: string]: InfoItemType
    }
}

const Info: FC<InfoType> = ({data}) => {



    return (
        <div className="flex flex-col gap-y-6 px-5 py-7 border border-gray-300 rounded-md h-fit">
            {
                Object.entries(data).map(([key, item]) =>
                    <InfoItem value={item.value} title={item.title} />
                )
            }

        </div>
    )
}

export default Info