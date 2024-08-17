import { Hero } from "@/app/products/_components/Hero";

import { SecondSection } from "@/app/products/_components/second-section";
import { ThirdSection } from "@/app/products/_components/third-section";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { VoiceAnalysis } from "./_components/VoiceAnalysis";
import { FeatureSection } from "./_components/Features";

export default function ProductsPage() {
  return (
    <>
      <div className="block">
        <Navbar />
      </div>
      <Hero />
      <SecondSection />
      <VoiceAnalysis />
      <FeatureSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
