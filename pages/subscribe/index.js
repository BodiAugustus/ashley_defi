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
import { Terms } from "@components/ui/order"
import { withToast } from "@utils/toast"

export default function Marketplace({courses}) {
    //  const { account, network, hasConnectedWallet} = useWalletInfo() // passes in active user network and account
    const {hasConnectedWallet, account, isConnecting} = useWalletInfo()

    //ownedCourses is used to disable purchased courses in ui from user
    const { ownedCourses } = useOwnedCourses(courses, account.data)
    const [selectedCourse, setSelectedCourse] = useState(null)

    //busyCourse if for changing the purchase button message during metamask tx
    const [busyCourseId, setBusyCourseId] = useState(null)

    //isNewPurchase is for setting up the repurchase button functionality
    const [isNewPurchase, setIsNewPurchase] = useState(true)

    const { web3, contract, requireInstall, connect } = useWeb3()
    
    // Calling this causes metamask to open in the browser
    const purchaseCourse = async (order, course) => { //passes order into Modal component
      // console.log(order);
      // console.log(course);
 
      const hexCourseId = web3.utils.utf8ToHex(course.id) //gets selected course id in hex format
      // console.log(hexCourseId);
      const orderHash = web3.utils.soliditySha3(
        {type: "bytes16", value: hexCourseId},
        {type: "address", value: account.data}

      )
    
      
      const value = web3.utils.toWei(String(order.price))

      setBusyCourseId(course.id)

        if(isNewPurchase){
          const emailHash = web3.utils.sha3(order.email)    
          // console.log(emailHash);         
          // emailHash + courseHash = proof
        const proof = web3.utils.soliditySha3(
          { type: "bytes32", value: emailHash},
          { type: "bytes32", value: orderHash},
        )

         withToast( _purchaseCourse({hexCourseId, proof, value}, course))
        }
              //when this resolves it sends the data to toast.js which receives the data and as a result we get the transactionHash which is then displayed
        else {
          withToast(_repurchaseCourse({courseHash: orderHash, value}, course))
        }
    }
    //gets us owned courses

    const _purchaseCourse = async ({hexCourseId, proof, value}, course) => {
      try {
        const result = await contract.methods.purchaseCourse(
          hexCourseId,
          proof
        ).send({from: account.data, value})
        //mutate is being used to refetch data after purchase to update purchase button ui
        
        ownedCourses.mutate([
          ...ownedCourses.data, {
            ...course,
            proof,
            state: "purchased",
            owner: account.data,
            price: value
          }
        ])
        // console.log(result);
        return result
      } catch (error) {
        throw new Error(error.message)  
      }
      finally {
        setBusyCourseId(null)
      }
    }

    const _repurchaseCourse = async ({courseHash, value}, course) => {
      try {
        const result = await contract.methods.repurchaseCourse(
          courseHash
        ).send({from: account.data, value})
        // console.log(result);
        //need t locate course in ownedcourses array and change state from deact to activate.
        const index = ownedCourses.data.findIndex(c => c.id === course.id)
        if(index >= 0){
          ownedCourses.data[index].state = "purchased"
          ownedCourses.mutate(ownedCourses.data)
        }else{

          ownedCourses.mutate()
        }
        return result
      } catch (error) {
        throw new Error(error.message)    
      }
      finally {
        setBusyCourseId(null)
        //after finally we still have to compare course id of what we are buying to course id's to figure which one is being purchased.
      }
    }
 //the resolve sends the transatrion hash into toastjs as a promise which then gets resolved as the data
    // const notify = () => {
    //   const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve({transactionHash: "0x35c762db6d151ab1907089f5ef0c38f827ff85d971589a6fd0adfa7189e691b9"}), 3000));
    //   // const resolveWithSomeData = new Promise((resolve, reject) => setTimeout(() => reject(new Error("some error 2")), 3000))
    //   withToast(resolveWithSomeData)
    // }

    const cleanupModal = () => {
      setSelectedCourse(null)
      setIsNewPurchase(true)
    }

    return (
      <div>
        <div className="relative bg-black overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit pb-4">
              <MarketHeader/>       
              {/* <Button onClick={notify}>
                Nofity     for toast
              </Button>         */}
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
                            disabled={false}    
                            onClick={() => window.open("https://metamask.io/", "_blank")}                
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
                            <Button
                            size="sm"
                            disabled={false}
                            variant="green"
                            className="mt-2"
                            onClick={connect}
                            >
                            {hasConnectedWallet ? "Loading State..." : "Connect MetaMask"}
                            </Button>
                            // <div style={{height: "50px"}}></div>
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
                        
                        // const isBusy = true
                        const isBusy = busyCourseId === course.id
                        if (owned) {
                          return(
                            <>
                            <div className="mt-4 ">
                              <Button 
                              className="mx-4"
                              variant="green"
                              disabled={true}                     
                              > 
                              { owned.state === "deactivated" ? "Inactive" :
                                "Subscribed" }
                              </Button>
                              { 
                                owned.state === "deactivated" &&
                                <Button 
                              variant="purple"
                              disabled={isBusy} 
                              
                              onClick={() => { 
                                setIsNewPurchase(false)
                                setSelectedCourse(course)
                                }}                    
                              > 
                              {isBusy ? 
                              <div className="flex">
                                <Loader
                                  size="sm"
                                />
                                <div className="ml-2 ">Loading...</div>
                              </div> : <div className="font-semibold">Resubscribe</div>
                              }
                              </Button>
                              }
        
                            </div>
                          </>
                          )
                        }
                        return(
                          <div className="mt-4">
                            <Button 
                            variant="green"
                            disabled={!hasConnectedWallet || isBusy}
                            onClick={() => setSelectedCourse(course)}                       
                            > {/*Click the button will select a course to purchase so we need to keep a state for it - selectedCourse */}
                              {isBusy ? 
                              <div className="flex">
                                <Loader
                                  size="sm"
                                />
                                <div className="ml-2">In progress..</div>
                              </div> : <div>Subscribe</div>
                              }
                            </Button>
                          </div>
                        )
                      }
          
                        }
                      />
                      )}
                  }
                </CourseList>
                <Terms/>
                {
                  selectedCourse &&
                <OrderModal 
                  isNewPurchase={isNewPurchase}
                  course={selectedCourse}
                  onSubmit={(formData, course) => {
                    purchaseCourse(formData, course)
                    cleanupModal()
                    }}
                  onClose={cleanupModal}
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