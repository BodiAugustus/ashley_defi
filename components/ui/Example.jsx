
import {GiTwoCoins} from 'react-icons/gi'

const Example = () => {
    return (
        <div className="h-[100vh] bg-black text-white ">
            <h2 className="text-center text-4xl pt-4 mb-1
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-1 lg:pt-8
            xl:text-4xl 
            ">Take an Example</h2>
            <div className="h-[89vh] w-[90vw] bg-[#2b2b2b] mx-auto border-2 rounded-xl border-stone-500 grid grid-cols-1 
            sm:text-lg
            md:text-2xl
            lg:h-[84vh]
            xl:text-xl
            ">
           
       
                <div className=" rounded-lg p-2 mt-1 overflow-y-scroll
                xl:mt-5">
                    <div className="relative">
                    <div className="indent-4
                    md:indent-8
                    ">Have you been wondering why Bitcoin and Ethereum have been going down instead of up lately? Follow along with us here at Ashley DeFi and let us show you one side of the coin.
                    <GiTwoCoins className='absolute bottom-[4%] left-[37%] sm:left-[37%]
                    md:invisible
                    lg:visible lg:left-[25%]
                    xl:left-[48%]
                    '/> 
                    </div>
                     
                    </div> 
                    <br/>
                    <div>To begin our foray into the details we must first talk about the concept which I&apos;m sure most, if not all of you have by now heard about many times before. It is one of the main reasons why Ethereum has and continues to lose so much of its previous market share to competitors which allow for much cheaper transactions, such as FTM or ATOM.<br/><br/>

                    <div>Gas is required to run functions which result in changes to the blockchain, such as a transfer function to send Ether from one person to another. Gas fees also prevent infinite looping from taking place inside of smart contracts which can be used by malicious actors to stop or cause disfunctions to the contract while running.</div> <br/>
                    
                    <div>On the Ethereum blockchain this sort of transfer transaction has a set price for gas which is 20 billion wei. Other types of interactions/transactions have different set prices depending on many parameters, such as network congestion.</div><br/><br/>

                   <div> 1 wei = 1 wei<br/>
                    1 Gwei = 1 billion wei<br/>
                    1 Ethereum = 10^18 wei</div><br/><br/>

                   <div className='indent-4'> So, you wanting to transfer some Ethereum to X will make the gas price 21000 Gwei because it is a transfer transaction. Now, depending on the network congestion it will take more or less gas in order to get your transaction picked up from the transaction pool by the block miners and then written onto the block. The price of gas will remain the same, but how much you need to fulfill the transaction will depend on the network congestion and how fast you need it to go through.</div><br/>

                    <div>You must set a Gas Limit (pay a transaction fee) which will determine HOW MUCH of that 21000 Gwei gas you are willing to purchase to get your transaction to go through. <br/><br/>
                    Paying less money means your transaction takes more time and if it is not enough, then the transaction may be left in the block pool entirely and stay unwritten to the block until the transaction fails which will eat up all of your gas fees and then revert back whatever transaction you just tried to do after the loss of said fees - this means you are back at square one, only you lost your gas money too.</div><br/>


                    <div>
                    Paying more money means that your transaction has a higher probability of being picked by the miners and added to the next block with less chance of failure.<br/><br/>
                    Why should you care though? Why should you put more than the minimum?<br/><br/> If you are making trades at set prices then setting low to mid-level gas fees means that you end up purchasing or selling a coin, for example, at a potentially much different price point than when you initiated the transaction.<br/><br/> For some traders, seconds can be the difference between fortunes and bankruptcy and minutes are an eternity when a price ticker is falling or rising fast. Fifteen minute transaction confirmation times are brutal and the worst is a long transaction time followed by a failed (reverted) transaction which puts you back at square one but without the gas which you lost as well as now being back on the clock as well.
                    </div><br/>

                    <div className='indent-4'>So then the best strategy is to pay a mid amount if you are making regular trades/transactions in times of non-high volatility or congestion, or, if you are making important trades during high volume, to pay above the market cost for gas to ensure your transactions gets picked first by the miners and added into the blockchain to be confirmed without delay.</div><br/>
                    So, here is our example: You want to make a transfer from yourself to a friend  on the Ethereum blockchain.<br/><br/> 
                    
                    When you go to make your transaction, you see that you have a range of possible choices to choose from, a low of 100 Gwei and a high of 150 Gwei. Remember there is also a set gas price of 21000 Gwei. <br/><br/>
                    
                     Sometimes during high volumes the gas can be higher than 200 Gwei. The difference in that 50 Gwei between 100 and 150 is the difference between a 1 to three minute transaction time versus a 10+ minute transaction time. So you opt for 150 Gwei in gas.<br/><br/>


                    Wrapping this up, to calculate your cost in ETH for this transaction you would simply multiply the gas price by the gas limit - or 21000 * 150 = 3,125,000 Gwei.<br/><br/> Remember 1 Gwei is 1 billion wei.<br/><br/>


                    To convert into Ethereum just count 9 decimal places to the left on Gwei - so the cost for this transaction in Ethereum would be apx 0.003125 Ethereum, or about $7.60 USD at current ETH prices ($2600 USD).<br/><br/>


                    The same transaction on the Fantom blockchain, for comparison, would cost .001 USD and take between 1-2 seconds.<br/><br/>

                    This is one of the many reasons why ETH has seen a large devaluation recently and with no solutions slated for this year beyond further abstractions like StarkNet, that trend is expected to continue.<br/><br/>

                    
                    <div className='indent-4'>Remember - it takes multiple transactions to buy and swap coins on the blockchain. When using Ethereum or Fantom going to a token swap like Uniswap or SpiritSwap, it will take one transaction to give wallet permission, one transaction to purchase the token, one transaction to gain access to the liquidity pools, one transaction to add into those liquidity pools to begin earning yields, and then more transactions to exit the pools or swap into stable coins during downturns or to send to offline wallets for better storage.</div><br/>
                    
                     The transactions add up very quickly and so do the fees which is why the next gen solutions are such a strong investment for 2022. Even LUNA with its .25 transaction fees is quite high compared to AVAX or FTM or POLY or the like which are magnitudes cheaper and with greater interoperability between chains. 
                    </div><br/>

                    <div>This is just an example of the sort of information, knowledge, and experience you will gain access to with Ashley Capital & DeFi and we&apos;ve only just skimmed the surface!</div><br/>

                    <div>Come join us and let us teach you what we know!</div>
                </div>
            </div>
        </div>
    )
}

export default Example