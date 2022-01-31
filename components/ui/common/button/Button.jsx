

const Button = ({
    children // Contains display text and events
    ,className,
    variant = "blue",
    hoverable = true,
    ...rest
}) => {

    const variants = {
        blue: `text-white bg-blue-600 shadow-blue-600/75 ${hoverable && "hover:bg-indigo-700"}`,
        red: `text-white bg-red-600 shadow-red-600/75  ${hoverable && "hover:bg-red-700"}`
    }
    return(
        <button
            {...rest} // Includes onClick and other events
            className={`disabled:opacity-50 disabled:cursor-not-allowed w-[40%] p-2 rounded-lg ml-5  shadow-2xl  mt-3 sm:-mt-2                
            md:w-[27%] md:absolute md:left-[10.5%] md:top-[37%] md:text-2xl 
            lg:top-[30%] lg:w-[20%] lg:left-[37%]
            xl:w-[17%] xl:left-[40%] ${className} ${variants[variant]}`}>
            {children}
        </button>
    )
}

export default Button