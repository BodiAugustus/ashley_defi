import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import dayjs from "dayjs"




const WalletBar = () => {
  const { requireInstall } = useWeb3()
  const { account, network} = useWalletInfo()
  return(
      <section className="text-white bg-[#2b2b2b] rounded-bl-lg rounded-br-lg">
      <div className="p-8 
      
      ">
        <h1 className="xs:text-sm md:text-2xl">Hello, {account ? account.data?.slice(0,6) : "guest, you're not logged in!"}</h1>
        <div className="flex xs:flex-col
        md:flex-row
        
        ">
        <h2 className="subtitle mb-5
        xs:text-lg 
        md:text-xl">I hope you are having a great day!</h2>
        <h1 className="text-4xl font-playfair underline underline-offset-1
        xs:invisible 
        md:ml-14 md:-mt-14 md:underline-offset-2 md:visible 
        lg:mx-10 lg:mt-4
        xl:mx-32 
        2xl:mx-40
        ">Subscription Area</h1>
        </div>
        <div className=" justify-between items-center gap-2
        xs:flex-col xs:flex
        md:flex-row
        xl:flex-row
        
        ">
          <div className="bg-black p-4 rounded-lg border-2 border-sky-400
          xs:w-[50%] xs:mb-2 xs:-mt-16
          sm:-mt-10
          md:w-[25%] md:mt-0
          lg:w-[20%] 
          xl:w-[15%]
          ">
          <div className="text-center"><h2>Today is {dayjs().format('dddd')}</h2></div>
          <div className="text-center"><h2>{dayjs().format('MMMM D, YYYY')}</h2></div>
          <div className="text-center">@ {dayjs().format('h:mm A')}</div>

          </div>
          <div>
          {
           network.hasInitialResponse && !network.isSupported &&
          <div className="bg-red-600 p-4 rounded-lg
          xs:text-center xs:mb-5">
            <div className="">Connected to wrong network!</div>
            <div className="">
              Connect to: <br/> {` `}
              <strong className="text-2xl">
              {network.target}
              </strong>
            </div>
          </div>
          }
          {
            requireInstall && 
            <div className="bg-yellow-500 p-4 rounded-lg">Cannot connect to network. Please install Metamask.</div>
          }
          {
            network.data &&
            <div className="xs:text-center">
              <span className="">You are currently on the: <br/> </span>
              <strong className="text-2xl">{network.data}</strong> {/*This conditionally renders so that when a user does not have metamask installed the currently on message does not appear to UI*/}
            </div>
          }
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar