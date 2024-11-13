"use client";
import Image from "next/image";
import Slideshow from "../../components/slideshow";
import image1 from "@/assets/landingPage/images_1/image-1.png";
import image2 from "@/assets/landingPage/images_1/image-2.png";
import image3 from "@/assets/landingPage/images_1/image-3.png";
import image4 from "@/assets/landingPage/images_1/image-4.png";
import image5 from "@/assets/landingPage/images_1/image-5.png";
import portals from "@/assets/landingPage/portals.png";
import header_img from "@/assets/landingPage/header-img.png"
import Link from "next/link";


import hero_image_1 from "@/assets/landingPage/hero-images/hero-image-1.png"
import hero_image_2 from "@/assets/landingPage/hero-images/hero-image-2.png"
import mobile_slide_image_1 from "@/assets/landingPage/mobile-slide-images-1/image-1.png";
import mobile_slide_image_2 from "@/assets/landingPage/mobile-slide-images-1/image-2.png";
import mobile_slide_image_3 from "@/assets/landingPage/mobile-slide-images-1/image-3.png";

import unique_image_1 from "@/assets/landingPage/unique-image-1.png";
import unique_image_2 from "@/assets/landingPage/unique-image-2.png";
import unique_image_3 from "@/assets/landingPage/unique-image-3.png";


export default function Home() {
  const images_1 = [image1, image2, image3, image4, image5];
  const mobile_slide_images_1 = [
    mobile_slide_image_1,
    mobile_slide_image_2,
    mobile_slide_image_3,
  ];

  const slideshowElement1 = () => {
    return (
      <div className="flex flex-col text-center items-center justify-center px-12 gap-y-8 my-auto top-0 bottom-0 border-green-500">
        <div className="flex flex-col text-4xl">
          <span className="font-bold text-[#ECD337]">
            A Learning Citadel Where Every Learner
          </span>
          <span className="text-white">is Important and Thrives</span>
        </div>
        <Link href="/about_us">
        <button className="w-40 h-10 bg-[#ECD337] text-lg text-gray-900 rounded-3xl">
          Find out more
        </button>
        </Link>
      </div>
    );
  };
  return (
    <main className="mt-16">
      <section className=" lg:hidden h-96 flex flex-col items-center justify-center">
        <Slideshow
          images={mobile_slide_images_1}
          interval={4000}
          innerElement={slideshowElement1()}
          imagePosition="cover"
        />
      </section>
      <section className="lg:grid grid-cols-2 mt-20 px-24 hidden">
        <article className="flex flex-col gap-y-10">
          <div className="flex flex-col text-6xl">
        <span className="font-bold text-[#AA7529]">
            A Learning <br/>
            Citadel Where <br/>
            Every Learner
          </span>
          <span className="text-gray-950">is Important <br/> and Thrives</span>
          </div>
          <p>
            Welcome to Gloryseed Schools, a nurturing and dynamic environment where young minds begin their educational journey. At our School, we provide a strong foundation in academic and social skills, fostering creativity, curiosity, and a love for learning.

          </p>
          <Link href="/about_us">
          <button className="w-40 h-10 bg-[#ECD337] text-lg text-gray-900 rounded-3xl">
          Find out more
        </button>
          </Link>
        </article>

        <article className="flex flex-col gap-y-4">
          <div className="flex flex-row gap-x-2">
            <div>
              <Image src={hero_image_1} alt="cultural-day" />
            </div>
            <div>
              <Image src={hero_image_2} alt="cultural-day" />
            </div>
          </div>
          <div>
            <Image src={header_img} alt="quiz-competition" height={50} width={600}/>
          </div>
        </article>
      </section>
      <section className="bg-white lg:hidden font-extralight px-4 text-center  h-min py-4">
        <p>
          Welcome to Gloryseed Schools, a nurturing and dynamic environment
          where young minds begin their educational journey. At our School, we
          provide a strong foundation in academic and social skills, fostering
          creativity, curiosity, and a love for learning.
        </p>
      </section>

      <section
        className="text-white border h-96 justify-center flex items-center gap-y-4 flex-col "
        style={{
          backgroundImage: `url(${portals.src})`,
          backgroundSize: "cover",
        }}
      >
        <h2>Portals</h2>
        <article className="lg:flex-row  flex flex-col justify-center items-center lg:justify-between gap-y-8 lg:gap-y-0">

        <div className="flex text-center lg:text-start items-center flex-col lg:items-start lg:w-[30%] gap-y-4">
          <h2 className="font-bold text-2xl">Assignments</h2>
          <p className="px-6 lg:px-0 font-light">
            Click the check assignments button below to check your child/ward’s
            assignments
          </p>
          <button className="rounded-xl px-2 justify-center flex items-center bg-[#ECD337] w-44 h-8 ">
            Check assignments
          </button>
        </div>
        <div className="flex text-center lg:text-start lg:items-start items-center flex-col  lg:w-[30%] gap-y-4">
          <h2 className="font-bold text-2xl">Results</h2>
          <p className="px-6 lg:px-0 font-light">
            Click the check results button below to check your child/ward’s
            results{" "}
          </p>
          <Link href="/portals">
          <button className="rounded-xl  flex items-center bg-white text-gray-900 w-40 h-8 justify-center">
            Check result
          </button>
          </Link>
        </div>
        </article>
      </section>
      <section className="text-center mt-10">
        <h2>We are unique</h2>
        <div className="lg:grid lg:grid-cols-3 grid-rows-3 w-full lg:h-[600px]">
        <article>
          <Image src={unique_image_1} alt="gloryseed-unique-features" className=" ml-1 lg:ml-0"/>
          <p className="text-center px-4">
            We are equipped with dedicated and supportive staff members and a
            proactive management ensuring our learners enjoy quality educational
            and social experience
          </p>
        </article>
        <article className="">
          <Image src={unique_image_2} alt="gloryseed-unique-features"  className="ml-1 lg:ml-0"/>
          <p className="text-center px-4 ">
            We not only build our learners to be the best in academics but also
            equip them with knowledge of cultural diversity making them
            adaptable anywhere in the world
          </p>
        </article>
        <article>
          <Image src={unique_image_3} alt="gloryseed-unique-features"  className="ml-1 lg:ml-0"/>
          <p className="text-center px-4 h-20">
            Vocational skill is an essential part of the learning process at our
            school and all learners are encouraged to learn a vocation that
            interests them.
          </p>
        </article>
        </div>

      </section>

      <section className="flex flex-col justify-center items-center  text-center bg-[#212121]  mt-10 text-white gap-y-4">
          
        <h2 className="">Admissions</h2>
        <article className="flex flex-col  lg:flex lg:flex-row lg:justify-between  lg:px-20 lg:items-center min-h-max gap-x-2 w-full">

        <div className="flex items-center lg:items-start lg:text-start h-full flex-col justify-center gap-y-4 lg:w-[50%]">
        <p className="text-3xl px-2 font-bold">
          Looking to enrol <br className="hidden lg:block"/> your child/ward in a school <br className="hidden lg:block"/> embodied with uniqueness,
          creativity and academic excellence?
        </p>
        <p className="text-[#ECD337] px-2">
          Gloryseed Schools is not just the best but also the right option for
          your Children/Wards
        </p>

        <Link href="/admissions">
        <button className="w-40 h-10 bg-[#ECD337] text-lg text-gray-900 rounded-3xl ">
          Enroll Now
        </button>
        </Link>
        </div>
        
      <div className="lg:w-[50%] lg:ml-10 h-96 rounded-t-sm lg:border-t-0 mb-10 mt-4 lg:mt-0">
        <Slideshow images={images_1} interval={4000} imagePosition="contain"/>
      </div>

        </article>
      </section>

    </main>
  );
}
