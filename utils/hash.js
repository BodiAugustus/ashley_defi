
// 1st () is the dependncies and the 2nd () is the data
export const createCourseHash = (web3) => (courseId, account) => {
    //This is courseId changed to hex format
    const hexCourseId = web3.utils.utf8ToHex(courseId)

    //This is made from the courseId and the account information
    const courseHash = web3.utils.soliditySha3(
        { type: "bytes16", value: hexCourseId },
        { type: "address", value: account }
    )

    return courseHash
}