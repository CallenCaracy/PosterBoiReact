import Navbar from "@/components/FrontPorch/Navbar";
import Hero from "@/components/FrontPorch/Hero";
import Features from "@/components/FrontPorch/Features";
import Footer from "@/components/FrontPorch/Footer";

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
