import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Bokeh from "@/components/Bokeh";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "arkie — Capture moments before they fade",
  description:
    "arkie is a photo sharing app built on prospective nostalgia. Get prompted throughout your day to capture the moments that matter, before they become memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Bokeh />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
