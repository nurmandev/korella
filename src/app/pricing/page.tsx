import { CallToAction } from "@/app/company/_components/CallToAction";
import { LogoTicker } from "@/app/company/_components/LogoTicker";
import { Pricing } from "@/app/company/_components/Pricing";
import { ProductShowcase } from "@/app/company/_components/ProductShowcase";
import { Testimonials } from "@/app/company/_components/Testimonials";
import { Footer } from "@/components/Footer";
import { Hero } from "./_components/Hero";
import Navbar from "@/components/Navbar";
export default function Price() {
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <Hero />
      <LogoTicker />
      {/* <ProductShowcase /> */}
      <Pricing />
      <Testimonials />
      {/* <CallToAction /> */}
      <Footer />
    </>
  );
}
