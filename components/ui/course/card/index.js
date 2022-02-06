import Image from 'next/image'
import Link from 'next/link'
import { AnimateKeyframes } from "react-simple-animate";

export default function Card({course, Footer, disabled, state}) {
    return (

        <div className="bg-[#2b2b2b] rounded-xl shadow-md overflow-hidden border-2 p-4 mx-auto
        md:max-w-xl">
        <div className="flex h-full"> {/* This is the flex element containing the two children with flex-1 properties - but we dont want that - so we use flex-1 and flex-2 which means flex-2 takes 66% of availavle div. */}
            <div className="flex-1 h-full next-image-wrapper"> {/*flex-1 and flex-1 makes each half of the card try to be the same size - fills in the picture though Tailwinds has no flex-2 class so has to be extended in tailwind.config****/}
            <Image 
            className={`object-cover ${disabled && "filter grayscale"}`} 
            src={course.coverImage} 
            layout='responsive'
            width="200"
            height="230"
            alt={course.title} 
            />
            </div>

            <div className="p-8 pb-4 flex-2">
            <div className='flex items-center'>
            <div className="uppercase mr-2 tracking-wide text-sm text-[#ffe400] font-semibold">
                {course.type}
            </div>
            <div className="mt-1">

            {state === "activated" &&
            <div className='text-xs text-white bg-green-200 p-1 px-3 rounded-full'>
            Activated
            </div>
            }
            {state === "deactivated" &&
            <div  className='text-xs text-white bg-red-200 p-1 px-3 rounded-full'
            >
            Deactivated
            </div>
            }
            {state === "purchased" &&
  
            <AnimateKeyframes
                play
                duration={2.8}
                keyframes={["opacity: .1", "opacity: 1"]}
                iterationCount="infinite"
                >
            <div  className='text-xs text-black bg-yellow-200 p-1 px-3 rounded-full'
            >
            Pending
            </div>
            </AnimateKeyframes>
            }
            </div>
            </div>

            <Link 
            href="subscribe/subscriptions/owned" >
            <a                 
            className="h-12 block mt-1 xs:text-sm md:text-lg leading-tight font-medium text-white hover:underline">{course.title}</a>
            </Link>
            <p className="mt-2 text-white 
            xs:text-sm md:text-base
            ">{course.description.substring(0, 70)}...</p>
            { Footer && 
                <Footer/>
            }
            </div>
        </div>
    </div>

    )
  }