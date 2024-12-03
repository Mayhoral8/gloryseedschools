'use client'
import {createContext, useRef, useState} from 'react'


interface ContextTypes {
    ref1: React.RefObject<HTMLDivElement>
    ref2: React.RefObject<HTMLDivElement>
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setModalMsg: React.Dispatch<React.SetStateAction<string>>
    showSignOutModal: boolean
    setShowSignOutModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
    modalMsg: string
  }
  
export const ContextCreate = createContext({} as ContextTypes)
const ContextComp: React.FC<{ children: React.ReactNode }> = (props) => {

    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)
    const [showModal, setShowModal] = useState(false)
    const [showSignOutModal, setShowSignOutModal] = useState(false)
    const [modalMsg, setModalMsg] = useState("")

  return (
    <ContextCreate.Provider
         value ={{
          ref1,
          ref2,
          showModal,
          setShowModal,
          modalMsg,
          setModalMsg,
          showSignOutModal,
          setShowSignOutModal
      
        }}>
  {props.children}
    </ContextCreate.Provider>
  )
}

export  {ContextComp}