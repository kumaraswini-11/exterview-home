"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AI_FEATURES = [
  {
    title: "Expert Led Interview",
    desc: "Every interview is conducted by an experienced interviewer, ensuring a personal and tailored candidate experience.",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68cb66afba523cfe539a76c3_Group%201597882368-p-2000.png",
  },
  {
    title: "Bulk Resume Parsing",
    desc: "Analyze 100s of resumes in seconds with AI Fit Scoring",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca4764674bea630f24acc3_Untitled%20design%20(15)-p-500.png",
  },
  {
    title: "AI Interview",
    desc: "90% interview completion rate, thanks to intelligent AI-driven nudges",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca46aa1210157235bafecb_Untitled%20design%20(17).png",
  },
  {
    title: "AI-Powered Candidate Analysis & Matching",
    desc: "Streamlining hiring by intelligently analyzing and matching candidates to the right roles using AI.",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca45d2abc4d53bd330b579_Untitled%20design%20(16).png",
  },
  {
    title: "Real-Time Analytics & Reporting",
    desc: "Access detailed reports on candidate performance, with insights backed by AI.",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca47b85d1ad184feac0392_Untitled%20design%20(16).png",
  },
  {
    title: "Automated AI Screening Interviews",
    desc: "Streamlines coordination between candidates and interviewers.",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca486e3b69569cafc951e0_Untitled%20design%20(17).png",
  },
  {
    title: "Smart Leaderboards",
    desc: "See candidate rankings at a glance across all stages.",
    image:
      "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68ca486e3b69569cafc951e0_Untitled%20design%20(17).png",
  },
] as const;

const INTEGRATIONS = [
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f24028f3f780e0ffd67a15_image%2098.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68efa3475f2ea1ed8cc77668_ADP.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f240ad5726a8b38a27a0aa_image%2013%20(1).png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68efa34810473ab3f5ca7a58_zoho.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68efa347a556b361aedd206e_darwinbox_590x250px.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68efa347e35885f5cd09eb7b_Bullhorn_logo_linear.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23acb1c5c2f52a9257a91_image%2011%20(1).png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23cab8998a8f8275bc207_image%2016.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f2426ce4eb24b705b430d9_Screenshot%202025-08-10%20at%2011.08.15%E2%80%AFPM%2011-p-2000.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23f8550ac1b997bf41b9e_image%2099.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23f2e5fd4c32548fada16_image%20100.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23cfbb86b268638935b14_image%20112.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23d2c39ac4d03966c2452_image%2017.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68f23faf6aebd7880f57bd20_image%2020.png",
  "https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/689c66c0316c9565ce19336e_logos-15.svg",
] as const;

function FeatureCard({
  title,
  desc,
  image,
  className,
}: {
  title: string;
  desc: string;
  image: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "rounded-4xl border-none text-black shadow-none transition-all hover:bg-blue-600 hover:text-white",
        className,
      )}
    >
      <CardContent className="flex h-full flex-col justify-between space-y-2 p-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-[18px] font-normal">{desc}</p>
        </div>
        <Image
          src={image}
          alt={title}
          width={317}
          height={150}
          className="object-contain"
        />
      </CardContent>
    </Card>
  );
}

export function AiSection() {
  return (
    <section
      className={cn(
        "mx-auto w-full space-y-12",
        LAYOUT.MAX_WIDTH,
        LAYOUT.PADDING_X,
        LAYOUT.SECTION_SPACING,
      )}
    >
      {/* Header */}
      <div className="space-y-4 text-center">
        <Badge className="px-6 py-1.5 text-sm font-bold">AI</Badge>
        <h2 className="text-[48px] font-semibold text-black capitalize">
          Comprehensive AI Hiring Suite
        </h2>
      </div>

      {/* Row 1 - Three equal columns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {AI_FEATURES.slice(0, 3).map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>

      {/* Row 2 - 2:3 split */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <FeatureCard {...AI_FEATURES[3]} className="lg:col-span-2" />
        <FeatureCard {...AI_FEATURES[4]} className="lg:col-span-3" />
      </div>

      {/* Row 3 - Two equal columns */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {AI_FEATURES.slice(5, 7).map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>

      {/* Integrations Section */}
      <div className="-mx-6 w-auto bg-[url('https://cdn.prod.website-files.com/68763d3ab7c300bc9ab75527/68763d3bb7c300bc9ab75775_integration%20bg%20effect.avif')] bg-cover bg-center py-12 md:-mx-16">
        <div
          className={cn(
            "mx-auto space-y-6",
            LAYOUT.MAX_WIDTH,
            LAYOUT.PADDING_X,
          )}
        >
          <h4 className="text-center text-5xl font-semibold text-black">
            Seamlessly Integrated with HRMS & <br /> ATS Platforms
          </h4>

          {/* Integration Logos Grid */}
          <div className="grid grid-cols-5 place-items-center gap-3">
            {INTEGRATIONS.map((src, i) => (
              <div
                key={i}
                className="flex h-24 w-full items-center justify-center rounded-lg bg-gray-300 p-2"
              >
                <Image
                  src={src}
                  alt={`Integration ${i + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              animatedGradient
              className="rounded-full text-sm font-semibold"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
