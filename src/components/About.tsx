"use client";

import ScrollReveal from "@/components/ScrollReveal";

const metaRows = [
  { label: "Founded", value: "Twenty twenty-four, a tuesday." },
  { label: "Headquarters", value: "A small studio, somewhere it rains." },
  { label: "Made by", value: "Four people. Lorem, ipsum, dolor & sit." },
  { label: "Not for", value: "Engagement. Streaks. The algorithm." },
  { label: "For", value: "Your seventy-year-old self. And the people they love." },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-cream/6 min-h-screen flex items-center isolate">
      <div className="photo-section-bg" aria-hidden="true">
        <img
          src="/sunset-bench.jpg"
          alt=""
          className="absolute -left-[5%] -top-[5%] w-[110%] h-[110%] max-w-none object-cover blur-[14px] saturate-[1.08]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 18% 55%, rgba(7,5,10,0.82), rgba(7,5,10,0.35) 70%, rgba(7,5,10,0.55) 100%), linear-gradient(180deg, rgba(7,5,10,0.3) 0%, rgba(7,5,10,0.55) 100%)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-20 relative z-[1] w-full">
        <ScrollReveal className="mb-10 max-w-[720px]">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-cream/55 uppercase block mb-4">
            02 — About
          </span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-medium tracking-tight text-cream leading-[1.15]">
            We&apos;re building{" "}
            <span className="text-peach">a quiet place</span>{" "}for the moments
            you&apos;ll only recognise in hindsight.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20">
          <ScrollReveal>
            <p className="text-[clamp(20px,2.5vw,28px)] font-normal leading-[1.3] tracking-[-0.01em] text-cream mb-5">
              Arkie is a photo-sharing app for the quiet, mundane moments —
              <span className="text-peach">
                {" "}the ones that feel like nothing now but everything later.
              </span>
            </p>
            <div className="space-y-3 max-w-[460px]">
              <p className="text-[14px] leading-[1.65] text-cream/55">
                Not the highlights. Not the milestones. The quiet, mundane
                moments that feel like nothing now — but everything later.
                Gentle nudges throughout your day to notice what&apos;s around you.
              </p>
              <p className="text-[14px] leading-[1.65] text-cream/55">
                A feed of real moments from the people you care about. No likes,
                no followers, no algorithm. Just the things that mattered,
                preserved before they fade.
              </p>
              <p className="text-[14px] leading-[1.65] text-cream/55">
                Your future self will scroll back and feel something you didn&apos;t
                expect. That&apos;s the whole point.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <aside className="flex flex-col gap-5">
              {metaRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 pt-4 border-t border-cream/8"
                >
                  <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/45 uppercase">
                    {row.label}
                  </span>
                  <span className="text-[15px] text-cream/70">{row.value}</span>
                </div>
              ))}
            </aside>
          </ScrollReveal>
        </div>


      </div>
    </section>
  );
}
