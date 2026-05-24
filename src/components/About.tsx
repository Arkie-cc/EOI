export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 px-6 relative overflow-hidden">
      {/* Subtle warm glow behind section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF9B00]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <p className="text-[13px] uppercase tracking-[0.2em] text-accent-gold/70 mb-5">
          About arkie
        </p>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
              Most moments don&apos;t feel
              <br className="hidden sm:block" />
              <span className="text-muted">special until they&apos;re gone.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[15px] text-muted leading-[1.7]">
              arkie is built on a simple idea:{" "}
              <span className="text-accent-warm">prospective nostalgia</span>{" "}
              — the act of recognising a moment&apos;s value while you&apos;re
              still in it. We prompt you throughout your day to pause and
              capture what&apos;s right in front of you.
            </p>
            <p className="text-[15px] text-muted leading-[1.7]">
              Not the highlights. Not the perfect shots. The morning light
              hitting your desk. Your friend mid-sentence. The walk home. The
              kind of photos that feel like nothing now but everything later.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-20">
          {[
            {
              stat: "Prompted",
              label: "Gentle nudges throughout the day, never intrusive",
            },
            {
              stat: "Shared",
              label: "A feed of real moments from the people you care about",
            },
            {
              stat: "Preserved",
              label: "Your future self will thank you for what you saved",
            },
          ].map((item) => (
            <div
              key={item.stat}
              className="group relative border border-border/40 rounded-2xl p-7 bg-card/50 hover:bg-card-hover/50 transition-all duration-500"
            >
              <p className="text-lg font-medium bg-gradient-to-r from-accent-warm to-accent-gold bg-clip-text text-transparent mb-2">
                {item.stat}
              </p>
              <p className="text-[13px] text-muted leading-relaxed">
                {item.label}
              </p>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-warm/20 via-transparent to-accent-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_15px_rgba(235,85,0,0.15),inset_0_0_15px_rgba(235,85,0,0.05)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
