
const SIZE = {
    sm: "p-2 text-base xs:px-4",
    md: "p-3 text-base xs:px-4",
    lg: "p-3 text-lg xs:px-8",
}


const Button = ({
    children // Contains display text and events
    ,className,
    size= "md",
    variant = "blue",
    hoverable = true,
    ...rest
}) => {
    const sizeClass = SIZE[size]
    const variants = {
        white: ` text-black bg-white ${hoverable && "hover:bg-[#ffe400]"} active:scale-90  transition-all `,
        blue: `text-white bg-blue-600 shadow-blue-600/75 ${hoverable && "hover:bg-indigo-700"} active:scale-90  transition-all`,
        red: `text-red-200 bg-red-600 shadow-red-600/75 ${hoverable && "hover:bg-red-300 hover:text-red-700"} active:scale-90  transition-all`,
        purple: `text-sky-400 bg-indigo-700 shadow-indigo-600/75  ${hoverable && "hover:bg-indigo-200 hover:text-purple-700"} active:scale-90  transition-all`,
        green: `text-green-200 bg-green-700 shadow-green-600/75  ${hoverable && "hover:bg-green-200 hover:text-green-700"}
        active:scale-90  transition-all `,

    }
    return(
        <button
            {...rest} // Includes onClick and other events
            className={` ${sizeClass } disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-2xl p-2    active:scale-90    
            2xl:text-3xl     
              
    ${className} ${variants[variant]}`}>
            {children}
        </button>
    )
}

export default Button
//ml-5   mt-3 sm:-mt-2  
//md:w-[27%] md:absolute md:left-[10.5%] md:top-[37%]
//         lg:top-[30%] lg:w-[20%] lg:left-[37%]
//xl:w-[17%] xl:left-[40%]