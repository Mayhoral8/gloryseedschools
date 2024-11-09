"use client";
import React, { useState } from "react";
import supabase from "@/services/supabase";
import Loader from "../../../../components/loader";
import Modal from "../../../../components/modal"
import Image from "next/image";
import image from "@/assets/portal/results.png";
import { useRouter } from "next/navigation"; // use 'next/navigation' for the latest Next.js version

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
  
      setIsLoading(true);

      // Fetch student data
      const { data: student, error } = await supabase
        .from("Students")
        .select('NAME') // Use backticks if you still encounter any issues with the column names
        .eq("USER ID", userId);

      if (error || !student || student.length === 0) {
        console.error("Authentication error:", error || "Student not found");
        setIsLoading(false);
        return;
      }else{
        console.log(student);
        localStorage.setItem("authData", student[0].NAME)
        
          // Student[0]

      // Retrieve file URL from storage bucket
      try {
        const updatedUserId = userId.replaceAll("/", "_")
        const { data, error } = await supabase.storage
          .from("Results")
          .download(`${updatedUserId}.docx`);
      
        if (error) {
          // Handle the case where the file does not exist
          console.log("File not found:", error);
          router.push("/portals/result");
         
        } else {
          // If the file exists, generate the public URL and proceed with download
          const { data } = supabase.storage
            .from("Results")
            .getPublicUrl(`${updatedUserId}.docx`);
            const fileUrl = data.publicUrl;
        localStorage.setItem("ResultUrl", fileUrl);
        
        router.push("/portals/result");


      
          // Open the URL in a new tab or trigger download
          // window.open(publicUrl, '_blank');
        }
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.error("Error downloading file:", err);
      }
    }


    }
  

  const handleUserId = (e:any) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const handlePassword = (e:any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  
  
  // You can now use this URL to download the file


 if (isLoading === true) {

  return <>
  <div className='h-screen'>
    <Loader/>
  </div>
  </>
 }
 
  if(!localStorage.getItem("authData")){
  return (
    <section className=' h-screen'>
      <Image
        src={image}
        alt="Gloryseed school results page"
        className="mt-16"
      />
      
     
      <article className=' items-center justify-center text-center flex flex-col lg:w-[50%] w-[80%] mx-auto gap-y-6 '>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>User Id</label>
          <input value={userId} onChange={handleUserId} className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <div className='flex flex-col gap-y-2 w-full items-center justify-center '>
          <label className='w-[70%] text-left'>Password</label>
          <input value={password} onChange={handlePassword} className='bg-[#dfdfdf] border rounded-md w-[70%]  h-10 px-2 focus:outline-none'/>
        </div>
        <button onClick={login} className='rounded-2xl mt-4 h-10 bg-black  w-[70%] text-white block mx-auto'>Login</button>
        </article>
        </section>
  )
}else{
  router.push("/portals/result")
}
}

export default Login