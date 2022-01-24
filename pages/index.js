import Head from 'next/head'
import Navbar from '@components/ui/Navbar'
import Hero from '@components/ui/Hero'
import Main from '@components/ui/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Capital & DeFi</title>
      </Head>
      <Navbar/>      
      <Hero/>  
      <Main/>
    </>
  )
}
