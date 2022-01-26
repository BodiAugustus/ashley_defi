import Head from 'next/head'
import BaseLayout from '@components/ui/layout/baseLayout/BaseLayout'
import Hero from '@components/ui/common/hero/Hero'
import Main from '@components/ui/Main'
import Info from '@components/ui/Info'
import Example from '@components/ui/Example'
import Features from '@components/ui/Features'
import Benefits from '@components/ui/Benefits'
import Subscribe from '@components/ui/Subscribe'
import Call2Action from '@components/ui/Call2Action'



export default function Home() {
  return (
    <div>
      <Head>
      <title>Ashley Capital & DeFi</title>
      </Head>
      <BaseLayout>      
      <Hero/>  
      <div className='lg:grid lg:grid-cols-2'>
        <Main/>
        <Info/>
      </div>     
      <Example/>
      <Features/>
      <div className="lg:grid lg:grid-cols-2">
        <Benefits/>
        <Subscribe/>
      </div>
      <Call2Action/>
      </BaseLayout>
    </div>
    
  )
}
