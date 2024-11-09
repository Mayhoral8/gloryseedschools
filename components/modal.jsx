import React from "react";
import { PiSpinnerGapBold } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { CiSquareInfo } from "react-icons/ci";

export default function Modal({setshowModal}) {

  const handleClose = ()=>{
    setshowModal(false)
  }
  return (
    <div className=" top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full   z-40 fixed ">
      <div className="bg-white w-44 h-32 border flex flex-col justify-center items-center gap-y-4">
        <CiSquareInfo/>
        <p className="px-4">Your result is not ready, please check back again soon</p>

        <button className="rounded-md px-2 h-8 bg-black text-white" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
