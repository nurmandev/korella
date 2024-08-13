import Logo from "@/assets/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="relative bg-blue-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm">
          <Image
            src={Logo}
            height={40}
            width={32}
            alt="Saas Logo"
            className="relative"
          />
          <p className="text-gray-800">
            Empowering businesses with advanced AI solutions for seamless
            customer interactions and insightful analytics.
          </p>
        </div>
        <nav className="flex space-x-6 text-sm">
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
      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-400 text-xs mt-6">
        © 2024 Korella.ai. All Rights Reserved.
      </div>
    </section>
  );
};
