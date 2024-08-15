"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Wave from "@/assets/wave.svg";
import secondImage from "@/assets/second-home.png";
import Navbar from "@/components/Navbar";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-900 to-black overflow-hidden"
    >
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 text-white text-center">
        <div className="text-sm inline-flex border border-white/10 px-3 py-1 rounded-lg tracking-tight mb-10">
          Discover how AI can transform your business
        </div>
        <div className="">
          <h1 className="text-2xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6 px-2">
            Empowering Your Business with AI-Driven Insights
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            Unlock the full potential of your customer interactions with our
            cutting-edge AI solutions.
          </p>
          <div className="flex justify-center gap-1 items-center mt-[30px] text-black">
            <Button>
              Explore
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
