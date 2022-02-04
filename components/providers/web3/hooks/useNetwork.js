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

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID]

export const handler = (web3) => () => {

    const {data, ...rest} = useSWR(() => {
    return web3 ? "web3/network" : null}, 
    async () => {
        const chainId = await web3.eth.getChainId() //web3, fetches network ID as a normal number

        if(!chainId){
            throw new Error("Cannot retrieve Network! Please refresh browser or check your internet connection.")
        }
        return NETWORKS[chainId] // Changes chainId to corresponding string.
        // When this async function finishes loading then isLoading will change to false. 
    }
    )

    // useEffect(() => {
    //     provider &&
    //     provider.on("chainChanged", chainId => mutate(NETWORKS[parseInt(chainId,16)])) // updates UI on network change (chainChanged) which calls the chainId function using mutate. Returns as a hex decimal so must use ParseInt with the chain ID, 16 is signifying that the chainId number is hexadecimal based so it gets parsed to a number correctly.
    // },[web3])



    return {
    
            data,
            // hasInitialResponse: data || error, // If data and error are undefined then it means the function has NOT resolved yet which means we are loading. If we have either data or error it means we have finished first fetch. --- This functionality is now taken care of by the enhanceHook() function in web3/hooks folder.
            target: targetNetwork, //these two values are used to display the error message if user is on incorrect network
            isSupported: data === targetNetwork, //If current network is same as target network then isSupported is true
            ...rest
        
    }
}