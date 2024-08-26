"use client";

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import loAsset from "@/assets/loAsset.png";
import Cog from "@/assets/cog.png";
import Link from "next/link";
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
        <h1 className="font-space-grotesk text-3xl md:text-4xl font-bold leading-snug md:leading-[61.25px] mb-4 text-center">
          Discover the Magic of AI
        </h1>
        <p className="text-black-300 mb-12 text-center text-sm md:text-base">
          Step into the future with Korella.ai! Our innovative AI solutions are
          designed to transform your business. Explore our magical products and
          see how they can bring efficiency and delight to your operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          {[
            {
              title: "Unlock the secrets of your conversations.",
              buttonText: "Speech Analytics",
              imgSrc: loAsset.src,
              imgAlt: "Speech Analytics",
              secondaryButtonText: "Unveil the Magic",
              link: "/product", // Separate link for Speech Analytics
              secondLink: "/contact",
            },
            {
              title: "Korella AI assistant for your business.",
              buttonText: "Voice Assistant",
              imgSrc: Cog.src,
              imgAlt: "Voice Assistant",
              secondaryButtonText: "Summon Your Korella",
              link: "/products", // Separate link for Voice Assistant
              secondLink: "/contact",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#0d1132] rounded-lg p-8 flex flex-col justify-between items-start"
              style={{ height: "auto", width: "100%" }}
            >
              <h2 className="font-space-grotesk text-2xl md:text-3xl lg:text-4xl font-light leading-snug md:leading-[61.25px]">
                {card.title}
              </h2>
              <Link href={card.link}>
                <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-full hover:bg-white hover:text-[#0d1132] mt-4">
                  {card.buttonText}
                </button>
              </Link>

              <motion.img
                src={card.imgSrc}
                alt={card.imgAlt}
                animate={{ translateY: [-30, 30], rotate: 365 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="my-4 w-full h-auto"
              />
              <Link href={card.secondLink}>
                <button className="bg-transparent border-2 border-white text-white py-2 px-4 flex gap-1 items-center rounded-full hover:bg-white hover:text-[#0d1132] mt-4">
                  {card.secondaryButtonText} <ArrowRight className="size-5" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
