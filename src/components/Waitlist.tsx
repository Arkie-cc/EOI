"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

export default function Waitlist() {
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
    <section
      id="waitlist"
      className="py-28 sm:py-36 px-6 border-t border-border/20 relative overflow-hidden"
    >
      {/* Warm glow behind CTA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-br from-[#EB5500]/[0.06] to-[#FFE100]/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-lg mx-auto text-center">
        <p className="text-[13px] uppercase tracking-[0.2em] text-accent-gold/70 mb-5">
          Join Us
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">
          Don&apos;t let this moment
          <br />
          <span className="text-muted">pass you by.</span>
        </h2>
        <p className="text-[15px] text-muted mb-10 leading-relaxed">
          Be among the first to use arkie. No spam — just a quiet message
          when we&apos;re ready for you.
        </p>

        {status === "success" ? (
          <div className="bg-gradient-to-br from-accent-warm/[0.06] to-accent-gold/[0.04] border border-accent-warm/20 rounded-2xl p-8">
            <p className="bg-gradient-to-r from-accent-warm to-accent-gold bg-clip-text text-transparent font-medium mb-2">
              You&apos;re on the list.
            </p>
            <p className="text-[13px] text-muted">
              We&apos;ll send you a quiet note when arkie is ready.
              In the meantime, keep noticing things.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
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
              className="flex-1 bg-card/60 border border-border/40 rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent-warm/40 transition-colors duration-300"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-accent-warm to-accent-gold text-white px-7 py-3 rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-[0_2px_12px_rgba(235,85,0,0.25)]"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-accent-warm text-[13px] mt-4">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}
