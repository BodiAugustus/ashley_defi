import { useState } from "react"

// const TYPES = {
//   success: "green",
//   warning: "yellow",
//   danger: "blue",
// }

const BG_CLASSES = {
  success: "bg-indigo-600",
  warning: "bg-yellow-400",
  danger: "bg-red-400",
}

const TEXT_CLASSES = {
  success: "text-white",
  warning: "text-white",
  danger: "text-red-900",
}

const SIZES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}


export default function Message({children, type = "success", size = "md"}) { //children is the text being pased in
  const [isDisplayed, setIsDisplayed] = useState(true)

  if (!isDisplayed) { return null }


  const messageSizeClass = SIZES[size]

  return (
    <div className={`${BG_CLASSES[type]} rounded-xl  mt-5 xl:mt-10 xl:`}>
      <div className="max-w-5xl mx-auto py-2 px-1">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <div className={`ml-3 ${messageSizeClass} font-medium ${TEXT_CLASSES[type]}`}>
              <span className=" inline">
                { children }
              </span>
            </div>
          </div>
          <div className="order-2 flex-shrink-0 
          sm:order-3 sm:ml-3">
            <button
              onClick={() => setIsDisplayed(false)}
              type="button"
              className="-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <svg className={`h-6 w-6 ${TEXT_CLASSES[type]}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}