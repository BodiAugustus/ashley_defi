// This file retrieves the user's metamask account, it depends on the web3Api and the provider. It is ran directly after the other useAccount() function is called.

import { useEffect } from 'react';
import useSWR from 'swr'; //used for data fetching

const adminAddresses = {
  // '0xc6753122e378dad96cabfae01e8d0643d2ea36b6b2f26dfedb5c5b7328ffb760': true,
  // '0x77313cc28ced8f877a3335294166a8689e8bc75f73a4f856c7c10578ed251602': true,
  '0x4c9e2b179c24a445c9406b26e3f2b1df3b60aa26dff2c1d3e6b3fd5de38ae771': true,
};

export const handler = (web3, provider) => () => {
  // This is a function that calls a function
  const { mutate, data, ...rest } = useSWR(
    () => {
      return web3 ? 'web3/accounts' : null;
    }, //below async wont run without web3 being present
    async () => {
      //identifier and cb fetcher for retrieving data
      const accounts = await web3.eth.getAccounts(); //Gets user MetaAccount
      const account = accounts[0];

      if (!account) {
        // this prevents the return of null/undefined from being possible and causing problems downstream
        throw new Error(
          'Cannot retrieve an account. Please refresh the browser or install MetaMask!'
        );
      }
      return account;
    }
  );

  useEffect(() => {
    //used to keep track of active meta account. mutate() reexecutes the useSWR function to return new data, i.e. the newly changed account.
    const mutator = accounts => mutate(accounts[0] ?? null);
    provider?.on('accountsChanged', mutator); //changes user Meta account on accnt change

    // mutate reexecutes function and returns new data (the new account)
    return () => {
      provider?.removeListener('accountsChanged', mutator);
    };
    //changed from provider to mutate in dependency array
  }, [provider]);

  return {
    data, // data is the accnt address returned from accounts[0]
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false, //checks our hashed version to check it is the same, this increases security.
    mutate,
    ...rest,
  };
};
