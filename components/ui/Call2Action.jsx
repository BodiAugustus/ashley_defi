

const Call2Action = () => {
    return(
        <div className="h-[125vh] bg-black text-white
        sm:h-[110vh]
        md:h-[95vh]
        ">
            <h2 className="text-4xl text-center pt-0 mb-1
            md:text-5xl
            ">What does it cost?</h2>
            <div className="h-[83vh] w-[90vw] bg-[#2b2b2b] mx-auto rounded-lg white-glassmorphism p-3
            sm:p-5
            md:h-[65vh]
            ">
                <h3 className="text-center text-3xl
                sm:mt-1
                md:text-4xl
                ">One dollar per day.</h3>
                <h4 className="text-center text-lg mt-4
                sm:text-2xl
                md:text-3xl
                ">Or to put it more succintly, <span className="text-green-400">$30 USD</span> per month.</h4>
                <h4 className="text-center mt-4
                sm:text-xl
                md:text-2xl md:leading-relaxed md:mt-10
                ">That&apos;s it. No annual subscriptions, no hidden fees or extra costs of any kind. Just one flat fee per month to gain unlimited access to your very own DeFi consultant and wealth manager.<br/><br/><div className="indent-4"> We live and breath DeFi and we code on, develop, and use the technologies that we write about daily.</div><br/> &nbsp;&nbsp;&nbsp;&nbsp;We are real blockchain developers using the latest technologies to build a more decentralized future for all. Let us show you how it&apos;s done so you can take advantage of the financial revolution that is taking place all around you.</h4>
            </div>
            <div className="flex flex-col">
            <button className="p-2 bg-blue-500 rounded-lg shadow-lg shadow-sky-500 hover:scale-110 active:scale-100 w-[32%] mx-auto mt-8 cursor-pointer transition-all text-xl tracking-wide
            md:w-[25%] md:text-3xl
            ">Join Now!</button>
            <h3 className="text-center mt-4 text-2xl">Or</h3>
            <button className="p-2 bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500 hover:scale-110 active:scale-100 w-[35%] mx-auto mt-4 cursor-pointer transition-all text-xl tracking-wide
            md:text-3xl md:w-[28%]
            ">Contact Us!</button>
            </div>
        </div>
    )
}

export default Call2Action