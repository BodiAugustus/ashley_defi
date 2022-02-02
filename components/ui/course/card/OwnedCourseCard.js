export default function OwnedCourseCard({children, course}) {

  return (
    <div className="bg-white border shadow overflow-hidden sm:rounded-lg mb-3">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {course.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {course.price} ETH
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Course ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             {course.ownedCourseId}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Proof
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             {course.proof}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:px-6">
            {children}
          </div>
        </dl>
      </div>
    </div>
  )
}
  
  
  // import Image from "next/image"
  // import Link from "next/link"
  
  // export default function XCard({course}) {
  //   return (
  //     <div
  //       className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  //       <div className="flex h-full">
  //         <div className="flex h-full">
  //           <Image
  //             className="object-cover"
  //             src={course.coverImage}
  //             layout="fixed"
  //             width="200"
  //             height="230"
  //             alt={course.title}
  //           />
  //         </div>
  //         <div className="p-8">
  //           <div
  //             className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
  //             {course.type}
  //           </div>
  //           <Link href={`/courses/${course.slug}`}>
  //             <a
  //               className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
  //               {course.title}
  //             </a>
  //           </Link>
  //           <p
  //             className="mt-2 text-gray-500">
  //             {course.description}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }