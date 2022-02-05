import React from 'react'
import Ticker from 'react-ticker'
import useEthPrice, { useADAPrice, useATOMPrice, useAVAXPrice, useBATPrice, useBOOPrice, useBTCPrice, useCRVPrice, useDOTPrice, useDUSKPrice, useENJPrice, useFtmPrice, useLINKPrice, useLUNAPrice, useMANAPrice, usePOLYPrice, useSANDPrice, useSCRTPrice, useSOLPrice, useSPIRITPrice, useXmrPrice, useZOOPrice } from "@components/hooks/useEthPrice"







const MoveStuffAround = () => {
const { eth } = useEthPrice()
const { xmr } = useXmrPrice()
const { ftm } = useFtmPrice()
const { spirit } = useSPIRITPrice()
const { scrt } = useSCRTPrice()
const { btc } = useBTCPrice()
const { sol } = useSOLPrice()
const { ada } = useADAPrice()
const { dot } = useDOTPrice()
const { atom } = useATOMPrice()
const { mana } = useMANAPrice()
const { luna } = useLUNAPrice()
const { avax } = useAVAXPrice()
const { poly } = usePOLYPrice()
const { link } = useLINKPrice()
const { sand } = useSANDPrice()
const { zoo } = useZOOPrice()
const { boo } = useBOOPrice()
const { enj } = useENJPrice()
const { bat } = useBATPrice()
const { crv } = useCRVPrice()
const { dusk } = useDUSKPrice()
return(
    <Ticker offset="run-in" > 
        {({ index }) => (
            
            <>
             {eth.data ?
                <div className='bg-[#9ede73] pt-2 pb-2 flex text-green-700 rounded-lg'>

                <div className="items-center justify-center ml-10 flex-col ">
                    <h1>ETH</h1>
                    <h1>${eth.data?.toFixed(0)} </h1>
                </div>

                <div className="ml-10 ">
                    <h1>XMR</h1>
                    <h1>${xmr.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>FTM</h1>
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
                    <h1>BTC</h1>
                    <h1>${btc.data?.toFixed(0)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>SOL</h1>
                    <h1>${sol.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>ADA</h1>
                    <h1>${ada.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>DOT</h1>
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
                    <h1>LUNA</h1>
                    <h1>${luna.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>AVAX</h1>
                    <h1>${avax.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>POLY</h1>
                    <h1>${poly.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>LINK</h1>
                    <h1>${link.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>SAND</h1>
                    <h1>${sand.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>ZOO</h1>
                    <h1>${zoo.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>BOO</h1>
                    <h1>${boo.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>ENJ</h1>
                    <h1>${enj.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>BAT</h1>
                    <h1>${bat.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 ">
                    <h1>CRV</h1>
                    <h1>${crv.data?.toFixed(2)}</h1>
                </div>

                <div className="ml-10 mr-10 ">
                    <h1>DUSK</h1>
                    <h1>${dusk.data?.toFixed(2)}</h1>
                </div>

                </div>
                :
                <div className='bg-[#9ede73] p-4 flex text-green-700 rounded-lg'>
                <h1 className='text-green-700 h-8 text-center items-center justify-center'>Updating price feed...</h1>
                </div>
             }
                
            </>
        )}
    </Ticker>
)
        }

export default MoveStuffAround