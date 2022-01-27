
import SalesCard from "@components/ui/sales/list/SalesCard"
import BaseLayout from "@components/ui/layout/baseLayout/BaseLayout"
import Banner from "@components/ui/order/banner/Banner"
import { getAllCourses } from "@content/subscriptions/fetcher"


import { useWeb3 } from "@components/providers/web3"

export default function Info({courses}) {
const {test} = useWeb3()

    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit">
                <Banner/>
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

Info.Layout = BaseLayout