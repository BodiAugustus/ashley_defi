//This file retreives the user active network

import { useEffect } from 'react'
import useSWR from 'swr' // for data fetching

const NETWORKS = { //This is a mapping using the chainId
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Smart Chain",
    250: "Fantom Network",
    1337: "Ganache"
}

export const handler = (web3, provider) => () => {

    const {mutate, ...rest} = useSWR(() => {
    return web3 ? "web3/network" : null}, 
    async () => {
        const chainId = await web3.eth.getChainId() //web3, fetches network ID as a normal number
        return NETWORKS[chainId] // Changes chainId to corresponding string
    }
    )

    useEffect(() => {
        provider &&
        provider.on("chainChanged", chainId => mutate(NETWORKS[parseInt(chainId,16)])) // updates UI on network change (chainChanged) which calls the chainId function using mutate. Returns as a hex decimal so must use ParseInt with the chain ID, 16 is signifying that the chainId number is hexadecimal based so it gets parsed to a number correctly.
    },[web3])

    return {
        network: {
            mutate,
            ...rest
        }
    }
}