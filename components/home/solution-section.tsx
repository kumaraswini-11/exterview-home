"use client";

import {
  CalendarIcon,
  MilestoneIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Image from "next/image";

import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: SlidersHorizontalIcon,
    title: "Live Hiring KPIs",
    description:
      "Visualize and track every stage of the sales process. Help users manage leads.",
  },
  {
    icon: CalendarIcon,
    title: "Predictive Hiring Analytics",
    description:
      "Reduces manual effort and increases team efficiency. Focus on leads most likely to convert and saving time.",
  },
  {
    icon: MilestoneIcon,
    title: "24/7 AI Chatbot Support",
    description:
      "Detailed sales insights with performance metrics, forecasts, and customizable reports.",
  },
] as const;

// Compliance/certification logos
const COMPLIANCE_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24103b7e55eca70579885_Vector.png",
    alt: "VAPT",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f2416a4447263b9ed56415_Vector%20(1).png",
    alt: "GDPR",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241692ca6c90773fca318_Vector%20(2).png",
    alt: "ISO",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169e3e80e36a346beb9_Vector%20(3).png",
    alt: "HIPAA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241699d262f7549f0662b_Container.png",
    alt: "CERTN",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169cd66e2d4f4e50f8d_Vector%20(4).png",
    alt: "AICPA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f241691196450b33e4b375_Container%20(1).png",
    alt: "CCPA",
  },
  {
    src: "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24169221daaea94511a19_image%2023.png",
    alt: "Compliance",
  },
] as const;

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* Icon + Title Row */}
      <div className="flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Icon className="size-5" />
        </div>

        <h3 className="text-2xl font-medium text-black">{title}</h3>
      </div>

      {/* Description */}
      <p className="ml-3 text-base text-black/80">{description}</p>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section
      className={cn(
        "mx-auto w-full",
        LAYOUT.MAX_WIDTH,
        LAYOUT.PADDING_X,
        LAYOUT.SECTION_SPACING,
      )}
    >
      {/* Header */}
      <SectionHeader badge="Solutions" title="Solutions for Your Enterprise" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Card - Features */}
        <Card className="rounded-4xl bg-[#f3f3f3] shadow-none">
          <CardContent className="space-y-10 p-6">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </CardContent>
        </Card>

        {/* Right Card - Client Satisfaction */}
        <Card className="rounded-4xl bg-black text-white shadow-none">
          <CardContent className="flex flex-row gap-12 p-8">
            {/* Left Text Block */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-lg font-medium">Client Satisfaction</h3>
              <p className="text-7xl font-medium">90%</p>
              <p className="text-[20px] font-semibold">
                Personalized <br /> Candidate Feedback
              </p>

              <p className="text-base text-white/80">
                We take pride in our journey <br />
                marked by powerful <br />
                collaborations
              </p>
            </div>

            {/* Compliance Logos Grid */}
            <div className="grid flex-1 grid-cols-2 place-items-center gap-6">
              {COMPLIANCE_LOGOS.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
