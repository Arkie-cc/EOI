"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";
import ScrollReveal from "@/components/ScrollReveal";

export default function SignUp() {
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
    <section id="signup" className="relative border-t border-cream/6 min-h-screen flex items-center text-center isolate">
      <div className="photo-section-bg" aria-hidden="true">
        <img
          src="/sunset-lamps.jpg"
          alt=""
          className="absolute -left-[5%] -top-[5%] w-[110%] h-[110%] max-w-none object-cover blur-[14px] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07050a]/60 via-[#07050a]/50 to-[#07050a]/80" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 relative z-[1]">
        <ScrollReveal className="max-w-[560px] mx-auto">
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-cream/55 uppercase inline-block mb-5">
            04 — Waitlist / Open
          </span>

          <h2 className="text-[clamp(30px,4.4vw,50px)] font-medium tracking-tight text-cream leading-[1.1] mb-5">
            Save yourself <span className="text-peach">a seat.</span>
          </h2>
          <p className="text-[15px] leading-relaxed text-cream/55 mb-9 max-w-[420px] mx-auto">
            We&apos;re letting people in slowly, in the order they arrive. No spam,
            no metrics, no marketing emails — just one quiet note when it&apos;s
            your turn.
          </p>

          {status === "success" ? (
            <div className="border border-peach/40 rounded-md p-6 bg-peach/10 text-left max-w-[480px] mx-auto">
              <h4 className="text-cream font-normal text-[18px] mb-1.5">
                You&apos;re on the list.
              </h4>
              <p className="text-cream/50 text-[13.5px]">
                We&apos;ll write to <b className="text-cream/70">{email}</b> when
                there&apos;s a seat. Until then, take a quiet photo for us.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="your.email@somewhere.quiet"
                className="w-full sm:flex-1 h-[46px] bg-cream/6 border border-cream/10 rounded-lg outline-none text-cream text-[14px] px-4 placeholder:text-cream/40 transition-all duration-300 focus:border-peach/40 focus:bg-cream/8"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="btn-accent w-full sm:w-auto h-[46px] px-6 rounded-lg text-[13px] font-medium tracking-[0.02em] whitespace-nowrap disabled:opacity-50"
              >
                {status === "loading" ? "Joining..." : "Save my seat"}
              </button>
            </div>
          )}

          {status === "error" && (
            <p className="text-peach text-[13px] mt-3 font-mono text-[10px] tracking-[0.12em] uppercase">
              {errorMessage}
            </p>
          )}

          <div className="mt-6 flex justify-center gap-6">
            <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/40 uppercase">
              No spam.
            </span>
            <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/40 uppercase">
              No tracking.
            </span>
            <span className="font-mono text-[9.5px] tracking-[0.16em] text-cream/40 uppercase">
              One quiet note.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
