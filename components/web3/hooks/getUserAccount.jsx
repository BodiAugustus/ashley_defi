import { useHooks } from "@components/providers/web3"

const getUserAccount = () => {
    return(
        useHooks((hooks) => hooks.setupAccount)()
    )
}

export default getUserAccount