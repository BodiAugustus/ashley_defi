import Head from 'next/head'
import Navbar from '@components/ui/Navbar'
import Hero from '@components/ui/Hero'
import Main from '@components/ui/Main'
import Info from '@components/ui/Info'
import Example from '@components/ui/Example'
import Features from '@components/ui/Features'
import Benefits from '@components/ui/Benefits'
import Subscribe from '@components/ui/Subscribe'
import Call2Action from '@components/ui/Call2Action'
import Footer from '@components/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Capital & DeFi</title>
      </Head>
      <Navbar/>      
      <Hero/>  
      <Main/>
      <Info/>
      <Example/>
      <Features/>
      <Benefits/>
      <Subscribe/>
      <Call2Action/>
      <Footer/>
    </>
  )
}
