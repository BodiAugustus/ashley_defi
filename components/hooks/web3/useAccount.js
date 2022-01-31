import { useHooks } from "@components/providers/web3"
//This gets called right after setupHooks in the _web3Api
export const useAccount = () => {
    return useHooks((hooks) => hooks.useAccount)() // This executes useHooks() from the provider page. UseHooks() accepts the useAccount function being passed in as the callback. That will bring us back to this function which is then called and points us to the other useAccount function
}