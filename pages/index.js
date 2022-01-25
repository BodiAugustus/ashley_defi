import Head from 'next/head'
import Navbar from '@components/ui/Navbar'
import Hero from '@components/ui/Hero'
import Main from '@components/ui/Main'
import Info from '@components/ui/Info'
import Example from '@components/ui/Example'

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
    </>
  )
}
