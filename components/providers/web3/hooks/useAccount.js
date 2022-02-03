// This file retrieves the user's metamask account, it depends on the web3Api and the provider. It is ran directly after the other useAccount() function is called.

import { useEffect } from "react"
import useSWR from 'swr' //used for data fetching 

const adminAddresses = {
    "0xc6753122e378dad96cabfae01e8d0643d2ea36b6b2f26dfedb5c5b7328ffb760": true
}

export const handler = (web3, provider) => () => { // This is a function that calls a function
    const {mutate, data, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null },
        async () => { //identifier and cb fetcher for retrieving data
            const accounts = await web3.eth.getAccounts() //Gets user MetaAccount
            const account = accounts[0]
     
            if(!account){  // this prevents the return of null/undefined from being possible and causing problems downstream
                throw new Error("Cannot retrieve an account. Please refresh the browser or install MetaMask!")
            }
            return account
        } 
    )

    useEffect(() => { //used to keep track of active meta account
        const mutator = (accounts) => mutate(accounts[0] ?? null) 
        provider?.on("accountsChanged",  mutator)//changes user Meta account on accnt change
        // mutate reexecutes function and returns new data (the new account)
        return () => {
            provider?.removeListener("accountsChanged", mutator)
        }
    }, [provider])

    return { 
        data, // data is the accnt address
        isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false, //checks our hashed version to check it is the same, this increases security.
        mutate,
        ...rest
     }
}