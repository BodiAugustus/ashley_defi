import { useState, useContext, createContext } from "react";


const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(true)

    const closeModal = () => {
        setIsModalOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }

    return <AppContext.Provider value={{isModalOpen, closeModal, openModal}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}