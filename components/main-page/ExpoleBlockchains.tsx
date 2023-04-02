import {FC} from "react";
import Card from "@/components/Card";
import Image from 'next/image'
import ethImg from '@/public/eth.svg'
import ArrowMiniIcon from "@/icons/ArrowMiniIcon";


const data = {
    url: ethImg,
    title: 'Ethereum',
    course: '$ 1,679.96',
    change: '1%'
}

const ExpoleBlockchains: FC = () => {


    return (
        <>
            <h2 className="text-center">Expole Blockchains</h2>
            <div className="mt-36 grid grid-cols-3 gap-x-5 gap-y-5">
                {
                    [... new Array(9)].map(item =>
                        <Card>
                            <div className="flex gap-x-5">
                                <Image
                                    src={data.url}
                                    alt={data.title}
                                    width={44}
                                    height={44}
                                />
                                <div >
                                    <h3>{data.title}</h3>
                                    <div className="flex items-center gap-x-10 text-sm">
                                        <p className="">{data.course}</p>
                                        <div className="flex items-center gap-x-1.5">
                                            <div className={data.change.startsWith('-') ? '' : 'rotate-180'}>
                                                <ArrowMiniIcon fill={data.change.startsWith('-') ? '#FCA5A5' : '#6EE7B7'} />
                                            </div>
                                            <span className={data.change.startsWith('-') ? 'text-red-300' : 'text-emerald-300'}>{data.change}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                }
            </div>
        </>
    )
}

export default ExpoleBlockchains