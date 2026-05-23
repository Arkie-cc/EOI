"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is prospective nostalgia?",
    answer:
      "It's the feeling of appreciating a moment while you're still living it — knowing that someday, you'll look back and miss exactly this. arkie is designed to help you notice those moments more often.",
  },
  {
    question: "How do the prompts work?",
    answer:
      "You'll receive gentle notifications at random points during your day, inviting you to capture whatever's happening around you. You can customise how often and when they arrive.",
  },
  {
    question: "Is this another social media app?",
    answer:
      "Not in the traditional sense. There are no likes, no follower counts, no algorithm. arkie is a space to share real moments with people who actually matter to you.",
  },
  {
    question: "When will arkie be available?",
    answer:
      "We're currently in private development. Join the waitlist and we'll send you a note when early access opens. Early adopters will help shape the experience.",
  },
  {
    question: "Will my photos stay private?",
    answer:
      "Always. You choose what to share and with whom. Everything else stays in your personal archive — a collection of moments only you can see.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-[14px] font-medium pr-4 group-hover:text-foreground transition-colors duration-300">
          {question}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`text-accent/60 shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${open ? "max-h-40 pb-6" : "max-h-0"}`}
      >
        <p className="text-[13px] text-muted leading-[1.7]">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 sm:py-36 px-6 border-t border-border/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-accent/80 mb-5">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
            Questions &amp; answers.
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
