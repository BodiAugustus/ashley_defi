import BaseLayout from "@components/ui/layout/baseLayout"
import Head from "next/head"
import { getAllCourses } from "@content/courses/fetcher"
import { CourseHero, Curriculum, KeyPoints } from "@components/ui/course"
import { Message, Modal } from "@components/ui/common"
import { useAccount, useOwnedCourse } from "@components/hooks/web3"



export default function Course({course}) {

  const { account } = useAccount()
  const { ownedCourse } = useOwnedCourse(course, account.data)
  // console.log(ownedCourse);
  const courseState = ownedCourse?.data?.state
  // const courseState = "deactivated"

  const isLocked = courseState === "purchased" ||
  courseState === "deactivated"

    return (
        <div>
          <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
  
          <div className="relative max-w-7xl mx-auto"> 
            <CourseHero    // Hero for each individual product
              hasOwner={!!ownedCourse.data}
              title={course.title}
              description={course.description}
              image={course.coverImage}
            />
            <KeyPoints
              points={course.wsl}
            />
            { course && 
            <div className="max-w-5xl mx-auto">
            { courseState === "purchased" &&
            <Message type="warning">
              We wish you a Merry Christmas! Open subscribers soon!
              <i className="block font-normal">If you have a donation, put it in the bag!</i>
            </Message>           
            }
            { courseState === "activated" &&
            <Message type="success">
              We wish you a Merry Christmas! Open subscribers soon!
              <i className="block font-normal">If you have a donation, put it in the bag!</i>
            </Message>           
            }
            { courseState === "deactivated" &&
            <Message type="danger">
              We wish you a Merry Christmas! Open subscribers soon!
              <i className="block font-normal">If you have a donation, put it in the bag!</i>
            </Message>           
            }

            </div>          
            }

            <Curriculum locked={isLocked}
              courseState={courseState}

            />

            <Modal/>
          </div>          

        </div>
    )
  }

  Course.Layout = BaseLayout

  export function getStaticPaths(){
    const { data } = getAllCourses()
    return { // Maps over each course. For each course creates an object. That object has a key of object and a value of another object:      { params : {}}. Inside that second object is a key of slug and a value of course.slug      { params: {slug: course.slug}}.
      paths: data.map(course => ({
        params: {
          slug: course.slug
        }
      })),
      fallback: false // Causes any paths not returned by getStaticPaths to result in 404 page
    }
  }

  export function getStaticProps({params}){ // to fetch data
    const { data } = getAllCourses()
    const course = data.filter(course => course.slug === params.slug)[0] // So if what is in the address bar equals what is in the data file at the current position(index 0), then that course is returned to the user as a new page.
    return {
      props: {
        course
      }
    }
  }