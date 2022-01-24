import Image from "next/image"
import {GiAbstract070, GiConcentricCrescents, GiHalfTornado} from 'react-icons/gi'

const Hero = () => {
    return(
        <div className="h-[85vh] bg-black p-4 relative">
            <div className="flex justify-between  w-full">

               <div className="flex flex-col">
                    <h1 className="text-white text-5xl w-[50%]  font-playfair">Ashley Capital & DeFi
                    </h1>
                    <h4 className="text-white w-[95%] font-thin">Crypto Consulting & Wealth Management
                    </h4>     
               </div>

               <div className="h-14 w-14 rounded-full bg-[#2b2b2b] absolute right-[48%] top-[23%] border-4 border-[#2b2b2b]">
                   <Image
                   src='/images/XMR1.png'
                   alt="The True Cryptocurrency Monero (XMR)"
                   height={55}
                   width={55}
                   />
               </div>

                <div className="w-full md:w-[20%]  text-white  bg-[#2b2b2b] p-3 mt-4 ">
                    <Image
                    src='/images/herobg.jpg'
                    alt="DeFi City"
                    layout="responsive"
                    height={450}
                    width={250}
                    />      
                </div>
            </div>

            <button
                className="text-white w-[40%] p-2 rounded-lg ml-5 bg-blue-600 shadow-2xl shadow-blue-600/75 mt-2"
                >Connect Wallet
            </button>
            
            <div className=" h-20 sepia opacity-30 mt-5 text-center flex justify-between">               
                <Image
                    src='/images/monero.png'
                    alt="DeFi City"
                    layout="fixed"
                    height={30}
                    width={100}
                    className="rounded-sm "
                    /> 
                         

                <Image
                    src='/images/fantom.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm"
                    />
                
                <Image
                    src='/images/secret.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm"
                    />
            </div>

            <h1 className="text-center text-white -mt-10 font-bold">The Future Is Digital.
            </h1>
            <hr className="w-[50%] mx-auto" />

            <div className="text-white mt-3">

                <div className="flex justify-between h-[20vh]">
                    <div className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism">               
                        <div className="flex justify-between p-2 items-center">
                            <h4>Our Job</h4>
                                <GiAbstract070
                                    className="fill-blue-500 text-2xl"
                                />
                        </div>                   
                            <p className="text-center px-[0.2px]">To teach you how to make your own well informed and educated investing decisions.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism">
                        <div className="flex justify-between p-2 items-center">
                            <h4>Why Us?</h4>        
                                <GiConcentricCrescents
                                    className="fill-purple-600 text-2xl"
                                />
                        </div>                           
                            <p className="text-center">We are actual blockchain developers with years of DeFi experience.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism">
                        <div className="flex justify-between p-2 items-center">
                            <h4>What Else?</h4>       
                                <GiHalfTornado
                                    className="fill-red-400 text-2xl"
                                />
                        </div>  
                            <p className="text-center">Discussions, classes, updates, reports, one-on-one chats and much more!</p>
                    </div>          
                </div>
            </div>          
        </div>
    )
}

export default Hero