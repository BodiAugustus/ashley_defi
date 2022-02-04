

const Button = ({
    children // Contains display text and events
    ,className,
    variant = "blue",
    hoverable = true,
    ...rest
}) => {

    const variants = {
        white: `text-black bg-white `,
        blue: `text-white bg-blue-600 shadow-blue-600/75 ${hoverable && "hover:bg-indigo-700"}`,
        red: `text-red-200 bg-red-600 shadow-red-600/75 ${hoverable && "hover:bg-red-300 hover:text-red-700"}`,
        purple: `text-purple-700 bg-indigo-200 shadow-indigo-600/75  ${hoverable && "hover:bg-indigo-700"}`,
        green: `text-green-200 bg-green-700 shadow-green-600/75  ${hoverable && "hover:bg-green-200 hover:text-green-700"}`,

    }
    return(
        <button
            {...rest} // Includes onClick and other events
            className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-2xl p-2            
              
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