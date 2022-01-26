import Navbar from "@components/ui/common/navbar/Navbar"
import Footer from "@components/ui/common/footer/Footer"
import Web3Provider from "@components/providers/web3"

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