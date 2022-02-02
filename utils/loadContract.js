//this file loads the contract to the front end

import contract from '@truffle/contract'

export const loadContract = async (name, provider) => {
    const res = await fetch(`/contracts/${name}.json`)
    const Artifact = await res.json()

    const _contract = contract(Artifact)
    _contract.setProvider(provider)

    let deployedContract = null
    try {
        deployedContract = await _contract.deployed()
    } catch (error) {
        console.error(`Contract ${name} can not be loaded`);

    }

    return deployedContract
}