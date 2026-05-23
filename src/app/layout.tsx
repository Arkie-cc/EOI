import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "arkie — the moments you'll miss the most",
  description:
    "arkie is a photo-sharing app for the quiet, mundane moments — the ones that feel like nothing now but everything later. Join the waitlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body
        className="min-h-screen"
        style={{ background: "#F2EAE1", color: "#232733" }}
      >
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
