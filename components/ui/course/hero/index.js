import Image from "next/image"


const CourseHero = ({title, description, image, hasOwner}) => {
    return(
        <section>
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-black 
            sm:pb-16 
            md:pb-20 
            lg:max-w-2xl lg:w-full lg:pb-28 
            xl:pb-32">
              <svg className="hidden absolute right-0 inset-y-0 h-full w-48 text-indigo-500 transform translate-x-1/2
              
              lg:block" 
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon 
                className="bg-black"
                points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="relative pt-6 px-4 
              sm:px-6 
              lg:px-8">
              </div>
              <main className="mt-10 mx-auto max-w-7xl px-4 bg-black 
              sm:mt-12 sm:px-6 
              md:mt-16 
              lg:mt-0 lg:px-8 
              xl:mt-0">
                <div className="sm:text-center lg:text-left">
                <div className="text-lg inline-block p-4 py-2 rounded-md font-bold bg-red-300 text-red-700 float-left
                xxs:-mt-10 xxs:mb-10
                lg:hidden ">
                  Current Forecast: Wait / Sell
                </div>
                {hasOwner &&
                <div className="text-lg inline-block p-4 py-2 rounded-full font-bold bg-green-300 text-green-700
                sm:mb-4">
                  Current Member of:
                </div>
                }
                  <h1 className="text-4xl tracking-tight font-extrabold text-white
                  xs:text-5xl 
                  md:text-6xl">
                    <span className="block xl:inline">
                    {title.substring(0, title.length/2)}
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                    {title.substring(title.length / 2)}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-white 
                  
                  sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto 
                  md:mt-5 md:text-2xl 
                  lg:mx-0 lg:text-xl">
                  Welcome and hello friends, members, and fellow DeFi and crypto enthusiast! This month looks to be another exciting and eventful time in the space as Bitcoin and Ethereum continue to move volumes and alt-coins rebound strong off their recent devaluations.
                  </p>
                  <p className="mt-3 text-base text-white 
                  sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl 
                  lg:mx-0">
                  <strong>It look&apos;s like it&apos;s going to be a busy month!</strong>
                  </p>
                  <div className="mt-5 sm:mt-8 
                  xs:w-[70%] xs:mx-auto
                  sm:flex sm:justify-center 
                  lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="https://t.me/+89dQjvU76cwxZGU9" target="_blank"
                      rel="noreferrer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
                      md:py-4 md:text-lg md:px-10">
                        Speak to a Consultant
                      </a>
                    </div>

                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="
          lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image 
            className="h-56 w-full object-cover 
            sm:h-72 
            md:h-96 
            lg:w-full lg:h-full"
            layout="fill" 
            src={image} 
            alt={title} />
          </div>
        </div>
      </section>
    )
}


export default CourseHero