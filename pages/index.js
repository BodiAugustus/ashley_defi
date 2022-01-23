import Head from 'next/head'
import Navbar from '@components/ui/Navbar'


export default function Home() {
  return (
    <>
      <Navbar/>

      <h1 className="text-3xl font-bold underline">
       Hello world!
      </h1>
    </>
  )
}
