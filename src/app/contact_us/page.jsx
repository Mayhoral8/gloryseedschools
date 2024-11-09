import React from "react";
import Image from "next/image";
import image from "../../assets/contactUs/contact-us.png";

const ContactUs = () => {
  return (
    <div className="mt-20">
      <Image src={image} alt="gloryseed school contact us page" />
      <section className="flex lg:flex-row justify-center items-center flex-col w-[50%] mx-auto lg:gap-x-4 gap-y-4 lg:gap-y-0">
        <article className="border shadow-sm lg:w-[50%] w-[90%] h-40 flex-col items-center justify-center text-center">
          <h2>Our Address</h2>
          <div>
            <p>
              Olorunsogo Bus Stop, Ganmo, Beside St. William Catholic Church,
              Ifelodun LGA, Kwara State, Nigeria.
            </p>
          </div>
        </article>

        <article className="border shadow-sm lg:w-[50%] w-[90%]  h-40 flex-col items-center justify-center text-center">
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
