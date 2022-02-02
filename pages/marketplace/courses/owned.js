import { OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import { Button, Message } from "@components/ui/common"
import { useOwnedCourses } from "@components/hooks/web3"



const OwnedCourses = () => {

    const { ownedCourses } = useOwnedCourses()
    return(
        <>
            { ownedCourses.data}
            <div className="fit pb-4">
                <MarketHeader/>
            </div>
            <section className="grid grid-cols-1">
            <OwnedCourseCard>
            <Message type="success"> 
                My custom message!
            </Message>

                <Button>
            Watch the course
          </Button>
        </OwnedCourseCard>
            </section>
        </>
    )
}

OwnedCourses.Layout = BaseLayout

export default OwnedCourses