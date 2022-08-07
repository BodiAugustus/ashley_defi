//this is the membership card on subscribe/members page

import Image from 'next/image';
import cat from '../../../../public/images/Nyan-Cat.jpeg';
import Link from 'next/link';
import { AnimateKeyframes } from 'react-simple-animate';

export default function Card({ course, Footer, disabled, state }) {
  return (
    <div
      className="flex-col 
        lg:text-center
        "
    >
      <h1
        className="text-white text-center mb-1
        xxs:text-3xl md:mt-4
        lg:text-4xl  
        2xl:mb-2
        "
      >
        Membership Pass
      </h1>
      <div
        className="bg-[#2b2b2b] rounded-xl shadow-md overflow-hidden border-2 p-4 mx-auto
        xxs:w-[95vw] xs:mb-8
        md:max-w-xl 
        2xl:h-[82vh]
        
        "
      >
        <div className=" ">
          {' '}
          {/* This is the flex element containing the two children with flex-1 properties - but we dont want that - so we use flex-1 and flex-2 which means flex-2 takes 66% of availavle div. */}
          <div
            className="flex-1 h-full next-image-wrapper
            md:h-[30vh]
            xl:h-[38vh]
            
            "
          >
            {' '}
            {/*flex-1 and flex-1 makes each half of the card try to be the same size - fills in the picture though Tailwinds has no flex-2 class so has to be extended in tailwind.config****/}
            <Image
              className={`object-cover ${disabled && 'filter grayscale'}`}
              src={cat}
              layout="responsive"
              width="200"
              height="230"
              alt={course.title}
            />
          </div>
          <div className="p-2 flex-2">
            <div className="flex items-center">
              <div className="uppercase mr-2 tracking-wide text-sm text-sky-400 font-semibold">
                {course.type}
              </div>
              <div className="mt-1">
                {state === 'activated' && (
                  <div className="text-xs text-white bg-green-600 p-1 px-3 rounded-full">
                    Activated
                  </div>
                )}
                {state === 'deactivated' && (
                  <div className="text-xs text-white bg-red-600 p-1 px-3 rounded-full">
                    Deactivated
                  </div>
                )}
                {state === 'purchased' && (
                  <AnimateKeyframes
                    play
                    duration={2.8}
                    keyframes={['opacity: .1', 'opacity: 1']}
                    iterationCount="infinite"
                  >
                    <div className="text-xs text-black bg-yellow-400 p-1 px-3 rounded-full">
                      Pending
                    </div>
                  </AnimateKeyframes>
                )}
              </div>
            </div>

            <Link href="/subscribe/subscriptions/owned">
              <a
                className=" block mt-1 leading-tight font-medium text-white hover:underline 
            xs:text-base xs:mt-2
            md:text-xl
            xl:underline-offset-4
            2xl:mt-4"
              >
                {course.title}
              </a>
            </Link>
            <p
              className="mt-2 text-white 
            xs:text-base xs:leading-5 
            md:text-lg 
            2xl:mt-4 2xl:mb-4
            "
            >
              {course.description}.
            </p>
            {Footer && <Footer />}
          </div>
        </div>
      </div>
    </div>
  );
}
