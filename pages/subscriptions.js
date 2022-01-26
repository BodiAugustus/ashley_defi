
import Navbar from "@components/common/navbar/Navbar"
import Keypoints from "@components/order/keypoints/Keypoints"
import Included from "@components/order/included/Included"
import Modal from "@components/common/modal/Modal"
import Footer from "@components/common/footer/Footer"

export default function Course() {

    return (
        <div>
          <Navbar/>
          <div className="relative max-w-7xl mx-auto px-4">
            <Keypoints/>
            <Included/>\
            <Modal/>
          </div>  
          <Footer/> 
        </div>
    )
  }