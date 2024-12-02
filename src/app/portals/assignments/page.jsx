"use client"

import React, {useContext} from "react";
import { ContextCreate } from "@/app/context/context";
import Image from "next/image";
import mobileImage from "../../../assets/portal/assignment-mobile.png";
import desktopImage from "../../../assets/portal/assignment-desktop.png";
import { RiFile2Line2 } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import supabase from "@/services/supabase";

const Assignment = () => {
  const { setShowModal, setModalMsg } = useContext(ContextCreate);
  const date = new Date()
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[date.getMonth()];

  const downloadAssFunc = (resultUrl) => {
    const link = document.createElement("a");
    link.href = resultUrl;
    link.download = `${resultUrl.split("/").pop()}`; // Set a default file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadAssignment = async (currentClass, currentWeek) => {
    console.log(currentClass, currentWeek);
    const { data, error } = await supabase.storage
      .from(`Assignments/${currentClass}/${currentWeek}`)
      .download(`assignment.pdf`);
      console.log(data);
    if (error) {
      setShowModal(true);
      setModalMsg("File not found please check back soon");
      return;
    } else {
      const { data } = supabase.storage
      .from(`Assignments/${currentClass}/${currentWeek}`)
      .getPublicUrl(`assignment.pdf`);
      console.log(data);
      const fileUrl = data.publicUrl;
      downloadAssFunc(fileUrl);
      return;
    }
  };
  return (
    <main className="w-full">
      <Image
        src={desktopImage}
        alt="Gloryseed school results page"
        className="mt-16 hidden lg:block"
      />
      <Image
        src={mobileImage}
        alt="Gloryseed school results page"
        className="lg:hidden"
      />
      <div className="flex gap-x-4 mt-10  items-center justify-center">
      <LuCalendarDays />
      {monthName}, {date.getFullYear()}
      </div>
      <section className="flex flex-col gap-y-2 lg:gap-y-10 items-center w-full border mt-4">
        <article className="w-full flex flex-col items-center justify-center">
          <div className="bg-[#AA7529] w-[80%] border h-10 text-center text-white flex justify-center items-center lg:text-start lg:justify-start lg:px-2  ">
            WEEK 1
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-10 lg:grid-flow-col">
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC1", "WEEK-1")}/>
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC2", "WEEK-1")}/>
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC3", "WEEK-1")}/>
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC4", "WEEK-1")}/>
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC5", "WEEK-1")}/>
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS1", "WEEK-1")}/>
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS1", "WEEK-1")}/>
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS3", "WEEK-1")}/>
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("SS1", "WEEK-1")}/>
              <span>SS 1</span>
            </div>
          </div>
        </article>
        <article className="w-full flex flex-col items-center justify-center">
          <div className="bg-[#AA7529] w-[80%] border h-10 text-center text-white flex justify-center items-center lg:text-start lg:justify-start lg:px-2  ">
            WEEK 2
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-10 lg:grid-flow-col">
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC1", "WEEK-2")}/>
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC2", "WEEK-2")}/>
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC3", "WEEK-2")}/>
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC4", "WEEK-2")}/>
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC5", "WEEK-2")}/>
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS1", "WEEK-2")}/>
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS2", "WEEK-2")}/>
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS3", "WEEK-2")}/>
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("SS1", "WEEK-2")}/>
              <span>SS 1</span>
            </div>
          </div>
        </article>
        <article className="w-full flex flex-col items-center justify-center">
          <div className="bg-[#AA7529] w-[80%] border h-10 text-center text-white flex justify-center items-center lg:text-start lg:justify-start lg:px-2  ">
            WEEK 3
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-10 lg:grid-flow-col">
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC1", "WEEK-3")}/>
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC2", "WEEK-3")}/>
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC3", "WEEK-3")}/>
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC4", "WEEK-3")}/>
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC5", "WEEK-3")}/>
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS1", "WEEK-3")}/>
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS2", "WEEK-3")}/>
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS3", "WEEK-3")}/>
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("SS1", "WEEK-3")}/>
              <span>SS 1</span>
            </div>
          </div>
        </article>
        <article className="w-full flex flex-col items-center justify-center">
          <div className="bg-[#AA7529] w-[80%] border h-10 text-center text-white flex justify-center items-center lg:text-start lg:justify-start lg:px-2">
            WEEK 4
          </div>
          <div className="grid grid-flow-row grid-cols-3 lg:grid-flow-col gap-x-10">
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC1", "WEEK-4")}/>
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC2", "WEEK-4")}/>
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC3", "WEEK-4")}/>
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC4", "WEEK-4")}/>
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("BASIC5", "WEEK-4")}/>
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS1", "WEEK-4")}/>
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS2", "WEEK-4")}/>
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("JS3", "WEEK-4")}/>
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 title="Click to download" className="hover:text-[#AA7529] cursor-pointer text-7xl" onClick={()=>downloadAssignment("SS1", "WEEK-4")}/>
              <span>SS 1</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Assignment;
