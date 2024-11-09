import React from 'react'
import Image from 'next/image'
import secondary from "@/assets/admissions/secondary.png"
import secondary_desktop from "@/assets/admissions/Secondary-desktop.png"

const Secondary = () => {
  return (
    <main className='mt-16 lg:grid lg:grid-cols-2'>
      <Image
      src={secondary}
      alt="gloryseedschoolsecondary"
      className='lg:hidden'
      />
       <Image
      src={secondary_desktop}
      alt="gloryseedschoolprimary"
      className='lg:block hidden'
      />

      <section>
      <article className='text-center mt-10'>
        <h2 className='text-3xl font-bold'>Admissions</h2>
        <p className='px-6'>Fill the form below on behalf of your child/ward to enrol your ward/child in our school.</p>
        <span>All fields with (*) are required</span>
      </article>

      <article className=' flex flex-col w-full gap-y-6 mt-10'>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Surname *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Other names *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Class *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Age *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Gender *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Parent phone number *</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Science/Arts/commercial</label>
          <select  className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10  px-2 focus:outline-none'>
            <option>Science</option>
            <option>Arts</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Address</label>
          <input className='bg-[#dfdfdf] border rounded-md w-[70%] px-2 focus:outline-none  h-10'/>
        </div>
        <button className='rounded-2xl mt-4 h-10 bg-black  w-[70%] text-white block mx-auto'>Submit</button>
      </article>
      </section>
    </main>
  )
}

export default Secondary