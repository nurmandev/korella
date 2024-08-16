"use client";

import CheckIcon from "@/assets/check.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: "3.20",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage less 100 hours per month"],
  },
  {
    title: "Pro",
    monthlyPrice: "2.90",
    buttonText: "Get started",
    popular: true,
    inverse: true,
    features: ["For usage less than 300 hours per month"],
  },
  {
    title: "Business",
    monthlyPrice: "2.30",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: ["For usage more than 300 hours per month"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={cn(
                  "p-10 border border-solid border-[$F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                  { "border-black bg-black text-white": inverse === true }
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn("text-lg font-bold text-black/50", {
                      "text-white/60": inverse === true,
                    })}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF)] text-transparent [background-size:200%] bg-clip-text font-medium"
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                          duration: 2,
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-0">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={cn("tracking-tight font-bold text-black/50", {
                      "text-white": inverse === true,
                    })}
                  >
                    /Per hour
                  </span>
                </div>
                <Button
                  className={cn("w-full mt-[30px]", {
                    "bg-white text-black hover:bg-white": inverse === true,
                  })}
                >
                  {buttonText}
                </Button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="size-6" />
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
