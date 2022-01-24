import Head from 'next/head'
import Navbar from '@components/ui/Navbar'
import Hero from '@components/ui/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Capital & DeFi</title>
      </Head>
      <Navbar/>      
      <Hero/>  
    </>
  )
}
