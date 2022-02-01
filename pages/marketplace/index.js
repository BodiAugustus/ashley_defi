// This file displays products for sale
import BaseLayout from "@components/ui/layout/baseLayout"
import Walletbar from "@components/ui/web3/walletbar"
import { getAllCourses } from "@content/courses/fetcher"
import { useAccount, useNetwork } from "@components/hooks/web3"

import { CourseCard, CourseList } from "@components/ui/course"
import { Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import { useState } from "react"

export default function Marketplace({courses}) {
    const { account } = useAccount() // passes in active user accnt
    const { network} = useNetwork() // passes in active user network
    const [selectedCourse, setSelectedCourse] = useState(null)
    console.log(network.data);

    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto ">      
              <div className="fit">
                <Walletbar  // props passed to Walletbar
                address={account.data}
                network={{
                  data: network.data,
                  target: network.target,
                  isSupported: network.isSupported,
                  hasInitialResponse: network.hasInitialResponse
                }}
                
                />
                {/* "Current" {`${network.data}`}
                "Target" {`${network.target}`}
                "Is Supported" {`${network.isSupported}`}  THESE ARE TESTING VALUES to make sure the UI message is displayed properly - change between networks and check UI message  */} 
      
                <CourseList courses={courses}>
                  {
                    (course) => <CourseCard 
                    key={course.id} 
                    course={course}
                    Footer={() => 
                      <div className="mt-4">
                        <Button 
                        variant="purple"
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
                <OrderModal course={selectedCourse}
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