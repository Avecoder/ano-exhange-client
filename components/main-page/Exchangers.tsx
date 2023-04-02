import {FC, useState} from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import ExchangeIcon from "@/icons/ExchangeIcon";
import Link from "next/link";

const data = {
    title: 'CoinChanger',
    reviews: {
        positive: 175,
        negative: 1
    },
    course: {
        original: '1.976.372 ₽',
        final: '1 ₿'
    },
    min: '5000 ₽',
    reserve: '8 ₿',
    url: 'https://coinchanger.in'
}

const options = [
    'Bitcoin (BTC)',
    'Tether ERC20 (USDT)',
    'Tether BEP20 (USDT)',
    'Ethereum (ETH)',
    'TRON (TRX)',
    'Dogecoin (DOGE)',
    'Toncoin (TON)',
    'WebMoney (WBZ)',
    'QIWI (RUB)',
    'PayPal (USD)',
    'Тинькофф (RUB)',
    'Альфа-Банк (RUB)',
    'Сбербанк (RUB)',
    'Visa/MasterCard (RUB)'
]

const Exchangers: FC = () => {
    const [originalValue, setOriginalValue] = useState(options[3])
    const [finalValue, setFinalValue] = useState(options[13])

    return (
        <>
            <h2 className="text-center">The best exchangers</h2>
            <div className="mt-14 flex items-center justify-center gap-x-14">
                <div>
                    <p className="text-xl font-bold mb-4">Give it away</p>
                    <Select options={options} selectedValue={originalValue} setSelectedValue={setOriginalValue}/>
                </div>
                <div>
                    <p className="text-xl font-bold mb-4">You get</p>
                    <Select options={options} selectedValue={finalValue} setSelectedValue={setFinalValue} />
                </div>
            </div>
            <div className="mt-36 grid grid-cols-3 gap-x-5 gap-y-5">
                {
                    [... new Array(9)].map(item =>
                        <Link href={data.url}>
                            <Card>
                                <div className="flex items-center justify-between mb-4">
                                    <h3>{data.title}</h3>
                                    <div className="text-sm flex gap-x-1.5">
                                        <span className={data.reviews.negative > 0 ? 'text-red-300' : 'text-white'}>{data.reviews.negative}</span>
                                        /
                                        <span className={data.reviews.positive > 0 ? 'text-emerald-300' : 'text-white'}>{data.reviews.positive}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-4 text-sm mb-2">
                                    <p>{data.course.original}</p>
                                    <ExchangeIcon fill="white" size="12"/>
                                    <p>{data.course.final}</p>
                                </div>
                                <div className="flex items-center gap-x-5 text-sm">
                                    <p>min: {data.min}</p>
                                    <p>Reserve: {data.reserve}</p>
                                </div>
                            </Card>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default Exchangers