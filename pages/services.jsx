import Breadcrumbs from "@components/common/breadcrumbs/breadcrumbs"
import Walletbar from "@components/web3/walletbar/Walletbar"
import FtmPrice from "@components/web3/ftmPrice/FtmPrice"
import OrderCard from "@components/order/card/OrderCard"
import SalesCard from "@components/sales/list/SalesCard"
import BaseLayout from "@components/layout/baseLayout/BaseLayout"
import Banner from "@components/order/banner/Banner"

export default function Info() {
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
            <BaseLayout>
            <div className="fit">
              <Banner/>
              <Breadcrumbs/>
              <Walletbar/>
              <FtmPrice/>
              <OrderCard/>
              <SalesCard/> 
            </div>
          </BaseLayout>
          </div>
        </div>
      </div>
    )
  }