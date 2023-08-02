
import { Inter } from 'next/font/google'
import RootLayout from '../RootLayout'
import Blog from './Blog'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>
    <RootLayout>
     <div className=' p-8 m-4'>
        <h2 className='p-4 text-center text-'>welcome here Anisha</h2>
        <p>Oréal S.A. is a French personal care company headquartered in Clichy,.. Hauts-de-Seine, with a  registered office in Paris. It is the worlds largest cosmetics company </p>
        {/* <About/>y */}
    </div>

    <Blog/>
  </RootLayout>
  </>
  )
}

