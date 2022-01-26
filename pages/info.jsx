import Navbar from "@components/common/navbar/Navbar"
import Footer from "@components/common/footer/Footer"
import Breadcrumbs from "@components/common/breadcrumbs/breadcrumbs"
import Walletbar from "@components/web3/walletbar/Walletbar"
import FtmPrice from "@components/web3/ftmPrice/FtmPrice"
import OrderCard from "@components/order/card/OrderCard"
import SalesCard from "@components/sales/list/SalesCard"

export default function Info() {
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
            <Navbar/>
            <div className="fit">
              <Breadcrumbs/>
              <Walletbar/>
              <FtmPrice/>
              <OrderCard/>
              <SalesCard/> 
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }