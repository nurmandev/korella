"use client";

import CheckIcon from "@/assets/check.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    monthlyPrice: "7.90",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage less than 50 hours per month"],
  },
  {
    monthlyPrice: "7.40",
    buttonText: "Get started",
    popular: true,
    inverse: true,
    features: ["For usage less than 100 hours per month"],
  },
  {
    monthlyPrice: "6.90",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage more than 100 hours per month"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={index} // Key prop added here
                className={cn(
                  "p-10 border border-solid border-[#222222] rounded-3xl max-w-xs w-full",
                  { "bg-[#222222] text-white": inverse === true }
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn("text-lg font-bold text-white", {
                      "text-white": inverse === true,
                    })}
                  ></h3>
                </div>
                <div className="flex items-baseline gap-1 mt-[30px] text-white">
                  <span className="text-4xl font-bold tracking-tighter leading-0">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={cn("tracking-tight font-bold text-white", {
                      "text-white": inverse === true,
                    })}
                  >
                    /Per hour
                  </span>
                </div>
                <Button
                  className={cn("w-full mt-[30px]", {
                    "bg-white text-[#222222] hover:bg-white": inverse === true,
                  })}
                >
                  {buttonText}
                </Button>
                <ul className="flex flex-col gap-5 mt-8 text-white text-4xl">
                  {features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm flex items-center gap-4"
                    >
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
