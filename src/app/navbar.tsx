"use client";

import React, { useState, useContext, useReducer, useEffect } from "react";
import { ContextCreate } from "./context/context";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
// import logo from "../../public/navbar/logo.png";
import primaryLogo from "@/assets/navbar/primary-logo.png";
import secondaryLogo from "@/assets/navbar/secondary-logo.png";
import { useRouter } from "next/navigation";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

interface State {
  admissionsIsActive: boolean;
  aboutIsActive: boolean;
  contactIsActive: boolean;
  portalsIsActive: boolean;
}

type Action = {
  type: string;
};

const Navbar = () => {
  const { ref1, ref2 } = useContext(ContextCreate);
  const pathname = usePathname();
  const [openNavBar, setOpenNavBar] = useState<boolean>(false);
  const [showPortalMenu, setShowPortalMenu] = useState<boolean>(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("ResultUrl");
    router.push("/portals/result/login");
  };

  const handleShowPortal = () => {
    setShowPortalMenu(!showPortalMenu);
  };

  const initialState = {
    admissionsIsActive: false,
    aboutIsActive: false,
    contactIsActive: false,
    portalsIsActive: false,
  };
  const reducerFunc = (state: State, action: Action) => {
    switch (action.type) {
      case "ADMISSIONS":
        return {
          ...state,
          admissionsIsActive: true,
          aboutIsActive: false,
          contactIsActive: false,
          portalsIsActive: false,
        };

      case "ABOUT_US":
        return {
          ...state,
          aboutIsActive: true,
          contactIsActive: false,
          admissionsIsActive: false,
          portalsIsActive: false,
        };

      case "CONTACT_US":
        return {
          ...state,
          contactIsActive: true,
          aboutIsActive: false,
          admissionsIsActive: false,
          portalsIsActive: false,
        };

      case "PORTALS":
        return {
          ...state,
          portalsIsActive: true,
          aboutIsActive: false,
          admissionsIsActive: false,
          contactIsActive: false,
        };

      case "DEFAULT":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const navBarHandler = (type: string | undefined) => {
    if (type === "home") {
      setOpenNavBar(false);
      return dispatch({ type: "DEFAULT" });
    } else {
      setOpenNavBar(!openNavBar);
    }

    if (type === "about") {
      return dispatch({ type: "ABOUT_US" });
    } else if (type === "admissions") {
      return dispatch({ type: "ADMISSIONS" });
    } else if (type === "portal") {
      return dispatch({ type: "PORTAL" });
    } else if (type === "contact") {
      return dispatch({ type: "CONTACT_US" });
    }
  };
  useEffect(() => {
    if (pathname === "/admissions") {
      return dispatch({ type: "ADMISSIONS" });
    } else if (pathname === "/contact") {
      return dispatch({ type: "CONTACT_US" });
    } else if (pathname === "/about_us") {
      return dispatch({ type: "ABOUT_US" });
    } else if (pathname === "/portals") {
      return dispatch({ type: "PORTAL" });
    } else if (pathname === "/") {
      return dispatch({ type: "DEFAULT" });
    }
  }, [pathname]);

  return (
    <section
      ref={ref1}
      className="lg:px-24 lg:h-16 lg:items-center pt-2 flex lg:flex-row flex-col fixed top-0 left-0 right-0 z-30 bg-white shadow-md items-center"
    >
      <div className="px-4 lg:px-0 lg:w-1/4 flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-x-2 items-center">
          <Link href="/">
            <Image
              src={primaryLogo}
              width={60}
              height={30}
              className="items-center"
              alt="Zet Foundation Logo"
              onClick={() => navBarHandler("home")}
            />
          </Link>
          <Link href="/">
            <Image
              src={secondaryLogo}
              width={60}
              height={30}
              className="items-center"
              alt="Zet Foundation Logo"
              onClick={() => navBarHandler("home")}
            />
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer text-2xl">
          {openNavBar ? (
            <FaXmark onClick={() => navBarHandler("")} />
          ) : (
            <GiHamburgerMenu onClick={() => navBarHandler("")} />
          )}
        </div>
      </div>

      <div
        className={`${
          openNavBar
            ? "bg-[#AA7529] h-[50vh] px-4 lg:px-0 py-4 lg:py-0 text-gray-950 "
            : " h-0"
        } shadow-md transition-all delay-400 duration-300 lg:h-full lg:shadow-none w-full   lg:text-black lg:bg-white relative`}
      >
        <ul className="flex  lg:px-2  lg:justify-end lg:gap-x-20 lg:items-center gap-y-8 lg:gap-y-0  lg:text-sm flex-col lg:flex-row  h-full relative text-xl">
          <Link href="/about_us" className="">
            <li
              className={`${
                openNavBar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block ${
                state.aboutIsActive && "lg:bg-[#ECD337]  lg:text-gray-950 "
              } text-white lg:text-gray-900 lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 lg:ml-0`}
              onClick={() => navBarHandler("about")}
            >
              About Us
            </li>
          </Link>
          <article>
            <div
              className={`${
                openNavBar ? "visible" : "hidden"
              }  lg:block ${
                state.portalsIsActive && "lg:bg-[#ECD337]  lg:text-gray-950 "
              } text-white lg:text-gray-900 lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 cursor-pointer flex flex-row items-center justify-between`}
              onClick={handleShowPortal}
            >
              <h2>Portal</h2>
              {showPortalMenu ? (
                <RxCaretUp className="text-lg" />
              ) : (
                <RxCaretDown className="text-lg" />
              )}
            </div>
            <AnimatePresence>
              {showPortalMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className={
                    `${!showPortalMenu && "hidden"} flex bg-white h-20 px-2  flex-col gap-y-2 py-1 transition-all lg:absolute lg:bg-white justify-center lg:rounded-md lg:z-20 lg:ml-2 lg:border lg:w-32 lg:text-sm`
                  }
                  onClick={handleShowPortal}
                >
                  <Link href="/portals/assignments">Assignments</Link>
                  <Link href="/portals/result">Result</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </article>

          <Link href="/admissions" className="">
            <li
              className={`${
                openNavBar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block ${
                state.admissionsIsActive && "lg:bg-[#ECD337]  lg:text-gray-950"
              } lg:text-gray-900 text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300`}
              onClick={() => navBarHandler("admissions")}
            >
              Admissions
            </li>
          </Link>

          <Link href="/contact_us" className="">
            <li
              className={`${
                openNavBar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block ${
                state.contactIsActive && "lg:bg-[#ECD337]  lg:text-gray-950"
              } lg:text-gray-900 text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 relative`}
              onClick={() => navBarHandler("contact")}
            >
              Contact Us
            </li>
          </Link>

          <li
            className={`${openNavBar ? "visible" : "hidden"} ${
              pathname === "/portals/result/dashboard" ? "visible" : "hidden lg:hidden"
            } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950  lg:text-gray-900 text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 relative cursor-pointer`}
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
