import { CourseFilter, ManagedCourseCard, OwnedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import Head from "next/head"

import { Button } from "@components/ui/common"
import { useAccount, useManagedCourses } from "@components/hooks/web3"
import { useState } from "react"

const ManagedCourses = () => {
  const [email, setEmail] = useState("")
  const { account } = useAccount()
  const { managedCourses } = useManagedCourses(account.data)
  // console.log(managedCourses.data);
  const verifyCourse = (email, hash, proof) => {
    console.log(email, hash, proof);
  }

    return(
        <>
            <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
            <div className="fit pb-4">
                <MarketHeader/>
                <CourseFilter/>
            </div>
            <section className="grid grid-cols-1">
            { managedCourses.data?.map(course => 
              <ManagedCourseCard
              key={course.ownedCourseId}
              course={course}>
              <div className="flex mr-2 relative rounded-md">
                <input
                value={email}
                onChange={({target: {value}}) => setEmail(value)}
                  type="text"
                  name="account"
                  id="account"
                  className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0x2341ab..." />
                <Button
                onClick={() => verifyCourse(email, 
                {hash: course.hash, proof: course.proof})}>
                  Verify
                </Button>
              </div>
              </ManagedCourseCard>
            )}

            {/* <OwnedCourseCard>
          <div className="flex mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
              placeholder="0x2341ab..." />
            <Button>
              Verify
            </Button>
          </div>
        </OwnedCourseCard> */}
            </section>
        </>
    )
}

ManagedCourses.Layout = BaseLayout

export default ManagedCourses