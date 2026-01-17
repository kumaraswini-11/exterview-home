"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";

const BARS = [
  {
    value: "90%",
    label: "candidate satisfaction",
    barClass:
      "w-45 h-80 bg-[#0045d94d] rounded-t-3xl border-t-4 border-blue-600 shadow-lg",
  },
  {
    value: "10x",
    label: "Faster Hiring",
    barClass:
      "w-27 h-70 bg-[#0045d94d] border-t-4 border-blue-600/40 rounded-t-3xl shadow-lg",
  },
];

const STATS = [
  {
    value: "10 Mins",
    label: "Average interview scheduling time",
  },
  {
    value: "1 Mins",
    label: "Instant AI candidate reports",
  },
  {
    value: "90%",
    label: "Interview Completion Rate",
  },
  {
    value: "100%",
    label: "AI-led screening consistency",
  },
];

export function HiringImpact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-18">
      {/* Top container */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {/* Left side */}
        <div className="flex max-w-xl flex-1 flex-col gap-6 pb-16">
          <div className="inline-flex w-max items-center gap-3">
            <Image
              src="https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/687f704396765309929376ec_image%2024.png"
              alt="ChatGPT Icon"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <Badge className="px-6 py-1.5 text-sm font-semibold">
              10x Your Hiring
            </Badge>
          </div>

          <h2 className="text-left text-5xl font-bold text-black capitalize">
            We Help You Hire Faster, Make The Process Fairer, Enable Smarter
            Decisions, Scale With Ease, And Measure Real AI Impact.
          </h2>
        </div>

        {/* Right side bars */}
        <div className="flex items-end gap-10">
          {BARS.map(({ value, label, barClass }) => (
            <div key={label} className="flex flex-col items-start">
              <span className="text-5xl leading-none font-semibold text-black">
                {value}
              </span>
              <span className="mb-4 text-[18px] text-gray-700">{label}</span>
              <div className={barClass} />
            </div>
          ))}
        </div>
      </div>

      {/* Animated Divider */}
      <div className="relative mb-8">
        <div className="h-px w-full bg-gray-300" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-0.5 w-full origin-left bg-blue-600"
        />
      </div>

      {/* Bottom stats row */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-4xl font-semibold text-black">{value}</p>
            <p className="mt-1 text-[18px] text-[#14181f]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
