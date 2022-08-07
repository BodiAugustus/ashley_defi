import Image from 'next/image';
import header1 from '../../public/images/ashley-defi-header1.jpg';

const Info = () => {
  return (
    <div
      className="bg-black text-white 
        xxs:h-[90vh]
        xs:h-[95vh]
        xp:h-[82vh]
        sm:h-[125vh] 
        xl:h-[105vh]
        "
    >
      <h2
        className="text-center text-4xl pt-4 mb-1
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3
            "
      >
        <span className="text-yellow-400">Enter</span> Ashley DeFi
      </h2>
      <div
        className=" w-[90vw] bg-[#2b2b2b] mx-auto border-2 rounded-xl border-stone-500 grid grid-cols-1 grid-rows-4
            xxs:h-[80vh]
            xs:h-[84vh]
            xp:h-[73vh]
            sm:h-[113vh]
            lg:w-[45vw] lg:h-[89vh] 
            xl:h-[90vh]
            "
      >
        <div className="col-span-2 row-span-1 relative rounded-md border-b-2 border-b-stone-500">
          <Image
            src={header1}
            layout="fill"
            alt="An ocean sunrise."
            className="relative brightness-100 rounded-xl "
          />
        </div>
        <div
          className="col-span-2 row-span-3 rounded-xl px-4 font-light  pb-2
        xxs:pt-4
        md:pt-2"
        >
          <div
            className="bg-black rounded-lg -mt-0 border-2 border-stone-500 
                xxs:p-1 xxs:mb-2
                sm:text-xl sm:p-4
                md:text-3xl md:p-8
                lg:text-xl lg:p-3 lg:mt-2
                xl:text-lg xl:p-3 xl:mt-1
                2xl:text-2xl 2xl:p-5
                "
          >
            <h2
              className="indent-4
                    xxs:px-2
                    md:indent-8 
                    lg:leading-6
                    xl:leading-7
                    2xl:leading-8
                    "
            >
              Ashley Capital & DeFi was created by{' '}
              <a
                className="cursor-pointer"
                href="https://www.bodiaugustus.com/"
                target="_blank"
                rel="noreferrer"
              >
                <b>Bodi Augustus</b>
              </a>
              , a web3 and blockchain developer who has been working in the
              crypto space since 2017.{' '}
            </h2>
            <br />
            <blockquote
              className="
              indent-4
              xxs:px-2
              md:indent-8 
                    lg:leading-6
                    xl:leading-7
                    2xl:leading-8"
            >
              Our aim is to bridge the knowledge gap between the general public
              and those who code on the blockchains and interact with its
              protocols daily.
            </blockquote>
            <br />
            <h2></h2>
          </div>
          <div
            className="bg-black rounded-lg  border-2 border-stone-500 
                sm:text-xl sm:p-4 sm:mt-5
                md:text-3xl md:p-8
                lg:text-xl lg:p-3 lg:leading-7
                xl:text-lg xl:p-3 xl:leading-6 xl:mt-2
                2xl:text-2xl 2xl:p-5
                "
          >
            <h2
              className="indent-4
              xxs:px-2 xxs:pt-2

                    md:indent-8 md:pt-0
                    xl:leading-8"
            >
              We do not tell you what to think, we show you how to know.
              Understanding and using the technology is paramount for long-term
              successful DeFi investing.
            </h2>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
