import { Header } from "@/app/product/_components/Header";
import { Hero } from "@/app/product/_components/Hero";
import { LogoTicker } from "@/app/product/_components/LogoTicker";
import { SecondSection } from "@/app/product/_components/second-section";
import { ThirdSection } from "@/app/product/_components/third-section";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
