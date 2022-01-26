import Navbar from "@components/ui/common/navbar/Navbar"
import Footer from "@components/ui/common/footer/Footer"

const BaseLayout = ({children}) => {
    return(
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
}

export default BaseLayout