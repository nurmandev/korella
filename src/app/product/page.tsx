import { CallToAction } from "@/app/product/_components/CallToAction";
import { Footer } from "@/app/product/_components/Footer";
import { Header } from "@/app/product/_components/Header";
import { Hero } from "@/app/product/_components/Hero";
import { LogoTicker } from "@/app/product/_components/LogoTicker";
import { Pricing } from "@/app/product/_components/Pricing";
import { ProductShowcase } from "@/app/product/_components/ProductShowcase";
import { Testimonials } from "@/app/product/_components/Testimonials";

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
