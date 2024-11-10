"use client";
import React, { useState, useEffect } from "react";
import supabase from "@/services/supabase";
import Loader from "../../../../components/loader";
import Image from "next/image";
import image from "@/assets/portal/results.png";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add this state to check client-side rendering
  const router = useRouter();

  // Run only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const login = async () => {
    setIsLoading(true);
    const { data: student, error } = await supabase
      .from("Students")
      .select("NAME")
      .eq("USER ID", userId);

    if (error || !student || student.length === 0) {
      console.error("Authentication error:", error || "Student not found");
      setIsLoading(false);
      return;
    } else {
      localStorage.setItem("authData", student[0].NAME);

      const updatedUserId = userId.replaceAll("/", "_");
      const { data, error } = await supabase.storage
        .from("Results")
        .download(`${updatedUserId}.docx`);

      if (error) {
        console.log("File not found:", error);
        router.push("/portals/result");
      } else {
        const { data } = supabase.storage
          .from("Results")
          .getPublicUrl(`${updatedUserId}.docx`);
        const fileUrl = data.publicUrl;
        localStorage.setItem("ResultUrl", fileUrl);
        router.push("/portals/result");
      }
      setIsLoading(false);
    }
  };

  const handleUserId = (e:any) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const handlePassword = (e:any) => {
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

  if (isClient && !localStorage.getItem("authData")) {
    return (
      <section className="h-screen">
        <Image
          src={image}
          alt="Gloryseed school results page"
          className="mt-16"
        />
        <article className="items-center justify-center text-center flex flex-col lg:w-[50%] w-[80%] mx-auto gap-y-6">
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <label className="w-[70%] text-left">User Id</label>
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
  } else if (isClient) {
    router.push("/portals/result");
  }
};

export default Login;
