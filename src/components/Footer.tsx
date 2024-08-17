import Logo from "@/assets/korella-logo.jpg";
import Image from "next/image";

export const Footer = () => {
  return (
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
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Products
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Company
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
      <div className="text-center text-gray-400 text-xs mt-6">
        © 2024 Korella.ai. All Rights Reserved.
      </div>
    </section>
  );
};
