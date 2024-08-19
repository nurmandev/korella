"use client";

import SnowWrapper from "./../../../../public/snowEffect";
import ArrowRight from "@/assets/arrow-right.svg";
import HomeImage from "@/assets/home-image.png";
import Link from "next/link";

import Image from "next/image";

export const Hero = () => {
  return (
    <SnowWrapper>
      <section className="relative flex flex-col items-start max-w-screen-xl p-6 md:px-20 lg:px-0 pt-16 md:pt-52 gap-16 opacity-100 font-space-grotesk mx-auto">
        <div className="text-left w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">
              Who We Are
            </h1>
            <Link href="/contact">
              <button className="bg-black border-2 border-black text-white py-2 px-4 flex gap-1 items-center rounded-lg mt-4 lg:mt-0 hover:bg-white hover:text-[#0d1132]">
                Explore <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <p className="text-xl lg:text-2xl font-light mb-8">
            Innovating customer interactions with cutting-edge AI solutions
          </p>
          <p className="text-base lg:text-lg font-light text-gray-600">
            At Korella.ai, we are passionate about transforming the way
            businesses interact with their customers. Our cutting-edge AI
            solutions empower organizations to unlock valuable insights,
            streamline operations, and enhance customer satisfaction.
          </p>
        </div>

        <div className="w-full">
          <Image
            src={HomeImage}
            alt="Team working"
            layout="responsive"
            width={1312}
            height={829}
            className="rounded-lg"
          />
        </div>
      </section>
    </SnowWrapper>
  );
};
