import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Exterview.ai",
    default: "Exterview.ai | AI-Powered Talent Intelligence Platform",
  },
  description:
    "Explore a pixel-perfect, high-performance replica of Exterview.ai. Built with Next.js, React, and Tailwind CSS to demonstrate modern web architecture and responsive design.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "AI Hiring",
    "Exterview Clone",
    "Landing Page",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
