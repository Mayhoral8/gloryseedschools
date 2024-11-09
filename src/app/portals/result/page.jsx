"use client";
import React, { useState, useEffect } from "react";
import Modal from "../../../../components/modal";
import Image from "next/image";
import image from "@/assets/portal/results.png";

const Results = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const studentName = localStorage.getItem("authData");
    setUserName(studentName);
  });

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
      setShowModal(true);
      console.error("No result URL found in localStorage.");
    }
  };

  return (
    <main className=" h-screen">
      {showModal && <Modal setshowModal={setShowModal} />}
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
