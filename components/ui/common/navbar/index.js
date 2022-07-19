import Image from 'next/image';
import { FaBars, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { links, socials } from '@components/data/data';
import { useEffect, useRef, useState } from 'react';
import { ActiveLink } from '..';

import { useAccount, useOwnedCourses } from '@components/hooks/web3';
import { getAllCourses } from '@content/courses/fetcher';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let time = new Date();
  const { account } = useAccount();
  const { ownedCourses } = useOwnedCourses(getAllCourses, account.data);
  // const linksContainerRef = useRef(null)
  // const linksRef = useRef(null)

  // useEffect(() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height
  //     // console.log(linksHeight)
  //     if(showMenu){
  //         linksContainerRef.current.style.height = `${linksHeight}px`
  //     } else{
  //         linksContainerRef.current.style.height = '0px'
  //     }
  // },[showMenu])

  return (
    <nav className="h-[100vh]">
      <div className="flex flex-wrap justify-between items-center p-1 bg-black relative ">
        {showMenu && (
          <h1
            className="absolute text-white -right-[30%] top-[40%] rotate-90 text-7xl
            xxs:-right-[35%]
            xs:-right-[30%]
            sm:-right[25%]
            "
          >
            Ashley DeFi
          </h1>
        )}
        <div
          className="  flex justify-between h-[12vh] p-2 items-center w-full md:w-auto bg-[#2b2b2b] md:rounded-tr md:rounded-bl 
                md:rounded-br
                lg:ml-2"
        >
          <a
            href="https://www.bodiaugustus.com/"
            className="mt-1
                md:p-4
                lg:
                "
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <Image
                src="/android-chrome-192x192.png"
                alt="Ashley Capital & DeFi Logo"
                height="65%"
                width="65%"
                layout=""
              />
            </div>
          </a>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-5xl text-slate-100 cursor-pointer transition-all hover:rotate-90 active:scale-110  md:hidden"
          >
            <FaBars />
          </button>
        </div>

        <div
          // ref={linksContainerRef}
          className={`bg-[#2b2b2b] transition-all md:h-auto overflow-hidden  w-[55vw] 
                xxs:w-[65vw]
                xs:w-[60vw]
                md:w-[55%] md:p-3 md:rounded-xl ${
                  showMenu
                    ? 'links-container show-container'
                    : 'links-container'
                }
                lg:w-[45%]
                `}
        >
          <ul
            // ref={linksRef}
            className="text-5xl text-center p-8 transition-all uppercase md:flex md:justify-between md:text-3xl md:p-0 text-white font-economica tracking-wide md:h-9
                    xxs:leading-loose
                    lg:text-3xl
                    xl:text-4xl
                    "
          >
            {links.map(item => {
              const { id, name, url, howLong } = item;
              {
                if (id === '13gfgg' && ownedCourses.isEmpty) {
                  return (
                    <li
                      className={`mt-[00%] w-auto md:mt-0 transition-all hover:bg-black hover:p-1 md:hover:text-2xl hover:items-center md:hover:p-1
                                hover:rounded-lg
                                 ${howLong} md:w-auto `}
                      key={id}
                    >
                      <a href={url}>Member</a>
                    </li>
                  );
                }
              }
              return (
                <li
                  className={`mt-[00%] w-auto md:mt-0 transition-all hover:bg-black hover:p-1 md:hover:text-2xl hover:items-center md:hover:p-1
                                hover:rounded-lg
                                 ${howLong} md:w-auto `}
                  key={id}
                >
                  <a href={url}>{name}</a>
                </li>
              );
            })}
          </ul>
          {showMenu && (
            <>
              <div
                className="flex justify-around  text-white mt-8 cursor-pointer
                       xxs:text-5xl 
                    xs:mt-4
                       sm:mt-14 sm:text-6xl
                         "
              >
                <FaTwitter className="hover:scale-110 active:scale-100 transition-all" />
                <FaGithub className="hover:scale-110 active:scale-100 transition-all" />
                {/* <FaLinkedin className="hover:scale-110 active:scale-100 transition-all" /> */}
              </div>
              <div
                className="flex flex-col text-center mt-20 text-xs text-white 
                        xxs:mt-24
                        xs:mt-12
                        sm:mt-[23vh] "
              >
                <h4>Ashley Capital & DeFi - &#169; {time.getFullYear()}</h4>
              </div>
            </>
          )}
        </div>

        <ul
          className="hidden bg-[#2b2b2b] 
                    md:flex md:items-center md:justify-between md:p-2  md:mr-1 md:text-3xl md:w-[17%] md:rounded-xl
                    lg:w-[13%] lg:mr-2 xl:text-4xl
                    "
        >
          {socials.map(item => {
            const { id, url, icon, color } = item;
            return (
              <li
                key={id}
                className={`${color} hover:scale-110 transition-all active:scale-100`}
              >
                <a className="" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
