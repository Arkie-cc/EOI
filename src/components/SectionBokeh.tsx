const variants: Record<string, { size: number; top: string; left: string; duration: number; opacity: number }[]> = {
  about: [
    { size: 20, top: "12%", left: "8%", duration: 22, opacity: 0.15 },
    { size: 14, top: "35%", left: "72%", duration: 28, opacity: 0.12 },
    { size: 24, top: "60%", left: "45%", duration: 34, opacity: 0.1 },
    { size: 10, top: "20%", left: "88%", duration: 20, opacity: 0.18 },
    { size: 16, top: "78%", left: "22%", duration: 26, opacity: 0.13 },
    { size: 12, top: "50%", left: "65%", duration: 30, opacity: 0.11 },
  ],
  howItWorks: [
    { size: 18, top: "15%", left: "82%", duration: 25, opacity: 0.14 },
    { size: 22, top: "45%", left: "12%", duration: 32, opacity: 0.11 },
    { size: 12, top: "70%", left: "55%", duration: 20, opacity: 0.16 },
    { size: 16, top: "28%", left: "38%", duration: 28, opacity: 0.12 },
    { size: 10, top: "85%", left: "78%", duration: 24, opacity: 0.15 },
  ],
  signUp: [
    { size: 16, top: "18%", left: "25%", duration: 26, opacity: 0.14 },
    { size: 20, top: "55%", left: "75%", duration: 30, opacity: 0.11 },
    { size: 12, top: "38%", left: "50%", duration: 22, opacity: 0.16 },
    { size: 14, top: "72%", left: "15%", duration: 34, opacity: 0.12 },
    { size: 10, top: "25%", left: "85%", duration: 20, opacity: 0.17 },
  ],
};

const animations = ["bokeh-float-1", "bokeh-float-2", "bokeh-float-3"];

export default function SectionBokeh({ variant }: { variant: "about" | "howItWorks" | "signUp" }) {
  const orbs = variants[variant];
  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            opacity: orb.opacity,
            background: "radial-gradient(circle at center, rgba(232,180,160,0.6) 0%, rgba(228,168,144,0.2) 40%, transparent 70%)",
            filter: "blur(4px)",
            animation: `${animations[i % 3]} ${orb.duration}s ease-in-out infinite`,
          }}
        />
      ))}
    </>
  );
}
