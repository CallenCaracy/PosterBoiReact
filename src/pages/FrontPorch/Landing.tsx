import Navbar from "@/layouts/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/layouts/Footer";

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
