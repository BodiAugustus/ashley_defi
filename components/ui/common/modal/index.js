

const Modal = ({isOpen, children}) => { //children includes the modal cmpnt from common/modal/index.js
    return(
        <section>
        {/* Remove hidden to display it */}
        <div className={`${!isOpen && "hidden"} fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title`}role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 xs:pb-28 sm:mt-20 lg:mt-10 text-center ">
            {
              isOpen && 
            <div className="fixed inset-0 bg-sky-700 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            }
            <span className="sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">{children}</span> {/*the children is the modal component */}


        


          </div>
        </div>
      </section>
    )
}

export default Modal