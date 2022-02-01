import Walletbar from "@components/ui/web3/walletbar"
import { FtmPrice } from "@components/ui/web3"
import { Breadcrumbs } from "@components/ui/common"

const Header = () => {
    return(
        <>
            <Walletbar/>
            <FtmPrice />
            <div className="flex flex-row-reverse pb-4 px-4 sm:px-6 lg:px-8">
            <Breadcrumbs/>
            </div>
        </>
    )
}

export default Header