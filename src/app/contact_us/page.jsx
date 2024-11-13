import React from "react";
import Image from "next/image";
import image from "../../assets/contactUs/contact-us.png";
import mobileImage from "../../assets/contactUs/contact-us-mobile.png";

const ContactUs = () => {
  return (
    <div className="mt-20 mb-20">
      <Image src={image} alt="gloryseed school contact us page" className="h-72 lg:block hidden"/>
      <Image src={mobileImage} alt="gloryseed school contact page lg:hidden" className="lg:hidden block"/>
      <section className="flex lg:flex-row justify-center items-center flex-col lg:w-[50%] w-[90%] mx-auto lg:gap-x-4 gap-y-4 lg:gap-y-0">
        <article className="border shadow-sm lg:w-[50%] w-full h-40 flex flex-col items-center justify-center text-center mt-10 lg:mt-0">
          <h2>Our Address</h2>
          <div>
            <p className="px-2">
              Olorunsogo Bus Stop, Ganmo, Beside St. William Catholic Church,
              Ifelodun LGA, Kwara State, Nigeria.
            </p>
          </div>
        </article>

        <article className="border shadow-sm lg:w-[50%] w-[90%]  h-40 flex flex-col items-center justify-center text-center">
          <h2>Phone numbers & Email address</h2>

          <div>
            <li>+234 803 397 6803</li>
            <li>+234 803 721 1007</li>
            <li>gloryseedschools@gmail.com</li>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContactUs;
