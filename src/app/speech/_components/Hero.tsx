"use client";

import SnowWrapper from "./../../../../public/snowEffect";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <SnowWrapper>
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center h-screen text-center bg-black overflow-hidden"
      >
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 text-white text-center">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6 px-2">
              Speech Analytics Pricing Plans
            </h1>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              Select a plan that meets your business requirements and scale as
              you grow.
            </p>
          </div>
        </div>
      </section>
    </SnowWrapper>
  );
};
