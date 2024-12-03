"use client"
import React, {useContext} from "react";
import { ContextCreate } from "@/app/context/context";
import { CiSquareInfo } from "react-icons/ci";

export default function Modal() {
  const {setShowModal, setModalMsg, showModal, modalMsg} = useContext(ContextCreate)

  const handleClose = ()=>{
    setShowModal(false)
  }
  if(showModal){
    return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] z-50 ">
      <div className=" rounded-md  bg-white lg:w-[30%] w-[70%] lg:h-[40%] h-[30%] border flex flex-col justify-between items-center  backdrop-blur-md  py-4">
        <CiSquareInfo/>
        <p className="px-4 text-center">{modalMsg}</p>

        <button className="rounded-md px-2 h-8 bg-black text-white" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
}
