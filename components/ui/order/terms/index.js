const Terms = () => {
  return (
    <div
      className="bg-black h-[100vh] text-white
        xxs:h-[20vh]
        xs:h-[20vh]
        md:h-[20vh]
        
       
        "
    >
      <h1
        className="text-center text-3xl
            xxs:mb-2
            sm:-mt-5
            md:text-4xl
            xl:mb-5
            "
      >
        Good for 30 days
      </h1>
      <div
        className="bg-[#2b2b2b] h-[90vh] mx-3 rounded-lg
            xxs:h-[13vh]
            xs:h-[13vh] 
            sm:h-[14vh]
            md:h-[13vh] md:w-[60%] md:mx-auto
            
            
            "
      >
        <h2
          className="p-3 text-center
                sm:text-lg
                md:text-2xl
                lg:text-xl
                xl:text-2xl
                "
        >
          After 30 days your subscription will automatically end. To regain
          member access, simply resubscribe!
        </h2>
      </div>
    </div>
  );
};

export default Terms;
