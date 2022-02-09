import { BaseLayout } from "@components/ui/layout"


const Contact = () => {
    return(
        <div className="bg-black  px-4 py-2 text-white
        xxs:h-[95vh]
        xs:h-[90vh]
        sm:h-[100vh]
        md:h-[70vh]
        lg:h-[115vh]
        xl:h-[100vh]
        2xl:h-[85vh]
        ">
            <h1 className="text-3xl text-center mb-4
            sm:text-4xl sm:mb-6 sm:mt-8 
            md:text-5xl
            xl:mt-0
            2xl:mt-10
             ">Contact Information</h1>
                <div className="sm:text-lg
                md:text-2xl md:text-center
                ">
                <h4 className="indent-5 mb-2
                md:mb-6
                ">Ashley Capital & DeFi is a big proponent and believer of personal privacy, especially in the digital era. </h4>
                <h4 className="mb-2
                sm:mb-4 leading-6
                md:leading-7 md:mb-8
                ">As such, <span className="underline underline-offset-[3px]
                md:underline-offset-[4px]
                ">we do not generally communicate using email</span>. </h4>
                <h4 className="mb-2
                sm:mb-4 leading-6
                md:leading-7 md:mb-8
                ">Our members have access to a members only Telegram chat which is always monitored to make fast communication easy. If a member wishes to correspond using email, they must reach out to an admin in the members only Telegram chat.</h4>
                <h4 className="mb-2
                sm:mb-4 leading-6
                md:leading-7 md:mb-8
                ">For the general public we offer our Twitter feed, Discord chat, and a public Telegram channel which is generally always under moderation as well.</h4>
                <h4 className="mb-2
                sm:mb-4 leading-6
                md:leading-7 md:mb-8
                ">You have a right to privacy and not only do we respect that, we encourage it. Your data is your own.</h4>
                <h4 className="mb-5
                xl:mb-2
                ">Rest assured however that while this new age brings new ways of doing things, we will always be here when you need us.</h4>
                </div>
            <h2 className="ml-10
            md:text-xl
            2xl:ml-32 2xl:mt-6
            "> - <i>Ashley Capital & DeFi</i></h2>
        </div>
    )
}


export default Contact

Contact.Layout = BaseLayout