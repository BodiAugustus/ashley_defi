import setupAccount from "./setupAccount";


export const setupHooks = (web3) => {
    return {
        setupAccount: setupAccount(web3)
    }
}