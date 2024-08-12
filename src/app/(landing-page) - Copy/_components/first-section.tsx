"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import homeImage from "@/assets/home-image.png";
import { useEffect } from "react";

export const FirstSection = () => {
  return (
    <section>
      <div>
        <Button asChild className="mb-6 w-fit" size={"sm"} variant={"outline"}>
          <Link className="not-prose" href="https://9d8.dev">
            Lorem ipsum dolor sit amet <ArrowRight className="w-4 top-1" />
          </Link>
        </Button>
        <h1>
          {/* <Balancer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Balancer> */}
        </h1>
        {/* <h3 className="text-muted-foreground">
                <Balancer>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Balancer>
              </h3> */}
        <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
       
          <Image
            src={homeImage.src}
            alt="Cog Image"
            //   className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            className="h-full w-full object-cover object-bottom"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};
