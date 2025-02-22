import Link from 'next/link';

const Footer = () => {
  let time = new Date();

  return (
    <footer
      className="h-[26vh] flex flex-col justify-center items-center  text-white bg-black pt-8 pb-2
        xxs:h-[33vh]
        xs:h-[34vh]
        sm:h-[35vh]
        lg:h-[52vh]
        xl:relative
        2xl:h-[48vh]"
    >
      <Link href="/" className="transition-all">
        <a
          className="neontext neonP cursor-pointer mb-4 text-5xl
          md:text-7xl
          xl:relative
          
          "
        >
          Ashley DeFi
        </a>
      </Link>
      <div
        className=" w-full text-center mt-8
         "
      >
        <p
          className="bg-black text-sm 
        xxs:relative xxs:top-4
        xs:top-7
        sm:top-12
        md:top-14
        xl:top-12
        2xl:top-20

        
        
        "
        >
          Crypto Consulting & Wealth Management - &#169; {time.getFullYear()}{' '}
        </p>
      </div>

      {/* <span data-text="Sprucey" className="neon_text">
          Sprucey
        </span> */}
    </footer>
  );
};

export default Footer;
