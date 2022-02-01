const { default: useSWR } = require("swr")

const URL = "https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false" //Makes req to API

const fetcher = async (url) => {
 const res = await fetch(url)
 const json = await res.json() // json is the returned data
//  debugger
 return json.market_data.current_price.usd ?? null
}

const useEthPrice = () => {
    const swrRes = useSWR(() => 
        URL, 
        fetcher,
        { refreshInterval: 100000}      
    )
    return { eth: {...swrRes} }
}

export default useEthPrice