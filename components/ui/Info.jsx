import Image from "next/image"

const Info = () => {
    return(
        <div className="h-[120vh] bg-black text-white ">
            <h2 className="text-center text-4xl pt-4 mb-1
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            "><span className="text-yellow-400">Enter</span> Ashley DeFi</h2>
            <div className="h-[113vh] w-[90vw] bg-[#2b2b2b] mx-auto border-2 rounded-xl border-stone-500 grid grid-cols-1 grid-rows-4
            lg:w-[45vw] lg:h-[89vh]
            ">
            <div className="col-span-2 row-span-1 relative rounded-md border-b-2 border-stone-500">
            <Image
                    src='https://res.cloudinary.com/bodi-web3/image/upload/v1643059268/sunrise_n4pzdh.jpg'
                    layout='fill'
                    alt="Venice, Italy"
                    className="relative brightness-100 rounded-xl "
                    />
                
            </div>
            <div className="col-span-2 row-span-3 rounded-xl p-4 font-light ">
                <div className="bg-black rounded-lg p-2 -mt-0 border-2 border-stone-500 
                sm:text-xl sm:p-4
                md:text-3xl md:p-8
                lg:text-lg lg:p-3 lg:mt-2
                xl:text-xl xl:p-4 xl:mt-3
                ">
                    <h2 className="indent-4
                    md:indent-8 
                    lg:leading-5
                    xl:leading-6
                    ">Ashley Capital & DeFi was created by <a
                     className="cursor-pointer"
                     href="bodiaugustus.com" target="_blank"><b>Bodi Augustus</b></a>, a web3 and blockchain developer who has been working in crypto since 2017. </h2><br/>
                    <h2 className="md:indent-8 
                    lg:leading-5
                    xl:leading-6">Our aim is to bridge the knowledge gap between the general public and those who code on the blockchains and interact with its protocols daily.</h2><br/>
                    <h2></h2>
                </div>
                <div className="bg-black rounded-lg p-2 mt-4 border-2 border-stone-500 
                sm:text-xl sm:p-4 sm:mt-5
                md:text-3xl md:p-8
                lg:text-lg lg:p-3 lg:leading-5
                xl:text-xl xl:p-4 xl:leading-6
                ">
                    <h2 className="indent-4
                    md:indent-8 ">We do not tell you what to think, we show you how to know. Understanding and using the technology is paramount for long-term successful DeFi investing.</h2><br/>
                  
                </div>
            </div>

            </div>
        </div>
    )
}

export default Info