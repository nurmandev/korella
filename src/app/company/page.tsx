import { CallToAction } from "@/app/company/_components/CallToAction";
import { Footer } from "@/app/company/_components/Footer";
import { Header } from "@/app/company/_components/Header";
import { Hero } from "@/app/company/_components/Hero";
import { LogoTicker } from "@/app/company/_components/LogoTicker";
import { Pricing } from "@/app/company/_components/Pricing";
import { ProductShowcase } from "@/app/company/_components/ProductShowcase";
import { Testimonials } from "@/app/company/_components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
