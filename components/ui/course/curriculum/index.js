import { Loader } from '@components/ui/common';
import Link from 'next/link';

// const lectures = [
//     "Beginners Onboarding - Start Here!",
//     "Carrying out transactions",
//     "Farming on SpiritSwap",
//     "Using Multibridges",
//     "Blockchain Interoperability",

//   ]

// const links = [
//     {story1: "https://google.com"},
//     {story2: "https://yahoo.com"},
//     {story3: "https://twitter.com"},
//     {story4: "https://facebook.com"},
//   ]

export default function Curriculum({ locked, courseState, isLoading }) {
  const statusClass =
    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
  return (
    <section
      className="mx-auto rounded-lg bg-black pb-10 
      xxs:w-[95vw]
      
      
      
      "
    >
      <div
        className="flex flex-col 
       
        "
      >
        <div
          className="-my-2 
   
          sm:-mx-6 
          lg:-mx-8"
        >
          <div
            className="py-2 align-middle inline-block min-w-full 
            xs:w-[95vw]
            xl:w-[50vw]
      
            sm:px-6 
            "
          >
            <div className="shadow overflow-hidden border-2 border-gray-200 sm:rounded-lg ">
              <div
                className="min-w-full divide-y divide-gray-200 border-2 rounded-lg
                xs:w-[94vw]
                bg-indigo-600 xl:w-[70vw]
                "
              >
                <div
                  className="
                  
                   "
                >
                  <div className="">
                    <div
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:text-center lg:text-2xl"
                    >
                      Featured Content
                    </div>
                    {/* <div
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Status
                    </div> */}
                    <div scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2b2b2b] divide-y divide-white">
                  <div>
                    <div className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={
                                locked
                                  ? `bg-green-100 text-green-800 ${statusClass}`
                                  : `bg-green-100 text-green-800 ${statusClass}`
                              }
                            >
                              {locked ? 'Featured' : 'Featured'}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-white">
                            The Alchemy of NFT: Pricing 101
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* {
                            isLoading ? 
                            <Loader/>
                            :
                            locked ?
                            <>
                                { courseState === "deactivated" &&
                                <Link href="/subscribe" > 
                                  <a className="text-red-600 hover:text-red-900">
                                    Get Access
                                  </a>
                                </Link>
                                }
                                { courseState === "purchased" &&
                                <Link href="#" >
                                  <a className="text-indigo-600 hover:text-indigo-900">
                                    Waiting for Activation
                                  </a>
                                </Link>
                                }
                
                            </> :                        */}

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://en.0xzx.com/nft-alchemy-pricing-pricing-101-134/"
                        className="text-green-600 hover:text-green-900"
                      >
                        Read Now
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={
                                locked
                                  ? `bg-green-100 text-green-800 ${statusClass}`
                                  : `bg-green-100 text-green-800 ${statusClass}`
                              }
                            >
                              {locked ? 'Featured' : 'Featured'}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-white">
                            Who will Mine Ethereum in 2.0?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* {
                            isLoading ? 
                            <Loader/>
                            :
                            locked ?
                            <>
                                { courseState === "deactivated" &&
                                <Link href="/subscribe" > 
                                  <a className="text-red-600 hover:text-red-900">
                                    Get Access
                                  </a>
                                </Link>
                                }
                                { courseState === "purchased" &&
                                <Link href="#" >
                                  <a className="text-indigo-600 hover:text-indigo-900">
                                    Waiting for Activation
                                  </a>
                                </Link>
                                }
                
                            </> :                        */}

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.coindesk.com/layer2/2022/08/03/who-will-mine-ethereum-after-its-gone/"
                        className="text-green-600 hover:text-green-900"
                      >
                        Read now
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={
                                locked
                                  ? `bg-green-100 text-green-800 ${statusClass}`
                                  : `bg-green-100 text-green-800 ${statusClass}`
                              }
                            >
                              {locked ? 'Featured' : 'Featured'}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-white">
                            Messari Crypto Fundraising Report Q1 2022
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* {
                            isLoading ? 
                            <Loader/>
                            :
                            locked ?
                            <>
                                { courseState === "deactivated" &&
                                <Link href="/subscribe" > 
                                  <a className="text-red-600 hover:text-red-900">
                                    Get Access
                                  </a>
                                </Link>
                                }
                                { courseState === "purchased" &&
                                <Link href="#" >
                                  <a className="text-indigo-600 hover:text-indigo-900">
                                    Waiting for Activation
                                  </a>
                                </Link>
                                }
                
                            </> :                        */}

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://messari.io/report/h1-2022-crypto-fundraising-report-dove-metrics-x-messari"
                        className="text-green-600 hover:text-green-900"
                      >
                        Read now
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={
                                locked
                                  ? `bg-green-100 text-green-800 ${statusClass}`
                                  : `bg-green-100 text-green-800 ${statusClass}`
                              }
                            >
                              {locked ? 'Featured' : 'Featured'}
                            </span>
                          </div>
                          <div className="text-sm font-medium text-white">
                            Aptos Vs Solana
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* {
                            isLoading ? 
                            <Loader/>
                            :
                            locked ?
                            <>
                                { courseState === "deactivated" &&
                                <Link href="/subscribe" > 
                                  <a className="text-red-600 hover:text-red-900">
                                    Get Access
                                  </a>
                                </Link>
                                }
                                { courseState === "purchased" &&
                                <Link href="#" >
                                  <a className="text-indigo-600 hover:text-indigo-900">
                                    Waiting for Activation
                                  </a>
                                </Link>
                                }
                
                            </> :                        */}

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="hhttps://defieducation.substack.com/p/aptos-solana-20-or-something-more?utm_source=%2Fprofile%2F39850567-defi-education&utm_medium=reader2"
                        className="text-green-600 hover:text-green-900"
                      >
                        Read now
                      </a>
                    </div>
                  </div>
                  )
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
