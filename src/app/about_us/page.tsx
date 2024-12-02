import image_1 from "@/assets/landingPage/images_1/image-1.png";
import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { PiRocketThin } from "react-icons/pi";
import { SlDiamond } from "react-icons/sl";

const AboutUs = () => {
  const images = [image_1]
  return (
    <main className="mt-20 mb-20">
      <section className="lg:flex lg:flex-row lg:w-full lg:justify-between lg:px-24">
        <div className="lg:order-2 lg:w-[40%]">
          {/* <Slideshow images={images} interval={5000}/> */}
        <Image src={image_1} alt="about-us" />
        <div className="font-light hidden lg:block">
        <p>
          On the 3rd of February 2015, we got our substantive approval.{" "}
          <span className="font-bold">25th March 2017</span> outstanding academic performance. 5
          pupils sat in for the Federal Scholarship to School of Gifted and
          Talented. A learner came 1st in Kwara State and got the scholarship.
          We also had a scholarship to Tulip International College same year. We
          have taken part in several competitions with outstanding results.
        </p>
        </div>
        <div className=" hidden lg:flex flex-col">
        <span className="font-bold">
        - Mrs. Agboola G.
        </span>
        <span className="italic font-light">(Head of schools)</span>
        </div>
        </div>
      <div className="text-3xl lg:text-5xl text-center lg:text-start lg:w-[40%] ">
        <h1 className="font-bold text-[#AA7529]">Welcome!</h1>
        <p className="text-gray-900 font-light ">
          On behalf of the Board, Management, Staff and PTA, you’re warmly
          welcome to Gloryseed Schools
        </p>
        <div className="hidden lg:flex flex-col text-base font-light text-start mt-10">
      <p>
          Gloryseed Nursery and Basic School officially opened on the 3rd of
          August 2012 with 8 pupils for the summer holiday school with 3 staff.
          At the end of 2012/2013 session, the school's population rose to 35
          with an additional teacher added. It got its provisional approval on
          the 18th of October 2013 and was registered with the Corporate Affairs
          Commission on the 4th of September 2015.
        </p>
        <p>
          The school held its first end of year party in December 2013, first
          excursion to Wonderland and Havilah National Museum May 27th, 2014. It
          had its first graduation in the primary section August 2014 where only
          a pupil, Shukura Yekeen, was graduated to secondary school. July 2015
          5 learners graduated.
        </p>
      </div>
     
      </div>
     
      </section>
      <section className="lg:hidden flex flex-col gap-y-4 mt-6 font-light text-center px-4">
        <p>
          Gloryseed Nursery and Basic School officially opened on the 3rd of
          August 2012 with 8 pupils for the summer holiday school with 3 staff.
          At the end of 2012/2013 session, the school's population rose to 35
          with an additional teacher added. It got its provisional approval on
          the 18th of October 2013 and was registered with the Corporate Affairs
          Commission on the 4th of September 2015.
        </p>
        <p>
          The school held its first end of year party in December 2013, first
          excursion to Wonderland and Havilah National Museum May 27th, 2014. It
          had its first graduation in the primary section August 2014 where only
          a pupil, Shukura Yekeen, was graduated to secondary school. July 2015
          5 learners graduated.
        </p>
        <p>
          On the 3rd of February 2015, we got our substantive approval.{" "}
          <span className="font-bold">25th March 2017</span> outstanding academic performance. 5
          pupils sat in for the Federal Scholarship to School of Gifted and
          Talented. A learner came 1st in Kwara State and got the scholarship.
          We also had a scholarship to Tulip International College same year. We
          have taken part in several competitions with outstanding results.
        </p>
        <div className="flex flex-col">
        <span className="font-bold">
        - Mrs. Agboola G.
        </span>
        <span className="italic font-light">(Head of schools)</span>
        </div>
      </section>

      <section className="bg-[#F7F5F5] text-center mt-6 lg:h-80 lg:flex lg:items-center lg:flex-col lg:justify-center">
        <span className="">Our values</span>
        <article className="flex flex-col lg:flex-row lg:gap-x-10 lg:px-4 items-center justify-center gap-y-10">
          <div className="text-center flex items-center justify-center flex-col gap-y-2 border w-[70%] lg:w-[20%] shadow-md rounded-lg h-64">
            <BsEye className="text-4xl"/>
            <span className="font-bold text-2xl text-[#AA7529] ">VISION</span>
            <p className="font-light px-4">To transform our nation by producing leaders for a sustainable future through an exciting, high quality and holistic education.</p>
          </div>
          <div className="text-center flex items-center justify-center flex-col gap-y-2 border w-[70%] lg:w-[20%] shadow-md rounded-lg h-64">
            <PiRocketThin className="text-4xl"/>
            <span className="font-bold text-2xl text-[#AA7529] ">MISSION</span>
            <p className="font-light px-4">To produce learners who are resilient, respectful, hardworking and ready to take the mantle of leadership in the nearest future.</p>
          </div>
          <div className="text-center flex items-center justify-center flex-col gap-y-2 border w-[70%] lg:w-[20%] shadow-md rounded-lg  h-64">
            <SlDiamond className="text-4xl"/>
            <span className="font-bold text-2xl text-[#AA7529] ">VALUES</span>
            <p className="font-light px-4">Integrity, Diligence, Confidence, Discipline, Togetherness.</p>
          </div>
        </article>

      </section>
    </main>
  );
};

export default AboutUs;
