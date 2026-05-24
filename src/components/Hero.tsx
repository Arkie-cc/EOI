import Image from "next/image";
import TextRotator from "@/components/TextRotator";

const rotatingWords = [
  "your home cooked meals",
  "your daily walks",
  "your commute to work",
  "your spot at lunch",
  "your parent's laugh",
  "the joke your dad always made",
  "the way your mum calls you",
  "your friend saving you a seat",
  "the sound of your dog barking",
  "the way your cat purrs",
  "the house you grew up in",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/background.png"
          alt=""
          fill
          className="object-cover scale-110 blur-[18px] saturate-[1.15] brightness-[0.45]"
          style={{ animation: "soft-drift 40s ease-in-out infinite" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1520]/60 via-[#2a1f2e]/30 to-[#1e1a24]/70" />
        <div className="absolute inset-0 film-grain" />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-14 py-16 sm:py-0">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <div className="flex items-baseline gap-2.5 mb-6">
                <span className="font-mono text-[11px] tracking-[0.08em] text-peach/80 uppercase">
                  01 — Waitlist
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] text-cream/40 uppercase">
                  / open
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-d1 font-light text-[clamp(36px,6vw,86px)] leading-[1.1] tracking-[-0.04em] text-cream mb-1">
            <div>Some day, you&apos;ll</div>
            <div className="flex items-baseline">
              <span className="shrink-0">miss&nbsp;</span>
              <TextRotator words={rotatingWords} intervalMs={2000} />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="animate-fade-in-d3 mt-7 text-[16px] text-cream/60 font-normal max-w-[46ch] leading-[1.55]">
              arkie is a photo-sharing app for the quiet, mundane moments — the
              ones that feel like nothing now but everything later.
            </p>

            <div className="mt-10 animate-fade-in-d4 flex flex-col sm:flex-row gap-3 max-w-md">
              <a
                href="#about"
                className="flex-1 bg-cream text-ink px-6 py-3 rounded-[2px] text-[13px] font-medium tracking-[-0.01em] hover:bg-peach hover:text-ink transition-colors duration-300 whitespace-nowrap text-center"
              >
                About Us
              </a>
              <a
                href="#signup"
                className="flex-1 bg-cream text-ink px-6 py-3 rounded-[2px] text-[13px] font-medium tracking-[-0.01em] hover:bg-peach hover:text-ink transition-colors duration-300 whitespace-nowrap text-center"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-cream/20 to-transparent" />
      </div>
    </section>
  );
}
