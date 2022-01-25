import {GiThreeFriends, GiTorch, GiBrain, GiTeamIdea, GiDiamondHard} from 'react-icons/gi'
import {FaHandshake} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import Image from 'next/image'


const Features = () => {
    return(
        <div className="h-[100vh] bg-black text-white">
            <h2 className="text-center text-4xl pt-4 mb-1">The Ashley Way</h2>
            <div className="h-[89vh] w-[90vw] mx-auto">
                <div className="white-glassmorphism h-[30vh] mb-6 text-lg p-3">
                    <h4 className='flex justify-evenly items-center'><GiThreeFriends className='fill-green-300'/> Every member is a friend.</h4>
                    <h4 className='flex justify-evenly items-center'><FaHandshake className='fill-blue-300'/> People over profits.</h4>
                    <h4 className='flex justify-evenly items-center'><GiTorch className='fill-yellow-300'/> Freedom is everything.</h4>
                    <h4 className='flex justify-evenly items-center'><AiFillLock className='fill-stone-300'/> Privacy is your right.</h4>
                    <h4 className='flex justify-evenly items-center'><GiBrain className='fill-red-400'/> Knowledge is power.</h4>
                    <h4 className='flex justify-evenly items-center'><GiTeamIdea className='fill-indigo-300'/> Teamwork makes the dreamwork.</h4>
                </div>

                <h2 className='text-4xl mb-1'>2022 DeFi Landscape</h2>
                <div className="white-glassmorphism h-[30vh] mb-8">
                    <ul>
                       <li><h4 className='flex items-center p-2'><GiDiamondHard className='mr-2'/> POS Blockchain Projects &nbsp; <i> (Proof of Stake)</i></h4></li>
                       <li><h4 className='flex items-center p-2'><GiDiamondHard className='mr-2'/> Decentralized Oracles &nbsp; <i>(Ex. Chainlink)</i></h4></li>
                       <li><h4 className='flex items-center p-2'><GiDiamondHard className='mr-2'/> Privacy Coins | Chains &nbsp; <i>(Ex. XMR/SCRT)</i></h4></li>
                       <li><h4 className='flex items-center p-2'><GiDiamondHard className='mr-2'/> Metaverse Projects&nbsp; <i>(Ex. SAND/MANA)</i></h4></li>
                       <li><h4 className='flex items-center p-2'><GiDiamondHard className='mr-2'/> NFT&apos;s and Game Tokenization&nbsp; <i>(Ex. Enjin)</i></h4></li>
                    </ul>          
                </div>

                <div className="h-[10vh] bg-[#2b2b2b] rounded-lg border-[1px] grid grid-cols-5 relative">

                <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642108273/whale_scoces.jpg'
                    layout='responsive'
                    alt="Venice, Italy"
                    className="relative brightness-100 col-span-1 rounded-tl-md rounded-bl-md "
                    height={20}
                    width={20}
                    />
                <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642109112/oracle_tuwasv.jpg'
                    layout='responsive'
                    alt="Venice, Italy"
                    className="relative brightness-100 col-span-1 "
                    height={20}
                    width={20}
                    />
                <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642108635/luna_ioihfp.jpg'
                    layout='responsive'
                    alt="Venice, Italy"
                    className="relative brightness-100 col-span-1 "
                    height={20}
                    width={20}
                    />
                <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642096293/monero_vmvigy.jpg'
                    layout='responsive'
                    alt="Venice, Italy"
                    className="relative brightness-100 col-span-1 "
                    height={20}
                    width={20}
                    />
                <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642109193/math_pk4mem.jpg'
                    layout='responsive'
                    alt="Venice, Italy"
                    className="relative brightness-100 col-span-1 rounded-tr-md rounded-br-md "
                    height={20}
                    width={20}
                    />

                </div>
            </div>
        </div>
    )
}


export default Features