import { CourseFilter, ManagedCourseCard } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { MarketHeader } from "@components/ui/marketplace"
import Head from "next/head"

import { Button, Message } from "@components/ui/common"
import {  useAdmin, useManagedCourses } from "@components/hooks/web3"
import { useEffect, useState } from "react"
import { useWeb3 } from "@components/providers"
import normalizeOwnedCourse from "utils/normalize"
import { withToast } from "@utils/toast"


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

  const [filters, setFilters] = useState({ state: "all"})
  const { web3, contract } = useWeb3()

  const { account } = useAdmin({redirectTo: "/subscribe"})
  const { managedCourses } = useManagedCourses(account)
  // console.log(managedCourses.data);
  const verifyCourse = (email, {hash, proof}) => {
    if (!email){
      return
    }
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
      const result = await contract.methods[method](courseHash).send({
        from: account.data
      })
      return result
    } catch (error) {
      // console.error(error.message)
      throw new Error(error.message)
    }
  }

  const activateCourse = async (courseHash) => {
    withToast(changeCourseState(courseHash, "activateCourse"))
  }

  const deactivateCourse = async (courseHash) => {
    withToast(changeCourseState(courseHash, "deactivateCourse"))
  }


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

  const renderCard = (course, isSearched) => {
    return(
      <ManagedCourseCard
      key={course.ownedCourseId}
      isSearched={isSearched}
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
    )
  }

  if (!account.isAdmin){
    return null
  }


  const filterCourses = managedCourses.data
  ?.filter((course) => {
    if (filters.state === "all") {
      return true
    }
    return course.state === filters.state
  })
  .map(course => 
renderCard(course)        
)



    return(
        <>
            <Head>
            <meta name="viewport"
            content="width=device-width, 
            initial-scale=1"/>
          </Head>
            <div className="fit pb-4 bg-black">
                <MarketHeader/>
                <CourseFilter

                onFilterSelect={(value) => setFilters({state: value}) }
                onSearchSubmit={searchCourse}
                />
            </div>
            <section className="grid grid-cols-1 bg-black text-white">
            {
              searchedCourse &&
              <div>
              <h1 className="text-xl font-bold p-4">Searched Subscription:</h1>
                { renderCard(searchedCourse, true)}
              </div>
            }
            <h1 className="text-xl font-bold p-4">All Subscriptions</h1>
            { 
              //this sets up the search return results for the 3 filter methods in the options bar
             filterCourses
             }
             {filterCourses?.length === 0 && 
             <Message
             type="warning">
              Nothing to display.
             </Message>
             }

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