import { useWalletInfo } from "@components/hooks/web3"
import { useWeb3 } from "@components/providers"
import { Button } from "@components/ui/common"
import dayjs from "dayjs"

const DAYS = {
  0 : "Sunday",
  1 : "Monday",
  2 : "Tuesday",
  3 : "Wednesday",
  4 : "Thursday",
  5 : "Friday",
  6 : "Saturday"
}

const date = new Date()
const day = date.getDay()
const time = date.toLocaleString()

const WalletBar = () => {
  const { requireInstall } = useWeb3()
  const { account, network} = useWalletInfo()
  return(
      <section className="text-white bg-[#2b2b2b] rounded-bl-lg rounded-br-lg">
      <div className="p-8">
        <h1 className="xs:text-sm md:text-2xl">Hello, {account ? account.data?.slice(0,6) : "guest, you're not logged in!"}</h1>
        <h2 className="subtitle mb-5 xs:text-lg md:text-xl">I hope you are having a great day!</h2>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-black p-4 rounded-lg border-2">
          <div className="text-center"><h2>{dayjs().format('dddd')}</h2></div>
          <div className="text-center"><h2>{dayjs().format('MMMM D, YYYY')}</h2></div>
          <div className="text-center">{dayjs().format('h:mm A')}</div>

          </div>
          <div>
          {
           network.hasInitialResponse && !network.isSupported &&
          <div className="bg-red-600 p-4 rounded-lg">
            <div className="">Connected to wrong network!</div>
            <div className="">
              Connect to: {` `}
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
            <div>
              <span>Currently on </span>
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