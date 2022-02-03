import { useHooks } from "@components/providers/web3"
import { useEffect } from "react"
import { useWeb3 } from "@components/providers"
import { useRouter } from "next/router"

// this function resolves to true or false depending on if dta is present - checks for all possible data types
const _isEmpty = data => {
    return(
        data == null || 
        data === "" ||
        //checks for empty array, !! won't work
        (Array.isArray(data) && data.length === 0) ||
        //checks for empty object, !! won't work
        (Object.keys(data).length === 0 && data.constructor === Object)
    )
}

const enhanceHook = (swrResponse) => { // This function uses swrResponse bc that is what will be wrapping the hook. The hook will get data and mutate it.
    // debugger

    const { data, error } = swrResponse
    const hasInitialResponse = !!(data || error)
    const isEmpty = hasInitialResponse && _isEmpty(data)
    return {
        ...swrResponse,
        isEmpty,
        hasInitialResponse
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

export const useAdmin = ({redirectTo}) => {
    const { account } = useAccount()
    const router = useRouter()
    const { requireInstall } = useWeb3()

    useEffect(() => {
        if(
            //requireInstall means there is no MetaMask. This redirects non admin accounts.
        (requireInstall || 
        account.hasInitialResponse && !account.isAdmin) ||
        account.isEmpty){
            router.push(redirectTo)
        }
    },[account])

    return { account }
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

export const useManagedCourses = (...args) => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useManagedCourses)(...args))

    return {
        managedCourses: swrRes
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