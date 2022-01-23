import Image from 'next/image'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return(
        <nav>
            <div className="flex justify-between p-1 bg-sky-300">
                <div className="flex items-center justify-between p-1 relative bg-red-300 w-[8%]">
                    <Image
                        src="/android-chrome-192x192.png"
                        alt="Ashley Capital & DeFi Logo"                        
                        layout='fill'
                        />
                </div>
                    <button className='text-2xl cursor-pointer transition-all hover:rotate-90'>
                        <FaBars/>
                    </button>
                <div className="hidden overflow-hidden transition-all ">Links</div>
                <div className="hidden">Social Icons</div>
            </div>
        </nav>
    )
}

export default Navbar