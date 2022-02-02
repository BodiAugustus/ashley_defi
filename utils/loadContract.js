//this file loads the contract to the front end
const NETWORK_ID = process.env.NEXT_PUBLIC_NETWORK_ID

export const loadContract = async (name, web3) => { //web3 is brought in from the provider file
    const res = await fetch(`/contracts/${name}.json`)
    const Artifact = await res.json()

    let contract = null
    try {
        contract = new web3.eth.Contract(
            Artifact.abi,
            Artifact.networks[NETWORK_ID].address //taken from public/contract/marketplace.json networks object. 
        )
    } catch (error) {
        console.error(`Contract ${name} can not be loaded`);

    }

    return contract
}


// export const loadContract = async (name, provider) => {
//     const res = await fetch(`/contracts/${name}.json`)
//     const Artifact = await res.json()

//     const _contract = window.TruffleContract(Artifact)
//     _contract.setProvider(provider)

//     let deployedContract = null
//     try {
//         deployedContract = await _contract.deployed()
//     } catch (error) {
//         console.error(`Contract ${name} can not be loaded`);

//     }

//     return deployedContract
// }