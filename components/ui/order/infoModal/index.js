import { ImCross } from 'react-icons/im'
import { useGlobalContext } from '@components/providers/web3/otherContext'

export const InfoModal = () => {
const {closeModal, isModalOpen} = useGlobalContext()
  
    return(
        <div className={`${isModalOpen ? "visible z-10" : "invisible -z-10"} fixed top-0 left-0 w-[100%] h-[100%] bg-[#2b2b2b] grid items-center transition-all `}>
            <div className="bg-black rounded-lg w-[90vw]  max-w-[700px] mx-auto p-2  items-center relative
            xxs:h-[90vh]
            xs:h-[88vh]
            sm:text-lg sm:h-[90vh]
            md:text-xl md:h-[65vh]
            lg:text-base lg:h-[85vh]
            xl:h-[75vh] xl:text-base
            
            ">
               <div className="">
               <h3 className='pt-2 text-lg text-center underline underline-offset-1 mb-4
               sm:text-2xl
               md:text-3xl
               lg:text-2xl
               '>First Time Subscribers:</h3>
                <p className='text-center mb-3'>This is a decentralized web application, or dAPP, and as such, we utilize cryptocurrency as our method of payment. We <span className='underline underline-offset-1'>DO NOT</span> accept creditcards for membership.</p>
               </div>
               <div className="mb-3">
               <h3 className='text-center
               md:mb-2
               '>In Order to Subscribe:</h3>
                <p>1)You must have MetaMask installed.</p>
                <p>2) You must have MetaMask connected.</p>
                <p>3) You must be on the <strong>Fantom Network</strong> to subscribe and use the members only area.</p>
                <p>4) We only accept FTM as payment.</p>
               </div>
                <div className="mb-5">                   
                <p className='text-center mb-5'>Not sure what to do? <strong>Don&apos;t worry!</strong> </p>
                <p className='mb-5'>Please click <a className='underline underline-offset-1'>here</a> to watch a short tutorial on how to sign in and access the members only area.</p>
                <p className='mb-2'>If you still need any help afterwards, click this <a href="https://discord.com/channels/939647986856767570/939649124054212619"
                target="_blank"
                rel="noreferrer"
                className='underline underline-offset-1'>link</a> and ask for help in the chat to be assisted further.</p>
                <p>See you soon!</p>
                </div>
                <h4>- <i>Ashley Capital & DeFi</i></h4>
                <button 
                onClick={closeModal}
                className="absolute top-2 right-2 text-lg bg-transparent text-red-500 cursor-pointer">
                    <ImCross/>
                </button>
            </div>
        </div>
    )
  }

  export default InfoModal