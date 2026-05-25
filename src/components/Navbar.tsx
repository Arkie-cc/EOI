"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    function onScroll() {
      const sections = ["top", "about", "how", "signup"];
      const y = window.scrollY + window.innerHeight * 0.4;
      let cur = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = id;
      }
      setActive(cur);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-14 py-5 flex justify-between items-center">
        <a
          href="#top"
          onClick={go("top")}
          className="font-light text-[22px] tracking-[-0.02em] text-cream hover:text-peach transition-colors duration-300"
        >
          arkie
          <span className="text-peach font-normal">.</span>
        </a>
        <nav className="flex items-center gap-7">
          {[
            { id: "top", label: "Hello" },
            { id: "about", label: "About" },
            { id: "how", label: "How it works" },
            { id: "signup", label: "Sign up" },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className={`nav-link font-mono text-[10.5px] tracking-[0.08em] uppercase relative py-1 transition-colors duration-200 ${
                active === link.id ? "text-cream" : "text-cream/60 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
