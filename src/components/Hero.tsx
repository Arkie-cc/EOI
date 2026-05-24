"use client";

import { useState } from "react";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";
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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const { error } = await getSupabase()
        .from("waitlist")
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === "23505") {
          setErrorMessage("You're already on the list — we'll be in touch.");
          setStatus("error");
        } else {
          throw error;
        }
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

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

            <div className="mt-10 animate-fade-in-d4">
              {status === "success" ? (
                <div className="border border-cream/10 rounded-[2px] p-6 bg-cream/5 backdrop-blur-sm max-w-md">
                  <p className="text-cream font-medium text-[15px] mb-1.5">
                    You&apos;re on the list.
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.04em] text-cream/50 leading-relaxed">
                    We&apos;ll send you a quiet note when arkie is ready. In the
                    meantime, keep noticing things.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="your@email.com"
                    className="flex-1 bg-cream/8 border border-cream/12 rounded-[2px] px-4 py-3 text-[13px] text-cream placeholder:text-cream/30 focus:outline-none focus:border-peach/40 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-cream text-ink px-6 py-3 rounded-[2px] text-[13px] font-medium tracking-[-0.01em] hover:bg-peach hover:text-ink transition-colors duration-300 disabled:opacity-50 whitespace-nowrap"
                  >
                    {status === "loading" ? "Joining..." : "Join the Waitlist"}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-peach text-[13px] mt-3">{errorMessage}</p>
              )}
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
