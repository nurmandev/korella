import { Hero } from "@/app/products/_components/Hero";

import { SecondSection } from "@/app/products/_components/second-section";
import { ThirdSection } from "@/app/products/_components/third-section";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="block">
        <Navbar />
      </div>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
