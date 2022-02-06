import { FaSkullCrossbones } from 'react-icons/fa'

const Body1 = () => {
    return (
        
        <div className="h-[100vh] bg-black text-white px-3">
            <h1 className="text-3xl text-center">We help you understand the risk, such as:</h1>
            <div className="flex items-center mb-2">
            <FaSkullCrossbones className='text-2xl mr-1'/>
            <h2>Bots driving up the price at an ICO event before you even have time to make an initial offer and click trade. </h2>
            </div>
            <div className="flex items-center mb-2">
            <FaSkullCrossbones className='text-xl mr-1'/>
            <h2>That anybody can make a crypto token and a website that looks good to scam money.</h2>
            </div>
            <div className="flex items-center mb-2">
            <FaSkullCrossbones className='text-3xl mr-1'/>
            <h2>How phishing sites can look identicle to your trading platforms and hack your data before stealing your funds if you&apos;re not aware of what to look for.</h2>
            </div>
            <div className="flex items-center mb-2">
            <FaSkullCrossbones className='text-lg mr-1'/>
            <h2>Projects, protocols and entire chains can be hacked and some projects rug pull</h2>
            </div>
            <div className="flex items-center">
            <FaSkullCrossbones className='text-base mr-1'/>
            <h2>That there are very few regulations - you&apos;re in the Wild West now!</h2>
            </div>
            
  



        </div>
    )
}

export default Body1