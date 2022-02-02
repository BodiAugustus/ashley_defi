import Navbar from "@components/ui/common/navbar"
import Footer from "@components/ui/common/footer"
import { Web3Provider } from "@components/providers"



const BaseLayout = ({children}) => {
    return(

        <Web3Provider>
            <Navbar/>
                {children}
            <Footer/>
        </Web3Provider>
    
    )
}

export default BaseLayout