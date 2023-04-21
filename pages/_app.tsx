import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
      <>

          <div className="mx-auto max-w-screen-xl mt-12 mb-12">
              <Header />
              <div className="gradient"></div>
              <Component {...pageProps} />
              <Footer/>
          </div>
      </>
  )
}
