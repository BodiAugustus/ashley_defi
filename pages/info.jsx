import Navbar from "@components/common/navbar/Navbar"
import Footer from "@components/common/footer/Footer"
import Hero from "@components/common/hero/Hero"
import Breadcrumbs from "@components/common/breadcrumbs/breadcrumbs"
import Walletbar from "@components/web3/walletbar/Walletbar"
import FtmPrice from "@components/web3/ftmPrice/FtmPrice"
import OrderCard from "@components/order/card/OrderCard"

export default function Home() {
    return (
      <div>
        <div className="relative bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4">
  
            {/*------ NAVBAR STARTS ------*/}
            <Navbar/>
            {/*------ NAVBAR ENDS ------*/}
            <div className="fit">
  
              {/*------ HERO STARTS ------*/}
              {/*------ HERO ENDS ------*/}
  
              {/*------ BREADCRUMBS STARTS ------*/}
              <Breadcrumbs/>
              {/*------ BREADCRUMBS ENDS ------*/}
  
              {/*------ ADDRESS STARTS ------*/}
              <Walletbar/>
              {/*------ ADDRESS ENDS ------*/}
  
              {/*------ CURRENCY STARTS ------*/}
              <FtmPrice/>
              {/*------ CURRENCY ENDS ------*/}
  
              {/*------ ORDER INFO STARTS ------*/}
              <OrderCard/>
              {/*------ ORDER INFO ENDS ------*/}
  
              {/*------ COURSE CARD STARTS ------*/}
              <section className="grid grid-cols-2 gap-4 mb-5">
                { Array.from({length: 4}).map((_, i) =>
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
                      </div>
                      <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                      </div>
                    </div>
                  </div>
                )}
              </section>
              {/*------ COURSE CARD ENDS ------*/}
  
            </div>
          </div>
          {/*------ FOOTER STARTS ------*/}
          <Footer/>
          {/*------ FOOTER ENDS ------*/}
        </div>
      </div>
    )
  }