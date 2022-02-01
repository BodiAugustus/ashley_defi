// This file displays products for sale
import BaseLayout from "@components/ui/layout/baseLayout"
import Walletbar from "@components/ui/web3/walletbar"
import { getAllCourses } from "@content/courses/fetcher"
import { useAccount, useNetwork } from "@components/hooks/web3"

import { CourseCard, CourseList } from "@components/ui/course"
import { Button, Modal } from "@components/ui/common"

export default function Marketplace({courses}) {
    const { account } = useAccount() // passes in active user accnt
    const { network} = useNetwork() // passes in active user network
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
                        <Button variant="purple">
                          Purchase
                        </Button>
                      </div>
                      }
                    />
                  }
                </CourseList>
                <Modal isOpen={false}/>
              
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