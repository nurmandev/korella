"use client";

import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import secondImage from "@/assets/second-home.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const Contact: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen md:mx-40 font-space-grotesk md:pt-36">
        <div className="p-8 rounded-lg max-w-10xl w-full">
          <div className=" text-center mb-5">
            <h2 className="text-2xl font-bold mb-4 md:text-6xl">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Wee&apos;re here to help and answer any questions you might have.
              We look forward to hearing from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="bg-[#0d1132] border-2 border-black text-white py-2 px-4 flex gap-1 items-center  rounded-lg mt-4 hover:bg-[#aab1ee] hover:text-[#0d1132]">
                  Send Message
                  <ArrowRight className="size-5" />
                </button>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={secondImage}
                width={300}
                height={50}
                alt="Team working"
                className="rounded-lg shadow-md object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
