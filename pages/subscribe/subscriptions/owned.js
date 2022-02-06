import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { Button, Message } from "@components/ui/common"
import { useAccount, useOwnedCourses } from "@components/hooks/web3"
import { getAllCourses } from "@content/courses/fetcher"
import Head from "next/head"
import { useRouter } from "next/router"
import Link from "next/link"
import { useWeb3 } from "@components/providers"



const OwnedCourses = ({courses}) => {
  const router = useRouter()
  const { requireInstall } = useWeb3()
        const { account } = useAccount()
    const { ownedCourses } = useOwnedCourses(courses, account.data)
    return(
        <>
            <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
            {/* {JSON.stringify( ownedCourses?.data)} */}
            <div className="fit bg-black">
                <MarketHeader/>
            </div>
            <section className="grid grid-cols-1 bg-black ">
            { ownedCourses.isEmpty &&
            <div className="w-1/2 mx-auto bg-black min-h-[30vh] mt-20">
              <Message type="warning">
               <div className=""> You don&apos;t own any courses!</div>
               <Link href="/subscribe">
                 <a className="font-normal hover:underline">
                   <i>Purchase course</i>
                 </a>
               </Link>
              </Message>
            </div>
            
            }
            { account.isEmpty &&
            <div className="w-1/2 mx-auto">
              <Message type="warning">
               <div className="">Please connect to MetaMask!</div>

              </Message>
            </div>
            
            }
            { requireInstall &&
            <div className="w-1/2 mx-auto">
              <Message type="warning">
               <div className="">Please install MetaMask!</div>

              </Message>
            </div>
            
            }
            { ownedCourses.data?.map(course => 
            <OwnedCourseCard
            key={course.id}
            course={course}
            >
                {/* <Message type="success"> 
                    My custom message!
                </Message> */}

                <Button onClick={() => router.push(`/subscriptions/${course.slug}`)}>
                    Watch the course
                </Button>
            </OwnedCourseCard>
            )}

            </section>
        </>
    )
}

export function getStaticProps(){ // to fetch data 
    const { data } = getAllCourses() // Gets the products data from the JSON file
    return {
      props: {
        courses: data // data from JSON
      }
    }
  }

OwnedCourses.Layout = BaseLayout

export default OwnedCourses