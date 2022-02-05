import useEthPrice, { COURSE_PRICE } from "@components/hooks/useEthPrice"
import { Loader } from "@components/ui/common"
import Image from "next/image"


const FtmPrice = () => {
  const { eth } = useEthPrice()
  return (
    <div className="flex text-center bg-black pl-2 p-4
    xs:flex-col 
    md:flex-row
    ">
        <div className="p-6 border-2 border-[#ffe400] drop-shadow rounded-md mr-2 ">
          <div className="flex items-center justify-center text-white">
          {
            eth.data ?
            <>
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/images/XMR1.png"
              alt="XMR Logo"
            />
            <span className="text-xl font-bold pl-1"> = ${eth.data}</span>
          </> :
            <div className="w-full flex justify-center">
            <Loader/>
            </div>    
          }
          </div>
          <p className="text-lg text-white">Current eth Price</p>
        </div>
        <div className="p-6 border-2 border-yellow-400 drop-shadow rounded-md">
          <div className="flex items-center justify-center text-white">
           {
             eth.data ?
           <>
            <span className="text-xl font-bold pr-1">
            ${eth.perItem} 
            </span>
            <Image
            layout="fixed"
            height="35"
            width="35"
            src="/images/XMR1.png"
            alt="XMR Logo"
          />
            <span className="text-xl font-bold pl-1">
              = ${COURSE_PRICE}
            </span>
          </> : 
            <div className="w-full flex justify-center">
            <Loader/>
            </div>    
           }
          </div>
          <p className="text-lg text-white">Price per course</p>
        </div>
    
    </div>
  )
}

export default FtmPrice