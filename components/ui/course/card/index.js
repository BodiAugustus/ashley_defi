import Image from 'next/image'
import Link from 'next/link'


export default function Card({course, Footer}) {
    return (

        <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex h-full"> {/* This is the flex element containing the two children with flex-1 properties - but we dont want that - so we use flex-1 and flex-2 which means flex-2 takes 66% of availavle div. */}
            <div className="flex-1 h-full next-image-wrapper"> {/*flex-1 and flex-1 makes each half of the card try to be the same size - fills in the picture though Tailwinds has no flex-2 class so has to be extended in tailwind.config****/}
            <Image 
            className="object-cover" 
            src={course.coverImage} 
            layout='responsive'
            width="200"
            height="230"
            alt={course.title} 
            />
            </div>
            <div className="p-8 pb-4 flex-2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {course.type}
            </div>
            <Link 
            href={`/courses/${course.slug}`} >
            <a                 
            className="h-12 block mt-1 text-lg leading-tight font-medium text-black hover:underline">{course.title}</a>
            </Link>
            <p className="mt-2 text-gray-500">{course.description.substring(0, 70)}...</p>
            { Footer && 
                <Footer/>
            }
            </div>
        </div>
    </div>

    )
  }