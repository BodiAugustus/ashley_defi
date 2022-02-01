

const Button = ({
    children // Contains display text and events
    ,className,
    variant = "blue",
    hoverable = true,
    ...rest
}) => {

    const variants = {
        blue: `text-white bg-blue-600 shadow-blue-600/75 ${hoverable && "hover:bg-indigo-700"}`,
        red: `text-white bg-red-600 shadow-red-600/75  ${hoverable && "hover:bg-red-700"}`,
        purple: `text-white bg-indigo-200 shadow-indigo-600/75  ${hoverable && "hover:bg-indigo-700"}`,
    }
    return(
        <button
            {...rest} // Includes onClick and other events
            className={`disabled:opacity-50 disabled:cursor-not-allowed w-[40%] rounded-lg  p-2   shadow-2xl             
             md:text-2xl 
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