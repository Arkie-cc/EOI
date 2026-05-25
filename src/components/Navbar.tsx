"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "top", label: "Hello" },
  { id: "about", label: "About" },
  { id: "how", label: "How it works" },
  { id: "signup", label: "Sign up" },
];

export default function Navbar() {
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
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
          className="font-light text-[22px] tracking-[-0.02em] text-cream hover:text-peach transition-colors duration-300 z-50 relative"
        >
          arkie
          <span className="text-peach font-normal">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {links.map((link) => (
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

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        >
          <div className="relative w-5 h-3.5">
            <span
              className={`absolute left-0 right-0 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "top-1/2 rotate-45" : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-px bg-cream top-1/2 transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-px bg-cream transition-all duration-300 ${
                menuOpen ? "top-1/2 -rotate-45" : "top-full rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[#0a080d]/95 backdrop-blur-xl sm:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={go(link.id)}
              className={`font-mono text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                active === link.id ? "text-peach" : "text-cream/60 hover:text-cream"
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
