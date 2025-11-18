// src/components/Hero.jsx
import React from "react";
import Background from "/src/assets/background.png";
import BgGif from "/src/assets/background2.gif";

const Hero = () => {
  return (
    <section
      className="
        relative 
        min-h-screen      /* FULL LAYAR */
        w-full 
        overflow-hidden 
        bg-black 
        text-white
      "
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/40 to-black">
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <img src={Background} alt="" className="scale-120 mt-10" />

            {/* <video
              src={BgGif}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video> */}
        </div>
      </div>

      {/* Radial Glow */}
      <div
        className="
          absolute left-1/2 top-[45%]         /* supaya glow tetap di sekitar teks */
          h-[55rem] w-[55rem]                 
          -translate-x-1/2 -translate-y-1/2 
          rounded-full 
          bg-[radial-gradient(closest-side,rgba(16,185,129,0.18),transparent)]
          blur-3xl 
          contrast-125
        "
      ></div>

      {/* CONTENT – tanpa flex items-center supaya posisi tetap seperti desain */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40 sm:pt-40 sm:pb-44 md:pt-48 md:pb-52">

        {/* Badge */}
        <span
          className="
            mb-5 inline-flex items-center gap-2 rounded-full 
            border border-emerald-400/30 bg-emerald-400/10 
            px-3 py-1 text-xs tracking-wide text-emerald-200 
            backdrop-blur
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles h-3.5 w-3.5 text-emerald-300"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            <path d="M5 3v4"></path>
            <path d="M19 17v4"></path>
            <path d="M3 5h4"></path>
            <path d="M17 19h4"></path>
          </svg>
          CitySense • Smart & Sustainable
        </span>

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white drop-shadow-md md:text-6xl">
          Building the Future, One Smart City at a Time
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base text-emerald-100/90 md:text-lg leading-relaxed">
          A visionary dashboard blending green technology and urban innovation — 
          where data-driven insights meet eco-friendly design.
        </p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="#dashboard"
            className="
              group inline-flex items-center gap-2 rounded-xl 
              bg-gradient-to-r from-emerald-500 to-cyan-500 
              px-6 py-3 text-sm font-medium text-white 
              shadow-[0_0_30px_rgba(16,185,129,0.4)] 
              transition hover:shadow-[0_0_45px_rgba(16,185,129,0.6)] 
              focus:outline-none focus:ring-2 focus:ring-emerald-400/60
            "
          >
            Explore the Future City
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
