

const setupAccount = (web3) => () => {
    return {
        account: web3 ? "Test Account XYZ" : "NULL!!!"
    }
}

export default setupAccount