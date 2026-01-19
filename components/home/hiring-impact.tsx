"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { HIRING_STATS, IMPACT_BARS, IMAGES, LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

function StatBar({
  value,
  label,
  barClass,
}: {
  value: string;
  label: string;
  barClass: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-5xl leading-none font-semibold text-black">
        {value}
      </span>
      <span className="mb-4 text-[18px] text-gray-700">{label}</span>
      <div className={barClass} />
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-semibold text-black">{value}</p>
      <p className="mt-1 text-[18px] text-[#14181f]">{label}</p>
    </div>
  );
}

export function HiringImpact() {
  return (
    <section
      className={cn(
        "mx-auto",
        LAYOUT.MAX_WIDTH,
        LAYOUT.PADDING_X,
        LAYOUT.SECTION_SPACING,
      )}
    >
      {/* Top container */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {/* Left side - Text content */}
        <div className="flex max-w-xl flex-1 flex-col gap-6 pb-16">
          <div className="inline-flex w-max items-center gap-3">
            <Image
              src={IMAGES.chatGPTIcon}
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

        {/* Right sidebar */}
        <div className="flex items-end gap-10">
          {IMPACT_BARS.map((bar) => (
            <StatBar key={bar.label} {...bar} />
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

      {/* Bottom stats grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {HIRING_STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
