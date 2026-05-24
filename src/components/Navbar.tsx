"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-14 py-5 flex justify-between items-center">
        <span
          className={`font-light text-[22px] tracking-[-0.02em] transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          arkie
          <span className="text-peach font-normal">.</span>
        </span>
        <div
          className={`font-mono text-[11px] tracking-[0.04em] uppercase text-right hidden sm:block transition-colors duration-500 ${
            scrolled ? "text-slate" : "text-cream/50"
          }`}
        >
          <div>Expression of Interest</div>
          <div
            className={`mt-1 transition-colors duration-500 ${
              scrolled ? "text-coral" : "text-peach/70"
            }`}
          >
            Mundane moments · preserved
          </div>
        </div>
      </div>
    </header>
  );
}
