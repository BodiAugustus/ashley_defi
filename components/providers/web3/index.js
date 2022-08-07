// This file loads the Web3Provider. uses npm i web3 & npm i @metamask/detect-provider

const {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} = require('react');
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from 'utils/loadContract';
import Web3 from 'web3';
import { setupHooks } from './hooks/setupHooks';

const Web3Context = createContext(null);

const setListeners = provider => {
  provider.on('chainChanged', _ => window.location.reload());
};

//returns initial state of web3Api
const createWeb3State = ({ web3, provider, contract, isLoading }) => {
  return {
    web3,
    provider,
    contract,
    isLoading,
    hooks: setupHooks({ web3, provider, contract }), // Now setupHooks is only called initially and after web3Provider is loaded.
  };
};

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3Api] = useState(
    createWeb3State({
      web3: null,
      provider: null,
      contract: null,
      isLoading: true,
    })
  );

  useEffect(() => {
    //Called once during page load
    const loadProvider = async () => {
      const provider = await detectEthereumProvider(); // Gets us a provider. So we keep a state above.
      if (provider) {
        const web3 = new Web3(provider); // Creates new instance of Web3 once we have a provider
        const contract = await loadContract('CourseMarketplace', web3);
        // console.log(contract);
        // setListeners reloads the browder whenever network is changed
        setListeners(provider);
        setWeb3Api(
          createWeb3State({
            web3,
            provider,
            contract,
            isLoading: false,
          })
        );
      } else {
        setWeb3Api(rest => ({ ...rest, isLoading: false }));
        console.error('Please install MetaMask!');
      }
    };
    loadProvider();
  }, []);

  const _web3Api = useMemo(() => {
    // Adds additional properties/methods to the web3Api AFTER it is initially loaded and set with the values defined in the useState above. useMemo only updates when changes occur to the web3Api - we extended functionality to it here such as add the connect method or requireInstall property.
    const { web3, provider, isLoading } = web3Api;
    return {
      ...web3Api,
      // isWeb3Loaded: web3 != null,   <- this was replaced by requireInstall
      requireInstall: !isLoading && !web3,
      connect: provider
        ? async () => {
            try {
              await provider.request({ method: 'eth_requestAccounts' }); // opens metamask
            } catch (error) {
              console.error('Cannot retrieve account!');
              location.reload(); // Used to prevent error when metamask reload attempted
            }
          }
        : () => {
            console.error('Cannot connect to MetaMask!');
          },
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks(cb) {
  const { hooks } = useWeb3();
  return cb(hooks);
}
