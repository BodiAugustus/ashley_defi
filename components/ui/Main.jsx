import Image from "next/image"
import {MdDoNotDisturb} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Main = () => {
    return (
        <div className="h-[100vh] bg-black text-white text-center">
            <h2 className="text-4xl pt-4 mb-1"><span className="text-red-500">Stop</span> Taking the Bait</h2>
            <div className="bg-[#2b2b2b] w-[90%] h-[89%] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2 rounded-lg white-glassmorphism">
            <div className="border-4 border-black rounded-lg col-span-2 white-glassmorphism">
                <div className="">
                    <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643053552/venice_c9kup6.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-50 rounded-xl"
                    />
                    <h2 className="absolute w-[80%] left-[10%] mt-4 text-xl">A <span className="text-yellow-400">new</span> financial era requires <span className="text-yellow-400">new</span> financial experts.</h2>
                    <h2 className="absolute top-[40%] w-[80%] left-[10%] mt-4 text-lg">The old ways of doing things <i>just doesn&apos;t work anymore</i>.</h2>
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
                    <h2 className="absolute w-[80%] left-[10%] mt-4 text-xl">Stock brokers <span className="text-red-600 text-4xl r-[20%]"><MdDoNotDisturb className="mx-auto mt-3"/> </span> know DeFi.</h2>                
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
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl ">Hedge fund managers don&apos;t <u className="underline-offset-2 text-green-400">use</u> crypto.</h2>                
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
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl ">Influencers influence poorly.
                     <AiFillTwitterCircle
                         className="mx-auto text-4xl fill-blue-400"
                     />
                     <hr className="border-red-500 border-2 w-[35%] absolute rotate-45 left-10 bottom-4"/>            
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
                    <h2 className="absolute w-[80%] left-[10%] mt-8 text-xl ">Your gut&apos;s <span className="tracking-wider">FOMO</span> only leads to losses.
                    </h2>                
                </div>
            </div>

            <div className="border-4  col-span-2 border-black rounded-xl white-glassmorphism">
                <h2 className="text-2xl">So why do you keep listening to them?</h2>
             
            </div>

            </div>
        </div>
    )
}


export default Main