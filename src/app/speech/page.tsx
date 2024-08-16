import { Footer } from "@/components/Footer";
import { Hero } from "./_components/Hero";
import Navbar from "@/components/Navbar";
import { Pricing } from "./_components/Pricing";
import { ThirdSection } from "./_components/thirdSection";
export default function Price() {
  return (
    <>
      <div className="block">
        <Navbar />
      </div>
      <Hero />
      <Pricing />
      <ThirdSection />
      <Footer />
    </>
  );
}
