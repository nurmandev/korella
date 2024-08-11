import React from "react";
// React and Next.js imports
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import homeImage from "@/assets/home-image.png";

export const SecondSection = () => {
  return (
    <section className="mt-8 pb-20 md:pt-5 md:pb-10 flex justify-center items-center md:mx-10">
      <div className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={homeImage}
            alt="homeImage"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8 p-7 mx-5">
          <h3 className="text-5xl md:text-5xl font-bold tracking-tighte mt-6 my-7">
            What is Voice Assistant?
          </h3>
          <p className="font-light leading-[1.4] opacity-70 text-2xl md:text-2xl">
            A voice assistant for call centers can significantly enhance
            business operations by providing 24/7 customer service, reducing
            labor costs, and improving overall service quality.
          </p>
        </div>
      </div>
    </section>
  );
};
