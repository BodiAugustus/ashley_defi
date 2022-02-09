import Image from "next/image"
import {MdDoNotDisturb} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Main = () => {
    return (
        <div className="h-[100vh] bg-black text-white text-center
        xl:h-[125vh]
        ">
            <h2 className="text-4xl pt-4 mb-1
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3
            "><span className="text-red-500">Stop</span> Taking the Bait</h2>
            <div className="bg-[#2b2b2b] w-[90%] h-[89%] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2 rounded-lg white-glassmorphism
            xl:h-[100vh]
            ">
            <div className="border-4 border-black rounded-lg col-span-2 white-glassmorphism">
                <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643053552/venice_c9kup6.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-4 text-xl 
                    sm:text-2xl sm:w-[90%] sm:left-[5%] sm:mt-6
                    md:text-3xl md:mt-10
                    lg:text-xl lg:mt-3 lg:w-[60%] lg:left-[20%] lg:leading-5
                    xl:text-2xl xl:w-[70%] xl:left-[15%]
                    2xl:mt-5
                    ">A <span className="text-yellow-400">new</span> financial era requires <span className="text-yellow-400">new</span> financial experts.</h2>
                    <h2 className="absolute top-[40%] w-[80%] left-[10%] mt-4 text-lg 
                    sm:text-xl sm:mt-6
                    md:text-2xl md:mt-8 md:w-[60%] md:left-[20%]
                    lg:text-lg lg:mt-4 lg:leading-tight lg:w-[80%] lg:left-[9%]
                    xl:text-2xl xl:mt-5
                    2xl:mt-6
                    ">The old ways of doing things <i>just doesn&apos;t work anymore</i>.</h2>
                </div>
            </div>

            <div className="border-4  border-black rounded-lg white-glassmorphism">
            <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643054834/stockBroker_n1swvn.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-4 text-xl sm:text-2xl sm:w-[90%] sm:left-[6%] sm:mt-8
                    md:text-3xl md:mt-14
                    lg:text-lg lg:-mt-0 lg:leading-2
                    xl:text-2xl xl:mt-1
                    2xl:mt-5
                    ">Stock brokers <span className="text-red-600 text-4xl r-[20%]"><MdDoNotDisturb className="mx-auto mt-3
                    md:text-5xl
                    lg:text-5xl lg:-mb-1
                    "/> </span> know DeFi.</h2>                
                </div>
            </div>

            <div className="border-4  border-black rounded-lg white-glassmorphism">
                <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643055462/abe_gvzxc7.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl sm:text-2xl sm:mt-10
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:leading-6 lg:mt-8
                    xl:text-2xl xl:mt-5 xl:leading-relaxed
                    2xl:mt-5
                    ">Hedge fund managers don&apos;t <u className="underline-offset-2 text-green-400">use</u> crypto.</h2>                
                </div>
            </div>

            <div className="border-4  border-black rounded-lg white-glassmorphism">
                <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643056019/sad_efhmjp.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl sm:text-2xl sm:mt-10
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:mt-7 lg:leading-5
                    xl:text-2xl xl:mt-5
                    2xl:mt-5
                    ">Influencers influence poorly.
                    <AiFillTwitterCircle
                        className="mx-auto text-4xl fill-blue-400
                        sm:mt-2
                        md:text-6xl
                        lg:text-5xl
                        "
                    />
                    <hr className="border-red-500 border-2 w-[35%] absolute rotate-45 left-10 bottom-4 
                    sm:w-[30%] sm:left-12
                    md:left-[35%] md:bottom-[16%]
                    lg:bottom-[20%]
                    xl:bottom-[18%] xl:left-[36%]
                    "/>            
                    </h2>    
                </div>
            </div>

            <div className="border-4  border-black rounded-xl white-glassmorphism">
                <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643056541/gamble_lrlsg5.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl sm:text-2xl sm:mt-10
                    md:text-3xl md:leading-relaxed md:mt-16
                    lg:text-xl lg:mt-7
                    xl:text-2xl xl:leading-relaxed xl:mt-7
                    2xl:mt-5
                    ">Your gut&apos;s <span className="tracking-wider">FOMO</span> only leads to losses.
                    </h2>                
                </div>
            </div>

            <div className="border-4  col-span-2 border-black rounded-xl white-glassmorphism">
                <h2 className="text-2xl 
                sm:w-[90%] sm:mx-auto
                md:text-4xl md:w-[97%] md:p-2
                lg:text-2xl
                xl:text-2xl
                ">So why do you keep listening to them?</h2>
            </div>

            </div>
        </div>
    )
}


export default Main