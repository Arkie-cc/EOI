"use client";

import { useState } from "react";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";
import TextRotator from "@/components/TextRotator";

const rotatingWords = [
  "home cooked meals",
  "daily walks",
  "commute to work",
  "spot at lunch",
  "parent's laugh",
  "dad's favourite joke",
  "mum's voice",
  "family in the kitchen",
  "pet at the door",
  "everyday moments",
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
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.07] saturate-[0.6]"
          style={{ animation: "soft-drift 40s ease-in-out infinite" }}
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#E8B4A015_0%,transparent_60%)]" />
      </div>

      <header className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-14 pt-8 pb-7 flex justify-between items-start border-b border-ink/14">
        <span className="font-light text-[22px] tracking-[-0.02em] text-ink">
          arkie<span className="text-peach font-normal">.</span>
        </span>
        <div className="font-mono text-[11px] tracking-[0.04em] text-slate uppercase text-right hidden sm:block">
          <div>Expression of Interest</div>
          <div className="mt-1 text-coral">Mundane moments · preserved</div>
        </div>
      </header>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-14 py-16 sm:py-0">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <div className="flex items-baseline gap-2.5 mb-6">
                <span className="font-mono text-[11px] tracking-[0.08em] text-coral uppercase">
                  01 — Waitlist
                </span>
                <span className="font-mono text-[11px] tracking-[0.08em] text-slate uppercase">
                  / open
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in-d1 font-light text-[clamp(44px,8vw,120px)] leading-[0.92] tracking-[-0.04em] text-ink mb-1">
              Some day, you&apos;ll miss
            </h1>

            <div className="animate-fade-in-d2">
              <TextRotator words={rotatingWords} intervalMs={2500} />
            </div>

            <p className="animate-fade-in-d3 mt-7 text-[16px] text-ink-2 font-normal max-w-[46ch] leading-[1.55]">
              arkie is a photo-sharing app for the quiet, mundane moments — the
              ones that feel like nothing now but everything later.
            </p>

            <div className="mt-10 animate-fade-in-d4">
              {status === "success" ? (
                <div className="border border-ink/14 rounded-[2px] p-6 bg-cream-2/50 max-w-md">
                  <p className="text-ink font-medium text-[15px] mb-1.5">
                    You&apos;re on the list.
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.04em] text-slate leading-relaxed">
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
                    className="flex-1 bg-cream-2/60 border border-ink/14 rounded-[2px] px-4 py-3 text-[13px] text-ink placeholder:text-lilac focus:outline-none focus:border-peach/60 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-ink text-cream px-6 py-3 rounded-[2px] text-[13px] font-medium tracking-[-0.01em] hover:bg-ink-2 transition-colors duration-300 disabled:opacity-50 whitespace-nowrap"
                  >
                    {status === "loading" ? "Joining..." : "Join the Waitlist"}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-coral text-[13px] mt-3">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate/30 to-transparent" />
      </div>
    </section>
  );
}
