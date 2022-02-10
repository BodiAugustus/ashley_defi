import Navbar from "@components/ui/common/navbar"
import Footer from "@components/ui/common/footer"
import { Web3Provider } from "@components/providers"
import { AppProvider } from "@components/providers/web3/otherContext"



const BaseLayout = ({children}) => {
    return(

        <Web3Provider>
        <AppProvider>
            <Navbar/>
                {children}
            <Footer/>
        </AppProvider>
        </Web3Provider>
    
    )
}

export default BaseLayout