
// we use contract bc through contract we will be calling the functions

import useSWR from "swr"
import { createCourseHash } from "utils/hash"
import normalizeOwnedCourse from "utils/normalize"

//courses and account are brought in from hooks/web3/index at useOwnedCourses (...args)
//networkr was added to change ui state when network changes on buy page - changes button ui and hides messages about the state
export const handler = (web3, contract) => (courses, account) => {
    // console.log(courses);
    // console.log(account);

    const swrRes = useSWR(() => 

    //must have all 3 true to call the function otherwise null.
    // the identifier being unique allows auto updates to my courses whenever meta account changed
        (web3 && contract && account) ? 
        `web3/ownedCourses/${account}` : null,
        async () => {
            const ownedCourses = []

            //this iterates over ALL courses, not owned courses
            for ( let i = 0; i < courses.length; i++){
                const course = courses[i]

                // If no courseid exist loop will break iteration and continue with next
                if (!course.id){ continue }

                //This is made from the courseId and the account information
                const courseHash = createCourseHash(web3)(course.id, account)
                
                //Get our contract and call the function
                const ownedCourse = await contract.methods.getCourseByHash(courseHash).call()

                //if ownedCourse.owner does not equal 0x00... then it means the course is owned and only then do we add it to the ownedCourses array. 
                if (ownedCourse.owner !== "0x0000000000000000000000000000000000000000"){
                    // debugger
                    const normalized = normalizeOwnedCourse(web3)(course, ownedCourse)
                    ownedCourses.push(normalized)
                }
            }
            // debugger

            //returns the array
            return ownedCourses
        }
    )

    return {
        ...swrRes,
        //this creates the lookup table for mapping the purchased courses to the purchase buttons to disable already purchased courses
        lookup:swrRes.data?.reduce((a, c) => {
            a[c.id] = c
            return a
            // ?? {} is added in case the structure will be undefined or null it will use an empty object into the lookup table
        },{}) ?? {}
    }

}