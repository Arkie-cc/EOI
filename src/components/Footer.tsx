export default function Footer() {
  return (
    <footer className="border-t border-border/20 py-16 px-6 relative">
      <div className="absolute inset-0 bg-[#1a0e08]/60 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-4 gap-12 mb-14">
          <div className="sm:col-span-2">
            <p className="text-lg font-medium tracking-tight mb-4">arkie</p>
            <p className="text-[13px] text-muted max-w-xs leading-[1.7]">
              A photo sharing app built on prospective nostalgia. Capture the
              moments that matter, before they slip away.
            </p>
          </div>

          <div>
            <p className="text-[13px] font-medium mb-4 text-foreground/70">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Join Waitlist", href: "#waitlist" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-muted hover:text-accent-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-medium mb-4 text-foreground/70">
              Follow along
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted hover:text-accent-gold transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted hover:text-accent-gold transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted hover:text-accent-gold transition-colors duration-300 inline-flex items-center gap-2"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.36-6.22V9.4a8.16 8.16 0 0 0 3.86.96V6.69z" />
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted/50">
            &copy; {new Date().getFullYear()} arkie. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] text-muted/50 hover:text-muted transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[11px] text-muted/50 hover:text-muted transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
