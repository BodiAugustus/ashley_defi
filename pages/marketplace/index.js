// This file displays products for sale
import BaseLayout from "@components/ui/layout/baseLayout"
import { getAllCourses } from "@content/courses/fetcher"
import { useWalletInfo } from "@components/hooks/web3"
import { CourseCard, CourseList } from "@components/ui/course"
import { Button, Loader, Message } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"
import { MarketHeader } from "@components/ui/marketplace"
import { useWeb3 } from "@components/providers"
import { useOwnedCourses } from "@components/hooks/web3"

export default function Marketplace({courses}) {
    //  const { account, network, hasConnectedWallet} = useWalletInfo() // passes in active user network and account
    const {hasConnectedWallet, account, isConnecting} = useWalletInfo()

    //ownedCourses is used to disable purchased courses in ui from user
    const { ownedCourses } = useOwnedCourses(courses, account.data)
    const [selectedCourse, setSelectedCourse] = useState(null)

    const { web3, contract, requireInstall } = useWeb3()
    
    // Calling this causes metamask to open in the browser
    const purchaseCourse = async (order) => { //passes order into Modal component
      const hexCourseId = web3.utils.utf8ToHex(selectedCourse.id) //gets selected course id in hex format
      // console.log(hexCourseId);
      const orderHash = web3.utils.soliditySha3(
        {type: "bytes16", value: hexCourseId},
        {type: "address", value: account.data}

      )
        // console.log(orderHash);
        // this hashes the email
        const emailHash = web3.utils.sha3(order.email)
        
        // console.log(emailHash);
        
        // emailHash + courseHash = proof
      const proof = web3.utils.soliditySha3(
        { type: "bytes32", value: emailHash},
        { type: "bytes32", value: orderHash},
      )
      // console.log(proof);
      
      const value = web3.utils.toWei(String(order.price))

      try {
        const result = await contract.methods.purchaseCourse(
          hexCourseId,
          proof
        ).send({from: account.data, value})
        console.log(result);
      } catch (error) {
        console.error("Purchase course: Operation has failed!");
      }
    }
    //gets us owned courses


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
                    (course) => {
                      const owned = ownedCourses.lookup[course.id]
                      return(                   
                        <CourseCard 
                        key={course.id} 
                        state={owned?.state}
                        disabled={!hasConnectedWallet}
                        course={course}
                        Footer={() => {
                        if (requireInstall){
                          return(
                            <div className="mt-4">
                            <Button 
                            variant="purple"
                            disabled={true}                    
                            > 
                              Install MetaMask
                            </Button>
                          </div>
                          )
                        }
                        if(isConnecting){
                          return(
                            <div className="mt-4">
                            <Button 
                            variant="purple"
                            disabled={true}                     
                            > 
                            <Loader size="sm"/>
                            </Button>
                          </div>
                          )
                        }
                        if(!ownedCourses.hasInitialResponse){
                          return(
                            <div style={{height: "50px"}}></div>
                          //   <div className="mt-4">
                          //   <Button 
                          //   variant="purple"
                          //   disabled={true}                     
                          //   > 
                          //    Loading State
                          //   </Button>
                          // </div>
                          )
                        }
                        //this shows the lookup table
                        // console.log(ownedCourses.lookup)
                        //[] is used bc we are searching in an object
                        

                        if (owned) {
                          return(
                            <>
                            <div className="mt-4">
                              <Button 
                              variant="green"
                              disabled={true}                     
                              > 
                              Owned
                              </Button>
                              { 
                                owned.state === "deactivated" &&
                                <Button 
                              variant="purple"
                              disabled={true} 
                              onClick={() => alert("reactivating")}                    
                              > 
                              Repurchase
                              </Button>
                              }
        
                            </div>
                          </>
                          )
                        }
                        return(
                          <div className="mt-4">
                            <Button 
                            variant="purple"
                            disabled={!hasConnectedWallet}
                            onClick={() => setSelectedCourse(course)}                       
                            > {/*Click the button will select a course to purchase so we need to keep a state for it - selectedCourse */}
                              Purchase
                            </Button>
                          </div>
                        )
                      }
          
                        }
                      />
                      )}
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