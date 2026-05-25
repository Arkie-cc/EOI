"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-cream/8 border border-cream/10 backdrop-blur-md flex items-center justify-center text-cream/50 hover:bg-peach/15 hover:border-peach/25 hover:text-peach hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 12V2M2 6l5-4 5 4" />
      </svg>
    </a>
  );
}
