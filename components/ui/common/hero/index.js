import Image from "next/image"
import {GiAbstract070, GiConcentricCrescents, GiHalfTornado} from 'react-icons/gi'
import Button from "../button"

import { useWeb3 } from "@components/providers"
import { useAccount } from "@components/hooks/web3"
import { MoveStuffAround } from '@components/ui/common'


const Hero = () => {
const { connect, isLoading, requireInstall } = useWeb3() // Brings in these 3 properties from _web3Api using the provider context (useWeb3) -- connect opens MetaMask
const { account } = useAccount()
// console.log(account.data);



    return(
        <div className="h-[87vh] bg-black p-4 relative
        md:h-[85vh]
        xl:h-[90vh]
        ">
        
            <MoveStuffAround/>
        
            <div className="flex justify-between w-full
            lg:w-[100vw]  
            lg:flex-col
            ">

            <div className="flex flex-col
                md:text-center md:relative
            ">
                    <h1 className="text-white text-5xl w-[50%]  font-playfair
                    md:w-[75%] md:text-6xl md:mt-10
                    lg:w-[100%] lg:mt-0
                    xl:text-7xl
                    ">Ashley Capital & DeFi 
                    </h1>
                    <h4 className="text-white w-[75%] font-thin
                    md:mt-2 md:text-2xl
                    lg:mx-auto xl:text-3xl
                    ">Crypto Consulting & Wealth Management 
                    </h4>     
            </div>

            <div className="h-14 w-14 rounded-full bg-[#2b2b2b] absolute right-[48%] top-[22%] border-4 border-[#2b2b2b]
            xs:top-[35%]
            sm:top-[27%]
            md:right-[42%] md:top-[38%]
            lg:hidden
            xl:hidden
            ">
                <a href="https://www.getmonero.org/">
                <Image
                src='/images/XMR1.png'
                alt="The True Cryptocurrency Monero (XMR)"
                height={55}
                width={55}
                />
                </a>
            </div>

                <div className="w-full   text-white  bg-[#2b2b2b] p-3 mt-4
                md:mr-2 md:w-[40%] 
                lg:hidden
                xl:
                ">
                    <Image
                    src='/images/herobg.jpg'
                    alt="DeFi City"
                    layout="responsive"
                    height={450}
                    width={250}
                    />      
                </div>
            </div>

            {isLoading ? 
            <Button
            className="
            md:left-[15%] md:top-[45%]
            lg:left-[42%] lg:top-[43%]
            xl:left-[42%] xl:top-[38%]
            "
            disabled={true}>
                Loading...
            </Button> 
            :
            account.data ?
            <Button
            className="cursor-default absolute 
            md:left-[15%] md:top-[45%]
            lg:left-[42%] lg:top-[43%]
            xl:left-[42%] xl:top-[38%]"

        
            hoverable={false}
            variant="blue"
            >
            Hello {account.isAdmin ? "Bodi" : `${account.data.slice(0,4)}...${account.data.slice(38)}` }
            </Button>
            :
            requireInstall ?
            <Button
            className="cursor-default absolute 
            md:left-[15%] md:top-[45%]
            lg:left-[42%] lg:top-[43%]
            xl:left-[42%] xl:top-[38%]"
            onClick={() => window.open("https://metamask.io/", "_blank")}>
                Install Metamask
            </Button>
            :
            <Button
            className="cursor-default absolute 
            md:left-[15%] md:top-[45%]
            lg:left-[42%] lg:top-[43%]
            xl:left-[42%] xl:top-[38%]"
            onClick={connect}
            >
            Connect Wallet
            </Button>
      
            }                      
            <div className=" h-20 sepia opacity-30 mt-7 text-center flex justify-between 
            xs:hidden
            sm:mt-10
            lg:mt-28
            xl:mt-48
            ">               
                <Image
                    src='/images/monero.png'
                    alt="DeFi City"
                    layout="fixed"
                    height={30}
                    width={100}
                    className="rounded-sm 
                    xl:invisible"
                    />                         

                <Image
                    src='/images/fantom.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm
                    xs:invisible
                    md:visible
                    xl:invisible
                    "
                    />
                
                <Image
                    src='/images/secret.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm
                    xl:invisible"
                    />
                <Image
                    src='/images/secret.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm
                    xs:invisible
                    md:visible
                    xl:invisible
                    "
                    />
                <Image
                    src='/images/secret.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm
                    xl:invisible
                    
                    "
                    />


            </div>

            <h1 className="text-center text-white -mt-8 font-bold
            xs:mt-14
            sm:mt-20 sm:text-2xl
            md:text-3xl md:mt-10
            lg:mb-0 lg:mt-28
            xl:mt-20 xl:mb-6 xl:text-4xl
            ">The Future Is Digital.
            </h1>   

            <div className="text-white mt-3">

                <div className="flex justify-between h-[20vh]
                ">
                    <div className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    ">               
                        <div className="flex justify-between p-2 items-center">
                            <h4>Our Job</h4>
                                <GiAbstract070
                                    className="fill-blue-500 text-2xl
                                    md:text-3xl
                                    xl:text-5xl
                                    "
                                />
                        </div>                   
                            <p className="text-center px-[0.2px]
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            ">To teach you how to make your own well informed and educated investing decisions.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    ">
                        <div className="flex justify-between p-2 items-center">
                            <h4>Why Us?</h4>        
                                <GiConcentricCrescents
                                    className="fill-purple-600 text-2xl
                                    md:text-3xl
                                    xl:text-5xl
                                    "
                                />
                        </div>                           
                            <p className="text-center
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            ">We are actual blockchain developers with years of DeFi experience.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism 
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    lg:text-xl lg:w-[32%]
                    xl:text-2xl xl:h-[30vh]
                    ">
                        <div className="flex justify-between p-2 items-center">
                            <h4>What Else?</h4>       
                                <GiHalfTornado
                                    className="fill-red-400 text-2xl sm:text-sm
                                    md:text-4xl
                                    xl:text-5xl"
                                    
                                />
                        </div>  
                            <p className="text-center
                            md:mt-4
                            lg:mt-0
                            xl:w-[90%] xl:mx-auto xl:mt-2
                            ">Discussions, classes, updates, reports, one-on-one chats and much more!</p>
                    </div>          
                </div>
            </div>          
        </div>
    )
}

export default Hero