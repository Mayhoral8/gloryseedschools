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
      <div className=" top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.61)] z-40 fixed ">
      <div className=" rounded-md  bg-white lg:w-[30%] lg:h-32 w-[70%] h-40 border flex flex-col justify-center items-center gap-y-4 backdrop-blur-md  ">
        <CiSquareInfo/>
        <p className="px-4">{modalMsg}</p>

        <button className="rounded-md px-2 h-8 bg-black text-white" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
}
