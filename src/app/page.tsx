import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackingCards from "@/components/StackingCards";
import About from "@/components/About";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="relative overflow-hidden bg-[#0d0a0f]">
          <About />
          <StackingCards />
          <SignUp />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
