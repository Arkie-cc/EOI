"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    tag: "Capture",
    title: "Open arkie when nothing's happening.",
    description:
      "The kettle. The morning bus. A friend tying their shoe. Gentle nudges throughout your day to notice what's around you. No pressure — just an invitation to look.",
    phoneLine1: "A quiet kettle",
    phoneLine2: "What caught your eye today?",
    phoneTag: "capture · tuesday",
  },
  {
    number: "02",
    tag: "Hold",
    title: "Arkie waits with you.",
    description:
      "No filters, no metrics. Your photos sit quietly in a small private archive. No counts that would flatten the thing into a measurement.",
    phoneLine1: "Private archive",
    phoneLine2: "37 quiet moments, held.",
    phoneTag: "archive · this week",
  },
  {
    number: "03",
    tag: "Share",
    title: "One photo finds its way home.",
    description:
      "Once a week, arkie picks one and offers it to the people you love. Quietly. Without a notification. They open it when they're ready.",
    phoneLine1: "For Maya",
    phoneLine2: "Sent without a notification.",
    phoneTag: "sunday · shared",
  },
  {
    number: "04",
    tag: "Remember",
    title: "Scroll back and feel something.",
    description:
      "Your future self will find moments you didn't know you were saving. That's the whole point — preserving what you almost forgot.",
    phoneLine1: "Remember everything",
    phoneLine2: "Scroll back and feel something.",
    phoneTag: "memories · always",
  },
];

export default function StackingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="how" className="relative border-t border-cream/6 min-h-screen flex items-center">
      <div className="photo-section-bg" aria-hidden="true">
        <img
          src="/sunset-path.jpg"
          alt=""
          className="absolute -left-[5%] -top-[5%] w-[110%] h-[110%] max-w-none object-cover blur-[14px] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07050a]/70 via-[#07050a]/55 to-[#07050a]/85" />
        <div className="absolute inset-0 bg-[#050309]" style={{ opacity: 0 }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-12 sm:py-14 relative z-[1] w-full">
        <ScrollReveal>
          <div className="mb-8 sm:mb-10 max-w-[720px]">
            <span className="font-mono text-[10.5px] tracking-[0.12em] text-cream/55 uppercase block mb-4">
              03 — How it works
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-cream leading-[1.15] mb-5">
              Three quiet steps,{" "}
              <span className="text-peach">no notifications, no metrics.</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-cream/55 max-w-[540px]">
              A camera, an archive, and a slow letter home.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="flex justify-center">
              <div className="relative w-[260px]">
                <div className="relative rounded-[40px] border-[3px] border-cream/12 bg-[#0a090e] shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden aspect-[9/19.5]">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-black rounded-full z-10" />

                  <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-[#141318]">
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
                        <div className="w-10 h-10 rounded-full border border-peach/30 flex items-center justify-center mb-4">
                          <span className="font-mono text-[11px] text-peach/70">
                            {step.number}
                          </span>
                        </div>
                        <p className="text-cream text-[15px] font-medium text-center mb-2">
                          {step.phoneLine1}
                        </p>
                        <p className="text-cream/50 text-[12px] text-center leading-relaxed">
                          {step.phoneLine2}
                        </p>
                        <span className="font-mono text-[7px] tracking-[0.16em] text-cream/40 uppercase mt-4">
                          {step.phoneTag}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-cream/15 rounded-full" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {steps.map((step, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.div
                    key={step.number}
                    layout
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActiveIndex(i);
                    }}
                    className="w-full text-left rounded-xl relative overflow-hidden cursor-pointer border transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? "#1e1d24" : "transparent",
                      borderColor: isActive
                        ? "rgba(228, 168, 144, 0.3)"
                        : "rgba(242, 234, 225, 0.06)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(228, 168, 144, 0.08)"
                        : "none",
                    }}
                  >
                    <motion.div
                      layout
                      className="p-4 sm:p-5"
                    >
                      <span className="absolute right-4 top-0 font-light text-[64px] leading-none text-cream/[0.04] select-none pointer-events-none">
                        {step.number}
                      </span>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors duration-300"
                          style={{ color: isActive ? "#E4A890" : "rgba(228, 168, 144, 0.4)" }}
                        >
                          {step.number} — {step.tag}
                        </span>
                      </div>
                      <h3
                        className="text-[16px] font-medium tracking-tight leading-snug transition-colors duration-300"
                        style={{ color: isActive ? "#F2EAE1" : "rgba(242, 234, 225, 0.5)" }}
                      >
                        {step.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-[13px] leading-relaxed text-cream/55 mt-2 max-w-[50ch]">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
