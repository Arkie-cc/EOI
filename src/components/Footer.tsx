export default function Footer() {
  return (
    <footer className="border-t border-ink/14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10.5px] tracking-[0.06em] text-slate uppercase">
          &copy; {new Date().getFullYear()} arkie · capturing mundane moments
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10.5px] tracking-[0.06em] text-slate uppercase hover:text-ink transition-colors duration-300"
          >
            X
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10.5px] tracking-[0.06em] text-slate uppercase hover:text-ink transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10.5px] tracking-[0.06em] text-slate uppercase hover:text-ink transition-colors duration-300"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
