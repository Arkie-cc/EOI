import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackingCards from "@/components/StackingCards";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="relative overflow-hidden bg-[#0d0a0f]">
          <div
            className="absolute -inset-[50%] pointer-events-none will-change-transform blur-[300px]"
            style={{ background: "conic-gradient(from 160deg at 30% 25%, rgba(210,140,100,0.2) 0deg, rgba(190,120,140,0.12) 40deg, transparent 80deg, rgba(130,90,140,0.08) 160deg, transparent 200deg, rgba(210,140,100,0.14) 300deg, transparent 360deg)", animation: "aurora-sweep-1 18s ease-in-out infinite" }}
          />
          <div
            className="absolute -inset-[30%] pointer-events-none will-change-transform blur-[320px]"
            style={{ background: "radial-gradient(ellipse 80% 40% at 70% 20%, rgba(190,120,140,0.18) 0%, rgba(130,90,140,0.1) 30%, transparent 65%)", animation: "aurora-sweep-2 22s ease-in-out infinite" }}
          />
          <div
            className="absolute -inset-[40%] pointer-events-none will-change-transform blur-[340px]"
            style={{ background: "radial-gradient(ellipse 70% 35% at 20% 50%, rgba(210,140,100,0.14) 0%, rgba(190,120,140,0.07) 40%, transparent 70%)", animation: "aurora-sweep-3 20s ease-in-out infinite" }}
          />
          <div
            className="absolute -inset-[35%] pointer-events-none will-change-transform blur-[310px]"
            style={{ background: "radial-gradient(ellipse 75% 45% at 60% 75%, rgba(210,140,100,0.16) 0%, rgba(190,120,140,0.08) 35%, transparent 65%)", animation: "aurora-sweep-2 24s ease-in-out infinite" }}
          />
          <div
            className="absolute -inset-[45%] pointer-events-none will-change-transform blur-[330px]"
            style={{ background: "conic-gradient(from -40deg at 75% 60%, rgba(130,90,140,0.14) 0deg, rgba(190,120,140,0.08) 35deg, transparent 75deg, rgba(210,140,100,0.05) 180deg, transparent 240deg, rgba(130,90,140,0.1) 320deg, transparent 360deg)", animation: "aurora-sweep-3 26s ease-in-out infinite" }}
          />

        <section id="about" className="relative">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-20 sm:py-28">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-peach" />
                <span className="font-mono text-[12px] tracking-[0.06em] text-cream/40 uppercase">
                  About arkie
                </span>
              </div>
              <h2 className="text-[clamp(24px,4vw,42px)] font-medium tracking-tight text-cream leading-[1.2] mb-4">
                A home for the moments you almost forgot.
              </h2>
              <p className="text-[clamp(16px,2.5vw,22px)] leading-relaxed text-cream/40">
                Not the highlights. Not the milestones. The quiet, mundane
                moments that feel like nothing now — but everything later.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  label: "Pattern 01",
                  title: "Prompted, not performative.",
                  description:
                    "Gentle nudges throughout your day to notice what's around you. No pressure — just an invitation to look.",
                },
                {
                  label: "Pattern 02",
                  title: "Shared with people who matter.",
                  description:
                    "A feed of real moments from the people you care about. No likes, no followers, no algorithm.",
                },
                {
                  label: "Pattern 03",
                  title: "Preserved before they fade.",
                  description:
                    "Your future self will scroll back and feel something you didn't expect. That's the whole point.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 120}>
                  <div className="bg-[#1a191e] border border-cream/6 rounded-xl p-7 sm:p-8 transition-all duration-300 hover:border-peach/30 hover:bg-[#1e1d24] hover:shadow-[0_0_20px_rgba(228,168,144,0.08)] h-full">
                    <span className="font-mono text-[11px] tracking-[0.08em] text-peach uppercase">
                      {item.label}
                    </span>
                    <h3 className="text-[17px] font-medium tracking-tight text-cream mt-4 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-cream/40">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal scale className="py-16 sm:py-20 text-center max-w-lg mx-auto">
              <p className="text-[15px] text-cream/30 italic leading-relaxed">
                &ldquo;You don&apos;t know you&apos;re making a memory. You just
                know you&apos;re having fun.&rdquo;
              </p>
              <p className="font-mono text-[10.5px] tracking-[0.06em] text-peach uppercase mt-4">
                — Winnie the Pooh
              </p>
            </ScrollReveal>

            <div className="flex justify-center pb-4">
              <a href="#how-it-works" aria-label="Scroll to how it works" className="text-cream/20 hover:text-peach transition-colors duration-300" style={{ animation: "pulse-line 2.5s ease-in-out infinite" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 3v14M4 12l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <StackingCards />

        <SignUp />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
