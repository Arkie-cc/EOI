export default function Features() {
  return (
    <section
      id="how-it-works"
      className="py-28 sm:py-36 px-6 border-t border-border/20 relative overflow-hidden"
    >
      {/* Warm ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-[#EB5500]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent-gold/70 mb-5">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
            One prompt. One moment.
            <br />
            <span className="text-muted">That&apos;s all it takes.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              step: "01",
              title: "You get a prompt",
              description:
                "At a random moment in your day, arkie gently asks you to look around. No pressure — just an invitation to notice.",
            },
            {
              step: "02",
              title: "You capture what's there",
              description:
                "Take a photo of whatever's in front of you. It doesn't need to be beautiful. It just needs to be real.",
            },
            {
              step: "03",
              title: "It becomes a memory",
              description:
                "Share it with friends or keep it for yourself. Months from now, you'll scroll back and feel something you didn't expect.",
            },
          ].map((feature) => (
            <div
              key={feature.step}
              className="group relative border border-border/40 rounded-2xl p-8 bg-card/50 hover:bg-card-hover/50 transition-all duration-500"
            >
              <span className="text-[11px] font-mono text-accent-warm/50 tracking-wider">
                {feature.step}
              </span>
              <h3 className="text-base font-medium mt-4 mb-3">
                {feature.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.7]">
                {feature.description}
              </p>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-warm/20 via-transparent to-accent-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_15px_rgba(235,85,0,0.15),inset_0_0_15px_rgba(235,85,0,0.05)]" />
            </div>
          ))}
        </div>

        {/* Quote divider */}
        <div className="mt-24 text-center max-w-lg mx-auto">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent mx-auto mb-8" />
          <p className="text-[15px] text-muted/80 italic leading-relaxed">
            &ldquo;You don&apos;t know you&apos;re making a memory. You just
            know you&apos;re having fun.&rdquo;
          </p>
          <p className="text-[12px] text-accent-gold/40 mt-3 tracking-wide">
            — Winnie the Pooh
          </p>
        </div>
      </div>
    </section>
  );
}
