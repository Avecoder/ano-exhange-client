import {FC} from "react";
import Button from "@/components/Button";
import ExchangeIcon from "@/icons/ExchangeIcon";


interface MainSectionType {
    currentMode: string,
    setCurrentMode: (any) => any
}

const MainSection: FC<MainSectionType> = ({currentMode, setCurrentMode}) => {


    return (
        <div className="col-start-3 col-end-11 flex flex-col items-center">
            <h1 className="col-end-11 mb-10 px-5 text-center leading-tight">Track crypto transactions, find exchanges.</h1>
            <p className="col-end-11 mb-16 text-center text-3xl">Our web app tracks your crypto transactions and helps you find the best exchanges.</p>
            <div className="flex gap-x-5 items-center">
                <Button
                    active={currentMode === 'transaction'}
                    onClick={() => setCurrentMode('transaction')}
                >Show transaction</Button>
                <span>or</span>
                <Button
                    active={currentMode === 'exchange'}
                    onClick={() => setCurrentMode('exchange')}
                >
                    <ExchangeIcon fill={currentMode === 'exchange' ? 'white' : '#4B5563'} size="17" />
                    <span>Best exchange</span>
                </Button>
            </div>
        </div>
    )
}

export default MainSection