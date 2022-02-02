import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { Button, Message } from "@components/ui/common"
import { useAccount, useOwnedCourses } from "@components/hooks/web3"
import { getAllCourses } from "@content/courses/fetcher"



const OwnedCourses = ({courses}) => {
        const { account } = useAccount()
    const { ownedCourses } = useOwnedCourses(courses, account.data)
    return(
        <>
            {/* {JSON.stringify( ownedCourses?.data)} */}
            <div className="fit pb-4">
                <MarketHeader/>
            </div>
            <section className="grid grid-cols-1">
            { ownedCourses.data?.map(course => 
            <OwnedCourseCard
            key={course.id}
            course={course}
            >
                {/* <Message type="success"> 
                    My custom message!
                </Message> */}

                <Button>
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