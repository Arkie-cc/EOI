import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hazy background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-20 scale-110 animate-drift"
          priority
        />
      </div>

      {/* Warm gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Sunset glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-[#EB5500]/[0.15] to-[#FFE100]/[0.08] rounded-full blur-[160px] animate-soft-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#FF9B00]/[0.12] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#FFE100]/[0.06] rounded-full blur-[100px]" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(43,20,8,0.5)_90%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent-gold mb-8">
            Prospective Nostalgia
          </p>
        </div>

        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[3.5rem] font-medium tracking-tight leading-[1.15] mb-7">
          <span className="bg-gradient-to-r from-foreground via-accent-peach to-foreground bg-clip-text text-transparent">
            Capture the feeling
          </span>
          <br />
          <span className="text-muted">before it becomes</span>
          <br />
          <span className="text-muted">a memory.</span>
        </h1>

        <p className="animate-fade-in-up-delay text-[15px] sm:text-base text-muted max-w-lg mx-auto mb-10 leading-relaxed">
          arkie prompts you throughout your day to photograph the quiet,
          ordinary moments — the ones you&apos;ll miss the most.
        </p>

        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="bg-gradient-to-r from-accent-warm to-accent-gold text-white px-7 py-3 rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300 shadow-[0_4px_24px_rgba(235,85,0,0.3)]"
          >
            Join the Waitlist
          </a>
          <a
            href="#about"
            className="text-sm text-muted hover:text-accent-gold transition-colors duration-300 px-4 py-3"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Warm scroll line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-accent-warm/60 to-transparent" />
      </div>
    </section>
  );
}
