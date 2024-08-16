import { Hero } from "@/app/product/_components/Hero";
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
