
const CourseMarketplace = artifacts.require("CourseMarketplace")

// Mocha - testing framework
// Chai - assertion JS library

// Creates an encapulated enviornment with the accounts metamask accoounts
contract("CourseMarketplace", accounts => {

  const courseId = "0x00000000000000000000000000003130";
  const proof = "0x0000000000000000000000000000313000000000000000000000000000003130"
  const value = "900000000";

  let _contract = null
  let contractOwner = null
  let buyer = null

  before(async () => {
            //here we are initiating the _contract, contractOwner, and buyer
    _contract = await CourseMarketplace.deployed()
    contractOwner = accounts[0]
    buyer = accounts[1]
  })

      // describe is what is you wrap the feature(s) you want to test in - (our first test is just for demonstration purposes, it is supposed to simply return a value of true)
  describe("Purchase the new course", () => {
    let courseHash;

    before(async() => {
      await _contract.purchaseCourse(courseId, proof, {
        from: buyer,
        value
      })
    })
       //it describes is what should happen in the test
    it("can get the purchased course hash by index", async () => {
      const index = 0
      courseHash = await _contract.getCourseHashAtIndex(index)
                //course id and sender makes courseHash
      const expectedHash = web3.utils.soliditySha3(
        { type: "bytes16", value: courseId },
        { type: "address", value: buyer },
      )
            //assert describes what should happen - provided by Chai
      assert.equal(courseHash, expectedHash, "Course hash is not maching the hash of purchased course!")
    })

    it("should match the data of the course purchased by buyer", async () => {
      const exptectedIndex = 0
      const exptectedState = 0
      const course = await _contract.getCourseByHash(courseHash)

      assert.equal(course.id, exptectedIndex, "Course index should be 0!")
      assert.equal(course.price, value, `Course price should be ${value}!`)
      assert.equal(course.proof, proof, `Course proof should be ${proof}!`)
      assert.equal(course.owner, buyer, `Course buyer should be ${buyer}!`)
      assert.equal(course.state, exptectedState, `Course state should be ${exptectedState}!`)
    })
  })
})