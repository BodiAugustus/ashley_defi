import Image from "next/image"
import {GiAbstract070, GiConcentricCrescents, GiHalfTornado} from 'react-icons/gi'

const Hero = () => {
    return(
        <div className="h-[85vh] bg-black p-4 relative
        md:h-[85vh]
        ">
            <div className="flex justify-between  w-full">

               <div className="flex flex-col
                md:text-center md:relative
               ">
                    <h1 className="text-white text-5xl w-[50%]  font-playfair
                    md:w-[75%] md:text-6xl
                    ">Ashley Capital & DeFi
                    </h1>
                    <h4 className="text-white w-[75%] font-thin
                    md:mt-2 md:text-2xl
                    ">Crypto Consulting & Wealth Management
                    </h4>     
               </div>

               <div className="h-14 w-14 rounded-full bg-[#2b2b2b] absolute right-[48%] top-[22%] border-4 border-[#2b2b2b] sm:top-[20%]
               md:right-[40%] md:top-[18%]
               ">
                   <Image
                   src='/images/XMR1.png'
                   alt="The True Cryptocurrency Monero (XMR)"
                   height={55}
                   width={55}
                   />
               </div>

                <div className="w-full md:w-[40%]  text-white  bg-[#2b2b2b] p-3 mt-4
                md:mr-2
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

            <button
                className="text-white w-[40%] p-2 rounded-lg ml-5 bg-blue-600 shadow-2xl shadow-blue-600/75 mt-3 sm:-mt-2
                
                md:w-[27%] md:absolute md:left-[10.5%] md:top-[37%] md:text-2xl "
                >Connect Wallet
            </button>
            
            <div className=" h-20 sepia opacity-30 mt-7 text-center flex justify-between 
            sm:mt-10
            ">               
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
                    className="rounded-sm
                    xs:invisible
                    md:visible
                    "
                    />
                
                <Image
                    src='/images/secret.png' 
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
                    className="rounded-sm
                    xs:invisible
                    md:visible
                    "
                    />
                <Image
                    src='/images/secret.png' 
                    alt=" logo"    
                    height={30}
                    width={100}
                    layout="fixed"
                    className="rounded-sm
                    
                    "
                    />
            </div>

            <h1 className="text-center text-white -mt-8 font-bold
            sm:-mt-4
            md:text-3xl md:mb-8
            ">The Future Is Digital.
            </h1>
   

            <div className="text-white mt-3">

                <div className="flex justify-between h-[20vh]">
                    <div className="bg-[#2b2b2b] text-xs w-[31%] rounded-lg white-glassmorphism
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    ">               
                        <div className="flex justify-between p-2 items-center">
                            <h4>Our Job</h4>
                                <GiAbstract070
                                    className="fill-blue-500 text-2xl
                                    md:text-3xl
                                    "
                                />
                        </div>                   
                            <p className="text-center px-[0.2px]
                            md:mt-4
                            ">To teach you how to make your own well informed and educated investing decisions.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    ">
                        <div className="flex justify-between p-2 items-center">
                            <h4>Why Us?</h4>        
                                <GiConcentricCrescents
                                    className="fill-purple-600 text-2xl
                                    md:text-3xl
                                    "
                                />
                        </div>                           
                            <p className="text-center
                            md:mt-4
                            ">We are actual blockchain developers with years of DeFi experience.</p>
                    </div>

                    <div className="bg-[#2b2b2b] text-xs w-[30%] rounded-lg white-glassmorphism 
                    sm:text-base sm:h-[25vh] sm:w-[31%]
                    md:text-2xl
                    ">
                        <div className="flex justify-between p-2 items-center">
                            <h4>What Else?</h4>       
                                <GiHalfTornado
                                    className="fill-red-400 text-2xl sm:text-sm
                                    md:text-4xl"
                                />
                        </div>  
                            <p className="text-center
                            md:mt-4
                            ">Discussions, classes, updates, reports, one-on-one chats and much more!</p>
                    </div>          
                </div>
            </div>          
        </div>
    )
}

export default Hero