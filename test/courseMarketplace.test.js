
// Mocha = testing framework
// Chai - assertion Js library

const CourseMarketplace = artifacts.require("CourseMarketplace")

// Creates an encapulated enviornment with the accounts metamask accoounts
contract("CourseMarketplace", accounts => {
    const courseId = "0x00000000000000000000000000003130";
    const proof = "0x0000000000000000000000000000313000000000000000000000000000003130";
    const value = "900000000";

    let _contract = null
    let contractOwner = null
    let buyer = null

    before(async () => {
        //here we are initiating the _contract, contractOwner, and buyer
        _contract = await CourseMarketplace.deployed()
        contractOwner = accounts[0]
        buyer = accounts[1]

        //console log for checking results - console logging the _contract produces a very large output usually which is why we did not check it here***
        console.log(contractOwner, buyer);
        
    })
    // describe is what is you wrap the feature(s) you want to test in - (our first test is just for demonstration purposes, it is supposed to simply return a value of true)
    describe("Purchase the new course", () => {
        before(async() => {
            await _contract.purchaseCourse(courseId, proof, {
                from: buyer,
                value
            })
        })
        //it describes is what should happen in the test
        it("can get the purchased course hash by it's index", async () => {
            const index = 0
            const courseHash  = await _contract.getCourseHashAtIndex(index)

            //course id and sender makes courseHash
            const expectedHash = web3.utils.soliditySha3(
                { type: "bytes16", value: courseId },
                { type: "address", value: buyer },
            )
            //assert describes what should happen - provided by Chai
            assert.equal(courseHash, expectedHash, "Course hash's are not matching!")

        })
    })
})