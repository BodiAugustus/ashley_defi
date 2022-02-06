
import { CourseCard, CourseList } from "@components/ui/course"
import BaseLayout from "@components/ui/layout/baseLayout"
import Banner from "@components/ui/order/banner/Banner"
import { getAllCourses } from "@content/courses/fetcher"








export default function Info({courses}) {


    return (
      <div>
        <div className="relative bg-black overflow-hidden text-white">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit">
                <Banner/>

  
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