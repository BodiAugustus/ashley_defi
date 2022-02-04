import { CourseFilter, ManagedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import Head from "next/head"

import { Button, Message } from "@components/ui/common"
import {  useAdmin, useManagedCourses } from "@components/hooks/web3"
import { useState } from "react"
import { useWeb3 } from "@components/providers"


const VerificationInput = ({onVerify}) => {
  const [email, setEmail] = useState("")
  return(
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
    onClick={() => {
      onVerify(email)
    }}>
      Verify
    </Button>
  </div>
  )
}

const ManagedCourses = () => {
  const [ proofedOwnership, setProofedOwnership] = useState({})
  const { web3, contract } = useWeb3()

  const { account } = useAdmin({redirectTo: "/marketplace"})
  const { managedCourses } = useManagedCourses(account)
  // console.log(managedCourses.data);
  const verifyCourse = (email, {hash, proof}) => {
    // console.log(email, hash, proof);
    const emailHash = web3.utils.sha3(email)

    //email and course hash should equal up to the proof.
    const proofToCheck = web3.utils.soliditySha3(
      { type: "bytes32", value: emailHash},
      { type: "bytes32", value: hash},
    )

    // ...proofedOwnership saves the previous state which keeps the verify status bars open until they are exited by the admin
    proofToCheck === proof ? 
    setProofedOwnership({
      ...proofedOwnership,
      [hash]: true
    }) :
    setProofedOwnership({
      ...proofedOwnership,
      [hash]: false
    }) 
  }

  const activateCourse = async (courseHash) => {
    try {
      await contract.methods.activateCourse(courseHash).send({
        //account data is admin account
        from: account.data
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  if (!account.isAdmin){
    return null
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
              <VerificationInput
              onVerify={(email) => {
                verifyCourse(email, 
                {hash: course.hash, proof: course.proof})
              }}

              />
              { proofedOwnership[course.hash] &&
              <div className="mt-2">
                <Message>
                  Verified!
                </Message>
              </div>
              }
              { proofedOwnership[course.hash] === false &&
              <div className="mt-2">
                <Message type="danger">
                  Wrong Proof!
                </Message>
              </div>
              }
              { 
                course.state === "purchased" &&
              <div>
                <Button 
                onClick={() => activateCourse(course.hash)}
                className="mt-3 mr-2"
                variant="green"
                >
                  Activate
                </Button>
                <Button 
                className="mt-3"
                variant="red"
                >
                Deactivate
                </Button>
              </div>
              }
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