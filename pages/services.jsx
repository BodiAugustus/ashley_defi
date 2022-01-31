
import { CourseCard, CourseList } from "@components/ui/course"
import BaseLayout from "@components/ui/layout/baseLayout"
import Banner from "@components/ui/order/banner/Banner"
import { getAllCourses } from "@content/courses/fetcher"








export default function Info({courses}) {


    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit">
                <Banner/>
                <CourseList courses={courses}>
                  {
                    (course) => <CourseCard key={course.id} course={course}/>
                  }
                </CourseList>
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