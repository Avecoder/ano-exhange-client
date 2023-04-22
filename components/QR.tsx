import QRCode from 'qrcode.react'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import {useState, lazy, Suspense } from 'react'


const EthModel = lazy(() => import('./EthModel'))

interface QRProps {
  showQR: boolean
  setShowQr: (arg: any) => void | any
  valueQR: string
}

const QR: FC<QRProps> = ({showQR, setShowQr, valueQR}) => {


    return (
      <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: showQR ? [0.9, 1.1, 1.0] : [1.0, 1.1, 0],
            opacity: showQR ? [0.8, 1] :[1, 0.8, 0]
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="  z-50  qr-wrap  bg-white rounded-md">
            <div className="w-auto w-80 px-20 pb-10 pt-24 flex flex-col items-center gap-7 relative ">
                <div className="absolute right-4 top-4 z-50">
                  <Button active onClick={() => setShowQr(false)}>close</Button>
                </div>
                <Suspense fallback={<div>Loading...</div>}>

                  <div className="h-80 absolute -top-32">
                    <EthModel rotationY={0.4}/>
                  </div>
                </Suspense>

                <QRCode value={valueQR} size={200} level="M"/>

                <p className="text-xl font-bold">Scan this QR code</p>

            </div>

          </div>

        </motion.div>
      </div>



    )
}

export default QR
