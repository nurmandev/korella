"use client";

import SnowWrapper from "./../../public/snowEffect";
import Logo from "@/assets/korella-logo.jpg";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <SnowWrapper>
      <section className="relative bg-blue-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full">
            <Image
              src={Logo}
              height={60}
              width={100}
              alt="Saas Logo"
              className="relative"
            />
            <p className="text-gray-800 mt-4">
              Empowering businesses with advanced AI solutions for seamless
              customer interactions and insightful analytics.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm w-full md:w-auto text-center md:text-left">
            <Link href="/" className="hover:underline">
              {" "}
              Home
            </Link>
            <Link href="/product" className="hover:underline">
              Products
            </Link>
            <Link href="/products" className="hover:underline">
              Pricing
            </Link>
            <Link href="/about-us" className="hover:underline">
              Company
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="text-center text-gray-400 text-xs mt-6">
          © 2024 Korella.ai. All Rights Reserved.
        </div>
      </section>
    </SnowWrapper>
  );
};
