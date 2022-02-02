
// we use contract bc through contract we will be calling the functions

import useSWR from "swr"

//courses and account are brought in from hooks/web3/index at useOwnedCourses (...args)
export const handler = (web3, contract) => (courses, account) => {
    // console.log(courses);
    // console.log(account);
    const swrRes = useSWR(() => 
    //must have all 3 true to call the function otherwise null
        (web3 && contract && account) ? "web3/ownedCourses" : null,
        async () => {
            const ownedCourses = []
            //this iterates over ALL courses, not owned courses
            for ( let i = 0; i < courses.length; i++){
                const course = courses[i]
                ownedCourses.push(course.id)
            }
            return ownedCourses
        }
    )

    return swrRes

}