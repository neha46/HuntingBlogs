import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script';
import Navbar from './components/Navbar';
import Layout from './layout/Layout';



export default function Home() {
  return (
    <>
    <Head>
      <title>
        hundting coder
      </title> 
    </Head>


<Layout>
    {/* <div>
    <Navbar/>
    </div> */}
    {/* <Script src='./scr.js'strategy="lazyOnload" ></Script> */}


     <div className=' p-8 m-4'>
        <h2 className='p-4 text-center'>welcome here</h2>
        <p>L'Oréal S.A. is a French personal care company headquartered in Clichy, Hauts-de-Seine, with a  registered office in Paris. It is the world's largest cosmetics company </p>
        {/* <About/>y */}
    </div>


<div className='p-4 flex'>    
  <div className='w-6/12 p-4'>
      <h3 className='p-4'>all bog items</h3>
      <p className='p-4 '>L'Oréal S.A. is a French personal care company headquartered in Clichy, Hauts-de-Seine, with a registered office in Paris. It is the world's largest cosmetics company and has developed activities in the field.</p>
    </div>
    <div className='w-6/12 p-4'>
      <h3 className='p-4'>all bog items</h3>
      <p className='p-4 '>L'Oréal S.A. is a French personal care company headquartered in Clichy, Hauts-de-Seine, with a registered office in Paris. It is the world's largest cosmetics company and has developed activities in the field.</p>
    </div>
    <div className='w-6/12 p-4'>
      <h3 className='p-4'>all bog items</h3>
      <p className='p-4 '>L'Oréal S.A. is a French personal care company headquartered in Clichy, Hauts-de-Seine, with a registered office in Paris. It is the world's largest cosmetics company and has developed activities in the field.</p>
    </div>
    </div>

  </Layout>
  </>
  )
}
