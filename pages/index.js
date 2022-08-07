import Head from 'next/head';
import BaseLayout from '@components/ui/layout/baseLayout';
import Hero from '@components/ui/common/hero';
import Main from '@components/ui/Main';
import Info from '@components/ui/Info';
import Example from '@components/ui/Example';
import Features from '@components/ui/Features';
import Benefits from '@components/ui/Benefits';
import Subscribe from '@components/ui/Subscribe';
import Call2Action from '@components/ui/Call2Action';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ashley Capital & DeFi</title>
      </Head>
      {/* <BaseLayout>       */}
      <Hero className="" />
      <div
        className="lg:grid lg:grid-cols-2 
      xl:h-[100vh] "
      >
        <Main />
        <Info />
      </div>
      <Example />
      <Features />
      <div className="lg:grid lg:grid-cols-2">
        <Benefits />
        <Subscribe />
      </div>
      <Call2Action />
      {/* </BaseLayout> */}
    </div>
  );
}

Home.Layout = BaseLayout;
