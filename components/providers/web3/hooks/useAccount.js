import { useEffect } from "react"
import useSWR from 'swr'

const adminAddresses = {
    "0xc6753122e378dad96cabfae01e8d0643d2ea36b6b2f26dfedb5c5b7328ffb760": true
}

export const handler = (web3, provider) => () => {
    const {mutate, data, ...rest} = useSWR(() => {
        return web3 ? "web3/accounts" : null },
        async () => { //identifier and cb fetcher for retrieving data
            const accounts = await web3.eth.getAccounts() //Gets user MetaAccount
            return accounts[0]
        } 
    )

    useEffect(() => {
        provider &&
        provider.on("accountsChanged",  //changes user Meta account on accnt change
        (accounts) => mutate(accounts[0] ?? null))
    }, [provider])

    return { account: {
        data, // data is accnt address
        isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    } }
}