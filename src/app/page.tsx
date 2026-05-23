import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <section className="border-t border-ink/14">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-14">
            <div className="flex items-baseline justify-between gap-6 py-6 border-b border-ink/8">
              <div className="flex gap-4 items-baseline">
                <span className="font-mono text-[11px] tracking-[0.08em] text-coral uppercase">
                  02
                </span>
                <h2 className="font-normal text-lg sm:text-xl tracking-tight text-ink">
                  About arkie
                </h2>
              </div>
              <span className="font-mono text-[11px] tracking-[0.06em] text-slate uppercase hidden sm:block">
                photo-sharing · scrapbooking
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 py-12 sm:py-16">
              {[
                {
                  label: "Pattern 01",
                  title: "Prompted, not performative.",
                  description:
                    "Gentle nudges throughout your day to notice what's around you. No pressure — just an invitation to look.",
                },
                {
                  label: "Pattern 02",
                  title: "Shared with people who matter.",
                  description:
                    "A feed of real moments from the people you care about. No likes, no followers, no algorithm.",
                },
                {
                  label: "Pattern 03",
                  title: "Preserved before they fade.",
                  description:
                    "Your future self will scroll back and feel something you didn't expect. That's the whole point.",
                },
              ].map((item) => (
                <div key={item.label} className="py-2">
                  <span className="font-mono text-[10.5px] tracking-[0.08em] text-coral uppercase">
                    {item.label}
                  </span>
                  <h3 className="text-[17px] font-medium tracking-tight text-ink mt-3 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-2 max-w-[42ch]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/8 py-12 sm:py-16 text-center max-w-lg mx-auto">
              <p className="text-[15px] text-slate italic leading-relaxed">
                &ldquo;You don&apos;t know you&apos;re making a memory. You just
                know you&apos;re having fun.&rdquo;
              </p>
              <p className="font-mono text-[10.5px] tracking-[0.06em] text-lilac uppercase mt-4">
                — Winnie the Pooh
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
