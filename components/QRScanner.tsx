import { useState, lazy, Suspense, FC } from 'react'
import {QrReader} from 'react-qr-reader'
import Button from '@/components/Button'
import {motion} from "framer-motion"
const EthModel = lazy(() => import('./EthModel'))

interface QRScannerProps {
  setAddress: (arg: string) => void | any
  setScannedQR: (arg: boolean) => void | any
  setShowScanner: (arg: boolean) => void | any
  showScanner: boolean
}

const QRScanner: FC<QRScannerProps> = ({setAddress, setScannedQR, showScanner, setShowScanner}) => {

  const handleScan = (data) => {
    console.log(data)
  }

  const handleError = (error) => {
    console.error(error);
  }

  const handleResult = (result) => {
    if(result) {
      setAddress(result?.text?.split(':')[1]?.split('@')[0])
      setScannedQR(true)
    }
  }

  return (
    <div className="fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: showScanner ? [0.9, 1.1, 1.0] : [1.0, 1.1, 0],
          opacity: showScanner ? [0.8, 1] :[1, 0.8, 0]
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-white p-6 pt-24 qr-wrap rounded-md relative">
          <Suspense>

            <div className="h-80 absolute -top-32 left-1/2 transform -translate-x-1/2">
              <EthModel rotationY={0.4}/>
            </div>
          </Suspense>

          <div className="absolute right-6 top-4 z-50">
            <Button active onClick={() => setShowScanner(false)}>close</ Button>
          </div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            onResult={handleResult}
            videoStyle={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
          />
        </div>
      </ motion.div>
    </div>
  )
}


export default QRScanner
