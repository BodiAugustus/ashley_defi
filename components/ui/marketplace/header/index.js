import Walletbar from "@components/ui/web3/walletbar"
import { FtmPrice } from "@components/ui/web3"
import { Breadcrumbs } from "@components/ui/common"
import { useAccount } from "@components/hooks/web3"
import { MoveStuffAround } from '@components/ui/common'

const LINKS = [{
    href: "/subscribe",
    value: "Subscribe"
},{
    href: "/subscribe/subscriptions/owned",
    value: "My Subscription"
},{
    href: "/subscribe/subscriptions/managed",
    value: "Manage Subscriptions",
    requireAdmin: true
}]

const Header = () => {
    const { account } = useAccount()
    return(
        <>
            <MoveStuffAround/>
            <Walletbar/>
            <FtmPrice />
            <div className="flex flex-row-reverse pb-4 px-4 
            xxs:px-12
            xs:px-14 xs:mb-3
            sm:px-[20%]
            lg:px-8">
            <Breadcrumbs 
            items={LINKS}
            isAdmin={account.isAdmin}
            />
            </div>
        </>
    )
}

export default Header