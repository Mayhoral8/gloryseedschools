"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import image from "@/assets/portal/results.png";
import { ContextCreate } from "@/app/context/context";
import supabase from "@/services/supabase";
import mobileImage from "@/assets/portal/result-mobile.png";
import Loader from "@/components/loader";

const Results = () => {
  const { setShowModal, modalMsg, setModalMsg } = useContext(ContextCreate);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    setUserName(authData.name);
  });

  const downloadResultFunc = (resultUrl) => {
    const link = document.createElement("a");
    link.href = resultUrl;
    link.download = `${resultUrl.split("/").pop()}`; // Set a default file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getResult = async (studentId) => {
    const { data, error } = await supabase.storage
      .from("Results")
      .download(`${studentId}.pdf`);
    if (error) {
      setShowModal(true);
      setModalMsg("File not found please check back soon");
      return;
    } else {
      const { data } = supabase.storage
        .from("Results")
        .getPublicUrl(`${studentId}.pdf`);
      const fileUrl = data.publicUrl;
      downloadResultFunc(fileUrl);
      return;
    }
  };

  const downloadResult = () => {
    const resultUrl = localStorage.getItem("ResultUrl");

    if (resultUrl) {
      // Create a temporary anchor element for download

      const link = document.createElement("a");
      link.href = resultUrl;
      link.download = `${resultUrl.split("/").pop()}`; // Set a default file name if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up the link element after download
    } else {
      const authData = JSON.parse(localStorage.getItem("authData"));
      const studentId = authData.id;
      getResult(studentId);
    }
  };
  console.log(userName.length);

  if (userName === "") {
    return <Loader />;
  } else {
    return (
      <main className="min-h-screen flex justify-between flex-col lg:mb-10">
        <Image
          src={image}
          alt="Gloryseed school results page"
          className="mt-16 hidden lg:block"
        />
        <Image
          src={mobileImage}
          alt="Gloryseed school results page"
          className="lg:hidden"
        />
        <div className=" items-center justify-center text-center flex flex-col w-full my-auto gap-y-6">
          <div className="flex flex-col text-lg lg:text-2xl px-2">
            <h2>Hi</h2>
            <span className="font-bold ml-1 mx-auto">{userName}</span>
          </div>
          <div className="flex flex-col lg:w-[40%]">
            <p className="mt-4 px-4 ">
              Congratulations on the successful completion of your terminal
              Examinations and other assessments.
            </p>

            <p>Click the button below to download and check your result</p>
          </div>

          <button
            onClick={downloadResult}
            className="rounded-2xl mt-4 h-10 bg-black w-[30%] text-white block mx-auto"
          >
            Download
          </button>
        </div>
      </main>
    );
  }
};

export default Results;
