import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import dayjs from "dayjs"
import { AiOutlineWarning } from 'react-icons/ai'
import { useGlobalContext } from "@components/providers/web3/otherContext"
import { InfoModal } from "@components/ui/order"


const WalletBar = () => {
  const { openModal} = useGlobalContext()
  const { requireInstall } = useWeb3()
  const { account, network} = useWalletInfo()

  return(
      <section className="text-white bg-[#2b2b2b] rounded-bl-lg rounded-br-lg">
      <div className="p-8 
      
      ">
        <h1 className="xs:text-sm md:text-2xl">Hello, {account ? account.data?.slice(0,6) : "guest, you're not logged in!"}</h1>
        <div className="flex xxs:flex-col
        md:flex-row
        
        ">
        <h2 className="subtitle mb-5
        
        xs:text-lg xs:mb-7
        sm:mb-3
        md:text-xl">I hope you are having a great day!</h2>

            <InfoModal/>
            <button 
            onClick={openModal}
            className="flex items-center p-2 text-center bg-yellow-500 rounded-lg shadow-lg shadow-yellow-500 hover:scale-110 active:scale-100  mx-auto cursor-pointer transition-all text-xl tracking-wide            
            xxs:w-[50%] xxs:mb-7
            xs:mb-[32%] xs:mx-auto
            sm:mb-[18%]
            md:w-[32%] md:text-3xl md:mb-0 md:-mt-2
            lg:w-[22%] lg:mx-[12%]
            xl:w-[18%]  xl:mx-[17%]
    
            "><AiOutlineWarning className="mr-2"/> Read First!</button>
        </div>
        <div className=" justify-between items-center gap-2
        xs:flex-col xs:flex
        md:flex-row
        xl:flex-row
        
        ">
          <div className="bg-black p-4 rounded-lg border-2 border-sky-400
          xxs:mb-2
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