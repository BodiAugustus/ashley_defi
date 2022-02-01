// This file loads the Web3Provider. uses npm i web3 & npm i @metamask/detect-provider

const { createContext, useContext, useEffect, useState, useMemo } = require("react");
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from 'web3'
import { setupHooks } from "./hooks/setupHooks";


const Web3Context = createContext(null)

export default function Web3Provider({children}) {
    const [web3Api, setWeb3Api] = useState({ // Keeps state values we are interested in
        provider: null,
        web3: null,
        contract: null,
        isLoading: true,
        hooks: setupHooks() // Now setupHooks is only called initially and after web3Provider is loaded.
    })

    useEffect(() => { //Called once during page load
        const loadProvider = async () => {
            const provider = await detectEthereumProvider() // Gets us a provider. So we keep a state above.
            if(provider){
                const web3 = new Web3(provider) // Creates new instance of Web3 once we have a provider
                setWeb3Api({ // Updates the state values 
                    provider,
                    web3,
                    contract: null,
                    isLoading: false,
                    hooks: setupHooks(web3, provider)
                })
            }else{
                setWeb3Api(rest => ({...rest, isLoading: false})) 
                console.error("Please install MetaMask!");
            }
        }
        loadProvider()
    }, [])

    const _web3Api = useMemo(() => { // Adds additional properties/methods to the web3Api AFTER it is initially loaded and set with the values defined in the useState above. useMemo only updates when changes occur to the web3Api - we extended functionality to it
        const {web3, provider, isLoading} = web3Api
        return {
            ...web3Api,
            // isWeb3Loaded: web3 != null,
            requireInstall: !isLoading && !web3,
            connect: provider ? 
            async () => {
                try {
                    await provider.request({method: "eth_requestAccounts"}) // opens metamask
                } catch (error) {
                    console.error("Cannot retrieve account!")
                    location.reload() // Used to prevent error when metamask reload attempted
                }
            }
            :
            () => {
                console.error("Cannot connect to MetaMask!")                
            }


        }
    }, [web3Api]) // getHooks, connect only updates/runs when Web3Api changes.

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context)
}

export function useHooks(cb) {
    const { hooks } = useWeb3()
    return cb(hooks)
}