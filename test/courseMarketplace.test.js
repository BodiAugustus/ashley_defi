
// Mocha = testing framework
// Chai - assertion Js library

const CourseMarketplace = artifacts.require("CourseMarketplace")

// Creates an encapulated enviornment with the accounts metamask accoounts
contract("CourseMarketplace", accounts => {
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
        //it describes is what should happen in the test
        it("should resolve into a true value", () => {
            //assert describes what should happen - provided by Chai
            assert(true, "Value is NOT true")

        })
    })
})