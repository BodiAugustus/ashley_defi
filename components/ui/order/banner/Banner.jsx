

const Banner = ({title, description, image}) => {
    return(
        <section className=" text-left 
        sm:h-[105vh]
        lg:my-28 lg:2/6 lg:h-[73vh]
        ">
        <div className="text-6xl px-2 font-semibold text-white text-center leading-none
        xs:text-3xl xs:mt-4
        md:text-5xl md:mt-10 md:mb-5
        lg:px-6 lg:-mt-20
        ">Let us introduce you to the future of finance</div>
        <div className="text-xl font-light text-true-gray-500 antialiased text-center
        xs:text-base xs:mt-2
        sm:px-2 sm:text-lg
        md:text-2xl md:px-8 md:mb-20
        lg:mt-2  lg:mx-10 lg:mb-4
        ">Ashley DeFi guide&apos;s you every step of the way so that you can learn how to invest instead of gamble.</div>
        <div className="mt-5 flex bg-[#2b2b2b] h-[75vh] p-2 mx-3 rounded-lg
        xs:mt-5 
        md:h-[50vh]
        lg:h-[55vh]
        ">
          <div className="">
          <h1 className="mx-auto text-center text-lg bg-black w-[45%] rounded-lg
          sm:text-xl sm:w-[47%] sm:pb-1 sm:mt-3
          md:text-3xl md:w-[35%]
          lg:w-[25%] lg:mt-1
          ">Look, we get it.</h1>

          <h4 className="p-1 indent-4 mt-3 bg-black rounded-lg
          sm:text-lg sm:p-4 sm:mb-5
          md:text-2xl md:p-5 md:mx-6
          lg:text-xl lg:mx-3 lg:mb-3
          xl:text-2xl xl:mb-6
          ">DeFi is supposed to be both fun <span className="underline underline-offset-2">and</span> revolutionary. However for far too many looking in from the outside it feels more than a little overwhelming at first glance, or even second!</h4>

          <h4 className="p-1 indent-4 bg-black rounded-lg mt-3
          sm:text-lg sm:p-4
          md:text-2xl md:p-5 md:mx-6
          lg:text-xl lg:mx-3
          xl:text-2xl
          ">It can be very difficult for someone with no or limited experience with cryptocurreny and blockchain technology to figure out the difference between POS or POW, between Algorand and Avalanche, or even how to get a MetaMask wallet up and running for the first time so that wise investment decisions can be made.</h4>
          </div>

        </div>
      </section>
    )
}

export default Banner