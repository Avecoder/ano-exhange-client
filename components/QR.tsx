import QRCode from 'qrcode.react'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import {useState} from 'react'
import EthModel from './EthModel'

const QR: FC = () => {
    const myData = 'https://example.com'

    const [showQRCode, setShowQRCode] = useState(true)

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showQRCode ? 1 : 0, scale: showQRCode ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 qr-wrap  bg-white rounded-md">
          <div className="w-auto w-80 px-20 pb-10 pt-24 flex flex-col items-center gap-7 relative ">
              <div className="absolute right-4 top-4">
                <Button active>close</Button>
              </div>

              <QRCode value={myData} size={200} level="M"/>

              <p className="text-xl font-bold">Scan this QR code</p>

          </div>
          <EthModel />
        </div>

      </motion.div>



    )
}

export default QR
