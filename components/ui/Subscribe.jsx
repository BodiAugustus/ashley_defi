import {Gi3DStairs} from 'react-icons/gi'
import {AiOutlineStop} from 'react-icons/ai'

const Subscribe = () => {
    return(
        <div className="h-[100vh] bg-black text-white">
            <h2 className="text-4xl text-center pt-4 mb-1">What we Offer</h2>
            <div className="grid grid-cols-2 grid-rows-5 h-[89vh] white-glassmorphism w-[90vw] mx-auto">
                <div className="col-span-2 bg-blue-400 rounded-tl-lg rounded-tr-lg">
                    <div className="flex items-center text-3xl p-3">
                        <div className="relative">
                            <Gi3DStairs className='text-4xl'/>
                            <AiOutlineStop className='absolute -top-[28%] -right-[40%] text-6xl fill-red-500'/>
                        </div>
                        <h3 className='mx-auto'>No Tier systems!</h3>
                    </div>
                        <h4 className='text-center text-xl mt-2'>All members, all access. <span className='text-amber-900 font-bold'>No bull.</span></h4>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500">
                    <h2>Individualized risk assessments custom tailored to you and your desired levels of exposure.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500">
                    <h2>Personal portfolio management and recommendations with regular reporting & updates.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center pt-2 hover:bg-blue-500">
                    <h2>Timely feedback from an actual consultant, not a customer service representitve.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center p-2 hover:bg-blue-500">
                    <h2>Market outlooks and projections compiled in house using real-time market metrics.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500">
                    <h2>Advanced technical expertise and knowledge from real world blockchain developers.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500">
                    <h2>Access to alpha news drops & the latest tech unveilings revealed though our cultivated list of proven affiliates.</h2>
                </div>
                <div className="col-span-2 bg-blue-400 rounded-bl-lg rounded-br-lg">
                    <h2 className='text-center text-3xl pt-4'>Come & join us, <br/> the future is <span className='text-blue-700 '>now.</span></h2>
                </div>
            </div>
        </div>
    )
}


export default Subscribe