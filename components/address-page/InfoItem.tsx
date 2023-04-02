import {FC} from "react";


interface InfoItemType {
    key: string,
    title: string,
    value: string | number
}

const InfoItem: FC<InfoItemType> = ({key, title, value}) => {


    return (
        <div className="flex flex-col gap-y-1">
            <p className="text-sm font-bold">{title}</p>
            <div>
                <span className="text-xs">{value}</span>
            </div>
        </div>
    )
}

export default InfoItem