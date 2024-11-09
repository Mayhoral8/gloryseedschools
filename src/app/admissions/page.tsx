import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import header_img from "@/assets/landingPage/header-img.png"

const Admissions = () => {
  return (
    <main className='mt-20' >
      <div style={{
      backgroundImage: `url(${header_img.src})`,
      backgroundSize: 'cover'
    }} className='w-full h-64 lg:h-96 -z-10 lg:px-20 relative px-4 flex items-center justify-center'>
        <div className='bg-[#AA7529] opacity-50 w-full -inset-0  z-10 absolute flex items-center justify-center rounded-md lg:px-2'>
        </div>
      <h2 className='relative z-20 text-white text-3xl font-bold shadow-md'>Admissions</h2>
      </div>
      <section className='flex flex-col lg:flex-row  mt-4 justify-center mx-auto gap-y-4 lg:gap-y-0 w-full'>
         <article className='w-[70%] lg:w-[20%] mx-auto  '>

        <h2 className='text-center'>Available Classes</h2>
        <div className='bg-[#ECD337] w-full px-4 py-4   rounded-md'>
        <p>We have the following classes available for admissions:</p>
          <li>Crèche/playgroup</li>
          <li>Reception</li>
          <li>Nursery 1&2</li>
          <li>Basic 1-5</li>
          <li>JS1-3</li>
          <li>SS 1-3 (Only SS 1 for now in progress)</li>
        </div>
        </article>

        <article className='w-[70%] lg:w-[20%] mx-auto '>
          <h2 className='text-center'>SSS Classes Division</h2>
        <div className='bg-[#F7F5F5] shadow-md  px-4 py-4  rounded-md'>
      <p>SSS Classes have the following departments:</p>
      <li className='font-light'>Sciences</li>
      <li className='font-light'>Commercial</li>
      <li className='font-light'>Humanities</li>
      <span className='font-semibold'>Practical vocation class </span>
      <p>which covers computer repairs, phone repairs, tailoring and hair dressing.</p>
        </div>
          </article> 
          
      </section>

      <article className='flex flex-col mt-8'>
        <span className='text-center'>Enrol Your Ward</span>
        <div className='flex flex-col gap-y-2 justify-center items-center mt-4'>
        <Link href="/admissions/primary">
        <button className='rounded-3xl px-2 text-sm bg-[#212121] h-10 text-white w-40'>Nursery & Basic class</button>
        </Link>
        <Link href="/admissions/secondary">
        <button className='rounded-3xl border-[#212121] h-10 border w-40'>Secondary</button>
        </Link>
        </div>
      </article>

    </main>
  )
}

export default Admissions