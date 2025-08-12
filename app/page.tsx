"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import InfiniteSkills from "@/components/infintetextscroll";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-20 lg:mt-32">
        {/* Profile Image */}
        <div className="mb-6 relative group">
          <Image
            src="/AdhelJohnson.jpg"
            alt="Adhel Johnson"
            width={250}
            height={250}
            className="rounded-full border-2 border-indigo-200 shadow-lg group-hover:scale-105 transition-transform duration-300 object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
        </div>
        {/* Name & Tagline */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
          <span className="text-indigo-600 text-5xl cabin">Adhel Johnson</span>
        </h1>
        <p className="text-2xl pb-5 text-gray-400 orbitron">
          Web Developer | AI Enthusiast
        </p>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
          I’m currently pursuing my{" "}
          <span className="font-semibold">
            Bachelor&apos;s in Computer Science
          </span>{" "}
          at Sahrdaya College of Engineering and Technology. I love crafting
          innovative solutions and exploring{" "}
          <span className="text-indigo-500 font-medium">AI</span>.
        </p>
        {/* Skills Badges */}
        {/* Your hero section here */}
        <Socials />
      </section>
      {/* Footer */}
      <InfiniteSkills /> {/* Add this below your about text */}
      <footer className="bg-indigo-600 text-white text-center py-4">
        © {new Date().getFullYear()} Adhel Johnson. All rights reserved.
      </footer>
    </main>
  );
}
