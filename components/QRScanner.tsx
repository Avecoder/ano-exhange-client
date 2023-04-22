import { useState } from 'react'
import QrReader from 'react-qr-reader'


const QRScanner = () => {
  const [qrValue, setQrValue] = useState('');

  const handleScan = (data) => {
    if (data) {
      setQrValue(data);
    }
  }

  const handleError = (error) => {
    console.error(error);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{qrValue}</p>
    </div>
  )
}


export default QRScanner
