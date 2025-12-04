import Navbar from "@/components/frontPorch/Navbar";
import Hero from "@/components/frontPorch/Hero";
import Features from "@/components/frontPorch/Features";
import Footer from "@/components/frontPorch/Footer";

export default function Landing() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Features />
        <Footer />  
      </div>
    </>
  );
}
