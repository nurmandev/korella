"use client";
import { Header } from "@/app/(landing-page)/_components/Header";
import { SecondSection } from "@/app/(landing-page)/_components/second-section";
import { Hero } from "./_components/Hero";
import { ThirdSection } from "./_components/third-section";
import { ContactForm } from "./_components/ContactForm";
import { Footer } from "@/components/Footer";
// import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondSection />
      <ThirdSection />
      <ContactForm />
      <Footer />
    </>
  );
}
