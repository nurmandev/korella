import { CallToAction } from "@/app/(landing-page)/_components/CallToAction";
import { Footer } from "@/app/(landing-page)/_components/Footer";
import { Header } from "@/app/(landing-page)/_components/Header";
// import { Hero } from "@/app/(landing-page)/_components/Hero";
import { SecondSection } from "@/app/(landing-page)/_components/second-section";
// import { ThirdSection } from "@/app/(landing-page)/_components/third-section";
import { Pricing } from "@/app/(landing-page)/_components/Pricing";
import { Testimonials } from "@/app/(landing-page)/_components/Testimonials";
import { Hero } from "./_components/Hero";
import { ThirdSection } from "./_components/third-section";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      {/* <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer /> */}
    </>
  );
}
