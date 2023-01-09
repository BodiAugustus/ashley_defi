const { default: useSWR } = require('swr');

const URL =
  'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false'; //Makes req to API

const URLXMR =
  'https://api.coingecko.com/api/v3/coins/monero?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLFTM =
  'https://api.coingecko.com/api/v3/coins/fantom?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLSPIRIT =
  'https://api.coingecko.com/api/v3/coins/spiritswap?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLSCRT =
  'https://api.coingecko.com/api/v3/coins/secret?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLBTC =
  'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLSOL =
  'https://api.coingecko.com/api/v3/coins/solana?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLADA =
  'https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLDOT =
  'https://api.coingecko.com/api/v3/coins/polkadot?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLATOM =
  'https://api.coingecko.com/api/v3/coins/cosmos?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLMANA =
  'https://api.coingecko.com/api/v3/coins/decentraland?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLAVAX =
  'https://api.coingecko.com/api/v3/coins/avalanche-2?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLPOLY =
  'https://api.coingecko.com/api/v3/coins/matic-network?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLLINK =
  'https://api.coingecko.com/api/v3/coins/chainlink?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLSAND =
  'https://api.coingecko.com/api/v3/coins/the-sandbox?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLBOO =
  'https://api.coingecko.com/api/v3/coins/spookyswap?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLENJ =
  'https://api.coingecko.com/api/v3/coins/enjincoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLBAT =
  'https://api.coingecko.com/api/v3/coins/basic-attention-token?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLCRV =
  'https://api.coingecko.com/api/v3/coins/curve-dao-token?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLDUSK =
  'https://api.coingecko.com/api/v3/coins/dusk-network?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

const URLTRON = 'https://api.coingecko.com/api/v3/coins/tron';

const URLUNISWAP = 'https://api.coingecko.com/api/v3/coins/uniswap';

const URLLITE = 'https://api.coingecko.com/api/v3/coins/litecoin';

const URLNEAR = 'https://api.coingecko.com/api/v3/coins/near';

const URLSTELLAR = 'https://api.coingecko.com/api/v3/coins/stellar';

const URLFLOW = 'https://api.coingecko.com/api/v3/coins/flow';

const URLALGO = 'https://api.coingecko.com/api/v3/coins/algorand';

const URLZCASH = 'https://api.coingecko.com/api/v3/coins/zcash';

//this is the price per month in USD !!
export const COURSE_PRICE = 99;

const fetcher = async url => {
  const res = await fetch(url);
  const json = await res.json(); // json is the returned data
  //  debugger
  return json.market_data.current_price.usd ?? null;
};
//data is the price in USD
const useEthPrice = () => {
  const { data, ...rest } = useSWR(() => URL, fetcher, {
    refreshInterval: 100000,
  });
  const perItem = (data && (COURSE_PRICE / Number(data)).toFixed(5)) ?? null;
  return { eth: { data, perItem, ...rest } };
};

export default useEthPrice;

const fetcherXMR = async url => {
  const res = await fetch(url);
  const json = await res.json();
  return json.market_data.current_price.usd ?? null;
};

export const useXmrPrice = () => {
  const { data, ...rest } = useSWR(() => URLXMR, fetcherXMR, {
    refreshInterval: 100000,
  });
  return { xmr: { data, ...rest } };
};

const fetcherFTM = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useFtmPrice = () => {
  const { data, ...rest } = useSWR(URLFTM, fetcherFTM, {
    refreshInterval: 100000,
  });
  const perItem = (data && (COURSE_PRICE / Number(data)).toFixed(1)) ?? null;
  return { ftm: { data, perItem, ...rest } };
};

const fetcherSPIRIT = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useSPIRITPrice = () => {
  const swrRes = useSWR(URLSPIRIT, fetcherSPIRIT, { refreshInterval: 100000 });
  return { spirit: { ...swrRes } };
};

const fetcherSCRT = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useSCRTPrice = () => {
  const swrRes = useSWR(URLSCRT, fetcherSCRT, { refreshInterval: 100000 });
  return { scrt: { ...swrRes } };
};

const fetcherBTC = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useBTCPrice = () => {
  const swrRes = useSWR(URLBTC, fetcherBTC, { refreshInterval: 100000 });
  return { btc: { ...swrRes } };
};

const fetcherSOL = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useSOLPrice = () => {
  const swrRes = useSWR(URLSOL, fetcherSOL, { refreshInterval: 100000 });
  return { sol: { ...swrRes } };
};

const fetcherADA = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useADAPrice = () => {
  const swrRes = useSWR(URLADA, fetcherADA, { refreshInterval: 100000 });
  return { ada: { ...swrRes } };
};

const fetcherDOT = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useDOTPrice = () => {
  const swrRes = useSWR(URLDOT, fetcherDOT, { refreshInterval: 100000 });
  return { dot: { ...swrRes } };
};

const fetcherATOM = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useATOMPrice = () => {
  const swrRes = useSWR(URLATOM, fetcherATOM, { refreshInterval: 100000 });
  return { atom: { ...swrRes } };
};

const fetcherMANA = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useMANAPrice = () => {
  const swrRes = useSWR(URLMANA, fetcherMANA, { refreshInterval: 100000 });
  return { mana: { ...swrRes } };
};

const fetcherAVAX = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useAVAXPrice = () => {
  const swrRes = useSWR(URLAVAX, fetcherAVAX, { refreshInterval: 100000 });
  return { avax: { ...swrRes } };
};

const fetcherPOLY = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const usePOLYPrice = () => {
  const swrRes = useSWR(URLPOLY, fetcherPOLY, { refreshInterval: 100000 });
  return { poly: { ...swrRes } };
};

const fetcherLINK = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useLINKPrice = () => {
  const swrRes = useSWR(URLLINK, fetcherLINK, { refreshInterval: 100000 });
  return { link: { ...swrRes } };
};

const fetcherSAND = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useSANDPrice = () => {
  const swrRes = useSWR(URLSAND, fetcherSAND, { refreshInterval: 100000 });
  return { sand: { ...swrRes } };
};

const fetcherBOO = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useBOOPrice = () => {
  const swrRes = useSWR(URLBOO, fetcherBOO, { refreshInterval: 100000 });
  return { boo: { ...swrRes } };
};

const fetcherENJ = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useENJPrice = () => {
  const swrRes = useSWR(URLENJ, fetcherENJ, { refreshInterval: 100000 });
  return { enj: { ...swrRes } };
};

const fetcherBAT = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useBATPrice = () => {
  const swrRes = useSWR(URLBAT, fetcherBAT, { refreshInterval: 100000 });
  return { bat: { ...swrRes } };
};

const fetcherCRV = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useCRVPrice = () => {
  const swrRes = useSWR(URLCRV, fetcherCRV, { refreshInterval: 100000 });
  return { crv: { ...swrRes } };
};

const fetcherDUSK = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useDUSKPrice = () => {
  const swrRes = useSWR(URLDUSK, fetcherDUSK, { refreshInterval: 100000 });
  return { dusk: { ...swrRes } };
};

const fetcherTron = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useTronPrice = () => {
  const swrRes = useSWR(URLTRON, fetcherTron, { refreshInterval: 100000 });
  return { tron: { ...swrRes } };
};

const fetcherUniSwap = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useUniSwapPrice = () => {
  const swrRes = useSWR(URLUNISWAP, fetcherUniSwap, {
    refreshInterval: 100000,
  });
  return { uni: { ...swrRes } };
};

const fetcherLite = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useLitePrice = () => {
  const swrRes = useSWR(URLLITE, fetcherLite, {
    refreshInterval: 100000,
  });
  return { lite: { ...swrRes } };
};

const fetcherNear = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useNearPrice = () => {
  const swrRes = useSWR(URLNEAR, fetcherNear, {
    refreshInterval: 100000,
  });
  return { near: { ...swrRes } };
};

const fetcherStellar = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useStellarPrice = () => {
  const swrRes = useSWR(URLSTELLAR, fetcherStellar, {
    refreshInterval: 100000,
  });
  return { stellar: { ...swrRes } };
};

const fetcherFlow = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useFlowPrice = () => {
  const swrRes = useSWR(URLFLOW, fetcherFlow, {
    refreshInterval: 100000,
  });
  return { flow: { ...swrRes } };
};

const fetcherAlgo = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useAlgoPrice = () => {
  const swrRes = useSWR(URLALGO, fetcherAlgo, {
    refreshInterval: 100000,
  });
  return { algo: { ...swrRes } };
};

const fetcherZCash = async url => {
  const res = await fetch(url);
  const json = await res.json();
  //  console.log(json);
  return json.market_data.current_price.usd ?? null;
};

export const useZCashPrice = () => {
  const swrRes = useSWR(URLZCASH, fetcherZCash, {
    refreshInterval: 100000,
  });
  return { zcash: { ...swrRes } };
};
