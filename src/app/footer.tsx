import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  const date = new Date()
  
  return (
    <main className='h-20 lg:h-28 flex flex-col lg:flex-row justify-evenly items-center lg:items-end lg:pb-4 mt-10 shadow-md border lg:justify-between lg:px-24'>
      <div className='lg:order-2  flex flex-row items-center justify-center gap-x-3 text-3xl'>
        <FaFacebook className='text-blue-700'/>
        <FaXTwitter className='text-gray-900'/>
        <IoLogoWhatsapp className='text-green-500'/>
        <FaYoutube className='text-red-600'/>
      </div>
      <div className='text-center flex flex-row items-center gap-x-1'>
        <span>
          <FaRegCopyright/>
          </span>
        <span>{date.getFullYear()}</span>
        <span> Gloryseed Schools.</span>
      </div>
    </main>
  )
}

export default Footer