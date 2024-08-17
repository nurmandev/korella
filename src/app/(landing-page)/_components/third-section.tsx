"use client";

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import loAsset from "@/assets/loAsset.png";
import Cog from "@/assets/cog.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const ThirdSection: React.FC = () => {
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
          {/* Card Template */}
          {[
            {
              title: "Unlock the secrets of your conversations.",
              buttonText: "Speech Analytics",
              imgSrc: loAsset.src,
              imgAlt: "Speech Analytics",
              secondaryButtonText: "Unveil the Magic",
            },
            {
              title: "Korella AI assistant for your business.",
              buttonText: "Voice Assistant",
              imgSrc: Cog.src,
              imgAlt: "Cog Image",
              secondaryButtonText: "Summon Your Korella",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#0d1132] rounded-lg p-8 flex flex-col justify-between items-start"
              style={{ height: "850px", width: "600px" }}
            >
              <h2 className="font-space-grotesk text-4xl font-light leading-[61.25px]">
                {card.title}
              </h2>
              <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#0d1132] mt-4">
                {card.buttonText}
              </button>
              <motion.img
                src={card.imgSrc}
                width={500}
                height={500}
                alt={card.imgAlt}
                animate={{ translateY: [-30, 30], rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="my-4"
              />

              <button className="bg-transparent border-2 border-white text-white py-2 px-4 flex gap-1 items-center rounded-full hover:bg-white hover:text-[#0d1132] mt-4">
                {card.secondaryButtonText} <ArrowRight className="size-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
