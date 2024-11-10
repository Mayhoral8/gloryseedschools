"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../../components/modal";
import Image from "next/image";
import image from "@/assets/portal/results.png";
import { ContextCreate } from "@/app/context/context";
import supabase from "@/services/supabase";

const Results = () => {
  const {setShowModal, modalMsg, setModalMsg} = useContext(ContextCreate);
  const [userName, setUserName] = useState("")
 

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    setUserName(authData.name);
  });

  const downloadResultFunc = (resultUrl)=>{
    const link = document.createElement("a");
    link.href = resultUrl;
    link.download = `${resultUrl.split("/").pop()}`; // Set a default file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  }

  const getResult = async(studentId)=>{
    const { data, error } = await supabase.storage
    .from("Results")
    .download(`${studentId}.docx`);
    if (error) {
      setShowModal(true);
      setModalMsg("File not found please check back soon")
      return
    }
    else {
      const { data } = supabase.storage
        .from("Results")
        .getPublicUrl(`${studentId}.docx`);
      const fileUrl = data.publicUrl;
      downloadResultFunc(fileUrl)
      return
    }
  }

  const downloadResult = () => {
    const resultUrl = localStorage.getItem("ResultUrl");

    if (resultUrl) {
      // Create a temporary anchor element for download
      console.log(resultUrl);

      const link = document.createElement("a");
      link.href = resultUrl;
      link.download = `${resultUrl.split("/").pop()}`; // Set a default file name if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the link element after download
    } else {
      const authData = JSON.parse(localStorage.getItem("authData"))
      const studentId = authData.id
      getResult(studentId)
    }
  };

  return (
    <main className=" h-screen">
   
      <Image
        src={image}
        alt="Gloryseed school results page"
        className="mt-16"
      />
      <div className=" items-center justify-center text-center flex flex-col w-full">
        <div className="flex flex-row text-2xl">
          <h2>Hi, </h2>
          <span className="font-bold">{userName}</span>
        </div>
        <p className="mt-4">
          Congratulations on the successful completion of your terminal
          Examinations and other assessments.
        </p>

        <p>Click the button below to download and check your result</p>

        <button
          onClick={downloadResult}
          className="rounded-2xl mt-4 h-10 bg-black w-[30%] text-white block mx-auto"
        >
          Download
        </button>
      </div>
    </main>
  );
};

export default Results;
