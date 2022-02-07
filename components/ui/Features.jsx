import {GiThreeFriends, GiTorch, GiBrain, GiTeamIdea, GiDiamondHard} from 'react-icons/gi'
import {FaHandshake} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import Image from 'next/image'


const Features = () => {
    return(
        <div className="h-[110vh] bg-black text-white
        
        ">
            <h2 className="text-center text-4xl pt-4 mb-1
            md:text-5xl md:mb-3
            lg:text-4xl lg:mr-[53%] lg:mb-2
            xl:text-4xl xl:mb-2 xl:mr-[54%]
            
            ">The Ashley Way</h2>
            <div className="h-[89vh] w-[90vw] mx-auto
            lg:grid lg:grid-cols-5 lg:h-[90vh]
            ">
                <div className="white-glassmorphism h-[35vh] mb-6 text-lg p-3 sm:text-xl sm:leading-loose
                md:text-2xl md:leading-loose md:w-[70%] md:mx-auto
                lg:text-xl lg:leading-loose lg:col-span-2 lg:row-span-2 lg:h-[57vh] lg:w-[80%] lg:pt-8
                xl:text-xl xl:leading-loose xl:h-[49vh] xl:p-7
                xl:w-[85%]
                ">
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    '><GiThreeFriends className='fill-green-300 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    '/> Every member is a friend.</h4>
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    '><FaHandshake className='fill-blue-300 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    '/> People over profits.</h4>
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    '><GiTorch className='fill-yellow-300 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    '/> Freedom is everything.</h4>
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    '><AiFillLock className='fill-stone-300 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    '/> Privacy is your right.</h4>
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    '><GiBrain className='fill-red-400 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    '/> Knowledge is power.</h4>
                    <h4 className='flex justify-evenly items-center
                    md:justify-center
                    lg:text-lg
                    xl:text-2xl
                    '><GiTeamIdea className='fill-indigo-300 
                    md:mr-3 md:text-5xl
                    lg:text-3xl
                    xl:text-4xl
                    
                    '/> Where there&apos;s a will, there&apos;s a way!</h4>
                </div>

                <h2 className='text-4xl mb-1 text-center
                md:text-5xl md:mt-8
                lg:col-span-3 lg:mt-4 lg:text-4xl lg:-mb-12
                xl:text-4xl xl:mt-4 xl:-mb-20
                '>2022 DeFi Focus</h2>
                <div className="white-glassmorphism h-[35vh] mb-8 
                sm:text-xl sm:leading-loose
                md:text-2xl md:leading-loose md:h-[31vh] md:w-[90%] md:mx-auto
                lg:col-span-3 lg:h-[47vh] lg:leading-relaxed
                xl:h-[41vh] xl:text-xl
                ">
                    <ul>
                    <li>
                    <h4 className='flex items-center p-2
                    md:justify-center'><GiDiamondHard className='mr-2
                    md:text-4xl
                    '/> POS Blockchain Projects &nbsp; <i className='text-sm'> (Proof of Stake)</i></h4></li>
                    <li><h4 className='flex items-center p-2
                    md:justify-center
                    '><GiDiamondHard className='mr-2
                    md:text-4xl
                    '/> Decentralized Oracles &nbsp; <i className='text-sm'>(Ex. Chainlink)</i></h4></li>
                    <li><h4 className='flex items-center p-2
                    md:justify-center
                    '><GiDiamondHard className='mr-2
                    md:text-4xl
                    '/> Privacy Coins | Chains &nbsp; <i className='text-sm'>(Ex. XMR/SCRT)</i></h4></li>
                    <li><h4 className='flex items-center p-2
                    md:justify-center
                    '><GiDiamondHard className='mr-2
                    md:text-4xl
                    '/> Metaverse Projects&nbsp; <i className='text-sm'>(Ex. SAND/MANA)</i></h4></li>
                    <li><h4 className='flex items-center p-2
                    md:justify-center
                    '><GiDiamondHard className='mr-2
                    md:text-4xl
                    '/> NFT&apos;s and Gaming nbsp; <i className='text-sm'>(Ex. Enjin)</i></h4></li>
                    </ul>          
                </div>

                <div className="h-[13vh] bg-[#2b2b2b] rounded-lg border-[1px] grid grid-cols-5 relative
                sm:h-[18vh] sm:mb-6
                lg:col-span-5 lg:h-[20vh] lg:-mt-8
                xl:h-[25vh]
                ">

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
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1642109008/money_dlxh6y.jpg'
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