

const setupAccount = (web3) => () => {
    return {
        account: web3 ? "Test Account" : "NULL!!!"
    }
}

export default setupAccount