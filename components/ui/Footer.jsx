import Link from "next/link"

const Footer = () => {
    let time = new Date
   
    return (
        <footer className="h-[31vh] flex flex-col justify-center items-center  text-white bg-black pt-8 pb-2">
        <Link href="/" className="transition-all">
          <a className="neontext neonP cursor-pointer mb-4 text-5xl">Ashley DeFi</a>
        </Link>
        <div className=" w-full text-center mt-8   ">


        <p className='bg-black text-sm '>Crypto Consulting & Wealth Management -	
&#169; {time.getFullYear()} </p>

        </div>
  
  
        {/* <span data-text="Sprucey" className="neon_text">
          Sprucey
        </span> */}
      </footer>
    )
}

export default Footer