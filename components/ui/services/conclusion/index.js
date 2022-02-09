import { Button } from "@components/ui/common"
import Router from "next/router"
import { useRouter } from "next/router"

const Conclude = () => {
  const router = useRouter()
    return(
        <div className="">
        <div className="bg-[#2b2b2b] xs:h-[86vh] text-white mx-2 rounded-lg
        sm:h-[110vh]
        md:h-[75vh]
        lg:h-[85vh]
        xl:mx-6 xl:h-[75vh]
        2xl:h-[80vh]
        ">
            <h1 className="text-2xl text-center mb-2 p-2
            sm:text-3xl sm:p-2
            md:text-4xl
            ">If this all sounds too good to be true for only <span className="text-green-400">$30</span> a month</h1>
            <h4 className="text-lg text-center mb-2
            sm:text-2xl sm:mb-4
            md:text-3xl
            ">Well you&apos;re not wrong, sort-of.</h4>
            <div className="px-3">
            <p className="indent-5 mb-2
            sm:text-lg sm:mb-5
            md:text-2xl md:px-4
            lg:text-lg
            2xl:text-2xl
            ">We are very much aware that our membership is well below the average industry rate. While our monthly membership is one flat fee with no-strings attached, those members who gain much from our services and who can afford to contribute more are encouraged to do so, though certainly never obligated. </p>
            <p className="indent-5 mb-2 
            sm:text-lg sm:mb-5
            md:text-2xl md:px-4
            lg:text-lg
            2xl:text-2xl
            ">Our aim is to help prevent another mass acquisition of wealth by only a privledged few and we recognize that many people cannot afford expensive monthly subscriptions and be profitable at the same time when starting out.</p>
            <p className="indent-5 mb-2
            sm:text-lg sm:mb-5
            md:text-2xl md:px-4
            lg:text-lg
            2xl:text-2xl
            ">Therefore we have decided to make as low an entrance fee as possible with the goal of maximum inclusivity in mind.</p>
            <p className="indent-5 mb-5
            sm:text-lg
            md:text-2xl md:px-4
            lg:text-lg
            2xl:text-2xl
            ">So whether you work on Wall St, or on Main St, come and give Ashley Capital & DeFi a chance, we won&apos;t let you down.</p>
          <div className="ml-8
          sm:text-xl
          md:text-2xl md:px-4 md:mt-7
          lg:text-lg
          2xl:text-2xl
          ">
          <p>- <i>Bodi Augustus, Founder</i></p>
            <p className="indent-2"><i>Ashley Capital & DeFi</i></p>
          </div>
            </div>
        </div>
            <div className="my-12 text-center">
            <Button 
            onClick={() => router.push("/subscribe")}
            className="xs:p-4 xs:text-xl
            md:mt-10
            "
            
            >
                Subscribe now!
            </Button>
            </div>
            </div>
    )
}

export default Conclude