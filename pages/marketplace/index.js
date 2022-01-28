
import SalesCard from "@components/ui/sales/list/SalesCard"
import BaseLayout from "@components/ui/layout/baseLayout/BaseLayout"
import Walletbar from "@components/ui/web3/walletbar/Walletbar"
import { getAllCourses } from "@content/subscriptions/fetcher"
import { useAccount } from "@components/hooks/web3/useAccount"
import { useNetwork } from "@components/hooks/web3/useNetwork"




export default function Marketplace({courses}) {
    const { account } = useAccount()
    const { network} = useNetwork()
    console.log(network.data);

    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit">
                <Walletbar 
                address={account.data}
                network={network.data}

                />
                <SalesCard courses={courses}/> 
              </div>       
          </div>
        </div>
      </div>
    )
  }

  export function getStaticProps(){ // to fetch data
    const { data } = getAllCourses()
    return {
      props: {
        courses: data
      }
    }
  }

Marketplace.Layout = BaseLayout