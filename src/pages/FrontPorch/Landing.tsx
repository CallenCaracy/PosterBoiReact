import Navbar from "@/layout/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/layout/Footer";

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
