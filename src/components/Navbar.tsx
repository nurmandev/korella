"use client";

import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white border-2 m-auto justify-center align-middle md:w-[1000px] rounded z-10 overflow-x-clip md:my-10 font-space-grotesk">
      <div className="container mx-auto px-4 py-4 flex items-center text-left justify-between">
        <a href="/">
          <Image src={Logo} alt="Korella AI Logo" height={20} width={60} />
        </a>

        <div className="hidden md:flex space-x-8 items-center mx-auto">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center space-x-2"
            >
              <span>Products</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "products" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "products" && (
              <div className="absolute left-0 mt-2 w-[600px] bg-[#F5F5F5] shadow-md p-4 rounded-tl-lg">
                <div className="flex">
                  <div className="w-1/2">
                    <h3 className="font-semibold">
                      Explore Our Advanced AI Solutions
                    </h3>
                    <p className="text-sm">
                      Discover how our cutting-edge AI technologies can
                      transform your business operations. Click on each product
                      to learn more.
                    </p>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <a href="/product" className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">Speech Analytics</h4>
                        <p className="text-sm">Extract valuable insights...</p>
                      </div>
                    </a>

                    <a href="/products" className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">Voice Assistant</h4>
                        <p className="text-sm">
                          Streamline customer interactions...
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("pricing")}
              className="flex items-center space-x-2"
            >
              <span>Pricing</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "pricing" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "pricing" && (
              <div className="absolute left-0 mt-2 w-[600px] bg-[#F5F5F5] shadow-md p-4 rounded-tl-lg">
                <div className="flex">
                  <div className="w-1/2">
                    <h3 className="font-semibold">Flexible Pricing Plans</h3>
                    <p className="text-sm">
                      Choose the plan that best fits your business needs.
                    </p>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">Speech Analytics</h4>
                        <p className="text-sm">Select a plan that meets...</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">Voice Assistant</h4>
                        <p className="text-sm">Select a plan that meets...</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">Combo Plan</h4>
                        <p className="text-sm">A convenient plan...</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center space-x-2"
            >
              <span>Company</span>
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "company" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "company" && (
              <div className="absolute left-[-522px] mt-2 w-[1000px] bg-[#F5F5F5] shadow-md p-4 rounded-tl-lg">
                <div className="flex">
                  <div className="w-1/2">
                    <h3 className="font-semibold">Who we are</h3>
                    <p className="text-sm">Get to know us</p>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 text-[1rem]">*</span>
                      <div>
                        <h4 className="font-semibold">About us</h4>
                        <div className="flex space-x-2">
                          <FaFacebook />
                          <FaInstagram />
                          <FaFacebookMessenger />
                          <FaTwitter />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>

          <div className="flex justify-center gap-1 items-center">
            <a href="/contact">Contact Us</a>
          </div>
        </div>

        <div className="flex justify-center gap-1 items-center">
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded hidden md:inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 size-5" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-black focus:outline-none"
        >
          {menuOpen ? <IoClose /> : <CiMenuFries />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F5F5F5] rounded-b-2xl">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="block px-4 py-2 w-full text-left"
            >
              Products
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "products" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "products" && (
              <div className="bg-white shadow-md p-4">
                <div className="space-y-2">
                  <a href="/product" className="font-semibold">
                    Speech Analytics
                  </a>
                  <p className="text-sm">Extract valuable insights...</p>
                  <a href="/products" className="font-semibold">
                    Voice Assistant
                  </a>
                  <p className="text-sm">Streamline customer interactions...</p>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("pricing")}
              className="block px-4 py-2 w-full text-left"
            >
              Pricing
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "pricing" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "pricing" && (
              <div className="bg-white shadow-md p-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Speech Analytics</h4>
                  <p className="text-sm">Select a plan that meets...</p>
                  <h4 className="font-semibold">Voice Assistant</h4>
                  <p className="text-sm">Select a plan that meets...</p>
                  <h4 className="font-semibold">Combo Plan</h4>
                  <p className="text-sm">A convenient plan...</p>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="block px-4 py-2 w-full text-left"
            >
              Company
              <FaChevronDown
                className={`transition-transform ${
                  openDropdown === "company" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openDropdown === "company" && (
              <div className="bg-white shadow-md p-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">About us</h4>
                  <div className="flex space-x-2">
                    <FaFacebook />
                    <FaInstagram />
                    <FaFacebookMessenger />
                    <FaTwitter />
                  </div>
                </div>
                <hr className="my-2" />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
