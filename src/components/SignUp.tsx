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
    <section id="signup" className="relative border-t border-cream/6 min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-14 py-24 sm:py-32 w-full">
        <ScrollReveal className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-peach" />
            <span className="font-mono text-[12px] tracking-[0.06em] text-cream/40 uppercase">
              Join the waitlist
            </span>
          </div>

          <h2 className="text-[clamp(24px,4vw,42px)] font-medium tracking-tight text-cream leading-[1.2] mb-4">
            Placeholder heading text.
          </h2>
          <p className="text-[16px] leading-relaxed text-cream/40 mb-10">
            Placeholder subtitle text to be updated later.
          </p>

          {status === "success" ? (
            <div className="border border-cream/10 rounded-[2px] p-6 bg-cream/5 backdrop-blur-sm text-left">
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
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
        </ScrollReveal>
      </div>
    </section>
  );
}
