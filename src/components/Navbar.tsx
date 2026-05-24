export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-14 py-5 flex justify-between items-center">
        <span className="font-light text-[22px] tracking-[-0.02em] text-cream">
          arkie
          <span className="text-peach font-normal">.</span>
        </span>
        <div className="font-mono text-[11px] tracking-[0.04em] uppercase text-right hidden sm:block text-cream/50">
          <div>Expression of Interest</div>
          <div className="mt-1 text-peach/70">
            Mundane moments · preserved
          </div>
        </div>
      </div>
    </header>
  );
}
