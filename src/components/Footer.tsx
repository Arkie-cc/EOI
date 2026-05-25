export default function Footer() {
  return (
    <footer className="border-t border-cream/8 bg-[#0d0a0f]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="font-light text-[22px] tracking-[-0.02em] text-cream inline-block mb-3">
              arkie<span className="text-peach font-normal">.</span>
            </a>
            <p className="text-[13px] leading-relaxed text-cream/45 max-w-[260px]">
              A photo-sharing app for the quiet, mundane moments — the ones
              that feel like nothing now but everything later.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.16em] text-cream/55 uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#top", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#how", label: "How it works" },
                { href: "#signup", label: "Sign up" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-cream/45 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.16em] text-cream/55 uppercase mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Cookie Policy" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-cream/45 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.16em] text-cream/55 uppercase mb-5">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-cream/6 border border-cream/8 flex items-center justify-center text-cream/45 hover:bg-peach/15 hover:border-peach/25 hover:text-peach transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-cream/6 border border-cream/8 flex items-center justify-center text-cream/45 hover:bg-peach/15 hover:border-peach/25 hover:text-peach transition-all duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-cream/6 border border-cream/8 flex items-center justify-center text-cream/45 hover:bg-peach/15 hover:border-peach/25 hover:text-peach transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/35 uppercase">
            &copy; {new Date().getFullYear()} Arkie — Mundane moments, preserved.
          </span>
          <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/25 uppercase">
            Made with quiet intention.
          </span>
        </div>
      </div>
    </footer>
  );
}
