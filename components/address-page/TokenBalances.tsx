import {FC} from "react";
import ethImg from '@/public/eth.svg'
import Card from "@/components/Card";
import Image from "next/image";
import {AddressComponentProps} from '@/components/@type'
import {coins} from '@/utils/coins'

const dataTest = {
    title: 'Tether USD',
    moneyInTheAccount: '0.88 USDT',
    url: ethImg
}

const TokenBalance: FC<AddressComponentProps> = ({data}) => {



    const findIcon = (tokenName: string) => {
        const findedCoin = coins.find(coin => coin.name === tokenName)

        return findedCoin ? findedCoin.path : 'coins/NF.svg'
    }

    const amount = (currentCoin: any) => {
        
        return (parseInt(currentCoin.value) / (10 ** parseInt(currentCoin.decimals))).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }


    return (
        <div className="col-start-1 col-end-9">
            <h2>ERC-20 balance</h2>
            <div className="grid grid-cols-2 gap-y-5 gap-x-5">
            {
                data.activeData.active.map((item: any, i: number) =>
                    <Card key={i}>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-x-5 items-center">
                                <Image
                                    src={findIcon(item.tokenName)}
                                    alt={item.tokenName}
                                    width="40"
                                    height="40"
                                    className="rounded-full"
                                />
                                <span className="font-bold text-sm">{item.tokenName}</span>
                            </div>
                            <div className="font-bold text-sm flex flex-wrap gap-x-3 justify-end">
                                <span>{amount(item)}</span>
                                <span>{item.tokenSymbol}</span>
                            </div>
                        </div>
                    </Card>
                )
            }
        </div>
        </div>
    )
}


export default TokenBalance