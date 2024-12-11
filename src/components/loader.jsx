"use client"

import React, { useContext } from "react";
import { ContextCreate } from "@/app/context/context";
import { PiSpinnerGapBold } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";

export default function Loader() {
  const { isLoading, setIsLoading } = useContext(ContextCreate);

  if (isLoading) {
    return (
      <div className="top-0 left-0 right-0 bottom-0 flex items-center justify-center  bg-[rgba(0,0,0,0.36)]  z-40 fixed ">
        <CgSpinner className=" text-4xl animate-spin text-[#ECD337] " />
      </div>
    );
  }else{
    return null
  }
}
