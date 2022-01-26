import Image from "next/image"
import Link from "next/link"

const SalesCard = ({courses}) => {
    return (
        <section className="grid gap-4 mb-5
        md:grid-cols-1
        lg:grid-cols-2
        ">
        { courses.map((course, i) =>
          <div key={course.id}
           className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full">
              <div className="flex h-full">
                <Image 
                className="object-cover" 
                src={course.coverImage} 
                alt={course.title}
                layout="fixed"
                height={285}
                width={200}
                 />
                
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {course.type}
                </div>
                  <Link 
                    href={`/offerings/${course.slug}`}>
                    <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                      {course.title}
                    </a>
                  </Link>
                  <p className="mt-2 text-gray-500">
                    {course.description}
                  </p>
              </div>
            </div>
          </div>
        )}
      </section>
    )
}

export default SalesCard

// Creates an empty [] of undefined items --> Array.from({length: 4}) 
