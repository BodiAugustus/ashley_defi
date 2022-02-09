import { COURSE_PRICE, useFtmPrice } from "@components/hooks/useEthPrice"
import { Loader } from "@components/ui/common"
import Image from "next/image"


const FtmPrice = () => {
  const { ftm } = useFtmPrice()
  return (
    <div className="flex text-center bg-black pl-2 p-4
    xxs:flex-col
    xs:flex 
    md:flex-row
    ">
        <div className="p-6 border-2 border-sky-400 drop-shadow rounded-md mr-2 
        xxs:w-[60%] xxs:mx-auto xxs:mb-2
        xs:w-[50%] xs:p-1 xs:ml-2
        md:w-[25%]
        lg:w-[20%]
        xl:w-[15%]
        ">
          <div className="flex items-center justify-center text-white">
          {
            ftm.data ?
            <>
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/images/FTM.png"
              alt="FTM Logo"
            />
            <span className="text-xl font-bold pl-1"> = ${ftm.data.toFixed(2)}</span>
          </> :
            <div className="w-full flex justify-center">
            <Loader/>
            </div>    
          }
          </div>
          <p className="text-lg text-white">Current FTM Price</p>
        </div>
        <div className="p-6 border-2 border-sky-400 drop-shadow rounded-md
         xxs:w-[60%] xxs:mx-auto xxs:mb-2
         xs:w-[50%] xs:p-1
         md:w-[25%]
         lg:w-[20%]
         xl:w-[15%]
        ">
          <div className="flex items-center justify-center text-white">
           {
             ftm.data ?
           <>
            <span className="text-xl font-bold pr-1">
            {ftm.perItem} 
            </span>
            <Image
            layout="fixed"
            height="35"
            width="35"
            src="/images/FTM.png"
            alt="FTM Logo"
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
          <p className="text-lg text-white">Price per month</p>
        </div>
    
    </div>
  )
}

export default FtmPrice