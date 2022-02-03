
// we use contract bc through contract we will be calling the functions

import useSWR from "swr"
import normalizeOwnedCourse from "utils/normalize"


export const handler = (web3, contract) => (course, account) => {

    const swrRes = useSWR(() => 
        (web3 && contract && account) ? `web3/ownedCourse/${account}` : null,
        async () => {

                //This is courseId changed to hex format
                const hexCourseId = web3.utils.utf8ToHex(course.id)

                //This is made from the courseId and the account information
                const courseHash = web3.utils.soliditySha3(
                    { type: "bytes16", value: hexCourseId },
                    { type: "address", value: account }
                )

                //Get our contract and call the function
                const ownedCourse = await contract.methods.getCourseByHash(courseHash).call()

                if (ownedCourse.owner === "0x0000000000000000000000000000000000000000"){
                    return null
                    
                }        

        
            return normalizeOwnedCourse(web3)(course, ownedCourse)
        }
    )

    return swrRes

}