import {FC, useMemo, useState, useEffect} from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import ExchangeIcon from "@/icons/ExchangeIcon";
import Link from "next/link";
import {currencyCrypto, payments} from '@/utils/currency'
import { useOptions } from "@/hooks/useExchangerOptions";
import { useRouter } from "next/router";

interface Currency {
    price: string | number
    currency: string
}

interface Coins {
    id: string
    min: Currency
    giveCurrency: Currency
    getCurrency: Currency
    reserve: Currency
}

interface Exchange {
    _id: string
    title: string
    url: string
    posReview: number
    negReview: number
    coins: Coins[]
}

export interface ExchangersProps {
    exchangers: Exchange[]
}



const Exchangers: FC<ExchangersProps> = ({exchangers}) => {
    const [getValue, setGetValue] = useState(payments[0].title)
    const [giveValue, setGiveValue] = useState(currencyCrypto[0].title)

    const router = useRouter()
    
    
    const options = useOptions(giveValue, getValue)


    useEffect(() => {
        const allData = [...currencyCrypto, ...payments]

        
        const getData = allData.find(item => item.title === getValue)
        const giveData = allData.find(item => item.title === giveValue)

        router.push({
            pathname: '/',
            query: {
                currency: `${giveData?.value}-${getData?.value}`
            }
        }, undefined, { scroll: false })

    }, [giveValue, getValue])

    

    return (
        <>
            <h2 className="text-center">The best exchangers</h2>
            <div className="mt-14 flex items-center justify-center gap-x-14">
                <div>
                    <p className="text-xl font-bold mb-4">Give it away</p>
                    <Select options={options.giveOptions} selectedValue={giveValue} setSelectedValue={setGiveValue}/>
                </div>
                <div>
                    <p className="text-xl font-bold mb-4">You get</p>
                    <Select options={options.getOptions} selectedValue={getValue} setSelectedValue={setGetValue} />
                </div>
            </div>
            {   
                exchangers.length 
                ?
                <div className="mt-36 grid grid-cols-3 gap-x-5 gap-y-5">
                {
                    exchangers.map(item =>
                        <Link href={item.url} key={item._id}>
                            <Card>
                                <div className="flex items-center justify-between mb-4">
                                    <h3>{item.title}</h3>
                                    <div className="text-sm flex gap-x-1.5">
                                        <span className={item.negReview > 0 ? 'text-red-300' : 'text-white'}>{item.negReview}</span>
                                        /
                                        <span className={item.posReview > 0 ? 'text-emerald-300' : 'text-white'}>{item.posReview}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4 text-sm mb-4">
                                    <p>{item.coins[0].giveCurrency.price} {item.coins[0].giveCurrency.currency.split(' ')[0]}</p>
                                    <ExchangeIcon fill="white" size="12"/>
                                    <p>{item.coins[0].getCurrency.price} {item.coins[0].getCurrency.currency.split(' ')[0]}</p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm">
                                    <p>min: <span className="">{`${item.coins[0].min.price}`.split('от')[1]} {item.coins[0].min.currency}</span></p>
                                    <p>reserve: <span className="">{item.coins[0].reserve.price} {item.coins[0].getCurrency.currency.split(' ')[0]}</span></p>
                                </div>
                            </Card>
                        </Link>
                    )
                }
            </div>
            : 
            <div className="mt-36 flex justify-center">
                <h3 className="text-2xl">Not found exchangers</h3>
            </div>
            }
        </>
    )
}

export default Exchangers