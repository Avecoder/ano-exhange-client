import {FC} from "react";
import ethImg from '@/public/eth.svg'
import Card from "@/components/Card";
import Image from "next/image";

const data = {
    title: 'Tether USD',
    moneyInTheAccount: '0.88 USDT',
    url: ethImg
}

const TokenBalance: FC = () => {


    return (
        <div className="grid grid-cols-2 gap-y-5 gap-x-5">
            {
                [... new Array(7)].map(item =>
                    <Card>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-x-5 items-center">
                                <Image
                                    src={data.url}
                                    alt={data.title}
                                    width="40"
                                    height="40"
                                    className="rounded-full"
                                />
                                <span className="font-bold text-sm">{data.title}</span>
                            </div>
                            <span className="font-bold text-sm">{data.moneyInTheAccount}</span>
                        </div>
                    </Card>
                )
            }
        </div>
    )
}


export default TokenBalance