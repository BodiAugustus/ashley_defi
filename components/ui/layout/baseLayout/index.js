import Navbar from "@components/ui/common/navbar"
import Footer from "@components/ui/common/footer"
import { Web3Provider } from "@components/providers"
import Script from "next/script"


const BaseLayout = ({children}) => {
    return(
        <>
        <Script
        src="/js/truffle-contract.js"
        strategy="beforeInteractive" // means script must be loaded first before other things rendered
        />
        <Web3Provider>
            <Navbar/>
                {children}
            <Footer/>
        </Web3Provider>
        </>
    )
}

export default BaseLayout