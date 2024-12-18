"use client";
import { ContextCreate } from "@/app/context/context";
import mobileImage from "@/assets/portal/result-mobile.png";
import image from "@/assets/portal/results.png";
import supabase from "@/services/supabase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Loader from "../../../../components/loader";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState<null|string>("")
  const { modalMsg, setModalMsg, setShowModal, showModal } =
    useContext(ContextCreate);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Run only on the client side
  // useEffect(() => {
  //   setIsClient(true);
  //   console.log(
  //    localStorage.getItem("authData"))
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use localStorage
      const rawAuthData = localStorage?.getItem("authData")
      const authData = rawAuthData && JSON.parse(rawAuthData)
      setAuthData(authData)
     
    }
  }, []);

  const login = async () => {
    setIsLoading(true);
    const { data: student, error } = await supabase
      .from("Students")
      .select("NAME")
      .eq("USER ID", userId)
      .eq("Password", password);

    if (error || !student || student.length === 0) {
      console.error("Authentication error:", error || "Student not found");
      setShowModal(true);
      setModalMsg("Authentication error, please check your credentials");
      setIsLoading(false);
      return;
    } else {
      const authData = {
        name: student[0].NAME,
        id: userId,
        formattedId: userId.replaceAll("/", "_")
      };
      localStorage.setItem("authData", JSON.stringify(authData));

      const updatedUserId = userId.replaceAll("/", "_");
      const { data, error } = await supabase.storage
        .from("Results")
        .download(`${updatedUserId}.pdf`);
      if (error) {
        console.log("File not found:", error);
        router.push("/portals/result/dashboard");
      } else {
        const { data } = supabase.storage
          .from("Results")
          .getPublicUrl(`${updatedUserId}.pdf`);
        const fileUrl = data.publicUrl;
        localStorage.setItem("ResultUrl", fileUrl);
        
        router.push("/portals/result/dashboard");
      }
      setIsLoading(false);
    }
  };

  const handleUserId = (e: any) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const handlePassword = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="h-screen">
        <Loader />
      </div>
    );
  }

  if (!authData) {
    return (
      <section className="h-screen mb-24">
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
        <article className="items-center justify-center text-center flex flex-col lg:w-[50%] w-[80%] mx-auto gap-y-6 mt-10">
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <label className="w-[70%] text-left">Student Id</label>
            <input
              value={userId}
              onChange={handleUserId}
              className="bg-[#dfdfdf] border rounded-md w-[70%] h-10 px-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <label className="w-[70%] text-left">Password</label>
            <input
              value={password}
              onChange={handlePassword}
              className="bg-[#dfdfdf] border rounded-md w-[70%] h-10 px-2 focus:outline-none"
            />
          </div>
          <button
            onClick={login}
            className="rounded-2xl mt-4 h-10 bg-black w-[70%] text-white block mx-auto"
          >
            Login
          </button>
        </article>
      </section>
    );
  } else {
    router.push("/portals/result/dashboard");
  }
};

export default Login;
