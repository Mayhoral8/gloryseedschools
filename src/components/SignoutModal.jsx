"use client";
import React, { useContext } from "react";
import { ContextCreate } from "@/app/context/context";
import { CiSquareInfo } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function SignoutModal() {
  const router = useRouter()
  const { setShowSignOutModal, setModalMsg, showSignOutModal, modalMsg } =
    useContext(ContextCreate);

  const handleClose = () => {
    setShowSignOutModal(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("ResultUrl");
    handleClose();
    router.push("/portals/result/login");
  };

  if (showSignOutModal) {
    return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] z-50 ">
        <div className=" rounded-md  bg-white lg:w-[30%] w-[70%] lg:h-[40%] h-[30%] border flex flex-col justify-between items-center  backdrop-blur-md  py-4">
          <CiSquareInfo className="text-xl" />
          <p className="px-4 text-center">Are you sure you want to sign out?</p>

          <div className="flex flex-row  items-center justify-center gap-x-2">
            <button
              className="rounded-md px-2 h-8 w-20 border border-gray-950 text-black"
              onClick={handleLogout}
            >
              Yes
            </button>

            <button
              className="rounded-md px-2 h-8 w-20 bg-black text-white"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
