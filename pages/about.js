import BaseLayout from "@components/layout/baseLayout/BaseLayout"
import Keypoints from "@components/order/keypoints/Keypoints"
import Included from "@components/order/included/Included"
import Modal from "@components/common/modal/Modal"
import Banner from "@components/order/banner/Banner"


export default function Course() {

    return (
        <div>
          <BaseLayout>
          <div className="relative max-w-7xl mx-auto px-4">
            <Banner/>
            <Keypoints/>
            <Included/>\
            <Modal/>
          </div>          
          </BaseLayout>
        </div>
    )
  }