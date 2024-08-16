import { Hero } from "@/app/about-us/_components/Hero";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </>
  );
}
