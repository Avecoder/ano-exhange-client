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

export default function Home({exchangers}: {exchangers: any}) {

  const [currentMode, seCurrentMode] = useState('transaction')




  return (
    <>

      <CustomHead title="Home" description="This is home page anoExchange"/>

      <main className="flex flex-col items-center grid grid-cols-12">
          <MainSection currentMode={currentMode} setCurrentMode={seCurrentMode}/>
          {
              currentMode === 'transaction'
              ?
              <>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="col-start-3 col-end-11 mt-36 flex gap-x-5"
                  >
                      <SearchAddress />
                  </motion.div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="col-start-3 col-end-11 mt-48"
                  >
                      <ExpoleBlockchains />
                  </motion.div>
              </>

              :
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="col-start-3 col-end-11 mt-48"
              >
                  {/* <Exchangers exchangers={exchangers}/> */}
              </motion.div>
          }


      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async ctx => {
    const currency = ctx.query.currency

    // const res = await axios.get(`http://localhost:7000/exchangers?currency=${currency}&limit=30`)

    let exchangers: any = []

    // if(res.status !== 500) {
    //     exchangers = res.data
    // }

    return {
      props: {
        exchangers
      },
    }
  }
