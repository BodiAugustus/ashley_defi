

const Modal = ({isOpen, children}) => { //children includes the modal cmpnt from common/modal/index.js
    return(
        <section>
        {/* Remove hidden to display it */}
        <div className={`${!isOpen && "hidden"} absolute z-10 inset-0 overflow-y-auto top-[35%]
     
        
        " aria-labelledby="modal-title`}role="dialog" aria-modal="true">
          <div className="flex items-end justify-center pt-4 px-4 xs:pb-28 sm:mt-10 lg:mt-10 text-center ">
            {
              isOpen && 
            <div className="fixed inset-0 bg-sky-700 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            }
            <span className="sm:inline-block sm:align-middle " aria-hidden="true">{children}</span> {/*the children is the modal component */}


        


          </div>
        </div>
      </section>
    )
}

export default Modal