import {Gi3DStairs} from 'react-icons/gi'
import {AiOutlineStop} from 'react-icons/ai'

const Subscribe = () => {
    return(
        <div className="h-[100vh] bg-black text-white
        lg:pt-2">
            <h2 className="text-4xl text-center pt-0 mb-1
            md:text-5xl
            lg:text-4xl
            xl:text-4xl
            ">What we Offer</h2>
            <div className="grid grid-cols-2 grid-rows-5 h-[89vh] white-glassmorphism w-[90vw] mx-auto
            md:w-[80vw]
            lg:w-[47vw] lg:h-[88vh]
            ">
                <div className="col-span-2 bg-blue-400 rounded-tl-lg rounded-tr-lg">
                    <div className="flex items-center text-3xl p-3
                    sm:text-4xl
                    md:mr-12
                    lg:text-3xl lg:p-2
                    xl:text-3xl
                    
                    ">
                        <div className="relative">
                            <Gi3DStairs className='text-4xl
                            md:text-6xl
                            '/>
                            <AiOutlineStop className='absolute -top-[28%] -right-[40%] text-5xl fill-red-500
                            md:top-[10%] md:-right-[0%]
                            lg:right-[1%]
                            '/>
                        </div>
                        <h3 className='mx-auto'>No Tier systems!</h3>
                    </div>
                        <h4 className='text-center text-xl mt-2
                        sm:text-2xl sm:w-[70%] sm:mx-auto
                        md:text-3xl md:w-[55%]
                        lg:text-2xl lg:w-[80%] lg:-mt-3
                        xl:text-2xl xl:-mt-2
                        '>All members, all access. <span className='text-amber-900 font-bold'>No bull.</span></h4>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500 font-thin 
                xs:pt-4
                sm:text-lg sm:pt-4
                md:text-2xl md:p-3 md:pt-5
                lg:text-base
                xl:text-lg xl:p-5
                ">
                    <h2>Individualized risk assessments custom tailored to your desired level of exposure.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500 font-thin 
                xs:pt-4
                sm:text-lg sm:pt-4
                md:text-2xl md:p-3
                lg:text-base lg:pt-5
                xl:text-lg xl:p-4 xl:pt-6
                ">
                    <h2>Personal portfolio management and recommendations with regular updates.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center pt-3 hover:bg-blue-500 font-thin 
                sm:text-lg sm:pt-6
                md:text-2xl md:p-3
                lg:text-base
                xl:text-lg xl:p-4 xl:pt-6
                ">
                    <h2>Timely feedback from an actual consultant, not a customer service representitve.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center p-2 hover:bg-blue-500 font-thin 
                xs:pt-4
                sm:text-lg sm:pt-6
                md:text-2xl md:p-3
                lg:text-base
                xl:text-lg xl:p-4 xl:pt-6
                ">
                    <h2>Market outlooks and projections compiled using real-time market metrics.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500 font-thin pt-2
                sm:text-lg
                md:text-2xl md:p-3
                lg:text-base
                xl:text-lg xl:p-4 xl:pt-6
                ">
                    <h2>Advanced technical expertise from real world blockchain developers.</h2>
                </div>
                <div className="col-span-1 bg-blue-600 text-center hover:bg-blue-500 font-thin
                xs:mt-4 
                sm:text-lg sm:pt-2
                md:text-2xl md:p-3
                lg:text-base lg:pt-1
                xl:text-lg xl:p-4 xl:pt-4
                ">
                    <h2>Alpha news drops & tech unveilings revealed though our cultivated list of proven affiliates.</h2>
                </div>
                <div className="col-span-2 bg-blue-400 rounded-bl-lg rounded-br-lg">
                    <h2 className='text-center text-3xl pt-4
                    sm:text-4xl
                    md:text-5xl md:pt-8
                    lg:text-4xl lg:pt-2
                    xl:text-4xl xl:p-4
                    '>Come & join us, <br/> the future is <span className='text-blue-700 '>now.</span></h2>
                </div>
            </div>
        </div>
    )
}


export default Subscribe