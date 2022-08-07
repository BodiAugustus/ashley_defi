import Image from 'next/image';
import { MdDoNotDisturb } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import header2 from '../../public/images/ashley-defi-header-2.jpg';
import header4 from '../../public/images/ashley-defi-pic-4.jpg';
import header3 from '../../public/images/ashley-defi-pic-5.jpg';
import header5 from '../../public/images/ashley-defi-pic-22.jpg';
import header1 from '../../public/images/ashley-defi-pic-1.jpg';
import header6 from '../../public/images/ashley-defi-pic-3.jpg';

const Main = () => {
  return (
    <div
      className="h-[100vh] bg-black text-white text-center
      
        xl:h-[110vh]
        "
    >
      <h2
        className="text-4xl pt-4 mb-2
            md:text-5xl md:mb-3
            lg:text-4xl lg:mb-2
            xl:text-4xl xl:mb-2
            2xl:mb-3
            "
      >
        <span className="text-red-500">Stop</span> Taking the Bait
      </h2>
      <div
        className="bg-[#2b2b2b] w-[90%] h-[89%] mx-auto grid grid-cols-2 gap-2 grid-rows-3 p-2 rounded-lg white-glassmorphism
            xl:h-[90vh]
            "
      >
        <div className="border-4 border-black rounded-lg col-span-2 white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header2}
              layout="fill"
              alt="Venice, Italy"
              className="relative brightness-50 rounded-xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-4 text-xl 
                    xxs:text-lg
                    xs:text-xl
                    sm:text-2xl sm:w-[90%] sm:left-[5%] sm:mt-6
                    md:text-3xl md:mt-10
                    lg:text-xl lg:mt-3 lg:w-[60%] lg:left-[20%] lg:leading-5
                    xl:text-2xl xl:w-[70%] xl:left-[15%]
                    2xl:mt-6
                    "
            >
              A <span className="text-yellow-400">new</span> financial era
              requires <span className="text-yellow-400">new</span> financial
              experts.
            </h2>
            <h2
              className="absolute top-[40%] w-[80%] left-[10%] mt-4 
                    text-lg 
                    xxs:text-lg
                    xs:text-lg
                    sm:text-xl sm:mt-6
                    md:text-2xl md:mt-8 md:w-[60%] md:left-[20%]
                    lg:text-lg lg:mt-4 lg:leading-tight lg:w-[80%] lg:left-[9%]
                    xl:text-2xl xl:mt-5
                    2xl:mt-7
                    "
            >
              The old ways of doing things <i>just doesn&apos;t work anymore</i>
              .
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header4}
              layout="fill"
              alt="Stockbrokers arguing about crypto"
              className="relative brightness-50 rounded-xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-4 text-xl 
                    xxs:text-lg
                    xs:text-xl
                    sm:text-2xl sm:w-[90%] sm:left-[6%] sm:mt-8
                    md:text-3xl md:mt-14
                    lg:text-lg lg:-mt-0 lg:leading-2
                    xl:text-2xl xl:mt-1
                    2xl:mt-6
                    "
            >
              Stock brokers{' '}
              <span className="text-red-600 text-4xl r-[20%]">
                <MdDoNotDisturb
                  className="mx-auto mt-3
                    md:text-5xl
                    lg:text-5xl lg:-mb-1
                    "
                />{' '}
              </span>{' '}
              know DeFi.
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header6}
              layout="fill"
              alt="Clueless hedgefund manager"
              className="relative brightness-50 rounded-xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
                    xxs:text-lg
                    xs:text-xl
                    sm:text-2xl sm:mt-10
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:leading-6 lg:mt-8
                    xl:text-2xl xl:mt-5 xl:leading-relaxed
                    2xl:mt-14
                    "
            >
              Hedge fund managers don&apos;t{' '}
              <u className="underline-offset-2 text-green-400">use</u> crypto.
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-lg white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header5}
              layout="fill"
              alt="Regretful and depressed lady."
              className="relative brightness-50 rounded-xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
                    xxs:text-lg
                    xs:text-xl
                    sm:text-2xl sm:mt-10
                    md:text-3xl md:mt-16 md:leading-relaxed
                    lg:text-xl lg:mt-7 lg:leading-5
                    xl:text-2xl xl:mt-5
                    2xl:mt-12
                    "
            >
              Influencers influence poorly.
              <AiFillTwitterCircle
                className="mx-auto text-4xl fill-blue-400
                        sm:mt-2
                        md:text-6xl
                        lg:text-5xl
                        "
              />
              <hr
                className="border-red-500 border-2 w-[35%] absolute rotate-45 left-10 bottom-4 
                    sm:w-[30%] sm:left-12
                    md:left-[35%] md:bottom-[16%]
                    lg:bottom-[20%]
                    xl:bottom-[18%] xl:left-[36%]
                    "
              />
            </h2>
          </div>
        </div>

        <div className="border-4  border-black rounded-xl white-glassmorphism">
          <div className="relative h-full">
            <Image
              src={header1}
              layout="fill"
              sizes="300px"
              alt="Roulette wheel"
              className="relative brightness-50 rounded-xl"
            />
            <h2
              className="absolute w-[80%] left-[10%] mt-8 text-xl 
                    xxs:text-lg
                    xs:text-xl
                    sm:text-2xl sm:mt-10
                    md:text-3xl md:leading-relaxed md:mt-16
                    lg:text-xl lg:mt-7
                    xl:text-2xl xl:leading-relaxed xl:mt-7
                    2xl:mt-14
                    "
            >
              Your gut&apos;s <span className="tracking-wider">FOMO</span> only
              leads to losses.
            </h2>
          </div>
        </div>

        <div className="border-4  col-span-2 border-black rounded-xl white-glassmorphism">
          <h2
            className="text-2xl 
                sm:w-[90%] sm:mx-auto
                md:text-4xl md:w-[97%] md:p-2
                lg:text-2xl
                xl:text-2xl
                "
          >
            So why do you keep listening to them?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
