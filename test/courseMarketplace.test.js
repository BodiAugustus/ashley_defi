
const CourseMarketplace = artifacts.require("CourseMarketplace")
const { catchRevert} = require("./utils/exceptions")

// Mocha - testing framework
// Chai - assertion JS library

const getBalance = async (address) => web3.eth.getBalance(address)
const toBN = value => web3.utils.toBN(value)

const getGas = async (result) => {
        //tx is to get the gas price
        const tx = await web3.eth.getTransaction(result.tx)
        // console.log(result.tx);
        //how much was used
        const gasUsed = toBN(result.receipt.gasUsed)
        //how much it cost
        const gasPrice = toBN(tx.gasPrice)   
        //total amount using toBN multiply method.
        const gas = gasUsed.mul(gasPrice)
        return gas
}

// Creates an encapulated enviornment with the accounts metamask accoounts
contract("CourseMarketplace", accounts => {

const courseId = "0x00000000000000000000000000003130";
const proof = "0x0000000000000000000000000000313000000000000000000000000000003130"
const courseId2 = "0x00000000000000000000000000002130";
const proof2 = "0x0000000000000000000000000000213000000000000000000000000000002130"
const value = "900000000";

let _contract = null
let contractOwner = null
let buyer = null
let courseHash = null

before(async () => {
            //here we are initiating the _contract, contractOwner, and buyer
    _contract = await CourseMarketplace.deployed()
    contractOwner = accounts[0]
    buyer = accounts[1]
})

      // describe is what is you wrap the feature(s) you want to test in - (our first test is just for demonstration purposes, it is supposed to simply return a value of true)
describe("Purchase the new course", () => {


    before(async() => {
    await _contract.purchaseCourse(courseId, proof, {
        from: buyer,
        value
    })
    })

    it("should not allow repurchase of owned course", async() => {
        await catchRevert(_contract.purchaseCourse(courseId, proof, {
            from: buyer,
            value
        }))
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

describe("Activate the purchased course", () => {
    it("should not be able to activate course except by contract owner", async() => {
    
            //the will fail bc buyer is not contract owner
        await catchRevert( _contract.activateCourse(courseHash, { from: buyer }))       
    })

    it("should have 'activated' status", async () => {
        await _contract.activateCourse(courseHash, { from: contractOwner })
        const course = await _contract.getCourseByHash(courseHash)
        const expectedState = 1

        assert.equal(course.state, expectedState, "Course should have 'activated' state")
    })
})

describe("Transfer Ownership", () => {
    let currentOwner = null
    before(async () => {
        //here we are initiating the _contract, contractOwner, and buyer
    currentOwner = await _contract.getContractOwner()
})
    
    it("getContractOwner should return deployer address", async() => {
    assert.equal(contractOwner, currentOwner, "Contract owners are not matching!")
    })

    it("should not transfer ownership when owner is not sending TX.", async () => {
        await catchRevert(_contract.transferOwnership(accounts[3], {from: accounts[4]}))
    })

    it("should transfer ownership to 3rd address from 'accounts", async () => {
        await _contract.transferOwnership(accounts[2], {from: contractOwner})
        const owner = await _contract.getContractOwner()

        assert.equal(owner, accounts[2], "New owner is not account 2!")
    })

    it("should transfer ownership from accounts[2] to initial owner", async () => {
        await _contract.transferOwnership(contractOwner, {from: accounts[2]})
        const owner = await _contract.getContractOwner()

        assert.equal(owner, contractOwner, "New owner is not set!")
    })

})

describe("Deactivate course", async () => {
    let courseHash2 = null
    let currentOwner = null

    before(async () => {
        await _contract.purchaseCourse(courseId2, proof2, {from: buyer, value})
        courseHash2 = await _contract.getCourseHashAtIndex(1)
        currentOwner = await _contract.getContractOwner()
    })

    it("should not be able to deactivate the course unless is contract owner", async() => {
        await catchRevert(_contract.deactivateCourse(courseHash2, {from: buyer}))
    })

    it("should have status of deactivated and a price of 0", async() => {
        const beforeTXBuyerBalance = await getBalance(buyer)
        const beforeTXContractBalance = await getBalance(_contract.address)
        const beforeTXOwnerBalance = await getBalance(currentOwner)

        const result = await _contract.deactivateCourse(courseHash2, {from: contractOwner})

        const afterTXBuyerBalance = await getBalance(buyer) 
        const afterTXContractBalance = await getBalance(_contract.address)
        const afterTXOwnerBalance = await getBalance(currentOwner)
        
        const course = await _contract.getCourseByHash(courseHash2)
        const expectedState = 2
        const expectedPrice = 0
        const gas = await getGas(result)

        assert.equal(course.state, expectedState, "Course is not deactivated!")
        assert.equal(course.price, expectedPrice, "Course price is not 0!")
        assert.equal(
            //gas is already a big number so can just put it in directly
            toBN(beforeTXOwnerBalance).sub(gas).toString(), 
            afterTXOwnerBalance, 
            "Contract owner balance is not correct!"
            )

        assert.equal(
            //balance of client is  higher after deactivation bc money is returned
            toBN(beforeTXBuyerBalance).add(toBN(value)).toString(), 
            afterTXBuyerBalance, 
            "Buyer balance is not correct!"
            )

        assert.equal(
            //balance of client is  lower - contract owner responsible for sending tx so they pay gas fees
            toBN(beforeTXContractBalance).sub(toBN(value)).toString(), 
            afterTXContractBalance, 
            "Contract balance is not correct!"
            )
    })

    
    it("should not be able to activate deactivated course.", async() => {
        //this should fail bc cannot go from deactivate to activate - must repurchase first
        await catchRevert(_contract.activateCourse(courseHash2, {from: contractOwner}))
    })
})

describe("Repurchase course", () => {
    let courseHash2 = null

    before(async () => {
        courseHash2 = await _contract.getCourseHashAtIndex(1)
    })

    it("should not repurchase when the course doesn't exist", async() => {
        const notExistingHash = "0xa147d9c2fe6f06ba212450bf07e204f078a327a82a944ccef3fdfb0d1eb95a31"
        await catchRevert(_contract.repurchaseCourse(notExistingHash, { from: buyer}))
    })

    it("should not repurchase when not course owner", async() => {
        const notOwner = accounts[2]
        await catchRevert(_contract.repurchaseCourse(courseHash2, { from: notOwner}))
    })

    it("should be able to buy with original buyer", async() => {
        const beforeTXBuyerBalance = await getBalance(buyer)
        const beforeTXContractBalance = await getBalance(_contract.address)

        const result = await _contract.repurchaseCourse(courseHash2, { from: buyer, value: value })
        const afterTXBuyerBalance = await getBalance(buyer)
        
        const afterTXContractBalance = await getBalance(_contract.address)


        // console.log(beforeTXBuyerBalance);
        // console.log(afterTXBuyerBalance);

        const course = await _contract.getCourseByHash(courseHash2)
        const expectedState = 0
        const gas = await getGas(result)

        assert.equal(course.state, expectedState, "The course is not in purchased state!")
        assert.equal(course.price, value, `The course price is not equal to ${value}!`)

        assert.equal(
            //toBN unlocks methods like sub, but must also use BN
            toBN(beforeTXBuyerBalance).sub(toBN(value)).sub(gas).toString(), 
            afterTXBuyerBalance, "Client balance is incorrect!")

        assert.equal(
            //value is added to the contract so add is used
            toBN(beforeTXContractBalance).add(toBN(value)).toString(), 
            afterTXContractBalance, "Contract balance is incorrect!")
    })
    
    it("should not be able to repurchase purchased course", async() => {
        await catchRevert(_contract.repurchaseCourse(courseHash2, { from: buyer}))
    })

    
})

describe("Receive funds", async () => {

    it("should have transacted funds", async () => {
        const value = "10000000000000000"
        const contractBeforeTx = await getBalance(_contract.address)

        await web3.eth.sendTransaction({
            from: buyer,
            to: _contract.address,
            value
        })

        const contractAfterTx = await getBalance(_contract.address)

        assert.equal(toBN(contractBeforeTx).add(toBN(value)).toString(), toBN(contractAfterTx), "Value after TX is not matching!")
    })
})

    describe("Normal withdraw", async () => {
        const fundsToDeposit = "10000000000000000"
        const overLimitFunds = "99999990000000000000000"
        let currentOwner = null

        before(async () => {
             currentOwner = await _contract.getContractOwner()
            
        await web3.eth.sendTransaction({
            from: buyer,
            to: _contract.address,
            value: fundsToDeposit
        })
        })
        //should fail bc of buyer
        it("should fail when withdrawee is not owner", async () => {
            const value = "1000000000000000"
            await catchRevert(_contract.withdraw(value, {from: buyer}))
        })

        it("should fail when withdrawing over account balance", async () => {

            await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
        })

        it("should have +0.1 ETH after withdraw", async () => {
            const ownerBalance = await getBalance(currentOwner)
            const result = await _contract.withdraw(fundsToDeposit, { from: currentOwner})
            const newOwnerBalance = await getBalance(currentOwner)
            const gas = await getGas(result)

            assert.equal(toBN(ownerBalance).add(toBN(fundsToDeposit)).sub(toBN(gas)).toString(), toBN(newOwnerBalance), "New owner balance is not correct!")
        })
    })

    describe("Emergency withdraw", async () => {
        let currentOwner;

        before( async () => {
            currentOwner = await _contract.getContractOwner()
        })

        after(async () => {
            await _contract.resumeContract({from: currentOwner})
        })

        it("should fail when the contract is not stopped", async () => {
            await catchRevert(_contract.emergencyWithdraw({from: currentOwner}))
        })

        it("should have added contract funds on the contract owner", async () => {
            await _contract.stopContract({from: contractOwner})

            const contractBalance = await getBalance(_contract.address)
            const ownerBalance = await getBalance(currentOwner)

            const result = await _contract.emergencyWithdraw({from: currentOwner})
            const gas = await getGas(result)


            const newOwnerBalance = await getBalance(currentOwner)

            assert.equal(toBN(ownerBalance).add(toBN(contractBalance)).sub(toBN(gas)), newOwnerBalance, "Owner balance is not correct!")

        })
    })

    it("should have contract balance of zero", async () => {
        const contractBalance = await getBalance(_contract.address)

        assert.equal(contractBalance, 0, "Contract balance is not zero!")
    })



    describe("Self Destruct", async () => {
        let currentOwner;

        before( async () => {
            currentOwner = await _contract.getContractOwner()
        })

        it("should fail when the contract is not stopped", async () => {
            await catchRevert(_contract.selfDestruct({from: currentOwner}))
        })

        it("should have added contract funds on the contract owner", async () => {
            await _contract.stopContract({from: contractOwner})

            const contractBalance = await getBalance(_contract.address)
            const ownerBalance = await getBalance(currentOwner)

            const result = await _contract.selfDestruct({from: currentOwner})
            const gas = await getGas(result)


            const newOwnerBalance = await getBalance(currentOwner)

            assert.equal(toBN(ownerBalance).add(toBN(contractBalance)).sub(toBN(gas)), newOwnerBalance, "Owner balance is not correct!")

        })
    })

    it("should have contract balance of zero", async () => {
        const contractBalance = await getBalance(_contract.address)

        assert.equal(contractBalance, 0, "Contract balance is not zero!")
    })

    it("should have a 0x byte code", async () => {
        const code = await web3.eth.getCode(_contract.address)

        assert.equal(code, "0x", "Contract is not destroyed!")
    })
})