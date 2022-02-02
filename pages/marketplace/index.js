// This file displays products for sale
import BaseLayout from "@components/ui/layout/baseLayout"
import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3"
import { CourseCard, CourseList } from "@components/ui/course"
import { Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace"
import { useWeb3 } from "@components/providers"

export default function Marketplace({courses}) {
    //  const { account, network, canPurchaseCourse} = useWalletInfo() // passes in active user network and account
    const {canPurchaseCourse, account} = useWalletInfo()
    const [selectedCourse, setSelectedCourse] = useState(null)

    const { web3 } = useWeb3()
    

    const purchaseCourse = (order) => { //passes order into Modal component
      const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id) //gets selected course id in hex format
      // console.log(hexCourseId);
      const orderHash = web3.utils.soliditySha3(
        {type: "bytes16", value: hexCourseId},
        {type: "address", value: account.data}

      )
        // console.log(orderHash);
        //hashes email
        const emailHash = web3.utils.sha3(order.email)
        
        // console.log(emailHash);
        
        // emailHash + courseHash = proof
      const proof = web3.utils.soliditySha3(
        { type: "bytes32", value: emailHash},
        { type: "bytes32", value: orderHash},
      )
      // console.log(proof);
    }
 
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit pb-4">
               <MarketHeader/>               
                {/* "Current" {`${network.data}`}
                "Target" {`${network.target}`}
                "Is Supported" {`${network.isSupported}`}  THESE ARE TESTING VALUES to make sure the UI message is displayed properly - change between networks and check UI message  */}      
                <CourseList courses={courses}>
                  {
                    (course) => <CourseCard 
                    key={course.id} 
                    disabled={!canPurchaseCourse}
                    course={course}
                    Footer={() => 
                      <div className="mt-4">
                        <Button 
                        variant="purple"
                        disabled={!canPurchaseCourse}
                        onClick={() => setSelectedCourse(course)}                       
                        > {/*Click the button will select a course to purchase so we need to keep a state for it - selectedCourse */}
                          Purchase
                        </Button>
                      </div>
                      }
                    />
                  }
                </CourseList>
                {
                  selectedCourse &&
                <OrderModal 

                  course={selectedCourse}
                  onSubmit={purchaseCourse}
                  onClose={() => setSelectedCourse(null)}
                /> 
                }{/*This gets the selected course from the button click passed as a prop to ordermodal so the modal opens for the correct course. onClose was added to pass the null value to OrderModal so that the value is reset to null on modal close in order to allow useEffect to fire even when the same purchase button is clicked twice */}             
              </div>       
          </div>
        </div>
      </div>
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

Marketplace.Layout = BaseLayout