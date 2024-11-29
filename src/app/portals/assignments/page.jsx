import React from "react";
import Image from "next/image";
import mobileImage from "../../../assets/portal/assignment-mobile.png";
import desktopImage from "../../../assets/portal/assignment-desktop.png";
import { RiFile2Line2 } from "react-icons/ri";

const Assignment = () => {
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
      <section className="flex flex-col gap-y-2 lg:gap-y-10 items-center w-full border mt-4">
        <article className="w-full flex flex-col items-center justify-center">
          <div className="bg-[#AA7529] w-[80%] border h-10 text-center text-white flex justify-center items-center lg:text-start lg:justify-start lg:px-2  ">
            WEEK 1
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-x-10 lg:grid-flow-col">
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
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
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
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
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
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
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 4</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>Basic 5</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 1</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 2</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>JS 3</span>
            </div>
            <div className="flex flex-col items-center">
              <RiFile2Line2 className="text-7xl" />
              <span>SS 1</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Assignment;
