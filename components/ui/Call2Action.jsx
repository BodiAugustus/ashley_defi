import Link from "next/link"

const Call2Action = () => {
    return(
        <div className="xs:h-[110vh] bg-black text-white
        sm:h-[120vh]
        md:h-[95vh]
        lg:h-[110vh]
        xl:h-[100vh]
        2xl-[85vh]
        ">
            <h2 className="text-4xl text-center pt-0 mb-1
            md:text-5xl
            lg:text-4xl lg:mb-1 lg:pt-4
            xl:text-4xl
            2xl:mb-2
            ">What does it cost?</h2>
            <div className="sm:h-[88vh] w-[90vw] bg-[#2b2b2b] mx-auto rounded-lg white-glassmorphism p-3
            sm:p-5
            md:h-[65vh]
            lg:h-[70vh]
            2xl:h-[55vh]
            ">
                <h3 className="text-center text-3xl
                sm:mt-1
                md:text-4xl
                lg:text-3xl
                xl:text-3xl
                ">One dollar per day.</h3>
                <h4 className="text-center text-lg mt-4
                sm:text-2xl
                md:text-3xl
                lg:text-2xl
                xl:text-2xl
                ">Or to put it more succintly, <span className="text-green-400">$30 USD</span> per month.</h4>
                <h4 className="text-center mt-4
                sm:text-xl
                md:text-2xl md:leading-relaxed md:mt-10
                lg:text-xl
                xl:text-2xl
                ">That&apos;s it. No annual subscriptions, no hidden fees or extra costs of any kind. Just one flat fee per month to gain unlimited access to your very own DeFi consultant and wealth manager.<br/><br/><div className="indent-4"> We live and breath DeFi and we code on, develop, and use the technologies that we write every day.</div><br/> &nbsp;&nbsp;&nbsp;&nbsp;We are real blockchain developers using the latest technologies to build a more decentralized future for all. Let us show you the ropes so that you can also learn how to take advantage of the financial revolution that is happening all around you.</h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center
            xl:mt-8">
           <Link href="/subscribe">
           <a 
            className="p-2 text-center bg-blue-500 rounded-lg shadow-lg shadow-sky-500 hover:scale-110 active:scale-100 w-[32%] mx-auto mt-8 cursor-pointer transition-all text-xl tracking-wide
            md:w-[25%] md:text-3xl
            lg:w-[20%]
            ">Join Now!</a>
           </Link>
            <h3 className="text-center mt-4 text-2xl
            lg:text-3xl">Or</h3>
            <Link href="/contact">
            <a className="p-2 text-center bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500 hover:scale-110 active:scale-100 w-[35%] mx-auto mt-4 cursor-pointer transition-all text-xl tracking-wide
            md:text-3xl md:w-[28%]
            lg:w-[20%]
            ">Contact Us!</a>
            </Link>
            </div>
        </div>
    )
}

export default Call2Action