import BaseLayout from "@components/layout/baseLayout/BaseLayout"
import Keypoints from "@components/order/keypoints/Keypoints"
import Included from "@components/order/included/Included"
import Modal from "@components/common/modal/Modal"
import Banner from "@components/order/banner/Banner"
import Head from "next/head"


export default function Course() {

    return (
        <div>
          <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
          <BaseLayout>
          <div className="relative max-w-7xl mx-auto">
            <Banner/>
            <Keypoints/>
            <Included/>\
            <Modal/>
          </div>          
          </BaseLayout>
        </div>
    )
  }