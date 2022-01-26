
import SalesCard from "@components/sales/list/SalesCard"
import BaseLayout from "@components/layout/baseLayout/BaseLayout"
import Banner from "@components/order/banner/Banner"
import { getAllCourses } from "@content/subscriptions/fetcher"

export default function Info({courses}) {
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
            <BaseLayout>
            <div className="fit">
              <Banner/>
              <SalesCard courses={courses}/> 
            </div>
          </BaseLayout>
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