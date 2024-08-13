import React from "react";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

import homeImage from "@/assets/second-home-image.png";
import secondImage from "@/assets/second-home.png";

import AccordionComponent from "@/components/accordion";

export const SecondSection = () => {
  return (
    <section className="bg-white py-12 md:px-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Who we are</h2>
        <p className="text-gray-600 mb-8">
          At Korella.ai, we are passionate about transforming the way businesses
          interact with their customers...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <Image
              src={secondImage}
              alt="Team"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-700 mb-4">
                Our mission is to revolutionize customer interactions...
              </p>
              <AccordionComponent />
            </div>
            <Image
              src={homeImage}
              alt="Team"
              width={700}
              height={10}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
