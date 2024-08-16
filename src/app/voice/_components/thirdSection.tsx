"use client";

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
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
    <div className="bg-black py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-black rounded-lg p-8 text-white text-center justify-center flex flex-col align-middle items-center">
          <h2 className="font-space-grotesk text-4xl font-semibold leading-[61.25px] mb-4">
            Ready to transform your Businesses?
          </h2>
          <p>
            Choose the plan that suits your needs and start enhancing customer
            interactions today.
          </p>
          <motion.img
            src={Cog.src}
            width={500}
            height={500}
            alt="Speech Analytics"
            className="mb-4"
            animate={{ translateY: [30, -30] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <div className="text-center justify-center flex">
            <button className="bg-white border-2 border-black text-black py-2 px-4 flex gap-1 items-center rounded-lg mt-4 hover:bg-white hover:text-[#0d1132] text-center">
              Get Started <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
