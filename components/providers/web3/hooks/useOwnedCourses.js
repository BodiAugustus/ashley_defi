
// we use contract bc through contract we will be calling the functions

import useSWR from "swr"
import normalizeOwnedCourse from "utils/normalize"

//courses and account are brought in from hooks/web3/index at useOwnedCourses (...args)
export const handler = (web3, contract) => (courses, account) => {
    // console.log(courses);
    // console.log(account);

    const swrRes = useSWR(() => 

    //must have all 3 true to call the function otherwise null.
    // the identifier being unique allows auto updates to my courses whenever meta account changed
        (web3 && contract && account) ? `web3/ownedCourses/${account}` : null,
        async () => {
            const ownedCourses = []

            //this iterates over ALL courses, not owned courses
            for ( let i = 0; i < courses.length; i++){
                const course = courses[i]

                // If no courseid exist loop will break iteration and continue with next
                if (!course.id){ continue }
                
                //This is courseId changed to hex format
                const hexCourseId = web3.utils.utf8ToHex(course.id)

                //This is made from the courseId and the account information
                const courseHash = web3.utils.soliditySha3(
                    { type: "bytes16", value: hexCourseId },
                    { type: "address", value: account }
                )

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

    return swrRes

}