

const Banner = ({title, description, image}) => {
    return(
        <section className="h-[85vh] text-left 
        lg:my-28 lg:2/6">
        <div className="text-6xl font-semibold text-white text-center leading-none
        xs:text-3xl xs:mt-4
        ">We help you invest in the future of finance</div>
        <div className="text-xl font-light text-true-gray-500 antialiased text-center
        xs:text-base xs:mt-2
        lg:mt-6  
        ">Ashley DeFi guide&apos;s you every step of the way so that you can learn how to invest instead of gamble.</div>
        <div className="mt-5 flex bg-[#2b2b2b] h-[60vh] p-2 mx-3 rounded-lg
        xs:mt-5 
        lg:justify-start
        ">
          <div className="">
          <h1 className="mx-auto text-center text-lg bg-black w-[45%] rounded-lg">Look, we get it.</h1>

          <h4 className="p-1 indent-4 mt-3 bg-black rounded-lg">DeFi is supposed to be both fun <span className="underline underline-offset-2">and</span> revolutionary. However for far too many looking in from the outside it feels more than a little overwhelming at first glance, or even second!</h4>

          <h4 className="p-1 indent-4 bg-black rounded-lg mt-3">It can be very difficult for someone with no or limited experience with cryptocurreny and blockchain technology to figure out the difference between POS or POW, between Algorand and Avalanche, or even how to get a MetaMask wallet up and running for the first time so that wise investment decisions can be made.</h4>
          </div>

        </div>
      </section>
    )
}

export default Banner