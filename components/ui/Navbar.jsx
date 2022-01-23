import Image from 'next/image'
import {FaBars, FaTwitter} from 'react-icons/fa'

const Navbar = () => {
    return(
        <nav className='bg-purple-600'>
            <div className="flex flex-wrap justify-between items-center p-1 bg-black ">
                <div className="  flex justify-between h-[12vh] p-2 items-center w-full md:w-auto bg-[#2b2b2b] md:rounded-lg">
                    <Image
                        src="/android-chrome-192x192.png"
                        alt="Ashley Capital & DeFi Logo"                        
                        height="65%"
                        width="65%"
                        />
                    <button className='text-5xl text-sky-400 cursor-pointer transition-all hover:rotate-90 md:hidden'>
                        <FaBars/>
                    </button>
                </div>
                <div className="bg-[#2b2b2b] transition-all h-auto  overflow-hidden md:w-[45%] md:p-3 md:rounded-xl ">
                    <ul className='transition-all uppercase md:flex md:justify-between md:text-3xl text-white font-economica tracking-wide '>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Extras
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="hidden md:flex md:items-center md:justify-between bg-[#2b2b2b] md:p-2  md:mr-1 md:text-3xl md:w-[15%] md:rounded-xl">
                    <li className='text-sky-400'>
                        <a href="#">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar