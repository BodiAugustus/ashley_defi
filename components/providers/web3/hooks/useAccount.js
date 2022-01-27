import { useEffect } from "react"
import useSWR from 'swr'


export const handler = (web3, provider) => () => {
    const {mutate, ...rest} = useSWR(() => {
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
        mutate,
        ...rest
    } }
}