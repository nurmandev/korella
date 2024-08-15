import { Hero } from "@/app/product/_components/Hero";
import { LogoTicker } from "@/app/product/_components/LogoTicker";
import { SecondSection } from "@/app/product/_components/second-section";
import { ThirdSection } from "@/app/product/_components/third-section";
import { Footer } from "@/components/Footer";
import { SpeechAnalysis } from "./_components/Speach";
import { FeatureSection } from "./_components/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <Hero />
      <LogoTicker />
      <SecondSection />
      <SpeechAnalysis />
      <div className="min-h-screen bg-black flex flex-col items-center py-10 px-4">
        <FeatureSection />
      </div>
      <ThirdSection />
      <Footer />
    </>
  );
}
