import { useEffect } from 'react'
import useSWR from 'swr'

const NETWORKS = {
    1: "Ethereum Main Network",
    2: "Ropsten Test Network",
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
        const chainId = await web3.eth.getChainId() //web3, fetches network ID
        return NETWORKS[chainId]
    }
    )

    useEffect(() => {
        provider &&
        provider.on("chainChanged", chainId => mutate(NETWORKS[parseInt(chainId,16)])) // updates UI on network change
    },[web3])

    return {
        network: {
            mutate,
            ...rest
        }
    }
}