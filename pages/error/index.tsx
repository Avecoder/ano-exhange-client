import { GetServerSideProps } from 'next'
import MainSection from "@/components/main-page/MainSection";
import SearchAddress from "@/components/main-page/SearchAddress";
import Exchangers from "@/components/main-page/Exchangers";
import {ExchangersProps} from "@/components/main-page/Exchangers";
import CustomHead from "@/components/CustomHead";
import ExpoleBlockchains from "@/components/main-page/ExpoleBlockchains";
import {useState} from "react";
import {motion} from "framer-motion";
import axios from 'axios'


export default function Error({exchangers}: {exchangers: any}) {

  const [currentMode, seCurrentMode] = useState('transaction')




  return (
    <>

      <CustomHead title="Error 404" description="Not found address"/>
      <main className="flex flex-col items-center grid grid-cols-12">

        <h1>Page not found</h1>

      </main>
    </>
  )
}
