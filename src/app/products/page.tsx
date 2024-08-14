import { CallToAction } from "@/app/product/_components/CallToAction";

import { Header } from "@/app/products/_components/Header";
import { Hero } from "@/app/products/_components/Hero";
import { LogoTicker } from "@/app/products/_components/LogoTicker";
import { SecondSection } from "@/app/products/_components/second-section";
import { ThirdSection } from "@/app/products/_components/third-section";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      {/* <ProductShowcase /> */}
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
