import React from 'react';
import Ticker from 'react-ticker';
import useEthPrice, {
  useADAPrice,
  useATOMPrice,
  useAVAXPrice,
  useBATPrice,
  useBOOPrice,
  useBTCPrice,
  useCRVPrice,
  useDOTPrice,
  useDUSKPrice,
  useENJPrice,
  useFtmPrice,
  useLINKPrice,
  useMANAPrice,
  usePOLYPrice,
  useSANDPrice,
  useSCRTPrice,
  useSOLPrice,
  useSPIRITPrice,
  useXmrPrice,
  useTronPrice,
  useUniSwapPrice,
  useLitePrice,
  useNearPrice,
  useStellarPrice,
  useFlowPrice,
  useAlgoPrice,
  useZCashPrice,
} from '@components/hooks/useEthPrice';

const MoveStuffAround = () => {
  const { eth } = useEthPrice();
  const { xmr } = useXmrPrice();
  const { ftm } = useFtmPrice();
  const { spirit } = useSPIRITPrice();
  const { scrt } = useSCRTPrice();
  const { btc } = useBTCPrice();
  const { sol } = useSOLPrice();
  const { ada } = useADAPrice();
  const { dot } = useDOTPrice();
  const { atom } = useATOMPrice();
  const { mana } = useMANAPrice();
  const { tron } = useTronPrice();
  const { avax } = useAVAXPrice();
  const { poly } = usePOLYPrice();
  const { link } = useLINKPrice();
  const { sand } = useSANDPrice();
  const { uni } = useUniSwapPrice();
  const { boo } = useBOOPrice();
  const { enj } = useENJPrice();
  const { bat } = useBATPrice();
  const { crv } = useCRVPrice();
  const { dusk } = useDUSKPrice();
  const { lite } = useLitePrice();
  const { near } = useNearPrice();
  const { stellar } = useStellarPrice();
  const { flow } = useFlowPrice();
  const { algo } = useAlgoPrice();
  const { zcash } = useZCashPrice();
  return (
    <Ticker offset="run-in">
      {({ index }) => (
        <>
          {eth.data ? (
            <div className="bg-[#9ede73] pt-2 pb-2 flex text-green-700 rounded-lg font-bold mb-1">
              <div className="items-center justify-center ml-10 flex-col ">
                <h1 className="pl-2">ETH</h1>
                <h1>${eth.data?.toFixed(0)} </h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-2">XMR</h1>
                <h1>${xmr.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">FTM</h1>
                <h1>${ftm.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>SPIRIT</h1>
                <h1>${spirit.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>SCRT</h1>
                <h1>${scrt.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-3">BTC</h1>
                <h1>${btc.data?.toFixed(0)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-3">SOL</h1>
                <h1>${sol.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">ADA</h1>
                <h1>${ada.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-3">DOT</h1>
                <h1>${dot.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>ATOM</h1>
                <h1>${atom.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>MANA</h1>
                <h1>${mana.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>TRX</h1>
                <h1>${tron.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">AVAX</h1>
                <h1>${avax.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>POLY</h1>
                <h1>${poly.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-2">LINK</h1>
                <h1>${link.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>SAND</h1>
                <h1>${sand.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1>UNI</h1>
                <h1>${uni.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">BOO</h1>
                <h1>${boo.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-2">ENJ</h1>
                <h1>${enj.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">BAT</h1>
                <h1>${bat.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 ">
                <h1 className="pl-1">CRV</h1>
                <h1>${crv.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>DUSK</h1>
                <h1>${dusk.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>LTC</h1>
                <h1>${lite.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>NEAR</h1>
                <h1>${near.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>XLM</h1>
                <h1>${stellar.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>FLOW</h1>
                <h1>${flow.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10  ">
                <h1>ALGO</h1>
                <h1>${algo.data?.toFixed(2)}</h1>
              </div>

              <div className="ml-10 mr-10 ">
                <h1>ZEC</h1>
                <h1>${zcash.data?.toFixed(2)}</h1>
              </div>
            </div>
          ) : (
            <div className="bg-[#9ede73] p-4 flex text-green-700 rounded-lg mb-1">
              <h1 className="text-green-700 h-8 text-center items-center justify-center">
                Updating price feed...
              </h1>
            </div>
          )}
        </>
      )}
    </Ticker>
  );
};

export default MoveStuffAround;
