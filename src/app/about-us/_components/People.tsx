"use client";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image1 from "@/assets/people1.png";
import Image2 from "@/assets/people2.png";
import Image3 from "@/assets/people3.png";
import ArrowRight from "@/assets/arrow-right.svg";
import Link from "next/link";

import Image from "next/image";

const data = [
  {
    name: "Innovation",
    image: Image1,
    role: "Team Lead",
  },
  {
    name: "Integrity",
    image: Image2,
    role: "Team Lead",
  },
  {
    name: "Customer Centric",
    image: Image1,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image2,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image3,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image2,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image3,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image2,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image3,
    role: "Team Lead",
  },
  {
    name: "Collaboration",
    image: Image2,
    role: "Team Lead",
  },
];

export const People = () => {
  return (
    <section className="bg-[#EBF6FF]">
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto p-6 lg:p-0 lg:py-28 gap-12 opacity-100 font-space-grotesk mt-16">
        <div className="text-center w-full">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet the Minds Behind Korella.ai
          </h2>
          <p className="text-base lg:text-lg font-light text-gray-600">
            A diverse team of innovators driving the future of AI technology.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full justify-items-center">
          {data.map((card) => (
            <div className="flex flex-col items-center gap-2" key={card.name}>
              <Image
                src={card.image}
                alt={card.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
              <div className="font-bold">{card.name}</div>
              <div className="text-sm text-gray-600">{card.role}</div>
              <div className="flex items-center gap-5">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full mt-10 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-base lg:text-lg">
            Whether you&apos;re interested in our products or want to join our
            team, we&apos;d love to hear from you.
          </p>

          <Link href="/contact">
            <button className="bg-[#0F1340] text-white border-2 border-[#0F1340] py-2 px-4 flex gap-1 items-center rounded-lg mt-10 hover:bg-white hover:text-[#0d1132]">
              Get in touch <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
