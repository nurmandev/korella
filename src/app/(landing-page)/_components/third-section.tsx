"use client";

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import loAsset from "@/assets/loAsset.png";
import Cog from "@/assets/cog.png";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ThirdSection: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="font-space-grotesk text-4xl font-bold leading-[61.25px] mb-4 text-center">
          Discover the Magic of AI
        </h1>
        <p className="text-black-300 mb-12 text-center">
          Step into the future with Korella.ai! Our innovative AI solutions are
          designed to transform your business. Explore our magical products and
          see how they can bring efficiency and delight to your operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
          {/* Speech Analytics Card */}
          <div className="bg-[#0d1132] rounded-lg p-8">
            <h2 className="font-space-grotesk text-4xl font-light leading-[61.25px] mb-4">
              Unlock the secrets of your conversations.
            </h2>
            <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg mt-4 hover:bg-white hover:text-[#0d1132]">
              Speech Analytics
            </button>
            <motion.img
              src={loAsset.src}
              width={500}
              height={500}
              alt="Speech Analytics"
              className="mb-4"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <button className="bg-transparent border-2 border-white text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-4 hover:bg-white hover:text-[#0d1132]">
              Unveil the Magic <ArrowRight className="size-5" />
            </button>
          </div>

          {/* Voice Assistant Card */}
          <div className="bg-[#0d1132] rounded-lg p-8">
            <h2 className="font-space-grotesk text-4xl font-light leading-[61.25px] mb-4">
              Korella AI assistant for your business.
            </h2>
            <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg mt-4 hover:bg-white hover:text-[#0d1132]">
              Voice Assistant
            </button>
            <motion.img
              src={Cog.src}
              width={500}
              height={500}
              alt="Cog Image"
              animate={{ translateY: [30, -30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <button className="bg-transparent border-2 border-white text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-4 hover:bg-white hover:text-[#0d1132]">
              Summon Your Korella <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
