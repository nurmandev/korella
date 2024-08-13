"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import homeImage from "@/assets/pillar.png";
const AccordionComponent = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center">
            <Image
              src={homeImage}
              // <Image
              //   src={pillar}
              alt="Team"
              width={30}
              height={30}
              className="rounded-lg mr-5"
            />
            Innovation
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Innovation is at the core of everything we do.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center">
            <Image
              src={homeImage}
              // src={pillar.default}
              alt="Team"
              width={30}
              height={30}
              className="rounded-lg mr-5"
            />
            Integrity
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Integrity is our guiding principle in all actions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex items-center">
            <Image
              src={homeImage}
              // src={pillar.default}
              alt="Team"
              width={30}
              height={30}
              className="rounded-lg mr-5"
            />
            Customer Centric
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Our focus is on providing customer-centric solutions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
