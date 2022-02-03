import Walletbar from "@components/ui/web3/walletbar"
import { FtmPrice } from "@components/ui/web3"
import { Breadcrumbs } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"

const LINKS = [{
    href: "/marketplace",
    value: "Buy"
},{
    href: "/marketplace/courses/owned",
    value: "My Courses"
},{
    href: "/marketplace/courses/managed",
    value: "Manage Courses",
    requireAdmin: true
}]

const Header = () => {
    const { account } = useAccount()
    return(
        <>
            <Walletbar/>
            <FtmPrice />
            <div className="flex flex-row-reverse pb-4 px-4 sm:px-6 lg:px-8">
            <Breadcrumbs 
            items={LINKS}
            isAdmin={account.isAdmin}
            />
            </div>
        </>
    )
}

export default Header