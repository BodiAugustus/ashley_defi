import { CourseFilter, ManagedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import Head from "next/head"

import { Button, Message } from "@components/ui/common"
import {  useAdmin, useManagedCourses } from "@components/hooks/web3"
import { useEffect, useState } from "react"
import { useWeb3 } from "@components/providers"
import normalizeOwnedCourse from "utils/normalize"


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

  //searchedCourse stores the course when a search is done in admin
  const [searchedCourse, setSearchedCourse] = useState(null)
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

  const changeCourseState = async (courseHash, method) => {
    try {
      //[method] = "activateCourse" or "deactivateCourse"
      await contract.methods[method](courseHash).send({
        from: account.data
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  const activateCourse = async (courseHash) => {
    changeCourseState(courseHash, "activateCourse")
  }

  const deactivateCourse = async (courseHash) => {
    changeCourseState(courseHash, "deactivateCourse")
  }

  useEffect(() => {
    console.log(searchCourse);
  },[searchCourse])

  const searchCourse = async (hash) => {

    //regex checks for hex
    const re = /[0-9A-Fa-f]{6}/g;

    //test for hex and hex length 66 0x + 32 bytes(64)
    if(hash && hash.length === 66 && re.test(hash)) {
      const course = await contract.methods.getCourseByHash(hash).call()
      if(course.owner !== "0x0000000000000000000000000000000000000000"){
        const normalized = normalizeOwnedCourse(web3)({hash}, course)
        setSearchedCourse(normalized)
        return
      }        
    } 
    //if check does not pass then null is set
    setSearchedCourse(null)
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
                <CourseFilter
                  onSearchSubmit={searchCourse}
                />
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
                onClick={() => deactivateCourse(course.hash)}
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