export default function Footer() {
  return (
    <footer className="border-t border-cream/8 bg-[#0d0a0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/25 uppercase">
          &copy; Arkie — Mundane moments, preserved.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-mono text-[9.5px] tracking-[0.16em] text-cream/25 uppercase hover:text-cream/50 transition-colors duration-300"
          >
            Privacy
          </a>
          <a
            href="#"
            className="font-mono text-[9.5px] tracking-[0.16em] text-cream/25 uppercase hover:text-cream/50 transition-colors duration-300"
          >
            Terms
          </a>
          <a
            href="#"
            className="font-mono text-[9.5px] tracking-[0.16em] text-cream/25 uppercase hover:text-cream/50 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
