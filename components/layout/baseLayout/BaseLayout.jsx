import Navbar from "@components/common/navbar/Navbar"
import Footer from "@components/common/footer/Footer"

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