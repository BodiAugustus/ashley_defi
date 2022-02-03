import { useHooks } from "@components/providers/web3"

const enhanceHook = (swrResponse) => { // This function uses swrResponse bc that is what will be wrapping the hook. The hook will get data and mutate it.
    // debugger
    return {
        ...swrResponse,
        hasInitialResponse: swrResponse.data || swrResponse.error// This is adding new data to swrResponse
    }
}

export const useNetwork = () => {
    const swrResponse = enhanceHook(useHooks((hooks) => hooks.useNetwork)())
    return{
        network: swrResponse
    }
}


//This gets called right after setupHooks in the _web3Api
export const useAccount = () => {
    const swrResponse = enhanceHook(useHooks((hooks) => hooks.useAccount)()) // This executes useHooks() from the provider page. UseHooks() accepts the useAccount function being passed in as the callback. That will bring us back to this function which is then called and points us to the other useAccount function)
    return{
        account: swrResponse
    }
}
// ...args brings all the parameters in like courses and eventually passes them into the hook function where they can be used.
export const useOwnedCourses = (...args) => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useOwnedCourses)(...args))

    return {
        ownedCourses: swrRes
    }

}

export const useOwnedCourse = (...args) => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useOwnedCourse)(...args))

    return {
        ownedCourse: swrRes
    }

}

export const useWalletInfo = () => {
    const { account } = useAccount()
    const { network } = useNetwork()

    return {
        account,
        network,
        canPurchaseCourse: !!(account.data && network.isSupported)
    }
}