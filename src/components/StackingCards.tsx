"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Placeholder title one",
    description:
      "Placeholder description for the first step. This will be updated later with real content.",
    phoneLine1: "A gentle nudge",
    phoneLine2: "What caught your eye today?",
  },
  {
    number: "02",
    title: "Placeholder title two",
    description:
      "Placeholder description for the second step. This will be updated later with real content.",
    phoneLine1: "Capture the moment",
    phoneLine2: "No filters. No pressure. Just you.",
  },
  {
    number: "03",
    title: "Placeholder title three",
    description:
      "Placeholder description for the third step. This will be updated later with real content.",
    phoneLine1: "Share quietly",
    phoneLine2: "Only the people who matter.",
  },
  {
    number: "04",
    title: "Placeholder title four",
    description:
      "Placeholder description for the fourth step. This will be updated later with real content.",
    phoneLine1: "Remember everything",
    phoneLine2: "Scroll back and feel something.",
  },
];

export default function StackingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how-it-works" className="relative border-t border-cream/6">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-20 sm:py-28">
        <ScrollReveal>
          <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-cream leading-[1.15] mb-14 sm:mb-20">
            How it works
            <span className="text-peach">.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="flex justify-center">
            <div className="relative w-[340px]">
              <div className="relative rounded-[48px] border-[3px] border-cream/12 bg-[#0a090e] shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-10" />

                <div className="absolute inset-[3px] rounded-[45px] overflow-hidden bg-[#141318]">
                  {steps.map((step, i) => (
                    <div
                      key={step.number}
                      className={`absolute inset-0 flex flex-col items-center justify-center px-10 transition-all duration-500 ${
                        i === activeIndex
                          ? "opacity-100 translate-y-0"
                          : i < activeIndex
                            ? "opacity-0 -translate-y-4"
                            : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full border border-peach/30 flex items-center justify-center mb-6">
                        <span className="font-mono text-[13px] text-peach/70">
                          {step.number}
                        </span>
                      </div>
                      <p className="text-cream text-[18px] font-medium text-center mb-3">
                        {step.phoneLine1}
                      </p>
                      <p className="text-cream/35 text-[14px] text-center leading-relaxed">
                        {step.phoneLine2}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-cream/15 rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={step.number}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
                  }}
                  className="w-full text-left rounded-xl p-7 sm:p-8 relative overflow-hidden transition-all duration-300 cursor-pointer border border-cream/6 hover:border-cream/12"
                  style={{
                    backgroundColor: isActive ? "#1e1d24" : "transparent",
                    borderColor: isActive
                      ? "rgba(228, 168, 144, 0.3)"
                      : undefined,
                    boxShadow: isActive
                      ? "0 0 20px rgba(228, 168, 144, 0.08)"
                      : "none",
                  }}
                >
                  <span className="absolute right-6 top-2 font-light text-[96px] leading-none text-cream/[0.04] select-none pointer-events-none">
                    {step.number}
                  </span>
                  <span
                    className="font-mono text-[11px] tracking-[0.08em] uppercase transition-colors duration-300"
                    style={{ color: isActive ? "#E4A890" : "rgba(228, 168, 144, 0.4)" }}
                  >
                    Step {step.number}
                  </span>
                  <h3
                    className="text-[20px] font-medium tracking-tight mt-3 mb-2 leading-snug transition-colors duration-300"
                    style={{ color: isActive ? "#F2EAE1" : "rgba(242, 234, 225, 0.5)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed max-w-[50ch] transition-colors duration-300"
                    style={{ color: isActive ? "rgba(242, 234, 225, 0.4)" : "rgba(242, 234, 225, 0.2)" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
