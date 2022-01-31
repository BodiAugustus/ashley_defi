//this file calls one of the two hooks shown

import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (web3, provider) => {
    return {
        useAccount: createAccountHook(web3, provider),
        useNetwork: createNetworkHook(web3, provider)
    }
}