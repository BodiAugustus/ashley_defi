import { useEffect } from 'react'
import useSWR from 'swr'

export const handler = (web3, provider) => () => {

    const {mutate, ...rest} = useSWR(() => {
    return web3 ? "web3/network" : null}, 
    async () => {
        const netId = await web3.eth.net.getId() //web3, fetches network ID
        return netId
    }
    )

    useEffect(() => {
        provider &&
        provider.on("chainChanged", netId => mutate(netId)) // updates UI on network change
    },[web3])

    return {
        network: {
            mutate,
            ...rest
        }
    }
}