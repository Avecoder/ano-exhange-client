
import MainSection from "@/components/main-page/MainSection";
import SearchAddress from "@/components/main-page/SearchAddress";
import Exchangers from "@/components/main-page/Exchangers";
import CustomHead from "@/components/CustomHead";
import ExpoleBlockchains from "@/components/main-page/ExpoleBlockchains";
import {useState} from "react";
import {motion} from "framer-motion";


export default function Home() {

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
                  <Exchangers />
              </motion.div>
          }


      </main>
    </>
  )
}
