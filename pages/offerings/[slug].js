import BaseLayout from "@components/layout/baseLayout/BaseLayout"
import Keypoints from "@components/order/keypoints/Keypoints"
import Included from "@components/order/included/Included"
import Modal from "@components/common/modal/Modal"
import Head from "next/head"
import { getAllCourses } from "@content/subscriptions/fetcher"
import Banner from "@components/order/banner/Banner"
import HeroBanner from "@components/order/heroBanner/HeroBanner"

export default function Course({course}) {

    return (
        <div>
          <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
          <BaseLayout>
          <div className="relative max-w-7xl mx-auto">
            <HeroBanner
              title={course.title}
              description={course.description}
              image={course.coverImage}
            />
            <Keypoints/>
            <Included/>\
            <Modal/>
          </div>          
          </BaseLayout>
        </div>
    )
  }

  export function getStaticPaths(){
    const { data } = getAllCourses()
    return { // Returns array of objects with key params and value as a slug object.
      paths: data.map(course => ({
        params: {
          slug: course.slug
        }
      })),
      fallback: false
    }
  }

  export function getStaticProps({params}){ // to fetch data
    const { data } = getAllCourses()
    const course = data.filter(course => course.slug === params.slug)[0]
    return {
      props: {
        course
      }
    }
  }